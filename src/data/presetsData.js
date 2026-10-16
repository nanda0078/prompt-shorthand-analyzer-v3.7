/**
 * Preset Test Cases V3.7
 * Preset pilihan untuk pengujian kualitas visual, pencahayaan, tekstur, dan optik kamera.
 */

export const PRESET_TEST_CASES = [
  {
    id: 'preset-a',
    label: 'A. Realitas Seperti Foto Kamera',
    badge: 'Camera Realism',
    prompt: 'authentic camera-captured appearance, photorealistic, natural optical rendering',
    description: 'Menghasilkan tampilan visual otentik seperti jepretan kamera asli dengan rendering optik natural.'
  },
  {
    id: 'preset-b',
    label: 'B. Detail Sangat Nyata',
    badge: 'Microtexture & Detail',
    prompt: 'high resolving detail, realistic microtexture, fine natural details, lifelike surface textures',
    description: 'Menonjolkan detail mikrotekstur resolusi tinggi dan tekstur permukaan alami yang hidup.'
  },
  {
    id: 'preset-c',
    label: 'C. Pencahayaan dan Warna Alami',
    badge: 'Natural Light & Color',
    prompt: 'physically accurate lighting, natural color rendition, realistic shadow gradients, balanced dynamic range',
    description: 'Pencahayaan akurat secara fisik dengan reproduksi warna alami, gradasi bayangan nyata, dan rentang dinamis seimbang.'
  },
  {
    id: 'preset-d',
    label: 'D. Ketajaman Seperti Lensa Profesional',
    badge: 'Pro Lens Optics',
    prompt: 'precise focus, natural optical depth of field, realistic bokeh, crisp details without oversharpening',
    description: 'Fokus presisi dengan depth of field optik alami, bokeh realistis, dan detail tajam tanpa oversharpening.'
  }
];
