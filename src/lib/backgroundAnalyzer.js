/**
 * Background Visual Analyzer V3.7 — Master Patch
 * Engine Analisis Khusus Latar Belakang (Background), Dekorasi, Pencahayaan Lingkungan,
 * Hubungan Spasial Penempatan Subjek, dan Referensi Outfit Terpisah.
 * 
 * ATURAN UTAMA:
 * 1. Fokus utama analisis adalah LATAR BELAKANG.
 * 2. 6 Bidang Analisis Terstruktur:
 *    - 1. SUASANA / MOOD
 *    - 2. GAYA FOTOGRAFI
 *    - 3. HUBUNGAN SUBJEK & LATAR (WAJIB)
 *    - 4. REFERENSI OUTFIT SUBJEK (TERPISAH, BEBAS IDENTITAS/WAJAH, TIDAK MASUK PROMPT LATAR)
 *    - 5. ELEMEN BACKGROUND (Arsitektur, Furniture, Dekorasi, Material, Warna, Lighting)
 *    - 6. KOMPOSISI & SPATIAL RELATIONSHIP
 * 3. PROMPT ANALISA OPTIMAL:
 *    - Satu paragraf natural-language English prompt yang mengalir dan spatially-aware.
 *    - Menggabungkan Suasana + Gaya + Hubungan Subjek & Latar + Elemen + Komposisi + Lighting + Perspective + Depth.
 *    - Menutup dengan: "Background only, no people, no face, no human identity, no text, no watermark."
 * 4. SISTEM SHORTHAND EXISTING:
 *    - Berjalan langsung berdasarkan Prompt Analisa Optimal sebagai Source of Truth.
 */

import { detectClosestAspectRatio } from './imageVisualAnalyzer.js';
import { toAiEnglishPrompt } from './promptEnglishTranslator.js';

/**
 * Membangun System Prompt Multimodal Gemini Vision AI khusus analisis latar belakang & penempatan subjek
 */
export function buildBackgroundAnalysisSystemPrompt() {
  return `Anda adalah Ahli Analisis Latar Belakang & Komposisi Arsitektur Fotografi Vision AI Profesional (Prompt Shorthand Analyzer V3.7).
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat dengan FOKUS UTAMA PADA LATAR BELAKANG (ENVIRONMENT, RUANG, ARSITEKTUR, DEKORASI, PROPERTI, PENCAHAYAAN LINGKUNGAN), HUBUNGAN SPASIAL PENEMPATAN SUBJEK TERHADAP LATAR, dan REFERENSI OUTFIT SUBJEK TERPISAH.

=======================================================
ATURAN MUTLAK ANALISIS LATAR BELAKANG (STRICT RULES):
=======================================================
1. FOKUS UTAMA ADALAH LATAR BELAKANG:
   Analisis seluruh dekorasi, furnitur, aksesori, properti, tekstur material dinding/lantai, pencahayaan lingkungan, kedalaman ruang, dan atmosfer latar.

2. ATURAN PRIVASI & DILARANG MENGANALISIS IDENTITAS PERSONAL (STRICT NEGATIVE CONSTRAINT):
   Jika foto memiliki subjek/manusia, sistem tidak boleh menganalisis identitas atau karakteristik personal subjek.
   DILARANG KERAS menganalisis atau memasukkan sebagai profil:
   - wajah dan identitas
   - bentuk wajah
   - warna kulit
   - usia
   - jenis kelamin
   - rambut
   - pakaian
   - ekspresi
   - detail fisik tubuh
   Gunakan HANYA label generik netral seperti "Subjek", "Subjek manusia", atau "Karakter".

3. HUBUNGAN SPASIAL SUBJEK & LATAR WAJIB DIANALISIS (SUBJECT–BACKGROUND PLACEMENT PROFILE):
   Meskipun identitas subjek dilarang, informasi SPASIAL, POSISI, SKALA, FRAMING, KEDALAMAN, DAN RELASI SUBJEK TERHADAP ELEMEN LATAR WAJIB DIANALISIS SECARA RINCI.
   Informasi ini adalah acuan komposisi penempatan ketika latar diterapkan untuk subjek baru pada foto berikutnya.

4. REFERENSI OUTFIT SUBJEK (TERPISAH & STRICT ISOLATION):
   Analisis referensi pakaian subjek jika ada (jenis pakaian, gaya, warna, material, tekstur, potongan, layering, formalitas).
   ATURAN MUTLAK:
   - Bebas biometrik / wajah manusia.
   - DILARANG MEMASUKKAN REFERENSI OUTFIT KE DALAM PROMPT ANALISA OPTIMAL BACKGROUND!
   Outfit disimpan murni sebagai referensi terpisah.

5. PROMPT ANALISA OPTIMAL (AI ENGLISH PROMPT):
   - Wajib berbentuk SATU PARAGRAF natural-language prompt dalam Bahasa Inggris yang mengalir, detail, deskriptif, spatially-aware, dan production-ready.
   - BUKAN JSON, BUKAN keyword dump, BUKAN bullet list, BUKAN tabel parameter.
   - Menggabungkan secara koheren: Suasana + Gaya Fotografi + Hubungan Subjek & Latar (diterjemahkan secara spasial alami) + Elemen Background + Komposisi + Lighting + Perspective + Depth.
   - Hubungan subjek & latar harus diterjemahkan menjadi relasi spasial pembingkaian (misal: "The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element.").
   - Default penutup wajib: "Background only, no people, no face, no human identity, no text, no watermark."

6. 8 ASPEK ANALISIS LATAR BELAKANG TERSTRUKTUR (WAJIB):
   1. Ruang & Komposisi
   2. Lapisan Visual
   3. Warna & Material
   4. Pencahayaan Latar
   5. Nuansa Foto / Latar
   6. Elemen Latar Teridentifikasi
   7. Struktur & Komposisi Latar
   8. Hubungan Subjek & Latar

7. KEMBALIKAN OUTPUT HANYA DALAM FORMAT JSON VALID BERIKUT:
{
  "suasanaMood": {
    "atmosphere": "Atmosphere latar secara menyeluruh (cozy, expansive, intimate)",
    "mood": "Mood emosional (tenang, hangat, reflektif, formal, elegan, mewah, santai)",
    "emotionalTone": "Tone emosional visual",
    "visualTemperature": "Temperatur visual (warm amber, neutral daylight, cool moody)",
    "formality": "Tingkat formalitas (formal, semi-formal, kasual, editorial)",
    "overallAmbience": "Karakter keseluruhan ambience ruangan/lingkungan",
    "sophistication": "Tingkat elegansi / sophistication",
    "characterType": "Karakteristik khusus (academic, commercial, luxurious, rustic, minimalist)",
    "summary": "Paragraf ringkasan suasana dan mood latar..."
  },
  
  "gayaFotografi": {
    "photographyStyle": "Gaya fotografi (Architectural Interior, Environmental Portraiture, Editorial Still-Life)",
    "genre": "Genre fotografi",
    "cameraPerspective": "Perspektif kamera (one-point linear, two-point, eye-level, slightly low-angle)",
    "cameraHeight": "Ketinggian kamera relatif (eye-level, chest-level)",
    "focalLengthImpression": "Karakter fokal lensa (35mm environmental, 50mm normal standard, 85mm compression)",
    "framing": "Karakter pembingkaian (medium shot framing, wide architectural view)",
    "depthOfField": "Ketajaman / depth of field (medium DoF with clear background, deep focus, creamy falloff)",
    "lightingStyle": "Gaya tata cahaya (diffused key light, soft wrap-around ambient, dramatic directional)",
    "lightingSoftness": "Kelembutan cahaya dan transisi gradasi",
    "shadowCharacter": "Karakter bayangan (soft progressive shadows, gentle ambient occlusion)",
    "realism": "Tingkat realisme visual (photorealistic, authentic optical rendering)",
    "renderingStyle": "Gaya rendering visual (clean tonal range, textured matte surfaces)",
    "summary": "Paragraf ringkasan gaya fotografi..."
  },
  
  "hubunganSubjekLatar": {
    "subjectPlacementInFrame": "Posisi horizontal dan vertikal subjek: kiri / tengah / kanan; atas / tengah / bawah",
    "relativePositionToBg": "Posisi relatif subjek terhadap elemen background utama",
    "distanceFromBg": "Estimasi jarak subjek terhadap background (misal: 1.5 meter di depan dinding)",
    "scaleToSpace": "Skala subjek terhadap ruang dan frame (misal: mengisi 25%-35% frame)",
    "depthPlane": "Bidang kedalaman penempatan subjek: foreground / midground",
    "depthRelationship": "Hubungan pemisahan kedalaman antara subjek dan latar",
    "framingRelationship": "Bagaimana elemen latar membingkai subjek secara visual",
    "negativeSpace": "Distribusi negative space di sekeliling subjek",
    "visualBalance": "Keseimbangan visual antara subjek dan elemen lingkungan",
    "perspectiveRelationship": "Garis perspektif lingkungan yang mengarah ke area subjek",
    "orientation": "Orientasi tubuh subjek terhadap lingkungan (frontal / 3/4 kiri / 3/4 kanan)",
    "lightingRelationship": "Hubungan pencahayaan antara subjek dan latar",
    "framingElements": "Elemen background yang menjadi pembingkai atau pendukung subjek",
    "spatialSummary": "The subject is positioned centrally within the environment, with the integrated bookshelf forming the main midground structure behind the subject and the floor lamp positioned on the left as a secondary framing element. The background creates balanced depth and supports the subject as the primary focal point."
  },
  
  "referensiOutfitSubjek": {
    "clothingType": "Jenis pakaian yang dikenakan (blazer, kemeja, gaun, sweater, jaket)",
    "garmentStyle": "Gaya busana (smart casual, executive business, vintage classic, relaxed modern)",
    "primaryColor": "Warna utama pakaian",
    "secondaryColor": "Warna sekunder pakaian",
    "material": "Material pakaian (wool, katun, linen, sutra, denim, rajut)",
    "texture": "Karakter tekstur kain (matte weave, smooth, bertekstur mikro)",
    "pattern": "Pola pakaian (solid polos, garis halus, kotak-kotak minimalis)",
    "cut": "Potongan pakaian (tailored fit, relaxed fit, structured)",
    "layering": "Layering pakaian (single layer, two-layer blazer over shirt)",
    "accessories": "Aksesori yang terlihat (jam tangan, kacamata, dasi, syal)",
    "footwear": "Alas kaki jika terlihat",
    "formality": "Tingkat formalitas busana",
    "stylingCharacter": "Karakter styling",
    "relationshipToEnvironment": "Harmonisasi warna/gaya outfit dengan palet lingkungan latar",
    "summary": "Paragraf ringkasan referensi outfit subjek (bebas identitas personal)..."
  },
  
  "elemenBackground": {
    "arsitektur": "Dinding, panel kayu, rak built-in, lantai, plafon, jendela, pintu, struktur ruangan",
    "furniture": "Meja, kursi, sofa, kabinet, rak buku, lampu lantai/meja, perabotan lain",
    "dekorasi": "Buku, tanaman hias pot, lukisan, bingkai foto, vas bunga, ornamen dekoratif",
    "material": "Kayu solid, kain tenun, logam kuningan/matte, kaca, batu alam, keramik",
    "warna": "Warna dominan, warna sekunder, dan warna aksen pada latar",
    "lighting": "Sumber cahaya, arah, kelembutan, intensitas, temperatur warna, karakter bayangan",
    "summary": "Paragraf ringkasan elemen background lengkap..."
  },
  
  "komposisiSpatial": {
    "subjectPlacement": "Penempatan subjek (kiri / tengah / kanan; eye-level)",
    "symmetry": "Simetri atau asimetri yang seimbang (harmonious dynamic balance)",
    "horizontalBalance": "Keseimbangan elemen pada sisi kiri dan kanan frame",
    "verticalBalance": "Keseimbangan elemen bidang atas dan bawah frame",
    "negativeSpace": "Proporsi ruang kosong bersih di sekitar area subjek",
    "depth": "Struktur 3 lapis kedalaman (foreground, midground, background)",
    "perspective": "Garis leading lines dan perspektif linear yang tertata",
    "foreground": "Elemen yang mengisi foreground bawah/depan",
    "midground": "Elemen yang mengisi middle ground tempat subjek berinteraksi",
    "background": "Elemen yang mengisi dinding latar belakang utama",
    "framing": "Pembingkaian alami dari objek samping furnitur dan dekorasi",
    "spatialHierarchy": "Hierarki visual ruangan yang tertata jelas",
    "relativePositioning": "Posisi relatif antar objek penting di dalam ruangan",
    "summary": "Paragraf ringkasan komposisi dan struktur ruang..."
  },
  
  "optimalPrompt": "A detailed indoor studio backdrop featuring a classic luxury library or study room atmosphere. Built-in dark brown wooden wall panels with integrated bookshelves. On the shelves are stacks of vintage hardback books, colorful modern books, an antique framed map, small white decorative lanterns, candlestick holders, and a small artificial flower vase. On the left side, a tall vintage floor lamp with a carved bronze metallic stand and a beige fabric lampshade. On the floor, warm brown wood-grain tile flooring. The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element. Soft warm studio lighting illuminating the scene evenly with gentle shadows, creating a cozy, sophisticated, and academic mood. Eye-level perspective, medium depth of field, background only, no people, no face, no human identity, no text, no watermark. --ar 16:9 --style raw --v 6.1 --no human subject, person, people, watermark, text",
  
  "backgroundProfile": "Deskripsi paragraf komprehensif seluruh karakteristik latar, dekorasi, properti, material, warna, pencahayaan, mood, dan elemen visual latar (Profil A)...",
  "placementProfile": "Deskripsi paragraf lengkap informasi spasial posisi, skala, orientasi, kedalaman, framing, dan relasi penempatan subjek terhadap latar sebagai acuan penempatan subjek baru (Profil B)...",
  
  "spaceAndComposition": {
    "category": "Kategori latar",
    "setting": "Setting lokasi spesifik",
    "architecture": "Deskripsi struktur dinding, lantai, plafon",
    "decoration": "Dekorasi dinding, ornamen, tanaman",
    "propsAndAccessories": "Furnitur utama dan aksesori pendukung"
  },
  "visualLayers": {
    "foreground": "Foreground",
    "middleGround": "Middle ground",
    "background": "Background",
    "perspective": "Linear perspective",
    "depthOfField": "Medium DoF",
    "relativePositions": []
  },
  "colorAndMaterial": {
    "palette": "Palet warna",
    "dominantColor": "Warna dominan",
    "accentColor": "Warna aksen",
    "materialsAndTextures": [],
    "surfaceCharacter": "Karakter permukaan"
  },
  "backgroundLighting": {
    "type": "Jenis pencahayaan",
    "direction": "Arah cahaya",
    "quality": "Kualitas",
    "intensity": "Intensitas",
    "colorTemperature": "Temperatur warna",
    "shadows": "Bayangan",
    "highlights": "Highlight",
    "contrast": "Kontras",
    "distribution": "Distribusi"
  },
  "photoMood": {
    "mood": "Mood",
    "visualStyle": "Gaya visual",
    "backgroundCharacter": "Karakter latar",
    "roomImpression": "Kesan ruang",
    "formalityLevel": "Tingkat formalitas"
  },
  "identifiedElements": [],
  "structureAndComposition": {
    "symmetry": "Simetri/Asimetri",
    "visualBalance": "Keseimbangan",
    "repetitionPatterns": "Pola",
    "leadingLines": "Leading lines",
    "focalPoint": "Titik fokus",
    "negativeSpace": "Negative space",
    "spaceDepth": "Kedalaman"
  },
  "subjectPlacement": {
    "horizontalPos": "Tengah",
    "verticalPos": "Tengah",
    "orientation": "Frontal",
    "scale": "Medium shot",
    "depthPosition": "Middle ground",
    "spatialSummary": "The subject is positioned centrally within the environment..."
  },
  
  "suggestedShorthands": ["/background", "/interior", "/architecture", "/ambientlight", "/woodtexture", "/softlight", "/ruleofthirds"],
  "negativePrompt": "human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, cluttered mess, watermark, text"
}`;
}

// =========================================================================
// FORMATTERS KHUSUS TIAP SECTION (UNTUK TOMBOL SALIN / COPY BERSIH)
// =========================================================================

/**
 * 1. Format Suasana / Mood untuk tombol [COPY]
 */
export function formatMoodText(bgData) {
  if (!bgData) return '';
  const m = bgData.suasanaMood || bgData.photoMood || {};
  return [
    `SUASANA / MOOD:`,
    `- Atmosphere: ${m.atmosphere || m.roomImpression || '-'}`,
    `- Mood: ${m.mood || '-'}`,
    `- Emotional Tone: ${m.emotionalTone || m.mood || '-'}`,
    `- Visual Temperature: ${m.visualTemperature || m.colorTemperature || '-'}`,
    `- Formalitas: ${m.formality || m.formalityLevel || '-'}`,
    `- Ambience: ${m.overallAmbience || m.backgroundCharacter || '-'}`,
    `- Sophistication: ${m.sophistication || 'High / Elegant'}`,
    `- Karakter: ${m.characterType || m.visualStyle || '-'}`,
    m.summary ? `\nRingkasan:\n${m.summary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * 2. Format Gaya Fotografi untuk tombol [COPY]
 */
export function formatPhotographyStyleText(bgData) {
  if (!bgData) return '';
  const p = bgData.gayaFotografi || {};
  const m = bgData.photoMood || {};
  const l = bgData.backgroundLighting || {};
  return [
    `GAYA FOTOGRAFI:`,
    `- Photography Style: ${p.photographyStyle || m.visualStyle || 'Architectural Interior Photography'}`,
    `- Genre: ${p.genre || 'Environmental Interior / Still-Life'}`,
    `- Perspektif: ${p.cameraPerspective || 'Eye-level linear perspective'}`,
    `- Ketinggian Kamera: ${p.cameraHeight || 'Eye-level (approx. 150cm)'}`,
    `- Karakter Lensa: ${p.focalLengthImpression || '50mm standard normal lens (natural perspective)'}`,
    `- Framing: ${p.framing || 'Medium shot environmental framing'}`,
    `- Depth of Field: ${p.depthOfField || 'Medium depth of field with readable background details'}`,
    `- Gaya Pencahayaan: ${p.lightingStyle || l.type || 'Diffused key light with soft ambient fill'}`,
    `- Kelembutan Cahaya: ${p.lightingSoftness || l.quality || 'Soft wrap-around lighting'}`,
    `- Karakter Bayangan: ${p.shadowCharacter || l.shadows || 'Gentle soft-edge progressive shadows'}`,
    `- Realisme: ${p.realism || 'Authentic photorealistic optical rendering'}`,
    `- Gaya Rendering: ${p.renderingStyle || 'Clean tonal range with rich surface textures'}`,
    p.summary ? `\nRingkasan:\n${p.summary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * 3. Format Hubungan Subjek & Latar untuk tombol [COPY]
 */
export function formatSubjectBackgroundRelationshipText(bgData) {
  if (!bgData) return '';
  const r = bgData.hubunganSubjekLatar || bgData.subjectPlacement || {};
  return [
    `HUBUNGAN SUBJEK & LATAR (SPATIAL):`,
    `- Posisi Subjek dalam Frame: ${r.subjectPlacementInFrame || r.horizontalPos || 'Tengah (Center)'}`,
    `- Posisi Relatif ke Background: ${r.relativePositionToBg || 'Berada tepat di depan struktur latar utama'}`,
    `- Jarak ke Background: ${r.distanceFromBg || 'Sekitar 1.5 meter di depan dinding latar'}`,
    `- Skala terhadap Ruang: ${r.scaleToSpace || r.scale || 'Medium shot (mengisi 25%-35% frame)'}`,
    `- Bidang Kedalaman: ${r.depthPlane || r.depthPosition || 'Midground interaction plane'}`,
    `- Separasi Kedalaman: ${r.depthRelationship || 'Separasi jelas antara subjek dan latar belakang'}`,
    `- Hubungan Framing: ${r.framingRelationship || r.framing || 'Dibingkai alami oleh elemen furnitur dan lampu samping'}`,
    `- Negative Space: ${r.negativeSpace || r.negativeSpaceAround || 'Cukup seimbang di sisi kiri dan kanan'}`,
    `- Keseimbangan Visual: ${r.visualBalance || r.compositionBalance || 'Seimbang proporsional'}`,
    `- Hubungan Perspektif: ${r.perspectiveRelationship || 'Leading lines lantai mengarah ke pusat subjek'}`,
    `- Orientasi: ${r.orientation || 'Frontal / 3/4 menghadap ke depan'}`,
    `- Hubungan Pencahayaan: ${r.lightingRelationship || 'Pencahayaan subjek menyatu harmonis dengan cahaya latar'}`,
    `- Elemen Pembingkai: ${r.framingElements || 'Rak buku dinding dan lampu berdiri'}`,
    r.spatialSummary ? `\nDeskripsi Spasial Alami:\n${r.spatialSummary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * 4. Format Referensi Outfit Subjek untuk tombol [COPY OUTFIT]
 * (Strict Isolation: Tidak boleh masuk ke prompt background)
 */
export function formatOutfitReferenceText(bgData) {
  if (!bgData) return '';
  const o = bgData.referensiOutfitSubjek || {};
  return [
    `REFERENSI OUTFIT SUBJEK:`,
    `[Catatan: Referensi busana saja. Bebas identitas personal / biometrik, dan TIDAK dimasukkan ke Prompt Background.]`,
    ``,
    `- Jenis Pakaian: ${o.clothingType || 'Smart casual blazer & collared shirt'}`,
    `- Gaya Busana: ${o.garmentStyle || 'Modern professional / elegant'}`,
    `- Warna Utama: ${o.primaryColor || 'Navy blue / dark charcoal'}`,
    `- Warna Sekunder: ${o.secondaryColor || 'Crisp white / soft ecru'}`,
    `- Material: ${o.material || 'Fine wool blend & breathable cotton weave'}`,
    `- Tekstur: ${o.texture || 'Matte fine-weave texture'}`,
    `- Pola: ${o.pattern || 'Solid with subtle micro-texture'}`,
    `- Potongan (Cut): ${o.cut || 'Structured modern tailored fit'}`,
    `- Layering: ${o.layering || 'Two-layer styling (outer over collared inner)'}`,
    `- Aksesori: ${o.accessories || 'Minimalist metallic watch, clean pocket accent'}`,
    `- Alas Kaki: ${o.footwear || 'Polished leather dress shoes (jika terlihat)'}`,
    `- Formalitas: ${o.formality || 'Executive semi-formal'}`,
    `- Karakter Styling: ${o.stylingCharacter || 'Understated classic sophistication'}`,
    `- Harmonisasi dengan Latar: ${o.relationshipToEnvironment || 'Warna gelap kontras elegan terhadap hangatnya kayu latar'}`,
    o.summary ? `\nRingkasan:\n${o.summary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * 5. Format Elemen Background untuk tombol [COPY]
 */
export function formatBackgroundElementsText(bgData) {
  if (!bgData) return '';
  const e = bgData.elemenBackground || {};
  const s = bgData.spaceAndComposition || {};
  const c = bgData.colorAndMaterial || {};
  const l = bgData.backgroundLighting || {};

  return [
    `ELEMEN BACKGROUND:`,
    `- Arsitektur / Struktur: ${e.arsitektur || s.architecture || '-'}`,
    `- Furniture: ${e.furniture || s.propsAndAccessories || '-'}`,
    `- Dekorasi: ${e.dekorasi || s.decoration || '-'}`,
    `- Material: ${e.material || (Array.isArray(c.materialsAndTextures) ? c.materialsAndTextures.map(m => m.material).join(', ') : '-')}`,
    `- Warna: ${e.warna || c.palette || '-'}`,
    `- Lighting: ${e.lighting || l.type || '-'}`,
    e.summary ? `\nRingkasan:\n${e.summary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * 6. Format Komposisi & Spatial Relationship untuk tombol [COPY]
 */
export function formatCompositionSpatialText(bgData) {
  if (!bgData) return '';
  const k = bgData.komposisiSpatial || bgData.structureAndComposition || {};
  const layers = bgData.visualLayers || {};

  return [
    `KOMPOSISI & SPATIAL RELATIONSHIP:`,
    `- Penempatan Subjek: ${k.subjectPlacement || 'Center frame, eye-level'}`,
    `- Simetri / Asimetri: ${k.symmetry || 'Harmonious dynamic asymmetry'}`,
    `- Keseimbangan Horisontal: ${k.horizontalBalance || k.visualBalance || 'Seimbang proporsional kiri-kanan'}`,
    `- Keseimbangan Vertikal: ${k.verticalBalance || 'Terpancang mantap di lantai dengan headroom cukup'}`,
    `- Negative Space: ${k.negativeSpace || 'Lapang dan bersih di sekitar subjek'}`,
    `- Kedalaman (Depth): ${k.depth || k.spaceDepth || '3 lapis hierarki kedalaman nyata'}`,
    `- Perspektif: ${k.perspective || layers.perspective || 'Linear perspective mengarah ke pusat'}`,
    `- Foreground: ${k.foreground || layers.foreground || 'Lantai dan sudut meja terdekat'}`,
    `- Midground: ${k.midground || layers.middleGround || 'Zona subjek dan furnitur penunjang'}`,
    `- Background: ${k.background || layers.background || 'Dinding arsitektural dan rak buku utama'}`,
    `- Framing: ${k.framing || 'Dibingkai alami oleh pilar dinding dan lampu samping'}`,
    `- Hierarki Spasial: ${k.spatialHierarchy || 'Fokus utama pada area tengah dengan latar mendukung'}`,
    `- Posisi Relatif Objek: ${k.relativePositioning || 'Lampu di kiri, rak utama di tengah-kanan'}`,
    k.summary ? `\nRingkasan:\n${k.summary}` : ''
  ].filter(Boolean).join('\n');
}

/**
 * Format Profil A (BACKGROUND PROFILE) - Preserved untuk kompatibilitas
 */
export function formatBackgroundProfileText(bgData) {
  if (!bgData) return '';
  const p = bgData.backgroundProfile || '';
  const s = bgData.spaceAndComposition || {};
  const c = bgData.colorAndMaterial || {};
  const l = bgData.backgroundLighting || {};
  const m = bgData.photoMood || {};
  const str = bgData.structureAndComposition || {};

  return [
    `=== BACKGROUND PROFILE (PROFIL LATAR BELAKANG) ===`,
    ``,
    `RINGKASAN PROFIL LATAR:`,
    p,
    ``,
    `1. RUANG & ARSITEKTUR:`,
    `- Kategori: ${s.category || '-'}`,
    `- Setting: ${s.setting || '-'}`,
    `- Arsitektur: ${s.architecture || '-'}`,
    `- Dekorasi: ${s.decoration || '-'}`,
    `- Properti & Aksesori: ${s.propsAndAccessories || '-'}`,
    ``,
    `2. WARNA & MATERIAL:`,
    `- Palet Warna: ${c.palette || '-'}`,
    `- Warna Dominan: ${c.dominantColor || '-'}`,
    `- Warna Aksen: ${c.accentColor || '-'}`,
    `- Karakter Permukaan: ${c.surfaceCharacter || '-'}`,
    Array.isArray(c.materialsAndTextures) && c.materialsAndTextures.length > 0
      ? `- Material: ${c.materialsAndTextures.map(mt => `${mt.material} (${mt.texture})`).join('; ')}`
      : '',
    ``,
    `3. PENCAHAYAAN LINGKUNGAN:`,
    `- Jenis: ${l.type || '-'}`,
    `- Arah Cahaya: ${l.direction || '-'}`,
    `- Kualitas & Intensitas: ${l.quality || '-'}, ${l.intensity || '-'}`,
    `- Temperatur Warna: ${l.colorTemperature || '-'}`,
    `- Bayangan & Highlight: ${l.shadows || '-'} | ${l.highlights || '-'}`,
    `- Kontras & Distribusi: ${l.contrast || '-'} | ${l.distribution || '-'}`,
    ``,
    `4. SUASANA & MOOD:`,
    `- Mood / Suasana: ${m.mood || '-'}`,
    `- Gaya Visual: ${m.visualStyle || '-'}`,
    `- Karakter Latar: ${m.backgroundCharacter || '-'}`,
    `- Kesan Ruang: ${m.roomImpression || '-'}`,
    `- Tingkat Formalitas: ${m.formalityLevel || '-'}`,
    ``,
    `5. STRUKTUR & KOMPOSISI LATAR:`,
    `- Keseimbangan: ${str.visualBalance || '-'} (${str.symmetry || '-'})`,
    `- Pola & Garis: ${str.repetitionPatterns || '-'} | Leading lines: ${str.leadingLines || '-'}`,
    `- Titik Fokus: ${str.focalPoint || '-'}`,
    `- Negative Space & Kedalaman: ${str.negativeSpace || '-'} | ${str.spaceDepth || '-'}`
  ].filter(line => line !== '').join('\n');
}

/**
 * Format Profil B (SUBJECT–BACKGROUND PLACEMENT PROFILE) - Preserved untuk kompatibilitas
 */
export function formatPlacementProfileText(bgData) {
  if (!bgData) return '';
  const sp = bgData.subjectPlacement || bgData.hubunganSubjekLatar || {};
  const summary = sp.spatialSummary || bgData.placementProfile || '';

  return [
    `=== SUBJECT–BACKGROUND PLACEMENT PROFILE (ACUAN PENEMPATAN SUBJEK) ===`,
    ``,
    `RINGKASAN PENEMPATAN SPASIAL:`,
    summary,
    ``,
    `PARAMETER ACUAN KOMPOSISI SUBJEK:`,
    `- Posisi Horizontal: ${sp.horizontalPos || sp.subjectPlacementInFrame || '-'}`,
    `- Posisi Vertikal: ${sp.verticalPos || '-'}`,
    `- Orientasi Subjek: ${sp.orientation || '-'}`,
    `- Skala Subjek terhadap Frame: ${sp.scale || sp.scaleToSpace || '-'}`,
    `- Proporsi Subjek di Frame: ${sp.frameProportion || '-'}`,
    `- Jarak Subjek ke Latar: ${sp.distanceFromBg || '-'}`,
    `- Kedalaman Posisi Subjek: ${sp.depthPosition || sp.depthPlane || '-'}`,
    `- Area Latar di Belakang Subjek: ${sp.bgAreaBehindSubject || '-'}`,
    `- Negative Space di Sekitar Subjek: ${sp.negativeSpaceAround || sp.negativeSpace || '-'}`,
    `- Relasi dengan Properti: ${sp.propsRelation || '-'}`,
    `- Anchor Point Latar: ${sp.anchorPoint || '-'}`,
    `- Keseimbangan Komposisi: ${sp.compositionBalance || sp.visualBalance || '-'}`,
    `- Alignment Garis Arsitektur: ${sp.architecturalAlignment || '-'}`,
    `- Posisi terhadap Lantai: ${sp.floorPlacement || '-'}`,
    `- Framing terhadap Subjek: ${sp.framing || sp.framingRelationship || '-'}`,
    `- Ruang Kosong (Headroom & Samping): ${sp.emptySpace || '-'}`,
    `- Hubungan Ukuran dengan Furnitur: ${sp.sizeRelationToProps || '-'}`,
    `- Posisi terhadap Elemen Utama Latar: ${sp.relativeToMainBgElement || '-'}`
  ].join('\n');
}

/**
 * Format Laporan Lengkap Analisis Latar Belakang (Profil A + Profil B + 6 Aspek + Elemen + Prompt Optimal)
 */
export function formatFullBackgroundReportText(bgData) {
  if (!bgData) return '';
  const profA = formatBackgroundProfileText(bgData);
  const profB = formatPlacementProfileText(bgData);
  const mood = formatMoodText(bgData);
  const photo = formatPhotographyStyleText(bgData);
  const outfit = formatOutfitReferenceText(bgData);
  const elementsText = formatBackgroundElementsText(bgData);
  const spatialText = formatCompositionSpatialText(bgData);

  const elements = Array.isArray(bgData.identifiedElements) && bgData.identifiedElements.length > 0
    ? [
        `\n=== DAFTAR ELEMEN LATAR TERIDENTIFIKASI ===`,
        ...bgData.identifiedElements.map((el, idx) => 
          `${idx + 1}. ${el.name} [${el.type || 'Elemen'}] - Posisi: ${el.relativePosition || '-'}, Ukuran: ${el.relativeSize || '-'}, Fungsi: ${el.visualFunction || '-'}`
        )
      ].join('\n')
    : '';

  const optimalPrompt = bgData.optimalPrompt
    ? `\n=== PROMPT OPTIMAL LATAR BELAKANG (AI ENGLISH) ===\n${bgData.optimalPrompt}`
    : '';

  return [
    profA,
    '',
    profB,
    '',
    mood,
    '',
    photo,
    '',
    outfit,
    '',
    elementsText,
    '',
    spatialText,
    elements,
    optimalPrompt
  ].filter(Boolean).join('\n');
}

/**
 * Regenerator Dinamis Prompt Analisa Optimal (Varian 0, 1, 2)
 * Menggunakan hasil analisa yang sama tanpa harus re-analisis foto.
 */
export function regenerateOptimalBackgroundPrompt(bgData, variantIndex = 1) {
  if (!bgData) return '';
  const ar = bgData.aspectRatio || '16:9';
  const mood = bgData.suasanaMood?.mood || bgData.photoMood?.mood || 'warm and sophisticated';
  const category = (bgData.spaceAndComposition?.category || 'classic luxury study room').toLowerCase().replace(/[^a-z0-9 ]/g, '');
  const setting = (bgData.spaceAndComposition?.setting || 'indoor studio library backdrop').toLowerCase();
  const architecture = bgData.elemenBackground?.arsitektur || bgData.spaceAndComposition?.architecture || 'built-in dark brown wooden wall panels with integrated bookshelves';
  const decor = bgData.elemenBackground?.dekorasi || bgData.spaceAndComposition?.decoration || 'curated hardback books, an antique framed map, and small decorative lanterns';
  const furniture = bgData.elemenBackground?.furniture || bgData.spaceAndComposition?.propsAndAccessories || 'a tall vintage floor lamp with a carved bronze metallic stand on the left';
  const lighting = bgData.elemenBackground?.lighting || bgData.backgroundLighting?.type || 'soft warm studio ambient lighting illuminating the scene evenly with gentle shadows';
  const spatial = bgData.hubunganSubjekLatar?.spatialSummary || 'The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element.';

  const variant = (variantIndex || 0) % 3;

  let prompt = '';
  if (variant === 0) {
    // Standard High-Fidelity Architectural Study
    prompt = `A detailed indoor studio backdrop featuring a ${mood} ${category}. ${architecture}. On the shelves are ${decor}. On the left side, ${furniture}. ${spatial} ${lighting}, creating a cozy, sophisticated, and authentic atmosphere. Eye-level perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${ar} --style raw --v 6.1 --no human subject, person, people, watermark, text`;
  } else if (variant === 1) {
    // Cinematic Editorial Depth Variant
    prompt = `Cinematic architectural interior photography of a ${mood} ${category}, set in a ${setting}. Highlights include ${architecture}, adorned with ${decor}, counterbalanced by ${furniture}. Spatially arranged where ${spatial.toLowerCase()} Bathed in ${lighting.toLowerCase()}, rich micro-textures on natural wood and metal surfaces, crisp optical perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${ar} --style raw --v 6.1 --no human subject, person, people, watermark, text`;
  } else {
    // Atmospheric Fine-Art Studio Variant
    prompt = `Fine-art atmospheric studio background portraying a distinguished ${category}. Key structural elements feature ${architecture}, refined with ${decor}, and accented by ${furniture}. Perfectly structured composition: ${spatial} Illuminated by ${lighting.toLowerCase()} with gentle gradual shadow falloff, professional balanced composition, eye-level angle, photorealistic architectural rendering, Background only, no people, no face, no human identity, no text, no watermark. --ar ${ar} --style raw --v 6.1 --no human subject, person, people, watermark, text`;
  }

  return prompt;
}

/**
 * Generator Heuristik Dinamis Analisis Latar Belakang & Penempatan Spasial
 * 100% Client-side Heuristic Fallback Engine saat offline atau tanpa API Key.
 */
export function generateDynamicBackgroundAnalysis(imageFileOrOptions, imageBase64 = null, visualTelemetry = null, targetAspectRatio = 'auto') {
  let imageFile = imageFileOrOptions;
  let b64 = imageBase64;
  let telemetry = visualTelemetry;
  let targetAr = targetAspectRatio;

  if (imageFileOrOptions && typeof imageFileOrOptions === 'object' && ('imageFile' in imageFileOrOptions || 'visualTelemetry' in imageFileOrOptions || 'targetAspectRatio' in imageFileOrOptions || 'aspectRatio' in imageFileOrOptions)) {
    imageFile = imageFileOrOptions.imageFile || imageFileOrOptions;
    b64 = imageFileOrOptions.imageBase64 || b64;
    telemetry = imageFileOrOptions.visualTelemetry || telemetry;
    targetAr = imageFileOrOptions.targetAspectRatio || imageFileOrOptions.aspectRatio || targetAr;
  }

  telemetry = telemetry || {};
  const fname = (imageFile?.name || '').toLowerCase();
  const width = imageFile?.width || 800;
  const height = imageFile?.height || 800;
  const detectedAr = detectClosestAspectRatio(width, height);
  const effectiveAr = (targetAr && targetAr !== 'auto' && targetAr !== 'Otomatis')
    ? targetAr
    : detectedAr;

  // Analisis karakter warna & pencahayaan dari telemetri
  const dominantHue = telemetry.dominantHue || 'neutral';
  const dominantColorId = telemetry.dominantColorIndonesian || 'krem netral dan abu-abu hangat';
  const dominantColorEn = telemetry.dominantColorEnglish || 'warm neutral cream and light gray';
  const secondaryColorId = telemetry.secondaryColorIndonesian || 'aksen kayu cokelat hangat';
  const isDark = (telemetry.avgLum || 0.5) < 0.35;
  const isHighContrast = (telemetry.contrastLevel === 'tinggi');
  const isOutdoor = fname.includes('outdoor') || fname.includes('nature') || fname.includes('pantai') || fname.includes('taman') || fname.includes('jalan') || dominantHue === 'green';

  let category = 'Studio Interior Modern & Ruang Kreatif';
  let setting = 'Interior studio kontemporer dengan penataan arsitektur bersih dan teratur';
  let architecture = 'Dinding bertekstur matte halus dengan panel vertikal minimalis, lantai permukaan padat bertingkat kedalaman terukur';
  let decoration = 'Rak terbuka beraksen rapi, tanaman hias pot minimalis, dan ornamen dekoratif geometris terkoordinasi';
  let props = 'Meja kerja kayu matte, kursi ergonomis berlapis bahan tenun, dan lampu aksen terarah';
  let materials = [
    { material: 'Kayu Terpilih (Wood Timber)', texture: 'Serat kayu natural bertekstur matte lembut' },
    { material: 'Logam Anodized / Matte Metal', texture: 'Finishing satin non-glare pada rangka furnitur' },
    { material: 'Kain Tenun Bertekstur', texture: 'Anyaman kain halus dengan daya serap cahaya tinggi' }
  ];
  let mood = 'Tenang, teratur, profesional, dan berestetika modern';
  let visualStyle = 'Modern Minimalist Architectural Interior Photography';
  let lightType = 'Pencahayaan diffused terarah dipadukan dengan ambient fill lembut';
  let lightTemp = '3800K - 4500K (Neutral Daylight)';

  if (isOutdoor) {
    category = 'Setting Lingkungan Luar Ruang (Outdoor Natural)';
    setting = 'Area terbuka alami dengan vegetasi hijau dan latar belakang lanskap seimbang';
    architecture = 'Struktur jalur alami, pembatas batu alam/kayu, dan kanopi langit terbuka';
    decoration = 'Pepohonan rindang, dedaunan bertekstur alami, dan elemen lanskap organik';
    props = 'Batu alam bertekstur, bangku kayu outdoor, dan pembatas jalur setapak';
    materials = [
      { material: 'Batu Alam & Kayu Outdoor', texture: 'Permukaan berpori dan serat kasar organik' },
      { material: 'Dedaunan & Vegetasi Alami', texture: 'Lapisan hijau organik dengan difusi cahaya matahari' }
    ];
    mood = 'Segar, alami, organik, dan menenangkan';
    visualStyle = 'Natural Environmental Documentary Landscape';
    lightType = 'Cahaya matahari alami difusi awan dengan arah lateral terukur';
    lightTemp = '5200K - 5600K (Natural Outdoor Daylight)';
  } else if (isDark) {
    category = 'Interior Moody Sinematik & Industrial';
    setting = 'Ruang berkonsep industrial chic dengan pencahayaan dramatis berkarakter mendalam';
    architecture = 'Dinding beton ekspos atau bata gelap, lantai semen poles matte, plafon tinggi beraksen balok';
    decoration = 'Lampu gantung Edison amber, rak besi industrial, dan karya seni kontemporer bernuansa monokrom';
    props = 'Meja kayu rustik tebal, kursi kulit tua (aged leather), dan lampu lantai berkarakter vintage';
    materials = [
      { material: 'Beton Ekspos & Besi Tempa', texture: 'Tekstur berbutir kasar dengan kilau satin minimal' },
      { material: 'Kulit Alami (Aged Leather)', texture: 'Permukaan kulit berpatina dengan mikrokontras halus' }
    ];
    mood = 'Misterius, hangat, berkelas, dan sinematik mendalam';
    visualStyle = 'Cinematic Moody Architectural Photography';
    lightType = 'Key light terarah dengan fill lembut dan bayangan kontras bergradasi dramatis';
    lightTemp = '2800K - 3200K (Warm Amber Tungsten)';
  }

  // 1. SUASANA / MOOD
  const suasanaMood = {
    atmosphere: `Suasana ${mood.toLowerCase()}, mengalirkan kesan ruangan yang lapang, tenang, dan tertata estetik`,
    mood,
    emotionalTone: isDark ? 'Intim, dalam, dan sinematik berkarakter' : 'Menenteramkan, berwibawa, dan profesional',
    visualTemperature: lightTemp,
    formality: 'Semi-formal elegan dengan standar fotografi komersial profesional',
    overallAmbience: `Ambience ${category.toLowerCase()} dengan pencahayaan seimbang dan atmosfer ruang kohesif`,
    sophistication: 'Tingkat elegansi tinggi dengan estetika arsitektur terkoordinasi rapi',
    characterType: isDark ? 'Luxurious, Moody & Industrial' : (isOutdoor ? 'Natural & Organic' : 'Modern, Academic & Minimalist'),
    summary: `Atmosfer ruangan menampilkan suasana ${mood.toLowerCase()} dengan karakter visual ${visualStyle}. Pencahayaan bertemperatur ${lightTemp} memberikan kesan ruang yang nyaman, teratur, dan profesional tanpa distraksi visual.`
  };

  // 2. GAYA FOTOGRAFI
  const gayaFotografi = {
    photographyStyle: visualStyle,
    genre: 'Architectural Environmental Interior Photography',
    cameraPerspective: 'Eye-level linear perspective dengan garis horizon lurus teratur',
    cameraHeight: 'Tinggi pandangan mata manusia (eye-level, ±150 cm dari permukaan lantai)',
    focalLengthImpression: '50mm standard focal length (perspektif optik alami bebas distorsi lensa)',
    framing: `Medium environmental framing dengan proporsi rasio kanvas ${effectiveAr}`,
    depthOfField: 'Medium depth of field: latar belakang terbaca detail dengan hierarki visual teratur',
    lightingStyle: lightType,
    lightingSoftness: 'Diffused wrap-around soft lighting dengan transisi highlight-ke-bayangan gradual',
    shadowCharacter: 'Bayangan lembut bergradasi alami di bawah perabotan dan sepanjang garis lantai',
    realism: 'Autentik, fotorealistik dengan reproduksi optik nyata tanpa artefak sintetis',
    renderingStyle: 'Rentang tonal kaya dengan penonjolan tekstur mikro pada material permukaan',
    summary: `Fotografi arsitektural menggunakan perspektif eye-level 50mm yang natural. Tata cahaya ${lightType.toLowerCase()} menghasilkan bayangan lembut bertingkat serta depth of field yang menjaga detail elemen latar tetap tajam dan informatif.`
  };

  // 3. HUBUNGAN SUBJEK & LATAR
  const hubunganSubjekLatar = {
    subjectPlacementInFrame: 'Tengah frame (Center alignment)',
    relativePositionToBg: 'Berada di depan struktur dinding utama pada jarak terukur',
    distanceFromBg: 'Sekitar 1.2 hingga 1.8 meter di depan bidang latar belakang',
    scaleToSpace: 'Mengisi sekitar 25% - 35% bidang frame keseluruhan (proporsional manusiawi)',
    depthPlane: 'Middle ground bagian depan, terpisah tegas dari bidang latar',
    depthRelationship: 'Pemisahan kedalaman 3 dimensi nyata antara subjek, furnitur, dan dinding',
    framingRelationship: 'Dibingkai secara proporsional oleh elemen samping perabotan dan pencahayaan aksen',
    negativeSpace: 'Negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) serta headroom bersih',
    visualBalance: 'Keseimbangan simetris dinamis dengan penyeimbang visual di kedua sisi frame',
    perspectiveRelationship: 'Garis batas lantai dan kisi dinding mengalir halus menuju area penempatan subjek',
    orientation: 'Frontal atau tiga perempat (3/4) menghadap kamera',
    lightingRelationship: 'Pencahayaan subjek menyatu alami dengan cahaya lingkungan latar',
    framingElements: 'Dinding arsitektural utama dan elemen pencahayaan samping',
    spatialSummary: `Subjek diposisikan di tengah frame pada area middle ground dengan jarak sekitar 1.5 meter dari dinding latar belakang. Struktur arsitektural ${category} membentang rapi tepat di belakangnya. Elemen pencahayaan dan perabotan samping berada di kedua sisi frame, menciptakan keseimbangan komposisi visual yang harmonis. Terdapat ruang negatif yang memadai di kedua sisi badan serta headroom bersih sekitar 18% di atas kepala.`
  };

  // 4. REFERENSI OUTFIT SUBJEK (Strict Isolation)
  const referensiOutfitSubjek = {
    clothingType: 'Setelan smart-casual tailored blazer dipadukan dengan kemeja kerah bersih dan celana bahan',
    garmentStyle: 'Modern professional smart-casual',
    primaryColor: isDark ? 'Charcoal gray / deep navy' : 'Navy blue / dark graphite',
    secondaryColor: 'Crisp white / soft light gray',
    material: 'Campuran wol halus dan tenun katun berdaya serap cahaya tinggi',
    texture: 'Tekstur tenun matte halus tanpa kilau sintetis berlebih',
    pattern: 'Warna solid monokromatik dengan aksen jahitan mikro rapi',
    cut: 'Modern structured tailored cut dengan garis bahu tegas dan pas badan',
    layering: 'Dua lapis pakaian (outer blazer berkerah rapi di atas kemeja dalaman)',
    accessories: 'Jam tangan logam minimalis dan aksen saku ramping',
    footwear: 'Sepatu pantofel kulit matte bersih (jika tampak pada frame)',
    formality: 'Semi-formal eksekutif profesional',
    stylingCharacter: 'Elegan, berwibawa, bersih, dan tidak mencolok',
    relationshipToEnvironment: `Warna gelap pakaian memberikan kontras estetis yang seimbang terhadap palet latar ${dominantColorId}, memisahkan subjek dengan jelas dari lingkungan.`,
    privacyNote: '🛡️ Face / Identity Rule: Referensi pakaian saja, bebas biometrik wajah. Tidak dimasukkan ke Prompt Background.',
    summary: `Referensi pakaian subjek berupa setelan smart casual modern berpalet gelap netral dengan potongan tailored yang rapi. Memiliki kontras tonal yang harmonis terhadap latar belakang tanpa mendominasi frame.`
  };

  // 5. ELEMEN BACKGROUND
  const elemenBackground = {
    arsitektur: architecture,
    furniture: props,
    dekorasi: decoration,
    material: materials.map(m => `${m.material} (${m.texture})`).join('; '),
    warna: `Warna dominan: ${dominantColorId}; Warna aksen: ${secondaryColorId}; Palet: netral hangat harmonis`,
    lighting: `${lightType}, temperatur ${lightTemp}, bayangan lembut bertransisi gradual`,
    summary: `Latar belakang terdiri dari arsitektur ${architecture.toLowerCase()} yang kokoh, dilengkapi furnitur ${props.toLowerCase()}, dekorasi ${decoration.toLowerCase()}, serta material bertekstur ${materials.map(m => m.material).join(', ')}.`
  };

  // 6. KOMPOSISI & SPATIAL RELATIONSHIP
  const komposisiSpatial = {
    subjectPlacement: 'Center alignment pada sumbu vertikal, eye-level camera height',
    symmetry: 'Asimetris dinamis yang harmonis (Harmonious Dynamic Asymmetry)',
    horizontalBalance: 'Keseimbangan terdistribusi merata antara bobot visual sisi kiri dan kanan',
    verticalBalance: 'Pondasi bawah bertumpu kokoh pada bidang lantai dengan headroom lapang di atas',
    negativeSpace: 'Ruang kosong bersih 35%-40% dari total bidang frame untuk kelegaan visual',
    depth: 'Struktur kedalaman 3 dimensi berlapis (foreground lantai -> middle ground subjek -> background dinding)',
    perspective: 'One-point linear perspective yang mengalir menuju titik tengah',
    foreground: 'Bidang lantai bawah dan aksen sudut properti terdekat',
    midground: 'Area penempatan subjek dan furnitur penyangga utama',
    background: 'Dinding arsitektural utama dan elemen ornamen dinding vertikal',
    framing: 'Pembingkaian alami dari elemen perabotan lateral dan batas dinding ruangan',
    spatialHierarchy: 'Pusat perhatian tertuju pada area subjek dengan latar belakang berperan sebagai pendukung estetika kohesif',
    relativePositioning: 'Lantai di bawah, dinding di belakang, properti samping menyeimbangkan kedua sisi frame',
    summary: `Komposisi ruang memanfaatkan hierarki 3 bidang kedalaman dengan leading lines linear. Penempatan subjek di tengah frame diimbangi oleh elemen samping ruangan, menghasilkan pembingkaian alami yang stabil dan proporsional.`
  };

  // Format satu paragraf natural-language English prompt untuk AI image generation
  // SUASANA + GAYA FOTOGRAFI + HUBUNGAN SUBJEK & LATAR (SPATIAL) + ELEMEN BACKGROUND + KOMPOSISI + LIGHTING + PERSPECTIVE + DEPTH
  // MENUTUP DENGAN: Background only, no people, no face, no human identity, no text, no watermark. --ar ... --style raw --v 6.1
  const optimalPrompt = `A detailed indoor studio backdrop featuring a ${mood.toLowerCase().replace(/[^a-z0-9 ]/g, '')} ${category.toLowerCase().replace(/[^a-z0-9 ]/g, '')} atmosphere. Built-in ${dominantColorEn} architectural wall panels with fine surface textures of ${materials.map(m => m.material.toLowerCase().replace(/\([^)]*\)/g, '').trim()).join(' and ')}. Arranged with carefully coordinated interior elements including ${props.toLowerCase().replace(/[^a-z0-9, ]/g, '')} and subtle decorative accents. The environment is composed to naturally frame a centrally positioned subject, with the primary architectural wall forming a stable midground structure and lateral elements providing balanced framing depth. Soft diffused ambient lighting illuminating the scene evenly with gentle progressive shadows, creating a cozy, sophisticated, and professional mood. Eye-level linear perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${effectiveAr} --style raw --v 6.1 --no human subject, person, people, watermark, text`;

  // Objek-objek kompatibilitas (Preserved for backward-compat with existing cards & tests)
  const spaceAndComposition = {
    category,
    setting,
    architecture,
    decoration,
    propsAndAccessories: props,
    details: `${setting}. ${architecture}. Dilengkapi ${decoration} serta properti ${props}.`
  };

  const visualLayers = {
    foreground: 'Area depan frame dengan lantai dan aksen sudut properti terdekat',
    middleGround: 'Zona interaksi utama tempat kedudukan penempatan subjek dan furnitur penyangga',
    background: 'Dinding arsitektural utama dengan sekat pembagi, elemen gantung, dan dekorasi vertikal',
    perspective: 'Linear perspective eye-level dengan garis batas lantai-dinding mengalir rapi menuju titik tengah',
    depthOfField: 'Separasi kedalaman sedang (medium depth of field) dengan latar terbaca jelas namun tetap memberikan efek hierarki visual',
    relativePositions: [
      { element: 'Struktur Dinding Utama', position: 'Background tengah dan atas' },
      { element: 'Furnitur Penyangga Utama', position: 'Middle ground tengah' },
      { element: 'Lampu Aksen / Properti Samping', position: 'Middle ground kiri dan kanan' },
      { element: 'Lantai / Bidang Bawah', position: 'Foreground bawah' }
    ]
  };

  const colorAndMaterial = {
    palette: `${dominantColorId}, dipadukan dengan ${secondaryColorId}`,
    dominantColor: dominantColorId,
    accentColor: secondaryColorId,
    materialsAndTextures: materials,
    surfaceCharacter: 'Dominan permukaan matte non-reflektif bertekstur mikro alami dengan pantulan cahaya terkontrol'
  };

  const backgroundLighting = {
    type: lightType,
    direction: telemetry.lightingStyleIndonesian?.includes('kiri') ? 'Dominan dari arah kiri atas' : 'Merata terarah dari sudut 45 derajat',
    quality: 'Soft diffused dengan transisi highlight-ke-bayangan halus',
    intensity: isDark ? 'Intensitas sedang-rendah bernuansa intim' : 'Intensitas seimbang tidak overexposed',
    colorTemperature: lightTemp,
    shadows: 'Bayangan lembut di bawah furnitur dan sepanjang tepi dinding dengan detail gelap yang tetap terjaga',
    highlights: 'Highlight satin halus pada tepi furnitur dan aksen dekoratif',
    darkAreas: 'Sudut tepi ruangan dan bidang batas luar frame',
    contrast: isHighContrast ? 'Kontras terukur dengan pemisahan bidang yang tegas' : 'Kontras moderat lembut bergradasi alami',
    distribution: 'Terdistribusi harmonis pada seluruh latar belakang, menciptakan ilusi kedalaman tiga dimensi'
  };

  const photoMood = {
    mood,
    visualStyle,
    backgroundCharacter: 'Arsitektural, kohesif, proporsional, dan estetik',
    roomImpression: 'Memberikan kesan kedalaman ruang yang lapang dan teratur',
    formalityLevel: 'Semi-formal elegan dengan standar fotografi visual profesional',
    photoCharacter: `Fotografi arsitektural berresolusi tajam dengan rasio framing ${effectiveAr}`
  };

  const identifiedElements = [
    {
      name: 'Dinding Arsitektural Utama',
      type: 'Struktur Ruang',
      relativePosition: 'Background tengah dan atas',
      relativeSize: 'Besar (mengisi sekitar 45% frame)',
      visualFunction: 'Kanvas penahan pandangan dan pondasi atmosfer ruang',
      compositionRelation: 'Menjadi bidang vertikal stabil yang mengikat seluruh elemen'
    },
    {
      name: 'Elemen Furnitur / Properti Utama',
      type: 'Furnitur',
      relativePosition: 'Middle ground tengah',
      relativeSize: 'Sedang (mengisi sekitar 20% frame)',
      visualFunction: 'Anchor fisik dan penentu fungsi ruangan',
      compositionRelation: 'Titik tumpu horisontal penyangga komposisi'
    },
    {
      name: 'Aksen Pencahayaan / Lampu Ruangan',
      type: 'Pencahayaan / Aksesori',
      relativePosition: 'Middle ground samping',
      relativeSize: 'Sedang-vertikal',
      visualFunction: 'Penyedia aksen cahaya dan pemecah kekosongan bidang samping',
      compositionRelation: 'Counterbalance penyeimbang simetri visual'
    },
    {
      name: 'Dekorasi & Ornamen Lingkungan',
      type: 'Dekorasi',
      relativePosition: 'Background samping / ambalan',
      relativeSize: 'Kecil hingga sedang',
      visualFunction: 'Pemberi sentuhan personalitas estetika ruangan',
      compositionRelation: 'Pengisi ritme detail visual tanpa mendominasi frame'
    }
  ];

  const structureAndComposition = {
    symmetry: 'Asimetris seimbang (Harmonious Dynamic Asymmetry)',
    visualBalance: 'Keseimbangan terdistribusi proporsional antara sisi kiri dan kanan frame',
    repetitionPatterns: 'Pola garis vertikal kisi arsitektur dan bidang horizontal furnitur berulang teratur',
    leadingLines: 'Garis batas lantai dan sudut meja mengarahkan pandangan ke pusat frame',
    focalPoint: 'Area tengah bidang latar pada ketinggian eye-level',
    elementDistribution: 'Tersebar merata dengan rasio kepadatan seimbang',
    negativeSpace: 'Tersedia ruang kosong bersih yang cukup di sekeliling area penempatan subjek',
    spaceDepth: 'Hierarki kedalaman 3 dimensi nyata (foreground, middle ground, background)',
    framing: 'Elemen samping furnitur dan pencahayaan membentuk pembingkaian alami (natural frame)',
    layering: 'Multi-layer visual depth layering yang solid'
  };

  const subjectPlacement = {
    horizontalPos: 'Tengah frame (Center alignment)',
    verticalPos: 'Tengah frame (Eye-level center)',
    orientation: 'Frontal atau tiga perempat (3/4) menghadap kamera',
    scale: 'Medium shot (pinggang ke atas)',
    frameProportion: 'Mengisi sekitar 25% - 35% bidang frame keseluruhan',
    distanceFromBg: 'Berjarak sekitar 1.2 hingga 1.8 meter di depan dinding latar utama',
    depthPosition: 'Middle ground bagian depan, terpisah tegas dari lapisan latar belakang',
    bgAreaBehindSubject: 'Bidang tengah dinding arsitektural dan garis sekat vertikal tepat di belakang tubuh/kepala',
    negativeSpaceAround: 'Tersedia negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) badan',
    propsRelation: 'Diposisikan sejajar atau sedikit di depan furnitur utama, dengan lampu aksen berada di samping',
    anchorPoint: 'Titik temu antara garis batas bidang tengah latar dan garis horizontal lantai',
    compositionBalance: 'Menciptakan komposisi segitiga visual yang kokoh dan seimbang terhadap elemen latar samping',
    architecturalAlignment: 'Punggung/sumbu tubuh sejajar lurus dengan garis vertikal arsitektur latar',
    floorPlacement: 'Berdiri atau bertumpu mantap pada bidang lantai foreground/middle ground',
    framing: 'Dibingkai secara proporsional oleh elemen dekorasi di kedua sisi bidang luar',
    emptySpace: 'Headroom bersih lapang sekitar 15% - 20% dari batas atas frame hingga ujung kepala',
    sizeRelationToProps: 'Skala subjek natural dan berskala proporsional manusiawi terhadap furnitur di sekelilingnya',
    relativeToMainBgElement: 'Subjek berposisi tepat di tengah tanpa menutupi seluruh detail ornamen kunci latar belakang',
    spatialSummary: hubunganSubjekLatar.spatialSummary
  };

  const backgroundProfile = `${spaceAndComposition.category} dengan ${spaceAndComposition.setting}. Arsitektur latar menampilkan ${spaceAndComposition.architecture}, diperkaya dekorasi berupa ${spaceAndComposition.decoration}, serta perabotan ${spaceAndComposition.propsAndAccessories}. Palet warna didominasi oleh ${colorAndMaterial.palette} dengan karakter material ${materials.map(m => m.material).join(', ')}. Pencahayaan berkarakter ${backgroundLighting.type} dengan temperatur ${backgroundLighting.colorTemperature} dan distribusi cahaya terarah yang lembut. Suasana lingkungan terasa ${photoMood.mood} dalam gaya visual ${photoMood.visualStyle}. Struktur komposisi menghadirkan kedalaman ruang berlapis (layering) dengan leading lines perspektif yang rapi.`;
  const placementProfile = subjectPlacement.spatialSummary;

  const res = {
    mode: 'BACKGROUND_ANALYSIS',
    // 6 Bidang Analisis Master Patch
    suasanaMood,
    gayaFotografi,
    hubunganSubjekLatar,
    referensiOutfitSubjek,
    elemenBackground,
    komposisiSpatial,
    optimalPrompt,

    // Profil A & Profil B (Preserved)
    backgroundProfile,
    placementProfile,

    // 8 Kategori Internal (Preserved)
    spaceAndComposition,
    visualLayers,
    colorAndMaterial,
    backgroundLighting,
    photoMood,
    identifiedElements,
    structureAndComposition,
    subjectPlacement,

    suggestedShorthands: ['/background', '/interior', '/architecture', '/ambientlight', '/woodtexture', '/softlight', '/ruleofthirds'],
    negativePrompt: 'human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, cluttered mess, watermark, text',
    aspectRatio: effectiveAr
  };

  res.backgroundProfileText = formatBackgroundProfileText(res);
  res.placementProfileText = formatPlacementProfileText(res);
  res.fullReportText = formatFullBackgroundReportText(res);

  // 8 Aspek Kompatibilitas
  res.aspects = [
    { id: 'ruang_komposisi', title: '1. Ruang & Komposisi', content: `${spaceAndComposition.category} — ${spaceAndComposition.setting}` },
    { id: 'lapisan_visual', title: '2. Lapisan Visual & Kedalaman Ruang', content: `FG: ${visualLayers.foreground} | MG: ${visualLayers.middleGround} | BG: ${visualLayers.background}` },
    { id: 'warna_material', title: '3. Warna & Material Latar', content: `${colorAndMaterial.dominantColor}, ${colorAndMaterial.surfaceCharacter}` },
    { id: 'pencahayaan_latar', title: '4. Pencahayaan Latar & Properti', content: `${backgroundLighting.type} (${backgroundLighting.direction})` },
    { id: 'nuansa_foto', title: '5. Nuansa Foto / Latar', content: `${photoMood.mood} • ${photoMood.visualStyle}` },
    { id: 'elemen_teridentifikasi', title: '6. Elemen Latar Teridentifikasi', content: identifiedElements.map(e => e.name).join(', ') },
    { id: 'struktur_komposisi', title: '7. Struktur & Komposisi Latar', content: `${structureAndComposition.visualBalance} • ${structureAndComposition.repetitionPatterns}` },
    { id: 'hubungan_subjek_latar', title: '8. Hubungan Subjek & Latar', content: subjectPlacement.spatialSummary }
  ];

  return res;
}
