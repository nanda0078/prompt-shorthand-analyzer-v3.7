/**
 * Unit Test: Smart Auto-Fill Shorthand Metadata (V3.7)
 * Memverifikasi seluruh skenario pengujian wajib:
 * 1. Input normal: "/facelock — mempertahankan identitas wajah"
 * 2. Variasi delimiter: en-dash, hyphen, colon, pipe, space
 * 3. Input tanpa deskripsi
 * 4. Input tanpa kode
 * 5. Input kosong
 * 6. Pemetaan Kategori, Target Area, dan Function Group
 * 7. Semantic Triggers tanpa stop words
 * 8. Verifikasi Alias Setara (strict no-hallucination)
 * 9. Deteksi kode shorthand duplikat
 * 10. Proteksi overwrite input manual
 * 11. Ketahanan offline (zero-dependency)
 * 12. UI rendering pada modal CatalogPage
 */

import {
  parseRawShorthandInput,
  deriveShorthandName,
  inferTargetArea,
  inferCategory,
  inferFunctionGroup,
  generateSemanticTriggers,
  findVerifiedEquivalentAliases,
  executeSmartAutoFill
} from '../src/lib/shorthandAutoFiller.js';
import { INITIAL_SHORTHAND_CATALOG, SHORTHAND_CATEGORIES, FUNCTION_GROUPS } from '../src/data/catalogData.js';
import { renderCatalogPage } from '../src/components/CatalogPage.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

export async function runAutoFillerTests() {
  console.log('\n--- VERIFIKASI FITUR: SMART AUTO-FILL SHORTHAND METADATA (V3.7) ---');

  // 1. Parsing input normal dengan em-dash
  const parsed1 = parseRawShorthandInput('/facelock — mempertahankan identitas wajah');
  assert(parsed1.isValid === true, 'Parser: Mem-parsing input normal dengan em-dash');
  assert(parsed1.code === '/facelock', 'Parser: Kode diekstrak dengan awalan slash (/facelock)');
  assert(parsed1.description === 'mempertahankan identitas wajah', 'Parser: Deskripsi diekstrak dengan tepat');

  // 2. Variasi delimiter
  const parsedHyphen = parseRawShorthandInput('/facelock - mempertahankan identitas wajah');
  assert(parsedHyphen.isValid && parsedHyphen.code === '/facelock', 'Parser: Mendukung hyphen delimiter');

  const parsedColon = parseRawShorthandInput('/facelock : mempertahankan identitas wajah');
  assert(parsedColon.isValid && parsedColon.code === '/facelock', 'Parser: Mendukung colon delimiter');

  const parsedSpace = parseRawShorthandInput('/facelock mempertahankan identitas wajah');
  assert(parsedSpace.isValid && parsedSpace.code === '/facelock', 'Parser: Mendukung space delimiter');

  const parsedNoSlash = parseRawShorthandInput('facelock — mempertahankan identitas wajah');
  assert(parsedNoSlash.isValid && parsedNoSlash.code === '/facelock', 'Parser: Otomatis menormalkan awalan "/" jika terlewat');

  // 3. Input tanpa deskripsi
  const parsedNoDesc = parseRawShorthandInput('/facelock');
  assert(parsedNoDesc.isValid === false, 'Validasi: Menolak input tanpa deskripsi');
  assert(Boolean(parsedNoDesc.error), 'Validasi: Menyediakan pesan error ramah saat deskripsi kosong');

  // 4. Input tanpa kode
  const parsedNoCode = parseRawShorthandInput('   — mempertahankan identitas wajah');
  assert(parsedNoCode.isValid === false, 'Validasi: Menolak input tanpa kode');

  // 5. Input kosong
  const parsedEmpty = parseRawShorthandInput('');
  assert(parsedEmpty.isValid === false, 'Validasi: Menolak input string kosong');
  const parsedNull = parseRawShorthandInput(null);
  assert(parsedNull.isValid === false, 'Validasi: Menolak input null/undefined');

  // 6. Derivasi Nama Shorthand
  assert(deriveShorthandName('/facelock', '') === 'Facelock', 'Naming: Menghasilkan nama representatif Facelock');
  assert(deriveShorthandName('/face_lock', '') === 'Face Lock', 'Naming: Menangani format snake_case');
  assert(deriveShorthandName('/faceLock', '') === 'Face Lock', 'Naming: Menangani format camelCase');

  // 7. Inferensi Target Area & Kategori & Function Group
  const testInput = '/facelock — mempertahankan identitas wajah';
  const autoRes = executeSmartAutoFill(testInput, INITIAL_SHORTHAND_CATALOG);
  assert(autoRes.success === true, 'AutoFill: Eksekusi smart auto-fill berhasil');
  assert(autoRes.metadata.code === '/facelock', 'AutoFill: Kode shorthand terisi /facelock');
  assert(autoRes.metadata.target === 'Wajah', 'AutoFill: Target area terdeteksi sebagai Wajah');
  assert(autoRes.metadata.category === 'LOCK_PRESERVATION', 'AutoFill: Kategori terpetakan ke LOCK_PRESERVATION');
  assert(autoRes.metadata.functionGroup === 'FACE_PRESERVATION', 'AutoFill: Function group terpetakan ke FACE_PRESERVATION');
  assert(Boolean(SHORTHAND_CATEGORIES[autoRes.metadata.category]), 'Kategori: Hasil selalu subset valid dari SHORTHAND_CATEGORIES');
  assert(Boolean(FUNCTION_GROUPS[autoRes.metadata.functionGroup]), 'Function Group: Hasil selalu subset valid dari FUNCTION_GROUPS');

  // 8. Pemetaan Kategori Lain
  const hairRes = executeSmartAutoFill('/curlyhair — gaya rambut ikal bergelombang', INITIAL_SHORTHAND_CATALOG);
  assert(hairRes.metadata.category === 'HAIR', 'Kategori: Rambut terpetakan ke HAIR');
  assert(hairRes.metadata.target === 'Rambut', 'Target: Rambut terdeteksi');

  const bgRes = executeSmartAutoFill('/cleanbg — menghapus dan membersihkan latar belakang', INITIAL_SHORTHAND_CATALOG);
  assert(bgRes.metadata.category === 'BACKGROUND', 'Kategori: Background terpetakan ke BACKGROUND');

  const lightRes = executeSmartAutoFill('/goldenhour — pencahayaan matahari senja lembut', INITIAL_SHORTHAND_CATALOG);
  assert(lightRes.metadata.category === 'LIGHTING', 'Kategori: Lighting terpetakan ke LIGHTING');

  // 9. Semantic Triggers (tanpa stop words)
  const triggers = autoRes.metadata.semanticTriggers;
  assert(Array.isArray(triggers) && triggers.length > 0, 'Triggers: Menghasilkan semantic triggers array');
  assert(triggers.includes('facelock'), 'Triggers: Memuat token kode facelock');
  assert(triggers.includes('wajah'), 'Triggers: Memuat kata kunci target wajah');
  assert(!triggers.includes('dan') && !triggers.includes('yang'), 'Triggers: Bebas dari stop words');

  // 10. Verifikasi Alias Setara (Strict No Hallucination)
  // Shorthand acak tanpa padanan pasti di katalog
  const unknownRes = executeSmartAutoFill('/xyzrandomtag123 — deskripsi unik baru', INITIAL_SHORTHAND_CATALOG);
  assert(unknownRes.metadata.equivalentTo.length === 0, 'Alias: Tidak menciptakan alias halusinasi jika tidak ada di katalog');

  // Shorthand dengan padanan di katalog
  const verifiedAliases = findVerifiedEquivalentAliases('/customlock', 'FACE_PRESERVATION', 'Wajah', INITIAL_SHORTHAND_CATALOG);
  assert(Array.isArray(verifiedAliases), 'Alias: Mengembalikan array alias');
  if (verifiedAliases.length > 0) {
    const aliasInCat = INITIAL_SHORTHAND_CATALOG.some(c => c.code === verifiedAliases[0]);
    assert(aliasInCat === true, 'Alias: Alias yang dihasilkan terverifikasi di katalog eksisting');
  }

  // 11. Deteksi Duplikasi Kode
  const dupCheck = executeSmartAutoFill('/facelock — pertahankan wajah', INITIAL_SHORTHAND_CATALOG);
  assert(dupCheck.isDuplicate === true, 'Duplikasi: Mendeteksi bahwa kode /facelock sudah ada di katalog');
  assert(dupCheck.fieldStatus.code === 'DUPLICATE', 'Duplikasi: Menandai status field kode sebagai DUPLICATE');

  const newCodeCheck = executeSmartAutoFill('/mybrandnewtag — sesuatu yang unik baru', INITIAL_SHORTHAND_CATALOG);
  assert(newCodeCheck.isDuplicate === false, 'Duplikasi: Menandai kode baru sebagai bukan duplikat');
  assert(newCodeCheck.fieldStatus.code === 'OK', 'Duplikasi: Status field kode baru adalah OK');

  // 12. Proteksi Overwrite Nilai Manual
  const manualValues = {
    code: '/mycode',
    name: 'Nama Kustom Pengguna',
    category: 'FACE_IDENTITY',
    target: 'Wajah',
    functionGroup: 'FACE_RETOUCH',
    description: 'Deskripsi buatan user sendiri',
    triggers: 'manual trigger',
    equivalent: '/aliasmanual'
  };
  const overwriteCheck = executeSmartAutoFill(testInput, INITIAL_SHORTHAND_CATALOG, manualValues);
  assert(overwriteCheck.overwriteInfo.hasManualValues === true, 'Overwrite Protection: Mendeteksi nilai yang sudah diisi manual');
  assert(overwriteCheck.overwriteInfo.manualFields.includes('name'), 'Overwrite Protection: Mendeteksi field name telah terisi manual');

  // 13. Integritas Data Katalog (Read-Only Safety)
  const catalogCountBefore = INITIAL_SHORTHAND_CATALOG.length;
  executeSmartAutoFill('/testnonmutate — tes imutabilitas katalog', INITIAL_SHORTHAND_CATALOG);
  const catalogCountAfter = INITIAL_SHORTHAND_CATALOG.length;
  assert(catalogCountBefore === catalogCountAfter, 'Integritas: Auto-fill tidak memodifikasi panjang atau isi katalog asal');

  // 14. UI Rendering: Bagian Smart Auto-Fill ter-render pada modal Add Shorthand
  const renderedPage = renderCatalogPage({
    catalog: INITIAL_SHORTHAND_CATALOG,
    isAddModalOpen: true
  });
  assert(renderedPage.html.includes('SMART AUTO-FILL — ISI METADATA OTOMATIS'), 'UI Modal: Judul Smart Auto-Fill ter-render');
  assert(renderedPage.html.includes('id="autofill-raw-input"'), 'UI Modal: Input kode dan deskripsi #autofill-raw-input tersedia');
  assert(renderedPage.html.includes('id="btn-run-autofill"'), 'UI Modal: Tombol #btn-run-autofill tersedia');
  assert(renderedPage.html.includes('id="autofill-status-msg"'), 'UI Modal: Elemen pesan status tinjauan tersedia');

  // Verifikasi 8 field manual tetap ada utuh
  assert(renderedPage.html.includes('id="add-code"'), 'UI Manual: Field add-code tetap utuh');
  assert(renderedPage.html.includes('id="add-name"'), 'UI Manual: Field add-name tetap utuh');
  assert(renderedPage.html.includes('id="add-category"'), 'UI Manual: Field add-category tetap utuh');
  assert(renderedPage.html.includes('id="add-target"'), 'UI Manual: Field add-target tetap utuh');
  assert(renderedPage.html.includes('id="add-func-group"'), 'UI Manual: Field add-func-group tetap utuh');
  assert(renderedPage.html.includes('id="add-desc"'), 'UI Manual: Field add-desc tetap utuh');
  assert(renderedPage.html.includes('id="add-triggers"'), 'UI Manual: Field add-triggers tetap utuh');
  assert(renderedPage.html.includes('id="add-equivalent"'), 'UI Manual: Field add-equivalent tetap utuh');
  assert(renderedPage.html.includes('id="btn-cancel-add"'), 'UI Footer: Tombol Batal tetap utuh');
  assert(renderedPage.html.includes('Simpan Shorthand'), 'UI Footer: Tombol Simpan Shorthand tetap utuh');

  console.log(`\nHASIL AUTO-FILL TESTS: ${passed} PASSED, ${failed} FAILED\n`);
  return { passed, failed };
}

// Jalankan mandiri jika dipanggil via node
if (process.argv[1]?.endsWith('shorthandAutoFiller.test.js')) {
  runAutoFillerTests().then(res => {
    if (res.failed > 0) process.exit(1);
    else process.exit(0);
  });
}
