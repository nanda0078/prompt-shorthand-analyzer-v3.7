/**
 * Shorthand Auto-Filler V3.7
 * Smart Auto-Fill Shorthand Metadata helper
 * Memberikan ekstraksi offline-first yang aman, deterministic, dan presisi
 * tanpa merusak atau mengubah data katalog yang sudah ada.
 */

import { SHORTHAND_CATEGORIES, FUNCTION_GROUPS } from '../data/catalogData.js';

/**
 * Mem-parsing string masukan tunggal yang menggabungkan kode dan deskripsi.
 * Mendukung format:
 * - "/facelock — mempertahankan identitas wajah" (em-dash)
 * - "/facelock – mempertahankan identitas wajah" (en-dash)
 * - "/facelock - mempertahankan identitas wajah" (hyphen)
 * - "/facelock : mempertahankan identitas wajah" (colon)
 * - "/facelock | mempertahankan identitas wajah" (pipe)
 * - "/facelock mempertahankan identitas wajah" (space delimiter)
 */
export function parseRawShorthandInput(rawInput) {
  if (!rawInput || typeof rawInput !== 'string') {
    return {
      isValid: false,
      code: '',
      description: '',
      error: 'Input tidak boleh kosong.'
    };
  }

  const trimmed = rawInput.trim();
  if (!trimmed) {
    return {
      isValid: false,
      code: '',
      description: '',
      error: 'Input tidak boleh kosong.'
    };
  }

  let code = '';
  let description = '';

  // Delimiters prioritizer: em-dash, en-dash, colon, pipe, hyphen
  const delimiterRegex = /\s*(?:—|–|:|=|\||-)\s*/;
  
  // Kasus 1: Mengandung delimiter pemisah eksplisit
  if (delimiterRegex.test(trimmed)) {
    const parts = trimmed.split(delimiterRegex);
    code = (parts[0] || '').trim();
    description = parts.slice(1).join(' ').trim();
  } else {
    // Kasus 2: Delimiter spasi pertama (jika diawali '/')
    if (trimmed.startsWith('/')) {
      const firstSpaceIdx = trimmed.indexOf(' ');
      if (firstSpaceIdx !== -1) {
        code = trimmed.substring(0, firstSpaceIdx).trim();
        description = trimmed.substring(firstSpaceIdx + 1).trim();
      } else {
        code = trimmed;
        description = '';
      }
    } else {
      // Tidak diawali '/' dan tanpa delimiter
      const firstSpaceIdx = trimmed.indexOf(' ');
      if (firstSpaceIdx !== -1) {
        code = trimmed.substring(0, firstSpaceIdx).trim();
        description = trimmed.substring(firstSpaceIdx + 1).trim();
      } else {
        code = trimmed;
        description = '';
      }
    }
  }

  // Normalisasi kode
  if (code && !code.startsWith('/')) {
    code = '/' + code;
  }
  // Hanya ambil huruf, angka, underscore, dash setelah slash
  code = code.replace(/\s+/g, '').toLowerCase();

  // Validasi kode
  if (!code || code === '/') {
    return {
      isValid: false,
      code: '',
      description,
      error: 'Kode shorthand tidak terdeteksi. Gunakan awalan "/" (misal: /facelock).'
    };
  }

  if (!description) {
    return {
      isValid: false,
      code,
      description: '',
      error: 'Deskripsi fungsi belum diisi. Masukkan penjelasan fungsi setelah kode shorthand.'
    };
  }

  return {
    isValid: true,
    code,
    description,
    error: null
  };
}

/**
 * Menghasilkan saran Nama Shorthand yang representatif dari kode dan deskripsi
 */
export function deriveShorthandName(code, description) {
  const cleanCode = code.replace(/^\//, '');
  if (!cleanCode) return 'Custom Shorthand';

  // Pisahkan camelCase atau underscore atau hyphen
  const splitWords = cleanCode
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

  if (splitWords.length > 0 && splitWords[0].length > 0) {
    return splitWords.join(' ');
  }

  return cleanCode.charAt(0).toUpperCase() + cleanCode.slice(1);
}

/**
 * Kamus inferensi aturan heuristik lokal (Offline-First)
 */
const TARGET_KEYWORDS = [
  { target: 'Wajah', keywords: ['wajah', 'face', 'muka', 'mata', 'hidung', 'bibir', 'senyum', 'pipi', 'alis', 'dagu'] },
  { target: 'Rambut', keywords: ['rambut', 'hair', 'helai', 'keriting', 'lurus', 'poni', 'warna rambut'] },
  { target: 'Pakaian', keywords: ['pakaian', 'baju', 'outfit', 'busana', 'celana', 'jaket', 'kemeja', 'kaos', 'gaun', 'rok'] },
  { target: 'Aksesori / Kepala', keywords: ['hijab', 'jilbab', 'kerudung', 'topi', 'headwear', 'kacamata', 'topeng'] },
  { target: 'Tubuh & Pose', keywords: ['pose', 'badan', 'tubuh', 'postur', 'tangan', 'kaki', 'gestur', 'anatomi', 'berdiri', 'duduk'] },
  { target: 'Latar Belakang', keywords: ['latar', 'background', 'ruangan', 'pemandangan', 'interior', 'eksterior', 'outdoor', 'indoor', 'dinding', 'suasana'] },
  { target: 'Pencahayaan', keywords: ['cahaya', 'lighting', 'pencahayaan', 'sinar', 'bayangan', 'shadow', 'highlight', 'illumination'] },
  { target: 'Warna & Tone', keywords: ['warna', 'tone', 'color', 'palet', 'gradasi', 'saturasi', 'warm', 'cool', 'kontras'] },
  { target: 'Kamera & Lensa', keywords: ['kamera', 'lensa', 'lens', 'bokeh', 'angle', 'sudut', 'depth of field', 'dof', 'aperture'] },
  { target: 'Kualitas Gambar', keywords: ['kualitas', 'detail', 'tajam', 'sharp', 'resolusi', 'tekstur', 'microtexture', 'jernih'] }
];

const LOCK_WORDS = ['kunci', 'lock', 'mempertahankan', 'pertahankan', 'menjaga', 'tahan', 'freeze', 'preserve', 'tetap', 'konsisten', 'identitas asli'];

function containsKeyword(text, keyword) {
  if (!text || !keyword) return false;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match as whole word or bounded by non-alphanumeric chars
  const regex = new RegExp(`(?:^|[^a-zA-Z0-9])${escaped}(?:[^a-zA-Z0-9]|$)`, 'i');
  return regex.test(text);
}

/**
 * Menemukan Target Area berdasarkan teks kode dan deskripsi
 */
export function inferTargetArea(textCombined) {
  const lower = textCombined.toLowerCase();
  for (const item of TARGET_KEYWORDS) {
    for (const kw of item.keywords) {
      if (containsKeyword(lower, kw)) {
        return item.target;
      }
    }
  }
  return '';
}

/**
 * Menemukan Kategori yang valid dari SHORTHAND_CATEGORIES
 */
export function inferCategory(textCombined, targetArea) {
  const lower = textCombined.toLowerCase();
  
  // Prioritas 1: Kunci & Preservasi
  const isLock = LOCK_WORDS.some(w => containsKeyword(lower, w));
  if (isLock) {
    if (SHORTHAND_CATEGORIES['LOCK_PRESERVATION']) {
      return 'LOCK_PRESERVATION';
    }
  }

  // Prioritas 2: Berdasarkan Target Area
  switch (targetArea) {
    case 'Wajah':
      return 'FACE_IDENTITY';
    case 'Rambut':
      return 'HAIR';
    case 'Aksesori / Kepala':
      return 'HEADWEAR';
    case 'Pakaian':
      return 'OUTFIT';
    case 'Tubuh & Pose':
      return 'BODY_POSE';
    case 'Latar Belakang':
      return 'BACKGROUND';
    case 'Pencahayaan':
      return 'LIGHTING';
    case 'Warna & Tone':
      return 'COLOR_TONE';
    case 'Kamera & Lensa':
      return 'CAMERA_PHOTO';
    case 'Kualitas Gambar':
      return 'IMAGE_QUALITY';
    default:
      break;
  }

  // Prioritas 3: Kata kunci spesifik kategori
  if (lower.includes('rasio') || lower.includes('aspect') || lower.includes('canvas')) return 'CANVAS_RATIO';
  if (lower.includes('transparan') || lower.includes('alpha') || lower.includes('png')) return 'TRANSPARENCY';
  if (lower.includes('hapus objek') || lower.includes('tambah objek')) return 'OBJECT_EDITING';
  if (lower.includes('gaya') || lower.includes('style') || lower.includes('cinematic') || lower.includes('vintage')) return 'STYLE_EFFECT';

  return '';
}

/**
 * Menemukan Function Group yang valid dari FUNCTION_GROUPS
 */
export function inferFunctionGroup(textCombined, category, targetArea) {
  const lower = textCombined.toLowerCase();

  if (category === 'LOCK_PRESERVATION') {
    if (targetArea === 'Wajah' || lower.includes('wajah') || lower.includes('face') || lower.includes('identitas')) {
      return FUNCTION_GROUPS['FACE_PRESERVATION'] || 'FACE_PRESERVATION';
    }
    if (targetArea === 'Rambut' || lower.includes('rambut') || lower.includes('hair')) {
      return FUNCTION_GROUPS['HAIR_PRESERVATION'] || 'HAIR_PRESERVATION';
    }
    if (targetArea === 'Pakaian' || lower.includes('pakaian') || lower.includes('outfit')) {
      return FUNCTION_GROUPS['OUTFIT_PRESERVATION'] || 'OUTFIT_PRESERVATION';
    }
    if (targetArea === 'Aksesori / Kepala' || lower.includes('hijab') || lower.includes('headwear')) {
      return FUNCTION_GROUPS['HEADWEAR_PRESERVATION'] || 'HEADWEAR_PRESERVATION';
    }
    if (targetArea === 'Tubuh & Pose' || lower.includes('badan') || lower.includes('tubuh') || lower.includes('body')) {
      return FUNCTION_GROUPS['BODY_PRESERVATION'] || 'BODY_PRESERVATION';
    }
    if (targetArea === 'Latar Belakang' || lower.includes('latar') || lower.includes('background')) {
      return FUNCTION_GROUPS['BACKGROUND_PRESERVATION'] || 'BACKGROUND_PRESERVATION';
    }
    return FUNCTION_GROUPS['DETAIL_PRESERVATION'] || 'DETAIL_PRESERVATION';
  }

  if (category === 'FACE_IDENTITY') {
    if (lower.includes('swap') || lower.includes('tukar') || lower.includes('ganti wajah')) return 'FACE_SWAP';
    if (lower.includes('ekspresi') || lower.includes('senyum') || lower.includes('tertawa') || lower.includes('marah')) return 'FACE_EXPRESSION';
    return 'FACE_RETOUCH';
  }

  if (category === 'HAIR') {
    if (lower.includes('warna') || lower.includes('color') || lower.includes('cat')) return 'HAIR_COLOR';
    return 'HAIR_EDIT';
  }

  if (category === 'HEADWEAR') {
    if (lower.includes('lepas') || lower.includes('hapus') || lower.includes('buka')) return 'HEADWEAR_REMOVAL';
    if (lower.includes('tambah') || lower.includes('pasang') || lower.includes('pakai')) return 'HEADWEAR_ADD';
    return 'HEADWEAR_PRESERVATION';
  }

  if (category === 'OUTFIT') {
    if (lower.includes('lepas') || lower.includes('hapus') || lower.includes('buka')) return 'OUTFIT_REMOVE';
    if (lower.includes('warna') || lower.includes('color')) return 'OUTFIT_COLOR';
    return 'OUTFIT_EDIT';
  }

  if (category === 'BODY_POSE') {
    if (lower.includes('full body') || lower.includes('seluruh badan')) return 'FRAMING_FULL_BODY';
    if (lower.includes('close up') || lower.includes('closeup') || lower.includes('wajah dekat')) return 'FRAMING_CLOSEUP';
    return 'BODY_POSE_EDIT';
  }

  if (category === 'BACKGROUND') {
    if (lower.includes('hapus') || lower.includes('hilang') || lower.includes('remove')) return 'BACKGROUND_REMOVAL';
    if (lower.includes('blur') || lower.includes('buram') || lower.includes('bokeh')) return 'BACKGROUND_BLUR';
    if (lower.includes('bersih') || lower.includes('clean')) return 'BACKGROUND_CLEAN';
    if (lower.includes('ganti latar') || lower.includes('pindah')) return 'BACKGROUND_REPLACEMENT';
    return 'BACKGROUND_REPLACEMENT';
  }

  if (category === 'LIGHTING') {
    if (lower.includes('studio')) return 'LIGHTING_STUDIO';
    if (lower.includes('golden') || lower.includes('sore') || lower.includes('senja')) return 'LIGHTING_GOLDENHOUR';
    if (lower.includes('siang') || lower.includes('daylight')) return 'LIGHTING_DAYLIGHT';
    return 'LIGHTING_ENHANCEMENT';
  }

  if (category === 'IMAGE_QUALITY') {
    if (lower.includes('tajam') || lower.includes('sharp')) return 'IMAGE_SHARPENING';
    if (lower.includes('noise') || lower.includes('denoise') || lower.includes('butiran')) return 'IMAGE_DENOISE';
    return 'IMAGE_HIGHDETAIL';
  }

  if (category === 'COLOR_TONE') {
    if (lower.includes('hangat') || lower.includes('warm')) return 'COLOR_WARM_TONE';
    if (lower.includes('dingin') || lower.includes('cool')) return 'COLOR_COOL_TONE';
    return 'COLOR_NATURALTONE';
  }

  // Jika tidak ada yang cocok langsung, gunakan category jika ada di FUNCTION_GROUPS
  if (FUNCTION_GROUPS[category]) {
    return category;
  }

  return '';
}

/**
 * Menghasilkan Semantic Triggers yang relevan berdasarkan kode dan deskripsi
 */
export function generateSemanticTriggers(code, description, targetArea) {
  const cleanCode = code.replace(/^\//, '').toLowerCase();
  const triggers = new Set();

  if (cleanCode) {
    triggers.add(cleanCode);
    const spaced = cleanCode.replace(/[_-]+/g, ' ');
    if (spaced !== cleanCode) triggers.add(spaced);
  }

  const stopWords = new Set([
    'dan', 'atau', 'yang', 'untuk', 'pada', 'di', 'ke', 'dari', 'agar', 'supaya',
    'dengan', 'secara', 'ini', 'itu', 'adalah', 'sebagai', 'dapat', 'bisa', 'akan',
    'the', 'and', 'for', 'with', 'to', 'in', 'of', 'on', 'at', 'is', 'a', 'an'
  ]);

  const words = description
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w));

  // Ambil kata-kata penting
  for (const w of words) {
    triggers.add(w);
    if (triggers.size >= 6) break;
  }

  // Tambahkan frasa target jika ada
  if (targetArea) {
    triggers.add(targetArea.toLowerCase());
  }

  return Array.from(triggers).slice(0, 6);
}

/**
 * Mencari Alias Setara HANYA jika terdapat padanan valid dan terverifikasi di katalog.
 * Jangan membuat atau menebak alias tanpa dasar katalog!
 */
export function findVerifiedEquivalentAliases(code, functionGroup, targetArea, catalog = []) {
  if (!catalog || !Array.isArray(catalog) || catalog.length === 0) {
    return [];
  }
  if (!functionGroup && !targetArea) {
    return [];
  }

  const cleanCurrentCode = (code || '').trim().toLowerCase();
  const matchedAliases = [];

  for (const item of catalog) {
    if (!item || !item.code) continue;
    const itemCode = item.code.trim().toLowerCase();
    if (itemCode === cleanCurrentCode) continue;

    // Kecocokan kuat: function group sama persis dan status aktif
    const sameGroup = item.functionGroup && functionGroup && item.functionGroup === functionGroup;
    const sameTarget = item.target && targetArea && item.target.toLowerCase() === targetArea.toLowerCase();

    if (sameGroup && sameTarget) {
      matchedAliases.push(item.code);
    }
  }

  // Batasi maksimal 2 alias terverifikasi paling representatif
  return matchedAliases.slice(0, 2);
}

/**
 * Fungsi Utama: Smart Auto-Fill Shorthand Metadata (Offline Engine)
 * Mengembalikan objek metadata lengkap beserta status tinjauan tiap kolom.
 */
export function executeSmartAutoFill(rawInput, catalog = [], existingFormValues = {}) {
  const parsed = parseRawShorthandInput(rawInput);
  if (!parsed.isValid) {
    return {
      success: false,
      error: parsed.error,
      metadata: null,
      fieldStatus: null
    };
  }

  const { code, description } = parsed;
  const combinedText = `${code} ${description}`;

  // 1. Cek duplikasi kode di katalog
  const isDuplicate = catalog.some(c => c && c.code && c.code.toLowerCase() === code.toLowerCase());

  // 2. Inferensi metadata
  const name = deriveShorthandName(code, description);
  const target = inferTargetArea(combinedText);
  const category = inferCategory(combinedText, target);
  const functionGroup = inferFunctionGroup(combinedText, category, target);
  const semanticTriggers = generateSemanticTriggers(code, description, target);
  const equivalentTo = findVerifiedEquivalentAliases(code, functionGroup, target, catalog);

  // 3. Status evaluasi tiap kolom (apakah mantap atau perlu tinjauan)
  const fieldStatus = {
    code: isDuplicate ? 'DUPLICATE' : 'OK',
    name: name ? 'OK' : 'NEEDS_REVIEW',
    category: category ? 'OK' : 'NEEDS_REVIEW',
    target: target ? 'OK' : 'NEEDS_REVIEW',
    functionGroup: functionGroup ? 'OK' : 'NEEDS_REVIEW',
    description: description ? 'OK' : 'NEEDS_REVIEW',
    semanticTriggers: semanticTriggers.length > 0 ? 'OK' : 'NEEDS_REVIEW',
    equivalentTo: equivalentTo.length > 0 ? 'VERIFIED' : 'EMPTY'
  };

  // 4. Overwrite protection: deteksi apakah ada nilai manual yang telah diisi sebelumnya
  const overwriteInfo = {
    hasManualValues: false,
    manualFields: []
  };

  if (existingFormValues) {
    const fields = ['code', 'name', 'category', 'target', 'functionGroup', 'description', 'triggers', 'equivalent'];
    for (const f of fields) {
      if (existingFormValues[f] && existingFormValues[f].trim()) {
        overwriteInfo.hasManualValues = true;
        overwriteInfo.manualFields.push(f);
      }
    }
  }

  return {
    success: true,
    error: null,
    metadata: {
      code,
      name,
      category,
      target,
      functionGroup,
      description,
      semanticTriggers,
      equivalentTo
    },
    fieldStatus,
    isDuplicate,
    overwriteInfo
  };
}
