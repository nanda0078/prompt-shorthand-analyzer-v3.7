(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const de={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},xa={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},Ya=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function Ma(o,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),r=o.code.toLowerCase(),t=o.name.toLowerCase(),i=o.target.toLowerCase(),n=o.category.toLowerCase(),s=o.description.toLowerCase();if(r===e||r===`/${e}`)return 100;if(r.includes(e))return 75;if(o.semanticTriggers&&o.semanticTriggers.some(u=>u.toLowerCase()===e))return 95;if(o.negativeTriggers)for(const u of o.negativeTriggers){const p=u.toLowerCase(),c=e.indexOf(p);if(c!==-1){const h=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p),k=e.slice(0,c).trim(),m=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(k);if(h||!m)return-50}}if(o.semanticTriggers)for(const u of o.semanticTriggers){const p=u.toLowerCase(),c=e.indexOf(p);if(c!==-1){const h=e.slice(0,c).trim(),k=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(h),m=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p);if(!k||m)return 85}else if(p.includes(e))return 80}const l=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),d=e.split(/\s+/).filter(u=>u.length>2&&!l.has(u));let g=0;for(const u of o.semanticTriggers||[]){const p=u.toLowerCase();if(d.length>0&&d.every(h=>p.includes(h)))return 75;const c=d.filter(h=>p.includes(h)).length;c>g&&(g=c)}return g>1?40+g*5:t.includes(e)?50:i.includes(e)||n.includes(e)?40:s.includes(e)?30:0}function ue(o,{category:a="ALL",target:e="ALL",recommendationLevel:r="ALL",searchQuery:t=""}={}){const i=o.filter(n=>!(a!=="ALL"&&n.category!==a||e!=="ALL"&&n.target!==e||r!=="ALL"&&n.recommendationLevel!==r));if(t&&t.trim()){const n=[];for(const s of i){const l=Ma(s,t);l>0&&n.push({item:s,score:l})}return n.sort((s,l)=>l.score-s.score),n.map(s=>s.item)}return i}const ce="psa_v2_catalog_db",ge=1,Sa="user_shorthands";class pe{constructor(a=Ya){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((a,e)=>{const r=window.indexedDB.open(ce,ge);r.onupgradeneeded=t=>{const i=t.target.result;i.objectStoreNames.contains(Sa)||i.createObjectStore(Sa,{keyPath:"code"})},r.onsuccess=t=>a(t.target.result),r.onerror=t=>e(t.target.error)}),await this.loadFromIndexedDB()}catch(a){console.warn("IndexedDB unavailable, using memory fallback:",a)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,r)=>{const t=this.db.transaction([Sa],"readonly").objectStore(Sa).getAll();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>r(t.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const r of this.userCatalog.values()){const t=e.findIndex(i=>i.code===r.code);t!==-1?e[t]={...e[t],...r}:e.push(r)}return a?e:e.filter(r=>r.status!=="DISABLED")}searchShorthands(a,e={}){const r=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return r;const t=a.toLowerCase().trim(),i=[];for(const n of r){let s=Ma(n,t);n.functionGroup&&n.functionGroup.toLowerCase().includes(t)&&(s=Math.max(s,60)),n.equivalentTo&&n.equivalentTo.some(l=>l.toLowerCase().includes(t))&&(s=Math.max(s,70)),n.relationships&&n.relationships.some(l=>{var d,g;return((d=l.code)==null?void 0:d.toLowerCase().includes(t))||((g=l.relationType)==null?void 0:g.toLowerCase().includes(t))})&&(s=Math.max(s,45)),s>0&&i.push({item:n,score:s})}return i.sort((n,s)=>s.score-n.score),i.map(n=>n.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(r=>r.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(r=>r.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(r=>r.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const e=this.getAll().find(r=>r.code===a||r.target===a);return!e||!e.relationships?[]:e.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),r=e.find(i=>i.code.toLowerCase()===a.code.toLowerCase());if(r)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:r,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const i=e.find(n=>n.functionGroup===a.functionGroup);if(i)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:i,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${i.code}).`}}const t=e.find(i=>i.equivalentTo&&i.equivalentTo.some(n=>n.toLowerCase()===a.code.toLowerCase()));return t?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:t,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${t.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((r,t)=>{const i=this.db.transaction([Sa],"readwrite").objectStore(Sa).put(e);i.onsuccess=()=>r(),i.onerror=()=>t(i.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(e=>e.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((e,r)=>{const t=this.db.transaction([Sa],"readwrite").objectStore(Sa).delete(a);t.onsuccess=()=>e(),t.onerror=()=>r(t.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:r,geminiKey:t,secret:i,password:n,...s}=e;return s});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let r=null;if(typeof a=="string")try{r=JSON.parse(a)}catch(n){throw new Error("Format JSON impor tidak valid: "+n.message)}else r=a;const t=Array.isArray(r)?r:r.entries||[];if(!Array.isArray(t))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((n,s)=>{const l=this.db.transaction([Sa],"readwrite").objectStore(Sa).clear();l.onsuccess=()=>n(),l.onerror=()=>s(l.error)}));let i=0;for(const n of t){if(!n||!n.code||this.coreCatalog.some(p=>p.code===n.code)&&e==="MERGE")continue;const{apiKey:s,geminiKey:l,secret:d,password:g,...u}=n;await this.add({...u,status:u.status||"APPROVED",source:u.source||"USER"}),i++}return{success:!0,count:i,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const r=this.db.transaction([Sa],"readwrite").objectStore(Sa).clear();r.onsuccess=()=>a(),r.onerror=()=>e(r.error)}),!0}}const wa={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},J={getApiKey(){try{return localStorage.getItem(wa.GEMINI_API_KEY)||""}catch{return""}},setApiKey(o){try{return o?localStorage.setItem(wa.GEMINI_API_KEY,o.trim()):localStorage.removeItem(wa.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(wa.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{const o=(localStorage.getItem(wa.GEMINI_MODEL)||"gemini-2.0-flash").trim().replace(/^models\//,"");return o.includes("1.5-pro")||o.includes("3.5")&&o!=="gemini-3.5-flash-lite"||o.includes("3.8")||o.includes("2.5-pro")?(localStorage.setItem(wa.GEMINI_MODEL,"gemini-2.0-flash"),"gemini-2.0-flash"):o}catch{return"gemini-2.0-flash"}},setModel(o){try{const a=(o||"gemini-2.0-flash").trim().replace(/^models\//,"");return localStorage.setItem(wa.GEMINI_MODEL,a),!0}catch{return!1}},getCustomCatalog(){try{const o=localStorage.getItem(wa.CUSTOM_CATALOG);return o?JSON.parse(o):[]}catch{return[]}},saveCustomCatalog(o){try{return localStorage.setItem(wa.CUSTOM_CATALOG,JSON.stringify(o)),!0}catch{return!1}},getUiPreferences(){try{const o=localStorage.getItem(wa.UI_PREFS);return o?JSON.parse(o):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(o){try{return localStorage.setItem(wa.UI_PREFS,JSON.stringify(o)),!0}catch{return!1}}};class me{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,r)=>r.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const r=this.patches.get(a);return r?(r.enabled=!!e,!0):!1}safeExecuteHook(a,e,r={}){let t=e;const i=this.getActivePatches(a);for(const n of i)try{const s=n.hooks[a];if(typeof s=="function"){const l=s(t,r);l!==void 0&&(t=l)}}catch(s){console.warn(`[PatchManager] Peringatan: Patch "${n.id}" pada hook "${a}" gagal dieksekusi:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:s.message,stack:s.stack})}return t}async safeExecuteHookAsync(a,e,r={}){let t=e;const i=this.getActivePatches(a);for(const n of i)try{const s=n.hooks[a];if(typeof s=="function"){const l=await s(t,r);l!==void 0&&(t=l)}}catch(s){console.warn(`[PatchManager] Peringatan: Async Patch "${n.id}" pada hook "${a}" gagal:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:s.message})}return t}}const qa=new me,he={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(o,a){return o&&{...o,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},ke={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(o){return o&&{...o,kamusStatus:{available:!0,version:"3.1.0"}}}}};qa.registerPatch(he);qa.registerPatch(ke);class be{constructor(a=Ya,e=qa){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const r=this.normalize(a),t=this.extractExistingShorthands(a),i=this.stripShorthands(a),n=this.analyzeIntent(i),{editAreas:s,lockedAreas:l,unchangedAreas:d}=this.extractAreas(i,n),g=this.queryPrimaryShorthands(i,s,l,n),u=this.deduplicateByFunctionGroup(g).map(f=>({...f,isPrimary:!0,checked:!0,priority:"WAJIB"})),p=this.discoverRelatedShorthands(i,u,s,l),c=[...u,...p],h=this.detectConflicts(s,l,u,t),k=this.evaluateExclusions(c,u);let m=[];if(e&&Array.isArray(e))m=[...e];else{const f=u.sort((I,E)=>(I.promptIndex??999)-(E.promptIndex??999)).map(I=>I.code),A=new Set([...t,...f]);m=Array.from(A)}for(const f of c)f.checked=m.includes(f.code),f.active=f.checked;const b=this.generateVisualTransformation(s,l,i),T=this.buildOptimalPrompt(i,m),v={rawPrompt:a,normalizedPrompt:r,cleanText:i,intent:n,editAreas:s,lockedAreas:l,unchangedAreas:d,conflicts:h,primaryShorthands:u,relatedShorthands:p,recommendations:c,exclusions:k,installedShorthands:m,visualTransformation:b,optimalPrompt:T,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",v,{engine:this,patchManager:this.patchManager,rawPrompt:a}):v}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,r=[];let t;for(;(t=e.exec(a))!==null;)r.push(t[0]);return Array.from(new Set(r))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let r="MODIFIKASI_VISUAL",t="Gambar",i="Memproses instruksi visual pada gambar.",n="MEDIUM",s="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(r="PENINGKATAN_PENCAHAYAAN",t="Pencahayaan & Tata Cahaya",i="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",n="HIGH",s="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(r="PELEPASAN_PENUTUP_KEPALA",t="Hijab / Penutup Kepala",i="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",n="HIGH",s="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(r="PENGGANTIAN_BUSANA",t="Pakaian & Outfit",i="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",n="HIGH",s="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(r="PENAJAMAN_DETAIL",t="Mikrokontras & Detail",i="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",n="HIGH",s="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(r="PENGHAPUSAN_LATAR",t="Latar Belakang / Background",i="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",n="CRITICAL",s="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(r="PENGGANTIAN_LATAR",t="Latar Belakang / Background",i="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",n="HIGH",s="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(r="PENYESUAIAN_RASIO_KANVAS",t="Kanvas & Dimensi",i="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",n="HIGH",s="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(r="MODIFIKASI_RAMBUT",t="Rambut & Gaya Rambut",i="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",n="HIGH",s="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(r="MODIFIKASI_BENTUK_TUBUH",t="Bentuk Tubuh & Proporsi Lekuk",i="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",n="HIGH",s="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(r="PENYEMPURNAAN_ANATOMI_TANGAN",t="Tangan & Jari Subjek",i="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",n="HIGH",s="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(r="PENINGKATAN_RESOLUSI",t="Resolusi & Detail Gambar",i="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",n="HIGH",s="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(r="PERLUASAN_KANVAS_OUTPAINT",t="Bidang & Batas Kanvas Foto",i="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",n="HIGH",s="CANVAS_RATIO"),{primaryAction:r,primaryTarget:t,summary:i,priority:n,category:s}}extractAreas(a,e){const r=a.toLowerCase(),t=[],i=[],n=new Set,s=v=>{for(const f of v)if(r.includes(f)&&[`jangan ubah ${f}`,`jangan ganti ${f}`,`jangan sentuh ${f}`,`jangan mengubah ${f}`,`pertahankan ${f}`,`kunci ${f}`,`jaga ${f}`,`${f} asli`,`${f} tetap`,`${f} sama`,`${f} harus tetap sama`,`keep ${f}`,`same ${f}`,`preserve ${f}`].some(A=>r.includes(A)))return!0;return!1},l=v=>{for(const f of v)if(r.includes(f)&&([`ubah ${f}`,`ganti ${f}`,`hapus ${f}`,`hilangkan ${f}`,`perbaiki ${f}`,`tingkatkan ${f}`,`buat ${f}`,`lepas ${f}`,`lepaskan ${f}`,`buka ${f}`,`change ${f}`,`remove ${f}`].some(A=>r.includes(A))||f==="pencahayaan"&&(r.includes("perbaiki pencahayaan")||r.includes("lighting")||r.includes("terangkan"))||f==="hijab"&&(r.includes("hapus hijab")||r.includes("lepas hijab")||r.includes("lepaskan hijab")||r.includes("tanpa hijab"))||f==="baju"&&(r.includes("tanktop")||r.includes("kemeja")||r.includes("gaun")||r.includes("jaket"))||f==="rasio"&&(r.includes("9:16")||r.includes("16:9")||r.includes("1:1")||r.includes("4:5"))||f==="latar"&&(r.includes("latar baru")||r.includes("gunakan latar baru")||r.includes("hapus latar"))))return!0;return!1},d=["wajah","muka","face","identitas","paras"];d.some(v=>r.includes(v))&&(n.add("FACE"),s(d)?i.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):l(d)&&t.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:r.includes("ganti wajah")?"/facechange":"/faceedit"}));const g=["hijab","kerudung","jilbab","penutup kepala","topi"];g.some(v=>r.includes(v))&&(n.add("HEADWEAR"),s(g)?i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):t.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const u=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(u.some(v=>r.includes(v)))if(n.add("OUTFIT"),s(u))i.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let v="Pakaian subjek";r.includes("tanktop putih tali tipis")?v="Tanktop putih tali tipis":r.includes("tanktop")?v="Tanktop":r.includes("gaun")?v="Gaun":r.includes("kemeja")&&(v="Kemeja"),t.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${v}.`,shorthand:"/outfit"})}const p=["latar","background","backdrop","lingkungan"];if(p.some(v=>r.includes(v))&&(n.add("BACKGROUND"),s(p)?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):r.includes("hapus")||r.includes("transparan")||r.includes("hilangkan")||r.includes("buang")?t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(r.includes("ganti")||r.includes("ubah")||r.includes("baru")||r.includes("gunakan latar baru")||r.includes("studio"))&&t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(r.includes("pencahayaan")||r.includes("lighting")||r.includes("terangkan")||r.includes("cahaya"))&&(n.add("LIGHTING"),t.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(v=>r.includes(v))?(n.add("IMAGE_QUALITY"),t.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(r.includes("tajam")||r.includes("sharpen")||r.includes("perjelas")||r.includes("detail")||r.includes("ketajaman"))&&(n.add("IMAGE_QUALITY"),t.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),r.includes("rasio")||r.includes("9:16")||r.includes("16:9")||r.includes("1:1")||r.includes("4:5")||r.includes("format")){n.add("CANVAS_RATIO");let v="Rasio baru",f="/ar 9:16";r.includes("9:16")?(v="9:16 (Vertical)",f="/ar 9:16"):r.includes("16:9")?(v="16:9 (Landscape)",f="/ar 16:9"):r.includes("1:1")?(v="1:1 (Persegi)",f="/ar 1:1"):r.includes("4:5")&&(v="4:5 (Portrait)",f="/ar 4:5"),t.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${v}.`,shorthand:f})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(v=>r.includes(v))&&(n.add("CANVAS_RATIO"),t.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(r.includes("full body")||r.includes("seluruh tubuh")||r.includes("badan penuh"))&&(n.add("BODY_POSE"),t.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const c=["rambut","hair","botak","cukur"];if(c.some(v=>r.includes(v))){n.add("HAIR");const v=s(c),f=l(c)||r.includes("botak")||r.includes("merah")||r.includes("cat")||r.includes("gaya rambut");v&&f?(i.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:r.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):v?i.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):f&&t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:r.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const h=["tubuh","badan","pose","postur"],k=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],m=k.some(v=>r.includes(v));(h.some(v=>r.includes(v))||m)&&(n.add("BODY_POSE"),s([...h,...k])?i.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):m&&t.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const b=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];b.some(v=>r.includes(v))&&(n.add("BODY_POSE"),s(b)?i.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):t.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const T=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(v=>!n.has(v.key)).map(v=>({entity:v.key,label:v.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${v.label.toLowerCase()}.`}));return{editAreas:t,lockedAreas:i,unchangedAreas:T}}findPromptIndex(a,e,r=[]){const t=a.toLowerCase();let i=999;const n=[...e.semanticTriggers||[],...r];for(const s of n){if(!s||s.length<3)continue;const l=t.indexOf(s.toLowerCase());l!==-1&&l<i&&(i=l)}return i}queryPrimaryShorthands(a,e,r,t){const i=new Map;for(const n of r)if(n.shorthand){const s=this.catalog.find(l=>l.code===n.shorthand);if(s){const l=this.findPromptIndex(a,s,[n.label,n.entity,"jangan","pertahankan","kunci"]);i.set(s.code,{item:s,code:s.code,name:s.name,category:s.category,target:n.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${n.description.toLowerCase()}`,score:100,promptIndex:l})}}for(const n of e)if(n.shorthand){const s=this.catalog.find(l=>l.code===n.shorthand);if(s){const l=this.findPromptIndex(a,s,[n.label,n.entity,"ubah","ganti","hapus"]);i.set(s.code,{item:s,code:s.code,name:s.name,category:n.category||s.category,target:n.label,priority:"WAJIB",reason:`Mendukung eksekusi ${n.description.toLowerCase()}`,score:95,promptIndex:l})}}if(e.some(n=>n.entity==="LIGHTING")&&!i.has("/enhance")){const n=this.catalog.find(s=>s.code==="/enhance");n&&i.set("/enhance",{item:n,code:n.code,name:n.name,category:n.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,n,["pencahayaan","lighting"])})}if(e.some(n=>n.entity==="IMAGE_QUALITY")&&!i.has("/sharpen")&&!i.has("/highresolution")){const n=this.catalog.find(s=>s.code==="/sharpen");n&&i.set("/sharpen",{item:n,code:n.code,name:n.name,category:n.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,n,["tajam","sharpen"])})}for(const n of this.catalog){if(i.has(n.code))continue;const s=Ma(n,a);if(s>=70){if(r.some(d=>{if(d.shorthand&&n.conflicts&&n.conflicts.includes(d.shorthand))return!0;const g=this.catalog.find(u=>u.code===d.shorthand);return!!(g&&g.conflicts&&g.conflicts.includes(n.code))})||Array.from(i.values()).some(d=>{var g,u;return(u=(g=d.item)==null?void 0:g.relationships)==null?void 0:u.some(p=>p.code===n.code&&p.relationType==="ALTERNATIVE")}))continue;n.category;const l=this.findPromptIndex(a,n);i.set(n.code,{item:n,code:n.code,name:n.name,category:n.category,target:n.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${n.name}'.`,score:s,promptIndex:l})}}return Array.from(i.values())}deduplicateByFunctionGroup(a){var e,r,t;const i=new Map;for(const s of a){const l=((e=s.item)==null?void 0:e.functionGroup)||((r=s.item)==null?void 0:r.category)||s.code;i.has(l)?i.get(l).push(s):i.set(l,[s])}const n=[];for(const[s,l]of i.entries()){if(l.length===1){n.push(l[0]);continue}l.sort((p,c)=>{var h,k,m,b;const T=(h=p.item)!=null&&h.preferredRepresentative?1:0,v=(k=c.item)!=null&&k.preferredRepresentative?1:0;if(v!==T)return v-T;const f={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},A=f[(m=p.item)==null?void 0:m.status]||2,I=f[(b=c.item)==null?void 0:b.status]||2;return I!==A?I-A:(c.score||0)!==(p.score||0)?(c.score||0)-(p.score||0):p.code.length-c.code.length});const d={...l[0]},g=l.slice(1).map(p=>p.code),u=Array.from(new Set([...((t=d.item)==null?void 0:t.equivalentTo)||[],...g,...l.slice(1).flatMap(p=>{var c;return((c=p.item)==null?void 0:c.equivalentTo)||[]})])).filter(p=>p!==d.code);d.item={...d.item,equivalentTo:u},d.equivalentTo=u,n.push(d)}return n}hasConflict(a,e,r){if(!a)return!1;for(const t of e){if(a.code===t)continue;if(a.conflicts&&a.conflicts.includes(t))return!0;const i=this.catalog.find(n=>n.code===t);if(i&&i.conflicts&&i.conflicts.includes(a.code))return!0}for(const t of r){if(a.code===t)continue;if(a.conflicts&&a.conflicts.includes(t))return!0;const i=this.catalog.find(n=>n.code===t);if(i&&i.conflicts&&i.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,r,t){var i;const n=new Set(e.map(c=>c.code));for(const c of e)if(c.equivalentTo)for(const h of c.equivalentTo)n.add(h);const s=new Set(e.map(c=>{var h,k;return((h=c.item)==null?void 0:h.functionGroup)||((k=c.item)==null?void 0:k.category)})),l=new Set([...r.map(c=>c.entity),...t.map(c=>c.entity)]),d=new Set(t.map(c=>c.shorthand).filter(Boolean)),g=new Map;for(const c of e){const h=((i=c.item)==null?void 0:i.relationships)||[];for(const k of h){if(!k.code||n.has(k.code))continue;const m=this.catalog.find(T=>T.code===k.code);if(!m||this.hasConflict(m,d,n)||Ma(m,a)<0)continue;const b=m.functionGroup||m.category;s.has(b)||m.category==="HEADWEAR"&&!l.has("HEADWEAR")||g.has(m.code)||g.set(m.code,{item:m,code:m.code,name:m.name,category:m.category,target:m.target,functionGroup:b,description:m.description,relationship:k.relationType||"DIRECTLY_RELATED",reason:k.reason||`Berhubungan dengan ${c.name}`,source:m.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const u={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const c of l){const h=u[c]||[];for(const k of h)for(const m of this.catalog){if(n.has(m.code)||g.has(m.code)||k.category&&m.category!==k.category||k.target&&m.target!==k.target||m.category==="HEADWEAR"&&!l.has("HEADWEAR")||m.category==="TRANSPARENCY"&&!l.has("BACKGROUND")||this.hasConflict(m,d,n)||Ma(m,a)<0)continue;const b=m.functionGroup||m.category;s.has(b)||g.set(m.code,{item:m,code:m.code,name:m.name,category:m.category,target:m.target,functionGroup:b,description:m.description,relationship:k.relation||"CONTEXTUAL",reason:k.reason||`Berhubungan dengan area ${c}`,source:m.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const p=Array.from(g.values());return this.deduplicateByFunctionGroup(p).map(c=>({...c,isPrimary:!1,checked:!1,priority:c.priority||"DISARANKAN"}))}detectConflicts(a,e,r,t){const i=[];for(const l of a){const d=e.find(g=>g.entity===l.entity);if(d){const g={id:`conflict-${l.entity.toLowerCase()}`,entity:l.entity,label:l.label,type:"EDIT_VS_LOCK",shorthandA:d.shorthand||`[Lock ${l.entity}]`,shorthandB:l.shorthand||`[Ubah ${l.entity}]`,instructionA:d.description,instructionB:l.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${l.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};g.suggestion=this.generateConflictSuggestion(g),i.push(g)}}const n=Array.isArray(r)?r.map(l=>typeof l=="string"?l:l.code):Array.from(r.keys?r.keys():[]),s=Array.from(new Set([...n,...t]));for(const l of s){const d=this.catalog.find(g=>g.code===l);if(!(!d||!d.conflicts||d.conflicts.length===0)){for(const g of d.conflicts)if(s.includes(g)){if(i.some(p=>p.shorthandA===l&&p.shorthandB===g||p.shorthandA===g&&p.shorthandB===l))continue;const u=`conflict-${[l,g].sort().join("-")}`;if(!i.some(p=>p.id===u)){const p=this.catalog.find(h=>h.code===g),c={id:u,entity:d.target,label:d.name,type:"SHORTHAND_CLASH",shorthandA:l,shorthandB:g,instructionA:d.description,instructionB:p?p.description:`Konflik dengan direktif ${g}`,reason:`Shorthand ${l} bertentangan langsung dengan ${g} pada target ${d.target}.`,options:[{id:"keep_a",label:`Gunakan ${l}`},{id:"keep_b",label:`Gunakan ${g}`}]};c.suggestion=this.generateConflictSuggestion(c,d,p),i.push(c)}}}}return i}generateConflictSuggestion(a,e=null,r=null){const t=(a.shorthandA||"").toLowerCase(),i=(a.shorthandB||"").toLowerCase(),n=[t,i].sort().join(" vs ");if(n==="/backgroundlock vs /bgblur"||t==="/backgroundlock"&&i==="/bgblur"||i==="/backgroundlock"&&t==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(n==="/backgroundlock vs /studiobg"||t==="/backgroundlock"&&i==="/studiobg"||i==="/backgroundlock"&&t==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(n==="/backgroundlock vs /bgreplace"||t==="/backgroundlock"&&i==="/bgreplace"||i==="/backgroundlock"&&t==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(n==="/backgroundlock vs /bgremove"||t==="/backgroundlock"&&i==="/bgremove"||i==="/backgroundlock"&&t==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(n==="/bgremove vs /bgreplace"||t==="/bgreplace"&&i==="/bgremove"||t==="/bgremove"&&i==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(n==="/bgblur vs /bgremove"||t==="/bgblur"&&i==="/bgremove"||t==="/bgremove"&&i==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(n==="/bgremove vs /studiobg"||t==="/studiobg"&&i==="/bgremove"||t==="/bgremove"&&i==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(n==="/bgblur vs /studiobg"||t==="/studiobg"&&i==="/bgblur"||t==="/bgblur"&&i==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(t==="/facelock"||i==="/facelock"){const l=t==="/facelock"?i:t;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${l}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${l}.`}if(t==="/outfitlock"||i==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${t==="/outfitlock"?i:t}.`;if(t==="/hairlock"||i==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${t==="/hairlock"?i:t}.`;if(t==="/headwearlock"||i==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${t==="/headwearlock"?i:t} jika ingin melepas atau mengganti penutup kepala.`;if(t==="/bodylock"||i==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${t==="/bodylock"?i:t}.`;if(n==="/cinematic vs /rawphoto"||t==="/cinematic"&&i==="/rawphoto"||t==="/rawphoto"&&i==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(n==="/rawphoto vs /vintage"||t==="/vintage"&&i==="/rawphoto"||t==="/rawphoto"&&i==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(n==="/cooltone vs /warmtone"||t==="/warmtone"&&i==="/cooltone"||t==="/cooltone"&&i==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(t==="/monochrome"||i==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${t==="/monochrome"?i:t} jika gambar harus tampil berwarna.`;if(n==="/bokeh vs /sharpen"||t==="/sharpen"&&i==="/bokeh"||t==="/bokeh"&&i==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const l=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${l}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${l}) dan batalkan instruksi ubah.`}const s=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${s}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const r=new Set(a.map(n=>n.code));for(const n of a)if(n.equivalentTo)for(const s of n.equivalentTo)r.add(s);const t=new Set(e.map(n=>n.code)),i=[];for(const n of this.catalog){if(r.has(n.code))continue;let s="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const l=e.find(d=>{var g;return!!(n.conflicts&&n.conflicts.includes(d.code)||(g=d.item)!=null&&g.conflicts&&d.item.conflicts.includes(n.code))});l?s=`Bertentangan dengan direktif aktif: ${l.code} (${l.name}).`:n.category==="LOCK_PRESERVATION"||n.category==="FACE_IDENTITY"?n.code==="/facelock"||n.code==="/faceedit"||n.code==="/facechange"?s="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":n.code==="/hairlock"?s="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":n.code==="/backgroundlock"?s="Latar belakang tidak diminta untuk dikunci secara eksplisit.":n.code==="/outfitlock"?s="Pakaian subjek tidak diminta untuk dikunci.":n.code==="/headwearlock"&&(s="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):n.category==="HAIR"?s="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":n.category==="OUTFIT"?t.has("/outfit")?n.code==="/outfit-remove"?s="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":n.code==="/outfit-color"?s="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":s="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":s="Tidak ada instruksi yang memodifikasi pakaian atau busana.":n.category==="HEADWEAR"?s="Tidak ada instruksi penutup kepala atau hijab.":n.category==="BACKGROUND"||n.category==="TRANSPARENCY"?n.code==="/bgremove"?s="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":n.code==="/bgreplace"?s="Tidak ada permintaan penggantian latar belakang ke scene baru.":s="Tidak ada permintaan manipulasi latar belakang.":n.category==="CANVAS_RATIO"?s="Tidak ada instruksi pengubahan rasio kanvas gambar.":n.category==="BODY_POSE"?s="Tidak ada permintaan perubahan pose atau framing seluruh badan.":n.category==="STYLE_EFFECT"||n.category==="CAMERA_PHOTO"?s="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":n.category==="EXPRESSION"?s="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":n.category==="OBJECT"&&(s="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),i.push({code:n.code,name:n.name,category:n.category,target:n.target,description:n.description,reason:s})}return i}generateVisualTransformation(a,e,r){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:r||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const t=a.map(l=>l.label).join(", "),i=e.map(l=>l.label).join(", ");let n="Elemen visual awal gambar",s="Elemen visual teroptimasi";if(a.some(l=>l.entity==="LIGHTING"))n="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",s="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(l=>l.entity==="HEADWEAR"))n="Subjek mengenakan penutup kepala / hijab asli",s="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(i?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(l=>l.entity==="OUTFIT")){const l=a.find(d=>d.entity==="OUTFIT");n="Busana awal subjek",s=`${l?l.description:"Busana baru terpasang"}`+(i?`; ${i} tetap terkunci aman.`:"")}else if(a.some(l=>l.entity==="BACKGROUND"&&l.action.includes("REMOVE")))n="Foto subjek dengan latar belakang bawaan",s="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(l=>l.entity==="BACKGROUND"&&l.action.includes("REPLACE")))n="Latar belakang awal foto",s="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(l=>l.entity==="CANVAS_RATIO")){const l=a.find(d=>d.entity==="CANVAS_RATIO");n="Dimensi kanvas bawaan foto",s=`${l?l.description:"Dimensi kanvas baru disesuaikan"}`}return{from:n,to:s,summary:`Transformasi pada [${t||"Tanpa Edit"}] dengan preservasi pada [${i||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let r=a.trim();r&&!r.endsWith(".")&&!r.endsWith("!")&&!r.endsWith("?")&&(r+=".");const t=e.join(" ");return r&&t?`${r} ${t}`:t||r}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}function ja(o,a=1,e=.5){if(a<.12)return e>.85?"putih bersih / krem netral":e>.65?"abu-abu terang netral":e>.35?"abu-abu netral":e>.15?"abu-abu arang gelap":"hitam pekat monokromatik";switch(o){case"cyan":case"teal":return"biru toska / cyan cerah / denim";case"blue":return"biru muda / denim cerah";case"navy":return"biru tua / biru kobalt";case"pink":return"merah muda / pink pastel lembut";case"purple":case"violet":return"ungu lavender / violet";case"red":return"merah menyala / crimson";case"orange":return"oranye hangat / amber";case"yellow":return"kuning cerah / pastel yellow";case"lime":return"hijau muda terang / lime";case"green":return"hijau zamrud / toska alami";default:return"netral harmonis"}}function _a(o,a=1,e=.5){if(a<.12)return e>.85?"clean white / soft cream":e>.65?"light neutral gray":e>.35?"medium neutral gray":e>.15?"dark charcoal gray":"deep monochromatic black";switch(o){case"cyan":case"teal":return"light cyan / vibrant teal / sky denim";case"blue":return"vivid denim blue / bright blue";case"navy":return"deep navy blue / royal cobalt";case"pink":return"soft pastel pink / rose";case"purple":case"violet":return"lavender / soft violet";case"red":return"vibrant crimson red";case"orange":return"warm amber orange";case"yellow":return"bright sunny yellow";case"lime":return"bright lime green";case"green":return"emerald green / mint";default:return"balanced neutral tone"}}const ye={"9:16":9/16,"2:3":2/3,"3:4":3/4,"1:1":1,"4:3":4/3,"3:2":3/2,"16:9":16/9};function Ba(o,a){if(!o||!a||o<=0||a<=0)return"1:1";const e=o/a;let r="1:1",t=1/0;for(const[i,n]of Object.entries(ye)){const s=Math.abs(e-n);s<t&&(t=s,r=i)}return r}function za(o,a={}){var e,r;const t=(a.filename||"").toLowerCase(),i=a.width||(o==null?void 0:o.width)||800,n=a.height||(o==null?void 0:o.height)||800,s=i/(n||1),l=Ba(i,n),d=(a.targetAspectRatio&&a.targetAspectRatio!=="Otomatis"&&a.targetAspectRatio!=="auto"?a.targetAspectRatio:null)||l;let g="square";s>1.15?g=s>1.6?"landscape-wide":"landscape":s<.88&&(g=s<.65?"portrait-tall":"portrait");const u=t.startsWith("unduhan")||t.includes("download")||t.includes("jfif"),p=t.includes("3d")||t.includes("chibi")||t.includes("doll")||t.includes("render")||t.includes("toy")||t.includes("figure")||t.includes("figurine")||t.includes("character")||t.includes("boneka")||t.includes("avatar")||t.includes("anime")||t.includes("kartun")||t.includes("cartoon")||t.includes("hoodie");if(!o||typeof o.getContext!="function"){const c=p||u&&t.endsWith(".jfif"),h=c?"cyan":"neutral";return{dimensions:{width:i,height:n,aspectRatio:d,orientation:g},styleType:c?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:c,dominantHue:h,dominantColorIndonesian:ja(h,c?.4:.05,.5),dominantColorEnglish:_a(h,c?.4:.05,.5),secondaryColorIndonesian:c?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:c?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:c?"latar studio netral dengan pencahayaan gradasi halus":"latar belakang netral teratur",lightingStyleIndonesian:c?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:c?.38:.18,avgLum:.55,satRatio:c?.32:.12,edgeDensity:c?16:32,centerContrast:.25}}try{const c=document.createElement("canvas");c.width=64,c.height=64;const h=c.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("Canvas 2D context unavailable");h.drawImage(o,0,0,64,64);const k=h.getImageData(0,0,64,64).data,m=4096;let b=0,T=0,v=0,f=0,A=0,I=0,E=0,R=0,C=0,N=0,P=0,S=0,M=0,F=0,L=0,H=0;const x={cyan:0,blue:0,navy:0,pink:0,purple:0,red:0,orange:0,yellow:0,lime:0,green:0,white:0,gray:0,black:0},Q={},ia={},na=new Float32Array(m);for(let q=0;q<64;q++)for(let ea=0;ea<64;ea++){const Ra=(q*64+ea)*4,Ia=k[Ra],Ta=k[Ra+1],K=k[Ra+2];b+=Ia,T+=Ta,v+=K;const Z=Ia/255,pa=Ta/255,ka=K/255,fa=Math.max(Z,pa,ka),va=Math.min(Z,pa,ka);let ta=0,Ea=0,ma=(fa+va)/2;if(fa!==va){const la=fa-va;switch(Ea=ma>.5?la/(2-fa-va):la/(fa+va),fa){case Z:ta=(pa-ka)/la+(pa<ka?6:0);break;case pa:ta=(ka-Z)/la+2;break;case ka:ta=(Z-pa)/la+4;break}ta*=60}na[q*64+ea]=ma,f+=Ea,A+=ma,q<64/2?M+=ma:F+=ma,ea<64/2?L+=ma:H+=ma;let ra="gray";Ea<.14?ma>.82?ra="white":ma<.18?ra="black":ra="gray":(I++,ta>=345||ta<15?ra="red":ta>=15&&ta<45?ra="orange":ta>=45&&ta<70?ra="yellow":ta>=70&&ta<105?ra="lime":ta>=105&&ta<145?ra="green":ta>=145&&ta<195?ra="cyan":ta>=195&&ta<225?ra="blue":ta>=225&&ta<260?ra="navy":ta>=260&&ta<295?ra="purple":ta>=295&&ta<345&&(ra="pink")),x[ra]=(x[ra]||0)+1;const Oa=ea>=16&&ea<=48&&q>=14&&q<=50,W=ea<10||ea>=54||q<8||q>=56;Oa&&(E+=Ea,R+=ma,C++,Q[ra]=(Q[ra]||0)+1),W&&(N+=Ea,P+=ma,S++,ia[ra]=(ia[ra]||0)+1)}const j=f/m,B=A/m,X=C?E/C:j,y=S?N/S:j,O=I/m;let D=0,$=0;for(let q=1;q<63;q++)for(let ea=1;ea<63;ea++){const Ra=na[q*64+ea],Ia=Math.abs(na[q*64+(ea+1)]-na[q*64+(ea-1)]),Ta=Math.abs(na[(q+1)*64+ea]-na[(q-1)*64+ea]);D+=Ia+Ta,$++}const _=Math.round(D/($||1)*100),V=Object.entries(x).sort((q,ea)=>ea[1]-q[1]).map(q=>q[0]),z=V[0]||"neutral",Y=V[1]||"gray",w=((e=Object.entries(ia).sort((q,ea)=>ea[1]-q[1])[0])==null?void 0:e[0])||"white",G=((r=Object.entries(Q).sort((q,ea)=>ea[1]-q[1])[0])==null?void 0:r[0])||z;let oa="pencahayaan studio terdistribusi seimbang dengan fill merata";const ba=(M-F)/(m/2),ha=R/(C||1)-P/(S||1);ha>.15?oa="pencahayaan studio terarah lembut pada subjek utama dengan vignette halus":ha<-.12?oa="pencahayaan rim light kontur dengan pencahayaan latar belakang terdifusi":ba>.15?oa="pencahayaan softbox terarah dari sudut atas dengan gradasi bayangan natural":B<.3?oa="pencahayaan dramatis low-key dengan aksen highlight tajam":B>.7&&(oa="pencahayaan terang high-key bersih tanpa bayangan pekat");const ga=z==="cyan"||z==="blue"||G==="cyan"||G==="blue"||x.cyan+x.blue>m*.1,aa=_<22,da=O>.18||j>.22||ga;let sa="REALISTIC_PHOTO";p||u&&(da||ga)||aa&&da?sa="STYLED_3D_CHARACTER":z==="green"&&s>1.2?sa="NATURE_LANDSCAPE":z==="gray"&&_>28&&(sa="URBAN_ARCHITECTURE");const U=ja(G,X,B),Aa=_a(G,X,B),ya=ja(Y,j,B),La=_a(Y,j,B),Ca=ja(w,y,P/(S||1));return{dimensions:{width:i,height:n,aspectRatio:d,orientation:g},styleType:sa,isStylizedOr3D:sa==="STYLED_3D_CHARACTER",dominantHue:G,dominantColorIndonesian:U,dominantColorEnglish:Aa,secondaryColorIndonesian:ya,secondaryColorEnglish:La,backgroundColorIndonesian:Ca,lightingStyleIndonesian:oa,contrastLevel:Math.abs(ha)>.1?"tinggi terarah":"seimbang lembut",avgSat:Number(j.toFixed(2)),avgLum:Number(B.toFixed(2)),satRatio:Number(O.toFixed(2)),edgeDensity:_,centerContrast:Number((X-y).toFixed(2))}}catch(c){console.warn("Canvas deep pixel analysis error:",c);const h=p||u&&t.endsWith(".jfif"),k=h?"cyan":"neutral";return{dimensions:{width:i,height:n,aspectRatio:d,orientation:g},styleType:h?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:h,dominantHue:k,dominantColorIndonesian:ja(k,h?.4:.05,.5),dominantColorEnglish:_a(k,h?.4:.05,.5),secondaryColorIndonesian:h?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:h?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:"latar studio bersih terdifusi",lightingStyleIndonesian:h?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:h?.35:.18,avgLum:.55,satRatio:h?.28:.12,edgeDensity:h?16:30,centerContrast:.2}}}function fe(o,a={}){var e,r,t,i;const n=a.preferredLang==="en",s=o||{},l=(a.filename||"").toLowerCase(),d=(a.referencePrompt||"").trim(),g=d.toLowerCase(),u=`${l} ${g}`,p=a.targetAspectRatio||a.aspectRatio,c=p&&p!=="Otomatis"&&p!=="auto"?p:s.aspectRatio||((e=s.dimensions)==null?void 0:e.aspectRatio)||s.detectedRatio||"1:1",h=((r=s.dimensions)==null?void 0:r.orientation)||"square",k=s.dominantColorIndonesian||"biru toska / cyan cerah / denim",m=s.dominantColorEnglish||"light cyan / sky blue / denim",b=s.secondaryColorIndonesian||"krem / putih netral",T=s.secondaryColorEnglish||"soft cream / clean white",v=s.backgroundColorIndonesian||"latar studio bersih terdifusi",f=s.backgroundColorEnglish||"clean diffused studio backdrop",A=s.lightingStyleIndonesian||"pencahayaan studio terarah halus";if(s.isStylizedOr3D||s.styleType==="STYLED_3D_CHARACTER"||u.includes("chibi")||u.includes("3d")||u.includes("doll")||u.includes("boneka")||u.includes("figurine")||u.includes("figure")||u.includes("toy")||u.includes("miniatur")||u.includes("render")||u.includes("avatar")||u.includes("karakter")||u.includes("character")||u.includes("anime")||u.includes("kartun")||u.includes("cartoon")||u.includes("hoodie")||l.startsWith("unduhan")&&(l.endsWith(".jfif")||(s.avgSat||0)>.15))return{mainDescription:n?`Cute stylized 3D animated character figurine with expressive oversized eyes, dressed in an oversized hoodie jacket in ${m}, set against a clean studio backdrop with fine directional 3D illumination.`:`Karakter animasi 3D bergaya cute chibi doll figurine dengan mata besar ekspresif yang berbinar, mengenakan jaket hoodie berwarna ${k} bertekstur kain detail, dengan ${A}.`,subjectDescription:n?"Adorably proportioned 3D character doll featuring luminous stylized anime-like eyes, soft rosy cheeks, and smooth porcelain-grade subsurface scattering skin finish.":"Karakter figurin 3D imut (cute chibi doll) dengan proporsi wajah manis, tatapan mata besar jernih berbinar bergaya animasi 3D, pipi merona lembut, dan permukaan material kulit halus dengan subsurface scattering alami.",poseExpression:n?"Poised centered posture facing directly toward the camera, head charmingly tilted with a curious and serene expression.":"Postur tubuh imut terpusat menghadap ke arah kamera, kepala sedikit condong dengan ekspresi manis menggemaskan dan tatapan mata fokus.",identityPreservation:n?"Preserve the unique stylized 3D doll facial features, large anime eyes, and signature jacket tailoring.":"Pertahankan proporsi wajah karakter figurin 3D yang khas, bentuk mata besar berbinar, ekspresi imut, dan desain jaket asli.",outfitMaterial:n?`Cozy hoodie jacket crafted in ${m} with visible woven thread texture, refined hem stitching, hood drawstring accents, complemented by ${b}.`:`Jaket hoodie tebal berkerudung berwarna ${k} dengan kerapatan rajutan kain tampak jelas, jahitan tepi presisi, aksen tali hoodie, dan perpaduan aksen ${b}.`,environmentBackground:n?`Minimalist studio environment with soft diffused backdrop in ${v}, cleanly isolating the 3D figurine subject.`:`Latar belakang studio minimalis dengan nuansa ${v} terdifusi halus yang mengisolasi karakter secara bersih dan terfokus.`,compositionPerspective:n?`Medium closeup portrait centered framing in ${c} aspect ratio, eye-level perspective with measured shallow depth of field.`:`Komposisi medium portrait closeup terpusat dengan rasio aspek ${c}, sudut pandang kamera sejajar mata (eye-level), dan kedalaman bidang terukur (shallow depth of field).`,lightingColor:n?"Controlled 3D studio lighting with soft key fill, subtle rim highlights along the jacket contours, and clean ambient shadows.":`${A}, rim light tipis di sepanjang kontur jaket dan rambut, serta fill ambient lembut tanpa bayangan kasar.`,cameraLensDof:n?"Macro portrait perspective, crisp focus on the character's eyes and face with creamy studio background bokeh.":"Sudut pandang makro portrait, ketajaman kristal pada detail mata dan tekstur busana, dengan latar belakang bokeh studio yang lembut.",photoStyleRealism:n?"High-end 3D digital character render, Octane Render and Unreal Engine 5 aesthetic, smooth vinyl toy surface texture, extreme microcontrast.":"Gaya render digital 3D berkualitas tinggi (3D character / Octane Render aesthetic), tekstur material figurine halus, subsurface scattering lembut pada kulit, dan detail kain presisi.",aspectRatio:c,optimizationNeeds:["high detail","detail preservation","texture preservation","color balance","soft lighting","studio lighting","subsurface scattering"],suggestedShorthands:["/studio","/eyelevel","/softlight","/highdetail","/detailpreservation","/texturepreservation","/enhance"],contextualNegativePrompt:n?"real human photo, photorealistic real skin, wrinkled face, photographic grain, bad 3d render, distorted limbs, extra fingers, deformed eyes, blurry, low resolution, watermark, text":"real human photo, foto manusia asli, kulit berkerut, pori-pori kasar, photographic grain, render 3d cacat, anatomi rusak, jari ekstra, mata juling, buram, resolusi rendah, watermark, teks"};if(s.styleType==="NATURE_LANDSCAPE"||u.includes("landscape")||u.includes("mountain")||u.includes("beach")||u.includes("lake")||u.includes("sunset")||u.includes("sunrise")||u.includes("forest")||u.includes("nature")||u.includes("gunung")||u.includes("pantai")||u.includes("danau")||u.includes("hutan")||u.includes("pemandangan")||u.includes("river")||u.includes("sungai")||u.includes("ocean")||u.includes("laut")||u.includes("valley")||s.dominantHue==="green"&&((t=s.dimensions)==null?void 0:t.width)/(((i=s.dimensions)==null?void 0:i.height)||1)>1.25){const C=c==="1:1"?"16:9":c;return{mainDescription:n?`Expansive natural landscape photography capturing wide panoramic vistas, dominant ${m} earth tones, and atmospheric ambient illumination.`:`Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon memukau, dominasi palet ${k}, dan atmosfer alam yang tenang.`,subjectDescription:n?`Layered geographical contours of undulating terrain with organic vegetation in the foreground and natural ${m} accents.`:`Hamparan bentang alam alami dengan kontur geografis berundak, vegetasi asri, dan aksen alami ${k} pada latar depan dan tengah.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:n?`Open scenic wilderness environment with expansive skyline, natural ${f}, and distant atmospheric haze.`:`Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami bernuansa ${v}, dan nuansa atmosfer yang jernih.`,compositionPerspective:n?`Wide-angle panoramic composition following rule-of-thirds framing, balanced horizontal perspective in ${C} aspect ratio, deep focus throughout.`:`Komposisi lanskap panorama sudut lebar (wide-angle shot) dengan rasio ${C}, garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).`,lightingColor:n?`${A} with warm ambient glow, rich tonal dynamic range between bright skies and natural shadows.`:`${A}, rentang tonal dinamis yang seimbang antara langit terang dan bayangan alami.`,cameraLensDof:n?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:n?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:C,optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/landscape","/wideangle","/deepfocus","/daylight","/rawphoto","/highdetail","/enhance"],contextualNegativePrompt:n?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"}}if(s.styleType==="URBAN_ARCHITECTURE"||u.includes("architecture")||u.includes("building")||u.includes("city")||u.includes("street")||u.includes("urban")||u.includes("tokyo")||u.includes("gedung")||u.includes("bangunan")||u.includes("jalan")||u.includes("kota")||u.includes("skyscraper")||u.includes("tower")||u.includes("facade")||u.includes("menara")||u.includes("interior")||u.includes("exterior"))return{mainDescription:n?`Contemporary urban architectural photography showcasing structural geometric lines, clean facades in ${m}, and ambient city illumination.`:`Struktur arsitektur modern dengan fasad geometris kontemporer, dominasi material bernuansa ${k}, dan garis struktural presisi.`,subjectDescription:n?`Modern architectural structure featuring precision vertical and diagonal geometry, reflective panels in ${m}, and clean structural lines.`:`Bangunan arsitektur dengan garis struktural presisi dan detail material fasad bernuansa ${k} berpadu dengan aksen ${b}.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:n?`Metropolitan urban environment with street-level pavement, architectural setting in ${f}, and clear perspective.`:`Kawasan urban perkotaan atau interior berlatar ${v} dengan perspektif geometris teratur.`,compositionPerspective:n?`Architectural perspective framed in ${c} aspect ratio with corrected converging lines, symmetrical framing, and balanced geometric balance.`:`Komposisi sudut presisi dalam rasio ${c} dengan penekanan pada garis tegak lurus, sudut pandang teratur, dan keseimbangan simetri.`,lightingColor:n?`${A} with clean highlights on structural surfaces and balanced shadows.`:`${A}, highlight teratur pada permukaan material, dan keseimbangan bayangan bersih.`,cameraLensDof:n?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:n?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material autentik dan distorsi minimal.",aspectRatio:c,optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/architecture","/deepfocus","/naturalcontrast","/perspectivecorrection","/highdetail","/rawphoto"],contextualNegativePrompt:n?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(u.includes("animal")||u.includes("cat")||u.includes("dog")||u.includes("bird")||u.includes("wildlife")||u.includes("kucing")||u.includes("anjing")||u.includes("burung")||u.includes("hewan")||u.includes("satwa"))return{mainDescription:n?`Intimate wildlife portrait capturing authentic animal subject with coat tones in ${m}, sharp eye focus, and natural demeanor.`:`Potret satwa autentik dengan nuansa warna ${k}, fokus tajam pada mata, dan tekstur bulu alami.`,subjectDescription:n?`A captivating animal subject showcasing alert gaze, distinct coat patterns in ${m}, and organic vitality.`:`Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan bulu bernuansa ${k} berpadu ${b}.`,poseExpression:n?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala condong proporsional dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:n?`Organic natural habitat or indoor setting in ${f} isolating the subject cleanly.`:`Lingkungan berlatar ${v} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:n?`Medium closeup shot framed in ${c} aspect ratio at eye-level with the animal, centered subject framing with shallow depth of field.`:`Closeup framing dalam rasio ${c} pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.`,lightingColor:n?`${A} creating natural catchlights in the eyes and gentle coat highlights.`:`${A}, kilau alami pada mata, dan gradasi highlight lembut pada kontur tubuh.`,cameraLensDof:n?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:n?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:c,optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],suggestedShorthands:["/eyelevel","/softlight","/telephoto","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:n?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(u.includes("product")||u.includes("food")||u.includes("coffee")||u.includes("watch")||u.includes("cake")||u.includes("produk")||u.includes("makanan")||u.includes("kopi")||u.includes("minuman")||u.includes("still-life"))return{mainDescription:n?`Commercial still-life photography featuring meticulous product placement in ${m}, balanced studio illumination, and tactile surface materiality.`:`Potret still-life komersial dengan penataan objek bernuansa ${k}, pencahayaan terukur, dan detail material berkualitas tinggi.`,subjectDescription:n?`Principal hero subject with distinct contours in ${m}, accented with ${T}, pristine surface finish, and refined craftsmanship details.`:`Objek utama dengan kontur presisi bernuansa ${k} berpadu aksen ${b}, dengan permukaan bersih dan detail pengerjaan rapi.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:n?`Tactile surface materials with subtle micro-reflections and authentic manufacturing texture in ${m}.`:`Tekstur permukaan material asli bernuansa ${k} dengan mikro-refleksi halus dan kerapatan tekstur autentik.`,environmentBackground:n?`Minimalist studio tabletop environment with backdrop in ${f} complementary to the subject.`:`Studio meja still-life dengan permukaan bernuansa ${v} dan penataan elemen pendukung minimalis.`,compositionPerspective:n?`Framed in ${c} aspect ratio at 45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.`:`Komposisi dalam rasio ${c} dengan sudut 45 derajat atau eye-level tabletop, framing terfokus pada objek utama.`,lightingColor:n?`${A} with controlled diffused softbox highlights and soft contact drop shadows.`:`${A}, softbox diffused illumination, dan gradasi bayangan kontak yang lembut.`,cameraLensDof:n?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:n?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:c,optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],suggestedShorthands:["/studio","/softlight","/macro","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:n?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const I=u.includes("woman")||u.includes("wanita")||u.includes("cewek")||u.includes("girl")||u.includes("lady")||u.includes("female")||u.includes("hijab"),E=u.includes("man")||u.includes("pria")||u.includes("cowok")||u.includes("boy")||u.includes("gentleman")||u.includes("businessman")||u.includes("male");let R=n?"an authentic focal subject":"subjek potret autentik";return I?R=n?"an adult woman with natural facial features and poised expression":"seorang wanita dengan ekspresi tenang dan fitur wajah alami":E?R=n?"an adult man with natural facial features and composed demeanor":"seorang pria dewasa dengan ekspresi tenang dan pembawaan wajar":d&&(R=d),{mainDescription:n?`Authentic photograph capturing ${R} with natural posture, dressed in ${m}, framed with balanced composition and ${A}.`:`Potret fotografi autentik dengan framing ${h} terpusat, menampilkan ${R} dengan sentuhan warna ${k}, ${A}, dan karakter visual realistis.`,subjectDescription:n?`${R} featuring authentic facial proportions, crisp eye focus, and natural anatomical alignment.`:`${R} dengan proporsi wajah alami, fokus mata tajam, dan karakter visual nyata tanpa efek sintetis.`,poseExpression:n?"Poised natural posture framed at eye-level perspective, calm composed expression directed forward.":"Postur tubuh seimbang dengan sudut pandang kamera sejajar mata (eye-level perspective), ekspresi tenang bersahaja.",identityPreservation:n?"Preserve natural facial proportions, authentic skin tones, and genuine human contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:n?`Neat attire featuring ${m} with visible fabric weave, fine seam texture, complemented by ${T}.`:`Busana rapi dengan dominasi warna ${k} dan aksen ${b}, tekstur kain tampak jelas.`,environmentBackground:n?`Cohesive setting in ${f} isolating the subject cleanly with gentle depth of field.`:`Latar belakang bernuansa ${v} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:n?`Centered portrait composition framed in ${c} aspect ratio following rule-of-thirds balance at eye-level perspective.`:`Komposisi terpusat dalam rasio aspek ${c}, sudut pandang kamera sejajar mata (eye-level), dan pembagian bidang seimbang.`,lightingColor:n?`${A} with balanced fill, natural shadow transition, and controlled highlights.`:`${A}, gradasi bayangan natural, dan highlight wajah terukur.`,cameraLensDof:n?"Prime portrait lens, shallow depth of field with creamy background bokeh separation.":"Lensa portrait prime, kedalaman bidang dangkal (shallow depth of field) dengan pemisahan latar belakang bokeh halus.",photoStyleRealism:n?"Realistic photographic style, authentic microcontrast, natural skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:c,optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],suggestedShorthands:["/portrait","/studio","/eyelevel","/softlight","/rawphoto","/enhance","/highdetail"],contextualNegativePrompt:n?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}const Na={tpl_1:"Add a realistic human subject alongside existing subjects, with coordinating attire, actively engaging in context harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_2:"Add a realistic human subject with coordinating outfit, actively participating in the context of the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_3:"Add a realistic human subject while strictly preserving all existing subjects and characters within the image. Do not modify or remove original subjects or characters. Harmonize the background with the uploaded image.",tpl_4:"Add a new subject wearing an elegant hijab, harmonizing outfit styling and color palette with the uploaded image.",tpl_5:"Add a realistic human subject wearing a hijab, with coordinating outfit and engaging in activity harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_6:"Add a realistic human male as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the male subject's clothing, pose, expression, and activity to integrate naturally and consistently with the scene. Choose attire suited to the theme, environment, atmosphere, and visual context of the uploaded image. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The male subject is only added as a new element into available space within the scene and must not replace or alter any original elements.",tpl_7:"Add a realistic human subject wearing a hijab as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the clothing, pose, expression, and activity of the subject to blend naturally with the scene. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The subject is only added into available space within the scene and must not replace original elements."},Qa={gender:{"laki-laki":"Male",pria:"Male",cowok:"Male",perempuan:"Female",wanita:"Female",cewek:"Female"},ethnicity:{asia:"Asian",eropa:"European / Caucasian",afrika:"African","timur tengah":"Middle Eastern","asia selatan":"South Asian","asia timur":"East Asian","asia tenggara":"Southeast Asian","pasifik / oseania":"Pacific Islander / Oceanian",pasifik:"Pacific Islander",oseania:"Oceanian","amerika latin":"Latino / Hispanic"}},ve=[[/Tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Na.tpl_1],[/Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Na.tpl_2],[/Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar\. Jangan memodifikasi atau menghilangkan subjek\/karakter asli\. Latar belakang menyesuaikan dengan gambar unggahan\.?/gi,Na.tpl_3],[/Tambahkan subjek baru yang mengenakan hijab[,\s]+lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan\.?/gi,Na.tpl_4],[/Tambahkan subjek manusia realistis yang mengenakan hijab[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Na.tpl_5],[/Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan atau mengubah elemen asli apa pun\.?/gi,Na.tpl_6],[/Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan elemen asli\.?/gi,Na.tpl_7],[/tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan/gi,"Add a realistic human subject alongside existing subjects, with coordinating attire"],[/tambahkan subjek manusia realistis/gi,"Add a realistic human subject"],[/tambahkan subjek baru/gi,"Add a new subject"],[/tambahkan subjek/gi,"Add a subject"],[/tambahkan/gi,"Add"],[/dua orang berada di taman tropis dengan latar belakang pemandangan alam/gi,"Two people in a lush tropical garden with a natural scenic landscape backdrop"],[/dua orang berada di taman tropis/gi,"Two people in a lush tropical garden"],[/dua orang berada di/gi,"Two people in"],[/dua orang/gi,"Two people"],[/di taman tropis/gi,"in a lush tropical garden"],[/taman tropis/gi,"tropical garden"],[/dengan latar belakang pemandangan alam/gi,"with a natural scenic landscape backdrop"],[/latar belakang pemandangan alam/gi,"scenic landscape backdrop"],[/pemandangan alam/gi,"scenic landscape"],[/detail subjek utama dengan pencahayaan alami dan warna cerah/gi,"Detail of main subjects with natural daylight illumination and vibrant vivid colors"],[/detail subjek utama/gi,"Detail of main subjects"],[/subjek utama/gi,"main subjects"],[/warna cerah/gi,"vibrant vivid colors"],[/perbaiki pencahayaan foto/gi,"enhance photo lighting with balanced exposure and natural illumination"],[/perbaiki pencahayaan/gi,"enhance lighting with balanced exposure and natural contrast"],[/hapus hijab[,\s]+jangan ubah wajah/gi,"remove headwear, preserve natural hair, preserve original facial identity"],[/hapus hijab/gi,"remove headwear, display natural hair"],[/jangan ubah wajah/gi,"strictly preserve original face and facial identity"],[/pertahankan wajah asli/gi,"maintain authentic original facial identity"],[/pertahankan wajah/gi,"preserve facial identity"],[/ganti baju menjadi tanktop putih tali tipis[,\s]+jangan ubah wajah/gi,"change outfit to a delicate white spaghetti strap tank top, strictly preserve original facial identity"],[/ganti baju menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti baju/gi,"change clothing outfit"],[/ganti pakaian menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti pakaian/gi,"change outfit styling"],[/hapus latar belakang/gi,"remove background, isolate subject on clean backdrop"],[/hapus background/gi,"remove background"],[/gunakan latar baru/gi,"place subject in a new scenic environment"],[/ganti latar/gi,"replace background setting"],[/pertahankan rambut asli tetapi ubah pakaian/gi,"preserve natural authentic hair, change clothing attire"],[/pertahankan rambut asli/gi,"preserve natural authentic hair"],[/ubah rasio menjadi 9:16/gi,"aspect ratio 9:16 vertical composition"],[/ubah rasio menjadi 16:9/gi,"aspect ratio 16:9 wide panoramic composition"],[/ubah rasio menjadi 1:1/gi,"aspect ratio 1:1 square framing"],[/ubah rasio/gi,"change canvas aspect ratio"],[/resolusi tinggi/gi,"high resolution, fine micro-details"],[/kualitas tinggi/gi,"masterpiece quality, ultra-detailed"],[/anatomi tangan natural/gi,"anatomically correct natural hands and fingers"],[/anatomi tangan/gi,"natural hand anatomy"],[/memperluas foto/gi,"outpaint and expand canvas seamlessly"],[/perluas gambar/gi,"expand image canvas with harmonious environment"],[/dokter bedah sedang operasi di rumah sakit futuristik/gi,"a skilled surgical doctor performing an operation inside a high-tech futuristic hospital"],[/dokter bedah/gi,"a professional surgical doctor"],[/rumah sakit futuristik/gi,"a futuristic high-tech hospital"],[/montok/gi,"voluptuous curvy feminine figure"],[/seorang wanita muda/gi,"a young woman"],[/seorang wanita dewasa/gi,"an adult woman"],[/seorang wanita/gi,"a woman"],[/wanita muda/gi,"young woman"],[/wanita cantik/gi,"beautiful woman"],[/wanita/gi,"woman"],[/seorang pria muda/gi,"a young man"],[/seorang pria dewasa/gi,"an adult man"],[/seorang pria/gi,"a man"],[/pria muda/gi,"young man"],[/pria tampan/gi,"handsome man"],[/pria/gi,"man"],[/seorang gadis muda/gi,"a young girl"],[/seorang gadis/gi,"a girl"],[/gadis muda/gi,"young girl"],[/gadis/gi,"girl"],[/anak perempuan/gi,"a young girl"],[/anak laki-laki/gi,"a young boy"],[/anak-anak/gi,"children"],[/dengan rambut hitam panjang/gi,"with long dark hair"],[/dengan rambut panjang/gi,"with long hair"],[/dengan rambut pendek/gi,"with short hair"],[/dengan rambut pirang/gi,"with blonde hair"],[/dengan rambut bergelombang/gi,"with wavy hair"],[/dengan rambut keriting/gi,"with curly textured hair"],[/rambut hitam/gi,"dark hair"],[/rambut cokelat/gi,"brown hair"],[/mata cokelat/gi,"warm brown eyes"],[/kulit cerah/gi,"fair radiant skin"],[/kulit sawo matang/gi,"warm tan golden skin"],[/kulit halus/gi,"smooth skin texture"],[/tekstur kulit/gi,"natural skin microtexture"],[/senyum manis/gi,"gentle charming smile"],[/tersenyum lembut/gi,"softly smiling"],[/ekspresi tenang/gi,"serene composed expression"],[/tatapan mata tajam/gi,"focused engaging gaze"],[/detail fokus pada mata dan tekstur kertas buku/gi,"focus detail on expressive eyes and tactile book paper texture"],[/fokus pada mata/gi,"focused on the eyes"],[/tekstur kertas buku/gi,"tactile book paper texture"],[/tekstur kertas/gi,"paper texture"],[/mengenakan hijab/gi,"wearing a stylish hijab"],[/berhijab/gi,"wearing an elegant hijab"],[/mengenakan jaket hoodie/gi,"wearing a cozy oversized hoodie jacket"],[/mengenakan hoodie/gi,"wearing a hoodie"],[/mengenakan kemeja/gi,"wearing a crisp button-up shirt"],[/mengenakan kaos/gi,"wearing a casual t-shirt"],[/mengenakan gaun/gi,"wearing an elegant dress"],[/mengenakan jas/gi,"wearing a tailored formal suit"],[/mengenakan celana jeans/gi,"wearing denim jeans"],[/berpakaian santai/gi,"dressed in casual attire"],[/berpakaian formal/gi,"dressed in formal attire"],[/memegang buku/gi,"holding a book"],[/memegang/gi,"holding"],[/berjalan di/gi,"walking through"],[/berjalan santai/gi,"strolling gracefully"],[/berdiri di/gi,"standing in"],[/berdiri tegak/gi,"standing confidently"],[/duduk di/gi,"sitting in"],[/duduk santai/gi,"relaxing comfortably"],[/menatap kamera/gi,"looking directly at the camera"],[/menoleh ke samping/gi,"turning head slightly toward the side"],[/di perpustakaan klasik/gi,"in a classic vintage library"],[/di perpustakaan/gi,"in a library"],[/perpustakaan klasik/gi,"classic vintage library"],[/perpustakaan/gi,"library"],[/buku/gi,"book"],[/di taman bunga/gi,"in a blooming flower garden"],[/taman bunga/gi,"blooming flower garden"],[/di pantai saat senja/gi,"on a scenic beach at golden hour sunset"],[/di pantai/gi,"on a picturesque tropical beach"],[/di taman kota/gi,"in a vibrant urban city park"],[/di taman/gi,"in a lush garden park"],[/di jalanan kota/gi,"on a busy modern city street"],[/di kafe/gi,"in a cozy ambient cafe"],[/di studio foto/gi,"in a minimalist photography studio"],[/di studio/gi,"in a professional studio"],[/di kantor modern/gi,"in a sleek contemporary office"],[/di alam terbuka/gi,"in an expansive outdoor landscape"],[/saat senja/gi,"during golden hour sunset"],[/saat malam hari/gi,"at night with atmospheric city lights"],[/saat malam/gi,"at night"],[/saat pagi hari/gi,"in the fresh morning daylight"],[/saat siang hari/gi,"under bright natural midday sun"],[/hujan gerimis/gi,"soft gentle drizzle rain"],[/hujan/gi,"rainy wet pavement atmosphere"],[/pencahayaan alami/gi,"natural daylight illumination"],[/pencahayaan studio/gi,"professional studio key and fill lighting"],[/pencahayaan lembut/gi,"soft diffused ambient lighting"],[/pencahayaan sinematik/gi,"cinematic volumetric illumination"],[/cahaya keemasan/gi,"warm golden hour glow"],[/latar belakang buram/gi,"smooth creamy background bokeh"],[/latar belakang kabur/gi,"shallow depth of field with soft bokeh"],[/sudut pandang sejajar mata/gi,"eye-level camera angle"],[/sudut pandang rendah/gi,"low-angle perspective"],[/sudut pandang tinggi/gi,"high-angle perspective"],[/lensa potret 85mm/gi,"85mm portrait lens with f/1.4 aperture"],[/lensa sudut lebar/gi,"wide-angle 24mm lens"],[/komposisi rule of thirds/gi,"rule of thirds composition"],[/potret jarak dekat/gi,"closeup intimate portrait"],[/potret setengah badan/gi,"medium shot portrait"],[/seluruh badan/gi,"full-length body shot"]];function ca(o){if(!o||typeof o!="string")return"";const a=o.trim();if(!a)return"";const e=[],r="___TOKEN_PH_";let t=a.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,n=>{const s=`${r}SH_${e.length}___`;return e.push({id:s,original:n}),s});t=t.replace(/--([a-zA-Z0-9_\-]+)(?:\s+([^-\s][^-\n]*))?/g,n=>{const s=`${r}FLAG_${e.length}___`;return e.push({id:s,original:n}),s});let i=!1;/^(\/imagine prompt:)/i.test(t)&&(i=!0,t=t.replace(/^(\/imagine prompt:\s*)/i,""));for(const[n,s]of ve)t=t.replace(n,s);t=t.replace(/\bdengan tetap mempertahankan\b/gi,"while strictly preserving").replace(/\bdengan mempertahankan\b/gi,"while preserving").replace(/\btanpa perubahan atau penghapusan\b/gi,"without modification or removal").replace(/\btanpa mengubah\b/gi,"without modifying").replace(/\bserta terlibat dalam aktivitas\b/gi,"and engaging in activities").replace(/\bsesuai gambar unggahan\b/gi,"harmonious with the source image").replace(/\bsesuai gambar sumber\b/gi,"harmonious with the source image").replace(/\bdengan pakaian yang menyesuaikan\b/gi,"with coordinating attire").replace(/\bpakaian yang menyesuaikan\b/gi,"coordinating attire").replace(/\bdi luar subjek yang sudah ada\b/gi,"alongside existing subjects").replace(/\bsubjek manusia realistis\b/gi,"a realistic human subject").replace(/\bseluruh subjek dan karakter asli\b/gi,"all original subjects and characters").replace(/\bsubjek\/karakter asli\b/gi,"original subjects and characters").replace(/\blatar belakang menyesuaikan\b/gi,"background harmonized with").replace(/\bsesuaikan outfit dan warna\b/gi,"harmonizing outfit styling and color palette").replace(/\bagar harmonis dengan\b/gi,"to harmonize with").replace(/\bgambar unggahan\b/gi,"uploaded source image").replace(/\bgambar sumber\b/gi,"source image").replace(/\bsubjek baru\b/gi,"a new subject").replace(/\bsubjek adalah\b/gi,"the subject is").replace(/\bsubjek berupa\b/gi,"the subject is").replace(/\bdengan\b/gi,"with").replace(/\bdan\b/gi,"and").replace(/\bserta\b/gi,"and").replace(/\bdi\b/gi,"in").replace(/\bke\b/gi,"to").replace(/\bdari\b/gi,"from").replace(/\bpada\b/gi,"on").replace(/\byang\b/gi,"that is").replace(/\btetapi\b/gi,"but").replace(/\bnamun\b/gi,"however"),t=t.replace(/\s+/g," ").replace(/\s+,/g,",").replace(/\s+\./g,".").replace(/,\s*,/g,",").replace(/\.\s*\./g,".").trim();for(const n of e)t=t.replace(n.id,n.original);return i&&(t=`/imagine prompt: ${t}`),t}function Ae(o,a=null){if(!o)return"";const{customRequest:e="",gender:r="Auto",age:t="Auto",ethnicity:i="Auto",subjectStyle:n="Auto",customSubjectStyle:s="",environmentStyle:l="Auto"}=o,d=[];if(e&&e.trim()){const c=ca(e.trim());d.push(`Additional Directive (Custom Request): ${c}`)}const g=r&&!r.toLowerCase().startsWith("auto"),u=t&&!t.toLowerCase().startsWith("auto"),p=i&&!i.toLowerCase().startsWith("auto");if(g||u||p){const c=[];if(g){const h=r.toLowerCase().trim(),k=Qa.gender[h]||r;c.push(`Gender: ${k}`)}if(u){const h=parseInt(t,10),k=isNaN(h)?t:`${h} years old`;c.push(`Age: ${k}`)}if(p){const h=i.toLowerCase().trim(),k=Qa.ethnicity[h]||i;c.push(`Ethnicity: ${k}`)}d.push(`Subject Character Parameters: ${c.join(", ")}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`)}if(n&&!n.toLowerCase().startsWith("auto")){const c=n==="Custom"?s?ca(s.trim()):"Custom Realistic":n;d.push(`Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt a ${c} aesthetic, prioritizing natural anatomical fidelity, authentic microtextures, and directional illumination on the subject.`)}return l&&!l.toLowerCase().startsWith("auto")&&d.push(`Environment Style: World-building, background setting, atmosphere, environmental materials, and global illumination apply ${l}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`),d.join(`

`)}function Xa(o=""){let a="Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, and preserve fine microtextures and natural skin details without overprocessing.";if(o&&o.trim()){const e=ca(o.trim());return`${a} User specific adjustment target: ${e}.`}return a}const Ka=[{id:"none",label:"-- Pilih Template Prompt (Opsional) --",text:""},{id:"tpl_1",label:"Template 1: Tambahkan subjek manusia realistis di luar subjek yang sudah ada...",text:"Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_2",label:"Template 2: Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan...",text:"Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_3",label:"Template 3: Tambahkan subjek manusia realistis dan pertahankan seluruh subjek...",text:"Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar. Jangan memodifikasi atau menghilangkan subjek/karakter asli. Latar belakang menyesuaikan dengan gambar unggahan."},{id:"tpl_4",label:"Template 4: Tambahkan subjek baru yang mengenakan hijab...",text:"Tambahkan subjek baru yang mengenakan hijab, lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan."},{id:"tpl_5",label:"Template 5: Tambahkan subjek manusia realistis yang mengenakan hijab...",text:"Tambahkan subjek manusia realistis yang mengenakan hijab, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_6",label:"Template 6: Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru...",text:"Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas laki-laki tersebut agar menyatu secara natural dan konsisten dengan adegan. Pilih pakaian yang sesuai dengan tema, lingkungan, suasana, dan konteks visual gambar unggahan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Laki-laki tersebut hanya ditambahkan sebagai elemen baru ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan atau mengubah elemen asli apa pun."},{id:"tpl_7",label:"Template 7: Tambahkan subjek manusia realistis berhijab sebagai subjek baru...",text:"Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas manusia agar menyatu secara natural dengan adegan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Manusia hanya ditambahkan ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan elemen asli."}],Te=["Auto (Smart Detection) mengikuti gambar unggahan","Laki-Laki","Perempuan"],Ee=["Auto (Smart Detection) mengikuti gambar unggahan",...Array.from({length:50},(o,a)=>`${a+1} tahun`)],ie=["Auto (Smart Detection)","Asia","Eropa","Afrika","Timur Tengah","Asia Selatan","Asia Timur","Asia Tenggara","Pasifik / Oseania","Amerika Latin"],Fa=["Auto (Smart Detection)","Raw Photography Realism","Realistic","Photorealistic","Ultra Photorealistic","Live-Action","Custom"],Da=[{name:"Auto (Smart Detection)",description:"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."},{name:"Stylized 3D Cartoon",description:"Gaya kartun 3D yang sangat stilasi dengan warna berani dan proporsi ekspresif."},{name:"Pixar-style Lighting",description:"Pencahayaan hangat dan emosional khas film Pixar yang memberikan kedalaman pada karakter."},{name:"Nickelodeon Animation Style",description:"Gaya animasi enerjik dan berwarna cerah khas Nickelodeon."},{name:"SpongeBob Cinematic 3D",description:"Visual 3D sinematik bergaya dunia bawah laut SpongeBob yang ceria."},{name:"Soft Clay Render",description:"Render dengan tekstur tanah liat lembut yang memberikan kesan fisik dan taktil."},{name:"Smooth Plastic Material",description:"Material plastik halus dan mengkilap seperti mainan modern yang bersih."},{name:"Vibrant Pastel Colors",description:"Palet warna pastel yang cerah dan hidup untuk suasana yang positif."},{name:"Global Illumination",description:"Teknik pencahayaan realistis yang memantulkan cahaya di seluruh permukaan untuk kedalaman maksimal."},{name:"Clean 3D Render",description:"Hasil render 3D yang sangat bersih, tajam, dan bebas dari noise visual."},{name:"Whimsical Cartoon World",description:"Dunia kartun yang penuh keajaiban, bentuk imajinatif, dan atmosfer fantasi."},{name:"Raw Photography Realism",description:"Realisme murni seperti foto mentah kamera DSLR tanpa efek sinematik, menampilkan pori kulit, noise sensor, dan cahaya alami apa adanya."},{name:"True Camera Capture Realism",description:"Meniru hasil kamera sungguhan dengan parameter fotografi realistis seperti ISO, aperture, shutter, dan depth of field alami."},{name:"Documentary Photo Realism",description:"Gaya foto dokumenter yang jujur dan natural, komposisi tidak dibuat-buat seperti momen kehidupan nyata."},{name:"Natural Light Photorealism",description:"Meniru cahaya alami dengan warna kulit akurat dan bayangan lembut tanpa efek artistik."},{name:"Documentary Style",description:"Tampilan realistis dan informatif yang fokus pada keaslian visual."},{name:"Natural Lighting",description:"Pencahayaan alami tanpa dramatisasi atau efek berlebihan."},{name:"Realistic",description:"Tampilan natural yang mendekati dunia nyata."},{name:"Photorealistic",description:"Sangat realistis seperti hasil foto kamera modern dengan kualitas bersih."},{name:"Ultra Photorealistic Live-Action",description:"Detail sangat tajam dan bersih, masih realistis namun terasa sedikit dipoles."},{name:"Portrait Photography",description:"Fokus pada wajah dengan latar blur profesional dan pencahayaan kamera."},{name:"Photoreal Cinematic Character Study",description:"Studi karakter sangat realistis dengan sentuhan visual sinematik."},{name:"Live-Action Cinematic Photorealism",description:"Perpaduan realisme dunia nyata dengan mood dan atmosfer sinematik."},{name:"Hollywood Movie Still Realism",description:"Tampilan seperti cuplikan film Hollywood dengan color grading dramatis."},{name:"Cinematic Live-Action Portrait",description:"Potret manusia nyata dengan gaya sinema dan pencahayaan artistik."},{name:"Film Still",description:"Visual menyerupai satu frame adegan film."},{name:"Cinematic",description:"Nuansa film dengan framing dan warna dramatis."},{name:"Ultra Cinematic",description:"Cinematic tingkat tinggi dengan depth dan kontras kuat."},{name:"IMAX Look",description:"Visual megah berskala besar dengan detail tinggi."},{name:"Dramatic Lighting",description:"Pencahayaan kontras tinggi untuk emosi kuat dan tegas."},{name:"Moody Lighting",description:"Cahaya redup bernuansa emosional dan misterius."},{name:"Dark & Moody",description:"Nuansa gelap dengan atmosfer dramatis dan intens."},{name:"Hyper-Realistic",description:"Detail ekstrem dengan tekstur dan ketajaman sangat tinggi."},{name:"Hyper-Real Live-Action Character",description:"Sangat detail dan presisi namun sering terasa terlalu sempurna dan kurang alami."},{name:"Toy-like Characters",description:"Karakter dengan proporsi dan material seperti mainan koleksi."},{name:"Semi-Realistic 3D",description:"Perpaduan realisme dan gaya 3D yang masih terasa imut."},{name:"Toy Photography",description:"Foto realistis mainan dengan depth of field dan pencahayaan profesional."},{name:"Miniature World",description:"Dunia mini berskala kecil dengan detail tinggi dan perspektif makro."},{name:"Toy Diorama / Miniature World",description:"Adegan mini seperti diorama mainan dengan detail artistik."},{name:"Plastic Toy Cinematic",description:"Mainan plastik dengan sudut kamera dan pencahayaan sinematik."},{name:"Miniature / Diorama Style",description:"Tampilan dunia makro seperti diorama miniatur dengan efek tilt-shift dan detail kecil yang menakjubkan."},{name:"Hyper-Realistic Miniature / Diorama Action Style",description:"Diorama miniatur dengan detail hyper-realistic dan elemen aksi yang dinamis, memberikan kesan adegan film berskala kecil."},{name:"Miniature Diorama / LEGO Macro Photography",description:"Gaya fotografi makro dengan fokus tajam pada detail balok LEGO, bokeh latar belakang artistik, dan pencahayaan studio yang menonjolkan tekstur plastik serta skala miniatur."},{name:"Low Poly 3D",description:"Bentuk geometris sederhana dan minim detail."},{name:"Roblox-style 3D",description:"Proporsi kotak dengan wajah simpel khas game Roblox."},{name:"Stylized Roblox 3D",description:"Versi Roblox lebih halus dengan pencahayaan modern."},{name:"LEGO Style",description:"Karakter dan objek berbentuk balok LEGO berwarna cerah."},{name:"LEGO Diorama",description:"Adegan LEGO seperti miniatur pameran artistik."},{name:"LEGO Stop-Motion",description:"Tampilan LEGO dengan nuansa animasi stop-motion."},{name:"LEGO Cinematic Superhero",description:"Visual pahlawan super dalam dunia LEGO dengan pencahayaan dramatis, efek kekuatan yang bercahaya, dan komposisi epik."},{name:"LEGO Movie Action Style",description:"Gaya aksi dinamis khas film LEGO dengan motion blur, efek ledakan balok yang intens, dan sudut kamera sinematik."},{name:"LEGO Unreal Engine Cinematic",description:"Render LEGO ultra-detail menggunakan Unreal Engine, menampilkan pantulan cahaya realistis pada plastik dan atmosfer film berkualitas tinggi."},{name:"LEGO Blockbuster VFX",description:"Visual blockbuster dengan efek khusus (VFX) spektakuler seperti api, asap, dan partikel yang terintegrasi dalam estetika balok LEGO."},{name:"LEGO Epic Battle Scene",description:"Adegan pertempuran kolosal LEGO dengan ribuan minifigure, lingkungan yang hancur secara artistik, dan skala sinematik yang luar biasa."},{name:"Pixar-style Animation",description:"Animasi 3D ekspresif ala film keluarga Pixar."},{name:"Storybook 3D",description:"Visual 3D bernuansa buku cerita anak."},{name:"Whimsical Children Illustration",description:"Ilustrasi ceria, imajinatif, dan penuh fantasi anak-anak."},{name:"Cute Kawaii Style",description:"Estetika Kawaii yang sangat imut dengan elemen-elemen menggemaskan."},{name:"Chibi 3D",description:"Proporsi kecil dengan kepala besar, sangat imut."},{name:"Kawaii Style",description:"Visual super lucu dengan bentuk bulat dan ramah anak."},{name:"Cute 3D / Kawaii",description:"Karakter 3D imut dengan warna lembut."},{name:"Cute Toy Style",description:"Karakter seperti mainan dengan tekstur plastik halus."},{name:"Kids Fantasy 3D",description:"Gaya 3D fantasi ceria dan aman untuk anak."},{name:"Dreamy Pastel Fantasy",description:"Dunia fantasi dengan palet warna pastel yang lembut dan suasana seperti mimpi."},{name:"Pastel Soft Lighting",description:"Cahaya lembut bernuansa pastel yang hangat dan dreamy."},{name:"Dreamy Soft Lighting",description:"Pencahayaan halus dengan suasana seperti mimpi."},{name:"Pastel Fantasy",description:"Warna pastel lembut dengan nuansa fantasi."},{name:"Candy World",description:"Dunia fantasi manis seperti permen."},{name:"Candyland / Marshmallow World",description:"Lingkungan imajinatif penuh marshmallow dan warna cerah."},{name:"Candyland 3D Style",description:"Dunia 3D bertema permen dengan bentuk imut dan manis."},{name:"Pastel Candy Commercial Style",description:"Gaya visual seperti iklan permen anak-anak."},{name:"Hello Kitty Dessert World",description:"Dunia dessert pastel bertema Hello Kitty yang ceria."},{name:"Origami Diorama Style",description:"Visual adegan fantasi yang seluruh elemennya terbuat dari lipatan kertas origami presisi dengan tekstur kertas nyata."},{name:"Paper Craft Portrait",description:"Seni potret yang dibuat dari lapisan potongan kertas dan lipatan origami dengan efek kedalaman 3D."},{name:"Papercraft Origami",description:"Visual bergaya kerajinan kertas dengan lipatan origami yang presisi dan tekstur kertas yang nyata."},{name:"Origami Low-Poly",description:"Bentuk geometris rendah (low-poly) yang dipadukan dengan teknik lipat origami untuk tampilan artistik minimalis."},{name:"Pastel Origami Fantasy",description:"Dunia fantasi origami dengan warna-warna pastel lembut dan pencahayaan dreamy."},{name:"Plush Felt Texture",description:"Tekstur kain felt yang lembut dan empuk pada seluruh lingkungan."},{name:"Soft Fuzzy Material",description:"Material berbulu halus yang memberikan kesan hangat dan nyaman."},{name:"Kawaii Plush 3D Render",description:"Karakter 3D seperti boneka plush berbulu dan lembut."},{name:"Cute Felt Toy Aesthetic",description:"Tampilan seperti mainan kain felt buatan tangan."},{name:"Soft Toy Food Diorama",description:"Makanan yang divisualkan seperti boneka empuk."},{name:"Claymation Style",description:"Tampilan seperti animasi plastisin stop-motion."},{name:"Crochet / Knitted / Amigurumi Style",description:"Semua objek tampak dirajut dari benang."},{name:"Amigurumi 3D Style",description:"Boneka rajut imut dalam bentuk 3D."},{name:"3D Yarn World / Yarn Render",description:"Dunia 3D dengan tekstur benang di seluruh objek."},{name:"Clay + Knit Hybrid",description:"Perpaduan clay dan rajutan dengan tampilan boneka lembut."},{name:"Cozy Pastel Toy Cottage",description:"Rumah mini pastel seperti mainan rajut yang hangat."},{name:"Knitted Miniature World",description:"Dunia mini yang seluruh lingkungannya terlihat dirajut."},{name:"Crochet Dollhouse Render",description:"Rumah boneka mini berbahan rajutan crochet."},{name:"Cute Handmade Toy Aesthetic",description:"Estetika mainan buatan tangan yang hangat dan lucu."},{name:"Pastel Yarn Diorama",description:"Diorama kecil bernuansa pastel dengan tekstur benang."},{name:"Cute Pastel Diorama",description:"Diorama mini pastel dengan dunia fantasi yang sangat imut."}];function Se(o,a){return Ae(o,a)}const Ha=[{id:"AUTO",label:"✨ Auto (Adaptive AI)",description:"AI menganalisis foto secara individual, mendeteksi exposure, dynamic range, white balance, skin tone, dan menentukan treatment warna paling optimal."},{id:"SELECT_STYLE",label:"🎯 Select Style (Target Visual)",description:"Pilih arah visual / style kurasi. AI menghitung penyesuaian tonal & warna secara adaptif per-foto agar selaras dengan target style."},{id:"CUSTOM_STYLE",label:"⚙️ Custom Style (Parameter Pengguna)",description:"Atur warmth, tint, contrast, highlights, shadows, vibrance, dan tone bayangan/highlight secara presisi dengan koreksi adaptif AI."}];Ha.AUTO="AUTO";Ha.SELECT_STYLE="SELECT_STYLE";Ha.CUSTOM_STYLE="CUSTOM_STYLE";const Wa=[{category:"NATURAL / REALISTIC",icon:"🌿",styles:[{name:"Natural Vibrant",description:"Warna natural tetapi lebih hidup dan segar, dengan vibrance terarah dan color separation yang tetap realistis tanpa oversaturation."},{name:"Natural Clean",description:"Tampilan bersih, seimbang, dan realistis dengan white balance netral, contrast moderat, dan warna yang natural."},{name:"Natural DSLR",description:"Karakter foto DSLR modern dengan tonal kaya, detail natural, warna realistis, depth yang baik, dan highlight terkontrol."},{name:"Natural Film",description:"Tampilan natural dengan sentuhan film ringan, tonal lembut, highlight smooth, dan saturation terkontrol."},{name:"True to Life",description:"Memprioritaskan reproduksi warna yang paling mendekati kondisi asli dengan koreksi minimal dan akurat."},{name:"Soft Natural",description:"Tampilan natural yang lembut dengan contrast rendah hingga sedang, highlight halus, shadow tidak terlalu dalam, dan warna yang nyaman."}]},{category:"WARM / BRIGHT",icon:"☀️",styles:[{name:"Warm Cinematic",description:"Nuansa hangat dan cinematic dengan highlight warm, shadow sedikit lebih dalam, dan color separation elegan."},{name:"Golden Hour",description:"Karakter cahaya keemasan seperti golden hour dengan warmth adaptif, highlight keemasan, dan tonal hangat yang natural."},{name:"Sun-Kissed",description:"Kesan terkena cahaya matahari lembut dengan warmth ringan, highlight bercahaya, dan skin tone tetap natural."},{name:"Bright & Airy",description:"Tampilan terang, ringan, bersih, dan airy dengan shadow terangkat, contrast lembut, dan highlight tetap terkendali."},{name:"Warm Lifestyle",description:"Tampilan hangat, ramah, dan natural untuk foto lifestyle dengan warmth moderat dan warna kulit yang nyaman."},{name:"Soft Golden",description:"Nuansa keemasan yang lembut dengan highlight warm dan contrast rendah hingga sedang."}]},{category:"CINEMATIC",icon:"🎬",styles:[{name:"Moody Cinematic",description:"Atmosfer cinematic yang lebih dalam dengan shadow kaya, contrast terkontrol, saturation sedikit lebih tenang, dan mood dramatis."},{name:"Modern Cinematic",description:"Cinematic modern dengan tonal bersih, contrast elegan, warna terkontrol, dan color separation halus."},{name:"Teal & Orange Cinematic",description:"Separation cyan/teal pada area cool dan orange pada area warm secara selektif dengan perlindungan warna kulit."},{name:"Cinematic Contrast",description:"Menonjolkan depth melalui contrast lebih kuat, black lebih tegas, dan highlight tetap terjaga."},{name:"Dark Cinematic",description:"Cinematic dengan overall exposure dan shadow lebih rendah namun tetap mempertahankan detail penting pada area gelap."},{name:"Soft Cinematic",description:"Cinematic yang halus dengan contrast lembut, highlight smooth, shadow tidak crushed, dan warna tetap realistis."}]},{category:"VIBRANT / COLORFUL",icon:"🌈",styles:[{name:"Vivid Color",description:"Meningkatkan vibrance dan saturation secara selektif untuk warna yang lebih hidup tanpa oversaturation."},{name:"Rich Color",description:"Memberikan warna yang lebih kaya, dalam, dan memiliki depth dengan saturation yang dikontrol adaptif."},{name:"Color Pop",description:"Menonjolkan warna utama secara selektif sambil menjaga warna lain tetap seimbang."},{name:"Fresh Vibrant",description:"Tampilan segar, cerah, youthful, dan colorful dengan fokus pada vibrance dan clean color separation."},{name:"Deep Color",description:"Menghasilkan warna lebih pekat dan kaya dengan tonal depth lebih kuat tanpa membuat warna terlihat neon."}]},{category:"CLEAN / MODERN",icon:"✨",styles:[{name:"Clean & Fresh",description:"Warna bersih, segar, netral, dan modern dengan contrast moderat serta saturation terkontrol."},{name:"Modern Clean",description:"Tampilan modern dan polished dengan white balance akurat, tonal rapi, dan warna tidak berlebihan."},{name:"Crisp Detail",description:"Menonjolkan struktur tonal, local contrast, dan detail secara ringan tanpa menghasilkan sharpening berlebihan."},{name:"High Key Clean",description:"Tampilan dominan terang dengan shadow ringan, highlight bersih, dan contrast rendah hingga sedang."},{name:"Minimal Neutral",description:"Color grading sangat minimal dengan warna netral dan tonal natural untuk hasil profesional dan understated."}]},{category:"FILM / ARTISTIC",icon:"🎞️",styles:[{name:"Film Look",description:"Karakter film halus melalui tonal curve lembut, highlight roll-off, saturation terkontrol, dan color palette harmonis."},{name:"Vintage Film",description:"Nuansa film vintage dengan warna sedikit muted, contrast lembut, dan karakter warm/faded yang tetap mempertahankan detail."},{name:"Analog Film",description:"Karakter analog dengan tonal lembut, color response organik, saturation moderat, dan warna yang tidak terlalu digital."},{name:"Pastel Film",description:"Warna lebih lembut dan pastel dengan saturation lebih rendah, highlight airy, dan contrast ringan."},{name:"Faded Film",description:"Efek faded dengan black sedikit terangkat, contrast lembut, dan warna sedikit desaturated."},{name:"Retro Color",description:"Color palette bernuansa retro dengan karakter warna klasik tetap mempertahankan tonal dan detail foto."}]},{category:"DRAMATIC",icon:"🎭",styles:[{name:"Dark & Moody",description:"Nuansa gelap, atmospheric, dan emosional dengan shadow lebih dalam serta warna yang lebih subdued."},{name:"Dramatic Contrast",description:"Menonjolkan perbedaan terang dan gelap dengan contrast kuat namun tetap menjaga highlight dan shadow penting."},{name:"Deep Shadow",description:"Memprioritaskan depth melalui shadow lebih kaya dan pekat tanpa crushing detail penting."},{name:"Low Key Cinematic",description:"Overall image lebih gelap dengan fokus cahaya pada area utama, shadow dalam, dan karakter cinematic yang kuat."}]}],Ua=[...Wa.flatMap(o=>o.styles.map(a=>({...a,category:o.category,categoryIcon:o.icon}))),{name:"Custom Style",description:"Style yang ditentukan pengguna melalui parameter color grading dengan adaptive correction berdasarkan kondisi masing-masing foto.",category:"CUSTOM",categoryIcon:"⚙️"}],Re=[{value:0,label:"0% — Original",description:"Tampilan foto asli tanpa grading"},{value:25,label:"25% — Very Subtle",description:"Sentuhan sangat halus dan tipis"},{value:50,label:"50% — Balanced (Default)",description:"Keseimbangan optimal antara gaya & kealamian foto"},{value:75,label:"75% — Strong",description:"Karakter style tegas dan terasa"},{value:100,label:"100% — Full Style",description:"Penerapan style penuh dengan proteksi batas"}],Pa={mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,protections:{highlightProtection:!0,shadowProtection:!0,skinToneProtection:!0,oversaturationProtection:!0,clippingProtection:!0,naturalColorProtection:!0},custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}},Ie=[{label:"Neutral (Alami)",value:"Neutral",color:"#64748b"},{label:"Cool Blue (Sinematik Dingin)",value:"Cool Blue",color:"#38bdf8"},{label:"Deep Teal (Teal & Orange)",value:"Deep Teal",color:"#14b8a6"},{label:"Warm Amber (Keemasan Hangat)",value:"Warm Amber",color:"#f59e0b"},{label:"Slate Gray (Matte Film)",value:"Slate Gray",color:"#94a3b8"}],we=[{label:"Neutral (Alami)",value:"Neutral",color:"#e2e8f0"},{label:"Soft Gold (Golden Hour)",value:"Soft Gold",color:"#fde047"},{label:"Clean White (Modern Airy)",value:"Clean White",color:"#ffffff"},{label:"Warm Amber (Sunset Warmth)",value:"Warm Amber",color:"#fb923c"},{label:"Soft Rose (Pastel Aesthetic)",value:"Soft Rose",color:"#f472b6"}];function Za(o=Pa,a=null){const e={...Pa,...o},r=e.mode||"AUTO",t=typeof e.intensity=="number"?e.intensity:50,i=[];if(i.push("STRICT PRESERVATION DIRECTIVE (ORIGINAL PHOTO IS SOURCE OF TRUTH): DO NOT regenerate the image. DO NOT use generative fill. DO NOT alter subject facial identity, face features, body structure, clothing, hair, pose, objects, or composition. Retain original source image geometry and perspective. Apply NON-DESTRUCTIVE AI COLOR GRADING and TONAL ENHANCEMENT ONLY."),r==="AUTO")i.push(`COLOUR GRADING MODE: AUTO ADAPTIVE AI. Individually assess the source photo's dynamic range, exposure, highlight roll-off, shadow depth, white balance, and skin tone. Apply intelligent, adaptive, photo-specific color correction and tonal harmonization tailored to this individual image's characteristics. Intensity: ${t}%.`);else if(r==="SELECT_STYLE"){const l=Ua.find(g=>g.name===e.selectedStyle)||{name:e.selectedStyle,description:"Visual style direction"},d=ca(l.description);i.push(`COLOUR GRADING STYLE TARGET: "${l.name}" (${l.category}). Description: ${d}. Adaptive execution: Use this style as a visual target/color direction. Calculate per-photo adaptive adjustments rather than static numeric presets. Intensity: ${t}%.`)}else if(r==="CUSTOM_STYLE"){const l=e.custom||{};i.push(`COLOUR GRADING CUSTOM SPECIFICATION: Warmth: ${l.warmth>0?"+":""}${l.warmth}, Tint: ${l.tint>0?"+":""}${l.tint}, Contrast: ${l.contrast>0?"+":""}${l.contrast}, Highlights: ${l.highlights>0?"+":""}${l.highlights}, Shadows: ${l.shadows>0?"+":""}${l.shadows}, Vibrance: ${l.vibrance>0?"+":""}${l.vibrance}, Saturation: ${l.saturation>0?"+":""}${l.saturation}, Clarity: ${l.clarity>0?"+":""}${l.clarity}, Shadow Tone: ${l.shadowTone||"Neutral"}, Highlight Tone: ${l.highlightTone||"Neutral"}. AI Adaptive Correction: Balance custom adjustments against the actual image telemetry. Intensity: ${t}%.`)}const n=e.protections||{},s=[];return n.skinToneProtection!==!1&&s.push("Natural Skin Tone Protection (prioritize healthy, authentic skin tones; strictly prevent unnatural orange/red/magenta/gray casts)"),n.highlightProtection!==!1&&s.push("Highlight Protection (prevent blown-out clipping, preserve highlight texture and roll-off)"),n.shadowProtection!==!1&&s.push("Shadow Protection (prevent crushed blacks, preserve low-end shadow detail)"),n.oversaturationProtection!==!1&&s.push("Oversaturation & Gamut Protection (maintain natural color boundaries)"),n.clippingProtection!==!1&&s.push("Dynamic Range Clipping Protection (keep RGB channels within broadcast-safe gamut)"),n.naturalColorProtection!==!1&&s.push("Natural Color Harmony (preserve realism of sky, foliage, and environmental textures)"),s.length>0&&i.push(`INTELLIGENT PROTECTIONS ACTIVE: ${s.join("; ")}.`),i.push("EXECUTION PRIORITY: NATURAL RESULT > STYLE ACCURACY > STRONG EFFECT. If the original photo already has optimal exposure or color, apply minimal fine-tuning. If heavily skewed, apply measured adaptive correction without artificial grading artifacts."),i.join(`

`)}function Oe(o){if(!o)return{brightness:128,contrast:50,colorTemp:"neutral",warmthScore:0,saturation:50,hasSkinTone:!1,skinTonePercentage:0,highlightClipping:0,shadowCrushing:0,dynamicRange:"normal",qualityScore:85};o.getContext("2d");const a=Math.min(o.width,320),e=Math.min(o.height,240),r=document.createElement("canvas");r.width=a,r.height=e;const t=r.getContext("2d");t.drawImage(o,0,0,a,e);const i=t.getImageData(0,0,a,e).data,n=a*e;let s=0,l=0,d=0,g=0,u=0,p=0,c=0,h=0;for(let C=0;C<i.length;C+=4){const N=i[C],P=i[C+1],S=i[C+2];s+=N,l+=P,d+=S;const M=.299*N+.587*P+.114*S;g+=M,M>242&&p++,M<15&&c++;const F=Math.max(N,P,S),L=Math.min(N,P,S),H=F===0?0:(F-L)/F;h+=H,N>P&&P>S&&N-P>=15&&P-S>=10&&M>40&&M<235&&u++}const k=s/n,m=l/n,b=d/n,T=g/n,v=h/n*100,f=k-b;let A="neutral";f>12?A="warm":f<-12&&(A="cool");const I=u/n*100,E=p/n*100,R=c/n*100;return r.width=0,r.height=0,{brightness:Math.round(T),contrast:Math.round(Math.abs(T-128)*.8+40),colorTemp:A,warmthScore:Math.round(f),avgR:Math.round(k),avgG:Math.round(m),avgB:Math.round(b),saturation:Math.round(v),hasSkinTone:I>1.2,skinTonePercentage:Number(I.toFixed(1)),highlightClipping:Number(E.toFixed(1)),shadowCrushing:Number(R.toFixed(1)),dynamicRange:E>5||R>5?"tinggi (perlu proteksi)":"seimbang",qualityScore:Math.max(50,Math.min(98,Math.round(100-E*2-R*2)))}}function Ce(o,a=Pa){const e={...Pa,...a},r=e.mode||"AUTO",t=(typeof e.intensity=="number"?e.intensity:50)/100,i=e.protections||{};let n=0,s=0,l=0,d=0,g=0,u=0,p=0,c=0,h=0,k=e.selectedStyle||"Natural Vibrant";if(r==="AUTO")o.brightness<100?(n+=(115-o.brightness)/100,d+=22):o.brightness>165&&(n-=(o.brightness-150)/120,l-=25),o.colorTemp==="warm"&&o.warmthScore>18?g-=Math.min(18,Math.round(o.warmthScore*.5)):o.colorTemp==="cool"&&o.warmthScore<-18&&(g+=Math.min(18,Math.round(Math.abs(o.warmthScore)*.5))),s+=12,p+=15,k=o.hasSkinTone?"Natural Clean":"Natural Vibrant";else if(r==="SELECT_STYLE"){k=e.selectedStyle||"Natural Vibrant";const b=k.toLowerCase();typeof o.brightness=="number"&&(o.brightness<110?n+=Number(((120-o.brightness)/120).toFixed(2)):o.brightness>155&&(n-=Number(((o.brightness-150)/140).toFixed(2))));const T=o.colorTemp==="warm"||typeof o.warmthScore=="number"&&o.warmthScore>10,v=o.colorTemp==="cool"||typeof o.warmthScore=="number"&&o.warmthScore<-10;b.includes("warm")||b.includes("golden")||b.includes("sun-kissed")?(g+=T?10:v?32:22,l+=8,d+=12,p+=12):b.includes("cinematic")||b.includes("teal")?b.includes("teal")?(g+=8,u-=6,s+=22,d-=8,l+=10,p+=16):b.includes("dark")||b.includes("moody")?(s+=20,d-=15,l-=10,c-=8,p+=6):(s+=16,l+=6,d+=10,p+=14):b.includes("film")||b.includes("vintage")||b.includes("analog")||b.includes("retro")?(d+=18,l-=12,s-=5,g+=8,c-=6,p+=8):b.includes("vivid")||b.includes("color pop")||b.includes("vibrant")?(p+=28,s+=15,c+=o.saturation>60?4:14):b.includes("clean")||b.includes("crisp")||b.includes("airy")?(o.colorTemp!=="neutral"&&(g-=o.warmthScore*.3),n+=b.includes("airy")?.25:.08,l+=10,d+=14,s+=12,p+=10):b.includes("dramatic")?(s+=32,d-=18,l+=14,p+=10):(p+=15,s+=10,d+=8)}else if(r==="CUSTOM_STYLE"){const b=e.custom||{};k="Custom Style",g=(b.warmth||0)*.45,u=(b.tint||0)*.35,s=(b.contrast||0)*.4,l=(b.highlights||0)*.5,d=(b.shadows||0)*.5,c=(b.saturation||0)*.4,p=(b.vibrance||0)*.45,h=(b.clarity||0)*.35}const m=[];return i.highlightProtection!==!1&&o.highlightClipping>3&&(l-=Math.round(o.highlightClipping*5),n=Math.min(n,.05),m.push("Highlight Protection aktif: Mencegah highlight blown-out & menjaga detail tekstur putih.")),i.shadowProtection!==!1&&(o.shadowCrushing>3||d<0)&&(d=Math.max(d,5),m.push("Shadow Protection aktif: Mencegah black crushing & mempertahankan detail bayangan.")),i.skinToneProtection!==!1&&o.hasSkinTone&&(g=Math.max(-15,Math.min(18,g)),c=Math.max(-15,Math.min(12,c)),m.push("Skin Tone Protection aktif: Mempertahankan keaslian & rona alami warna kulit subjek.")),i.oversaturationProtection!==!1&&o.saturation>55&&(p=Math.min(p,12),c=Math.min(c,6),m.push("Oversaturation Protection aktif: Menahan saturasi dalam batas gamut alami foto.")),{exposure:Number((n*t).toFixed(2)),contrast:Math.round(s*t),highlights:Math.round(l*t),shadows:Math.round(d*t),warmth:Math.round(g*t),temperature:Math.round(g*t),tint:Math.round(u*t),vibrance:Math.round(p*t),saturation:Math.round(c*t),clarity:Math.round(h*t),intensityPercent:Math.round(t*100),targetStyle:k,protectionLogs:m}}function Le(){return`You are Prompt Shorthand Analyzer V3.6 - Specialized Two Worlds (2 Dunia) AI Conflict Harmonizer & Prompt Enrichment Engine.
Your mission: Audit, harmonize, and resolve all conflicts, contradictions, inconsistencies, or mismatched instructions within PROMPT OPTIMAL for the "2 Dunia" (Two Worlds) workflow.

============================================================
ABSOLUTE PRIORITY HIERARCHY (SOURCE OF TRUTH)
PARAMETER MODIFIKASI KHUSUS 2 DUNIA → PROMPT HASIL ANALISA 2 DUNIA → PROMPT OPTIMAL
============================================================
1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (HIGHEST PRIORITY - ABSOLUTE SOURCE OF TRUTH):
   - Custom Request (Directive for added subject, attire, action)
   - Subject Demographics (Gender, Age, Ethnicity)
   - Subject Visual Style (Rendering / Materiality)
   - Environment Style (World-building, background, lighting, atmosphere)
   * If any text in PROMPT OPTIMAL contradicts these active parameters, PARAMETER MODIFIKASI KHUSUS 2 DUNIA OVERRULES AND REPLACES IT.

2. PROMPT HASIL ANALISA 2 DUNIA (SECONDARY PRIORITY - ORIGINAL IMAGE CONTEXT):
   - Contains the core visual description and identity of the original source character/subject.
   * ABSOLUTE PRESERVATION: The original character's facial features, identity, physical appearance, and key clothing must remain 100% intact, undistorted, and protected from deletion or unwanted morphing.

3. PROMPT OPTIMAL (PROMPT UNDER AUDIT):
   - The prompt being reviewed and harmonized.
   - Retain all valuable, non-conflicting visual details, realistic microtextures, camera angles, lighting, and composition.

============================================================
SPECIFIC CONFLICT RESOLUTION RULES
============================================================
1. ENVIRONMENT CONFLICT RESOLUTION:
   - If an active Environment Style is chosen (not "Auto"), eliminate any contradictory original background settings (e.g., original classroom, indoor studio, plain wall) and synthesize the scene into the chosen Environment Style world, incorporating its atmosphere, materials, and lighting seamlessly.
   - The original subject must be naturally placed within this new environment while maintaining their identity.

2. SUBJECT & DEMOGRAPHIC CONFLICT RESOLUTION:
   - If an added character or modification is specified in Custom Request or Demographics (Gender, Age, Ethnicity), ensure the added subject adheres strictly to these parameters.
   - Remove any contradictory traits, clothing, or ages assigned to the added character.

3. NEGATIVE PROMPT & SHORTHAND INTEGRITY:
   - Remove any negative prompt flags that contradict the active styles (e.g., remove "--no 3d render" or "3d render" from negative prompts if the environment is a 3D animation/cartoon style).
   - All shorthand codes (e.g., /facelock, /hairlock, /raw, /candid, /masterpiece) and Midjourney parameters (--ar ..., --style ..., --v ...) MUST BE PRESERVED and placed at the end of the prompt.

4. LANGUAGE & FORMAT:
   - Output must be in natural, descriptive, clear English optimal for state-of-the-art AI image generators.
   - Do NOT output conversational filler, disclaimers, or markdown outside JSON.

Format response STRICTLY as valid JSON:
{
  "enrichedPrompt": "the complete, conflict-free, harmonized English prompt with shorthands and parameters preserved at the end",
  "conflictsResolved": ["list of resolved conflicts, e.g., 'Replaced legacy indoor studio background with chosen SpongeBob Cinematic 3D underwater environment'"]
}`}function Pe({optimalPrompt:o,generatedPrompt:a,twoWorldsConfig:e}){const r=e||{};return`=== 1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (PRIORITY 1 - SOURCE OF TRUTH) ===
${[`1. Custom Request (Instruksi Tambahan): "${r.customRequest?r.customRequest.trim():"(tidak ada / kosong)"}"`,`2. Gender Subyek Tambahan: "${r.gender||"Auto"}"`,`3. Usia Karakter Tambahan: "${r.age||"Auto"}"`,`4. Suku / Etnis Karakter: "${r.ethnicity||"Auto"}"`,`5. Style Subyek: "${r.subjectStyle==="Custom"?r.customSubjectStyle||"Custom":r.subjectStyle||"Auto"}"`,`6. Environment Style (Dunia / Background): "${r.environmentStyle||"Auto"}"`].join(`
`)}

=== 2. PROMPT HASIL ANALISA 2 DUNIA (PRIORITY 2 - CONTEXT OF ORIGINAL IMAGE & SUBJECT) ===
"${(a||"").trim()||"(tidak ada analisa visual awal)"}"

=== 3. PROMPT OPTIMAL (PRIORITY 3 - TARGET AUDIT & HARMONISASI) ===
"${(o||"").trim()}"

TUGAS AI:
Audit PROMPT OPTIMAL di atas terhadap PARAMETER MODIFIKASI KHUSUS 2 DUNIA dan PROMPT HASIL ANALISA 2 DUNIA.
Selesaikan semua kontradiksi (seperti latar belakang lama vs environment style baru, deskripsi karakter tambahan yang tidak sesuai parameter, atau negative prompt yang bentrok).
Pertahankan identitas karakter asli 100%, pertahankan seluruh shorthand dan flag parameter di akhir prompt, dan hasilkan prompt final dalam bahasa Inggris yang harmonis dan siap pakai.`}function Ne(o=""){const a=o.match(/\/[a-zA-Z0-9_\-:]+/g)||[],e=[],r=o.match(/--[a-zA-Z0-9_\-]+(?:\s+[a-zA-Z0-9_.,:\-]+)*/g)||[];for(const t of r)e.includes(t.trim())||e.push(t.trim());return{shorthands:a,flags:e}}function ae({optimalPrompt:o="",generatedPrompt:a="",twoWorldsConfig:e={},analysisResult:r=null}){if(!o||!o.trim())return{success:!1,enrichedPrompt:o,conflictsResolved:[]};const t=[];let i=o.trim();const{shorthands:n}=Ne(i);let s=i.startsWith("/imagine prompt:");s&&(i=i.replace(/^\/imagine prompt:\s*/i,"").trim());const l=(e==null?void 0:e.environmentStyle)||"Auto (Smart Detection)";if(!l.toLowerCase().startsWith("auto")){const b=/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(l),T=[/(?:standing|sitting|located|set)\s+in\s+a\s+[^.,\n]+(?:classroom|room|office|studio|bedroom|hallway|interior|backdrop)[^.,\n]*/gi,/wooden\s+classroom\s+with\s+chalkboards[^.,\n]*/gi,/in\s+a\s+(?:traditional\s+)?wooden\s+classroom[^.,\n]*/gi,/plain\s+(?:studio\s+)?backdrop[^.,\n]*/gi];let v=!1;for(const f of T)f.test(i)&&(i=i.replace(f,`seamlessly integrated into a ${l} environment`),v=!0);v&&t.push(`Harmonized legacy background into ${l} environment`),!new RegExp(`Environment Style:.*?${l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`,"i").test(i)&&!i.toLowerCase().includes(l.toLowerCase())&&(i+=`

Environment Style: World-building, background setting, atmosphere, environmental materials, and lighting seamlessly adopt ${l}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`,t.push(`Added explicit ${l} environment harmonization directive`)),b&&(/--no\s+[^,\n]*3d render/i.test(i)||/--no\s+[^,\n]*cartoon/i.test(i))&&(i=i.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),t.push(`Removed conflicting negative prompts ('3d render', 'cartoon') to match ${l}`))}const d=e!=null&&e.customRequest?e.customRequest.trim():"",g=(e==null?void 0:e.gender)||"Auto",u=(e==null?void 0:e.age)||"Auto",p=(e==null?void 0:e.ethnicity)||"Auto",c=!g.toLowerCase().startsWith("auto"),h=!u.toLowerCase().startsWith("auto"),k=!p.toLowerCase().startsWith("auto");if(c||h||k||d){if(d){const b=ca(d);i.toLowerCase().includes(b.toLowerCase().slice(0,20))||(i+=`

Additional Directive (Custom Request): ${b}`,t.push(`Synchronized Custom Request directive: ${b}`))}if(c||h||k){const b=[];if(c&&b.push(`Gender: ${g==="Laki-Laki"?"Male":g==="Perempuan"?"Female":g}`),h){const v=parseInt(u,10);b.push(`Age: ${isNaN(v)?u:`${v} years old`}`)}k&&b.push(`Ethnicity: ${p}`);const T=b.join(", ");i.includes(T)||(i+=`

Subject Character Parameters: ${T}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`,t.push(`Synchronized demographic parameters: ${T}`))}}i=ca(i);let m=s?`/imagine prompt: ${i}`:i;for(const b of n)m.includes(b)||(m+=` ${b}`);return{success:!0,enrichedPrompt:m.trim(),conflictsResolved:t,source:"HEURISTIC_RESOLVER"}}function je({enrichedPrompt:o="",optimalPrompt:a="",twoWorldsConfig:e={},originalShorthands:r=[]}){if(!o||typeof o!="string")return a;let t=ca(o.trim());for(const n of r)t.includes(n)||(t+=` ${n}`);const i=(e==null?void 0:e.environmentStyle)||"";return/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(i)&&(t=t.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,"")),t.trim()}function De(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.gender){const d=String(o.smartDetection.gender).trim();if(/perempuan|wanita|female|woman|girl/i.test(d))return"Perempuan";if(/laki-laki|pria|male|man|boy/i.test(d))return"Laki-Laki"}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,o.outfit,o.outfitMaterial,o.expression,e].filter(Boolean).join(" ").toLowerCase(),i=["woman","female","wanita","perempuan","cewek","girl","lady","hijab","gadis","ibu","sister","mother","daughter","queen","princess","she","her"],n=["man","male","pria","laki-laki","cowok","boy","gentleman","businessman","ayah","bapak","brother","father","son","king","prince","he","his"];let s=0,l=0;for(const d of i){const g=new RegExp(`\\b${d}\\b`,"g"),u=t.match(g);u&&(s+=u.length)}for(const d of n){const g=new RegExp(`\\b${d}\\b`,"g"),u=t.match(g);u&&(l+=u.length)}return s>l?"Perempuan":"Laki-Laki"}function Me(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.age){const n=String(o.smartDetection.age).trim().match(/(\d{1,2})/);if(n)return`${Math.min(50,Math.max(1,parseInt(n[1],10)))} tahun`}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase(),i=t.match(/(?:age|usia|umur|aged|berusia)\s*(?:is|sekitar|about|approx)?\s*(\d{1,2})/i)||t.match(/\b(\d{1,2})\s*(?:years?\s*old|yo|y\.o|thn|tahun)\b/i);return i?`${Math.min(50,Math.max(1,parseInt(i[1],10)))} tahun`:/\b(baby|infant|bayi)\b/i.test(t)?"1 tahun":/\b(toddler|balita)\b/i.test(t)?"3 tahun":/\b(little\s*girl|little\s*boy|anak-anak|anak\s*kecil|child|kid|bocah)\b/i.test(t)?"8 tahun":/\b(preteen|young\s*teen)\b/i.test(t)?"12 tahun":/\b(teenager|teen|remaja|abg|high\s*school)\b/i.test(t)?"16 tahun":/\b(college|university|mahasiswa|dewasa\s*muda|young\s*adult|young\s*woman|young\s*man)\b/i.test(t)?"21 tahun":/\b(chibi|doll|figurine|cute\s*3d)\b/i.test(t)?"22 tahun":/\b(middle\s*aged|paruh\s*baya|dewasa\s*matang)\b/i.test(t)?"42 tahun":/\b(elderly|senior|old\s*man|old\s*woman|kakek|nenek|wrinkled)\b/i.test(t)?"50 tahun":/\b(adult|dewasa|pria\s*dewasa|wanita\s*dewasa)\b/i.test(t)?"28 tahun":"25 tahun"}function $e(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.ethnicity){const i=String(o.smartDetection.ethnicity).trim(),n=ie.find(s=>s.toLowerCase()===i.toLowerCase()&&!s.startsWith("Auto"));if(n)return n}const t=[o.subject,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(southeast\s*asian|indonesia|indonesian|melayu|malay|asean|nusantara|jawa|sunda|bali|filipino|tagalog|vietnamese|thai)\b/i.test(t)?"Asia Tenggara":/\b(east\s*asian|japanese|korean|chinese|mandarin|tokyo|seoul|beijing|jepang|korea|tionghoa|cina)\b/i.test(t)?"Asia Timur":/\b(south\s*asian|indian|india|pakistan|pakistani|bengali|bangladesh|nepali|sri\s*lanka)\b/i.test(t)?"Asia Selatan":/\b(caucasian|european|eropa|bule|nordic|slavic|british|german|french|italian|scandinavian|western)\b/i.test(t)?"Eropa":/\b(middle\s*eastern|arab|arabic|timur\s*tengah|persian|iranian|turkish|turki)\b/i.test(t)?"Timur Tengah":/\b(african|afrika|black|afro|ethiopian|nigerian|kenyan)\b/i.test(t)?"Afrika":/\b(latino|latina|hispanic|mexican|brazilian|colombian|amerika\s*latin)\b/i.test(t)?"Amerika Latin":/\b(pacific|oceania|polynesian|maori|samoan|hawaiian|pasifik|oseania)\b/i.test(t)?"Pasifik / Oseania":"Asia"}function Ge(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.subjectStyle){const i=String(o.smartDetection.subjectStyle).trim();if(i&&!i.startsWith("Auto"))return Fa.find(n=>n.toLowerCase()===i.toLowerCase()&&!n.startsWith("Auto"))||i}const t=[o.style,o.photoStyleRealism,o.subjectDescription,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(lego|minifigure|brick|lego\s*style)\b/i.test(t)?"LEGO Style":/\b(claymation|clay\s*render|clay\s*model|plastisin|soft\s*clay)\b/i.test(t)?"Claymation Style":/\b(anime|manga|anime\s*style|shonen|shojo|makoto\s*shinkai)\b/i.test(t)?"Anime Style":/\b(chibi|doll\s*figurine|cute\s*3d\s*character|chibi\s*3d|vinyl\s*toy|figurine)\b/i.test(t)?"Stylized 3D Character":/\b(3d\s*cartoon|pixar|disney|animated\s*character|cartoon\s*3d|3d\s*animation|cgi\s*character|cartoon)\b/i.test(t)?"3D Cartoon Style":/\b(papercraft|origami|paper\s*cut)\b/i.test(t)?"Papercraft Origami":/\b(crochet|knitted|amigurumi|yarn)\b/i.test(t)?"Crochet / Knitted Style":/\b(raw\s*photo|raw\s*photography|dslr\s*sensor|sensor\s*noise)\b/i.test(t)?"Raw Photography Realism":/\b(ultra\s*photorealistic|ultra\s*photoreal)\b/i.test(t)?"Ultra Photorealistic":/\b(photorealistic|hyper\s*realistic|photorealism)\b/i.test(t)?"Photorealistic":/\b(live-action|live\s*action)\b/i.test(t)?"Live-Action":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?"3D Cartoon Style":"Realistic Human Style"}function xe(o={},a={},e=""){var r;if((r=o.smartDetection)!=null&&r.environmentStyle){const i=String(o.smartDetection.environmentStyle).trim();if(i&&!i.startsWith("Auto")){const n=Da.find(s=>s.name.toLowerCase()===i.toLowerCase()&&!s.name.startsWith("Auto"));return n?n.name:i}}const t=[o.environment,o.background,o.environmentBackground,o.lighting,o.lightingColor,o.mainDescription,o.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(candyland|candy\s*world|marshmallow|sweets|dessert\s*world)\b/i.test(t)?"Candy World 3D Style":/\b(dreamy\s*pastel|pastel\s*fantasy|pastel\s*soft|dreamy\s*soft|pastel\s*lighting)\b/i.test(t)?"Dreamy Pastel 3D":/\b(fantasy\s*environment|magical\s*world|enchanted|fairy\s*tale|mystical)\b/i.test(t)?"Fantasy Environment":/\b(spongebob|bikini\s*bottom|underwater\s*3d)\b/i.test(t)?"SpongeBob Cinematic 3D":/\b(lego|lego\s*world|brick\s*diorama)\b/i.test(t)?"LEGO Style":/\b(claymation|clay\s*world|soft\s*clay)\b/i.test(t)?"Soft Clay Render":/\b(origami|papercraft|paper\s*diorama)\b/i.test(t)?"Papercraft Origami":/\b(plush|felt|fuzzy)\b/i.test(t)?"Cute Felt Toy Aesthetic":/\b(crochet|yarn|knitted|amigurumi)\b/i.test(t)?"Amigurumi 3D Style":/\b(clean\s*3d|studio\s*render|octane\s*render|studio\s*backdrop|clean\s*studio)\b/i.test(t)?"Clean 3D Render":/\b(stylized\s*3d\s*cartoon|cartoon\s*world|whimsical\s*cartoon)\b/i.test(t)?"Stylized 3D Cartoon":/\b(pixar|pixar-style)\b/i.test(t)?"Pixar-style Lighting":/\b(dark\s*&\s*moody|dark\s*and\s*moody|moody\s*lighting)\b/i.test(t)?"Dark & Moody":/\b(dramatic\s*lighting|high\s*contrast\s*light)\b/i.test(t)?"Dramatic Lighting":/\b(cinematic|film\s*still|movie\s*scene)\b/i.test(t)?"Cinematic":/\b(portrait\s*photography|bokeh\s*backdrop|studio\s*portrait)\b/i.test(t)?"Portrait Photography":/\b(realistic\s*environment|outdoor\s*scenic|landscape\s*photography|real\s*world|nature\s*landscape)\b/i.test(t)?"Realistic Environment":/\b(natural\s*lighting|natural\s*light|daylight|sunlight|ambient\s*daylight)\b/i.test(t)?"Natural Lighting":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?a.dominantHue==="pink"||a.dominantHue==="cyan"?"Dreamy Pastel 3D":"Clean 3D Render":"Natural Lighting"}function re(o={},a={},e={},r={}){const t=e||(a==null?void 0:a.visualTelemetry)||{},i=(a==null?void 0:a.name)||"",n=De(o,t,i),s=Me(o,t,i),l=$e(o,t,i),d=Ge(o,t,i),g=xe(o,t,i);return{gender:n,age:s,ethnicity:l,subjectStyle:d,environmentStyle:g}}function _e(){return`Anda adalah Ahli Analisis Latar Belakang & Komposisi Arsitektur Fotografi Vision AI Profesional (Prompt Shorthand Analyzer V3.7).
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
}`}function Ue(o){if(!o)return"";const a=o.suasanaMood||o.photoMood||{};return["SUASANA / MOOD:",`- Atmosphere: ${a.atmosphere||a.roomImpression||"-"}`,`- Mood: ${a.mood||"-"}`,`- Emotional Tone: ${a.emotionalTone||a.mood||"-"}`,`- Visual Temperature: ${a.visualTemperature||a.colorTemperature||"-"}`,`- Formalitas: ${a.formality||a.formalityLevel||"-"}`,`- Ambience: ${a.overallAmbience||a.backgroundCharacter||"-"}`,`- Sophistication: ${a.sophistication||"High / Elegant"}`,`- Karakter: ${a.characterType||a.visualStyle||"-"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function Be(o){if(!o)return"";const a=o.gayaFotografi||{},e=o.photoMood||{},r=o.backgroundLighting||{};return["GAYA FOTOGRAFI:",`- Photography Style: ${a.photographyStyle||e.visualStyle||"Architectural Interior Photography"}`,`- Genre: ${a.genre||"Environmental Interior / Still-Life"}`,`- Perspektif: ${a.cameraPerspective||"Eye-level linear perspective"}`,`- Ketinggian Kamera: ${a.cameraHeight||"Eye-level (approx. 150cm)"}`,`- Karakter Lensa: ${a.focalLengthImpression||"50mm standard normal lens (natural perspective)"}`,`- Framing: ${a.framing||"Medium shot environmental framing"}`,`- Depth of Field: ${a.depthOfField||"Medium depth of field with readable background details"}`,`- Gaya Pencahayaan: ${a.lightingStyle||r.type||"Diffused key light with soft ambient fill"}`,`- Kelembutan Cahaya: ${a.lightingSoftness||r.quality||"Soft wrap-around lighting"}`,`- Karakter Bayangan: ${a.shadowCharacter||r.shadows||"Gentle soft-edge progressive shadows"}`,`- Realisme: ${a.realism||"Authentic photorealistic optical rendering"}`,`- Gaya Rendering: ${a.renderingStyle||"Clean tonal range with rich surface textures"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function He(o){if(!o)return"";const a=o.referensiOutfitSubjek||{};return["REFERENSI OUTFIT SUBJEK:","[Catatan: Referensi busana saja. Bebas identitas personal / biometrik, dan TIDAK dimasukkan ke Prompt Background.]","",`- Jenis Pakaian: ${a.clothingType||"Smart casual blazer & collared shirt"}`,`- Gaya Busana: ${a.garmentStyle||"Modern professional / elegant"}`,`- Warna Utama: ${a.primaryColor||"Navy blue / dark charcoal"}`,`- Warna Sekunder: ${a.secondaryColor||"Crisp white / soft ecru"}`,`- Material: ${a.material||"Fine wool blend & breathable cotton weave"}`,`- Tekstur: ${a.texture||"Matte fine-weave texture"}`,`- Pola: ${a.pattern||"Solid with subtle micro-texture"}`,`- Potongan (Cut): ${a.cut||"Structured modern tailored fit"}`,`- Layering: ${a.layering||"Two-layer styling (outer over collared inner)"}`,`- Aksesori: ${a.accessories||"Minimalist metallic watch, clean pocket accent"}`,`- Alas Kaki: ${a.footwear||"Polished leather dress shoes (jika terlihat)"}`,`- Formalitas: ${a.formality||"Executive semi-formal"}`,`- Karakter Styling: ${a.stylingCharacter||"Understated classic sophistication"}`,`- Harmonisasi dengan Latar: ${a.relationshipToEnvironment||"Warna gelap kontras elegan terhadap hangatnya kayu latar"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function se(o){if(!o)return"";const a=o.elemenBackground||{},e=o.spaceAndComposition||{},r=o.colorAndMaterial||{},t=o.backgroundLighting||{};return["ELEMEN BACKGROUND:",`- Arsitektur / Struktur: ${a.arsitektur||e.architecture||"-"}`,`- Furniture: ${a.furniture||e.propsAndAccessories||"-"}`,`- Dekorasi: ${a.dekorasi||e.decoration||"-"}`,`- Material: ${a.material||(Array.isArray(r.materialsAndTextures)?r.materialsAndTextures.map(i=>i.material).join(", "):"-")}`,`- Warna: ${a.warna||r.palette||"-"}`,`- Lighting: ${a.lighting||t.type||"-"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function Ke(o){if(!o)return"";const a=o.komposisiSpatial||o.structureAndComposition||{},e=o.visualLayers||{};return["KOMPOSISI & SPATIAL RELATIONSHIP:",`- Penempatan Subjek: ${a.subjectPlacement||"Center frame, eye-level"}`,`- Simetri / Asimetri: ${a.symmetry||"Harmonious dynamic asymmetry"}`,`- Keseimbangan Horisontal: ${a.horizontalBalance||a.visualBalance||"Seimbang proporsional kiri-kanan"}`,`- Keseimbangan Vertikal: ${a.verticalBalance||"Terpancang mantap di lantai dengan headroom cukup"}`,`- Negative Space: ${a.negativeSpace||"Lapang dan bersih di sekitar subjek"}`,`- Kedalaman (Depth): ${a.depth||a.spaceDepth||"3 lapis hierarki kedalaman nyata"}`,`- Perspektif: ${a.perspective||e.perspective||"Linear perspective mengarah ke pusat"}`,`- Foreground: ${a.foreground||e.foreground||"Lantai dan sudut meja terdekat"}`,`- Midground: ${a.midground||e.middleGround||"Zona subjek dan furnitur penunjang"}`,`- Background: ${a.background||e.background||"Dinding arsitektural dan rak buku utama"}`,`- Framing: ${a.framing||"Dibingkai alami oleh pilar dinding dan lampu samping"}`,`- Hierarki Spasial: ${a.spatialHierarchy||"Fokus utama pada area tengah dengan latar mendukung"}`,`- Posisi Relatif Objek: ${a.relativePositioning||"Lampu di kiri, rak utama di tengah-kanan"}`,a.summary?`
Ringkasan:
${a.summary}`:""].filter(Boolean).join(`
`)}function $a(o){if(!o)return"";const a=o.backgroundProfile||"",e=o.spaceAndComposition||{},r=o.colorAndMaterial||{},t=o.backgroundLighting||{},i=o.photoMood||{},n=o.structureAndComposition||{};return["=== BACKGROUND PROFILE (PROFIL LATAR BELAKANG) ===","","RINGKASAN PROFIL LATAR:",a,"","1. RUANG & ARSITEKTUR:",`- Kategori: ${e.category||"-"}`,`- Setting: ${e.setting||"-"}`,`- Arsitektur: ${e.architecture||"-"}`,`- Dekorasi: ${e.decoration||"-"}`,`- Properti & Aksesori: ${e.propsAndAccessories||"-"}`,"","2. WARNA & MATERIAL:",`- Palet Warna: ${r.palette||"-"}`,`- Warna Dominan: ${r.dominantColor||"-"}`,`- Warna Aksen: ${r.accentColor||"-"}`,`- Karakter Permukaan: ${r.surfaceCharacter||"-"}`,Array.isArray(r.materialsAndTextures)&&r.materialsAndTextures.length>0?`- Material: ${r.materialsAndTextures.map(s=>`${s.material} (${s.texture})`).join("; ")}`:"","","3. PENCAHAYAAN LINGKUNGAN:",`- Jenis: ${t.type||"-"}`,`- Arah Cahaya: ${t.direction||"-"}`,`- Kualitas & Intensitas: ${t.quality||"-"}, ${t.intensity||"-"}`,`- Temperatur Warna: ${t.colorTemperature||"-"}`,`- Bayangan & Highlight: ${t.shadows||"-"} | ${t.highlights||"-"}`,`- Kontras & Distribusi: ${t.contrast||"-"} | ${t.distribution||"-"}`,"","4. SUASANA & MOOD:",`- Mood / Suasana: ${i.mood||"-"}`,`- Gaya Visual: ${i.visualStyle||"-"}`,`- Karakter Latar: ${i.backgroundCharacter||"-"}`,`- Kesan Ruang: ${i.roomImpression||"-"}`,`- Tingkat Formalitas: ${i.formalityLevel||"-"}`,"","5. STRUKTUR & KOMPOSISI LATAR:",`- Keseimbangan: ${n.visualBalance||"-"} (${n.symmetry||"-"})`,`- Pola & Garis: ${n.repetitionPatterns||"-"} | Leading lines: ${n.leadingLines||"-"}`,`- Titik Fokus: ${n.focalPoint||"-"}`,`- Negative Space & Kedalaman: ${n.negativeSpace||"-"} | ${n.spaceDepth||"-"}`].filter(s=>s!=="").join(`
`)}function Ga(o){if(!o)return"";const a=o.subjectPlacement||o.hubunganSubjekLatar||{};return["=== SUBJECT–BACKGROUND PLACEMENT PROFILE (ACUAN PENEMPATAN SUBJEK) ===","","RINGKASAN PENEMPATAN SPASIAL:",a.spatialSummary||o.placementProfile||"","","PARAMETER ACUAN KOMPOSISI SUBJEK:",`- Posisi Horizontal: ${a.horizontalPos||a.subjectPlacementInFrame||"-"}`,`- Posisi Vertikal: ${a.verticalPos||"-"}`,`- Orientasi Subjek: ${a.orientation||"-"}`,`- Skala Subjek terhadap Frame: ${a.scale||a.scaleToSpace||"-"}`,`- Proporsi Subjek di Frame: ${a.frameProportion||"-"}`,`- Jarak Subjek ke Latar: ${a.distanceFromBg||"-"}`,`- Kedalaman Posisi Subjek: ${a.depthPosition||a.depthPlane||"-"}`,`- Area Latar di Belakang Subjek: ${a.bgAreaBehindSubject||"-"}`,`- Negative Space di Sekitar Subjek: ${a.negativeSpaceAround||a.negativeSpace||"-"}`,`- Relasi dengan Properti: ${a.propsRelation||"-"}`,`- Anchor Point Latar: ${a.anchorPoint||"-"}`,`- Keseimbangan Komposisi: ${a.compositionBalance||a.visualBalance||"-"}`,`- Alignment Garis Arsitektur: ${a.architecturalAlignment||"-"}`,`- Posisi terhadap Lantai: ${a.floorPlacement||"-"}`,`- Framing terhadap Subjek: ${a.framing||a.framingRelationship||"-"}`,`- Ruang Kosong (Headroom & Samping): ${a.emptySpace||"-"}`,`- Hubungan Ukuran dengan Furnitur: ${a.sizeRelationToProps||"-"}`,`- Posisi terhadap Elemen Utama Latar: ${a.relativeToMainBgElement||"-"}`].join(`
`)}function Ja(o){if(!o)return"";const a=$a(o),e=Ga(o),r=Ue(o),t=Be(o),i=He(o),n=se(o),s=Ke(o),l=Array.isArray(o.identifiedElements)&&o.identifiedElements.length>0?[`
=== DAFTAR ELEMEN LATAR TERIDENTIFIKASI ===`,...o.identifiedElements.map((g,u)=>`${u+1}. ${g.name} [${g.type||"Elemen"}] - Posisi: ${g.relativePosition||"-"}, Ukuran: ${g.relativeSize||"-"}, Fungsi: ${g.visualFunction||"-"}`)].join(`
`):"",d=o.optimalPrompt?`
=== PROMPT OPTIMAL LATAR BELAKANG (AI ENGLISH) ===
${o.optimalPrompt}`:"";return[a,"",e,"",r,"",t,"",i,"",n,"",s,l,d].filter(Boolean).join(`
`)}function ze(o,a=1){var e,r,t,i,n,s,l,d,g,u,p,c,h;if(!o)return"";const k=o.aspectRatio||"16:9",m=((e=o.suasanaMood)==null?void 0:e.mood)||((r=o.photoMood)==null?void 0:r.mood)||"warm and sophisticated",b=(((t=o.spaceAndComposition)==null?void 0:t.category)||"classic luxury study room").toLowerCase().replace(/[^a-z0-9 ]/g,""),T=(((i=o.spaceAndComposition)==null?void 0:i.setting)||"indoor studio library backdrop").toLowerCase(),v=((n=o.elemenBackground)==null?void 0:n.arsitektur)||((s=o.spaceAndComposition)==null?void 0:s.architecture)||"built-in dark brown wooden wall panels with integrated bookshelves",f=((l=o.elemenBackground)==null?void 0:l.dekorasi)||((d=o.spaceAndComposition)==null?void 0:d.decoration)||"curated hardback books, an antique framed map, and small decorative lanterns",A=((g=o.elemenBackground)==null?void 0:g.furniture)||((u=o.spaceAndComposition)==null?void 0:u.propsAndAccessories)||"a tall vintage floor lamp with a carved bronze metallic stand on the left",I=((p=o.elemenBackground)==null?void 0:p.lighting)||((c=o.backgroundLighting)==null?void 0:c.type)||"soft warm studio ambient lighting illuminating the scene evenly with gentle shadows",E=((h=o.hubunganSubjekLatar)==null?void 0:h.spatialSummary)||"The environment is composed to naturally frame a centrally positioned subject, with the integrated bookshelf forming the primary midground structure behind the subject and the vintage floor lamp placed on the left as a secondary framing element.",R=(a||0)%3;let C="";return R===0?C=`A detailed indoor studio backdrop featuring a ${m} ${b}. ${v}. On the shelves are ${f}. On the left side, ${A}. ${E} ${I}, creating a cozy, sophisticated, and authentic atmosphere. Eye-level perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${k} --style raw --v 6.1 --no human subject, person, people, watermark, text`:R===1?C=`Cinematic architectural interior photography of a ${m} ${b}, set in a ${T}. Highlights include ${v}, adorned with ${f}, counterbalanced by ${A}. Spatially arranged where ${E.toLowerCase()} Bathed in ${I.toLowerCase()}, rich micro-textures on natural wood and metal surfaces, crisp optical perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${k} --style raw --v 6.1 --no human subject, person, people, watermark, text`:C=`Fine-art atmospheric studio background portraying a distinguished ${b}. Key structural elements feature ${v}, refined with ${f}, and accented by ${A}. Perfectly structured composition: ${E} Illuminated by ${I.toLowerCase()} with gentle gradual shadow falloff, professional balanced composition, eye-level angle, photorealistic architectural rendering, Background only, no people, no face, no human identity, no text, no watermark. --ar ${k} --style raw --v 6.1 --no human subject, person, people, watermark, text`,C}function Fe(o,a=null,e=null,r="auto"){var t;let i=o,n=a,s=e,l=r;o&&typeof o=="object"&&("imageFile"in o||"visualTelemetry"in o||"targetAspectRatio"in o||"aspectRatio"in o)&&(i=o.imageFile||o,n=o.imageBase64||n,s=o.visualTelemetry||s,l=o.targetAspectRatio||o.aspectRatio||l),s=s||{};const d=((i==null?void 0:i.name)||"").toLowerCase(),g=(i==null?void 0:i.width)||800,u=(i==null?void 0:i.height)||800,p=Ba(g,u),c=l&&l!=="auto"&&l!=="Otomatis"?l:p,h=s.dominantHue||"neutral",k=s.dominantColorIndonesian||"krem netral dan abu-abu hangat",m=s.dominantColorEnglish||"warm neutral cream and light gray",b=s.secondaryColorIndonesian||"aksen kayu cokelat hangat",T=(s.avgLum||.5)<.35,v=s.contrastLevel==="tinggi",f=d.includes("outdoor")||d.includes("nature")||d.includes("pantai")||d.includes("taman")||d.includes("jalan")||h==="green";let A="Studio Interior Modern & Ruang Kreatif",I="Interior studio kontemporer dengan penataan arsitektur bersih dan teratur",E="Dinding bertekstur matte halus dengan panel vertikal minimalis, lantai permukaan padat bertingkat kedalaman terukur",R="Rak terbuka beraksen rapi, tanaman hias pot minimalis, dan ornamen dekoratif geometris terkoordinasi",C="Meja kerja kayu matte, kursi ergonomis berlapis bahan tenun, dan lampu aksen terarah",N=[{material:"Kayu Terpilih (Wood Timber)",texture:"Serat kayu natural bertekstur matte lembut"},{material:"Logam Anodized / Matte Metal",texture:"Finishing satin non-glare pada rangka furnitur"},{material:"Kain Tenun Bertekstur",texture:"Anyaman kain halus dengan daya serap cahaya tinggi"}],P="Tenang, teratur, profesional, dan berestetika modern",S="Modern Minimalist Architectural Interior Photography",M="Pencahayaan diffused terarah dipadukan dengan ambient fill lembut",F="3800K - 4500K (Neutral Daylight)";f?(A="Setting Lingkungan Luar Ruang (Outdoor Natural)",I="Area terbuka alami dengan vegetasi hijau dan latar belakang lanskap seimbang",E="Struktur jalur alami, pembatas batu alam/kayu, dan kanopi langit terbuka",R="Pepohonan rindang, dedaunan bertekstur alami, dan elemen lanskap organik",C="Batu alam bertekstur, bangku kayu outdoor, dan pembatas jalur setapak",N=[{material:"Batu Alam & Kayu Outdoor",texture:"Permukaan berpori dan serat kasar organik"},{material:"Dedaunan & Vegetasi Alami",texture:"Lapisan hijau organik dengan difusi cahaya matahari"}],P="Segar, alami, organik, dan menenangkan",S="Natural Environmental Documentary Landscape",M="Cahaya matahari alami difusi awan dengan arah lateral terukur",F="5200K - 5600K (Natural Outdoor Daylight)"):T&&(A="Interior Moody Sinematik & Industrial",I="Ruang berkonsep industrial chic dengan pencahayaan dramatis berkarakter mendalam",E="Dinding beton ekspos atau bata gelap, lantai semen poles matte, plafon tinggi beraksen balok",R="Lampu gantung Edison amber, rak besi industrial, dan karya seni kontemporer bernuansa monokrom",C="Meja kayu rustik tebal, kursi kulit tua (aged leather), dan lampu lantai berkarakter vintage",N=[{material:"Beton Ekspos & Besi Tempa",texture:"Tekstur berbutir kasar dengan kilau satin minimal"},{material:"Kulit Alami (Aged Leather)",texture:"Permukaan kulit berpatina dengan mikrokontras halus"}],P="Misterius, hangat, berkelas, dan sinematik mendalam",S="Cinematic Moody Architectural Photography",M="Key light terarah dengan fill lembut dan bayangan kontras bergradasi dramatis",F="2800K - 3200K (Warm Amber Tungsten)");const L={atmosphere:`Suasana ${P.toLowerCase()}, mengalirkan kesan ruangan yang lapang, tenang, dan tertata estetik`,mood:P,emotionalTone:T?"Intim, dalam, dan sinematik berkarakter":"Menenteramkan, berwibawa, dan profesional",visualTemperature:F,formality:"Semi-formal elegan dengan standar fotografi komersial profesional",overallAmbience:`Ambience ${A.toLowerCase()} dengan pencahayaan seimbang dan atmosfer ruang kohesif`,sophistication:"Tingkat elegansi tinggi dengan estetika arsitektur terkoordinasi rapi",characterType:T?"Luxurious, Moody & Industrial":f?"Natural & Organic":"Modern, Academic & Minimalist",summary:`Atmosfer ruangan menampilkan suasana ${P.toLowerCase()} dengan karakter visual ${S}. Pencahayaan bertemperatur ${F} memberikan kesan ruang yang nyaman, teratur, dan profesional tanpa distraksi visual.`},H={photographyStyle:S,genre:"Architectural Environmental Interior Photography",cameraPerspective:"Eye-level linear perspective dengan garis horizon lurus teratur",cameraHeight:"Tinggi pandangan mata manusia (eye-level, ±150 cm dari permukaan lantai)",focalLengthImpression:"50mm standard focal length (perspektif optik alami bebas distorsi lensa)",framing:`Medium environmental framing dengan proporsi rasio kanvas ${c}`,depthOfField:"Medium depth of field: latar belakang terbaca detail dengan hierarki visual teratur",lightingStyle:M,lightingSoftness:"Diffused wrap-around soft lighting dengan transisi highlight-ke-bayangan gradual",shadowCharacter:"Bayangan lembut bergradasi alami di bawah perabotan dan sepanjang garis lantai",realism:"Autentik, fotorealistik dengan reproduksi optik nyata tanpa artefak sintetis",renderingStyle:"Rentang tonal kaya dengan penonjolan tekstur mikro pada material permukaan",summary:`Fotografi arsitektural menggunakan perspektif eye-level 50mm yang natural. Tata cahaya ${M.toLowerCase()} menghasilkan bayangan lembut bertingkat serta depth of field yang menjaga detail elemen latar tetap tajam dan informatif.`},x={subjectPlacementInFrame:"Tengah frame (Center alignment)",relativePositionToBg:"Berada di depan struktur dinding utama pada jarak terukur",distanceFromBg:"Sekitar 1.2 hingga 1.8 meter di depan bidang latar belakang",scaleToSpace:"Mengisi sekitar 25% - 35% bidang frame keseluruhan (proporsional manusiawi)",depthPlane:"Middle ground bagian depan, terpisah tegas dari bidang latar",depthRelationship:"Pemisahan kedalaman 3 dimensi nyata antara subjek, furnitur, dan dinding",framingRelationship:"Dibingkai secara proporsional oleh elemen samping perabotan dan pencahayaan aksen",negativeSpace:"Negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) serta headroom bersih",visualBalance:"Keseimbangan simetris dinamis dengan penyeimbang visual di kedua sisi frame",perspectiveRelationship:"Garis batas lantai dan kisi dinding mengalir halus menuju area penempatan subjek",orientation:"Frontal atau tiga perempat (3/4) menghadap kamera",lightingRelationship:"Pencahayaan subjek menyatu alami dengan cahaya lingkungan latar",framingElements:"Dinding arsitektural utama dan elemen pencahayaan samping",spatialSummary:`Subjek diposisikan di tengah frame pada area middle ground dengan jarak sekitar 1.5 meter dari dinding latar belakang. Struktur arsitektural ${A} membentang rapi tepat di belakangnya. Elemen pencahayaan dan perabotan samping berada di kedua sisi frame, menciptakan keseimbangan komposisi visual yang harmonis. Terdapat ruang negatif yang memadai di kedua sisi badan serta headroom bersih sekitar 18% di atas kepala.`},Q={clothingType:"Setelan smart-casual tailored blazer dipadukan dengan kemeja kerah bersih dan celana bahan",garmentStyle:"Modern professional smart-casual",primaryColor:T?"Charcoal gray / deep navy":"Navy blue / dark graphite",secondaryColor:"Crisp white / soft light gray",material:"Campuran wol halus dan tenun katun berdaya serap cahaya tinggi",texture:"Tekstur tenun matte halus tanpa kilau sintetis berlebih",pattern:"Warna solid monokromatik dengan aksen jahitan mikro rapi",cut:"Modern structured tailored cut dengan garis bahu tegas dan pas badan",layering:"Dua lapis pakaian (outer blazer berkerah rapi di atas kemeja dalaman)",accessories:"Jam tangan logam minimalis dan aksen saku ramping",footwear:"Sepatu pantofel kulit matte bersih (jika tampak pada frame)",formality:"Semi-formal eksekutif profesional",stylingCharacter:"Elegan, berwibawa, bersih, dan tidak mencolok",relationshipToEnvironment:`Warna gelap pakaian memberikan kontras estetis yang seimbang terhadap palet latar ${k}, memisahkan subjek dengan jelas dari lingkungan.`,privacyNote:"🛡️ Face / Identity Rule: Referensi pakaian saja, bebas biometrik wajah. Tidak dimasukkan ke Prompt Background.",summary:"Referensi pakaian subjek berupa setelan smart casual modern berpalet gelap netral dengan potongan tailored yang rapi. Memiliki kontras tonal yang harmonis terhadap latar belakang tanpa mendominasi frame."},ia={arsitektur:E,furniture:C,dekorasi:R,material:N.map(G=>`${G.material} (${G.texture})`).join("; "),warna:`Warna dominan: ${k}; Warna aksen: ${b}; Palet: netral hangat harmonis`,lighting:`${M}, temperatur ${F}, bayangan lembut bertransisi gradual`,summary:`Latar belakang terdiri dari arsitektur ${E.toLowerCase()} yang kokoh, dilengkapi furnitur ${C.toLowerCase()}, dekorasi ${R.toLowerCase()}, serta material bertekstur ${N.map(G=>G.material).join(", ")}.`},na={subjectPlacement:"Center alignment pada sumbu vertikal, eye-level camera height",symmetry:"Asimetris dinamis yang harmonis (Harmonious Dynamic Asymmetry)",horizontalBalance:"Keseimbangan terdistribusi merata antara bobot visual sisi kiri dan kanan",verticalBalance:"Pondasi bawah bertumpu kokoh pada bidang lantai dengan headroom lapang di atas",negativeSpace:"Ruang kosong bersih 35%-40% dari total bidang frame untuk kelegaan visual",depth:"Struktur kedalaman 3 dimensi berlapis (foreground lantai -> middle ground subjek -> background dinding)",perspective:"One-point linear perspective yang mengalir menuju titik tengah",foreground:"Bidang lantai bawah dan aksen sudut properti terdekat",midground:"Area penempatan subjek dan furnitur penyangga utama",background:"Dinding arsitektural utama dan elemen ornamen dinding vertikal",framing:"Pembingkaian alami dari elemen perabotan lateral dan batas dinding ruangan",spatialHierarchy:"Pusat perhatian tertuju pada area subjek dengan latar belakang berperan sebagai pendukung estetika kohesif",relativePositioning:"Lantai di bawah, dinding di belakang, properti samping menyeimbangkan kedua sisi frame",summary:"Komposisi ruang memanfaatkan hierarki 3 bidang kedalaman dengan leading lines linear. Penempatan subjek di tengah frame diimbangi oleh elemen samping ruangan, menghasilkan pembingkaian alami yang stabil dan proporsional."},j=`A detailed indoor studio backdrop featuring a ${P.toLowerCase().replace(/[^a-z0-9 ]/g,"")} ${A.toLowerCase().replace(/[^a-z0-9 ]/g,"")} atmosphere. Built-in ${m} architectural wall panels with fine surface textures of ${N.map(G=>G.material.toLowerCase().replace(/\([^)]*\)/g,"").trim()).join(" and ")}. Arranged with carefully coordinated interior elements including ${C.toLowerCase().replace(/[^a-z0-9, ]/g,"")} and subtle decorative accents. The environment is composed to naturally frame a centrally positioned subject, with the primary architectural wall forming a stable midground structure and lateral elements providing balanced framing depth. Soft diffused ambient lighting illuminating the scene evenly with gentle progressive shadows, creating a cozy, sophisticated, and professional mood. Eye-level linear perspective, medium depth of field, Background only, no people, no face, no human identity, no text, no watermark. --ar ${c} --style raw --v 6.1 --no human subject, person, people, watermark, text`,B={category:A,setting:I,architecture:E,decoration:R,propsAndAccessories:C,details:`${I}. ${E}. Dilengkapi ${R} serta properti ${C}.`},X={foreground:"Area depan frame dengan lantai dan aksen sudut properti terdekat",middleGround:"Zona interaksi utama tempat kedudukan penempatan subjek dan furnitur penyangga",background:"Dinding arsitektural utama dengan sekat pembagi, elemen gantung, dan dekorasi vertikal",perspective:"Linear perspective eye-level dengan garis batas lantai-dinding mengalir rapi menuju titik tengah",depthOfField:"Separasi kedalaman sedang (medium depth of field) dengan latar terbaca jelas namun tetap memberikan efek hierarki visual",relativePositions:[{element:"Struktur Dinding Utama",position:"Background tengah dan atas"},{element:"Furnitur Penyangga Utama",position:"Middle ground tengah"},{element:"Lampu Aksen / Properti Samping",position:"Middle ground kiri dan kanan"},{element:"Lantai / Bidang Bawah",position:"Foreground bawah"}]},y={palette:`${k}, dipadukan dengan ${b}`,dominantColor:k,accentColor:b,materialsAndTextures:N,surfaceCharacter:"Dominan permukaan matte non-reflektif bertekstur mikro alami dengan pantulan cahaya terkontrol"},O={type:M,direction:(t=s.lightingStyleIndonesian)!=null&&t.includes("kiri")?"Dominan dari arah kiri atas":"Merata terarah dari sudut 45 derajat",quality:"Soft diffused dengan transisi highlight-ke-bayangan halus",intensity:T?"Intensitas sedang-rendah bernuansa intim":"Intensitas seimbang tidak overexposed",colorTemperature:F,shadows:"Bayangan lembut di bawah furnitur dan sepanjang tepi dinding dengan detail gelap yang tetap terjaga",highlights:"Highlight satin halus pada tepi furnitur dan aksen dekoratif",darkAreas:"Sudut tepi ruangan dan bidang batas luar frame",contrast:v?"Kontras terukur dengan pemisahan bidang yang tegas":"Kontras moderat lembut bergradasi alami",distribution:"Terdistribusi harmonis pada seluruh latar belakang, menciptakan ilusi kedalaman tiga dimensi"},D={mood:P,visualStyle:S,backgroundCharacter:"Arsitektural, kohesif, proporsional, dan estetik",roomImpression:"Memberikan kesan kedalaman ruang yang lapang dan teratur",formalityLevel:"Semi-formal elegan dengan standar fotografi visual profesional",photoCharacter:`Fotografi arsitektural berresolusi tajam dengan rasio framing ${c}`},$=[{name:"Dinding Arsitektural Utama",type:"Struktur Ruang",relativePosition:"Background tengah dan atas",relativeSize:"Besar (mengisi sekitar 45% frame)",visualFunction:"Kanvas penahan pandangan dan pondasi atmosfer ruang",compositionRelation:"Menjadi bidang vertikal stabil yang mengikat seluruh elemen"},{name:"Elemen Furnitur / Properti Utama",type:"Furnitur",relativePosition:"Middle ground tengah",relativeSize:"Sedang (mengisi sekitar 20% frame)",visualFunction:"Anchor fisik dan penentu fungsi ruangan",compositionRelation:"Titik tumpu horisontal penyangga komposisi"},{name:"Aksen Pencahayaan / Lampu Ruangan",type:"Pencahayaan / Aksesori",relativePosition:"Middle ground samping",relativeSize:"Sedang-vertikal",visualFunction:"Penyedia aksen cahaya dan pemecah kekosongan bidang samping",compositionRelation:"Counterbalance penyeimbang simetri visual"},{name:"Dekorasi & Ornamen Lingkungan",type:"Dekorasi",relativePosition:"Background samping / ambalan",relativeSize:"Kecil hingga sedang",visualFunction:"Pemberi sentuhan personalitas estetika ruangan",compositionRelation:"Pengisi ritme detail visual tanpa mendominasi frame"}],_={symmetry:"Asimetris seimbang (Harmonious Dynamic Asymmetry)",visualBalance:"Keseimbangan terdistribusi proporsional antara sisi kiri dan kanan frame",repetitionPatterns:"Pola garis vertikal kisi arsitektur dan bidang horizontal furnitur berulang teratur",leadingLines:"Garis batas lantai dan sudut meja mengarahkan pandangan ke pusat frame",focalPoint:"Area tengah bidang latar pada ketinggian eye-level",elementDistribution:"Tersebar merata dengan rasio kepadatan seimbang",negativeSpace:"Tersedia ruang kosong bersih yang cukup di sekeliling area penempatan subjek",spaceDepth:"Hierarki kedalaman 3 dimensi nyata (foreground, middle ground, background)",framing:"Elemen samping furnitur dan pencahayaan membentuk pembingkaian alami (natural frame)",layering:"Multi-layer visual depth layering yang solid"},V={horizontalPos:"Tengah frame (Center alignment)",verticalPos:"Tengah frame (Eye-level center)",orientation:"Frontal atau tiga perempat (3/4) menghadap kamera",scale:"Medium shot (pinggang ke atas)",frameProportion:"Mengisi sekitar 25% - 35% bidang frame keseluruhan",distanceFromBg:"Berjarak sekitar 1.2 hingga 1.8 meter di depan dinding latar utama",depthPosition:"Middle ground bagian depan, terpisah tegas dari lapisan latar belakang",bgAreaBehindSubject:"Bidang tengah dinding arsitektural dan garis sekat vertikal tepat di belakang tubuh/kepala",negativeSpaceAround:"Tersedia negative space lapang di sisi kiri (15-20%) dan sisi kanan (15-20%) badan",propsRelation:"Diposisikan sejajar atau sedikit di depan furnitur utama, dengan lampu aksen berada di samping",anchorPoint:"Titik temu antara garis batas bidang tengah latar dan garis horizontal lantai",compositionBalance:"Menciptakan komposisi segitiga visual yang kokoh dan seimbang terhadap elemen latar samping",architecturalAlignment:"Punggung/sumbu tubuh sejajar lurus dengan garis vertikal arsitektur latar",floorPlacement:"Berdiri atau bertumpu mantap pada bidang lantai foreground/middle ground",framing:"Dibingkai secara proporsional oleh elemen dekorasi di kedua sisi bidang luar",emptySpace:"Headroom bersih lapang sekitar 15% - 20% dari batas atas frame hingga ujung kepala",sizeRelationToProps:"Skala subjek natural dan berskala proporsional manusiawi terhadap furnitur di sekelilingnya",relativeToMainBgElement:"Subjek berposisi tepat di tengah tanpa menutupi seluruh detail ornamen kunci latar belakang",spatialSummary:x.spatialSummary},z=`${B.category} dengan ${B.setting}. Arsitektur latar menampilkan ${B.architecture}, diperkaya dekorasi berupa ${B.decoration}, serta perabotan ${B.propsAndAccessories}. Palet warna didominasi oleh ${y.palette} dengan karakter material ${N.map(G=>G.material).join(", ")}. Pencahayaan berkarakter ${O.type} dengan temperatur ${O.colorTemperature} dan distribusi cahaya terarah yang lembut. Suasana lingkungan terasa ${D.mood} dalam gaya visual ${D.visualStyle}. Struktur komposisi menghadirkan kedalaman ruang berlapis (layering) dengan leading lines perspektif yang rapi.`,Y=V.spatialSummary,w={mode:"BACKGROUND_ANALYSIS",suasanaMood:L,gayaFotografi:H,hubunganSubjekLatar:x,referensiOutfitSubjek:Q,elemenBackground:ia,komposisiSpatial:na,optimalPrompt:j,backgroundProfile:z,placementProfile:Y,spaceAndComposition:B,visualLayers:X,colorAndMaterial:y,backgroundLighting:O,photoMood:D,identifiedElements:$,structureAndComposition:_,subjectPlacement:V,suggestedShorthands:["/background","/interior","/architecture","/ambientlight","/woodtexture","/softlight","/ruleofthirds"],negativePrompt:"human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, cluttered mess, watermark, text",aspectRatio:c};return w.backgroundProfileText=$a(w),w.placementProfileText=Ga(w),w.fullReportText=Ja(w),w.aspects=[{id:"ruang_komposisi",title:"1. Ruang & Komposisi",content:`${B.category} — ${B.setting}`},{id:"lapisan_visual",title:"2. Lapisan Visual & Kedalaman Ruang",content:`FG: ${X.foreground} | MG: ${X.middleGround} | BG: ${X.background}`},{id:"warna_material",title:"3. Warna & Material Latar",content:`${y.dominantColor}, ${y.surfaceCharacter}`},{id:"pencahayaan_latar",title:"4. Pencahayaan Latar & Properti",content:`${O.type} (${O.direction})`},{id:"nuansa_foto",title:"5. Nuansa Foto / Latar",content:`${D.mood} • ${D.visualStyle}`},{id:"elemen_teridentifikasi",title:"6. Elemen Latar Teridentifikasi",content:$.map(G=>G.name).join(", ")},{id:"struktur_komposisi",title:"7. Struktur & Komposisi Latar",content:`${_.visualBalance} • ${_.repetitionPatterns}`},{id:"hubungan_subjek_latar",title:"8. Hubungan Subjek & Latar",content:V.spatialSummary}],w}const ua={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class We{constructor(a=[]){this.catalog=a,this.localEngine=new be(a),this.status=ua.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){J.getApiKey()||(this.status=ua.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!J.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const r=e.indexOf("{"),t=e.lastIndexOf("}");if(r!==-1&&t>r){const s=e.substring(r,t+1);try{return JSON.parse(s)}catch{}}const i=e.indexOf("["),n=e.lastIndexOf("]");if(i!==-1&&n>i){const s=e.substring(i,n+1);try{return JSON.parse(s)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var r;const t=(a||J.getApiKey()).trim(),i=e||J.getModel()||"gemini-2.0-flash";if(!t)return this.status=ua.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:ua.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const n=[i.trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((d,g,u)=>d&&u.indexOf(d)===g&&!d.includes("1.5-pro")&&!d.includes("2.5-pro")&&(d==="gemini-3.5-flash-lite"||!d.includes("3.5")&&!d.includes("3.8")));let s="",l=null;for(const d of n)try{const g=`https://generativelanguage.googleapis.com/v1beta/models/${d}?key=${encodeURIComponent(t)}`,u=await fetch(g,{method:"GET",headers:{"Content-Type":"application/json"}});if(u.ok){l=d;break}else{if(s=((r=(await u.json().catch(()=>({}))).error)==null?void 0:r.message)||`HTTP ${u.status}: ${u.statusText}`,u.status===404)continue;if(u.status===400||u.status===403)break}}catch(g){s=g.message||"Koneksi jaringan gagal"}if(l)return this.status=ua.CONNECTED,this.lastError=null,l!==i&&J.setModel(l),{success:!0,status:ua.CONNECTED,message:`Berhasil terhubung ke model ${l}!`};try{const d=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(t)}`,g=await fetch(d);if(g.ok){const u=((await g.json().catch(()=>({}))).models||[]).filter(c=>{var h;return(h=c.supportedGenerationMethods)==null?void 0:h.includes("generateContent")}).map(c=>c.name.replace(/^models\//,"")).filter(c=>!c.includes("1.5-pro")&&!c.includes("2.5-pro")&&!c.includes("3.5")&&!c.includes("3.8")),p=u.find(c=>c.includes("2.0-flash"))||u.find(c=>c.includes("1.5-flash"))||u[0];if(p)return J.setModel(p),this.status=ua.CONNECTED,this.lastError=null,{success:!0,status:ua.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${p})!`}}}catch{}return this.status=ua.FAILED,this.lastError=s||"Koneksi gagal",{success:!1,status:ua.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const r=J.getApiKey().trim(),t=J.getModel()||"gemini-2.0-flash";if(!r){const s=this.localEngine.analyze(a,e),l=ca(s.optimalPrompt);return{...s,optimalPrompt:l,englishBasePrompt:ca(s.cleanText),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."}}try{const s=await this.callGeminiAPI(a,r,t);if(s){const l=this.mergeAiWithCatalog(s,a,e);this.status=ua.CONNECTED,this.lastError=null;const d=J.getModel()||t;return{...l,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${d}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(s){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",s),this.lastError=s.message}const i=this.localEngine.analyze(a,e),n=ca(i.optimalPrompt);return{...i,optimalPrompt:n,englishBasePrompt:ca(i.cleanText),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,r){const t=[(r||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((n,s,l)=>n&&l.indexOf(n)===s&&!n.includes("1.5-pro")&&!n.includes("2.5-pro")&&(n==="gemini-3.5-flash-lite"||!n.includes("3.5")&&!n.includes("3.8")));let i=null;for(const n of t)try{const s=await this.executeGenerateContent(a,e,n);if(s)return n!==r&&J.setModel(n),s}catch(s){i=s,console.warn(`Model ${n} tidak dapat digunakan (${s.message}), mencoba model alternatif...`);continue}throw i||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,r){var t,i,n,s,l;const d=`https://generativelanguage.googleapis.com/v1beta/models/${r}:generateContent?key=${encodeURIComponent(e)}`,g={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
Tugas Anda: Menganalisis SELURUH isi INPUT PROMPT pengguna secara semantik dan menemukan/merekomendasikan notasi visual shorthand AI yang paling tepat, profesional, dan relevan.

PRINSIP UTAMA: PENCARIAN SHORTHAND HARUS TERBUKA DAN TIDAK TERBATAS.
- JANGAN MEMBATASI pencarian hanya pada kategori, subkategori, daftar istilah, atau topik tertentu.
- SETIAP INPUT PENGGUNA HARUS DAPAT DIPROSES DAN DICARI, apa pun topik, objek, gaya seni, konsep visual, komposisi, rasio/perluasan kanvas (outpainting / uncrop / expand canvas), aktivitas, profesi, suasana, atau istilah baru yang digunakan.
- Analisis seluruh makna dan konteks prompt, bukan hanya pencocokan kata kaku.
- Tetap temukan shorthand untuk istilah atau konsep baru yang belum terdapat dalam daftar shorthand lokal.
- Tidak memberikan batasan pencarian berdasarkan kategori aset.
- Tidak memblokir pencarian hanya karena istilah tidak dikenal oleh katalog shorthand lokal.
- Tampilkan HANYA shorthand yang benar-benar relevan dengan fungsi atau konsep dalam prompt.

PANDUAN SHORTHAND & NOTASI VISUAL:
1. Awali setiap shorthand dengan garis miring "/" (contoh: /outpaint, /expandcanvas, /facelock, /hairlock, /curvy, /enhance, /sharpen, /cyberpunk, /surgeon, /macrolens, /bokeh, dsb.).
2. Jika konsep ada di katalog umum aplikasi (misal: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /highresolution, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade, /bodyvoluptuous, /curvy, /fullfigured, /plussize, /voluptuous, /handperfect, /hands, /handanatomy, /fingerperfect, /handdetail, /handnatural, /outpaint), prioritaskan kode tersebut.
3. JIKA user memasukkan kata kunci / konsep baru di luar katalog dasar (contoh: "memperluas foto" -> /outpaint, "fotografer tokyo cyberpunk" -> /cyberpunk, "dokter bedah" -> /surgeon, "lensa makro" -> /macrolens, dsb.), Anda WAJIB membuat dan merekomendasikan notasi shorthand yang paling profesional, presisi, dan sesuai standar industri visual AI.
4. Struktur Rekomendasi:
   - primaryShorthands (Prioritas 'WAJIB', isPrimary: true, checked: true): Rekomendasi utama (1 atau 2 shorthand paling vital yang langsung terpasang di Prompt Optimal). Beri label source: "ONLINE".
   - relatedShorthands (Prioritas 'DISARANKAN', isPrimary: false, checked: false): Alternatif shorthand relevan lainnya (2 sampai 5 pilihan alternatif). Beri label source: "ONLINE".

Jawab HANYA dalam format JSON valid tanpa markdown formatting:
{
  "intent": {
    "primaryAction": "NAMA_AKSI_SEMANTIK",
    "primaryTarget": "Target visual",
    "summary": "Ringkasan maksud instruksi visual user dalam bahasa Indonesia",
    "priority": "HIGH" | "MEDIUM" | "LOW",
    "category": "BODY_POSE" | "FACE_IDENTITY" | "HAIR" | "HEADWEAR" | "OUTFIT" | "BACKGROUND" | "LIGHTING" | "IMAGE_QUALITY" | "COLOR_TONE" | "CANVAS_RATIO" | "TRANSPARENCY" | "OBJECT_EDITING" | "STYLE_EFFECT" | "CAMERA_PHOTO"
  },
  "editAreas": [
    {
      "entity": "KATEGORI_ENTITY",
      "label": "Nama Area",
      "action": "ACTION_CODE",
      "description": "Deskripsi perubahan",
      "shorthand": "/shorthandutama"
    }
  ],
  "lockedAreas": [],
  "primaryShorthands": [
    {
      "code": "/shorthandutama",
      "name": "Nama Shorthand Utama",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi shorthand utama",
      "priority": "WAJIB",
      "reason": "Alasan rekomendasi utama",
      "isPrimary": true,
      "checked": true
    }
  ],
  "relatedShorthands": [
    {
      "code": "/alternatif1",
      "name": "Nama Alternatif",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi alternatif",
      "priority": "DISARANKAN",
      "reason": "Alternatif untuk variasi kebutuhan",
      "isPrimary": false,
      "checked": false
    }
  ],
  "installedShorthands": ["/shorthandutama"],
  "optimalPrompt": "Natural, descriptive, AI-readable ENGLISH prompt optimized for generative image AI (Midjourney/SDXL/DALL-E), preserving all user intent, subjects, and visual attributes, followed by installed shorthands. Example: A young woman with long dark hair walking in a vibrant park during golden hour. /portrait /softlight",
  "visualTransformation": "Deskripsi efek visual yang terjadi pada gambar"
}

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},u=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!u.ok){const c=await u.text();throw new Error(`Gemini API error (${u.status}): ${c}`)}const p=(l=(s=(n=(i=(t=(await u.json()).candidates)==null?void 0:t[0])==null?void 0:i.content)==null?void 0:n.parts)==null?void 0:s[0])==null?void 0:l.text;if(!p)throw new Error("Respon Gemini kosong.");return this.extractJson(p)}mergeAiWithCatalog(a,e,r){var t,i,n,s,l;const d=this.localEngine.analyze(e,r);let g=[];const u=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const A of a.primaryShorthands){if(!A||!A.code)continue;const I=A.code.startsWith("/")?A.code:`/${A.code}`;if(u.has(I))continue;u.add(I);const E=this.catalog.find(R=>R.code.toLowerCase()===I.toLowerCase());g.push({item:E||null,code:I,name:A.name||(E==null?void 0:E.name)||I,category:A.category||(E==null?void 0:E.category)||"ONLINE_DISCOVERY",target:A.target||(E==null?void 0:E.target)||"Konsep Visual Prompt",description:A.description||(E==null?void 0:E.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:A.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:E?"CORE":"ONLINE",isOnline:!E,equivalentTo:(E==null?void 0:E.equivalentTo)||A.equivalentTo||[],functionGroup:(E==null?void 0:E.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(d.primaryShorthands&&d.primaryShorthands.length>0)for(const A of d.primaryShorthands)A.category==="LOCK_PRESERVATION"&&!u.has(A.code)&&(u.add(A.code),g.push({...A,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else d.primaryShorthands&&d.primaryShorthands.length>0&&(g=d.primaryShorthands);let p=[];const c=new Set([...g.map(A=>A.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const A of a.relatedShorthands){if(!A||!A.code)continue;const I=A.code.startsWith("/")?A.code:`/${A.code}`;if(c.has(I))continue;c.add(I);const E=this.catalog.find(R=>R.code.toLowerCase()===I.toLowerCase());p.push({item:E||null,code:I,name:A.name||(E==null?void 0:E.name)||I,category:A.category||(E==null?void 0:E.category)||"ONLINE_DISCOVERY",target:A.target||(E==null?void 0:E.target)||"Variasi Konsep Visual",description:A.description||(E==null?void 0:E.description)||"Alternatif shorthand hasil analisis semantik online.",priority:A.priority||"DISARANKAN",reason:A.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:E?"CORE":"ONLINE",isOnline:!E,equivalentTo:(E==null?void 0:E.equivalentTo)||A.equivalentTo||[],functionGroup:(E==null?void 0:E.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(d.relatedShorthands&&d.relatedShorthands.length>0)for(const A of d.relatedShorthands)c.has(A.code)||(c.add(A.code),p.push(A));let h=[];r&&Array.isArray(r)?h=r:g.length>0?h=g.map(A=>A.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?h=a.installedShorthands.map(A=>A.startsWith("/")?A:`/${A}`):d.installedShorthands&&d.installedShorthands.length>0&&(h=d.installedShorthands);const k=d.cleanText||e.trim();let m="",b="";if(a.optimalPrompt&&a.optimalPrompt.trim()){if(m=ca(a.optimalPrompt.trim()),b=m.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,"").trim(),h.length>0)for(const A of h)m.includes(A)||(m+=` ${A}`)}else b=ca(k),b&&!b.endsWith(".")&&!b.endsWith("!")&&!b.endsWith("?")&&(b+="."),m=h.length>0?`${b} ${h.join(" ")}`.trim():b;const T={primaryAction:(t=a.intent)!=null&&t.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:d.intent.primaryAction,primaryTarget:(i=a.intent)!=null&&i.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:d.intent.primaryTarget,summary:((n=a.intent)==null?void 0:n.summary)||a.summary||d.intent.summary,priority:((s=a.intent)==null?void 0:s.priority)||d.intent.priority,category:(l=a.intent)!=null&&l.category&&a.intent.category!=="GENERAL"?a.intent.category:d.intent.category},v=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:d.editAreas,f=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:d.lockedAreas;return{rawPrompt:e,normalizedPrompt:d.normalizedPrompt,cleanText:k,englishBasePrompt:b,intent:T,editAreas:v,lockedAreas:f,unchangedAreas:d.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:d.conflicts,primaryShorthands:g,relatedShorthands:p,recommendations:[...g,...p],exclusions:d.exclusions,installedShorthands:h,visualTransformation:a.visualTransformation||d.visualTransformation,optimalPrompt:m,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var e,r,t,i,n;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const s=J.getApiKey()?J.getApiKey().trim():"",l=J.getModel()||"gemini-2.0-flash";if(!s)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const d=[l,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((u,p,c)=>u&&c.indexOf(u)===p&&(u==="gemini-3.5-flash-lite"||!u.includes("3.5")&&!u.includes("3.8"))),g={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
Aturan:
1. Rekomendasikan 4 sampai 8 notasi shorthand yang paling relevan dengan kata kunci user.
2. Setiap kode shorthand WAJIB diawali garis miring (misal: /handperfect).
3. Berikan nama yang jelas dan deskripsi fungsi spesifik dalam bahasa Indonesia.
4. Format kembalian HANYA JSON array valid tanpa markdown wrapper:
[
  {
    "code": "/...",
    "name": "...",
    "description": "...",
    "category": "BODY_POSE"
  }
]

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const u of d)try{const p=`https://generativelanguage.googleapis.com/v1beta/models/${u}:generateContent?key=${encodeURIComponent(s)}`,c=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!c.ok)continue;const h=(n=(i=(t=(r=(e=(await c.json()).candidates)==null?void 0:e[0])==null?void 0:r.content)==null?void 0:t.parts)==null?void 0:i[0])==null?void 0:n.text;if(!h)continue;let k=[];try{k=this.extractJson(h)}catch{continue}if(!Array.isArray(k))continue;const m=k.filter(b=>b&&b.code&&typeof b.code=="string").map(b=>({code:b.code.startsWith("/")?b.code:`/${b.code}`,name:b.name||b.code,description:b.description||"Instruksi visual shorthand online",category:b.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:m,onlineAvailable:!0,message:m.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(p){console.warn(`Pencarian online dengan model ${u} gagal:`,p);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var r,t,i,n,s,l;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const d=J.getApiKey()?J.getApiKey().trim():"",g=J.getModel()||"gemini-2.0-flash";if(!d)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const u=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],p=[g,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((T,v,f)=>T&&f.indexOf(T)===v&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8"))),c=`Anda adalah Prompt Shorthand Analyzer V3.3.5 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
Tugas Anda: Memperkaya Prompt Optimal pengguna dengan detail visual berkualitas tinggi tanpa mengubah makna atau maksud utamanya.

PRINSIP UTAMA: "ENRICH, NOT REPLACE" (Prompt Optimal asli adalah SOURCE OF TRUTH).

ATURAN WAJIB & BATASAN KETAT:
1. JANGAN PERNAH mengubah subjek utama, objek utama, aktivitas, konteks, maksud/intent, maupun konsep adegan.
2. JANGAN PERNAH menghapus informasi penting dari Prompt Optimal asli.
3. JANGAN PERNAH menghapus atau mengubah shorthand visual (kata atau kode berawalan '/'). Seluruh shorthand yang ada pada prompt asli WAJIB dipertahankan dan diletakkan di akhir prompt.
4. JANGAN mengubah instruksi identitas, lock, pose, outfit, background, atau constraint penting lainnya.
5. ANDA DIIZINKAN DAN DIANJURKAN MEMPERBAIKI:
   - Kejelasan deskripsi visual dan materialitas objek.
   - Komposisi gambar (framing, focal length, angle kamera jika relevan).
   - Pencahayaan alami atau sinematik (soft illumination, ambient rim light, directional shadow).
   - Atmosfer, kedalaman ruang (depth of field), dan tekstur realistis.
   - Urutan instruksi deskriptif agar optimal dipahami model generasi gambar AI.
6. JANGAN menambahkan detail sembarangan atau fantasi berlebihan hanya agar prompt menjadi panjang.
7. JANGAN mengubah prompt menjadi konsep baru.
8. BAHASA OUTPUT WAJIB BAHASA INGGRIS: Seluruh prompt yang diperkaya wajib ditulis dalam Bahasa Inggris yang natural, deskriptif, dan optimal untuk AI image generator, dengan seluruh shorthand asli dipertahankan di akhir.

Format respons HANYA berupa JSON valid:
{
  "enrichedPrompt": "teks prompt lengkap yang telah diperkaya dalam Bahasa Inggris beserta seluruh shorthand asli di akhir"
}`,h=((r=e==null?void 0:e.intent)==null?void 0:r.summary)||"",k=`Prompt Optimal Asli:
"${a.trim()}"
${h?`Konteks/Maksud Analisis:
"${h}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${u.length>0?u.join(" "):"(tidak ada)"}`,m={contents:[{role:"user",parts:[{text:`${c}

${k}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let b=null;for(const T of p)try{const v=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(d)}`,f=await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!f.ok){const R=await f.text();throw new Error(`HTTP ${f.status}: ${R}`)}const A=(l=(s=(n=(i=(t=(await f.json()).candidates)==null?void 0:t[0])==null?void 0:i.content)==null?void 0:n.parts)==null?void 0:s[0])==null?void 0:l.text;if(!A)throw new Error("Respon Gemini kosong.");const I=this.extractJson(A);let E=I.enrichedPrompt||I.prompt||(typeof I=="string"?I:"");if(!E||typeof E!="string"||!E.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");E=ca(E.trim());for(const R of u)E.includes(R)||(E+=` ${R}`);return{success:!0,enrichedPrompt:E,modelUsed:T}}catch(v){b=v,console.warn(`Enrich prompt dengan model ${T} gagal:`,v.message);continue}throw b||new Error("Gagal memperkaya prompt dengan Gemini.")}async enrichTwoWorldsPrompt({optimalPrompt:a,generatedPrompt:e="",twoWorldsConfig:r=null,analysisResult:t=null}){var i,n,s,l,d;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal 2 Dunia kosong.");const g=J.getApiKey()?J.getApiKey().trim():"",u=J.getModel()||"gemini-2.0-flash";if(!g){const v=ae({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:r,analysisResult:t});return{success:!0,enrichedPrompt:v.enrichedPrompt,conflictsResolved:v.conflictsResolved,modelUsed:"HEURISTIC_RESOLVER"}}const p=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],c=[u,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((v,f,A)=>v&&A.indexOf(v)===f&&(v==="gemini-3.5-flash-lite"||!v.includes("3.5")&&!v.includes("3.8"))),h=Le(),k=Pe({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:r}),m={contents:[{role:"user",parts:[{text:`${h}

${k}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let b=null;for(const v of c)try{const f=`https://generativelanguage.googleapis.com/v1beta/models/${v}:generateContent?key=${encodeURIComponent(g)}`,A=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!A.ok){const C=await A.text();throw new Error(`HTTP ${A.status}: ${C}`)}const I=(d=(l=(s=(n=(i=(await A.json()).candidates)==null?void 0:i[0])==null?void 0:n.content)==null?void 0:s.parts)==null?void 0:l[0])==null?void 0:d.text;if(!I)throw new Error("Respon Gemini kosong.");const E=this.extractJson(I);let R=E.enrichedPrompt||E.prompt||(typeof E=="string"?E:"");if(!R||typeof R!="string"||!R.trim())throw new Error("Hasil pengayaan AI 2 Dunia kosong atau tidak valid.");return R=je({enrichedPrompt:R,optimalPrompt:a,twoWorldsConfig:r,originalShorthands:p}),{success:!0,enrichedPrompt:R,conflictsResolved:E.conflictsResolved||[],modelUsed:v}}catch(f){b=f,console.warn(`Enrich 2 Dunia dengan model ${v} gagal:`,f.message);continue}console.warn("Fallback ke Heuristic Conflict Resolver untuk 2 Dunia:",b==null?void 0:b.message);const T=ae({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:r,analysisResult:t});return{success:!0,enrichedPrompt:T.enrichedPrompt,conflictsResolved:T.conflictsResolved,modelUsed:"HEURISTIC_FALLBACK"}}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&a!=null&&a.height){const t=a.width/a.height;if(t>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(t>1.25)return{ar:"4:3",orientation:"landscape"};if(t>.9&&t<1.1)return{ar:"1:1",orientation:"square"};if(t<.65)return{ar:"9:16",orientation:"portrait-tall"};if(t<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const t=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const i=atob(t.substring(0,4e3));if(i.charCodeAt(0)===137&&i.charCodeAt(1)===80&&i.charCodeAt(2)===78&&i.charCodeAt(3)===71){const n=i.charCodeAt(16)<<24|i.charCodeAt(17)<<16|i.charCodeAt(18)<<8|i.charCodeAt(19),s=i.charCodeAt(20)<<24|i.charCodeAt(21)<<16|i.charCodeAt(22)<<8|i.charCodeAt(23);if(n>0&&s>0){const l=n/s;return l>1.6?{ar:"16:9",orientation:"landscape-wide"}:l>1.2?{ar:"4:3",orientation:"landscape"}:l>.9&&l<1.1?{ar:"1:1",orientation:"square"}:l<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const r=((a==null?void 0:a.name)||"").toLowerCase();return r.includes("portrait")||r.includes("vertical")||r.includes("story")||r.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:r.includes("square")||r.includes("feed")||r.includes("profile")||r.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=(a.mainDescription||a.generatedPrompt||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",r=e.startsWith("/imagine prompt:")?e:`/imagine prompt: ${e}`;let t=(a.visualDetails||"").trim();if(!t){const i=[];(a.subject||a.subjectDescription)&&i.push((a.subject||a.subjectDescription).trim()),(a.pose||a.poseExpression&&a.poseExpression!=="-")&&i.push((a.pose||a.poseExpression).trim()),a.identityPreservation&&a.identityPreservation!=="-"&&i.push(a.identityPreservation.trim()),(a.outfit||a.outfitMaterial&&a.outfitMaterial!=="-")&&i.push((a.outfit||a.outfitMaterial).trim()),(a.environment||a.environmentBackground&&a.environmentBackground!=="-")&&i.push((a.environment||a.environmentBackground).trim()),(a.composition||a.compositionPerspective&&a.compositionPerspective!=="-")&&i.push((a.composition||a.compositionPerspective).trim()),(a.lighting||a.lightingColor&&a.lightingColor!=="-")&&i.push((a.lighting||a.lightingColor).trim()),a.cameraLensDof&&a.cameraLensDof!=="-"&&i.push(a.cameraLensDof.trim()),(a.style||a.photoStyleRealism&&a.photoStyleRealism!=="-")&&i.push((a.style||a.photoStyleRealism).trim()),t=i.join(`

`)}return t?`${r}

${t}`:r}assembleOptimalImagePrompt(a,e=[],r=null){const t=((a==null?void 0:a.mainDescription)||(a==null?void 0:a.generatedPrompt)||"").trim()||"Authentic photography with natural lighting and realistic details.",i=ca(t),n=i.startsWith("/imagine prompt:")?i:`/imagine prompt: ${i}`;let s=((a==null?void 0:a.visualDetails)||"").trim();if(!s){const h=[];(a!=null&&a.subject||a!=null&&a.subjectDescription)&&h.push((a.subject||a.subjectDescription).trim()),(a!=null&&a.pose||a!=null&&a.poseExpression&&a.poseExpression!=="-")&&h.push((a.pose||a.poseExpression).trim()),a!=null&&a.identityPreservation&&a.identityPreservation!=="-"&&h.push(a.identityPreservation.trim()),(a!=null&&a.outfit||a!=null&&a.outfitMaterial&&a.outfitMaterial!=="-")&&h.push((a.outfit||a.outfitMaterial).trim()),(a!=null&&a.environment||a!=null&&a.environmentBackground&&a.environmentBackground!=="-")&&h.push((a.environment||a.environmentBackground).trim()),(a!=null&&a.composition||a!=null&&a.compositionPerspective&&a.compositionPerspective!=="-")&&h.push((a.composition||a.compositionPerspective).trim()),(a!=null&&a.lighting||a!=null&&a.lightingColor&&a.lightingColor!=="-")&&h.push((a.lighting||a.lightingColor).trim()),a!=null&&a.cameraLensDof&&a.cameraLensDof!=="-"&&h.push(a.cameraLensDof.trim()),(a!=null&&a.style||a!=null&&a.photoStyleRealism&&a.photoStyleRealism!=="-")&&h.push((a.style||a.photoStyleRealism).trim()),s=h.join(`

`)}const l=[n];if(s&&l.push(ca(s)),r){const h=Se(r,a);h&&l.push(h)}const d=(a==null?void 0:a.aspectRatio)||"16:9";let g=(e||[]).map(h=>h.startsWith("/")?h:`/${h}`).join(" ");g?g+=` --ar ${d} --style raw --v 6.1`:g=`--ar ${d} --style raw --v 6.1`,l.push(g);let u=((a==null?void 0:a.negativePrompt)||(a==null?void 0:a.contextualNegativePrompt)||"").trim();const p=!!(a!=null&&a.photoStyleRealism&&/3d|render|octane|chibi|doll|figurine|toy/i.test(a.photoStyleRealism)||a!=null&&a.subjectDescription&&/3d|chibi|doll|figurine|toy/i.test(a.subjectDescription)||a!=null&&a.mainDescription&&/3d|chibi|doll|figurine|toy/i.test(a.mainDescription));u||(u=p?"real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text":"cartoon, 3d render, illustration, deformed, blurry, watermark, text");let c=ca(u.replace(/^--no\s+/i,"").trim());return p&&(c=c.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/illustration,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),c.includes("real human photo")||(c=`real human photo, photographic grain, ${c}`.replace(/^,\s*/,""))),l.push(`--no ${c}`),l.join(`

`)}matchImageShorthands(a,e=null){const r=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+((e==null?void 0:e.subject)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.outfit)||"")+" "+((e==null?void 0:e.outfitMaterial)||"")+" "+((e==null?void 0:e.pose)||"")+" "+((e==null?void 0:e.poseExpression)||"")+" "+((e==null?void 0:e.environment)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.composition)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lighting)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.style)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.suggestedShorthands)?e.suggestedShorthands.join(" "):"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),t=[];if(Array.isArray(e==null?void 0:e.suggestedShorthands))for(const s of e.suggestedShorthands){const l=(s||"").trim();if(!l)continue;const d=l.startsWith("/")?l.toLowerCase():`/${l.toLowerCase()}`,g=this.catalog.find(u=>u.code.toLowerCase()===d);g&&t.push({code:g.code,name:g.name,category:g.category,functionGroup:g.functionGroup||`GROUP_${g.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:g.description,priority:"WAJIB",isPrimary:!0,checked:!0,reason:"Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual",source:"IMAGE_VISION_AI"})}for(const s of this.catalog){const l=(s.negativeTriggers||[]).map(p=>p.toLowerCase());if(l.length>0&&l.some(p=>r.includes(p)))continue;const d=(s.semanticTriggers||[]).map(p=>p.toLowerCase());let g=!1,u="";r.includes(s.code.toLowerCase())?(g=!0,u=`Terdeteksi dari direktif visual: ${s.code}`):d.some(p=>r.includes(p))?(g=!0,u=`Teridentifikasi dari atribut visual gambar (${s.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(p=>s.code.toLowerCase().includes(p.toLowerCase())||(s.name||"").toLowerCase().includes(p.toLowerCase())||d.some(c=>p.toLowerCase().includes(c)))&&(g=!0,u=`Direkomendasikan untuk optimasi visual gambar (${s.name})`),g&&t.push({code:s.code,name:s.name,category:s.category,functionGroup:s.functionGroup||`GROUP_${s.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:s.description,priority:s.priority||"WAJIB",isPrimary:!0,checked:!0,reason:u||s.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const i=new Set,n=[];for(const s of t)i.has(s.functionGroup)||(i.add(s.functionGroup),n.push(s));return n}getStandard13VisualBreakdown(a){const e=(a==null?void 0:a.aspectRatio)||"16:9",r=e==="9:16"||e==="3:4";return{Subject:((a==null?void 0:a.subject)||(a==null?void 0:a.subjectDescription)||(a==null?void 0:a.mainDescription)||"Subjek visual utama teridentifikasi").trim(),Pose:((a==null?void 0:a.pose)||(a==null?void 0:a.poseExpression)||"Postur alami terpusat").trim(),Framing:((a==null?void 0:a.framing)||(r?"Vertical portrait framing":"Eye-level balanced framing")).trim(),"Camera / Angle":((a==null?void 0:a.cameraAngle)||(a==null?void 0:a.camera)||(a==null?void 0:a.cameraLensDof)||"Eye-level angle, 50mm prime f/2.8").trim(),Lighting:((a==null?void 0:a.lighting)||(a==null?void 0:a.lightingColor)||"Pencahayaan terukur dengan gradasi bayangan natural").trim(),Environment:((a==null?void 0:a.environment)||(a==null?void 0:a.environmentBackground)||"Setting lingkungan terkoordinasi secara alami").trim(),Background:((a==null?void 0:a.background)||(a==null?void 0:a.environmentBackground)||"Latar belakang dengan separasi kedalaman terukur").trim(),Outfit:((a==null?void 0:a.outfit)||(a==null?void 0:a.outfitMaterial)||"Pakaian rapi dengan tekstur bahan autentik").trim(),Expression:((a==null?void 0:a.expression)||"Ekspresi wajar, fokus tenang, dan proporsi alami").trim(),Composition:((a==null?void 0:a.composition)||(a==null?void 0:a.compositionPerspective)||"Komposisi terpusat seimbang rule-of-thirds").trim(),Style:((a==null?void 0:a.style)||(a==null?void 0:a.photoStyleRealism)||"Fotografi realistis autentik").trim(),"Color / Tone":((a==null?void 0:a.colorTone)||"Palet warna alami dengan kontras seimbang").trim(),"Aspect Ratio":e}}analyzeImageShorthandsBlueprint(a,e){const r=new Set,t=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+Object.values(e||{}).filter(m=>typeof m=="string").join(" ")).toLowerCase(),i=new Map;Array.isArray(e==null?void 0:e.suggestedShorthands)&&e.suggestedShorthands.forEach(m=>{const b=(m||"").trim().toLowerCase(),T=b.startsWith("/")?b:`/${b}`;i.set(T,100)});for(const m of this.catalog){const b=m.code.toLowerCase();let T=i.get(b)||0;t.includes(b)&&(T+=35);const v=(m.semanticTriggers||[]).map(f=>f.toLowerCase());for(const f of v)f&&t.includes(f)&&(T+=20);if(Array.isArray(e==null?void 0:e.optimizationNeeds))for(const f of e.optimizationNeeds){const A=(f||"").toLowerCase();A&&(v.some(I=>A.includes(I))||(m.name||"").toLowerCase().includes(A))&&(T+=25)}(m.negativeTriggers||[]).map(f=>f.toLowerCase()).some(f=>f&&t.includes(f))&&(T=-100),T>0&&i.set(b,T)}const n=[];for(const m of this.catalog){const b=i.get(m.code.toLowerCase())||0;b>0&&n.push({item:m,score:b})}n.sort((m,b)=>b.score-m.score);const s=[],l=new Set;for(const{item:m}of n){const b=m.code.toLowerCase(),T=m.functionGroup||m.category;if(!l.has(T)&&!r.has(b)&&(l.add(T),r.add(b),s.push({code:m.code,name:m.name,category:m.category,functionGroup:T,description:m.description,target:m.target||"Visual Utama",priority:"WAJIB",isPrimary:!0,checked:!0,active:!0,reason:`Mewakili fungsi visual inti (${m.name}) dari analisis gambar aktual`,source:(i.get(b)||0)>=100?"VISION_AI":"IMAGE_ANALYSIS",equivalentTo:m.equivalentTo||[]}),s.length>=8))break}const d=[],g=new Set;for(const{item:m}of n){const b=m.code.toLowerCase(),T=m.functionGroup||m.category;if(!l.has(T)&&!g.has(T)&&!r.has(b)&&(g.add(T),r.add(b),d.push({code:m.code,name:m.name,category:m.category,functionGroup:T,description:m.description,target:m.target||"Visual Pendukung",priority:"OPSIONAL",isPrimary:!1,checked:!1,active:!1,relationship:"COMPLEMENTARY",reason:`Melengkapi fungsi visual pada domain ${m.category} (${m.name})`,source:"IMAGE_ANALYSIS",equivalentTo:m.equivalentTo||[]}),d.length>=8))break}const u=[],p=new Set([...s.map(m=>m.category),...d.map(m=>m.category)]),c=new Set([...l,...g]);for(const{item:m}of n){const b=m.code.toLowerCase(),T=m.functionGroup||m.category;if(!r.has(b)&&(c.has(T)||p.has(m.category))&&(r.add(b),u.push({code:m.code,name:m.name,category:m.category,functionGroup:T,description:m.description,target:m.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif sinonim untuk fungsi ${T} (${m.name})`,source:"IMAGE_ANALYSIS",equivalentTo:m.equivalentTo||[]}),u.length>=8))break}if(u.length<5)for(const m of this.catalog){const b=m.code.toLowerCase(),T=m.functionGroup||m.category;if(!r.has(b)&&(p.has(m.category)||c.has(T))){if((m.negativeTriggers||[]).map(v=>v.toLowerCase()).some(v=>v&&t.includes(v)))continue;if(r.add(b),u.push({code:m.code,name:m.name,category:m.category,functionGroup:T,description:m.description,target:m.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif variasi gaya dalam domain ${m.category}`,source:"CATALOG_ALTERNATIVE",equivalentTo:m.equivalentTo||[]}),u.length>=8)break}}const h=[],k=[];for(const m of this.catalog){const b=m.code.toLowerCase();if(r.has(b))continue;const T=(m.negativeTriggers||[]).map(f=>f.toLowerCase()).some(f=>f&&t.includes(f)),v=!p.has(m.category);if((T||v)&&(r.add(b),k.push({code:m.code,target:m.target||m.name,reason:T?`Bertentangan dengan kondisi visual gambar aktual (${m.name})`:`Tidak relevan dengan subjek atau medium gambar (${m.category})`}),k.length>=10))break}return{primaryShorthands:s,relatedShorthands:d,similarShorthands:u,conflicts:h,exclusions:k}}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:r="image/jpeg",referencePrompt:t="",preferredLang:i="id",visualTelemetry:n=null,targetAspectRatio:s="auto",isTwoWorlds:l=!1,twoWorldsConfig:d=null}){const g=J.getApiKey().trim(),u=J.getModel()||"gemini-2.0-flash";let p=null,c="LOCAL_ENGINE",h=!1,k="";if(g&&e)try{const L=await this.executeMultimodalImageAnalysis(e,r,t,g,u,i,s,l);L&&(L.mainDescription||L.subjectDescription)&&(p=L,c="GEMINI_AI",h=!0,this.status=ua.CONNECTED,this.lastError=null,k=`🌐 Analisa Gambar AI AKTIF (${J.getModel()||u}) — Vision analysis mendalam dari gambar aktual.`)}catch(L){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",L),this.lastError=L.message}p||(p=this.generateDynamicImageAnalysis(a,e,t,i,n,s),c=g?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",h=!!g,k=h?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),s&&s!=="auto"&&s!=="Otomatis"&&(p.aspectRatio=s);const m=this.assembleStructuredImagePrompt(p),b=this.getStandard13VisualBreakdown(p);p.aspectRatio&&(b["Aspect Ratio"]=p.aspectRatio);const{primaryShorthands:T,relatedShorthands:v,similarShorthands:f,conflicts:A,exclusions:I}=this.analyzeImageShorthandsBlueprint(m,p),E=T.map(L=>L.code);let R=null,C=d?{...d}:null;l&&(R=re(p,a,n,d),p.smartDetection=R,C&&R&&((!C.gender||C.gender.startsWith("Auto"))&&(C.gender=R.gender),(!C.age||C.age.startsWith("Auto"))&&(C.age=R.age),(!C.ethnicity||C.ethnicity.startsWith("Auto"))&&(C.ethnicity=R.ethnicity),(!C.subjectStyle||C.subjectStyle.startsWith("Auto"))&&(C.subjectStyle=R.subjectStyle),(!C.environmentStyle||C.environmentStyle.startsWith("Auto"))&&(C.environmentStyle=R.environmentStyle)));const N=this.assembleOptimalImagePrompt(p,E,l?C||d:null),P={primaryAction:l?"REPRESENTASI_2_DUNIA":"REPRESENTASI_VISUAL",primaryTarget:l?"Karakteristik Visual & Dualitas Gambar Sumber":"Karakteristik Visual Gambar Aktual",summary:l?`Gambar ini merepresentasikan konsep 2 Dunia berbasis ${p.subjectDescription||p.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt representasi dualitas / dua dunia yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`:`Gambar ini merepresentasikan ${p.subjectDescription||p.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,priority:"HIGH",category:l?"TWO_WORLDS":"IMAGE_TO_PROMPT"},S=[{entity:"STRUKTUR_PROMPT",label:"Penyesuaian Struktur Prompt",description:"Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera."},{entity:"PENJELASAN_KATA",label:"Penyederhanaan & Presisi Frasa",description:"Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI."},{entity:"PENEKANAN_VISUAL",label:"Penekanan Elemen Visual Kunci",description:"Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber."},{entity:"PENGUATAN_DETAIL",label:"Penguatan Detail Mikro",description:"Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak."},{entity:"PARAMETER_TEKNIS",label:"Integrasi Parameter AI Generatif",description:`Menambahkan parameter teknis standar (--ar ${p.aspectRatio||"16:9"} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`}],M=[{entity:"SUBJEK_UTAMA",label:"Subjek Utama & Identitas Visual",description:p.subjectDescription||p.subject||p.mainDescription},{entity:"POSE_EKSPRESI",label:"Pose & Ekspresi",description:p.poseExpression||p.pose||"Postur alami dan ekspresi wajah subjek asli"},{entity:"PAKAIAN_BUSANA",label:"Pakaian & Aksesoris",description:p.outfitMaterial||p.outfit||"Gaya pakaian dan tekstur material busana"},{entity:"FRAMING_KAMERA",label:"Framing & Angle Kamera",description:p.cameraLensDof||p.camera||"Sudut pandang lensa kamera dan rasio framing"},{entity:"BACKGROUND_ENV",label:"Background & Environment",description:p.environmentBackground||p.environment||"Setting lokasi dan latar belakang asli"},{entity:"KOMPOSISI",label:"Komposisi Visual",description:p.compositionPerspective||p.composition||"Pusat perhatian visual dan keseimbangan bidang"},{entity:"PENCAHAYAAN",label:"Pencahayaan & Suasana",description:p.lightingColor||p.lighting||"Arah pencahayaan, kontras shadow-highlight, dan tone ambient"}],F={from:`Kondisi visual aktual dari file gambar sumber: ${p.mainDescription||"Subjek dan komposisi visual nyata"}`,to:`Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${E.join(" ")}), parameter teknis (--ar ${p.aspectRatio||"16:9"} --style raw --v 6.1), dan negative prompt.`,summary:"💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli."};return{mode:l?"TWO_WORLDS":"IMAGE_TO_PROMPT",source:c,isOnlineActive:h,engineNotice:k,generatedPrompt:m,optimalPrompt:N,cleanText:m,visionData:p,visualBreakdown:b,primaryShorthands:T,relatedShorthands:v,similarShorthands:f,recommendations:[...T,...v,...f],installedShorthands:E,conflicts:A,exclusions:I,editAreas:S,lockedAreas:M,unchangedAreas:M.map(L=>L.description),visualTransformation:F,intent:P,referencePrompt:t||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:r,aspectRatio:p.aspectRatio||"16:9"},twoWorldsSmartDetection:l?R:null,timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,r,t,i,n="id",s="auto",l=!1){var d,g,u,p;const c=[(i||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((f,A,I)=>f&&I.indexOf(f)===A&&!f.includes("1.5-pro")&&!f.includes("2.5-pro")&&(f==="gemini-3.5-flash-lite"||!f.includes("3.5")&&!f.includes("3.8")));c.length===0&&c.push("gemini-2.0-flash","gemini-1.5-flash");const h=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!h||h.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let k=(e||"image/jpeg").toLowerCase().trim();k.includes("png")?k="image/png":k.includes("webp")?k="image/webp":k.includes("heic")?k="image/heic":k.includes("heif")?k="image/heif":k="image/jpeg";const m=`Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat sebagai SATU-SATUNYA SOURCE OF TRUTH.

ATURAN MUTLAK:
1. JANGAN PERNAH menggunakan template statis, data default, atau asumsi fiktif.
2. Analisis APA YANG BENAR-BENAR TERLIHAT pada gambar:
   - Subjek utama (siapa/apa: pria/wanita/anak/karakter 3D animasi/chibi doll figurine/hewan/objek; busana/hoodie/pakaian, warna nyata yang terlihat, tekstur, material).
   - Pose tubuh, posisi, gestur, arah pandangan, ekspresi wajah.
   - Komposisi, framing, sudut kamera (eye-level, low angle, closeup, medium shot, wide shot, dll.).
   - Pencahayaan (studio softbox, daylight alami, directional, ambient, highlight, shadow).
   - Lingkungan & latar belakang (studio foto, kantor, indoor, alam outdoor, warna background).
   - Palet warna, white balance, saturasi, tone.
    - Gaya fotografi atau gaya visual asli (realistis, karakter 3D animasi, chibi figurine, digital render).${l?`
4. KHUSUS MODE 2 DUNIA (SMART DETECTION OTOMATIS):
Sertakan juga objek "smartDetection" di root JSON respons dengan nilai spesifik hasil deteksi gambar aktual:
"smartDetection": {
  "gender": "Laki-Laki" | "Perempuan",
  "age": "Perkiraan usia spesifik (contoh: 25 tahun)",
  "ethnicity": "Asia" | "Asia Tenggara" | "Asia Timur" | "Asia Selatan" | "Eropa" | "Timur Tengah" | "Afrika" | "Amerika Latin",
  "subjectStyle": "Nama spesifik style subjek (contoh: LEGO Style, 3D Cartoon Style, Anime Style, Realistic Human Style, Claymation Style, Stylized 3D Character, dll.)",
  "environmentStyle": "Nama spesifik style environment (contoh: Candy World 3D Style, Fantasy Environment, Dreamy Pastel 3D, Realistic Environment, Natural Lighting, dll.)"
}`:""}

3. ATURAN BAHASA MUTLAK (GLOBAL PROMPT OPTIMAL):
Seluruh atribut visual yang menjadi bagian dari prompt (mainDescription, visualDetails, subject, pose, outfit, environment, lighting, composition, cameraAngle, style, colorTone, negativePrompt) WAJIB ditulis dalam BAHASA INGGRIS yang natural, deskriptif, spesifik, dan siap digunakan untuk AI image generator (Midjourney/SDXL/DALL-E).

Kembalikan respons HANYA dalam format JSON valid dengan 13 atribut visual lengkap:
{
  "mainDescription": "Descriptive main image prompt in natural AI-readable English...",
  "visualDetails": "Comprehensive visual details in English covering subject, attire, pose, expression, composition, lighting, background, and photographic character...",
  "subject": "Subject description in English...",
  "pose": "Subject pose in English...",
  "framing": "Framing shot in English (e.g., medium shot, closeup, wide)...",
  "cameraAngle": "Camera angle and lens in English (e.g., eye-level angle, 50mm lens)...",
  "lighting": "Lighting characteristics in English...",
  "environment": "Surrounding environment in English...",
  "background": "Background setting in English...",
  "outfit": "Attire and clothing details in English...",
  "expression": "Facial expression in English...",
  "composition": "Visual composition in English...",
  "style": "Photographic or visual style in English...",
  "colorTone": "Dominant color palette and tone in English...",
  "aspectRatio": "16:9",
  "suggestedShorthands": ["/portrait", "/studio", "/suit", "/eyelevel", "/softlight", "/realistic", "/rawphoto"],
  "negativePrompt": "Relevant negative prompt in English (e.g., deformed, bad anatomy, blurry, watermark)"
}`,b=r&&r.trim()?`Analisis gambar ini dengan panduan pengguna: "${r.trim()}". Pastikan seluruh output prompt dalam Bahasa Inggris natural.`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata dalam Bahasa Inggris natural untuk AI image generator.";let T=null;const v=[];for(const f of c){const A=`https://generativelanguage.googleapis.com/v1beta/models/${f}:generateContent?key=${encodeURIComponent(t)}`,I=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const E of I)try{const R={contents:[{role:"user",parts:[{text:`${m}

Instruksi: ${b}`},{inlineData:{mimeType:k,data:h}}]}],generationConfig:E},C=await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});if(!C.ok){const M=await C.text();if(C.status===400&&E.responseMimeType)continue;throw new Error(`HTTP ${C.status}: ${M}`)}const N=((u=(g=(d=(await C.json()).candidates)==null?void 0:d[0])==null?void 0:g.content)==null?void 0:u.parts)||[];let P="";for(const M of N)M.text&&!M.thought&&(P+=M.text);if(!P&&(p=N[0])!=null&&p.text&&(P=N[0].text),!P)throw new Error("Respon Gemini kosong.");let S=null;try{S=this.extractJson(P)}catch{S={mainDescription:P.replace(/```[a-z]*\n?/gi,"").trim(),visualDetails:""}}if(S&&typeof S=="object"){const M=S.mainDescription||S.prompt||S.generatedPrompt||S.description||S.summary||S.subjectDescription||S.subject||S.visualDetails||S.details||S.analysis;if(M)return S.mainDescription||(S.mainDescription=String(M).trim()),S.mainDescription=ca(S.mainDescription),S.visualDetails&&(S.visualDetails=ca(S.visualDetails)),s&&s!=="auto"&&s!=="Otomatis"&&(S.aspectRatio=s),this.lastSuccessfulModel=f,f!==i&&J.setModel(f),S}}catch(R){T=R,v.push(`${f}: ${R.message}`),console.warn(`Model ${f} multimodal gagal:`,R.message);break}}throw T||new Error(`Gagal menganalisis gambar dengan Gemini API (${v.join(" | ")}).`)}generateDynamicImageAnalysis(a,e,r="",t="en",i=null,n="auto"){const s=i||(a==null?void 0:a.visualTelemetry)||za(null,{filename:a==null?void 0:a.name,width:a==null?void 0:a.width,height:a==null?void 0:a.height,targetAspectRatio:n});return fe(s,{preferredLang:"en",referencePrompt:r,filename:a==null?void 0:a.name,targetAspectRatio:n})}async executeMultimodalBackgroundImageAnalysis(a,e,r,t,i,n="id",s="auto"){var l,d,g;const u=[(i||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((T,v,f)=>T&&f.indexOf(T)===v&&!T.includes("1.5-pro")&&!T.includes("2.5-pro")&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8")));u.length===0&&u.push("gemini-2.0-flash","gemini-1.5-flash");const p=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!p||p.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let c=(e||"image/jpeg").toLowerCase().trim();c.includes("png")?c="image/png":c.includes("webp")?c="image/webp":c.includes("heic")?c="image/heic":c.includes("heif")?c="image/heif":c="image/jpeg";const h=_e(),k=r&&r.trim()?`Analisis latar belakang foto ini dengan fokus utama pada dekorasi, ruang, arsitektur, dan hubungan spasial penempatan subjek: "${r.trim()}". Pisahkan jelas antara Background Profile dan Subject–Background Placement Profile.`:"Analisis latar belakang foto ini secara mendalam (ruang, arsitektur, dekorasi, properti, material, pencahayaan) serta rekam profil spasial penempatan subjek terhadap latar sebagai acuan.";let m=null;const b=[];for(const T of u){const v=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(t)}`,f=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const A of f)try{const I={contents:[{role:"user",parts:[{text:`${h}

Instruksi: ${k}`},{inlineData:{mimeType:c,data:p}}]}],generationConfig:A},E=await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(!E.ok){const P=await E.text();if(E.status===400&&A.responseMimeType)continue;throw new Error(`HTTP ${E.status}: ${P}`)}const R=((g=(d=(l=(await E.json()).candidates)==null?void 0:l[0])==null?void 0:d.content)==null?void 0:g.parts)||[];let C="";for(const P of R)P.text&&!P.thought&&(C+=P.text);if(!C)throw new Error("Respon teks multimodal latar belakang kosong.");const N=this.extractJson(C);if(N&&(N.backgroundProfile||N.spaceAndComposition||N.placementProfile))return this.status=ua.CONNECTED,this.lastError=null,this.lastSuccessfulModel=T,T!==i&&J.setModel(T),N}catch(I){m=I,b.push(`${T}: ${I.message}`),console.warn(`Model ${T} multimodal background gagal:`,I.message);break}}throw m||new Error(`Gagal menganalisis latar belakang dengan Gemini API (${b.join(" | ")}).`)}async analyzeBackground({imageFile:a=null,imageBase64:e=null,mimeType:r="image/jpeg",referencePrompt:t="",preferredLang:i="id",visualTelemetry:n=null,targetAspectRatio:s="auto"}){var l,d,g,u,p,c,h,k,m,b,T,v,f,A,I,E,R,C,N,P,S,M,F,L,H,x,Q,ia,na,j,B,X,y,O,D,$,_,V;const z=J.getApiKey().trim(),Y=J.getModel()||"gemini-2.0-flash";let w=null,G="LOCAL_ENGINE",oa=!1,ba="";if(z&&e)try{const K=await this.executeMultimodalBackgroundImageAnalysis(e,r,t,z,Y,i,s);K&&(K.backgroundProfile||K.spaceAndComposition)&&(w=K,G="GEMINI_AI",oa=!0,this.status=ua.CONNECTED,this.lastError=null,ba=`🌐 Analisa Latar Belakang AI AKTIF (${J.getModel()||Y}) — Analisis mendalam latar, dekorasi & hubungan spasial subjek.`)}catch(K){console.warn("Gemini multimodal background analysis failed, falling back to dynamic heuristic engine:",K),this.lastError=K.message}w||(w=Fe(a,e,n,s),G=z?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",oa=!!z,ba=oa?`🌐 Mode Analisa Latar Belakang (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Latar Belakang (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),s&&s!=="auto"&&s!=="Otomatis"&&(w.aspectRatio=s);const ha=w.backgroundProfile||$a(w),ga=w.placementProfile||Ga(w);let aa=w.optimalPrompt||"";if(!aa||typeof aa!="string"){const K=w.aspectRatio||"16:9";aa=`Interior architectural photography of ${((l=w.spaceAndComposition)==null?void 0:l.category)||"modern authentic room"}, ${((d=w.spaceAndComposition)==null?void 0:d.setting)||"clean spatial setting"}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic --ar ${K} --style raw --v 6.1

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}aa=ca(aa),w.optimalPrompt=aa;const da=aa||`${ha}

${ga}`.trim(),{primaryShorthands:sa,relatedShorthands:U,similarShorthands:Aa,conflicts:ya,exclusions:La}=this.analyzeImageShorthandsBlueprint(aa,{mainDescription:aa,environment:((g=w.elemenBackground)==null?void 0:g.arsitektur)||((u=w.spaceAndComposition)==null?void 0:u.setting)||"",background:((p=w.elemenBackground)==null?void 0:p.arsitektur)||((c=w.spaceAndComposition)==null?void 0:c.architecture)||"",lighting:((h=w.elemenBackground)==null?void 0:h.lighting)||((k=w.backgroundLighting)==null?void 0:k.type)||"",colorTone:((m=w.elemenBackground)==null?void 0:m.warna)||((b=w.colorAndMaterial)==null?void 0:b.palette)||"",aspectRatio:w.aspectRatio||"16:9",suggestedShorthands:w.suggestedShorthands||["/background","/interior","/architecture","/ambientlight"]}),Ca=sa.map(K=>K.code),q={"1. Ruang & Komposisi":`${((T=w.spaceAndComposition)==null?void 0:T.category)||"-"} (${((v=w.spaceAndComposition)==null?void 0:v.setting)||"-"})`,"2. Lapisan Visual":`FG: ${((f=w.visualLayers)==null?void 0:f.foreground)||"-"} | MG: ${((A=w.visualLayers)==null?void 0:A.middleGround)||"-"} | BG: ${((I=w.visualLayers)==null?void 0:I.background)||"-"}`,"3. Warna & Material":`${((E=w.colorAndMaterial)==null?void 0:E.dominantColor)||"-"}, ${((R=w.colorAndMaterial)==null?void 0:R.surfaceCharacter)||"-"}`,"4. Pencahayaan Latar":`${((C=w.backgroundLighting)==null?void 0:C.type)||"-"} (${((N=w.backgroundLighting)==null?void 0:N.direction)||"-"})`,"5. Nuansa Foto / Latar":`${((P=w.photoMood)==null?void 0:P.mood)||"-"} &bull; ${((S=w.photoMood)==null?void 0:S.visualStyle)||"-"}`,"6. Elemen Teridentifikasi":Array.isArray(w.identifiedElements)?w.identifiedElements.map(K=>K.name).join(", "):"-","7. Struktur Komposisi":`${((M=w.structureAndComposition)==null?void 0:M.visualBalance)||"-"} &bull; ${((F=w.structureAndComposition)==null?void 0:F.repetitionPatterns)||"-"}`,"8. Hubungan Spasial Subjek":((L=w.subjectPlacement)==null?void 0:L.spatialSummary)||ga||"-"},ea=[{entity:"LATAR_BELAKANG_UTAMA",label:"Karakteristik & Arsitektur Latar",description:`${((H=w.spaceAndComposition)==null?void 0:H.category)||"Latar arsitektural"}: ${((x=w.spaceAndComposition)==null?void 0:x.architecture)||"Struktur dinding, lantai, dan plafon asli"}`},{entity:"DEKORASI_DAN_PROPERTI",label:"Dekorasi & Properti Lingkungan",description:`${((Q=w.spaceAndComposition)==null?void 0:Q.decoration)||"Dekorasi"} & properti: ${((ia=w.spaceAndComposition)==null?void 0:ia.propsAndAccessories)||"Perabotan dan ornamen penunjang"}`},{entity:"PENCAHAYAAN_LINGKUNGAN",label:"Pencahayaan Lingkungan / Latar",description:`${((na=w.backgroundLighting)==null?void 0:na.type)||"Pencahayaan alami"}: arah ${((j=w.backgroundLighting)==null?void 0:j.direction)||"terarah"} dengan temperatur ${((B=w.backgroundLighting)==null?void 0:B.colorTemperature)||"seimbang"}`},{entity:"ACUAN_SPASIAL_PENEMPATAN",label:"Hubungan Spasial Penempatan Subjek (Profil B)",description:`Posisi ${((X=w.subjectPlacement)==null?void 0:X.horizontalPos)||"tengah"}, skala ${((y=w.subjectPlacement)==null?void 0:y.scale)||"medium shot"}, kedalaman ${((O=w.subjectPlacement)==null?void 0:O.depthPosition)||"middle ground"} (Acuan untuk penempatan subjek baru)`}],Ra=[{entity:"ISOLASI_IDENTITAS_SUBJEK",label:"Proteksi Privasi & Isolasi Identitas",description:"Menghapus analisis identitas fisik/personal subjek (wajah, usia, pakaian, jenis kelamin) dan hanya mempertahankan data spasial murni."},{entity:"PRESERVASI_KEDALAMAN_RUANG",label:"Preservasi Kedalaman Ruang 3D",description:"Mempertahankan pemisahan foreground, middle ground, dan background agar subjek baru dapat berpadu harmonis."},{entity:"PENAJAMAN_TEKSTUR_MATERIAL",label:"Optimasi Tekstur Material Latar",description:`Mempertegas tekstur mikro ${(($=(D=w.colorAndMaterial)==null?void 0:D.materialsAndTextures)==null?void 0:$.map(K=>K.material).join(", "))||"material latar"} pada prompt optimal.`},{entity:"PARAMETER_AI_GENERATIF",label:"Integrasi Parameter AI Generatif",description:`Menyematkan parameter teknis (--ar ${w.aspectRatio||"16:9"} --style raw --v 6.1) dan negative prompt pencegah artefak subjek.`}],Ia={primaryAction:"ANALISA_LATAR_BELAKANG",primaryTarget:"Karakteristik Latar Belakang & Acuan Spasial Subjek",summary:`Analisis khusus terhadap latar belakang (${((_=w.spaceAndComposition)==null?void 0:_.category)||"lingkungan"}) dan hubungan spasial subjek terhadap latar sebagai acuan penempatan pada foto berikutnya.`,priority:"HIGH",category:"BACKGROUND"},Ta={from:`Kondisi visual latar belakang aktual: ${((V=w.spaceAndComposition)==null?void 0:V.category)||"Latar foto"} dengan properti dan pencahayaan yang terlihat.`,to:"Profil referensi latar belakang (Profil A) dan acuan penempatan subjek (Profil B) lengkap dengan prompt optimal dan shorthand terkait.",summary:"💡 Analisis Latar Belakang: Menghasilkan profil lingkungan yang detail dan reusable, sekaligus mengunci hubungan posisi subjek terhadap latar sebagai acuan komposisi."};return{mode:"BACKGROUND_ANALYSIS",source:G,isOnlineActive:oa,engineNotice:ba,backgroundData:w,backgroundProfile:ha,placementProfile:ga,backgroundProfileText:w.backgroundProfileText||$a(w),placementProfileText:w.placementProfileText||Ga(w),fullReportText:w.fullReportText||Ja(w),aspects:w.aspects||[{id:"ruang_komposisi",title:"1. Ruang & Komposisi",content:q["1. Ruang & Komposisi"]},{id:"lapisan_visual",title:"2. Lapisan Visual & Kedalaman Ruang",content:q["2. Lapisan Visual"]},{id:"warna_material",title:"3. Warna & Material Latar",content:q["3. Warna & Material"]},{id:"pencahayaan_latar",title:"4. Pencahayaan Latar & Properti",content:q["4. Pencahayaan Latar"]},{id:"nuansa_foto",title:"5. Nuansa Foto / Latar",content:q["5. Nuansa Foto / Latar"]},{id:"elemen_teridentifikasi",title:"6. Elemen Latar Teridentifikasi",content:q["6. Elemen Teridentifikasi"]},{id:"struktur_komposisi",title:"7. Struktur & Komposisi Latar",content:q["7. Struktur Komposisi"]},{id:"hubungan_subjek_latar",title:"8. Hubungan Subjek & Latar",content:q["8. Hubungan Spasial Subjek"]}],generatedPrompt:da,optimalPrompt:aa,cleanText:da,visualBreakdown:q,primaryShorthands:sa,relatedShorthands:U,similarShorthands:Aa,recommendations:[...sa,...U,...Aa],installedShorthands:Ca,conflicts:ya,exclusions:La,editAreas:Ra,lockedAreas:ea,unchangedAreas:ea.map(K=>K.description),visualTransformation:Ta,intent:Ia,referencePrompt:t||"",imageInfo:{name:(a==null?void 0:a.name)||"background-reference.jpg",size:(a==null?void 0:a.size)||0,type:r,aspectRatio:w.aspectRatio||"16:9"},timestamp:new Date().toISOString()}}async analyzeShorthandImprove(a,e=null,r={}){var t,i,n,s,l;const d=!!(r.isColourGrading||r.mode==="COLOUR_GRADING"),g=d?"COLOUR_GRADING":r.mode||"SHORTHAND_IMPROVE",u=await this.analyzePrompt(a,e),p={conflictCount:((t=u.conflicts)==null?void 0:t.length)||0,redundancyCount:(((i=u.recommendations)==null?void 0:i.length)||0)-(((n=u.primaryShorthands)==null?void 0:n.length)||0),isOptimized:(((s=u.conflicts)==null?void 0:s.length)||0)===0,improvementAdvice:((l=u.conflicts)==null?void 0:l.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":d?"Shorthand colour grading telah dianalisis dan diselaraskan secara semantik tanpa konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...u,mode:g,isColourGrading:d,isImageRepair:!1,diagnostics:p}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:r="image/jpeg",notesPrompt:t="",preferredLang:i="id",isColourGrading:n=!1,mode:s="SHORTHAND_IMPROVE",colourGradingConfig:l=null,telemetry:d=null}){const g=!!(n||s==="COLOUR_GRADING"),u=g?"COLOUR_GRADING":"SHORTHAND_IMPROVE",p=J.getApiKey().trim(),c=J.getModel()||"gemini-2.0-flash",h=g?l||Pa:null,k=g?Ce(d||{},h):null;let m=null,b="LOCAL_ENGINE",T=!1,v="";if(p&&e)try{const L=await this.executeMultimodalImageRepairAnalysis(e,r,t,p,c,i,g,h);if(L&&(L.optimizationAreas||L.visualConditionSummary)){m=L,b="GEMINI_AI",T=!0,this.status=ua.CONNECTED,this.lastError=null;const H=J.getModel()||c;v=g?`🌐 Analisa Colour Grading AI AKTIF (${H}) — Diagnosis tone & warna komprehensif dari gambar asli.`:`🌐 Analisa Perbaikan AI AKTIF (${H}) — Diagnosis visual komprehensif dari gambar asli.`}}catch(L){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",L),this.lastError=L.message}m||(m=this.generateHeuristicImageRepair(a,t,i,g,h),b=p?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",T=!!p,v=T?g?`🌐 Mode Analisa Colour Grading (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:g?"🖥️ Mode Analisa Colour Grading (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis warna AI langsung).":"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:f=g?"Karakteristik warna gambar telah dianalisis secara visual.":"Gambar telah dianalisis secara visual.",optimizationAreas:A=[],goodAspects:I=[],repairInstructions:E=g?"Terapkan colour grading harmonis dan profesional pada foto.":"Optimalkan kualitas dan karakteristik visual foto."}=m,R={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},C=[];for(const L of A){const H=Array.isArray(L.recommendedCodes)?L.recommendedCodes:[];let x=null;for(const ia of H){const na=ia.startsWith("/")?ia:`/${ia}`,j=this.catalog.find(B=>B.code.toLowerCase()===na.toLowerCase());if(j){x=j;break}}if(!x){const ia=`${L.aspect||""} ${L.problem||""} ${L.suggestedAction||""}`.toLowerCase();for(const na of this.catalog)if((na.semanticTriggers||[]).map(j=>j.toLowerCase()).some(j=>ia.includes(j))||ia.includes(na.name.toLowerCase())){x=na;break}}const Q=x?x.code:H[0]?H[0].startsWith("/")?H[0]:`/${H[0]}`:null;Q&&C.push({code:Q,name:(x==null?void 0:x.name)||Q.replace("/","").toUpperCase(),category:(x==null?void 0:x.category)||(g?"COLOR_GRADING":"IMAGE_QUALITY"),functionGroup:(x==null?void 0:x.functionGroup)||`GROUP_${Q.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:(x==null?void 0:x.description)||L.suggestedAction||(g?"Penyesuaian colour grading":"Optimasi visual gambar"),issuePriority:L.priority||"OPTIMIZATION",priorityWeight:R[L.priority]||3,aspect:L.aspect||(g?"Aspek Tone & Warna":"Aspek Visual"),problem:L.problem||"",reason:L.reason||`Diperlukan untuk ${L.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const N=new Set,P=[];for(const L of C){const H=L.functionGroup;N.has(H)||(N.add(H),P.push(L))}P.sort((L,H)=>{const x=(L.priorityWeight||3)-(H.priorityWeight||3);return x!==0?x:L.code.localeCompare(H.code)});const S=P.map(L=>L.code);let M="",F="";if(g){const L=Za(h,k);F=L,M=S.length>0?`${L}

${S.join(" ")}`.trim():L.trim()}else{const L=Xa(E);F=L,M=S.length>0?`${L} ${S.join(" ")}`.trim():L}return{mode:u,isColourGrading:g,isImageRepair:!0,source:b,isOnlineActive:T,engineNotice:v,visualConditionSummary:f,optimizationAreas:A,goodAspects:I,repairInstructions:E,englishBasePrompt:F,colourGradingConfig:h,adaptiveAdjustments:k,telemetry:g?d:null,diagnosedShorthands:P,installedShorthands:S,optimalPrompt:M,primaryShorthands:P,relatedShorthands:[],recommendations:P,conflicts:[],exclusions:[],editAreas:A.map(L=>({entity:L.aspect||(g?"AREA_COLOUR_GRADING":"AREA_OPTIMASI"),description:L.problem||L.suggestedAction||""})),lockedAreas:I.map(L=>({entity:"ASPEK_SUDAH_BAIK",description:L})),unchangedAreas:I,intent:{primaryAction:g?"DIAGNOSIS_COLOUR_GRADING":"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:g?"Tone & Palet Warna":"Kondisi Visual Foto",summary:f,priority:"HIGH",category:g?"COLOR_GRADING":"IMAGE_QUALITY"},diagnostics:{issueCount:A.length,goodCount:I.length,isOptimized:!1,improvementAdvice:g?`Ditemukan ${A.length} area warna & tone yang disesuaikan. Menampilkan ${P.length} shorthand rekomendasi tanpa batasan.`:`Ditemukan ${A.length} area visual yang membutuhkan perbaikan. Menampilkan ${P.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||(g?"colour-grading-source.jpg":"repair-source.jpg"),size:(a==null?void 0:a.size)||0,type:r},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,r,t,i,n="id",s=!1,l=null){var d,g,u,p,c,h,k,m;const b=[(i||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((R,C,N)=>R&&N.indexOf(R)===C&&!R.includes("1.5-pro")&&!R.includes("2.5-pro")&&(R==="gemini-3.5-flash-lite"||!R.includes("3.5")&&!R.includes("3.8")));b.length===0&&b.push("gemini-2.0-flash","gemini-1.5-flash");const T=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!T||T.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let v=(e||"image/jpeg").toLowerCase().trim();v.includes("png")?v="image/png":v.includes("webp")?v="image/webp":v.includes("heic")?v="image/heic":v.includes("heif")?v="image/heif":v="image/jpeg";const f=s?`Anda adalah Ahli Colour Grading & Visual Colorist profesional.
Tugas Anda: Menganalisis karakter warna, tonal curve, temperatur, saturasi, kontras warna, dan color harmony dari gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis karakteristik warna gambar dan menentukan SELURUH ASPEK penyesuaian colour grading yang dibutuhkan untuk menciptakan palet warna sinematik, harmonis, atau tone estetis yang diinginkan.
${l?`
TARGET ARAH VISUAL & STYLE:
- Mode: ${l.mode||"AUTO"}
- Target Style: ${l.selectedStyle||"Natural Vibrant"}
- Intensity: ${l.intensity??50}%
- Highlight Protection: ${((d=l.protections)==null?void 0:d.highlightProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Shadow Protection: ${((g=l.protections)==null?void 0:g.shadowProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Skin Tone Protection: ${((u=l.protections)==null?void 0:u.skinToneProtection)!==!1?"AKTIF (Prioritas Utama: pertahankan keaslian warna kulit alami manusia)":"NON-AKTIF"}
- Oversaturation Protection: ${((p=l.protections)==null?void 0:p.oversaturationProtection)!==!1?"AKTIF":"NON-AKTIF"}
`:""}
PRINSIP NON-DESTRUKTIF MUTLAK:
FOTO ASLI ADALAH SOURCE OF TRUTH. Proses ini murni AI IMAGE ENHANCEMENT / COLOR GRADING, BUKAN IMAGE REGENERATION. Wajib 100% mempertahankan subjek, wajah, identitas, proporsi tubuh, busana, rambut, pose, objek, latar belakang, dan struktur komposisi tanpa perubahan generatif.

Parameter analisis meliputi:
- Color temperature & white balance (warm, cool, neutral)
- Color cast / tint (pergeseran warna hijau/magenta/kuning/biru)
- Tonal curve / contrast / gamma (bayangan pekat, highlight lembut)
- Shadow tint & black point (cinematic lifted shadows, matte blacks, deep shadows)
- Highlight roll-off & highlight tint (warm highlights, golden glow, clean whites)
- Saturation, vibrance & color gamut (muted tone, vibrant pop, pastel, monochrome)
- Skin tone accuracy & natural color preservation (pada subjek manusia)
- Color harmony & palette style (teal and orange, moody cinematic, vintage retro, pastel aesthetics)
- Film look, texture & digital grain
- Dynamic range & color separation

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan penyesuaian warna/tone yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek warna yang SUDAH BAIK/OPTIMAL.
3. Sebutkan secara eksplisit aspek visual/warna yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah warna/tone utama (white balance bergeser, color cast ekstrem, kontras tidak seimbang).
   - SECONDARY_ISSUE: Penyesuaian saturasi, harmonisasi palet warna, tint bayangan/highlight.
   - OPTIMIZATION: Peningkatan tone sinematik, split toning, kurva gamma estetik.
   - PRESERVATION: Preservasi keaslian warna kulit (skin tone) & tekstur alami.
   - FINISHING: Sentuhan akhir grading film, look estetis, atau nuansa fotografi natural.
6. Cocokkan dengan shorthand yang tepat, contoh: /colorbalance, /naturaltone, /naturalcontrast, /shadowrecovery, /highlightcontrol, /dynamicrange, /rawphoto, /texturepreservation, /detailpreservation, /naturalprocessing.
7. Gunakan bahasa: ${n==="en"?"English":"Bahasa Indonesia"}.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif karakteristik warna dan tone foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek warna/tone (misal: Color Balance & Temperature)",
      "problem": "Deskripsi karakteristik atau kebutuhan penyesuaian spesifik",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan penyesuaian colour grading yang direkomendasikan",
      "recommendedCodes": ["/colorbalance"],
      "reason": "Alasan mengapa shorthand colour grading ini direkomendasikan"
    }
  ],
  "goodAspects": [
    "Aspek warna/visual yang dinilai sudah optimal 1",
    "Aspek warna/visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Natural, AI-readable ENGLISH prompt directives for color grading..."
}`:`Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
Tugas Anda: Menganalisis kondisi aktual gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis kondisi visual gambar dan menentukan SELURUH ASPEK gambar yang membutuhkan perbaikan, peningkatan, atau optimasi.

Parameter analisis meliputi:
- Exposure / brightness / lighting
- Highlight (terlalu keras / blown / clipping)
- Shadow (terlalu gelap / detail hilang)
- Dynamic range (rentang dinamis terbatas)
- Contrast (terlalu keras / datar)
- White balance / color balance / color temperature / saturation
- Skin tone (jika terdapat subjek manusia)
- Sharpness / detail / texture / noise / focus
- Lens distortion / perspective
- Composition / framing
- Processing artifacts / realism / keaslian karakter foto

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan optimasi yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek yang SUDAH BAIK.
3. Sebutkan secara eksplisit aspek-aspek visual yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah utama (pencahayaan, bayangan pekat, highlight silau, blur/fokus, distorsi).
   - SECONDARY_ISSUE: Masalah sekunder (kontras, saturasi, white balance, tone warna).
   - OPTIMIZATION: Kebutuhan peningkatan tambahan (dynamic range, high detail, kejernihan, komposisi).
   - PRESERVATION: Kebutuhan preservasi detail/tekstur/kulit.
   - FINISHING: Sentuhan akhir/realisme/karakter fotografi alami.
6. Cocokkan dengan shorthand yang tepat, contoh: /shadowrecovery, /highlightcontrol, /dynamicrange, /naturalcontrast, /naturaltone, /colorbalance, /detailpreservation, /texturepreservation, /naturalprocessing, /perspectivecorrection, /lenscorrection, /compositionbalance, /highdetail, /sharpen, /denoise, /enhance, /hdr, /rawphoto.
7. Gunakan bahasa: ${n==="en"?"English":"Bahasa Indonesia"}. Catatan Khusus: Bidang "repairInstructions" WAJIB dalam Bahasa Inggris natural untuk generative visual AI.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif kondisi visual foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek visual (misal: Shadow / Bayangan)",
      "problem": "Deskripsi masalah spesifik yang ditemukan",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan perbaikan yang direkomendasikan",
      "recommendedCodes": ["/shadowrecovery"],
      "reason": "Alasan mengapa shorthand ini direkomendasikan untuk gambar ini"
    }
  ],
  "goodAspects": [
    "Aspek visual yang dinilai sudah optimal 1",
    "Aspek visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, while preserving authentic skin textures and micro-details without synthetic artifacts."
}`,A=s?r&&r.trim()?`Analisis karakteristik warna dan tone gambar ini untuk colour grading. Catatan/preferensi warna pengguna: "${r.trim()}".`:"Analisis karakteristik warna, kurva tonal, kontras, dan saturasi gambar ini secara menyeluruh untuk rekomendasi colour grading.":r&&r.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${r.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.";let I=null;const E=[];for(const R of b){const C=`https://generativelanguage.googleapis.com/v1beta/models/${R}:generateContent?key=${encodeURIComponent(t)}`,N=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const P of N)try{const S={contents:[{role:"user",parts:[{text:`${f}

Instruksi: ${A}`},{inlineData:{mimeType:v,data:T}}]}],generationConfig:P},M=await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!M.ok){const x=await M.text();if(M.status===400&&P.responseMimeType)continue;throw new Error(`HTTP ${M.status}: ${x}`)}const F=((k=(h=(c=(await M.json()).candidates)==null?void 0:c[0])==null?void 0:h.content)==null?void 0:k.parts)||[];let L="";for(const x of F)x.text&&!x.thought&&(L+=x.text);if(!L&&(m=F[0])!=null&&m.text&&(L=F[0].text),!L)throw new Error("Respon Gemini kosong.");let H=null;try{H=this.extractJson(L)}catch{H={visualConditionSummary:L.replace(/```[a-z]*\n?/gi,"").trim(),optimizationAreas:[]}}if(H&&typeof H=="object"){const x=H.visualConditionSummary||H.summary||H.diagnosis||H.description;if(x||Array.isArray(H.optimizationAreas)&&H.optimizationAreas.length>0)return!H.visualConditionSummary&&x&&(H.visualConditionSummary=String(x).trim()),this.lastSuccessfulModel=R,R!==i&&J.setModel(R),H}}catch(S){I=S,E.push(`${R}: ${S.message}`),console.warn(`Model ${R} multimodal repair gagal:`,S.message);break}}throw I||new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${E.join(" | ")}).`)}generateHeuristicImageRepair(a,e="",r="id",t=!1,i=null){const n=(e||"").toLowerCase(),s=!!(e&&e.trim()),l=[],d=[];if(t){const c=(b,T)=>{s?b.some(v=>n.includes(v))&&l.push(T):l.push(T)};c(["suhu","temperature","warm","cool","hangat","dingin","kuning","biru","balance","cast","white balance"],{aspect:"Color Balance & Temperature",problem:"Suhu warna dan white balance memerlukan kalibrasi akurat agar nuansa visual harmonis.",priority:"PRIMARY_ISSUE",suggestedAction:"Penyelarasan suhu warna dan kalibrasi white balance netral",recommendedCodes:["/colorbalance"],reason:"Menyeimbangkan pergeseran suhu warna agar palet warna terlihat sinematik dan natural."}),c(["kontras","contrast","gamma","curve","kurva","keras","datar","flat"],{aspect:"Kurva Kontras & Tonal Gamma",problem:"Gradasi kontras antara highlight dan shadow memerlukan kurva transisi yang lebih halus dan sinematik.",priority:"PRIMARY_ISSUE",suggestedAction:"Penerapan kurva kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menciptakan kedalaman visual dengan rentang kontras organik khas film modern."}),c(["shadow","bayangan","gelap","hitam","lifted","pekat","black"],{aspect:"Shadow Toning & Black Point",problem:"Area bayangan gelap memerlukan pemulihan gradasi tonal agar tidak kehilangan nuansa warna.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan dan kontrol black point",recommendedCodes:["/shadowrecovery"],reason:"Mempertahankan kedalaman bayangan dengan detail tonal yang tetap terbaca bersih."}),c(["highlight","terang","silau","roll-off","roll off","putih","glow"],{aspect:"Highlight Roll-off & Tonal Rendah",problem:"Transisi area terang ke highlight paling tinggi memerlukan penataan yang lembut tanpa clipping keras.",priority:"SECONDARY_ISSUE",suggestedAction:"Pengendalian intensitas dan kelembutan highlight",recommendedCodes:["/highlightcontrol"],reason:"Menghindari highlight yang terlalu tajam/silau sehingga transisi pencahayaan tampak organik."}),c(["saturasi","saturation","vibrance","tone","warna","pucat","kusam","pekat","muted"],{aspect:"Rentang Tonal & Saturasi Warna",problem:"Intensitas warna dan kehangatan tonal memerlukan harmonisasi agar tidak over-saturated atau kusam.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan saturasi warna yang pas, estetis, dan nyaman dipandang."}),c(["dinamis","rentang","dynamic","range","hdr"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan dan kilau terang dapat diperluas untuk persepsi kedalaman maksimal.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Meningkatkan rentang tonal agar gradasi warna pada setiap tingkatan eksposur terpelihara utuh."}),c(["tekstur","kulit","skin","texture","asli","material"],{aspect:"Preservasi Tekstur & Warna Kulit Alami",problem:"Tekstur organik kulit dan material rentan terdistorsi oleh proses pewarnaan berlebih.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material dan keaslian warna kulit",recommendedCodes:["/texturepreservation"],reason:"Memastikan colour grading tidak mengubah pori-pori kulit, serat kain, atau tekstur alami objek."}),c(["alami","natural","realis","raw","film","sinematik","grade"],{aspect:"Karakter Pemrosesan Alami & Film Grade",problem:"Potensi terjadinya artefak digital berlebih selama proses penyesuaian grading warna.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Menjaga hasil akhir colour grading tetap memiliki nuansa fotografi autentik dan bernilai seni tinggi."}),d.length===0&&(d.push("Distribusi pencahayaan dasar dan kontras subjek utama sudah terdistribusi dengan baik."),d.push("Kerapatan detail dan tekstur dasar gambar sudah terjaga dengan jelas."),d.push("Tidak ditemukan pergeseran warna ekstrim (chromatic aberration) yang merusak kualitas gambar."));const h=(i==null?void 0:i.selectedStyle)||"Natural Vibrant",k=`Hasil diagnosis colour grading menunjukkan gambar memiliki fondasi visual yang kuat. Ditemukan ${l.length} area penyesuaian tonal curve, suhu warna, dan palet warna untuk mencapai grade estetis yang harmonis dan optimal (Arah visual: ${h}).`,m=Za(i);return{visualConditionSummary:k,optimizationAreas:l,goodAspects:d,repairInstructions:m}}const g=(c,h)=>{s?c.some(k=>n.includes(k))&&l.push(h):l.push(h)};g(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),g(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),n.includes("tajam")||n.includes("buram")||n.includes("blur")||n.includes("fokus")||n.includes("kabur")?l.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):s||d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),n.includes("noise")||n.includes("bintik")||n.includes("grain")?l.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):s||d.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),n.includes("perspektif")||n.includes("miring")||n.includes("tilt")?l.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):n.includes("distorsi")||n.includes("lensa")||n.includes("barrel")?l.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):s||d.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),g(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),g(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(n.includes("pucat")||n.includes("kusam")||n.includes("tone")||!s&&!l.some(c=>c.recommendedCodes.includes("/naturaltone")))&&(s||l.length<8)&&l.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),g(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(n.includes("kualitas")||n.includes("detail tinggi")||n.includes("resolusi")||n.includes("definisi"))&&l.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),g(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),g(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),g(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),d.length===0&&(d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),d.push("Komposisi dan framing foto sudah proporsional."),d.push("Tidak ditemukan distorsi optik lensa yang mengganggu."));const u=`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${l.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,p=Xa(e);return{visualConditionSummary:u,optimizationAreas:l,goodAspects:d,repairInstructions:p}}}function oe(o){return!o||typeof o!="string"?0:o.trim().split(/\s+/).filter(Boolean).length}function Ve(o){if(!o||typeof o!="string")return 0;const a=o.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function Ye(o,a=[]){if(!o||a.length===0)return 0;const e=oe(o);if(e===0)return 0;const r=a.length;return Math.min(100,Math.round(r/e*100))}function qe(o){return!o||typeof o!="string"?"":o.trim()}function Je(o,a,e,r){const{status:t}=a;let i="status-unconfigured",n="Gemini: Belum diuji";return t===ua.CONNECTED?(i="status-connected",n="Gemini: Tersambung"):t===ua.FAILED&&(i="status-failed",n="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V3.7</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${o==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${o==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${o==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${o==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${o==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${o==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${o==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${o==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${o==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${o==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions" style="display: flex; align-items: center; gap: 0.5rem;">
          <a 
            href="./Prompt-Shorthand-Analyzer-v3.7-release.apk" 
            download="Prompt-Shorthand-Analyzer-v3.7-release.apk" 
            class="btn btn-primary btn-xs" 
            id="btn-download-apk" 
            style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 700; text-decoration: none; padding: 0.35rem 0.65rem;"
            title="Download file instalasi aplikasi Android APK V3.7"
          >
            📥 <span>Download APK</span>
          </a>
          <button type="button" class="status-badge ${i}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${n}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(s){s.querySelectorAll(".nav-item").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-tab");e&&e(g)})});const l=s.querySelector("#header-status-badge");l&&r&&l.addEventListener("click",()=>r())}}}const ee=[{id:"preset-a",label:"A. Realitas Seperti Foto Kamera",badge:"Camera Realism",prompt:"authentic camera-captured appearance, photorealistic, natural optical rendering",description:"Menghasilkan tampilan visual otentik seperti jepretan kamera asli dengan rendering optik natural."},{id:"preset-b",label:"B. Detail Sangat Nyata",badge:"Microtexture & Detail",prompt:"high resolving detail, realistic microtexture, fine natural details, lifelike surface textures",description:"Menonjolkan detail mikrotekstur resolusi tinggi dan tekstur permukaan alami yang hidup."},{id:"preset-c",label:"C. Pencahayaan dan Warna Alami",badge:"Natural Light & Color",prompt:"physically accurate lighting, natural color rendition, realistic shadow gradients, balanced dynamic range",description:"Pencahayaan akurat secara fisik dengan reproduksi warna alami, gradasi bayangan nyata, dan rentang dinamis seimbang."},{id:"preset-d",label:"D. Ketajaman Seperti Lensa Profesional",badge:"Pro Lens Optics",prompt:"precise focus, natural optical depth of field, realistic bokeh, crisp details without oversharpening",description:"Fokus presisi dengan depth of field optik alami, bokeh realistis, dan detail tajam tanpa oversharpening."}];function Qe(o){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${ee.map(a=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${a.id}" title="${a.description}">
      <span style="font-weight: 700; color: #93c5fd;">${a.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(a){a.querySelectorAll(".btn-preset-chip").forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("data-preset-id"),t=ee.find(i=>i.id===r);t&&o&&o(t.prompt)})})}}}function Xe({config:o,uploadedImage:a,onConfigChange:e,onResetGrading:r,batchImages:t=[],activeBatchIndex:i=0,onSelectBatchImage:n}){const s=o||{},l=s.mode||"AUTO",d=s.selectedStyle||"Natural Vibrant",g=typeof s.intensity=="number"?s.intensity:50,u=s.protections||{},p=s.custom||{},c=Ua.find(h=>h.name===d)||{category:"Target Visual",categoryIcon:"🎯"};return{html:`
    <div class="colour-grading-panel" id="colour-grading-panel" style="margin-top: 1rem; margin-bottom: 1.25rem;">
      <!-- FLOATING POPOVER TOOLTIP (Zero permanent layout space, follows hovered / focused Style) -->
      <div 
        id="cg-style-tooltip" 
        class="cg-style-tooltip" 
        role="tooltip" 
        aria-hidden="true" 
        style="display: none; position: fixed; z-index: 999999; max-width: 330px; background: rgba(15, 23, 42, 0.98); border: 1px solid #f472b6; border-radius: 6px; padding: 0.65rem 0.85rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), 0 0 15px rgba(236, 72, 153, 0.25); pointer-events: none; backdrop-filter: blur(8px); transition: opacity 0.12s ease; opacity: 0;"
      >
        <div id="cg-tooltip-title" style="font-weight: 700; color: #f472b6; font-size: 0.825rem; margin-bottom: 0.15rem;"></div>
        <div id="cg-tooltip-cat" style="font-size: 0.68rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.35rem;"></div>
        <div id="cg-tooltip-desc" style="font-size: 0.775rem; color: #f1f5f9; line-height: 1.45;"></div>
      </div>

      <!-- 1. SOURCE IMAGE PROTECTION BANNER (NON-GENERATIVE GUARANTEE) -->
      <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.85rem; font-size: 0.825rem; line-height: 1.5; color: #fce7f3; display: flex; align-items: flex-start; gap: 0.65rem;">
        <span style="font-size: 1.2rem; line-height: 1;">🛡️</span>
        <div>
          <strong style="color: #f472b6; font-size: 0.85rem; display: block; margin-bottom: 0.2rem;">
            FOTO ASLI ADALAH SOURCE OF TRUTH — ENHANCEMENT NON-DESTRUKTIF
          </strong>
          <span>Color Grading hanya memengaruhi karakteristik <strong>warna, tonal, kontras &amp; pencahayaan</strong>. Subjek, wajah, identitas, proporsi tubuh, pakaian, rambut, pose, objek, latar belakang, dan komposisi <strong>100% DIPERTAHANKAN UTUH tanpa regenerasi citra</strong>.</span>
        </div>
      </div>

      <!-- 2. ACTION & STATUS BAR (RESET COLOR GRADING & BATCH INDICATOR) -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.55rem 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.825rem; font-weight: 700; color: #f472b6; display: flex; align-items: center; gap: 0.35rem;">
            <span>🎨</span>
            <span>KONTROL PARAMETER AI COLOR GRADING</span>
          </span>
          ${a?`
            <span style="font-size: 0.725rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px;">
              📷 Foto Terpasang (Source of Truth)
            </span>
          `:""}
          ${l==="SELECT_STYLE"?`
            <span style="font-size: 0.725rem; color: #e2e8f0; background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.5rem; border-radius: 4px;">
              Target: <strong>${d}</strong> (${g}%)
            </span>
          `:""}
        </div>

        <!-- Reset Color Grading Button -->
        <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-reset-colour-grading" style="font-size: 0.725rem; padding: 0.25rem 0.65rem;" title="Kembalikan seluruh parameter grading ke kondisi awal (Foto Asli)">
          🔄 RESET COLOR GRADING
        </button>
      </div>

      <!-- 3. BATCH THUMBNAIL SELECTOR (JIKA MULTI-FOTO DIUNGGAH) -->
      ${t&&t.length>1?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">
            📚 Batch Processing (${t.length} Foto — Analisis &amp; Penyesuaian Adaptif Per-Foto):
          </span>
          <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;">
            ${t.map((h,k)=>`
              <button 
                type="button" 
                class="batch-thumb-btn ${k===i?"active":""}" 
                data-batch-idx="${k}" 
                style="border: 2px solid ${k===i?"#ec4899":"rgba(255,255,255,0.1)"}; background: transparent; padding: 2px; border-radius: 4px; cursor: pointer;"
                title="Pilih Foto ${k+1}"
              >
                <img src="${h.previewUrl}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 2px; display: block;" alt="Foto ${k+1}" />
              </button>
            `).join("")}
          </div>
        </div>
      `:""}

      <!-- 4. MODE SELECTOR (AUTO | SELECT STYLE | CUSTOM STYLE) -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
          <span>🎛️</span>
          <span>1. PILIHAN MODE COLOR GRADING:</span>
        </label>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem;">
          ${Ha.map(h=>`
            <button 
              type="button" 
              class="cg-mode-btn ${l===h.id?"active":""}" 
              data-cg-mode="${h.id}" 
              ${h.id==="CUSTOM_STYLE"?'data-style-name="Custom Style"':""}
              tabindex="0"
              style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid ${l===h.id?"#ec4899":"rgba(255, 255, 255, 0.1)"}; background: ${l===h.id?"rgba(236, 72, 153, 0.15)":"rgba(30, 41, 59, 0.4)"}; color: #f8fafc; cursor: pointer; transition: all 0.2s ease;"
            >
              <strong style="font-size: 0.825rem; color: ${l===h.id?"#f472b6":"#f1f5f9"}; margin-bottom: 0.2rem;">
                ${h.label}
              </strong>
              <small style="font-size: 0.72rem; color: #94a3b8; line-height: 1.35;">
                ${h.description}
              </small>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- 5. SELECT STYLE SECTION (JIKA MODE === 'SELECT_STYLE') -->
      ${l==="SELECT_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <label id="cg-style-label" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>2. TARGET VISUAL STYLE:</span>
            </label>
            <span style="font-size: 0.725rem; color: #f472b6; font-weight: 600;">
              Total ${Ua.length} Curated Styles
            </span>
          </div>

          <!-- CUSTOM DROPDOWN / LISTBOX WITH HOVER/FOCUS TOOLTIPS -->
          <div class="cg-custom-dropdown" id="cg-custom-dropdown" style="position: relative; width: 100%;">
            <!-- Trigger Button: Hanya menampilkan Style Name (Bersih, Tidak Memakan Ruang) -->
            <button 
              type="button" 
              id="cg-style-dropdown-btn" 
              class="cg-style-dropdown-btn" 
              aria-haspopup="listbox" 
              aria-expanded="false" 
              aria-labelledby="cg-style-label" 
              data-style-name="${d}"
              tabindex="0"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.35); color: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; font-size: 0.825rem; cursor: pointer; text-align: left; transition: all 0.2s ease;"
            >
              <span style="display: flex; align-items: center; gap: 0.45rem;">
                <span style="font-size: 0.95rem;">${c.categoryIcon||"🎯"}</span>
                <strong style="color: #fce7f3; font-size: 0.825rem;">${d}</strong>
                <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.25rem;">(${c.category||"Target Visual"})</span>
              </span>
              <span id="cg-dropdown-arrow" style="font-size: 0.75rem; color: #f472b6; transition: transform 0.2s ease;">▼</span>
            </button>

            <!-- Hidden Standard Select Element (Dukungan Kompatibilitas Form & Test) -->
            <select id="cg-style-select" style="display: none;" aria-hidden="true" tabindex="-1">
              ${Wa.map(h=>`
                <optgroup label="${h.icon} ${h.category}">
                  ${h.styles.map(k=>`
                    <option value="${k.name}" ${d===k.name?"selected":""}>
                      ${k.name}
                    </option>
                  `).join("")}
                </optgroup>
              `).join("")}
            </select>

            <!-- Custom Listbox Dropdown Menu (Grouped by Category) -->
            <div 
              id="cg-style-menu" 
              class="cg-style-menu" 
              role="listbox" 
              aria-labelledby="cg-style-label" 
              style="display: none; position: absolute; top: calc(100% + 4px); left: 0; right: 0; max-height: 290px; overflow-y: auto; background: #090d16; border: 1px solid rgba(236, 72, 153, 0.4); border-radius: 6px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85); z-index: 1000; padding: 0.35rem 0;"
            >
              <!-- Search Filter Input -->
              <div style="padding: 0.4rem 0.65rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; background: #090d16; z-index: 2;">
                <input 
                  type="text" 
                  id="cg-style-search" 
                  placeholder="🔍 Cari Style visual (misal: Film, Warm, Moody, Clean)..." 
                  style="width: 100%; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc; padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.775rem; outline: none;"
                />
              </div>

              <!-- Listbox Options Container -->
              <div id="cg-style-list-items">
                ${Wa.map(h=>`
                  <div class="cg-category-group" data-cat-name="${h.category}" style="padding: 0.25rem 0;">
                    <div style="padding: 0.25rem 0.75rem; font-size: 0.68rem; font-weight: 700; color: #f472b6; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.35rem; background: rgba(236, 72, 153, 0.06);">
                      <span>${h.icon}</span>
                      <span>${h.category}</span>
                    </div>
                    ${h.styles.map(k=>{const m=d===k.name;return`
                        <div 
                          class="cg-style-item ${m?"selected":""}" 
                          role="option" 
                          aria-selected="${m}" 
                          data-style-name="${k.name}" 
                          tabindex="0" 
                          style="padding: 0.45rem 0.85rem; font-size: 0.8rem; color: ${m?"#f472b6":"#e2e8f0"}; background: ${m?"rgba(236, 72, 153, 0.15)":"transparent"}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.15s ease;"
                        >
                          <span>${k.name}</span>
                          ${m?'<span style="font-size: 0.75rem; color: #f472b6; font-weight: 700;">✓</span>':""}
                        </div>
                      `}).join("")}
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <small style="color: #94a3b8; display: block; margin-top: 0.45rem; font-size: 0.725rem;">
            💡 <em>Arahkan kursor atau fokus keyboard ke nama Style untuk melihat deskripsi visual target.</em>
          </small>
        </div>
      `:""}

      <!-- 6. CUSTOM STYLE PARAMETERS (JIKA MODE === 'CUSTOM_STYLE') -->
      ${l==="CUSTOM_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚙️</span>
              <span>2. PARAMETER CUSTOM STYLE:</span>
            </label>
            <span 
              class="cg-custom-style-info"
              data-style-name="Custom Style" 
              tabindex="0"
              style="font-size: 0.725rem; color: #f472b6; cursor: help; border-bottom: 1px dashed rgba(244, 114, 182, 0.6); padding-bottom: 1px;"
              title="Arahkan kursor untuk info Custom Style"
            >
              ℹ️ Info Custom Style
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 0.85rem;">
            <!-- Warmth -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Warmth (Dingin / Hangat)</span>
                <span id="cg-val-warmth" style="color: #f472b6; font-weight: 600;">${p.warmth||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-warmth" min="-100" max="100" value="${p.warmth||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Tint -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Tint (Hijau / Magenta)</span>
                <span id="cg-val-tint" style="color: #f472b6; font-weight: 600;">${p.tint||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-tint" min="-100" max="100" value="${p.tint||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Contrast -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Contrast (Kontras)</span>
                <span id="cg-val-contrast" style="color: #f472b6; font-weight: 600;">${p.contrast||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-contrast" min="-100" max="100" value="${p.contrast||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Highlights -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Highlights</span>
                <span id="cg-val-highlights" style="color: #f472b6; font-weight: 600;">${p.highlights||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-highlights" min="-100" max="100" value="${p.highlights||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Shadows -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Shadows (Bayangan)</span>
                <span id="cg-val-shadows" style="color: #f472b6; font-weight: 600;">${p.shadows||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-shadows" min="-100" max="100" value="${p.shadows||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Vibrance -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Vibrance (Warna Cerdas)</span>
                <span id="cg-val-vibrance" style="color: #f472b6; font-weight: 600;">${p.vibrance||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-vibrance" min="-100" max="100" value="${p.vibrance||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Saturation -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Saturation (Saturasi)</span>
                <span id="cg-val-saturation" style="color: #f472b6; font-weight: 600;">${p.saturation||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-saturation" min="-100" max="100" value="${p.saturation||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Clarity -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Clarity (Mikro-Kontras)</span>
                <span id="cg-val-clarity" style="color: #f472b6; font-weight: 600;">${p.clarity||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-clarity" min="-100" max="100" value="${p.clarity||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>
          </div>

          <!-- Split Toning (Shadow Tone & Highlight Tone) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div>
              <label for="cg-custom-shadow-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Shadow Tone (Rona Bayangan):
              </label>
              <select id="cg-custom-shadow-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${Ie.map(h=>`
                  <option value="${h.value}" ${p.shadowTone===h.value?"selected":""}>${h.label}</option>
                `).join("")}
              </select>
            </div>
            <div>
              <label for="cg-custom-highlight-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Highlight Tone (Rona Highlight):
              </label>
              <select id="cg-custom-highlight-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${we.map(h=>`
                  <option value="${h.value}" ${p.highlightTone===h.value?"selected":""}>${h.label}</option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>
      `:""}

      <!-- 7. COLOR GRADING INTENSITY CONTROL -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label for="cg-intensity-range" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>⚡</span>
            <span>3. COLOR GRADING INTENSITY:</span>
          </label>
          <span id="cg-intensity-badge" style="font-size: 0.8rem; font-weight: 700; color: #f472b6; background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); padding: 0.15rem 0.55rem; border-radius: 4px;">
            ${g}%
          </span>
        </div>

        <input 
          type="range" 
          id="cg-intensity-range" 
          min="0" 
          max="100" 
          step="1" 
          value="${g}" 
          style="width: 100%; accent-color: #ec4899; margin-bottom: 0.5rem;" 
        />

        <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          ${Re.map(h=>`
            <button 
              type="button" 
              class="btn btn-xs ${g===h.value?"btn-primary":"btn-outline"}" 
              data-cg-intensity="${h.value}"
              style="font-size: 0.725rem; padding: 0.25rem 0.55rem;"
              title="${h.description}"
            >
              ${h.label}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- 8. INTELLIGENT PROTECTION SYSTEM -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>🛡️</span>
            <span>4. INTELLIGENT PROTECTIONS (Pelindung Kualitas Foto Asli):</span>
          </label>
          <span style="font-size: 0.725rem; color: #4ade80;">Semua Proteksi Aktif</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.45rem;">
          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-skin" ${u.skinToneProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Skin Tone Protection</strong> (Rona Kulit Alami)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-hl" ${u.highlightProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Highlight Protection</strong> (Anti-Blown/Clipping)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-sh" ${u.shadowProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Shadow Protection</strong> (Anti-Crushed Blacks)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-oversat" ${u.oversaturationProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Oversaturation Protection</strong> (Batas Gamut)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-clip" ${u.clippingProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Clipping Protection</strong> (Safe RGB 0-255)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-natcolor" ${u.naturalColorProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Natural Color Protection</strong> (Langit &amp; Daun)</span>
          </label>
        </div>
      </div>
    </div>
  `,bindEvents(h){const k=h.querySelector("#colour-grading-panel");if(!k)return;const m=k.querySelector("#cg-style-tooltip"),b=k.querySelector("#cg-tooltip-title"),T=k.querySelector("#cg-tooltip-cat"),v=k.querySelector("#cg-tooltip-desc"),f=(y,O)=>{if(!m||!y)return;const D=O||y.getAttribute("data-style-name");if(!D)return;const $=Ua.find(w=>w.name.toLowerCase()===D.toLowerCase())||{name:D,category:"Target Visual",categoryIcon:"🎯",description:"Arah visual colour grading adaptif."};b&&(b.textContent=$.name),T&&(T.textContent=`${$.categoryIcon||"🎯"} ${$.category||""}`),v&&(v.textContent=$.description),m.style.display="block",m.style.opacity="1",m.setAttribute("aria-hidden","false");const _=y.getBoundingClientRect(),V=m.getBoundingClientRect();let z=_.top+_.height/2-V.height/2,Y=_.right+12;Y+V.width>window.innerWidth-12&&(Y=_.left-V.width-12),Y<12&&(Y=Math.max(12,Math.min(window.innerWidth-V.width-12,_.left)),z=_.bottom+8),z<12&&(z=12),z+V.height>window.innerHeight-12&&(z=window.innerHeight-V.height-12),m.style.top=`${Math.round(z)}px`,m.style.left=`${Math.round(Y)}px`},A=()=>{m&&(m.style.opacity="0",m.style.display="none",m.setAttribute("aria-hidden","true"))},I=(y,O)=>{y&&(y.addEventListener("mouseenter",()=>f(y,O)),y.addEventListener("mouseleave",A),y.addEventListener("focus",()=>f(y,O)),y.addEventListener("blur",A))},E=k.querySelector("#cg-style-dropdown-btn"),R=k.querySelector("#cg-style-menu"),C=k.querySelector("#cg-dropdown-arrow"),N=k.querySelector("#cg-style-search"),P=k.querySelector("#cg-style-select");let S=!1;const M=()=>{R&&(S=!0,R.style.display="block",E&&E.setAttribute("aria-expanded","true"),C&&(C.style.transform="rotate(180deg)"),N&&(N.value="",H(""),setTimeout(()=>N.focus(),50)))},F=()=>{R&&(S=!1,R.style.display="none",E&&E.setAttribute("aria-expanded","false"),C&&(C.style.transform="rotate(0deg)"),A())},L=()=>{S?F():M()};function H(y){const O=(y||"").toLowerCase().trim();k.querySelectorAll(".cg-category-group").forEach(D=>{let $=!1;D.querySelectorAll(".cg-style-item").forEach(_=>{const V=(_.getAttribute("data-style-name")||"").toLowerCase();!O||V.includes(O)?(_.style.display="flex",$=!0):_.style.display="none"}),D.style.display=$?"block":"none"})}E&&(E.addEventListener("click",y=>{y.stopPropagation(),L()}),I(E,d),E.addEventListener("keydown",y=>{y.key==="ArrowDown"||y.key==="Enter"||y.key===" "?(y.preventDefault(),M()):y.key==="Escape"&&F()})),N&&(N.addEventListener("input",y=>{H(y.target.value)}),N.addEventListener("keydown",y=>{if(y.key==="Escape")F(),E&&E.focus();else if(y.key==="ArrowDown"){y.preventDefault();const O=k.querySelector('.cg-style-item:not([style*="display: none"])');O&&O.focus()}}));const x=y=>{var O;S&&!((O=k.querySelector("#cg-custom-dropdown"))!=null&&O.contains(y.target))&&F()};document.addEventListener("click",x),k.querySelectorAll(".cg-style-item").forEach(y=>{const O=y.getAttribute("data-style-name");I(y,O),y.addEventListener("click",()=>{e&&O&&e({...s,selectedStyle:O}),P&&(P.value=O),F(),E&&E.focus()}),y.addEventListener("keydown",D=>{if(D.key==="Enter"||D.key===" ")D.preventDefault(),y.click();else if(D.key==="Escape")D.preventDefault(),F(),E&&E.focus();else if(D.key==="ArrowDown"){D.preventDefault();const $=Array.from(k.querySelectorAll('.cg-style-item:not([style*="display: none"])')),_=$.indexOf(y);_>=0&&_<$.length-1&&$[_+1].focus()}else if(D.key==="ArrowUp"){D.preventDefault();const $=Array.from(k.querySelectorAll('.cg-style-item:not([style*="display: none"])')),_=$.indexOf(y);_>0?$[_-1].focus():N&&N.focus()}})}),P&&P.addEventListener("change",y=>{e&&e({...s,selectedStyle:y.target.value})});const Q=k.querySelector(".cg-custom-style-info");Q&&I(Q,"Custom Style");const ia=k.querySelector('.cg-mode-btn[data-cg-mode="CUSTOM_STYLE"]');ia&&I(ia,"Custom Style"),k.querySelectorAll(".cg-mode-btn").forEach(y=>{y.addEventListener("click",()=>{const O=y.getAttribute("data-cg-mode");e&&O!==l&&e({...s,mode:O})})});const na=k.querySelector("#cg-intensity-range");na&&na.addEventListener("input",y=>{const O=Number(y.target.value),D=k.querySelector("#cg-intensity-badge");D&&(D.textContent=`${O}%`),e&&e({...s,intensity:O})}),k.querySelectorAll("[data-cg-intensity]").forEach(y=>{y.addEventListener("click",()=>{const O=Number(y.getAttribute("data-cg-intensity"));e&&e({...s,intensity:O})})});const j=k.querySelector("#btn-reset-colour-grading");j&&j.addEventListener("click",()=>{r?r():e&&e({...s,mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}})}),["warmth","tint","contrast","highlights","shadows","saturation","vibrance","clarity"].forEach(y=>{const O=k.querySelector(`#cg-custom-${y}`);O&&O.addEventListener("input",D=>{const $=Number(D.target.value),_=k.querySelector(`#cg-val-${y}`);_&&(_.textContent=$),e&&e({...s,custom:{...s.custom,[y]:$}})})});const B=k.querySelector("#cg-custom-shadow-tone");B&&B.addEventListener("change",y=>{e&&e({...s,custom:{...s.custom,shadowTone:y.target.value}})});const X=k.querySelector("#cg-custom-highlight-tone");X&&X.addEventListener("change",y=>{e&&e({...s,custom:{...s.custom,highlightTone:y.target.value}})}),[{id:"#cg-prot-skin",prop:"skinToneProtection"},{id:"#cg-prot-hl",prop:"highlightProtection"},{id:"#cg-prot-sh",prop:"shadowProtection"},{id:"#cg-prot-oversat",prop:"oversaturationProtection"},{id:"#cg-prot-clip",prop:"clippingProtection"},{id:"#cg-prot-natcolor",prop:"naturalColorProtection"}].forEach(({id:y,prop:O})=>{const D=k.querySelector(y);D&&D.addEventListener("change",$=>{e&&e({...s,protections:{...s.protections,[O]:$.target.checked}})})}),k.querySelectorAll("[data-batch-idx]").forEach(y=>{y.addEventListener("click",()=>{const O=Number(y.getAttribute("data-batch-idx"));n&&n(O)})})}}}function Ze({currentValue:o="",onAnalyze:a,onReset:e,onClear:r,onSelectPreset:t,isAnalyzing:i=!1,isOnlineActive:n=!1,activeMode:s="ANALISA_PROMPT",onModeChange:l,uploadedImage:d=null,onImageSelected:g,onImageRemoved:u,selectedAspectRatio:p="auto",onAspectRatioChange:c,twoWorldsConfig:h=null,onTwoWorldsConfigChange:k,colourGradingConfig:m=null,onColourGradingConfigChange:b,onResetGrading:T,batchImages:v=[],activeBatchIndex:f=0,onSelectBatchImage:A}){var I;const E=Qe(t),R=s==="COLOUR_GRADING"?Xe({config:m||Pa,uploadedImage:d,onConfigChange:b,onResetGrading:T,batchImages:v,activeBatchIndex:f,onSelectBatchImage:A}):null,C=d?d.detectedAspectRatio||(d.width&&d.height?Ba(d.width,d.height):"1:1"):null;let N="💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik.";s==="BACKGROUND_ANALYSIS"?N="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk profil latar belakang &amp; acuan spasial penempatan subjek.":s==="TWO_WORLDS"?N="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk sintesis prompt 2 Dunia &amp; rekomendasi shorthand.":s==="IMAGE_TO_PROMPT"?N="💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.":s==="COLOUR_GRADING"&&d?N="💡 Mendiagnosis parameter warna, tone curve, saturasi &amp; merekomendasikan seluruh shorthand colour grading yang relevan tanpa batasan jumlah.":s==="SHORTHAND_IMPROVE"&&d&&(N="💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.");let P=n?"🌐 Analisis Prompt":"Analisis Prompt";return i?s==="BACKGROUND_ANALYSIS"?P="🏞️ Menganalisis Latar Belakang...":s==="TWO_WORLDS"?P="🌐 Menganalisis 2 Dunia...":s==="IMAGE_TO_PROMPT"?P="🔍 Menganalisis Gambar...":s==="COLOUR_GRADING"&&d?P="🎨 Mendiagnosis Colour Grading...":s==="SHORTHAND_IMPROVE"&&d?P="🛠️ Mendiagnosis Gambar...":s==="COLOUR_GRADING"?P="🎨 Menganalisis Colour Grading...":P=n?"Mencari Online...":"Menganalisis...":s==="BACKGROUND_ANALYSIS"?P="🏞️ Analisa Latar Belakang":s==="TWO_WORLDS"?P="🌐 Analisa 2 Dunia → Prompt":s==="IMAGE_TO_PROMPT"?P="🔍 Analisa Gambar → Prompt":s==="COLOUR_GRADING"&&d?P="🎨 Analisa Colour Grading Gambar":s==="COLOUR_GRADING"?P="🎨 Analisa Colour Grading":s==="SHORTHAND_IMPROVE"&&d?P="🛠️ Analisa Perbaikan Gambar":s==="SHORTHAND_IMPROVE"&&(P="🛠️ Analisa Shorthand &amp; Perbaikan"),{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          ${s!=="IMAGE_TO_PROMPT"&&s!=="TWO_WORLDS"&&s!=="BACKGROUND_ANALYSIS"?`
            <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
              Kosongkan
            </button>
          `:""}
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="analysis-mode-selector" id="mode-tabs-container">
        <button type="button" class="mode-tab-btn ${s==="ANALISA_PROMPT"?"active":""}" data-mode="ANALISA_PROMPT">
          <span>📝</span>
          <span>Analisa Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="IMAGE_TO_PROMPT"?"active":""}" data-mode="IMAGE_TO_PROMPT">
          <span>🔍</span>
          <span>Analisa Gambar → Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="BACKGROUND_ANALYSIS"?"active":""}" data-mode="BACKGROUND_ANALYSIS">
          <span>🏞️</span>
          <span>Analisa Latar Belakang/background</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="TWO_WORLDS"?"active":""}" data-mode="TWO_WORLDS">
          <span>🌐</span>
          <span>2 dunia</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="SHORTHAND_IMPROVE"?"active":""}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="COLOUR_GRADING"?"active":""}" data-mode="COLOUR_GRADING">
          <span>🎨</span>
          <span>colour grading</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${n?"banner-online-active":"banner-online-inactive"}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${n?`
            <div class="banner-content">
              <span class="status-pulse-dot"></span>
              <strong class="banner-title">🌐 Pencarian Online Shorthand: AKTIF</strong>
              <span class="banner-desc">Analisis terbuka &amp; tidak terbatas — Memetakan konsep, objek, aktivitas, gaya, kanvas/outpaint, atau istilah baru ke shorthand AI yang relevan.</span>
            </div>
          `:`
            <div class="banner-content">
              <span class="status-offline-dot">⚪</span>
              <strong class="banner-title">🖥️ Pencarian Online Shorthand: TIDAK AKTIF</strong>
              <span class="banner-desc">Berjalan dalam Mode Heuristik Lokal. Sambungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online AI terbuka tanpa batas.</span>
            </div>
          `}
        </div>
      </div>

      <!-- IMAGE UPLOAD SECTION (MODE 2, BACKGROUND, MODE 2 DUNIA, MODE 3 & MODE COLOUR GRADING) -->
      ${s==="IMAGE_TO_PROMPT"||s==="BACKGROUND_ANALYSIS"||s==="TWO_WORLDS"||s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" ${s==="COLOUR_GRADING"?"multiple":""} accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${d?`
            <div class="image-preview-card">
              <img src="${d.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${d.name||"reference-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${d.size?(d.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
                  <span style="color: ${s==="SHORTHAND_IMPROVE"?"#c084fc":s==="COLOUR_GRADING"?"#ec4899":s==="BACKGROUND_ANALYSIS"?"#10b981":"#38bdf8"};">
                    ${s==="SHORTHAND_IMPROVE"?"SOURCE OF TRUTH Diagnosis Perbaikan":s==="COLOUR_GRADING"?"SOURCE OF TRUTH Diagnosis Colour Grading":s==="BACKGROUND_ANALYSIS"?"SOURCE OF TRUTH Visual (Latar Belakang)":s==="TWO_WORLDS"?"SOURCE OF TRUTH Visual (2 Dunia)":"SOURCE OF TRUTH Visual"}
                  </span>
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                <button type="button" class="btn btn-outline btn-xs" id="btn-change-image" title="Ganti gambar dengan file lain">
                  🔄 Ganti Gambar
                </button>
                <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar">
                  ✕ Hapus Gambar
                </button>
              </div>
            </div>
          `:`
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">
                ${s==="COLOUR_GRADING"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; di-colour grade di sini, atau klik untuk memilih file":s==="SHORTHAND_IMPROVE"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file":s==="BACKGROUND_ANALYSIS"?"Tarik &amp; lepas gambar yang ingin dianalisis latar belakangnya di sini, atau klik untuk memilih file (Analisa Latar Belakang)":s==="TWO_WORLDS"?"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file (Mode 2 Dunia)":"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file"}
              </div>
              <div class="dropzone-hint">
                ${s==="COLOUR_GRADING"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis palet warna, tonal curve, temperature, kontras &amp; merekomendasikan shorthand colour grading (UNLIMITED)":s==="SHORTHAND_IMPROVE"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)":s==="BACKGROUND_ANALYSIS"?"Format yang didukung: JPG, PNG, WEBP (Fokus analisis mendalam pada latar belakang, dekorasi, pencahayaan &amp; hubungan spasial subjek)":s==="TWO_WORLDS"?"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual konsep 2 Dunia)":"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)"}
              </div>
            </div>
          `}
          <!-- ASPECT RATIO SELECTOR (V3.3.5) -->
          <div class="aspect-ratio-control-panel" id="aspect-ratio-control-panel">
            <div class="aspect-ratio-control-header">
              <div class="aspect-ratio-title">
                <span class="aspect-ratio-icon">📐</span>
                <span class="aspect-ratio-heading">Pilihan Rasio Aspek:</span>
                <span class="aspect-ratio-badge" id="aspect-ratio-badge">
                  ${p==="auto"||p==="Otomatis"||!p?C?`Otomatis (Asli: ${C})`:"Otomatis (Dimensi Asli)":`Target: ${p}`}
                </span>
              </div>
              <div class="aspect-ratio-hint">
                ${p==="auto"||p==="Otomatis"||!p?d?`Mendeteksi aspek rasio asli gambar (${d.width||"?"}×${d.height||"?"}px → ${C}). Proporsi subjek dipertahankan tanpa distorsi.`:"Mendeteksi rasio aspek otomatis dari dimensi asli gambar yang diunggah.":`Mengarahkan rasio target kanvas ke ${p} tanpa stretching atau perubahan proporsi subjek.`}
              </div>
            </div>
            <div class="aspect-ratio-btn-group" role="radiogroup" aria-label="Pilihan Rasio Aspek">
              ${["Otomatis","1:1","2:3","3:2","3:4","4:3","9:16","16:9"].map(S=>`
                  <button 
                    type="button" 
                    class="aspect-ratio-btn ${S==="Otomatis"&&(p==="auto"||p==="Otomatis"||!p)||p===S?"active":""}" 
                    data-ratio="${S}"
                    id="btn-aspect-${S.replace(":","-")}"
                    title="${S==="Otomatis"?"Deteksi otomatis dari dimensi asli gambar":`Pilih rasio target ${S}`}"
                  >
                    ${S==="Otomatis"?"🔄 Otomatis":S}
                  </button>
                `).join("")}
            </div>
          </div>
        </div>
      `:""}

      <!-- 2 DUNIA PARAMETER PANEL (V3.5 PATCH ONLY - KHUSUS TAB 2 DUNIA) -->
      ${s==="TWO_WORLDS"?`
        <div class="two-worlds-config-panel" id="two-worlds-config-panel">
          <div class="two-worlds-header">
            <div class="two-worlds-title">
              <span>🌐</span>
              <span>PARAMETER MODIFIKASI KHUSUS 2 DUNIA</span>
            </div>
            <span class="two-worlds-badge">SOURCE OF TRUTH V3.5</span>
          </div>

          <!-- 1. CUSTOM REQUEST -->
          <div class="two-worlds-field">
            <label class="two-worlds-label" for="tw-custom-request">
              <span>✍️</span>
              <span>1. CUSTOM REQUEST (Instruksi Tambahan)</span>
            </label>
            <div class="two-worlds-hint">
              Instruksi tambahan untuk memodifikasi <strong>PROMPT OPTIMAL</strong>. Karakter/subjek asli tetap dipertahankan utuh kecuali diminta secara eksplisit.
            </div>

            <!-- PROMPT TEMPLATES (Dropdown Pilihan Cepat Template) -->
            <div style="margin-top: 0.5rem; margin-bottom: 0.45rem;">
              <label class="two-worlds-label" for="tw-prompt-template" style="font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.25rem;">
                <span>📋</span>
                <span>PROMPT TEMPLATES:</span>
              </label>
              <select id="tw-prompt-template" class="two-worlds-select" style="font-size: 0.8rem; padding: 0.45rem 0.65rem;">
                ${Ka.map(S=>`
                  <option value="${S.id}">${S.label}</option>
                `).join("")}
              </select>
            </div>

            <textarea 
              id="tw-custom-request" 
              class="two-worlds-textarea" 
              rows="3" 
              placeholder="Contoh: Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."
            >${(h==null?void 0:h.customRequest)||""}</textarea>
          </div>

          <!-- DEMOGRAFI SUBJEK: JENIS KELAMIN, USIA, RAS/ETNIS -->
          <div class="two-worlds-grid-row">
            <!-- 2. JENIS KELAMIN SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-gender">
                <span>👤</span>
                <span>2. JENIS KELAMIN SUBYEK</span>
              </label>
              <select id="tw-gender" class="two-worlds-select">
                ${Te.map(S=>`
                  <option value="${S}" ${(h==null?void 0:h.gender)===S||!(h!=null&&h.gender)&&S.startsWith("Auto")?"selected":""}>${S}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Diterapkan pada subjek/karakter tambahan atau karakter yang diminta.</div>
            </div>

            <!-- 3. USIA KARAKTER -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-age">
                <span>🎂</span>
                <span>3. USIA KARAKTER</span>
              </label>
              <select id="tw-age" class="two-worlds-select">
                ${Ee.map(S=>`
                  <option value="${S}" ${(h==null?void 0:h.age)===S||!(h!=null&&h.age)&&S.startsWith("Auto")?"selected":""}>${S}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Pilihan Auto atau 1 s/d 50 tahun untuk karakter yang dibuat.</div>
            </div>

            <!-- 4. RAS / ETNIS -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-ethnicity">
                <span>🌍</span>
                <span>4. RAS / ETNIS</span>
              </label>
              <select id="tw-ethnicity" class="two-worlds-select">
                ${ie.map(S=>`
                  <option value="${S}" ${(h==null?void 0:h.ethnicity)===S||!(h!=null&&h.ethnicity)&&S.startsWith("Auto")?"selected":""}>${S}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Auto (Smart Detection) atau etnis spesifik karakter.</div>
            </div>
          </div>

          <!-- VISUAL STYLE: STYLE SUBYEK & ENVIRONMENT STYLE -->
          <div class="two-worlds-grid-row">
            <!-- 5. STYLE SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-subject-style">
                <span>🎨</span>
                <span>5. STYLE SUBYEK</span>
              </label>
              <select id="tw-subject-style" class="two-worlds-select">
                ${Fa.map(S=>`
                  <option value="${S}" ${(h==null?void 0:h.subjectStyle)===S||!(h!=null&&h.subjectStyle)&&S.startsWith("Auto")?"selected":""}>${S}</option>
                `).join("")}
                ${h!=null&&h.subjectStyle&&!Fa.includes(h.subjectStyle)?`
                  <option value="${h.subjectStyle}" selected>${h.subjectStyle}</option>
                `:""}
              </select>
              <input 
                type="text" 
                id="tw-custom-subject-style" 
                class="two-worlds-input" 
                placeholder="Ketik style subjek custom (misal: Neo-Renaissance Oil Painting)..." 
                value="${(h==null?void 0:h.customSubjectStyle)||""}" 
                style="display: ${(h==null?void 0:h.subjectStyle)==="Custom"?"block":"none"}; margin-top: 0.35rem;" 
              />
              <div class="two-worlds-hint">Hanya mengontrol tampilan visual, materialitas, rendering, dan tekstur subjek.</div>
            </div>

            <!-- 6. ENVIRONMENT STYLE -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-env-style">
                <span>🏞️</span>
                <span>6. ENVIRONMENT STYLE</span>
              </label>
              <select id="tw-env-style" class="two-worlds-select">
                ${Da.map(S=>`
                  <option value="${S.name}" ${(h==null?void 0:h.environmentStyle)===S.name||!(h!=null&&h.environmentStyle)&&S.name.startsWith("Auto")?"selected":""}>${S.name}</option>
                `).join("")}
                ${h!=null&&h.environmentStyle&&!Da.some(S=>S.name===h.environmentStyle)?`
                  <option value="${h.environmentStyle}" selected>${h.environmentStyle}</option>
                `:""}
              </select>
              <div class="two-worlds-desc-box" id="tw-env-desc">
                ${((I=Da.find(S=>S.name===((h==null?void 0:h.environmentStyle)||"Auto (Smart Detection)")))==null?void 0:I.description)||"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."}
              </div>
              <div class="two-worlds-hint">Mengontrol estetika latar belakang &amp; atmosfer. Subjek asli tetap dipertahankan.</div>
            </div>
          </div>
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${s==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${d?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: DIAGNOSTIC NOTICE -->
      ${s==="COLOUR_GRADING"?`
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #f472b6;">
          <strong>🎨 Mode Analisa Colour Grading:</strong> 
          ${d?"Gambar terpasang. Sistem akan mendiagnosis karakteristik warna (color balance, kurva kontras, shadow toning, highlight roll-off, saturasi, dll.) dan merekomendasikan shorthand colour grading profesional.":"Unggah gambar di atas untuk diagnosis karakter warna, kurva kontras, dan tone komprehensif, atau masukkan catatan preferensi colour grading di bawah."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: ADVANCED PANEL & PREVIEW (V3.6) -->
      ${s==="COLOUR_GRADING"&&R?R.html:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 / Colour Grading without image) -->
      ${s==="ANALISA_PROMPT"||(s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING")&&!d?`
        <div id="presets-container">
          ${E.html}
        </div>
      `:""}

      <!-- Textarea Input (Hanya untuk Mode 1, Mode 3, dan Colour Grading) -->
      ${s!=="IMAGE_TO_PROMPT"&&s!=="TWO_WORLDS"&&s!=="BACKGROUND_ANALYSIS"?`
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${(s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING")&&d?s==="COLOUR_GRADING"?"B. Catatan Colour Grading (Opsional / Preferensi Warna):":"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${(s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING")&&d?s==="COLOUR_GRADING"?"Ketik preferensi atau catatan colour grading yang diinginkan (opsional, misal: tone sinematik hangat, teal and orange, moody film grain, muted shadows)...":"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
          >${o||""}</textarea>
        </div>
      `:""}

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${N}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${i?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${P}
        </button>
      </div>
    </section>
  `,bindEvents(S){s==="COLOUR_GRADING"&&R&&R.bindEvents(S),(s==="ANALISA_PROMPT"||(s==="SHORTHAND_IMPROVE"||s==="COLOUR_GRADING")&&!d)&&E.bindEvents(S);const M=S.querySelector("#prompt-textarea"),F=S.querySelector("#btn-run-analysis"),L=S.querySelector("#btn-clear-prompt"),H=S.querySelector("#btn-reset-app");S.querySelectorAll(".mode-tab-btn").forEach(j=>{j.addEventListener("click",()=>{const B=j.getAttribute("data-mode");l&&B!==s&&l(B)})});const x=S.querySelector("#image-dropzone"),Q=S.querySelector("#image-file-input"),ia=S.querySelector("#btn-change-image"),na=S.querySelector("#btn-remove-image");if(Q){let j=function(y){return new Promise(O=>{if(!y)return O(null);const D=y.type&&y.type.startsWith("image/"),$=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(y.name||"");if(!D&&!$)return O(null);const _=new FileReader;_.onload=V=>{const z=V.target.result,Y=new Image;Y.onload=()=>{const w=Y.naturalWidth||Y.width||800,G=Y.naturalHeight||Y.height||800;let oa=z,ba=null,ha=null;try{let aa=w,da=G;if(aa>1280||da>1280){const U=Math.min(1280/aa,1280/da);aa=Math.round(aa*U),da=Math.round(da*U)}const sa=document.createElement("canvas");sa.width=aa,sa.height=da,sa.getContext("2d").drawImage(Y,0,0,aa,da),ba=za(sa,{filename:y.name,targetAspectRatio:p}),s==="COLOUR_GRADING"&&(ha=Oe(sa)),oa=sa.toDataURL("image/jpeg",.88)}catch(aa){console.warn("Canvas processing fallback:",aa),oa=z,ba=za(null,{filename:y.name,targetAspectRatio:p})}const ga=Ba(w,G);O({file:y,name:y.name,size:y.size,type:"image/jpeg",base64:oa,previewUrl:oa,width:w,height:G,aspectRatio:ga,detectedAspectRatio:ga,visualTelemetry:ba,colorTelemetry:ha})},Y.onerror=()=>{O({file:y,name:y.name,size:y.size,type:"image/jpeg",base64:z,previewUrl:z,width:0,height:0,visualTelemetry:null,colorTelemetry:null})},Y.src=z},_.onerror=()=>O(null),_.readAsDataURL(y)})};x&&(x.addEventListener("click",()=>{Q.click()}),x.addEventListener("dragover",y=>{y.preventDefault(),x.classList.add("dragover")}),x.addEventListener("dragleave",()=>{x.classList.remove("dragover")}),x.addEventListener("drop",y=>{y.preventDefault(),x.classList.remove("dragover"),y.dataTransfer.files&&y.dataTransfer.files.length>0&&(s==="COLOUR_GRADING"&&y.dataTransfer.files.length>1?B(Array.from(y.dataTransfer.files)):X(y.dataTransfer.files[0]))})),ia&&ia.addEventListener("click",()=>{Q.click()}),Q.addEventListener("change",()=>{Q.files&&Q.files.length>0&&(s==="COLOUR_GRADING"&&Q.files.length>1?B(Array.from(Q.files)):X(Q.files[0]),Q.value="")});async function B(y){const O=y.filter($=>{const _=$.type&&$.type.startsWith("image/"),V=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test($.name||"");return _||V});if(O.length===0){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const D=[];for(const $ of O){const _=await j($);_&&D.push(_)}D.length>0&&g&&g(D[0],D)}async function X(y){if(!y)return;const O=y.type&&y.type.startsWith("image/"),D=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(y.name||"");if(!O&&!D){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const $=await j(y);$&&g&&g($,[$])}}if(na&&na.addEventListener("click",()=>{u&&u()}),S.querySelectorAll(".aspect-ratio-btn").forEach(j=>{j.addEventListener("click",B=>{B.preventDefault();const X=j.getAttribute("data-ratio");c&&c(X)})}),F&&F.addEventListener("click",()=>{if(s==="IMAGE_TO_PROMPT"||s==="TWO_WORLDS"||s==="BACKGROUND_ANALYSIS"){if(!d){Q&&Q.click();return}a&&a("");return}const j=M?M.value:"";a&&a(j)}),L&&L.addEventListener("click",()=>{M&&(M.value=""),r&&r()}),H&&H.addEventListener("click",()=>{e&&e()}),M&&M.addEventListener("keydown",j=>{(j.ctrlKey||j.metaKey)&&j.key==="Enter"&&(j.preventDefault(),a&&a(M.value))}),s==="TWO_WORLDS"){const j=S.querySelector("#tw-prompt-template"),B=S.querySelector("#tw-custom-request"),X=S.querySelector("#tw-gender"),y=S.querySelector("#tw-age"),O=S.querySelector("#tw-ethnicity"),D=S.querySelector("#tw-subject-style"),$=S.querySelector("#tw-custom-subject-style"),_=S.querySelector("#tw-env-style"),V=S.querySelector("#tw-env-desc"),z=(Y=null)=>{k&&k({customRequest:B?B.value:"",gender:X?X.value:"Auto (Smart Detection) mengikuti gambar unggahan",age:y?y.value:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:O?O.value:"Auto (Smart Detection)",subjectStyle:D?D.value:"Auto (Smart Detection)",customSubjectStyle:$?$.value:"",environmentStyle:_?_.value:"Auto (Smart Detection)"},Y)};j&&j.addEventListener("change",()=>{const Y=j.value,w=Ka.find(G=>G.id===Y);w&&w.id!=="none"&&w.text&&B&&(B.value=w.text,z("customRequest"))}),B&&B.addEventListener("input",()=>{if(j&&j.value!=="none"){const Y=Ka.find(w=>w.id===j.value);Y&&B.value!==Y.text&&(j.value="none")}z("customRequest")}),X&&X.addEventListener("change",()=>z("gender")),y&&y.addEventListener("change",()=>z("age")),O&&O.addEventListener("change",()=>z("ethnicity")),D&&D.addEventListener("change",()=>{const Y=D.value==="Custom";$&&($.style.display=Y?"block":"none",Y&&$.focus()),z("subjectStyle")}),$&&$.addEventListener("input",()=>z("customSubjectStyle")),_&&_.addEventListener("change",()=>{const Y=_.value,w=Da.find(G=>G.name===Y);V&&(V.textContent=w?w.description:""),z("environmentStyle")})}}}}function at(o=[],a,e="ANALISA_PROMPT"){const r=o&&o.length>0,t=e==="IMAGE_TO_PROMPT"?"D":"G",i=r?o.map(n=>{const s=n.type==="EDIT_VS_LOCK"||n.shorthandA&&n.shorthandA.includes("lock"),l=s?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${n.shorthandB} (Hapus ${n.shorthandA})`,d=s?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${n.shorthandA} (Hapus ${n.shorthandB})`,g=n.suggestion||et(n);return`
    <div class="conflict-banner" data-conflict-id="${n.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${n.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${n.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${n.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${n.instructionA||n.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${n.instructionB||n.shorthandB}"</em>
        </span>
      </div>

      <!-- SARAN SOLUSI KONFLIK -->
      <div class="conflict-suggestion-box">
        <div class="conflict-suggestion-header">
          <svg class="icon-sm" viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle;"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
          <span>💡 SARAN SOLUSI:</span>
        </div>
        <div class="conflict-suggestion-text">
          ${g}
        </div>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${n.id}">
          ${l}
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${n.id}">
          ${d}
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${n.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `}).join(""):"";return{html:`
    <!-- CARD SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${r?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">${t}</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${r?"badge-wajib":"badge-neutral"}">
          ${r?`${o.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${r?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${i}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik shorthand. Seluruh instruksi dan elemen visual konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(n){n.querySelectorAll(".btn-resolve").forEach(s=>{s.addEventListener("click",()=>{const l=s.getAttribute("data-action"),d=s.getAttribute("data-conflict-id");a&&a(d,l)})})}}}function et(o){if(o.suggestion)return o.suggestion;const a=o.shorthandA||"",e=o.shorthandB||"";if(o.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const r=a.includes("lock")?a:e,t=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${r}) dan terapkan instruksi ubah (${t}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${r}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${o.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function tt({installedShorthands:o=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:r}){const t=o.length>0?o.map(i=>`
        <span class="shorthand-chip" data-code="${i}">
          <span>${i}</span>
          <button type="button" class="chip-remove-btn" data-code="${i}" title="Hapus ${i}">&times;</button>
        </span>
      `).join(""):'<span style="font-size: 0.8rem; color: var(--text-dim); font-style: italic;">Belum ada shorthand terpasang</span>';return{html:`
    <div class="installed-shorthands-bar">
      <div class="installed-title-row">
        <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.04em;">
          Shorthand Terpasang:
        </span>

        <!-- Add shorthand selector from catalog -->
        <div class="add-shorthand-controls">
          <select id="select-catalog-shorthand" class="select-input">
            <option value="">-- Pilih Shorthand dari Catalog --</option>
            ${a.filter(i=>!o.includes(i.code)).map(i=>`
      <option value="${i.code}">${i.code} - ${i.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${t}
      </div>
    </div>
  `,bindEvents(i){i.querySelectorAll(".chip-remove-btn").forEach(l=>{l.addEventListener("click",d=>{d.stopPropagation();const g=l.getAttribute("data-code");e&&e(g)})});const n=i.querySelector("#btn-add-shorthand"),s=i.querySelector("#select-catalog-shorthand");n&&s&&n.addEventListener("click",()=>{const l=s.value;l&&r&&r(l)})}}}function nt({optimalPrompt:o="",installedShorthands:a=[],catalog:e=[],isOnlineActive:r=!1,isEnriching:t=!1,onCopyPrompt:i,onEnrichPrompt:n,onRemoveShorthand:s,onAddShorthand:l}){const d=tt({installedShorthands:a,catalog:e,onRemoveShorthand:s,onAddShorthand:l}),g=oe(o),u=Ve(o);return Ye(o,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${g} kata &bull; ~${u} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!r||t||!o?"disabled":""}
            title="${r?o?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
          >
            ${t?"⏳ MEMPERKAYA...":"✨ PERKAYA DENGAN AI"}
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${o||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${d.html}
    </section>
  `,bindEvents(p){d.bindEvents(p);const c=p.querySelector("#btn-copy-main-prompt");c&&c.addEventListener("click",()=>{i&&i(o)});const h=p.querySelector("#btn-enrich-ai");h&&h.addEventListener("click",()=>{n&&!t&&r&&o&&n()})}}}function it(o){const{primaryAction:a="-",primaryTarget:e="-",summary:r="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:t="-",category:i="-"}=o||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${r}</p>
      </div>

      <div class="intent-grid">
        <div class="intent-meta-card">
          <span class="intent-meta-label">INTENT</span>
          <span class="intent-meta-value">${a}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">TARGET AREA</span>
          <span class="intent-meta-value">${e}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">KATEGORI</span>
          <span class="intent-meta-value">${i}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${t}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function rt(o=[]){const a=o.length>0?o.map(e=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${e.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${e.label}</span>
              ${e.shorthand?`<span class="badge badge-blue font-mono">${e.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${e.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${o.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function st(o=[],a=[]){const e=o.length>0?o.map(r=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${r.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${r.label}</span>
              ${r.shorthand?`<span class="badge badge-wajib font-mono">${r.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${r.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${o.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function ot(o){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:r=""}=o||{};return{html:`
    <section class="panel analyzer-card" id="card-transformation">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">D</span>
          <h2>TRANSFORMASI VISUAL FROM &rarr; TO</h2>
        </div>
      </div>

      <div class="transform-flow-card">
        <!-- FROM BOX -->
        <div class="transform-box">
          <span class="transform-box-label">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            KONDISI AWAL (FROM)
          </span>
          <p class="transform-box-content">${a}</p>
        </div>

        <!-- ARROW ICON -->
        <div class="transform-arrow-box">
          <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </div>

        <!-- TO BOX -->
        <div class="transform-box" style="border-left: 3px solid var(--accent-blue);">
          <span class="transform-box-label" style="color: #60a5fa;">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            KONDISI TARGET (TO)
          </span>
          <p class="transform-box-content">${e}</p>
        </div>
      </div>

      ${r?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${r}</p>`:""}
    </section>
  `,bindEvents(){}}}function lt({primaryShorthands:o=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:r=[],activeMode:t="ANALISA_PROMPT",onToggleShorthand:i}){const n=t==="IMAGE_TO_PROMPT",s=n?"A":"E",l=n?"B":"F",d=o.length>0?o:e.filter(c=>c.isPrimary!==!1&&c.priority==="WAJIB"),g=a.length>0?a:e.filter(c=>c.isPrimary===!1||c.priority!=="WAJIB"),u=d.length>0?d.map(c=>{var h,k,m;const b=r.includes(c.code),T=c.equivalentTo||((h=c.item)==null?void 0:h.equivalentTo)||[],v=c.functionGroup||((k=c.item)==null?void 0:k.functionGroup)||c.category;return`
          <div class="rec-card primary-rec-card ${b?"rec-card-active":""}" data-code="${c.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${c.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                  ${c.source==="ONLINE"||c.isOnline?'<span class="badge badge-online">🌐 ONLINE</span>':""}
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${v}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${c.source==="ONLINE"||c.isOnline?"ONLINE":((m=c.item)==null?void 0:m.status)||"CORE"}</span></div>
                ${T.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${T.map(f=>`<span class="alias-tag font-mono">${f}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${b?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${b?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${b?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${b?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${b?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',p=g.length>0?g.map(c=>{var h;const k=r.includes(c.code),m=c.equivalentTo||((h=c.item)==null?void 0:h.equivalentTo)||[],b=c.relationship||"CONTEXTUAL",T=c.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${k?"rec-card-active":""}" data-code="${c.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${c.code}" 
                    ${k?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${c.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${b}</span>
                  ${c.source==="ONLINE"||c.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${T}" style="font-size: 0.675rem;">${c.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${b}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${c.source==="ONLINE"||c.isOnline?"ONLINE":c.source||"CORE"}</span></div>
                ${m.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${m.map(v=>`<span class="alias-tag font-mono">${v}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${k?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${k?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${k?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${k?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${k?"Batal Centang":"+ Centang & Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand berhubungan yang relevan.</div>';return{html:`
    <!-- CARD: SHORTHAND UTAMA (PRIMARY SHORTHAND) -->
    <section class="panel analyzer-card" id="card-primary-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${s}</span>
          <h2>SHORTHAND UTAMA (PRIMARY SHORTHAND)</h2>
        </div>
        <span class="badge badge-blue">${d.length} Aktif Otomatis</span>
      </div>

      ${d.length===0&&g.length===0?`
        <div class="empty-recs-notice" style="padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); color: #93c5fd; font-size: 0.85rem; margin-bottom: 0.85rem;">
          ℹ️ Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.
        </div>
      `:""}

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${u}
      </div>
    </section>

    <!-- CARD: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${l}</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${g.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${p}
      </div>
    </section>
  `,bindEvents(c){c.querySelectorAll(".btn-toggle-rec").forEach(h=>{h.addEventListener("click",k=>{k.stopPropagation();const m=h.getAttribute("data-code");i&&i(m)})}),c.querySelectorAll(".related-checkbox").forEach(h=>{h.addEventListener("change",k=>{k.stopPropagation();const m=h.getAttribute("data-code");i&&i(m)})})}}}function dt(o=[],a=[],e){const r=o.length>0?o.map(t=>{const i=a.includes(t.code),n=t.equivalentTo||[],s=t.functionGroup||t.category;return`
      <div class="rec-card similar-rec-card ${i?"rec-card-active":""}" data-code="${t.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${t.code}" 
                ${i?"checked":""} 
                style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #0ea5e9;"
              />
              <span class="rec-code" style="color: #38bdf8; font-size: 1rem; font-weight: 800;">${t.code}</span>
            </label>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <span class="badge badge-blue" style="font-size: 0.675rem; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); color: #38bdf8;">ALTERNATIF</span>
              <span class="badge badge-neutral" style="font-size: 0.7rem;">${t.category}</span>
            </div>
          </div>

          <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
            <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${t.name}</span></div>
            <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${t.target||"Visual"}</span></div>
            <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #38bdf8;">${s}</span></div>
            <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${t.reason}</span></div>
            ${n.length>0?`
              <div style="margin-top: 0.2rem;">
                <strong style="color: var(--text-muted);">Alias Setara:</strong>
                ${n.map(l=>`<span class="alias-tag font-mono">${l}</span>`).join(" ")}
              </div>
            `:""}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${i?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
            ${i?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
          </span>
          <button 
            type="button" 
            class="btn ${i?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
            data-code="${t.code}"
            title="${i?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
          >
            ${i?"Batal Centang":"+ Centang & Pasang"}
          </button>
        </div>
      </div>
    `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand alternatif tambahan yang terdeteksi.</div>';return{html:`
    <!-- CARD C: SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND) -->
    <section class="panel analyzer-card" id="card-similar-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: #0ea5e9; color: #fff;">C</span>
          <h2>SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND)</h2>
        </div>
        <span class="badge badge-neutral">${o.length} Alternatif</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Shorthand alternatif atau sinonim yang memiliki kesamaan fungsi/kategori dengan shorthand utama atau pendukung. Nonaktif secara default <strong>[ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${r}
      </div>
    </section>
  `,bindEvents(t){t&&(t.querySelectorAll(".similar-checkbox").forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const s=i.getAttribute("data-code");e&&e(s)})}),t.querySelectorAll("#card-similar-shorthands .btn-toggle-rec").forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation();const s=i.getAttribute("data-code");e&&e(s)})}))}}}function ut(o=[],a="ANALISA_PROMPT"){const e=o.length,r=a==="IMAGE_TO_PROMPT"?"E":"H",t=e>0?o.map(i=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${i.code}</span>
            <span class="exclusion-target">&bull; ${i.target}</span>
          </div>
          <p class="exclusion-reason">
            ${i.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header exclusions-toggle-header" id="header-exclusions" role="button" tabindex="0" title="Klik untuk menampilkan atau menyembunyikan daftar pengecualian">
        <div class="card-title">
          <span class="card-step-badge">${r}</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <div class="exclusions-header-actions" style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="badge badge-neutral">${e} Dikecualikan</span>
          <button type="button" class="btn btn-secondary btn-xs btn-toggle-exclusions" id="btn-toggle-exclusions" aria-expanded="false" title="Tampilkan / Sembunyikan daftar">
            <svg class="icon-sm icon-eye" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          </button>
        </div>
      </div>

      <!-- DEFAULT HIDE: Konten tersembunyi secara default agar tidak mengambil ruang tampilan utama -->
      <div class="exclusions-content" id="exclusions-content" style="display: none;">
        <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0.75rem 0 0.85rem 0;">
          Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
        </p>

        <div class="exclusions-grid">
          ${t}
        </div>
      </div>
    </section>
  `,bindEvents(i){if(!i)return;const n=i.querySelector("#btn-toggle-exclusions"),s=i.querySelector("#exclusions-content"),l=i.querySelector("#header-exclusions");if(!n||!s)return;const d=g=>{g&&(g.preventDefault(),g.stopPropagation()),s.style.display==="none"||!s.style.display?(s.style.display="block",n.setAttribute("aria-expanded","true"),n.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,n.classList.remove("btn-secondary"),n.classList.add("btn-outline")):(s.style.display="none",n.setAttribute("aria-expanded","false"),n.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,n.classList.remove("btn-outline"),n.classList.add("btn-secondary"))};n.addEventListener("click",d),l&&(l.addEventListener("click",g=>{g.target.closest("#btn-toggle-exclusions")||d(g)}),l.addEventListener("keydown",g=>{if(g.key==="Enter"||g.key===" "){if(g.target.closest("#btn-toggle-exclusions"))return;d(g)}}))}}}function ct(o={}){var a,e;const r=(o==null?void 0:o.analysisResult)||o,{onCopyMood:t,onCopyPhotographyStyle:i,onCopySubjectPlacement:n,onCopyOutfit:s,onCopyBackgroundElements:l,onCopyCompositionSpatial:d,onCopyOptimalPrompt:g,onEditOptimalPrompt:u,onRegenerateOptimalPrompt:p,onCopyBackgroundProfile:c,onCopyPlacementProfile:h,onCopyFullReport:k,onCopyGeneratedPrompt:m}=(o!=null&&o.analysisResult,o||{}),b=(r==null?void 0:r.backgroundData)||r||{},T=(r==null?void 0:r.backgroundProfile)||b.backgroundProfile||(r==null?void 0:r.generatedPrompt)||"",v=(r==null?void 0:r.placementProfile)||b.placementProfile||((a=b.subjectPlacement)==null?void 0:a.spatialSummary)||"",f=(r==null?void 0:r.optimalPrompt)||b.optimalPrompt||"",A=b.suasanaMood||b.photoMood||{},I=b.gayaFotografi||{},E=b.hubunganSubjekLatar||b.subjectPlacement||{},R=b.referensiOutfitSubjek||{},C=b.elemenBackground||{},N=b.komposisiSpatial||b.structureAndComposition||{},P=A.summary||A.atmosphere||"Suasana dan mood latar belakang sedang dianalisis...",S=I.summary||"Karakteristik gaya fotografi sedang dianalisis...",M=E.spatialSummary||v||"Subjek berada di tengah frame pada area middle ground dengan elemen latar belakang membingkai secara alami.",F=R.summary||"Referensi pakaian subjek sedang dianalisis...",L=N.summary||"Struktur komposisi ruang sedang dianalisis...",H=b.spaceAndComposition||{},x=b.visualLayers||{},Q=b.colorAndMaterial||{},ia=b.backgroundLighting||{},na=Array.isArray(b.aspects)?b.aspects:Array.isArray(r==null?void 0:r.aspects)?r.aspects:[];return Array.isArray(b.identifiedElements)&&b.identifiedElements,{html:`
    <!-- CARD 1: HASIL ANALISIS LATAR BELAKANG -->
    <section class="panel analyzer-card card-background-analysis" id="card-background-analysis" style="border-left: 3px solid #10b981;">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #10b981;"><path fill="currentColor" d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>
          <h2 style="color: #10b981;">HASIL ANALISIS LATAR BELAKANG</h2>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
          <span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🏞️ Analisa Latar Belakang/background</span>
          ${(r==null?void 0:r.source)==="GEMINI_AI"?`<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🌐 Vision AI Aktif (${((e=r.imageInfo)==null?void 0:e.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-emerald" style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981;">🤖 Source of Truth Latar Belakang</span>'}
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
              ${P}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-mood" style="color: #c084fc; border-color: rgba(168, 85, 247, 0.4); flex-shrink: 0;" title="Salin ringkasan Suasana / Mood">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #c084fc;">Atmosphere:</strong> <span style="color: #cbd5e1;">${A.atmosphere||"-"}</span></div>
            <div><strong style="color: #c084fc;">Mood:</strong> <span style="color: #cbd5e1;">${A.mood||"-"}</span></div>
            <div><strong style="color: #c084fc;">Emotional Tone:</strong> <span style="color: #cbd5e1;">${A.emotionalTone||A.mood||"-"}</span></div>
            <div><strong style="color: #c084fc;">Visual Temperature:</strong> <span style="color: #cbd5e1;">${A.visualTemperature||"-"}</span></div>
            <div><strong style="color: #c084fc;">Formalitas:</strong> <span style="color: #cbd5e1;">${A.formality||"-"}</span></div>
            <div><strong style="color: #c084fc;">Ambience:</strong> <span style="color: #cbd5e1;">${A.overallAmbience||"-"}</span></div>
            <div><strong style="color: #c084fc;">Sophistication:</strong> <span style="color: #cbd5e1;">${A.sophistication||"High / Elegant"}</span></div>
            <div><strong style="color: #c084fc;">Karakter:</strong> <span style="color: #cbd5e1;">${A.characterType||"-"}</span></div>
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
              ${S}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-photo-style" style="color: #60a5fa; border-color: rgba(59, 130, 246, 0.4); flex-shrink: 0;" title="Salin ringkasan Gaya Fotografi">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #60a5fa;">Photography Style:</strong> <span style="color: #cbd5e1;">${I.photographyStyle||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Genre:</strong> <span style="color: #cbd5e1;">${I.genre||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Perspektif Kamera:</strong> <span style="color: #cbd5e1;">${I.cameraPerspective||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Ketinggian Kamera:</strong> <span style="color: #cbd5e1;">${I.cameraHeight||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Lensa:</strong> <span style="color: #cbd5e1;">${I.focalLengthImpression||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Framing:</strong> <span style="color: #cbd5e1;">${I.framing||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Depth of Field:</strong> <span style="color: #cbd5e1;">${I.depthOfField||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Pencahayaan:</strong> <span style="color: #cbd5e1;">${I.lightingStyle||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Kelembutan Cahaya:</strong> <span style="color: #cbd5e1;">${I.lightingSoftness||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Karakter Bayangan:</strong> <span style="color: #cbd5e1;">${I.shadowCharacter||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Realisme:</strong> <span style="color: #cbd5e1;">${I.realism||"-"}</span></div>
            <div><strong style="color: #60a5fa;">Gaya Rendering:</strong> <span style="color: #cbd5e1;">${I.renderingStyle||"-"}</span></div>
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
              ${M}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-subject-placement" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); flex-shrink: 0;" title="Salin ringkasan Hubungan Subjek & Latar">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #38bdf8;">Posisi Subjek:</strong> <span style="color: #cbd5e1;">${E.subjectPlacementInFrame||E.horizontalPos||"Tengah (Center)"}</span></div>
            <div><strong style="color: #38bdf8;">Posisi Relatif ke BG:</strong> <span style="color: #cbd5e1;">${E.relativePositionToBg||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Jarak ke Background:</strong> <span style="color: #cbd5e1;">${E.distanceFromBg||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Skala Subjek:</strong> <span style="color: #cbd5e1;">${E.scaleToSpace||E.scale||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Bidang Kedalaman:</strong> <span style="color: #cbd5e1;">${E.depthPlane||E.depthPosition||"Midground"}</span></div>
            <div><strong style="color: #38bdf8;">Separasi Kedalaman:</strong> <span style="color: #cbd5e1;">${E.depthRelationship||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Framing:</strong> <span style="color: #cbd5e1;">${E.framingRelationship||E.framing||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Negative Space:</strong> <span style="color: #cbd5e1;">${E.negativeSpace||E.negativeSpaceAround||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Keseimbangan Visual:</strong> <span style="color: #cbd5e1;">${E.visualBalance||E.compositionBalance||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Hubungan Perspektif:</strong> <span style="color: #cbd5e1;">${E.perspectiveRelationship||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Orientasi Subjek:</strong> <span style="color: #cbd5e1;">${E.orientation||"-"}</span></div>
            <div><strong style="color: #38bdf8;">Pencahayaan Relasi:</strong> <span style="color: #cbd5e1;">${E.lightingRelationship||"-"}</span></div>
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
              ${F}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-outfit" style="color: #facc15; border-color: rgba(234, 179, 8, 0.4); flex-shrink: 0;" title="Salin ringkasan Referensi Outfit Subjek">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #facc15;">Jenis Pakaian:</strong> <span style="color: #cbd5e1;">${R.clothingType||"-"}</span></div>
            <div><strong style="color: #facc15;">Gaya Busana:</strong> <span style="color: #cbd5e1;">${R.garmentStyle||"-"}</span></div>
            <div><strong style="color: #facc15;">Warna Utama:</strong> <span style="color: #cbd5e1;">${R.primaryColor||"-"}</span></div>
            <div><strong style="color: #facc15;">Warna Sekunder:</strong> <span style="color: #cbd5e1;">${R.secondaryColor||"-"}</span></div>
            <div><strong style="color: #facc15;">Material:</strong> <span style="color: #cbd5e1;">${R.material||"-"}</span></div>
            <div><strong style="color: #facc15;">Tekstur:</strong> <span style="color: #cbd5e1;">${R.texture||"-"}</span></div>
            <div><strong style="color: #facc15;">Pola / Pattern:</strong> <span style="color: #cbd5e1;">${R.pattern||"-"}</span></div>
            <div><strong style="color: #facc15;">Potongan (Cut):</strong> <span style="color: #cbd5e1;">${R.cut||"-"}</span></div>
            <div><strong style="color: #facc15;">Layering:</strong> <span style="color: #cbd5e1;">${R.layering||"-"}</span></div>
            <div><strong style="color: #facc15;">Aksesori:</strong> <span style="color: #cbd5e1;">${R.accessories||"-"}</span></div>
            <div><strong style="color: #facc15;">Alas Kaki:</strong> <span style="color: #cbd5e1;">${R.footwear||"-"}</span></div>
            <div><strong style="color: #facc15;">Formalitas:</strong> <span style="color: #cbd5e1;">${R.formality||"-"}</span></div>
            <div style="grid-column: 1 / -1;"><strong style="color: #facc15;">Harmonisasi dengan Latar:</strong> <span style="color: #cbd5e1;">${R.relationshipToEnvironment||"-"}</span></div>
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
              <span style="color: #f1f5f9;">${C.arsitektur||H.architecture||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🪑 Furniture:</strong>
              <span style="color: #f1f5f9;">${C.furniture||H.propsAndAccessories||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🖼️ Dekorasi:</strong>
              <span style="color: #f1f5f9;">${C.dekorasi||H.decoration||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🧱 Material:</strong>
              <span style="color: #f1f5f9;">${C.material||(Array.isArray(Q.materialsAndTextures)?Q.materialsAndTextures.map(j=>j.material).join(", "):"-")}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🎨 Warna:</strong>
              <span style="color: #f1f5f9;">${C.warna||Q.palette||"-"}</span>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
              <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">💡 Lighting:</strong>
              <span style="color: #f1f5f9;">${C.lighting||ia.type||"-"}</span>
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
              ${L}
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="btn-copy-composition-spatial" style="color: #2dd4bf; border-color: rgba(20, 184, 166, 0.4); flex-shrink: 0;" title="Salin ringkasan Komposisi & Spatial Relationship">
              📋 COPY
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.45rem; font-size: 0.785rem; background: rgba(0,0,0,0.3); padding: 0.65rem; border-radius: 6px;">
            <div><strong style="color: #2dd4bf;">Penempatan Subjek:</strong> <span style="color: #cbd5e1;">${N.subjectPlacement||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Simetri / Asimetri:</strong> <span style="color: #cbd5e1;">${N.symmetry||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Horisontal:</strong> <span style="color: #cbd5e1;">${N.horizontalBalance||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Keseimbangan Vertikal:</strong> <span style="color: #cbd5e1;">${N.verticalBalance||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Negative Space:</strong> <span style="color: #cbd5e1;">${N.negativeSpace||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Kedalaman (Depth):</strong> <span style="color: #cbd5e1;">${N.depth||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Perspektif:</strong> <span style="color: #cbd5e1;">${N.perspective||x.perspective||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Foreground:</strong> <span style="color: #cbd5e1;">${N.foreground||x.foreground||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Midground:</strong> <span style="color: #cbd5e1;">${N.midground||x.middleGround||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Background:</strong> <span style="color: #cbd5e1;">${N.background||x.background||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Framing:</strong> <span style="color: #cbd5e1;">${N.framing||"-"}</span></div>
            <div><strong style="color: #2dd4bf;">Hierarki Spasial:</strong> <span style="color: #cbd5e1;">${N.spatialHierarchy||"-"}</span></div>
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
            ${(na||[]).map(j=>`
              <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 0.5rem; font-size: 0.75rem;">
                <strong style="color: #38bdf8; display: block; margin-bottom: 0.2rem;">${j.aspectNumber}. ${String(j.title||"").toUpperCase().replace("&","&amp;")}</strong>
                <p style="color: #cbd5e1; margin: 0; line-height: 1.4;">${j.summary||"-"}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem; margin-top: 0.6rem;">
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(16,185,129,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #10b981; font-size: 0.8rem;">PROFIL A: BACKGROUND PROFILE (PROFIL LATAR BELAKANG)</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-bg-profile">Salin Profil A</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${T||"-"}
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(56,189,248,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #38bdf8; font-size: 0.8rem;">PROFIL B: SUBJECT–BACKGROUND PLACEMENT PROFILE</strong>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-placement-profile">Salin Profil B</button>
            </div>
            <div class="font-mono" style="font-size: 0.75rem; line-height: 1.5; color: #cbd5e1; max-height: 150px; overflow-y: auto;">
              ${v||"-"}
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
        ${f||'<span style="color: #94a3b8; font-style: italic;">Prompt analisa optimal sedang dibuat...</span>'}
      </div>

      <!-- KONTEN PROMPT (EDIT MODE - INLINE) -->
      <div id="optimal-prompt-edit-container" style="display: none; flex-direction: column; gap: 0.6rem; margin-top: 0.25rem;">
        <textarea 
          id="optimal-prompt-edit-textarea" 
          rows="6" 
          style="width: 100%; background: rgba(0, 0, 0, 0.6); border: 1px solid #38bdf8; border-radius: 6px; padding: 0.85rem; color: #f8fafc; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; resize: vertical;"
        >${f||""}</textarea>
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
  `,bindEvents(j){const B=(U,Aa)=>{if(U)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(U);else{const ya=document.createElement("textarea");ya.value=U,document.body.appendChild(ya),ya.select(),document.execCommand("copy"),ya.remove()}},X=(U,Aa="📋 COPY")=>{if(!U)return;const ya=U.innerHTML;U.innerHTML="✓ COPIED",U.style.opacity="0.9",setTimeout(()=>{U.innerHTML=ya||Aa,U.style.opacity="1"},1500)},y=j.querySelector("#btn-copy-mood");y&&y.addEventListener("click",()=>{const U=P;t?t(U):B(U),X(y)});const O=j.querySelector("#btn-copy-photo-style, #btn-copy-photography-style");O&&O.addEventListener("click",()=>{const U=S;i?i(U):B(U),X(O)});const D=j.querySelector("#btn-copy-subject-placement, #btn-copy-subject-background-rel");D&&D.addEventListener("click",()=>{const U=M;n?n(U):B(U),X(D)});const $=j.querySelector("#btn-copy-outfit");$&&$.addEventListener("click",()=>{const U=F;s?s(U):B(U),X($)});const _=j.querySelector("#btn-copy-bg-elements");_&&_.addEventListener("click",()=>{const U=se(b);l?l(U):B(U),X(_)});const V=j.querySelector("#btn-copy-composition-spatial");V&&V.addEventListener("click",()=>{const U=L;d?d(U):B(U),X(V)});const z=j.querySelector("#btn-copy-optimal-prompt");z&&z.addEventListener("click",()=>{const U=f||b.optimalPrompt||"";g?g(U):m?m(U):B(U)});const Y=j.querySelector("#btn-edit-optimal-prompt"),w=j.querySelector("#optimal-prompt-view-container"),G=j.querySelector("#optimal-prompt-edit-container"),oa=j.querySelector("#optimal-prompt-edit-textarea"),ba=j.querySelector("#btn-save-edited-prompt"),ha=j.querySelector("#btn-cancel-edit-prompt");Y&&w&&G&&oa&&(Y.addEventListener("click",()=>{w.style.display="none",G.style.display="flex",oa.focus()}),ha&&ha.addEventListener("click",()=>{G.style.display="none",w.style.display="block"}),ba&&ba.addEventListener("click",()=>{const U=oa.value.trim();U&&u&&u(U),G.style.display="none",w.style.display="block"}));const ga=j.querySelector("#btn-regenerate-optimal-prompt");ga&&p&&ga.addEventListener("click",()=>{p()});const aa=j.querySelector("#btn-copy-bg-profile");aa&&aa.addEventListener("click",()=>{const U=$a(b)||T;c?c(U):B(U)});const da=j.querySelector("#btn-copy-placement-profile");da&&da.addEventListener("click",()=>{const U=Ga(b)||v;h?h(U):B(U)});const sa=j.querySelector("#btn-copy-full-bg-report");sa&&sa.addEventListener("click",()=>{const U=Ja(b);k?k(U):B(U)})}}}function gt({analysisResult:o,currentPrompt:a,catalog:e,isAnalyzing:r,isOnlineActive:t=!1,isEnriching:i=!1,activeMode:n="ANALISA_PROMPT",uploadedImage:s=null,onModeChange:l,onImageSelected:d,onImageRemoved:g,onAnalyze:u,onReset:p,onClear:c,onSelectPreset:h,onCopyPrompt:k,onCopyGeneratedPrompt:m,onCopyBackgroundProfile:b,onCopyPlacementProfile:T,onCopyFullReport:v,onCopyMood:f,onCopyPhotographyStyle:A,onCopySubjectPlacement:I,onCopyOutfit:E,onCopyBackgroundElements:R,onCopyCompositionSpatial:C,onEditOptimalPrompt:N,onRegenerateOptimalPrompt:P,onEnrichPrompt:S,onAddShorthand:M,onRemoveShorthand:F,onToggleRecommendation:L,onResolveConflict:H,selectedAspectRatio:x="auto",onAspectRatioChange:Q,twoWorldsConfig:ia=null,onTwoWorldsConfigChange:na,colourGradingConfig:j=null,onColourGradingConfigChange:B,onResetGrading:X,batchImages:y=[],activeBatchIndex:O=0,onSelectBatchImage:D}){var $;const{optimalPrompt:_="",generatedPrompt:V="",visualBreakdown:z=null,isImageRepair:Y=!1,visualConditionSummary:w="",calculatedAdjustments:G=null,protectionLogs:oa=[],colorGradingRecipe:ba=null,optimizationAreas:ha=[],goodAspects:ga=[],diagnosedShorthands:aa=[],installedShorthands:da=[],conflicts:sa=[],intent:U={},editAreas:Aa=[],lockedAreas:ya=[],unchangedAreas:La=[],visualTransformation:Ca={},primaryShorthands:q=[],relatedShorthands:ea=[],similarShorthands:Ra=[],recommendations:Ia=[],exclusions:Ta=[]}=o||{};function K(W){switch(W){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const Z=Ze({currentValue:a,onAnalyze:u,onReset:p,onClear:c,onSelectPreset:h,isAnalyzing:r,isOnlineActive:t,activeMode:n,onModeChange:l,uploadedImage:s,onImageSelected:d,onImageRemoved:g,selectedAspectRatio:x,onAspectRatioChange:Q,twoWorldsConfig:ia,onTwoWorldsConfigChange:na,colourGradingConfig:j,onColourGradingConfigChange:B,onResetGrading:X,batchImages:y,activeBatchIndex:O,onSelectBatchImage:D}),pa=at(sa,H,n),ka=nt({optimalPrompt:_,installedShorthands:da,catalog:e,isOnlineActive:t,isEnriching:i,onCopyPrompt:k,onEnrichPrompt:S,onRemoveShorthand:F,onAddShorthand:M}),fa=it(U),va=rt(Aa),ta=st(ya,La),Ea=ot(Ca),ma=lt({primaryShorthands:q,relatedShorthands:ea,recommendations:Ia,installedShorthands:da,activeMode:n,onToggleShorthand:L}),ra=dt(Ra,da,L),Oa=ut(Ta,n);if(n==="BACKGROUND_ANALYSIS"){if(!V)return{html:`
          <div class="analyzer-stream-container">
            ${Z.html}
          </div>
        `,bindEvents(la){Z.bindEvents(la)}};const W=ct({analysisResult:o,onCopyMood:f,onCopyPhotographyStyle:A,onCopySubjectPlacement:I,onCopyOutfit:E,onCopyBackgroundElements:R,onCopyCompositionSpatial:C,onCopyOptimalPrompt:k||m,onEditOptimalPrompt:N,onRegenerateOptimalPrompt:P,onCopyBackgroundProfile:b,onCopyPlacementProfile:T,onCopyFullReport:v,onCopyGeneratedPrompt:m});return{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${Z.html}

        <!-- 2. HASIL ANALISIS LATAR BELAKANG & PROMPT ANALISA OPTIMAL (MASTER PATCH) -->
        ${W.html}

        <!-- 3. EXISTING PROMPT SHORTHAND ANALYZER (Dijalankan langsung berdasarkan Prompt Analisa Optimal) -->
        <div class="panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-sm); padding: 0.65rem 1rem; display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg class="icon-sm" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <strong style="color: #93c5fd; font-size: 0.85rem; letter-spacing: 0.5px;">EXISTING PROMPT SHORTHAND ANALYZER</strong>
          </div>
          <span style="font-size: 0.75rem; color: #94a3b8;">Dijalankan langsung berdasarkan Prompt Analisa Optimal &bull; Shorthand Catalog Source of Truth</span>
        </div>

        <!-- SHORTHAND ANALYSIS (4 Kelompok Shorthand Eksisting) -->
        <!-- 1. SHORTHAND RELEVAN (Utama & Berhubungan) -->
        ${ma.html}

        <!-- 2. SHORTHAND ALTERNATIF / SERUPA -->
        ${ra.html}

        <!-- 3. SHORTHAND KONFLIK -->
        ${pa.html}

        <!-- 4. SHORTHAND TIDAK DIPERLUKAN -->
        ${Oa.html}

        <!-- 4. MAKSUD PROMPT -->
        ${fa.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${va.html}
          ${ta.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Ea.html}
      </div>
    `,bindEvents(la){Z.bindEvents(la),W.bindEvents(la),ma.bindEvents(la),ra.bindEvents(la),pa.bindEvents(la),Oa.bindEvents(la)}}}return n==="IMAGE_TO_PROMPT"||n==="TWO_WORLDS"?V?{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${Z.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">
                ${n==="TWO_WORLDS"?"PROMPT HASIL ANALISA 2 DUNIA":"PROMPT HASIL ANALISA GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${n==="TWO_WORLDS"?'<span class="badge badge-purple" style="background: rgba(168, 85, 247, 0.15); border: 1px solid #c084fc; color: #c084fc;">🌐 Mode 2 Dunia</span>':""}
              ${(o==null?void 0:o.source)==="GEMINI_AI"?`<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${(($=o.imageInfo)==null?void 0:$.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-blue">🤖 Source of Truth Visual</span>'}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${V}
            </p>
          </div>
          ${z?`
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(z).map(([W,la],le)=>`
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${le+1}. ${W}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${la}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${ka.html}

        <!-- 4. MAKSUD PROMPT -->
        ${fa.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${va.html}
          ${ta.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Ea.html}

        <!-- 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah Sesuai Blueprint) -->
        <!-- A & B. Shorthand Utama & Shorthand Berhubungan -->
        ${ma.html}

        <!-- C. Shorthand Alternatif / Serupa -->
        ${ra.html}

        <!-- D. Shorthand Konflik -->
        ${pa.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${Oa.html}
      </div>
    `,bindEvents(W){Z.bindEvents(W),ka.bindEvents(W),ma.bindEvents(W),ra.bindEvents(W),pa.bindEvents(W),Oa.bindEvents(W);const la=W.querySelector("#btn-copy-generated-prompt");la&&la.addEventListener("click",()=>{m&&m(V)})}}:{html:`
          <div class="analyzer-stream-container">
            ${Z.html}
          </div>
        `,bindEvents(W){Z.bindEvents(W)}}:{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${Z.html}

      <!-- MODE 3 / COLOUR GRADING SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN / COLOUR GRADING GAMBAR CARD -->
      ${(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&Y?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"};"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"};">
                ${n==="COLOUR_GRADING"?"🎨 DIAGNOSIS &amp; REKOMENDASI COLOUR GRADING":"🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge ${n==="COLOUR_GRADING"?"badge-pink":"badge-purple"}">
                ${n==="COLOUR_GRADING"?"🎨 Diagnosis Tone & Palet Warna":"🔍 Diagnosis Visual Komprehensif"}
              </span>
              <span class="badge badge-blue">⚡ ${aa.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual / Warna Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>${n==="COLOUR_GRADING"?"🎨":"📷"}</span> ${n==="COLOUR_GRADING"?"Ringkasan Karakter Warna & Tone Gambar:":"Ringkasan Kondisi Visual Gambar:"}
            </h3>
            <div style="background: ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.08)":"rgba(168, 85, 247, 0.08)"}; border-left: 3px solid ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"}; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${w}
            </div>
          </div>

          <!-- 1.5. HASIL PENYESUAIAN ADAPTIF PER-FOTO & PROTEKSI CERDAS (KHUSUS COLOUR GRADING) -->
          ${n==="COLOUR_GRADING"&&G?`
            <div style="margin-bottom: 1.15rem; background: rgba(30, 41, 59, 0.55); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 8px; padding: 0.85rem 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.55rem; flex-wrap: wrap; gap: 0.4rem;">
                <h3 style="font-size: 0.825rem; font-weight: 700; color: #f472b6; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                  <span>🎚️</span> Parameter Penyesuaian Adaptif Terhitung (Target: ${G.targetStyle||"Adaptive"} &bull; ${G.intensityPercent||50}%):
                </h3>
                <span class="badge badge-outline" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.4); font-size: 0.7rem;">
                  Non-Destructive &bull; Source Preserved
                </span>
              </div>

              <!-- Parameter Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Exposure</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.exposure>0?"+":""}${G.exposure} EV</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Contrast</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.contrast>0?"+":""}${G.contrast}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Highlights</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.highlights>0?"+":""}${G.highlights}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Shadows</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.shadows>0?"+":""}${G.shadows}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Warmth (Temp)</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.warmth>0?"+":""}${G.warmth}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Tint</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.tint>0?"+":""}${G.tint}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Vibrance</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.vibrance>0?"+":""}${G.vibrance}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Saturation</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${G.saturation>0?"+":""}${G.saturation}</strong>
                </div>
              </div>

              <!-- Proteksi Cerdas yang Diterapkan -->
              ${G.protectionLogs&&G.protectionLogs.length>0?`
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.5rem; font-size: 0.735rem; color: #a7f3d0; line-height: 1.45;">
                  <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🛡️ Proteksi Cerdas Diterapkan:</strong>
                  ${G.protectionLogs.map(W=>`<div>&bull; ${W}</div>`).join("")}
                </div>
              `:""}
            </div>
          `:""}

          <!-- 2. Area yang Membutuhkan Optimasi / Penyesuaian -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> ${n==="COLOUR_GRADING"?"Area Penyesuaian Tone & Warna":"Area yang Membutuhkan Optimasi"} (${ha.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${ha.map((W,la)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${la+1}. ${W.aspect}</strong>
                    ${K(W.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${W.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${W.suggestedAction}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${ga&&ga.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${ga.map(W=>`<li>${W}</li>`).join("")}
                </ul>
                <small style="color: #86efac; display: block; margin-top: 0.4rem; font-size: 0.75rem;">
                  💡 <em>Catatan: Aspek visual di atas sudah optimal pada foto asli, sehingga sistem secara cerdas tidak memunculkan shorthand yang tidak diperlukan untuk menjaga keaslian.</em>
                </small>
              </div>
            </div>
          `:""}

          <!-- 4. Rekomendasi Shorthand Perbaikan / Colour Grading (UNLIMITED) -->
          <div style="margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                <span>🎯</span> ${n==="COLOUR_GRADING"?"Rekomendasi Shorthand Colour Grading":"Rekomendasi Shorthand Perbaikan"} (${aa.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${aa.map(W=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.25)":"rgba(168, 85, 247, 0.25)"}; border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: ${n==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${W.code}
                      </code>
                      ${K(W.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${W.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${W.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${W.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: ${n==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; border-color: ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.4)":"rgba(168, 85, 247, 0.4)"};">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${ka.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${fa.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${va.html}
        ${ta.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${Ea.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${ma.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${pa.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${Oa.html}
    </div>
  `,bindEvents(W){Z.bindEvents(W),ka.bindEvents(W),ma.bindEvents(W),pa.bindEvents(W),Oa.bindEvents(W);const la=W.querySelector("#btn-copy-generated-prompt");la&&la.addEventListener("click",()=>{m&&m(V)})}}}function pt({searchQuery:o="",searchResults:a=[],selectedShorthands:e=[],isSearching:r=!1,searchNotice:t=null,hasSearched:i=!1,onSearch:n,onAddShorthand:s,onRemoveShorthand:l,onClearAll:d,onCopyShorthands:g}){const u=new Set(e.map(k=>(k.code||k).toLowerCase())),p=e.length>0;let c="";p?c=e.map((k,m)=>{const b=typeof k=="string"?k:k.code,T=typeof k=="object"&&k.name?k.name:"";return`
          <div class="selected-shorthand-tag ${typeof k=="object"&&k.source==="ONLINE"?"tag-online":""}" title="${T?T+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${b}</span>
            <button type="button" class="btn-remove-tag" data-code="${b}" aria-label="Hapus ${b}">
              &times;
            </button>
          </div>
        `}).join(""):c=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let h="";return r?h=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:i&&a.length===0?h=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${t||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?h=`
      <div class="dictionary-results-grid">
        ${a.map(k=>{const m=u.has((k.code||"").toLowerCase()),b=k.source==="ONLINE",T=b?"badge-online":"badge-local",v=b?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${m?"card-selected":""}" data-code="${k.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${k.code}</span>
                    <span class="source-badge ${T}">${v}</span>
                  </div>
                  <div class="card-action">
                    ${m?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${k.code}" title="Tambahkan ${k.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${k.name||k.code}</div>
                  <div class="card-desc">${k.description||"Tidak ada deskripsi"}</div>
                  ${k.equivalentTo&&k.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${k.equivalentTo.slice(0,4).map(f=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${f}</span>`).join("")}
                      ${k.equivalentTo.length>4?`<span style="opacity: 0.6;">+${k.equivalentTo.length-4} lainnya</span>`:""}
                    </div>
                  `:""}
                </div>
              </div>
            `}).join("")}
      </div>
    `:h=`
      <div class="initial-search-hint">
        <p>Ketik kata kunci untuk mencari notasi shorthand visual. Contoh: <code>wajah</code>, <code>rambut</code>, <code>pencahayaan</code>, <code>ketajaman</code>, <code>cinematic</code>, <code>portrait</code>.</p>
      </div>
    `,{html:`
    <div class="dictionary-page-container">
      <!-- HEADER PANEL -->
      <section class="panel dictionary-header-panel">
        <div class="card-header">
          <div class="card-title">
            <span style="font-size: 1.4rem;">📚</span>
            <h2>KAMUS SHORTHAND</h2>
          </div>
        </div>
        <p class="panel-subtitle">
          Cari notasi shorthand satu per satu, kumpulkan dengan tombol <strong>[ + ]</strong>, dan salin seluruh shorthand yang terkumpul sekaligus. Pilihan Anda tetap aman saat mencari berulang kali.
        </p>

        <!-- PANEL SHORTHAND TERPILIH (SELALU MUNCUL DI ATAS) -->
        <div class="selected-shorthands-panel">
          <div class="selected-panel-header">
            <div class="selected-panel-title">
              <span>📌</span>
              <strong>SHORTHAND TERPILIH</strong>
              <span class="selected-count-badge">${e.length}</span>
            </div>
            <div class="selected-panel-actions">
              <button 
                type="button" 
                class="btn btn-secondary btn-sm" 
                id="btn-clear-all-shorthands" 
                ${p?"":"disabled"} 
                title="Kosongkan seluruh shorthand terpilih">
                🗑 Hapus Semua
              </button>
              <button 
                type="button" 
                class="btn btn-primary btn-sm" 
                id="btn-copy-selected-shorthands" 
                ${p?"":"disabled"} 
                title="Salin seluruh shorthand terpilih ke clipboard">
                📋 COPY SHORTHAND
              </button>
            </div>
          </div>

          <div class="selected-tags-container" id="selected-tags-container">
            ${c}
          </div>
        </div>
      </section>

      <!-- SEARCH SECTION -->
      <section class="panel dictionary-search-panel">
        <form id="dictionary-search-form" class="dictionary-search-form" onsubmit="return false;">
          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              id="dictionary-search-input" 
              class="dictionary-search-input" 
              placeholder="Cari shorthand, fungsi, atau keyword (misal: wajah, rambut, pencahayaan)..." 
              value="${o||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${o?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${i&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${o}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${h}
        </div>
      </section>
    </div>
  `,bindEvents(k){const m=k.querySelector("#dictionary-search-form"),b=k.querySelector("#dictionary-search-input"),T=k.querySelector("#btn-clear-search"),v=k.querySelector("#btn-copy-selected-shorthands"),f=k.querySelector("#btn-clear-all-shorthands");m&&b&&m.addEventListener("submit",A=>{A.preventDefault();const I=b.value.trim();n&&n(I)}),T&&b&&T.addEventListener("click",()=>{b.value="",b.focus(),n&&n("")}),k.querySelectorAll(".btn-add-shorthand").forEach(A=>{A.addEventListener("click",()=>{const I=A.getAttribute("data-code"),E=a.find(R=>R.code===I);E&&s&&s(E)})}),k.querySelectorAll(".btn-remove-tag").forEach(A=>{A.addEventListener("click",()=>{const I=A.getAttribute("data-code");I&&l&&l(I)})}),v&&v.addEventListener("click",()=>{g&&g()}),f&&f.addEventListener("click",()=>{d&&d()})}}}function mt({analysisResult:o,onCopyJson:a,onRunCustomJson:e}){var r,t,i;const n=JSON.stringify({rawPrompt:(o==null?void 0:o.rawPrompt)||"",cleanText:(o==null?void 0:o.cleanText)||"",installedShorthands:(o==null?void 0:o.installedShorthands)||[]},null,2),s=JSON.stringify(o||{},null,2),l=((r=o==null?void 0:o.conflicts)==null?void 0:r.length)>0,d=!!((t=o==null?void 0:o.intent)!=null&&t.primaryAction&&o.intent.primaryAction!=="-"),g=((i=o==null?void 0:o.installedShorthands)==null?void 0:i.length)||0,u=(o==null?void 0:o.source)||"LOCAL_ENGINE";return{html:`
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">TEST (JSON) &mdash; PIPELINE DATA INSPECTOR</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Inspeksi representasi data JSON terstruktur untuk pengujian developer, integrasi API, dan validasi kepatuhan.
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" id="btn-copy-output-json">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          Salin Output JSON
        </button>
      </div>

      <!-- Validation Checklist Bar -->
      <div class="validation-row">
        <div class="val-item" style="border-left: 3px solid ${d?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${d?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${l?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${l?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${g} Item</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-purple);">
          <span>Sumber Engine:</span>
          <strong>${u}</strong>
        </div>
      </div>

      <!-- JSON Dual Viewer Grid -->
      <div class="json-viewer-container">
        <!-- Input JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase;">
              INPUT JSON
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Payload Masukan</span>
          </div>
          <pre class="json-box" id="json-input-view">${n}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${s}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(p){const c=p.querySelector("#btn-copy-output-json");c&&c.addEventListener("click",()=>{a&&a(s)})}}}function ht({catalog:o=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:r="ALL",searchQuery:t="",currentPage:i=1,pageSize:n=12,selectedDetailCode:s=null,isAddModalOpen:l=!1,isImportModalOpen:d=!1,duplicateWarning:g=null,onSelectCategory:u,onSelectTarget:p,onSelectRecLevel:c,onSearchChange:h,onPageChange:k,onOpenDetail:m,onCloseDetail:b,onOpenAddModal:T,onCloseAddModal:v,onSubmitAddShorthand:f,onOpenImportModal:A,onCloseImportModal:I,onSubmitImport:E,onExportCatalog:R,onResetUserCatalog:C,onAddShorthandToPrompt:N}){const P=ue(o,{category:a,target:e,recommendationLevel:r,searchQuery:t}),S=P.length,M=Math.max(1,Math.ceil(S/n)),F=Math.min(Math.max(1,i),M),L=(F-1)*n,H=P.slice(L,L+n),x=Array.from(new Set(o.map(y=>y.target))).sort(),Q=["ALL",...Object.keys(xa)].map(y=>{const O=xa[y],D=y==="ALL"?"Semua Kategori":`${O.code}. ${O.label}`;return`
      <button type="button" class="category-tab-btn ${a===y?"active":""}" data-cat="${y}">
        ${D}
      </button>
    `}).join(""),ia=H.length>0?H.map(y=>{let O="badge-opsional";y.recommendationLevel==="WAJIB"||y.priority==="HIGH"?O="badge-wajib":y.recommendationLevel==="DISARANKAN"&&(O="badge-disarankan");const D=y.source==="USER"?"badge-purple":"badge-neutral",$=(y.semanticTriggers||[]).slice(0,3).map(z=>`<span class="compat-pill">"${z}"</span>`).join(" "),_=y.equivalentTo||[],V=y.relationships||[];return`
          <div class="catalog-item-card" data-code="${y.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${y.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${D}">${y.source||"CORE"}</span>
                  <span class="badge ${O}">${y.recommendationLevel||y.priority}</span>
                  <span class="badge badge-neutral">${y.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${y.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${y.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${y.target}</span></div>
              ${y.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${y.functionGroup}</span></div>`:""}
              ${_.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${_.map(z=>`<span class="alias-tag font-mono">${z}</span>`).join(" ")}
                </div>
              `:""}
              ${V.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${V.length} terhubung (${V.map(z=>z.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${$||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${y.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${y.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',na=M>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${F<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${F} dari ${M} (${S} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${F>=M?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let j="";if(s){const y=o.find(O=>O.code===s);y&&(j=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${y.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${y.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${y.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${y.category}</span>
                <span class="badge badge-purple">Target: ${y.target}</span>
                <span class="badge badge-wajib">Level: ${y.recommendationLevel||y.priority}</span>
                ${y.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${y.functionGroup||"-"}</span>
                </div>
                ${y.equivalentTo&&y.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${y.equivalentTo.map(O=>`<span class="alias-tag font-mono">${O}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${y.relationships&&y.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${y.relationships.map(O=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${O.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${O.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${O.reason}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Deskripsi -->
              <div>
                <span class="detail-label">DESKRIPSI:</span>
                <p class="detail-value" style="margin-top: 0.25rem;">${y.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${y.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${y.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(y.semanticTriggers||[]).map(O=>`<span class="compat-pill">"${O}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.conflicts&&y.conflicts.length>0?y.conflicts.map(O=>`<span class="conflict-pill">${O}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.compatibleWith&&y.compatibleWith.length>0?y.compatibleWith.map(O=>`<span class="compat-pill">${O}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${y.code}">
                + Tambah ${y.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let B="";if(l){const y=Object.keys(de);B=`
      <div class="modal-backdrop" id="modal-add-backdrop">
        <div class="modal-card" style="max-width: 620px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">+ Tambah Shorthand Baru (User Catalog)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Tersimpan permanen di browser (IndexedDB). Tidak akan terhapus saat Analyzer di-reset.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-add-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-add-shorthand">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 65vh; overflow-y: auto;">
              ${g?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${g.message}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
                    Disarankan menambahkan kode ini sebagai <em>Alias Setara (Equivalent To)</em> atau klik Simpan Kembali jika tetap ingin membuat entri baru.
                  </p>
                </div>
              `:""}

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-code">KODE SHORTHAND *</label>
                  <input type="text" id="add-code" class="input-primary" placeholder="/customtag" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
                <div>
                  <label class="detail-label" for="add-name">NAMA SHORTHAND *</label>
                  <input type="text" id="add-name" class="input-primary" placeholder="Nama representatif" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-category">KATEGORI *</label>
                  <select id="add-category" class="select-input" style="width: 100%; margin-top: 0.25rem;">
                    ${Object.keys(xa).map(O=>`<option value="${O}">${O} - ${xa[O].label}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label class="detail-label" for="add-target">TARGET AREA *</label>
                  <input type="text" id="add-target" class="input-primary" placeholder="Misal: Wajah, Pakaian, Latar" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div>
                <label class="detail-label" for="add-func-group">FUNCTION GROUP (SEMANTIC DEDUPLICATION) *</label>
                <input type="text" id="add-func-group" class="input-primary" placeholder="Misal: CUSTOM_ACTION atau pilih group standar" list="list-func-groups" style="width: 100%; margin-top: 0.25rem;" />
                <datalist id="list-func-groups">
                  ${y.map(O=>`<option value="${O}">`).join("")}
                </datalist>
              </div>

              <div>
                <label class="detail-label" for="add-desc">DESKRIPSI *</label>
                <textarea id="add-desc" class="input-primary" rows="2" placeholder="Fungsi dan cara kerja shorthand ini..." required style="width: 100%; margin-top: 0.25rem;"></textarea>
              </div>

              <div>
                <label class="detail-label" for="add-triggers">SEMANTIC TRIGGERS (Pisahkan dengan koma)</label>
                <input type="text" id="add-triggers" class="input-primary" placeholder="kata kunci 1, kata kunci 2, pemicu semantik" style="width: 100%; margin-top: 0.25rem;" />
              </div>

              <div>
                <label class="detail-label" for="add-equivalent">ALIAS SETARA (EQUIVALENT TO, pisahkan dengan koma)</label>
                <input type="text" id="add-equivalent" class="input-primary" placeholder="/alias1, /alias2" style="width: 100%; margin-top: 0.25rem;" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-add">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Simpan Shorthand</button>
            </div>
          </form>
        </div>
      </div>
    `}let X="";return d&&(X=`
      <div class="modal-backdrop" id="modal-import-backdrop">
        <div class="modal-card" style="max-width: 580px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">⬆️ Impor Katalog (JSON)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Impor data shorthand. Format JSON aman tanpa API key atau kredensial rahasia.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-import-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-import-catalog">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div>
                <label class="detail-label">MODE IMPOR:</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.35rem;">
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="MERGE" checked />
                    <strong>MERGE</strong> (Gabungkan tanpa menimpa CORE)
                  </label>
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="REPLACE" />
                    <strong>REPLACE</strong> (Ganti User Catalog)
                  </label>
                </div>
              </div>

              <div>
                <label class="detail-label" for="import-json-textarea">PASTE JSON ATAU PILIH FILE:</label>
                <textarea id="import-json-textarea" class="input-primary font-mono" rows="6" placeholder='{ "catalogVersion": "2.1", "entries": [...] }' style="width: 100%; margin-top: 0.25rem; font-size: 0.775rem;"></textarea>
              </div>

              <div>
                <input type="file" id="import-file-input" accept=".json" style="font-size: 0.8rem; color: var(--text-muted);" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-import">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Mulai Impor</button>
            </div>
          </form>
        </div>
      </div>
    `),{html:`
    <section class="panel">
      <!-- Page Header -->
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">SEMANTIC SHORTHAND KNOWLEDGE BASE</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Basis pengetahuan semantik shorthand yang terintegrasi langsung dengan Semantic Engine, Deduplikasi Fungsi, dan Relasi Antar-Domain.
          </p>
        </div>
        <span class="badge badge-blue font-mono">${o.length} Shorthand Terdaftar</span>
      </div>

      <!-- Action Bar: Add, Export, Import, Reset User Catalog -->
      <div class="catalog-action-bar">
        <div style="font-size: 0.825rem; color: var(--text-muted);">
          CORE CATALOG: <strong>Read-Only</strong> &bull; USER CATALOG: <strong>IndexedDB Persistent</strong>
        </div>
        <div class="catalog-actions-group">
          <button type="button" class="btn btn-primary btn-xs" id="btn-open-add-shorthand">
            + Tambah Shorthand
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-catalog" title="Download sanitized catalog JSON">
            ⬇️ Ekspor JSON
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-open-import-catalog" title="Import catalog JSON">
            ⬆️ Impor JSON
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-user-catalog" title="Reset hanya entri user, core tetap utuh">
            🔄 Reset User Katalog
          </button>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs" id="catalog-category-tabs" style="margin-bottom: 1rem;">
        ${Q}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${x.map(y=>`<option value="${y}" ${e===y?"selected":""}>Target: ${y}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${r==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${r==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${r==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
          </select>
        </div>

        <!-- Semantic Search Input -->
        <div style="flex: 1; max-width: 380px; min-width: 250px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari semantik: misal 'jangan ubah wajah', 'ganti baju', 'latar baru'..."
            value="${t||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${ia}
      </div>

      <!-- Pagination -->
      ${na}

      <!-- Modals -->
      ${j}
      ${B}
      ${X}
    </section>
  `,bindEvents(y){y.querySelectorAll(".category-tab-btn").forEach(K=>{K.addEventListener("click",()=>{const Z=K.getAttribute("data-cat");u&&u(Z)})});const O=y.querySelector("#select-filter-target");O&&O.addEventListener("change",K=>{p&&p(K.target.value)});const D=y.querySelector("#select-filter-rec-level");D&&D.addEventListener("change",K=>{c&&c(K.target.value)});const $=y.querySelector("#catalog-search-input");$&&$.addEventListener("input",K=>{h&&h(K.target.value)});const _=y.querySelector(".btn-prev-page");_&&_.addEventListener("click",()=>{k&&k(F-1)});const V=y.querySelector(".btn-next-page");V&&V.addEventListener("click",()=>{k&&k(F+1)});const z=y.querySelector("#btn-open-add-shorthand");z&&T&&z.addEventListener("click",T);const Y=y.querySelector("#btn-export-catalog");Y&&R&&Y.addEventListener("click",R);const w=y.querySelector("#btn-open-import-catalog");w&&A&&w.addEventListener("click",A);const G=y.querySelector("#btn-reset-user-catalog");G&&C&&G.addEventListener("click",C),y.querySelectorAll(".btn-open-detail").forEach(K=>{K.addEventListener("click",()=>{const Z=K.getAttribute("data-code");m&&m(Z)})});const oa=y.querySelector("#btn-close-detail-modal"),ba=y.querySelector("#btn-close-detail-footer"),ha=y.querySelector("#modal-detail-backdrop"),ga=()=>{b&&b()};oa&&oa.addEventListener("click",ga),ba&&ba.addEventListener("click",ga),ha&&ha.addEventListener("click",K=>{K.target===ha&&ga()});const aa=y.querySelector("#btn-close-add-modal"),da=y.querySelector("#btn-cancel-add"),sa=y.querySelector("#modal-add-backdrop"),U=()=>{v&&v()};aa&&aa.addEventListener("click",U),da&&da.addEventListener("click",U),sa&&sa.addEventListener("click",K=>{K.target===sa&&U()});const Aa=y.querySelector("#form-add-shorthand");Aa&&f&&Aa.addEventListener("submit",K=>{K.preventDefault();let Z=y.querySelector("#add-code").value.trim();Z.startsWith("/")||(Z="/"+Z);const pa=y.querySelector("#add-name").value.trim(),ka=y.querySelector("#add-category").value,fa=y.querySelector("#add-target").value.trim(),va=y.querySelector("#add-func-group").value.trim()||ka,ta=y.querySelector("#add-desc").value.trim(),Ea=y.querySelector("#add-triggers").value.trim(),ma=y.querySelector("#add-equivalent").value.trim(),ra=Ea?Ea.split(",").map(W=>W.trim()).filter(Boolean):[],Oa=ma?ma.split(",").map(W=>W.trim().startsWith("/")?W.trim():"/"+W.trim()).filter(Boolean):[];f({code:Z,name:pa,category:ka,target:fa,functionGroup:va,description:ta,semanticTriggers:ra,equivalentTo:Oa,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${fa.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const ya=y.querySelector("#btn-close-import-modal"),La=y.querySelector("#btn-cancel-import"),Ca=y.querySelector("#modal-import-backdrop"),q=()=>{I&&I()};ya&&ya.addEventListener("click",q),La&&La.addEventListener("click",q),Ca&&Ca.addEventListener("click",K=>{K.target===Ca&&q()});const ea=y.querySelector("#import-file-input"),Ra=y.querySelector("#import-json-textarea");ea&&Ra&&ea.addEventListener("change",K=>{const Z=K.target.files[0];if(Z){const pa=new FileReader;pa.onload=ka=>{Ra.value=ka.target.result},pa.readAsText(Z)}});const Ia=y.querySelector("#form-import-catalog");Ia&&E&&Ia.addEventListener("submit",K=>{var Z,pa,ka;K.preventDefault();const fa=((Z=y.querySelector('input[name="import-mode"]:checked'))==null?void 0:Z.value)||"MERGE",va=(ka=(pa=y.querySelector("#import-json-textarea"))==null?void 0:pa.value)==null?void 0:ka.trim();E(va,fa)}),y.querySelectorAll(".btn-add-from-catalog").forEach(K=>{K.addEventListener("click",()=>{const Z=K.getAttribute("data-code");N&&N(Z)})});const Ta=y.querySelector(".btn-add-from-modal");Ta&&Ta.addEventListener("click",()=>{const K=Ta.getAttribute("data-code");N&&N(K),ga()})}}}function kt({geminiStatusInfo:o,onTestConnection:a,onSaveSettings:e,onClearKey:r}){const t=J.getApiKey(),i=J.getModel(),{status:n,error:s}=o;let l="status-unconfigured",d="🟡 Gemini: Belum diuji / konfigurasi";return n===ua.CONNECTED?(l="status-connected",d="🟢 Gemini: Tersambung"):n===ua.FAILED&&(l="status-failed",d="🔴 Gemini: Gagal"),{html:`
    <div class="settings-container">
      <section class="panel">
        <div class="card-header">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: var(--accent-blue);"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <h2>API &amp; PENGATURAN (BYOK)</h2>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          Aplikasi beroperasi dengan sistem <strong>BYOK (Bring Your Own Key)</strong>. 
          API key disimpan hanya di browser lokal Anda (<code>localStorage</code>) dan tidak pernah dikirim ke server developer.
        </p>

        <!-- FORM BYOK -->
        <form id="settings-form" onsubmit="return false;">
          <!-- API Key Input with Show/Hide -->
          <div class="form-group">
            <label class="form-label" for="setting-api-key">Gemini API Key:</label>
            <div class="password-input-group">
              <input 
                type="password" 
                id="setting-api-key" 
                placeholder="AIzaSy..." 
                value="${t||""}" 
                autocomplete="off"
                spellcheck="false"
              />
              <button type="button" class="password-toggle-btn" id="btn-toggle-key-visibility" title="Tampilkan/Sembunyikan Key">
                <svg class="icon-sm" id="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>
            <p class="form-help">
              Dapatkan API Key gratis di <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue);">Google AI Studio</a>.
            </p>
          </div>

          <!-- Model Selector -->
          <div class="form-group">
            <label class="form-label" for="setting-model-select">Model Gemini:</label>
            <select id="setting-model-select" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem;">
              <option value="gemini-2.0-flash" ${i==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Rekomendasi Utama &bull; Multimodal Cepat &amp; Akurat)</option>
              <option value="gemini-3.5-flash-lite" ${i==="gemini-3.5-flash-lite"?"selected":""}>gemini-3.5-flash-lite (Flash-Lite &bull; Cepat, Ringan &amp; Hemat Kuota)</option>
              <option value="gemini-1.5-flash" ${i==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Flash &bull; Ringan &amp; Stabil)</option>
              <option value="gemini-2.5-flash" ${i==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Penalaran Hibrida &bull; Flash)</option>
              <option value="gemini-1.5-flash-8b" ${i==="gemini-1.5-flash-8b"?"selected":""}>gemini-1.5-flash-8b (Ultra Cepat &amp; Hemat Kuota)</option>
            </select>
          </div>

          <!-- Connection Status Card -->
          <div class="connection-status-card">
            <div style="flex: 1;">
              <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                Status Koneksi:
              </div>
              <div class="status-badge ${l}" id="settings-status-badge">
                <span class="status-dot"></span>
                <span>${d}</span>
              </div>
              ${s?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${s}</div>`:""}
            </div>
            <div>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-test-connection">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                Test Connection
              </button>
            </div>
          </div>

          <!-- Action Buttons: Save & Clear -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-danger btn-sm" id="btn-clear-key" title="Hapus API Key dari browser">
              Clear Key
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-settings">
              Save / Apply
            </button>
          </div>
        </form>

        <!-- Fallback notice -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
          <strong>🛡️ Mode Offline &amp; Heuristic Fallback:</strong>
          Jika API Key tidak diisi atau koneksi offline, aplikasi tidak akan pernah crash. Engine Semantik Lokal otomatis aktif memproses prompt, mendeteksi entity lock, dan merumuskan shorthand.
        </div>

        <!-- V3 Safe Patch Architecture Panel -->
        <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); font-size: 0.8rem; line-height: 1.6;">
          <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🛡️</span>
            <span>V3 SAFE PATCH-ONLY ARCHITECTURE</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 0.6rem;">
            Basis / Source of Truth: <strong>Prompt Shorthand Analyzer V2 (Immutable)</strong>. 
            Semua penambahan fitur di V3 beroperasi melalui layer patch independen tanpa memodifikasi kode inti.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">
            • Core Patch: v3-core-architecture (Active &bull; Priority 1000)<br/>
            • Safe Execution Wrapper: ENABLED (Zero-Crash Fallback Active)<br/>
            • Baseline V2 Knowledge Base: 15 Kategori A-O &bull; 46 Core Shorthands (Preserved)
          </div>
        </div>
      </section>
    </div>
  `,bindEvents(g){const u=g.querySelector("#setting-api-key"),p=g.querySelector("#setting-model-select"),c=g.querySelector("#btn-toggle-key-visibility"),h=g.querySelector("#btn-test-connection"),k=g.querySelector("#btn-save-settings"),m=g.querySelector("#btn-clear-key");c&&u&&c.addEventListener("click",()=>{const b=u.type==="password";u.type=b?"text":"password"}),h&&h.addEventListener("click",()=>{a&&a(u.value,p.value)}),k&&k.addEventListener("click",()=>{e&&e(u.value,p.value)}),m&&m.addEventListener("click",()=>{u.value="",r&&r()})}}}const te={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class ne{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const r=a.trim().toLowerCase(),t=r.startsWith("/")?r.slice(1):r,i=r.split(/\s+/).filter(Boolean),n=new Set(i);for(const l of i)if(te[l])for(const d of te[l])n.add(d.toLowerCase());const s=[];for(const l of e){if(!l||!l.code)continue;let d=0;const g=(l.code||"").toLowerCase(),u=g.startsWith("/")?g.slice(1):g,p=(l.name||"").toLowerCase(),c=(l.description||"").toLowerCase(),h=(l.category||"").toLowerCase(),k=Array.isArray(l.semanticTriggers)?l.semanticTriggers.map(b=>(b||"").toLowerCase()):[],m=(l.whenToUse||"").toLowerCase();g===r||u===t?d+=1e3:u.startsWith(t)?d+=600:u.includes(t)&&(d+=350);for(const b of k)if(b===r)d+=400;else if(b.includes(r))d+=250;else for(const T of n)if(T.length>2&&b.includes(T)){d+=100;break}if(p===r)d+=300;else if(p.includes(r))d+=200;else for(const b of n)if(b.length>2&&p.includes(b)){d+=80;break}if(c.includes(r))d+=150;else for(const b of n)if(b.length>2&&c.includes(b)){d+=60;break}h.includes(r)&&(d+=50),m.includes(r)&&(d+=40),d>0&&s.push({...l,score:d,source:"LOCAL",isOnline:!1})}return s.sort((l,d)=>d.score-l.score),this.deduplicateResultsByFunction(s)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,r=new Map;for(const i of a){if(!i||!i.code)continue;const n=i.code.toLowerCase();let s=r.get(n);if(!s){s=i.functionGroup||i.category||n;for(const[l,d]of e.entries())if(d.some(g=>(g.equivalentTo||[]).map(u=>typeof u=="string"?u.toLowerCase():"").includes(n))){s=l;break}}if(r.set(n,s),Array.isArray(i.equivalentTo))for(const l of i.equivalentTo)typeof l=="string"&&r.set(l.toLowerCase(),s);e.has(s)?e.get(s).push(i):e.set(s,[i])}const t=[];for(const[i,n]of e.entries()){if(n.length===1){t.push(n[0]);continue}n.sort((g,u)=>{if(g.preferredRepresentative&&!u.preferredRepresentative)return-1;if(!g.preferredRepresentative&&u.preferredRepresentative)return 1;if((u.score||0)!==(g.score||0))return(u.score||0)-(g.score||0);const p={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},c=p[g.status]||(g.source==="LOCAL"?3:1),h=p[u.status]||(u.source==="LOCAL"?3:1);return h!==c?h-c:(g.code||"").length-(u.code||"").length});const s=n[0],l=n.slice(1).map(g=>g.code),d=Array.from(new Set([...s.equivalentTo||[],...l]));t.push({...s,equivalentTo:d})}return t.sort((i,n)=>(n.score||0)-(i.score||0)),t}static async search(a,e=[],r=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const t=a.trim();let i=[];try{i=this.searchLocal(t,e)}catch(u){console.warn("[DictionaryService] Error pencarian lokal:",u),i=[]}let n=[],s=null;const l=i.some(u=>u.score>=600);if((i.length<4||!l)&&r)try{const u=await r.searchOnlineShorthand(t);if(u&&Array.isArray(u.results)){const p=new Set(i.map(c=>c.code.toLowerCase()));n=u.results.filter(c=>!p.has(c.code.toLowerCase()))}u&&u.message&&i.length===0&&(s=u.message)}catch(u){console.warn("[DictionaryService] Online fallback error:",u)}const d=this.deduplicateResultsByFunction([...i,...n]);let g=null;return d.length===0&&(g=s||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:t,results:d,localCount:i.length,onlineCount:n.length,notice:g}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class bt{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new pe(Ya),this.catalog=this.catalogRepo.getAll(),this.geminiService=new We(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.selectedAspectRatio="auto",this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.colourGradingConfig={...Pa},this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=J.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let r=document.getElementById("toast-container");r||(r=document.createElement("div"),r.id="toast-container",r.className="toast-container",document.body.appendChild(r));const t=document.createElement("div");t.className=`toast toast-${e}`,t.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,r.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(10px)",t.style.transition="all 0.3s ease",setTimeout(()=>t.remove(),300)},2800)}async runAnalysis(a,e=null){var r;if(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"||this.activeMode==="BACKGROUND_ANALYSIS"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const t=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry},i=this.selectedAspectRatio&&this.selectedAspectRatio!=="auto"&&this.selectedAspectRatio!=="Otomatis"?this.selectedAspectRatio:this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio||"auto";let n;if(this.activeMode==="BACKGROUND_ANALYSIS"?n=await this.geminiService.analyzeBackground({imageFile:t,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:i}):n=await this.geminiService.analyzeImageToPrompt({imageFile:t,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:i,isTwoWorlds:this.activeMode==="TWO_WORLDS",twoWorldsConfig:this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null}),n.mode=this.activeMode,this.activeMode==="TWO_WORLDS"){const s=n.twoWorldsSmartDetection||((r=n.visionData)==null?void 0:r.smartDetection)||re(n.visionData,this.uploadedImage,this.uploadedImage.visualTelemetry,this.twoWorldsConfig);if(s){this.twoWorldsDetectedValues={...s};const l={...this.twoWorldsConfig},d=["gender","age","ethnicity","subjectStyle","environmentStyle"];for(const g of d)!this.twoWorldsManualLocks[g]&&s[g]&&(l[g]=s[g]);this.twoWorldsConfig=l,typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(n.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(n.visionData,n.installedShorthands||[],this.twoWorldsConfig),n.generatedPrompt=n.optimalPrompt)}}if(this.analysisResult=n,n.source==="GEMINI_AI")this.activeMode==="BACKGROUND_ANALYSIS"?this.showToast("✅ Analisa Latar Belakang Vision AI berhasil!","success"):this.activeMode==="TWO_WORLDS"?this.showToast("✅ Analisa 2 Dunia Vision AI berhasil!","success"):this.showToast("✅ Analisa Vision AI berhasil berdasarkan gambar aktual!","success");else if(n.source==="LOCAL_ENGINE_FALLBACK"){const s=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${s}, menggunakan analisis visual lokal.`,"warning")}else this.activeMode==="BACKGROUND_ANALYSIS"?this.showToast("Analisa latar belakang & profil spasial berhasil!"):this.activeMode==="TWO_WORLDS"?this.showToast("Analisa 2 dunia & pemetaan shorthand berhasil!"):this.showToast("Analisa gambar & pemetaan shorthand berhasil!")}catch(t){this.showToast(`Gagal menganalisis gambar: ${t.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"||this.activeMode==="COLOUR_GRADING"){const t=this.activeMode==="COLOUR_GRADING";if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const i=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a,isColourGrading:t,mode:this.activeMode,colourGradingConfig:t?this.colourGradingConfig:null,telemetry:t&&(this.uploadedImage.colorTelemetry||this.uploadedImage.visualTelemetry)||null});if(i.mode=this.activeMode,this.analysisResult=i,i.source==="GEMINI_AI")this.showToast(t?"✅ Diagnosis visual Vision AI & rekomendasi colour grading selesai!":"✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!","success");else if(i.source==="LOCAL_ENGINE_FALLBACK"){const n=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${n}, menggunakan diagnosis visual lokal.`,"warning")}else this.showToast(t?"Diagnosis visual & rekomendasi colour grading selesai!":"Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(i){this.showToast(`Gagal menganalisis ${t?"colour grading":"perbaikan gambar"}: ${i.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast(t?"Silakan unggah gambar atau masukkan preferensi colour grading yang diinginkan.":"Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const i=await this.geminiService.analyzeShorthandImprove(a,e,{isColourGrading:t,mode:this.activeMode});i.mode=this.activeMode,this.analysisResult=i,this.showToast(t?"Analisa shorthand colour grading selesai!":"Analisa shorthand perbaikan selesai!")}catch(i){this.showToast(`Gagal menganalisis: ${i.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const t=await this.geminiService.analyzePrompt(a,e);this.analysisResult=t,this.showToast("Analisis prompt selesai!")}catch(t){this.showToast(`Gagal menganalisis: ${t.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleTwoWorldsConfigChange(a,e=null){const r={...a},t=["gender","age","ethnicity","subjectStyle","environmentStyle"];if(e&&t.includes(e)){const i=r[e];i&&typeof i=="string"&&i.startsWith("Auto")?(this.twoWorldsManualLocks[e]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[e]&&(r[e]=this.twoWorldsDetectedValues[e])):this.twoWorldsManualLocks[e]=!0}else for(const i of t)if(r[i]!==void 0&&r[i]!==this.twoWorldsConfig[i]){const n=r[i];n&&typeof n=="string"&&n.startsWith("Auto")?(this.twoWorldsManualLocks[i]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[i]&&(r[i]=this.twoWorldsDetectedValues[i])):this.twoWorldsManualLocks[i]=!0}this.twoWorldsConfig={...this.twoWorldsConfig,...r},this.activeMode==="TWO_WORLDS"&&this.analysisResult&&this.analysisResult.visionData&&typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.twoWorldsConfig),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt),this.render()}handleColourGradingConfigChange(a){this.colourGradingConfig={...this.colourGradingConfig,...a},this.activeMode==="COLOUR_GRADING"&&this.analysisResult&&this.analysisResult.isColourGrading&&(this.analysisResult.colourGradingConfig=this.colourGradingConfig),this.render()}handleResetGrading(){this.colourGradingConfig={...Pa},this.render(),this.showToast("Pengaturan Colour Grading telah di-reset ke nilai default (Foto Asli).")}handleSelectBatchImage(a){this.batchGradingImages&&this.batchGradingImages[a]&&(this.activeGradingBatchIndex=a,this.uploadedImage=this.batchGradingImages[a],this.render())}handleAspectRatioChange(a){var e,r;this.selectedAspectRatio=a;const t=a==="auto"||a==="Otomatis"?this.uploadedImage&&(this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio)||"1:1":a;if(this.analysisResult&&this.analysisResult.visionData)this.analysisResult.visionData.aspectRatio=t,this.analysisResult.visualBreakdown&&(this.analysisResult.visualBreakdown["Aspect Ratio"]=t),typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt);else if(this.analysisResult&&this.analysisResult.backgroundData){this.analysisResult.backgroundData.aspectRatio=t,this.analysisResult.imageInfo&&(this.analysisResult.imageInfo.aspectRatio=t);const i=t,n=((e=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:e.category)||"modern authentic room",s=((r=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:r.setting)||"clean spatial setting",l=(this.analysisResult.installedShorthands||[]).join(" "),d=l?`${l} --ar ${i} --style raw --v 6.1`:`--ar ${i} --style raw --v 6.1`;this.analysisResult.optimalPrompt=`Interior architectural photography of ${n}, ${s}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic ${d}

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}a==="auto"||a==="Otomatis"?this.showToast(`📐 Rasio Aspek: Otomatis (Asli: ${t})`):this.showToast(`📐 Rasio Aspek Target: ${a} (Proporsi subjek dipertahankan)`),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a,e="✅ Main Prompt berhasil disalin ke clipboard!"){const r=qe(a);if(!r){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(r).then(()=>{this.showToast(e)}).catch(()=>{const t=document.createElement("textarea");t.value=r,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),this.showToast(e)})}handleEditOptimalPrompt(a){var e,r,t,i,n,s,l,d,g;if(!a||!a.trim()){this.showToast("Prompt tidak boleh kosong.","warning");return}const u=a.trim();this.analysisResult||(this.analysisResult={}),this.analysisResult.optimalPrompt=u,this.analysisResult.generatedPrompt=u,this.analysisResult.backgroundData&&(this.analysisResult.backgroundData.optimalPrompt=u);const p=this.geminiService.analyzeImageShorthandsBlueprint(u,{aspectRatio:((e=this.analysisResult.backgroundData)==null?void 0:e.aspectRatio)||this.selectedAspectRatio||"16:9",environment:((t=(r=this.analysisResult.backgroundData)==null?void 0:r.elemenBackground)==null?void 0:t.arsitektur)||"",background:((n=(i=this.analysisResult.backgroundData)==null?void 0:i.elemenBackground)==null?void 0:n.arsitektur)||"",lighting:((l=(s=this.analysisResult.backgroundData)==null?void 0:s.elemenBackground)==null?void 0:l.lighting)||"",colorTone:((g=(d=this.analysisResult.backgroundData)==null?void 0:d.elemenBackground)==null?void 0:g.warna)||""});this.analysisResult.primaryShorthands=p.primaryShorthands,this.analysisResult.relatedShorthands=p.relatedShorthands,this.analysisResult.similarShorthands=p.similarShorthands,this.analysisResult.recommendations=[...p.primaryShorthands,...p.relatedShorthands,...p.similarShorthands],this.analysisResult.installedShorthands=p.primaryShorthands.map(c=>c.code),this.analysisResult.conflicts=p.conflicts,this.analysisResult.exclusions=p.exclusions,this.showToast("✅ Prompt Analisa Optimal diperbarui & Shorthand diselaraskan!"),this.render()}handleRegenerateOptimalPrompt(){if(!this.analysisResult||!this.analysisResult.backgroundData){this.showToast("Data analisa latar belakang belum tersedia.","warning");return}this.bgPromptVariant=((this.bgPromptVariant||0)+1)%3;const a=ze(this.analysisResult.backgroundData,this.bgPromptVariant);this.handleEditOptimalPrompt(a),this.showToast(`🔄 Prompt Analisa Optimal baru berhasil digenerate (Variasi ${this.bgPromptVariant+1})!`)}async handleEnrichPrompt(){var a,e,r;const t=((a=this.analysisResult)==null?void 0:a.optimalPrompt)||"";if(!t||!t.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!(J.getApiKey()&&J.getApiKey().trim())||this.geminiService.status===ua.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{if(this.activeMode==="TWO_WORLDS"||((e=this.analysisResult)==null?void 0:e.mode)==="TWO_WORLDS"){this.showToast("Menyelaraskan & memperkaya prompt 2 Dunia dengan Gemini AI...","info");const i=await this.geminiService.enrichTwoWorldsPrompt({optimalPrompt:t,generatedPrompt:((r=this.analysisResult)==null?void 0:r.generatedPrompt)||"",twoWorldsConfig:this.twoWorldsConfig,analysisResult:this.analysisResult});if(i&&i.success&&i.enrichedPrompt){this.analysisResult.optimalPrompt=i.enrichedPrompt;const n=i.conflictsResolved&&i.conflictsResolved.length>0?"✨ Prompt Optimal 2 Dunia berhasil diperkaya & konflik diselaraskan!":"✨ Prompt Optimal 2 Dunia berhasil diperkaya dengan AI!";this.showToast(n,"success")}else throw new Error("Hasil pengayaan AI 2 Dunia tidak valid.")}else{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const i=await this.geminiService.enrichPrompt(t,this.analysisResult);if(i&&i.success&&i.enrichedPrompt)this.analysisResult.optimalPrompt=i.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}}catch(i){console.warn("Enrich prompt error:",i),this.showToast(`Gagal memperkaya prompt: ${i.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const r=[...e,a];this.updateInstalledShorthands(r),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const e=(this.analysisResult.installedShorthands||[]).filter(r=>r!==a);this.updateInstalledShorthands(e),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){var e,r;if(this.analysisResult.installedShorthands=a,this.analysisResult.mode==="BACKGROUND_ANALYSIS"&&this.analysisResult.backgroundData){const t=this.analysisResult.backgroundData.aspectRatio||"16:9",i=((e=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:e.category)||"modern authentic room",n=((r=this.analysisResult.backgroundData.spaceAndComposition)==null?void 0:r.setting)||"clean spatial setting",s=a.length>0?`${a.join(" ")} --ar ${t} --style raw --v 6.1`:`--ar ${t} --style raw --v 6.1`;this.analysisResult.optimalPrompt=`Interior architectural photography of ${i}, ${n}, natural lighting, balanced composition, highly detailed textures, 8k resolution, photorealistic ${s}

--no human subject, face, person, portrait, body, distorted architecture, blurry background, bad perspective, watermark, text`}else if((this.analysisResult.mode==="IMAGE_TO_PROMPT"||this.analysisResult.mode==="TWO_WORLDS")&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a,this.analysisResult.mode==="TWO_WORLDS"?this.twoWorldsConfig:null);else if(this.analysisResult.isColourGrading){if(typeof this.geminiService.assembleImageRepairPrompt=="function"){const t=this.uploadedImagesList[this.activeUploadedImageIndex],i=(t==null?void 0:t.colorTelemetry)||(t==null?void 0:t.visualTelemetry)||this.analysisResult.telemetry||null,n=this.geminiService.assembleImageRepairPrompt({...this.analysisResult,colourGradingConfig:this.colourGradingConfig,telemetry:i,installedOverrides:a});this.analysisResult.optimalPrompt=n.optimalPrompt}}else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){const t=this.analysisResult.englishBasePrompt||ca(this.analysisResult.repairInstructions.trim());this.analysisResult.optimalPrompt=a.length>0?`${t} ${a.join(" ")}`.trim():t}else{const t=this.analysisResult.englishBasePrompt||ca(this.analysisResult.cleanText||"");this.analysisResult.optimalPrompt=a.length>0?`${t}. ${a.join(" ")}`.trim():t}if(this.analysisResult.recommendations)for(const t of this.analysisResult.recommendations)t.checked=a.includes(t.code),t.active=t.checked;if(this.analysisResult.primaryShorthands)for(const t of this.analysisResult.primaryShorthands)t.checked=a.includes(t.code),t.active=t.checked;if(this.analysisResult.relatedShorthands)for(const t of this.analysisResult.relatedShorthands)t.checked=a.includes(t.code),t.active=t.checked;if(this.analysisResult.similarShorthands)for(const t of this.analysisResult.similarShorthands)t.checked=a.includes(t.code),t.active=t.checked;this.render()}handleResolveConflict(a,e){const r=this.analysisResult.conflicts.find(n=>n.id===a);if(!r)return;let t=[...this.analysisResult.installedShorthands||[]];const i=r.type==="EDIT_VS_LOCK"||r.shorthandA&&r.shorthandA.includes("lock");if(e==="use_user_edit"){t=t.filter(s=>s!==r.shorthandA);const n=i?`Kunci ${r.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${r.shorthandB}, ${r.shorthandA} dihapus.`;this.showToast(n)}else if(e==="keep_lock"){t=t.filter(s=>s!==r.shorthandB),t.includes(r.shorthandA)||t.push(r.shorthandA);const n=i?`Lock ${r.shorthandA} dipertahankan.`:`Memilih ${r.shorthandA}, ${r.shorthandB} dihapus.`;this.showToast(n)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(n=>n.id!==a),this.updateInstalledShorthands(t)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(e),t=document.createElement("a");t.href=r,t.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(r),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const r=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${r.count} shorthand (${e})!`),this.render()}catch(r){this.showToast(`Gagal impor: ${r.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const r=await this.geminiService.testConnection(a,e);r.success?this.showToast(r.message,"success"):this.showToast(r.message,"error"),this.render()}handleSaveSettings(a,e){J.setApiKey(a),J.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){J.clearApiKey(),this.geminiService.status=ua.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await ne.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();e&&(this.dictionaryState.selectedShorthands.some(r=>(typeof r=="string"?r:r.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render()))}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=ne.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=Je(this.activeTab,a,t=>{this.activeTab=t,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let r=null;if(this.activeTab==="analyzer"){const t=!!(J.getApiKey()&&J.getApiKey().trim())&&this.geminiService.status!==ua.FAILED;r=gt({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:t,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,selectedAspectRatio:this.selectedAspectRatio,onAspectRatioChange:i=>this.handleAspectRatioChange(i),twoWorldsConfig:this.twoWorldsConfig,onTwoWorldsConfigChange:(i,n)=>this.handleTwoWorldsConfigChange(i,n),colourGradingConfig:this.colourGradingConfig,onColourGradingConfigChange:i=>this.handleColourGradingConfigChange(i),onResetGrading:()=>this.handleResetGrading(),batchImages:this.batchGradingImages,activeBatchIndex:this.activeGradingBatchIndex,onSelectBatchImage:i=>this.handleSelectBatchImage(i),onModeChange:i=>{this.activeMode!==i&&(this.activeMode=i,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render())},onImageSelected:(i,n)=>{this.uploadedImage=i,this.activeMode==="TWO_WORLDS"&&(this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null),n&&Array.isArray(n)&&n.length>0?(this.batchGradingImages=n,this.activeGradingBatchIndex=0):i?(this.batchGradingImages=[i],this.activeGradingBatchIndex=0):(this.batchGradingImages=[],this.activeGradingBatchIndex=0),this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render(),(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"||this.activeMode==="BACKGROUND_ANALYSIS")&&this.runAnalysis(this.currentPrompt)},onImageRemoved:()=>{this.uploadedImage=null,this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:i=>this.runAnalysis(i),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:i=>this.handleSelectPreset(i),onCopyPrompt:i=>this.handleCopyPrompt(i),onCopyGeneratedPrompt:i=>this.handleCopyPrompt(i),onCopyBackgroundProfile:i=>this.handleCopyPrompt(i),onCopyPlacementProfile:i=>this.handleCopyPrompt(i),onCopyFullReport:i=>this.handleCopyPrompt(i),onCopyMood:i=>this.handleCopyPrompt(i,"✅ Ringkasan Suasana / Mood berhasil disalin!"),onCopyPhotographyStyle:i=>this.handleCopyPrompt(i,"✅ Ringkasan Gaya Fotografi berhasil disalin!"),onCopySubjectPlacement:i=>this.handleCopyPrompt(i,"✅ Ringkasan Hubungan Subjek & Latar berhasil disalin!"),onCopyOutfit:i=>this.handleCopyPrompt(i,"✅ Ringkasan Referensi Outfit Subjek berhasil disalin!"),onCopyBackgroundElements:i=>this.handleCopyPrompt(i,"✅ Ringkasan Elemen Background berhasil disalin!"),onCopyCompositionSpatial:i=>this.handleCopyPrompt(i,"✅ Ringkasan Komposisi & Spatial Relationship berhasil disalin!"),onEditOptimalPrompt:i=>this.handleEditOptimalPrompt(i),onRegenerateOptimalPrompt:()=>this.handleRegenerateOptimalPrompt(),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:i=>this.handleAddShorthand(i),onRemoveShorthand:i=>this.handleRemoveShorthand(i),onToggleRecommendation:i=>this.handleToggleRecommendation(i),onResolveConflict:(i,n)=>this.handleResolveConflict(i,n)})}else this.activeTab==="json-test"?r=mt({analysisResult:this.analysisResult,onCopyJson:t=>{navigator.clipboard.writeText(t),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?r=ht({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:t=>{this.catalogCategory=t,this.catalogCurrentPage=1,this.render()},onSelectTarget:t=>{this.catalogTarget=t,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:t=>{this.catalogRecLevel=t,this.catalogCurrentPage=1,this.render()},onSearchChange:t=>{this.catalogSearchQuery=t,this.catalogCurrentPage=1,this.render()},onPageChange:t=>{this.catalogCurrentPage=t,this.render()},onOpenDetail:t=>{this.selectedDetailCode=t,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async t=>{await this.handleAddShorthandSubmit(t)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(t,i)=>{await this.handleImportCatalog(t,i)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:t=>{this.handleAddShorthand(t),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${t} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?r=pt({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:t=>this.handleDictionarySearch(t),onAddShorthand:t=>this.handleDictionaryAddShorthand(t),onRemoveShorthand:t=>this.handleDictionaryRemoveShorthand(t),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(r=kt({geminiStatusInfo:a,onTestConnection:(t,i)=>this.handleTestConnection(t,i),onSaveSettings:(t,i)=>this.handleSaveSettings(t,i),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
      <div class="app-container">
        ${e.html}
        <main class="main-content">
          ${r.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V3.0</strong> &mdash; Safe Patch-Only Architecture
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; Kamus Shorthand Enabled
            </div>
          </div>
        </footer>
      </div>
    `,e.bindEvents(this.appRoot),r.bindEvents&&r.bindEvents(this.appRoot)}}function Va(){window.__PSA_APP__||document.getElementById("app")&&(window.__PSA_APP__=new bt,window.__PSA_APP__.render())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Va):Va();window.addEventListener("load",Va);
//# sourceMappingURL=index-C9QHIou7.js.map
