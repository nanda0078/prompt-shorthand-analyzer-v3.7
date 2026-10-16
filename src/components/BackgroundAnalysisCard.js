/**
 * BackgroundAnalysisCard Component V3.7 — Master Patch
 * Menampilkan Hasil Analisis Khusus Latar Belakang (Structured Card Layout):
 * 1. SUASANA / MOOD [COPY]
 * 2. GAYA FOTOGRAFI [COPY]
 * 3. HUBUNGAN SUBJEK & LATAR [COPY]
 * 4. REFERENSI OUTFIT SUBJEK [COPY OUTFIT]
 * 5. ELEMEN BACKGROUND [COPY]
 * 6. KOMPOSISI & SPATIAL RELATIONSHIP [COPY]
 * 
 * PROMPT ANALISA OPTIMAL [EDIT PROMPT] [REGENERATE] [COPY PROMPT]
 * Serta mempertahankan PROFIL A & PROFIL B untuk kompatibilitas penuh.
 */

import {
  formatMoodText,
  formatPhotographyStyleText,
  formatSubjectBackgroundRelationshipText,
  formatOutfitReferenceText,
  formatBackgroundElementsText,
  formatCompositionSpatialText,
  formatBackgroundProfileText,
  formatPlacementProfileText,
  formatFullBackgroundReportText
} from '../lib/backgroundAnalyzer.js';

export function renderBackgroundAnalysisCard(optionsOrResult = {}) {
  const analysisResult = optionsOrResult?.analysisResult || optionsOrResult;
  const {
    onCopyMood,
    onCopyPhotographyStyle,
    onCopySubjectPlacement,
    onCopyOutfit,
    onCopyBackgroundElements,
    onCopyCompositionSpatial,
    onCopyOptimalPrompt,
    onEditOptimalPrompt,
    onRegenerateOptimalPrompt,
    onCopyBackgroundProfile,
    onCopyPlacementProfile,
    onCopyFullReport,
    onCopyGeneratedPrompt
  } = (optionsOrResult?.analysisResult ? optionsOrResult : optionsOrResult) || {};

  const bgData = analysisResult?.backgroundData || analysisResult || {};
  const bgProfile = analysisResult?.backgroundProfile || bgData.backgroundProfile || analysisResult?.generatedPrompt || '';
  const placementProfile = analysisResult?.placementProfile || bgData.placementProfile || bgData.subjectPlacement?.spatialSummary || '';
  const optimalPrompt = analysisResult?.optimalPrompt || bgData.optimalPrompt || '';

  // 6 Bidang Utama Master Patch
  const mood = bgData.suasanaMood || bgData.photoMood || {};
  const photo = bgData.gayaFotografi || {};
  const rel = bgData.hubunganSubjekLatar || bgData.subjectPlacement || {};
  const outfit = bgData.referensiOutfitSubjek || {};
  const elements = bgData.elemenBackground || {};
  const spatial = bgData.komposisiSpatial || bgData.structureAndComposition || {};

  // Ringkasan Teks Masing-Masing Bidang (Target Utama Tombol COPY Ringkasan)
  const moodSummaryText = mood.summary || mood.atmosphere || 'Suasana dan mood latar belakang sedang dianalisis...';
  const photoSummaryText = photo.summary || 'Karakteristik gaya fotografi sedang dianalisis...';
  const subjectRelSummaryText = rel.spatialSummary || placementProfile || 'Subjek berada di tengah frame pada area middle ground dengan elemen latar belakang membingkai secara alami.';
  const outfitSummaryText = outfit.summary || 'Referensi pakaian subjek sedang dianalisis...';
  const spatialSummaryText = spatial.summary || 'Struktur komposisi ruang sedang dianalisis...';

  // Compatibility fields
  const space = bgData.spaceAndComposition || {};
  const layers = bgData.visualLayers || {};
  const colors = bgData.colorAndMaterial || {};
  const lighting = bgData.backgroundLighting || {};
  const aspects = Array.isArray(bgData.aspects) ? bgData.aspects : (Array.isArray(analysisResult?.aspects) ? analysisResult.aspects : []);
  const identifiedList = Array.isArray(bgData.identifiedElements) ? bgData.identifiedElements : [];

  const sourceBadge = analysisResult?.source === 'GEMINI_AI'
    ? `<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🌐 Vision AI Aktif (${analysisResult.imageInfo?.name || 'Gambar Aktual'})</span>`
    : `<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🤖 Source of Truth Latar Belakang</span>`;

  const html = `
    <!-- CARD 1: HASIL ANALISIS LATAR BELAKANG -->
    <section class="panel analyzer-card card-background-analysis" id="card-background-analysis" style="border-left: 3px solid #10b981;">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #10b981;"><path fill="currentColor" d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>
          <h2 style="color: #10b981;">HASIL ANALISIS LATAR BELAKANG</h2>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
          <span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🏞️ Analisa Latar Belakang/background</span>
          ${sourceBadge}
          <button type="button" class="btn btn-outline btn-xs" id="btn-copy-full-bg-report" title="Salin seluruh laporan analisis latar belakang lengkap">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            Salin Seluruh Laporan
          </button>
        </div>
      </div>

      <!-- 6 STRUKTUR UTAMA ANALISA BACKGROUND -->
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.75rem;">

        <!-- 1. SUASANA / MOOD -->
        <div class="bg-section-card" id="section-suasana-mood" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(168, 85, 247, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">🎭</span>
              <strong style="color: #c084fc; font-size: 0.875rem;">1. SUASANA / MOOD</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(168, 85, 247, 0.1); border-left: 3px solid #c084fc; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${moodSummaryText}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-mood" style="color: #c084fc; border-color: rgba(168, 85, 247, 0.4); flex-shrink: 0;" title="Salin ringkasan Suasana / Mood">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #c084fc;">Atmosphere:</strong> <span style="color: #cbd5e1;">${mood.atmosphere || '-'}</span></div>
            <div><strong style="color: #c084fc;">Mood:</strong> <span style="color: #cbd5e1;">${mood.mood || '-'}</span></div>
            <div><strong style="color: #c084fc;">Emotional Tone:</strong> <span style="color: #cbd5e1;">${mood.emotionalTone || mood.mood || '-'}</span></div>
            <div><strong style="color: #c084fc;">Visual Temperature:</strong> <span style="color: #cbd5e1;">${mood.visualTemperature || '-'}</span></div>
            <div><strong style="color: #c084fc;">Formalitas:</strong> <span style="color: #cbd5e1;">${mood.formality || '-'}</span></div>
            <div><strong style="color: #c084fc;">Ambience:</strong> <span style="color: #cbd5e1;">${mood.overallAmbience || '-'}</span></div>
            <div><strong style="color: #c084fc;">Sophistication:</strong> <span style="color: #cbd5e1;">${mood.sophistication || 'High / Elegant'}</span></div>
            <div><strong style="color: #c084fc;">Karakter:</strong> <span style="color: #cbd5e1;">${mood.characterType || '-'}</span></div>
          </div>
        </div>

        <!-- 2. GAYA FOTOGRAFI -->
        <div class="bg-section-card" id="section-gaya-fotografi" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(59, 130, 246, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">📷</span>
              <strong style="color: #60a5fa; font-size: 0.875rem;">2. GAYA FOTOGRAFI</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(59, 130, 246, 0.1); border-left: 3px solid #60a5fa; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${photoSummaryText}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-photo-style" style="color: #60a5fa; border-color: rgba(59, 130, 246, 0.4); flex-shrink: 0;" title="Salin ringkasan Gaya Fotografi">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #60a5fa;">Photography Style:</strong> <span style="color: #cbd5e1;">${photo.photographyStyle || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Genre:</strong> <span style="color: #cbd5e1;">${photo.genre || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Perspektif Kamera:</strong> <span style="color: #cbd5e1;">${photo.cameraPerspective || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Ketinggian Kamera:</strong> <span style="color: #cbd5e1;">${photo.cameraHeight || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Lensa:</strong> <span style="color: #cbd5e1;">${photo.focalLengthImpression || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Framing:</strong> <span style="color: #cbd5e1;">${photo.framing || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Depth of Field:</strong> <span style="color: #cbd5e1;">${photo.depthOfField || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Pencahayaan:</strong> <span style="color: #cbd5e1;">${photo.lightingStyle || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Kelembutan Cahaya:</strong> <span style="color: #cbd5e1;">${photo.lightingSoftness || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Bayangan:</strong> <span style="color: #cbd5e1;">${photo.shadowCharacter || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Realisme:</strong> <span style="color: #cbd5e1;">${photo.realism || '-'}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Rendering:</strong> <span style="color: #cbd5e1;">${photo.renderingStyle || '-'}</span></div>
          </div>
        </div>

        <!-- 3. HUBUNGAN SUBJEK & LATAR (WAJIB) -->
        <div class="bg-section-card" id="section-hubungan-subjek" style="background: rgba(15, 23, 42, 0.9); border: 2px solid #38bdf8; border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(56, 189, 248, 0.3); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">👥</span>
              <strong style="color: #38bdf8; font-size: 0.875rem;">3. HUBUNGAN SUBJEK &amp; LATAR</strong>
              <span class="badge badge-blue" style="font-size: 0.7rem; margin-left: 0.35rem;">WAJIB</span>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(56, 189, 248, 0.12); border-left: 3px solid #38bdf8; padding: 0.85rem; border-radius: 4px; font-size: 0.825rem; line-height: 1.6; color: #f1f5f9; margin-bottom: 0.75rem;">
            <div style="flex: 1;">
              <strong style="color: #38bdf8; display: block; margin-bottom: 0.25rem;">Deskripsi Spasial Alami:</strong>
              ${subjectRelSummaryText}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-subject-placement" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); flex-shrink: 0;" title="Salin ringkasan Hubungan Subjek & Latar">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #38bdf8;">Posisi Subjek:</strong> <span style="color: #cbd5e1;">${rel.subjectPlacementInFrame || rel.horizontalPos || 'Tengah (Center)'}</span></div>
            <div><strong style="color: #38bdf8;">Posisi Relatif ke BG:</strong> <span style="color: #cbd5e1;">${rel.relativePositionToBg || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Jarak ke Background:</strong> <span style="color: #cbd5e1;">${rel.distanceFromBg || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Skala Subjek:</strong> <span style="color: #cbd5e1;">${rel.scaleToSpace || rel.scale || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Bidang Kedalaman:</strong> <span style="color: #cbd5e1;">${rel.depthPlane || rel.depthPosition || 'Midground'}</span></div>
            <div><strong style="color: #38bdf8;">Separasi Kedalaman:</strong> <span style="color: #cbd5e1;">${rel.depthRelationship || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Framing:</strong> <span style="color: #cbd5e1;">${rel.framingRelationship || rel.framing || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Negative Space:</strong> <span style="color: #cbd5e1;">${rel.negativeSpace || rel.negativeSpaceAround || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Keseimbangan Visual:</strong> <span style="color: #cbd5e1;">${rel.visualBalance || rel.compositionBalance || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Perspektif:</strong> <span style="color: #cbd5e1;">${rel.perspectiveRelationship || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Orientasi Subjek:</strong> <span style="color: #cbd5e1;">${rel.orientation || '-'}</span></div>
            <div><strong style="color: #38bdf8;">Pencahayaan Relasi:</strong> <span style="color: #cbd5e1;">${rel.lightingRelationship || '-'}</span></div>
          </div>
        </div>

        <!-- 4. REFERENSI OUTFIT SUBJEK (TERPISAH DARI PROMPT BACKGROUND) -->
        <div class="bg-section-card" id="section-outfit-ref" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(234, 179, 8, 0.4); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(234, 179, 8, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">👔</span>
              <strong style="color: #facc15; font-size: 0.875rem;">4. REFERENSI OUTFIT SUBJEK</strong>
            </div>
          </div>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.65rem;">
            🛡️ <strong>FACE / IDENTITY RULE:</strong> <em>Referensi busana saja. Tidak menganalisis identitas/wajah manusia, dan <strong>TIDAK dimasukkan</strong> ke Prompt Background Final.</em>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(234, 179, 8, 0.1); border-left: 3px solid #facc15; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${outfitSummaryText}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-outfit" style="color: #facc15; border-color: rgba(234, 179, 8, 0.4); flex-shrink: 0;" title="Salin ringkasan Referensi Outfit Subjek">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #facc15;">Jenis Pakaian:</strong> <span style="color: #cbd5e1;">${outfit.clothingType || '-'}</span></div>
            <div><strong style="color: #facc15;">Gaya Busana:</strong> <span style="color: #cbd5e1;">${outfit.garmentStyle || '-'}</span></div>
            <div><strong style="color: #facc15;">Warna Utama:</strong> <span style="color: #cbd5e1;">${outfit.primaryColor || '-'}</span></div>
            <div><strong style="color: #facc15;">Warna Sekunder:</strong> <span style="color: #cbd5e1;">${outfit.secondaryColor || '-'}</span></div>
            <div><strong style="color: #facc15;">Material:</strong> <span style="color: #cbd5e1;">${outfit.material || '-'}</span></div>
            <div><strong style="color: #facc15;">Tekstur:</strong> <span style="color: #cbd5e1;">${outfit.texture || '-'}</span></div>
            <div><strong style="color: #facc15;">Pola / Pattern:</strong> <span style="color: #cbd5e1;">${outfit.pattern || '-'}</span></div>
            <div><strong style="color: #facc15;">Potongan (Cut):</strong> <span style="color: #cbd5e1;">${outfit.cut || '-'}</span></div>
            <div><strong style="color: #facc15;">Layering:</strong> <span style="color: #cbd5e1;">${outfit.layering || '-'}</span></div>
            <div><strong style="color: #facc15;">Aksesori:</strong> <span style="color: #cbd5e1;">${outfit.accessories || '-'}</span></div>
            <div><strong style="color: #facc15;">Alas Kaki:</strong> <span style="color: #cbd5e1;">${outfit.footwear || '-'}</span></div>
            <div><strong style="color: #facc15;">Formalitas:</strong> <span style="color: #cbd5e1;">${outfit.formality || '-'}</span></div>
            <div style="grid-column: 1 / -1;"><strong style="color: #facc15;">Harmonisasi dengan Latar:</strong> <span style="color: #cbd5e1;">${outfit.relationshipToEnvironment || '-'}</span></div>
          </div>
        </div>

        <!-- 5. ELEMEN BACKGROUND -->
        <div class="bg-section-card" id="section-bg-elements" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">🏛️</span>
              <strong style="color: #34d399; font-size: 0.875rem;">5. ELEMEN BACKGROUND</strong>
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-bg-elements" style="color: #34d399; border-color: rgba(16, 185, 129, 0.4);" title="Salin hanya analisis Elemen Background">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.6rem; font-size: 0.8rem;">
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🏛️ Arsitektur / Struktur:</strong>
              <span style="color: #f1f5f9;">${elements.arsitektur || space.architecture || '-'}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🪑 Furniture:</strong>
              <span style="color: #f1f5f9;">${elements.furniture || space.propsAndAccessories || '-'}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🖼️ Dekorasi:</strong>
              <span style="color: #f1f5f9;">${elements.dekorasi || space.decoration || '-'}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🧱 Material:</strong>
              <span style="color: #f1f5f9;">${elements.material || (Array.isArray(colors.materialsAndTextures) ? colors.materialsAndTextures.map(m => m.material).join(', ') : '-')}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🎨 Warna:</strong>
              <span style="color: #f1f5f9;">${elements.warna || colors.palette || '-'}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">💡 Lighting:</strong>
              <span style="color: #f1f5f9;">${elements.lighting || lighting.type || '-'}</span>
            </div>
          </div>
        </div>

        <!-- 6. KOMPOSISI & SPATIAL RELATIONSHIP -->
        <div class="bg-section-card" id="section-bg-spatial" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(20, 184, 166, 0.35); border-radius: var(--radius-md); padding: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(20, 184, 166, 0.2); padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="font-size: 1.1rem;">📐</span>
              <strong style="color: #2dd4bf; font-size: 0.875rem;">6. KOMPOSISI &amp; SPATIAL RELATIONSHIP</strong>
            </div>
          </div>
          <div class="summary-box" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; background: rgba(20, 184, 166, 0.1); border-left: 3px solid #2dd4bf; padding: 0.75rem 0.85rem; border-radius: 4px; margin-bottom: 0.75rem;">
            <div style="font-size: 0.825rem; line-height: 1.5; color: #f1f5f9; flex: 1;">
              ${spatialSummaryText}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-composition-spatial" style="color: #2dd4bf; border-color: rgba(20, 184, 166, 0.4); flex-shrink: 0;" title="Salin ringkasan Komposisi & Spatial Relationship">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #2dd4bf;">Penempatan Subjek:</strong> <span style="color: #cbd5e1;">${spatial.subjectPlacement || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Simetri / Asimetri:</strong> <span style="color: #cbd5e1;">${spatial.symmetry || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Horisontal:</strong> <span style="color: #cbd5e1;">${spatial.horizontalBalance || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Vertikal:</strong> <span style="color: #cbd5e1;">${spatial.verticalBalance || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Negative Space:</strong> <span style="color: #cbd5e1;">${spatial.negativeSpace || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Kedalaman (Depth):</strong> <span style="color: #cbd5e1;">${spatial.depth || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Perspektif:</strong> <span style="color: #cbd5e1;">${spatial.perspective || layers.perspective || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Foreground:</strong> <span style="color: #cbd5e1;">${spatial.foreground || layers.foreground || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Midground:</strong> <span style="color: #cbd5e1;">${spatial.midground || layers.middleGround || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Background:</strong> <span style="color: #cbd5e1;">${spatial.background || layers.background || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Framing:</strong> <span style="color: #cbd5e1;">${spatial.framing || '-'}</span></div>
            <div><strong style="color: #2dd4bf;">Hierarki Spasial:</strong> <span style="color: #cbd5e1;">${spatial.spatialHierarchy || '-'}</span></div>
          </div>
        </div>

      </div>

      <!-- KARTU PROFIL A & PROFIL B & 8 ASPEK (PRESERVED FOR BACKWARD COMPATIBILITY) -->
      <details style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem;">
        <summary style="cursor: pointer; font-size: 0.8rem; color: #94a3b8; user-select: none;">
          ℹ️ Tampilkan Rincian 8 Aspek Analisis Latar Belakang &amp; Ringkasan Profil A/B
        </summary>
        <div style="margin-top: 0.75rem;">
          <h4 style="font-size: 0.825rem; color: #94a3b8; margin-bottom: 0.5rem;">Rincian 8 Aspek Analisis Latar Belakang</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.5rem; margin-bottom: 0.75rem;">
            ${(aspects || []).map(asp => `
              <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 0.5rem; font-size: 0.75rem;">
                <strong style="color: #38bdf8; display: block; margin-bottom: 0.2rem;">${asp.aspectNumber}. ${String(asp.title || '').toUpperCase().replace('&', '&amp;')}</strong>
                <p style="color: #cbd5e1; margin: 0; line-height: 1.4;">${asp.summary || '-'}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem; margin-top: 0.6rem;">
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(16,185,129,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #10b981; font-size: 0.8rem;">PROFIL A: BACKGROUND PROFILE (PROFIL LATAR BELAKANG)</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-bg-profile">Salin Profil A</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${bgProfile || '-'}
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(56,189,248,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #38bdf8; font-size: 0.8rem;">PROFIL B: SUBJECT–BACKGROUND PLACEMENT PROFILE</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-placement-profile">Salin Profil B</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${placementProfile || '-'}
            </div>
          </div>
        </div>
      </details>
    </section>

    <!-- CARD 2: PROMPT ANALISA OPTIMAL -->
    <section class="panel analyzer-card card-optimal-prompt" id="card-optimal-prompt" style="border-left: 3px solid #38bdf8; margin-top: 1.25rem;">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #38bdf8;">PROMPT ANALISA OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.45rem; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn btn-outline btn-sm" id="btn-edit-optimal-prompt" title="Edit Prompt Analisa Optimal secara manual">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            EDIT PROMPT
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="btn-regenerate-optimal-prompt" title="Regenerasi variasi prompt baru dari hasil analisis yang sama">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
            REGENERATE
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-optimal-prompt" title="Salin hanya Prompt Analisa Optimal">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            COPY PROMPT
          </button>
        </div>
      </div>

      <!-- KONTEN PROMPT (VIEW MODE) -->
      <div id="optimal-prompt-view-container" style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 1.15rem; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.65; color: #f8fafc; white-space: pre-wrap; word-break: break-word;">
        ${optimalPrompt || '<span style="color: #94a3b8; font-style: italic;">Prompt analisa optimal sedang dibuat...</span>'}
      </div>

      <!-- KONTEN PROMPT (EDIT MODE - INLINE) -->
      <div id="optimal-prompt-edit-container" style="display: none; flex-direction: column; gap: 0.6rem; margin-top: 0.25rem;">
        <textarea 
          id="optimal-prompt-edit-textarea" 
          rows="6" 
          style="width: 100%; background: rgba(0, 0, 0, 0.6); border: 1px solid #38bdf8; border-radius: 6px; padding: 0.85rem; color: #f8fafc; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; resize: vertical;"
        >${optimalPrompt || ''}</textarea>
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <button type="button" class="btn btn-outline btn-xs" id="btn-cancel-edit-prompt">Batal</button>
          <button type="button" class="btn btn-primary btn-xs" id="btn-save-edited-prompt">Simpan &amp; Terapkan</button>
        </div>
      </div>

      <div style="margin-top: 0.65rem; font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.4rem;">
        <span>💡 <em>Prompt di atas adalah paragraf AI profesional Bahasa Inggris. Sistem Shorthand di bawah berjalan langsung berdasarkan prompt ini.</em></span>
        <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">Production-Ready</span>
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      const copyToClipboard = (text, toastMessage) => {
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          ta.remove();
        }
      };

      // Helper feedback tombol COPY
      const setTemporaryCopiedState = (btn, defaultText = '📋 COPY') => {
        if (!btn) return;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ COPIED';
        btn.style.opacity = '0.9';
        setTimeout(() => {
          btn.innerHTML = originalText || defaultText;
          btn.style.opacity = '1';
        }, 1500);
      };

      // 1. Copy Suasana / Mood (Hanya Isi Ringkasan)
      const btnCopyMood = container.querySelector('#btn-copy-mood');
      if (btnCopyMood) {
        btnCopyMood.addEventListener('click', () => {
          const txt = moodSummaryText;
          if (onCopyMood) onCopyMood(txt);
          else copyToClipboard(txt, 'Ringkasan Suasana / Mood berhasil disalin!');
          setTemporaryCopiedState(btnCopyMood);
        });
      }

      // 2. Copy Gaya Fotografi (Hanya Isi Ringkasan)
      const btnCopyPhoto = container.querySelector('#btn-copy-photo-style, #btn-copy-photography-style');
      if (btnCopyPhoto) {
        btnCopyPhoto.addEventListener('click', () => {
          const txt = photoSummaryText;
          if (onCopyPhotographyStyle) onCopyPhotographyStyle(txt);
          else copyToClipboard(txt, 'Ringkasan Gaya Fotografi berhasil disalin!');
          setTemporaryCopiedState(btnCopyPhoto);
        });
      }

      // 3. Copy Hubungan Subjek & Latar (Hanya Ringkasan Deskripsi Spasial Alami)
      const btnCopyRel = container.querySelector('#btn-copy-subject-placement, #btn-copy-subject-background-rel');
      if (btnCopyRel) {
        btnCopyRel.addEventListener('click', () => {
          const txt = subjectRelSummaryText;
          if (onCopySubjectPlacement) onCopySubjectPlacement(txt);
          else copyToClipboard(txt, 'Ringkasan Hubungan Subjek & Latar berhasil disalin!');
          setTemporaryCopiedState(btnCopyRel);
        });
      }

      // 4. Copy Referensi Outfit Subjek (Hanya Isi Ringkasan Outfit)
      const btnCopyOutfit = container.querySelector('#btn-copy-outfit');
      if (btnCopyOutfit) {
        btnCopyOutfit.addEventListener('click', () => {
          const txt = outfitSummaryText;
          if (onCopyOutfit) onCopyOutfit(txt);
          else copyToClipboard(txt, 'Ringkasan Referensi Outfit Subjek berhasil disalin!');
          setTemporaryCopiedState(btnCopyOutfit);
        });
      }

      // 5. Copy Elemen Background (Tetap pada Section 5)
      const btnCopyElements = container.querySelector('#btn-copy-bg-elements');
      if (btnCopyElements) {
        btnCopyElements.addEventListener('click', () => {
          const txt = formatBackgroundElementsText(bgData);
          if (onCopyBackgroundElements) onCopyBackgroundElements(txt);
          else copyToClipboard(txt, 'Analisis Elemen Background berhasil disalin!');
          setTemporaryCopiedState(btnCopyElements);
        });
      }

      // 6. Copy Komposisi & Spatial Relationship (Hanya Isi Ringkasan)
      const btnCopySpatial = container.querySelector('#btn-copy-composition-spatial');
      if (btnCopySpatial) {
        btnCopySpatial.addEventListener('click', () => {
          const txt = spatialSummaryText;
          if (onCopyCompositionSpatial) onCopyCompositionSpatial(txt);
          else copyToClipboard(txt, 'Ringkasan Komposisi & Spatial Relationship berhasil disalin!');
          setTemporaryCopiedState(btnCopySpatial);
        });
      }

      // Copy Prompt Analisa Optimal
      const btnCopyPrompt = container.querySelector('#btn-copy-optimal-prompt');
      if (btnCopyPrompt) {
        btnCopyPrompt.addEventListener('click', () => {
          const txt = optimalPrompt || bgData.optimalPrompt || '';
          if (onCopyOptimalPrompt) onCopyOptimalPrompt(txt);
          else if (onCopyGeneratedPrompt) onCopyGeneratedPrompt(txt);
          else copyToClipboard(txt);
        });
      }

      // Edit Prompt Analisa Optimal
      const btnEditPrompt = container.querySelector('#btn-edit-optimal-prompt');
      const viewContainer = container.querySelector('#optimal-prompt-view-container');
      const editContainer = container.querySelector('#optimal-prompt-edit-container');
      const textarea = container.querySelector('#optimal-prompt-edit-textarea');
      const btnSaveEdit = container.querySelector('#btn-save-edited-prompt');
      const btnCancelEdit = container.querySelector('#btn-cancel-edit-prompt');

      if (btnEditPrompt && viewContainer && editContainer && textarea) {
        btnEditPrompt.addEventListener('click', () => {
          viewContainer.style.display = 'none';
          editContainer.style.display = 'flex';
          textarea.focus();
        });

        if (btnCancelEdit) {
          btnCancelEdit.addEventListener('click', () => {
            editContainer.style.display = 'none';
            viewContainer.style.display = 'block';
          });
        }

        if (btnSaveEdit) {
          btnSaveEdit.addEventListener('click', () => {
            const newPrompt = textarea.value.trim();
            if (newPrompt && onEditOptimalPrompt) {
              onEditOptimalPrompt(newPrompt);
            }
            editContainer.style.display = 'none';
            viewContainer.style.display = 'block';
          });
        }
      }

      // Regenerate Prompt Analisa Optimal
      const btnRegenerate = container.querySelector('#btn-regenerate-optimal-prompt');
      if (btnRegenerate && onRegenerateOptimalPrompt) {
        btnRegenerate.addEventListener('click', () => {
          onRegenerateOptimalPrompt();
        });
      }

      // Backward compatibility copy buttons
      const btnCopyBgProf = container.querySelector('#btn-copy-bg-profile');
      if (btnCopyBgProf) {
        btnCopyBgProf.addEventListener('click', () => {
          const txt = formatBackgroundProfileText(bgData) || bgProfile;
          if (onCopyBackgroundProfile) onCopyBackgroundProfile(txt);
          else copyToClipboard(txt);
        });
      }

      const btnCopyPlacementProf = container.querySelector('#btn-copy-placement-profile');
      if (btnCopyPlacementProf) {
        btnCopyPlacementProf.addEventListener('click', () => {
          const txt = formatPlacementProfileText(bgData) || placementProfile;
          if (onCopyPlacementProfile) onCopyPlacementProfile(txt);
          else copyToClipboard(txt);
        });
      }

      const btnCopyFullReport = container.querySelector('#btn-copy-full-bg-report');
      if (btnCopyFullReport) {
        btnCopyFullReport.addEventListener('click', () => {
          const txt = formatFullBackgroundReportText(bgData);
          if (onCopyFullReport) onCopyFullReport(txt);
          else copyToClipboard(txt);
        });
      }
    }
  };
}
