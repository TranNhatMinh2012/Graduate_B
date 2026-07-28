/* Tailwind CSS Configuration */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        lantern: {
          gold: '#fbbf24',
          amber: '#f59e0b',
          glow: '#fef08a',
          night: '#030712',
          deepIndigo: '#0b0f29',
          rose: '#f43f5e',
          violet: '#d97706'
        }
      },
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif'],
        thai: ['Noto Sans Thai', 'Prompt', 'sans-serif'],
        calligraphy: ['Alex Brush', 'cursive'],
        hud: ['Orbitron', 'sans-serif']
      }
    }
  }
};

/* Main Application Logic */
const appData = {
  friends: [
    {
      name: "Mai",
      thai: "ไหม",
      blessing: "ขอให้มีความสุขมากๆ",
      wish: `Hello Hai Hi Bíchhh, tuôi thuông Bích lấm Bích biết hông hihi. Thật sự từ lúc mình biết nhau tới giờ Bích vẫn luôn như vậy, hỏng thay đổi gì, vẫn là mụt người rất quan tâm mọi người, quan sát, chăm chút cho 7 nụ (hỏng có bỏ sót cái str cụa tui để khoen hết), biết ơn Bích lấm lấm. Nói thì nhanh chứ nhìn lại quảng đường 4 năm tui biết là rất dài, vui bùn có đủ nhưng mà tui mong đó sẽ là những viên gạch để Bích có thể bồi đắp lên thành 1 tòa lâu đàii cho riêng Bích nha. Và bây giờ cho tui la lên thật lớn là CHÚC MỮNG BÍCH ĐÃ TỐT NGHIỆPP NHAAA, gioải thật đấy. Hành trình sắp tới tui mong rằng mọi thứ cũng sẽ iu thương Bích còn nếu hong iu thương thì Bích coi đó là 1 viên gạch nhaa. Vẫn là câu nói cũ của tui là mong Bích sẽ trở thành tất cả những gì mà Bích muốn trong đời. Lần nữa chúc mừng Xuân Bích đã tốt nghiệpppp. ยินดีด้วยนะบิช เรียนจบแล้ว! ขอให้ทุกอย่างหลังจากนี้ราบรื่น งานปัง ๆ เงินเข้าเยอะ ๆ นะ 💖🎓💰`,
      style: "gold",
      released: false
    },
    {
      name: "Vi",
      thai: "วี",
      blessing: "ขอให้โชคดีในทุกเส้นทาง",
      wish: `Xà qua đi krap, happy graduation em gái dịu dàng nhứt cái nhóm 7 nụ. Hành trình 4 năm vừa rồi chắc hẳn là nhìu cơ hội mới nhma cũng gặp hong ít khó khăn. Tui mong chặng đường phía trước của em Bích sẽ có nhìu trải nghiệm thật đẹp, sẽ có lúc thăng lúc trầm nhma trộm vía thăng nhìu hơn trầm nhoé. Sẽ là người sống giàu tình cảm như bây giờ, có được job mà mình yêu thích, chăm sóc cho sức khoẻ và lun thật xinkk đẹp và hạnh phúc. 💕🎉`,
      style: "rose",
      released: false
    },
    {
      name: "Quỳnh",
      thai: "ควิน",
      blessing: "อนาคตสดใสและรุ่งโรจน์",
      wish: `Chúc mừng cô gái xinh đẹp đã chính thức tốt nghiệp nhé! 🌸 Cuối cùng thì mọi cố gắng và những ngày tháng miệt mài cũng đã được đền đáp. Mong chặng đường phía trước sẽ luôn gặp thật nhiều may mắn, niềm vui và những cơ hội tốt. Hy vọng lúc nào cũng giữ được nụ cười, sự tự tin và nhiệt huyết như bây giờ. Chúc mọi dự định đều suôn sẻ, mọi ước mơ đều dần trở thành hiện thực. Tự hào về cô gái này lắm, luôn hạnh phúc và tỏa sáng nhé! 💐`,
      style: "violet",
      released: false
    },
    {
      name: "Thi",
      thai: "ที",
      blessing: "ขอให้ความฝันเป็นจริง",
      wish: `Hé lô gái Thái của tui. Lần đầu gặp bà, tui nhớ mãi hình ảnh một cô gái thướt tha trong tà áo dài, tóc vừa dài vừa dày – đúng kiểu mái tóc mà đứa tóc xù như tui luôn ao ước, bà cười lên còn nhìn hiền khô nữa chớ. Vậy mà thân rồi mới biết bà khùng cỡ nào. :))) Nhưng cú sốc lớn nhất của tui chắc là lúc bà lên đại học cắt tóc rồi còn nhuộm tóc nữa, nhưng mà hợp với bà lắm nghen. Lúc lên đại học tưởng ít gặp được nhau nhưng tui với bà lại gặp khá thường xuyên á chớ. Chúc mừng Bích đã tốt nghiệp. Mong rằng trên chặng đường sắp tới, bà vẫn sẽ luôn giữ được sự tự tin của bản thân, vẫn dám thử những điều mới. Hy vọng cuộc sống sẽ đối xử thật dịu dàng với bà, còn bà thì sẽ luôn hạnh phúc với những lựa chọn của mình. Mãi yêu.`,
      style: "gold",
      released: false
    },
    {
      name: "Khôi",
      thai: "คอย",
      blessing: "ขอให้ประสบความสำเร็จ",
      wish: `Chúc mừng ba Bích đã tốt nghiệp thành công nhen!!!! Tôi vẫn còn nhớ những ngày mà Bích ở cùng Khôi, tính ra cũng lâu phết chứ đùa. Thật lòng cảm ơn Bích vì ở bên tui lúc bị đau, mãi mãi không bao giờ quênnnnn, hai bà ở Đà Nẵng đều đã hoàn thành nhiệm vụ hệ thống đầu tiên rồi, còn mỗi Khôi, xin vía từ hai bà nhiều nhen. Chúc Bích sau này con đường sự nghiệp, yêu đương, gia đình, đu idol đều thuận lợi, vui vẻ, rồi tiến tới nhiệm vụ hệ thống tiếp theo thật dịu keo sánh mịn như ly cà phê lau ra với hai vị đông trùng hạ thảo và nấm linh chi nhoéeeee. Chúc mừng bà Bíchhhhhhhhhhhhh tốt nghiệpppppppppppppppppp!!!!`,
      style: "rose",
      released: false
    },
    {
      name: "Minh",
      thai: "มิน",
      blessing: "ขอให้มีแต่ความสุขและรอยยิ้ม",
      wish: `Chúc mừng Bích đã tốt nghiệp nhaaa. 🎓✨ Vậy là hành trình 4 năm cũng khép lại bằng một cái kết thật đẹp rồi. Mong chặng đường phía trước sẽ mang đến cho Bích thật nhiều cơ hội mới, gặp được những người tốt, làm công việc mình yêu thích và luôn giữ được sự dịu dàng, chân thành như bây giờ. Chúc mọi dự định đều thuận lợi, mọi cố gắng đều được đền đáp và Bích sẽ trở thành phiên bản mà bản thân luôn mong muốn. Tốt nghiệp chỉ là cột mốc đầu tiên thôi, phía trước còn rất nhiều điều tuyệt vời đang chờ Bích. Chúc mừng cô gái xinh đẹp của tụi mình nha! 💖🌷`,
      style: "violet",
      released: false
    }
  ],
  userVault: [],
  memories: [
    { title: "Kỷ Niệm", img: "images/memory/753880647_2378720785865098_7066912956764792131_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/754949030_27917159154546495_580427233896830418_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/755432482_1062085470110263_1494344023113185245_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/755498946_1050693397497030_6664484442179230643_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/756035025_915779581566043_4832727772103850653_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/756332621_1058476883403890_5307221165415531462_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/758386139_2458109228008148_3337134205912030348_n.jpg" },
    { title: "Kỷ Niệm", img: "images/memory/8EED5053-D33A-4B37-8E65-704BB6F4EFEF-65140-0000220F3D68E531.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_2523.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_2635.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4505.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4509.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4511.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4513.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4516.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_4517.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_5846.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_5847.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_6242.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7034.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7035.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7342.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7405.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7601.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7611.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/IMG_7614.PNG" },
    { title: "Kỷ Niệm", img: "images/memory/dhalf 2023-01-23 212408.963.JPG" },
    { title: "Kỷ Niệm", img: "images/memory/photobooth-2025-07-23-3.PNG" }
  ]
};

let activeFriendIdx = 0;

// --- Hero Photo Gallery (2 separate panels) ---
function initHeroGallery() {
  const container = document.getElementById('heroPhotoGallery');
  if (!container) return;

  const photos = [
    { src: "images/main/Bích_main.jpg", label: "Chân Dung Tốt Nghiệp", tag: "🎓 Cử Nhân" },
    { src: "images/main/first_main.jpg", label: "Hành Trình Vinh Quang", tag: "2022 — 2026" }
  ];

  container.innerHTML = photos.map((p, i) => `
    <div class="hero-photo-panel group relative rounded-3xl overflow-hidden cursor-pointer
      shadow-[0_0_40px_rgba(251,191,36,0.15)] hover:shadow-[0_0_70px_rgba(251,191,36,0.45)]
      transition-all duration-500 border border-amber-500/20 hover:border-amber-400/60 ${i === 0 ? 'hero-panel-main' : 'hero-panel-secondary'}"
      onclick="openLightboxFromHero('${p.src}','${p.label}')">
      <img src="${p.src}" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="${p.label}">
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/5 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 space-y-1">
        <span class="inline-block px-2.5 py-1 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-400/50 text-[10px] font-bold text-amber-300 font-hud uppercase tracking-wider">${p.tag}</span>
        <p class="text-xs font-bold text-white/75 uppercase tracking-widest">${p.label}</p>
      </div>
      <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-950/50 backdrop-blur-md border border-amber-400/20 flex items-center justify-center text-amber-400/50 group-hover:text-amber-300 group-hover:border-amber-400/70 transition-all duration-300">
        <i class="fa-solid fa-expand text-xs"></i>
      </div>
    </div>
  `).join('');
}

function openLightboxFromHero(src, title) {
  const content = document.getElementById('lightboxContent');
  const modal = document.getElementById('lightboxModal');
  if (!content || !modal) return;
  content.innerHTML = `
    <div class="rounded-2xl overflow-hidden mb-3 border border-amber-400/40 max-h-[80vh] shadow-2xl flex items-center justify-center bg-gray-950">
      <img src="${src}" class="max-w-full max-h-[75vh] object-contain">
    </div>
    <h4 class="text-center text-sm font-bold text-amber-300 mb-3 font-vietnam">${title}</h4>
    <button onclick="closeLightbox()" class="w-full py-2.5 rounded-xl bg-amber-500 text-gray-950 font-black text-xs uppercase hover:bg-amber-400 transition">Đóng Ảnh</button>
  `;
  modal.classList.remove('hidden');
}

// Three.js background variables
let scene, camera, renderer, lanterns3D = [], emberParticles;
let lanternTextures = {};
const clock = new THREE.Clock();

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let cameraAngleX = 0;
let cameraAngleY = 0;

// Web Audio Synthesizer
let audioCtx = null;
let isAudioPlaying = false;
let audioInterval = null;

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playChimeSound() {
  try {
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50];
    freqs.forEach((f, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;

      gain.gain.setValueAtTime(0.08, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.3);
    });
  } catch(e) {
    console.log("Audio play error", e);
  }
}

function toggleBackgroundAudio() {
  initAudioContext();
  if (!audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isAudioPlaying = !isAudioPlaying;
  const btnText = document.getElementById('audioText');
  const btnIcon = document.getElementById('audioIcon');

  if (isAudioPlaying) {
    if (btnText) btnText.innerText = "Tắt Nhạc Nền";
    if (btnIcon) btnIcon.className = "fa-solid fa-volume-high text-amber-400 animate-pulse";

    playChimeSound();
    audioInterval = setInterval(() => {
      if (isAudioPlaying) playChimeSound();
    }, 4000);

    showToast("Đã bật âm hưởng huyền ảo Lễ Hội Chiang Mai", "ÂM NHẠC SỐNG ĐỘNG");
  } else {
    if (btnText) btnText.innerText = "Bật Nhạc Nền";
    if (btnIcon) btnIcon.className = "fa-solid fa-music text-amber-400";
    if (audioInterval) clearInterval(audioInterval);
    showToast("Đã tắt nhạc nền", "ÂM NHẠC");
  }
}

function create3DLanternCanvasTexture(style = 'gold') {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  let stop0 = '#fff9c4', stop20 = '#fbc02d', stop50 = '#ff9800', stop80 = '#f57c00', stop100 = '#b71c1c';
  if (style === 'rose') {
    stop0 = '#fff8e1'; stop20 = '#ffe082'; stop50 = '#ffb300'; stop80 = '#f57c00'; stop100 = '#d84315';
  } else if (style === 'violet') {
    stop0 = '#ffecb3'; stop20 = '#ffd54f'; stop50 = '#ff8f00'; stop80 = '#e65100'; stop100 = '#bf360c';
  }

  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.0, stop0);
  grad.addColorStop(0.18, stop20);
  grad.addColorStop(0.50, stop50);
  grad.addColorStop(0.82, stop80);
  grad.addColorStop(1.0, stop100);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 512);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 2;
  for (let x = 24; x < 256; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }

  ctx.fillStyle = '#451a03';
  ctx.fillRect(0, 0, 256, 18);
  ctx.fillRect(0, 494, 256, 18);

  const cx = 128, cy = 256;
  const sunColor = '#881337';
  ctx.fillStyle = sunColor;

  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -48);
    ctx.lineTo(-10, -28);
    ctx.lineTo(10, -28);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 24, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function initThreeBG() {
  const canvas = document.getElementById('bg360');
  if (!canvas) return;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030712, 0.018);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 22);

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ambientLight = new THREE.AmbientLight(0xfff08a, 0.9);
  scene.add(ambientLight);

  const mainLight = new THREE.PointLight(0xfbbf24, 2.5, 70);
  mainLight.position.set(0, -6, 12);
  scene.add(mainLight);

  lanternTextures = {
    gold: create3DLanternCanvasTexture('gold'),
    rose: create3DLanternCanvasTexture('rose'),
    violet: create3DLanternCanvasTexture('violet')
  };

  initEmbersParticleSystem();

  for (let i = 0; i < 40; i++) {
    spawn3DLantern(false, true);
  }

  setup3DCameraDragControls(canvas);

  window.addEventListener('resize', () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate3D();
}

function setup3DCameraDragControls(canvas) {
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    cameraAngleY += deltaX * 0.005;
    cameraAngleX += deltaY * 0.005;

    cameraAngleX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, cameraAngleX));

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    cameraAngleY += deltaX * 0.005;
    cameraAngleX += deltaY * 0.005;

    cameraAngleX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, cameraAngleX));

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  });

  window.addEventListener('touchend', () => { isDragging = false; });
}

function reset3DCameraView() {
  cameraAngleX = 0;
  cameraAngleY = 0;
  showToast("Đã đặt lại góc nhìn bầu trời 3D ban đầu", "3D CAMERA RESET");
}

function initEmbersParticleSystem() {
  const emberCount = 150;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(emberCount * 3);

  for (let i = 0; i < emberCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xfde047,
    size: 0.25,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  emberParticles = new THREE.Points(geometry, particleMat);
  scene.add(emberParticles);
}

function spawn3DLantern(isBurst = false, isInitial = false) {
  const group = new THREE.Group();
  const scale = 0.55 + Math.random() * 0.65;

  const geometry = new THREE.CylinderGeometry(0.72 * scale, 0.72 * scale, 2.1 * scale, 24, 1, true);
  
  const styleKeys = ['gold', 'rose', 'violet'];
  const chosenStyle = styleKeys[Math.floor(Math.random() * styleKeys.length)];
  const texture = lanternTextures[chosenStyle];

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: isBurst ? 0.98 : (0.85 + Math.random() * 0.12),
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  const topCapGeo = new THREE.CircleGeometry(0.72 * scale, 24);
  const topCapMat = new THREE.MeshBasicMaterial({ color: 0xffecb3, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
  const topCap = new THREE.Mesh(topCapGeo, topCapMat);
  topCap.position.y = 1.05 * scale;
  topCap.rotation.x = Math.PI / 2;
  group.add(topCap);

  const flameGeo = new THREE.SphereGeometry(0.32 * scale, 12, 12);
  const flameMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending
  });
  const flame = new THREE.Mesh(flameGeo, flameMat);
  flame.position.y = -0.75 * scale;
  group.add(flame);

  const x = (Math.random() - 0.5) * 55;
  const y = isInitial ? (Math.random() - 0.5) * 48 : (isBurst ? -18 : -25);
  const z = (Math.random() - 0.5) * 35 - 5;

  group.position.set(x, y, z);
  group.rotation.y = Math.random() * Math.PI * 2;

  group.userData = {
    speedY: isBurst ? (0.05 + Math.random() * 0.04) : (0.016 + Math.random() * 0.025),
    swaySpeed: 0.8 + Math.random() * 0.8,
    swayAmount: 0.25 + Math.random() * 0.35,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    phase: Math.random() * Math.PI * 2,
    initialX: x
  };

  scene.add(group);
  lanterns3D.push(group);
}

function animate3D() {
  requestAnimationFrame(animate3D);

  const delta = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();

  const radius = 22;
  camera.position.x = radius * Math.sin(cameraAngleY) * Math.cos(cameraAngleX);
  camera.position.z = radius * Math.cos(cameraAngleY) * Math.cos(cameraAngleX);
  camera.position.y = radius * Math.sin(cameraAngleX);
  camera.lookAt(0, 0, 0);

  lanterns3D.forEach(l => {
    l.position.y += l.userData.speedY * (delta * 60);
    l.position.x = l.userData.initialX + Math.sin(elapsedTime * l.userData.swaySpeed + l.userData.phase) * l.userData.swayAmount;
    l.rotation.z = Math.sin(elapsedTime * 1.2 + l.userData.phase) * 0.04;
    l.rotation.y += l.userData.rotSpeed * (delta * 60);

    if (l.position.y > 32) {
      l.position.y = -25;
      l.position.x = (Math.random() - 0.5) * 55;
      l.userData.initialX = l.position.x;
    }
  });

  if (emberParticles) {
    const positions = emberParticles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length / 3; i++) {
      positions[i * 3 + 1] += 0.025 * (delta * 60);
      positions[i * 3] += Math.sin(elapsedTime + i) * 0.005;
      if (positions[i * 3 + 1] > 25) {
        positions[i * 3 + 1] = -25;
        positions[i * 3] = (Math.random() - 0.5) * 60;
      }
    }
    emberParticles.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

function getSkyLanternSVG(style = 'gold', extraClasses = '') {
  let gradientId = `lanternGrad_${Math.random().toString(36).substr(2, 9)}`;

  let stop0 = '#fff8e1', stop20 = '#ffecb3', stop50 = '#ffc107', stop80 = '#ff9800', stop100 = '#d84315';
  let sunColor = '#881337';

  if (style === 'rose') {
    stop0 = '#fff8e1'; stop20 = '#ffe082'; stop50 = '#ffb300'; stop80 = '#f57c00'; stop100 = '#d84315';
  } else if (style === 'violet') {
    stop0 = '#ffecb3'; stop20 = '#ffd54f'; stop50 = '#ff8f00'; stop80 = '#e65100'; stop100 = '#bf360c';
  }

  return `
    <svg class="w-12 h-16 sm:w-14 sm:h-18 drop-shadow-[0_0_22px_rgba(255,193,7,0.85)] ${extraClasses}" viewBox="0 0 60 70" fill="none">
      <defs>
        <linearGradient id="${gradientId}" x1="30" y1="8" x2="30" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${stop0}"/>
          <stop offset="20%" stop-color="${stop20}"/>
          <stop offset="55%" stop-color="${stop50}"/>
          <stop offset="85%" stop-color="${stop80}"/>
          <stop offset="100%" stop-color="${stop100}"/>
        </linearGradient>
        <radialGradient id="sunGlow_${gradientId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff59d" stop-opacity="0.9"/>
          <stop offset="70%" stop-color="${stop50}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${stop100}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="30" cy="33" r="25" fill="url(#sunGlow_${gradientId})" opacity="0.85"/>
      <rect x="13" y="8" width="34" height="50" rx="5" ry="5" fill="url(#${gradientId})" stroke="#ffe082" stroke-width="1.5"/>

      <line x1="21" y1="8" x2="21" y2="58" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
      <line x1="30" y1="8" x2="30" y2="58" stroke="#ffffff" stroke-width="0.8" opacity="0.2"/>
      <line x1="39" y1="8" x2="39" y2="58" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>

      <line x1="13" y1="16" x2="47" y2="16" stroke="#451a03" stroke-width="1.2" opacity="0.6"/>
      <line x1="13" y1="50" x2="47" y2="50" stroke="#451a03" stroke-width="1.2" opacity="0.6"/>

      <g transform="translate(30, 33)">
        <polygon points="0,-9.5 -2,-6 2,-6" fill="${sunColor}"/>
        <polygon points="0,9.5 -2,6 2,6" fill="${sunColor}"/>
        <polygon points="-9.5,0 -6,-2 -6,2" fill="${sunColor}"/>
        <polygon points="9.5,0 6,-2 6,2" fill="${sunColor}"/>
        <circle cx="0" cy="0" r="5" fill="${sunColor}"/>
      </g>

      <ellipse cx="30" cy="58" rx="8" ry="2.2" fill="#451a03" stroke="#ffe082" stroke-width="1.2"/>
      <g class="flame-flicker">
        <circle cx="30" cy="58" r="3" fill="#fff59d"/>
        <circle cx="30" cy="58" r="1.5" fill="#ffffff"/>
      </g>
    </svg>
  `;
}

function switchTab(tabId) {
  document.querySelectorAll('.section-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-gradient-to-r', 'from-amber-300', 'to-amber-500', 'text-gray-950');
    btn.classList.add('text-gray-300');
  });

  const targetSection = document.getElementById(`section-${tabId}`);
  if (targetSection) targetSection.classList.add('active');

  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-gradient-to-r', 'from-amber-300', 'to-amber-500', 'text-gray-950');
    activeBtn.classList.remove('text-gray-300');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg, title = 'THÔNG BÁO') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'glass-panel p-3.5 rounded-2xl border-amber-400/60 shadow-2xl flex items-center gap-3 text-xs text-amber-200 pointer-events-auto transform transition-all duration-300 translate-y-5 opacity-0';
  toast.innerHTML = `
    <span class="text-lg">✨</span>
    <div>
      <strong class="block text-amber-300 font-hud text-[10px] tracking-wider uppercase">${title}</strong>
      <span>${msg}</span>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('translate-y-5', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function renderLanternGrid() {
  const grid = document.getElementById('lanternGrid');
  if (!grid) return;
  grid.innerHTML = '';

  appData.friends.forEach((f, idx) => {
    const card = document.createElement('div');
    card.id = `lantern-card-${idx}`;
    card.className = `glass-card p-5 rounded-3xl text-center space-y-3 relative overflow-hidden border-amber-500/30 ${f.released ? 'border-amber-400 bg-amber-950/40' : ''}`;

    card.innerHTML = `
      <div class="relative w-20 h-24 mx-auto flex items-center justify-center my-1">
        <div class="absolute inset-0 bg-amber-400/25 rounded-full blur-xl ${f.released ? 'soft-glow-pulse' : ''}"></div>
        ${getSkyLanternSVG(f.style, f.released ? 'gentle-float' : '')}
      </div>

      <div class="space-y-1">
        <h4 class="font-bold text-base text-amber-200 font-vietnam">${f.name}</h4>
        <p class="font-thai text-xs text-amber-300/80 font-medium">${f.blessing}</p>
      </div>

      <button ${f.released ? 'disabled' : `onclick="releaseFriendLantern(${idx})"`} class="w-full mt-2 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition ${
        f.released
          ? 'bg-amber-500/10 text-amber-300/70 border border-amber-500/20 cursor-default flex items-center justify-center gap-1.5'
          : 'bg-gradient-to-r from-amber-300 to-amber-500 text-gray-950 hover:scale-105 shadow-[0_0_15px_rgba(251,191,36,0.5)] flex items-center justify-center gap-1.5'
      }">
        ${f.released ? '<i class="fa-solid fa-check text-emerald-400"></i><span>Đã Thả Đèn Trời</span>' : '<i class="fa-solid fa-fire text-amber-950"></i><span>Châm Lửa Thả Đèn</span>'}
      </button>
    `;

    grid.appendChild(card);
  });

  updateProgressHUD();
}

function releaseFriendLantern(idx) {
  const friend = appData.friends[idx];
  if (friend.released) return;

  friend.released = true;

  for (let i = 0; i < 6; i++) {
    spawn3DLantern(true);
  }

  playChimeSound();
  renderLanternGrid();
  updateSkyVault();

  showToast(`Đã châm lửa thả thành công Đèn Trời Hoàng Gia của ${friend.name} & Mở khóa lời chúc!`, 'YI PENG RITUAL 🪔');
  setTimeout(() => {
    selectFriendWish(idx);
    switchTab('wishes');
  }, 700);
}

function updateProgressHUD() {
  const releasedCount = appData.friends.filter(f => f.released).length;
  const total = appData.friends.length;
  const percent = Math.round((releasedCount / total) * 100);

  const textEl = document.getElementById('lanternProgressText');
  const percentEl = document.getElementById('lanternProgressPercent');
  const fillEl = document.getElementById('lanternProgressFill');
  const badgeNav = document.getElementById('navLanternBadge');

  if (textEl) textEl.innerText = `Đã Thả: ${releasedCount}/${total} Đèn Trời Nhóm 7 NỤ`;
  if (percentEl) percentEl.innerText = `${percent}%`;
  if (fillEl) fillEl.style.width = `${percent}%`;
  if (badgeNav) badgeNav.innerText = `${releasedCount}/${total}`;
}

function initWishLauncherListeners() {
  const wishTextarea = document.getElementById('userPersonalWish');
  if (wishTextarea) {
    wishTextarea.addEventListener('input', (e) => {
      const preview = document.getElementById('previewWishText');
      if (preview) preview.innerText = e.target.value ? `"${e.target.value}"` : '"Lời ước nguyện của Xuân Bích..."';
    });
  }
}

function launchGraduateMegaLantern() {
  const wishVal = document.getElementById('userPersonalWish')?.value.trim() || 'Chúc cử nhân Xuân Bích rực rỡ và thành công!';
  const thaiBlessing = document.getElementById('userThaiBlessing')?.value || 'ขอให้มีความสุขมากๆ';

  appData.userVault.push({
    wish: wishVal,
    thai: thaiBlessing,
    style: 'gold',
    time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  });

  playChimeSound();

  for (let i = 0; i < 8; i++) {
    spawn3DLantern(true);
  }

  showToast("Đã thả thành công chiếc Đèn Trời Hoàng Gia cá nhân lên bầu trời Chiang Mai!", "MEGA LANTERN LAUNCH 🪔");
  updateSkyVault();
}

function updateSkyVault() {
  const container = document.getElementById('skyVaultContainer');
  const countEl = document.getElementById('skyVaultCount');
  if (!container) return;

  let totalSkyLanterns = 0;

  const friendItems = appData.friends
    .filter(f => f.released)
    .map(f => {
      totalSkyLanterns += 1;
      return {
        name: `${f.name}`,
        wish: f.wish,
        thai: f.thai,
        style: f.style
      };
    });

  const userItems = appData.userVault.map(u => {
    totalSkyLanterns += 1;
    return {
      name: 'Xuân Bích (Chính Chủ)',
      wish: u.wish,
      thai: u.thai,
      style: u.style
    };
  });

  const allVaultItems = [...friendItems, ...userItems];

  if (countEl) countEl.innerText = `${totalSkyLanterns} Đèn Trên Bầu Trời`;

  if (allVaultItems.length === 0) {
    container.innerHTML = `<p class="col-span-3 text-xs text-gray-400 italic text-center py-4 font-vietnam">Chưa có chiếc đèn nào được thả. Hãy châm lửa chiếc đèn đầu tiên!</p>`;
    return;
  }

  container.innerHTML = allVaultItems.map(item => `
    <div class="glass-panel p-3.5 rounded-2xl border-amber-400/30 flex items-center gap-3">
      ${getSkyLanternSVG(item.style, 'w-8 h-10')}
      <div class="text-left overflow-hidden">
        <strong class="text-xs text-amber-300 block font-bold">${item.name}</strong>
        <p class="text-[11px] text-gray-300 truncate italic font-vietnam">"${item.wish}"</p>
      </div>
    </div>
  `).join('');
}

function renderFriendTabs() {
  const bar = document.getElementById('friendTabsBar');
  if (!bar) return;
  bar.innerHTML = '';

  appData.friends.forEach((f, idx) => {
    const btn = document.createElement('button');
    btn.className = `px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
      idx === activeFriendIdx
        ? 'bg-gradient-to-r from-amber-300 to-amber-500 text-gray-950 shadow-md'
        : 'glass-panel text-gray-300 hover:text-white'
    }`;
    btn.onclick = () => selectFriendWish(idx);
    btn.innerHTML = `
      <span>${f.name}</span>
      <span class="font-thai text-[10px] opacity-80">(${f.thai})</span>
      ${f.released ? '<i class="fa-solid fa-check text-[10px] text-emerald-400 ms-1"></i>' : '<i class="fa-solid fa-lock text-[10px] text-amber-400/70 ms-1"></i>'}
    `;
    bar.appendChild(btn);
  });

  renderWishCardContent();
}

function selectFriendWish(idx) {
  activeFriendIdx = idx;
  renderFriendTabs();
}

function renderWishCardContent() {
  const container = document.getElementById('wishDisplayCardContent');
  if (!container) return;

  const f = appData.friends[activeFriendIdx];
  if (!f) return;

  if (!f.released) {
    container.innerHTML = `
      <div class="md:col-span-4 flex flex-col items-center text-center space-y-3">
        <div class="w-24 h-24 rounded-full bg-amber-950/80 border-2 border-amber-400/40 flex items-center justify-center text-4xl shadow-inner text-amber-300">
          <i class="fa-solid fa-lock"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold text-amber-300">Lời Chúc Đang Khóa</h3>
          <p class="font-thai text-xs text-amber-200/80">${f.name} (${f.thai})</p>
          <span class="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-[10px] text-amber-300 font-hud font-bold mt-1 border border-amber-500/30">
            7 NỤ
          </span>
        </div>
      </div>

      <div class="md:col-span-8 space-y-4 text-left border-t md:border-t-0 md:border-l border-amber-500/30 pt-4 md:pt-0 md:ps-6">
        <div class="flex items-center gap-2 text-amber-300">
          <i class="fa-solid fa-key text-xl text-amber-400"></i>
          <span class="text-xs font-bold tracking-wider uppercase font-hud">CẦN THẮP ĐÈN TRỜI ĐỂ MỞ KHÓA</span>
        </div>

        <p class="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-vietnam font-medium bg-gray-950/60 p-4 rounded-2xl border border-amber-500/20">
          Hãy thắp sáng Đèn Trời tương ứng với <strong class="text-amber-300">${f.name}</strong> trong tab Lễ Hội Yi Peng để mở khóa lời chúc ý nghĩa từ người bạn này nhé!
        </p>

        <div class="pt-2 flex flex-wrap gap-2">
          <button onclick="goToFriendLantern(${activeFriendIdx})" class="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-gray-950 font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:scale-105 transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-arrow-right-to-bracket text-amber-950 text-sm"></i>
            <span>Đến Tab Thả Đèn Của ${f.name}</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="md:col-span-4 flex flex-col items-center text-center space-y-3">
      <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.5)] bg-gradient-to-br from-amber-900 to-indigo-900 flex items-center justify-center">
         <span class="text-4xl font-calligraphy text-amber-200 drop-shadow-md">${f.name.charAt(0).toUpperCase()}</span>
      </div>
      <div>
        <h3 class="text-xl font-bold text-amber-200 uppercase tracking-widest">${f.name}</h3>
        <p class="font-thai text-sm text-amber-300 font-bold">${f.thai}</p>
        <span class="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-[10px] text-amber-300 font-hud font-bold mt-1 border border-amber-500/30">
          7 NỤ
        </span>
      </div>
    </div>

    <div class="md:col-span-8 space-y-4 text-left border-t md:border-t-0 md:border-l border-amber-500/30 pt-4 md:pt-0 md:ps-6">
      <div class="flex items-center gap-2 text-amber-300">
        <i class="fa-solid fa-quote-left text-2xl text-amber-400"></i>
        <span class="text-xs font-bold tracking-wider uppercase font-hud">THÔNG ĐIỆP CHÚC MỪNG TỐT NGHIỆP</span>
      </div>

      <p class="text-sm sm:text-base text-gray-100 italic leading-relaxed font-vietnam font-medium bg-gray-950/40 p-5 rounded-2xl border border-amber-500/20 shadow-inner">
        "${f.wish}"
      </p>

      <div class="pt-2 flex items-center gap-2">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
          <i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
          <span>Đèn Trời Của ${f.name} Đã Được Thắp Sáng</span>
        </span>
      </div>
    </div>
  `;
}

function goToFriendLantern(idx) {
  switchTab('lanterns');
  setTimeout(() => {
    const card = document.getElementById(`lantern-card-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-amber-300', 'animate-pulse');
      setTimeout(() => card.classList.remove('ring-4', 'ring-amber-300', 'animate-pulse'), 3000);
    }
  }, 300);
}

function renderMemories() {
  const grid = document.getElementById('memoriesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  appData.memories.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = "glass-card rounded-2xl overflow-hidden cursor-pointer group border-amber-500/30 shadow-xl";
    card.onclick = () => openLightbox(idx);
    card.innerHTML = `
      <div class="h-60 sm:h-64 overflow-hidden relative">
        <img src="${m.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openLightbox(idx) {
  const m = appData.memories[idx];
  const content = document.getElementById('lightboxContent');
  if (!content) return;

  content.innerHTML = `
    <div class="rounded-2xl overflow-hidden mb-3 border border-amber-400/40 max-h-[75vh] shadow-2xl flex items-center justify-center bg-gray-950 relative">
      <img src="${m.img}" class="max-w-full max-h-[70vh] object-contain">
    </div>
    <h4 class="text-center text-sm font-bold text-amber-300 mb-3 font-vietnam">${m.title}</h4>
    <button onclick="closeLightbox()" class="w-full py-2.5 rounded-xl bg-amber-500 text-gray-950 font-black text-xs uppercase hover:bg-amber-400 transition">Đóng Ảnh</button>
  `;
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('hidden');
}

function closeLightbox(e) {
  if (!e || e.target.id === 'lightboxModal' || e.target.closest('button')) {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.add('hidden');
  }
}

function downloadWishSummary() {
  let content = `=== LỜI CHÚC TỐT NGHIỆP - TÂN CỬ NHÂN PHẠM HOÀI XUÂN BÍCH ===\n\n`;
  appData.friends.forEach((f, idx) => {
    content += `${idx + 1}. ${f.name} (${f.thai}):\n   "${f.wish}"\n\n`;
  });
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `LoiChuc_PhamHoaiXuanBich_NgonNguThai.txt`;
  link.click();
  showToast("Tệp ghi chép lời chúc đã được tải xuống!", "XUẤT DỮ LIỆU SUCCESS");
}

const offlineFortunes = [
  {
    type: "THƯỢNG THƯỢNG (大吉)",
    proverbThai: "ความพยายามอยู่ที่ไหน ความสำเร็จอยู่ที่นั่น",
    proverbPhonetic: "Khwam pha-ya-yam yu thi nai, khwam sam-ret yu thi nan",
    proverbMeaning: "Nơi đâu có nỗ lực, nơi đó chắc chắn có thành công rực rỡ.",
    fortuneAnalysis: "Quẻ Đại Cát Hoàng Gia! Tân cử nhân Xuân Bích mang vận khí hanh thông, công danh sự nghiệp bứt phá vượt bậc. Vốn tiếng Thái đỉnh cao sẽ đưa Bích đến những cơ hội hợp tác quốc tế lớn!",
    blessingMessage: "Chúc Bích vạn sự như ý, sự nghiệp thăng tiến vèo vèo, tiền tài rủng rỉnh!"
  },
  {
    type: "ĐẠI CÁT VƯƠNG GIẢ (大吉)",
    proverbThai: "โชคดีมีสุข อนาคตสดใส",
    proverbPhonetic: "Chok dee mee suk, a-na-khot sot sai",
    proverbMeaning: "May mắn ngập tràn, tương lai tươi sáng rộng mở.",
    fortuneAnalysis: "Quẻ Bói Tình Bạn & Cuộc Sống! Xuân Bích là ngôi sao may mắn của Nhóm 7 NỤ. Đi đâu cũng có quý nhân phù trợ, chị em 7 NỤ luôn hậu thuẫn hết mình trong mọi hành trình!",
    blessingMessage: "Chúc Bích luôn xinh đẹp, rạng rỡ và mãi gắn kết bền chặt cùng hội bạn thân!"
  },
  {
    type: "THƯỢNG CÁT CHIANG MAI (上吉)",
    proverbThai: "ขอให้ความฝันเป็นจริงทุกประการ",
    proverbPhonetic: "Kho hai khwam fan pen ching thuk pra-kan",
    proverbMeaning: "Nguyện ước mọi giấc mơ của Bích đều trở thành hiện thực.",
    fortuneAnalysis: "Quẻ Ước Nguyện Hoàng Gia! Mọi tâm nguyện Xuân Bích gửi gắm lên chiếc đèn trời Yi Peng Chiang Mai đều được đáp lời. Chuyến đi xứ sở Chùa Vàng sắp tới sẽ bùng nổ vô vàn kỷ niệm đẹp!",
    blessingMessage: "Chúc Bích tự tin chạm tới đỉnh cao ước mơ và tận hưởng hành trình tuổi trẻ rực rỡ!"
  }
];

const presetWishes = [
  "Chúc bản thân luôn giữ vững ngọn lửa đam mê với Ngôn Ngữ Thái, sự nghiệp rộng mở và ngập tràn hạnh phúc!",
  "Nguyện ước tương lai sẽ gặt hái thật nhiều thành công, vi vu khắp Thái Lan cùng Nhóm 7 NỤ!",
  "Chúc cử nhân Bích luôn tự tin, xinh đẹp, chinh phục mọi mục tiêu lớn trong cuộc sống!"
];

function getRandomPresetWish() {
  const wishTextarea = document.getElementById('userPersonalWish');
  if (wishTextarea) {
    const randomWish = presetWishes[Math.floor(Math.random() * presetWishes.length)];
    wishTextarea.value = randomWish;
    showToast("Đã chọn một lời ước nguyện rực rỡ cho Bích!", "GỢI Ý LỜI ƯỚC ✨");
  }
}

function switchAiSubTab(tabName) {
  ['fortune', 'poem'].forEach(t => {
    const subTab = document.getElementById(`aiSubTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`aiTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (subTab) subTab.classList.add('hidden');
    if (btn) btn.className = "px-4 py-2 rounded-xl text-xs font-bold glass-panel text-amber-300 transition flex items-center gap-2";
  });

  const activeSubTab = document.getElementById(`aiSubTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  const activeBtn = document.getElementById(`aiTabBtn${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  if (activeSubTab) activeSubTab.classList.remove('hidden');
  if (activeBtn) activeBtn.className = "px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-gray-950 transition flex items-center gap-2";
}

function drawAIFortune() {
  const loading = document.getElementById('aiFortuneLoading');
  const resultBox = document.getElementById('aiFortuneResult');
  const btn = document.getElementById('btnDrawFortune');
  const tubeVisual = document.getElementById('fortuneTubeVisual');
  const drawnStick = document.getElementById('drawnStickVisual');

  if (!loading || !resultBox || !btn) return;

  if (tubeVisual) tubeVisual.classList.add('tube-shaking');
  if (drawnStick) drawnStick.classList.add('hidden', 'stick-drawn');
  
  loading.classList.remove('hidden');
  resultBox.classList.add('hidden');
  btn.disabled = true;

  playChimeSound();

  setTimeout(() => {
    if (tubeVisual) tubeVisual.classList.remove('tube-shaking');
    if (drawnStick) drawnStick.classList.remove('hidden');

    const data = offlineFortunes[Math.floor(Math.random() * offlineFortunes.length)];
    resultBox.innerHTML = `
      <div class="text-center border-b border-amber-500/20 pb-3">
        <span class="text-xs font-hud font-bold text-amber-400 uppercase tracking-widest block mb-1">📜 QUẺ XĂM HOÀNG GIA: ${data.type}</span>
        <h4 class="font-thai text-lg font-bold text-amber-200">${data.proverbThai}</h4>
        <p class="text-[11px] text-amber-300 italic">(${data.proverbPhonetic})</p>
        <p class="text-xs font-semibold text-gray-200 mt-1 font-vietnam">"${data.proverbMeaning}"</p>
      </div>

      <div class="space-y-2 text-xs text-gray-200 leading-relaxed font-vietnam">
        <span class="font-bold text-amber-300 block">🔮 LỜI LUẬN QUẺ DÀNH CHO XUÂN BÍCH:</span>
        <p class="bg-amber-950/40 p-3 rounded-xl border border-amber-500/20">${data.fortuneAnalysis}</p>
      </div>

      <div class="p-3 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-200 flex items-center gap-2 font-vietnam">
        <span class="text-lg">✨</span>
        <p>${data.blessingMessage}</p>
      </div>
    `;
    loading.classList.add('hidden');
    resultBox.classList.remove('hidden');
    btn.disabled = false;
    showToast("Đã rút được Quẻ Xăm Đại Cát Hoàng Gia!", "RÚT QUẺ SUCCESS 🔮");
  }, 950);
}

const poemsList = [
  `Cử nhân Ngôn Ngữ bước đăng trình,\nBốn năm vinh quang ngập sắc xinh.\nThái Lan văn hóa tinh thông trọn,\nBích tỏa hào quang rạng gấm nhung!\n\n(ยินดีด้วยนะ ขอให้มีความสุขมากๆ)`,
  `Nhóm 7 NỤ mãi nghĩa tình sâu,\nMai, Vi, Quỳnh, Thi, Khôi, Minh đồng cầu.\nXuân Bích vương vãi bao ước nguyện,\nĐèn trời tung cánh vút cao sâu!\n\n(เพื่อนกันตลอดไป ขอให้โชคดี)`
];

function generateAIPoem() {
  const resultBox = document.getElementById('aiPoemResult');
  if (!resultBox) return;

  const randomPoem = poemsList[Math.floor(Math.random() * poemsList.length)];
  resultBox.innerHTML = `
    <div class="flex items-center justify-between border-b border-amber-500/20 pb-2">
      <span class="text-xs font-bold text-amber-300 font-hud">📜 BÀI THƠ THÁI - VIỆT MỪNG TỐT NGHIỆP</span>
      <button onclick="copyPoemToClipboard()" class="text-[11px] font-bold text-amber-300 hover:text-white bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-400/30">
        <i class="fa-solid fa-copy"></i> SAO CHÉP
      </button>
    </div>
    <pre id="poemTextContent" class="text-xs sm:text-sm text-amber-100 font-vietnam leading-relaxed whitespace-pre-wrap italic p-3 bg-gray-950/60 rounded-xl border border-amber-500/20">${randomPoem}</pre>
  `;
  showToast("Bài thơ song ngữ đã sẵn sàng!", "THƠ TỐT NGHIỆP 📜");
}

function copyPoemToClipboard() {
  const el = document.getElementById('poemTextContent');
  if (el) {
    const textarea = document.createElement('textarea');
    textarea.value = el.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast("Đã sao chép bài thơ vào khay nhớ tạm!", "SAO CHÉP SUCCESS");
  }
}

function loadDataFromCSV() {
  if (typeof Papa === 'undefined') {
    console.warn("PapaParse not loaded, using default data.");
    renderLanternGrid();
    renderFriendTabs();
    updateSkyVault();
    return;
  }

  Papa.parse('loi_chuc.csv', {
    download: true,
    header: false,
    complete: function(results) {
      const styles = ['gold', 'rose', 'violet', 'gold', 'rose', 'violet'];
      const defaultThaiNames = {
        'Mai': 'ไหม', 'Vi': 'วี', 'Quỳnh': 'ควิน',
        'Thi': 'ที', 'Khôi': 'คอย', 'Minh': 'มิน'
      };
      const defaultBlessings = {
        'Mai': 'ขอให้มีความสุขมากๆ',
        'Vi': 'ขอให้โชคดีในทุกเส้นทาง',
        'Quỳnh': 'อนาคตสดใสและรุ่งโรจน์',
        'Thi': 'ขอให้ความฝันเป็นจริง',
        'Khôi': 'ขอให้ประสบความสำเร็จ',
        'Minh': 'ขอให้มีแต่ความสุขและรอยยิ้ม'
      };

      const parsedRows = results.data.filter(row => row.length >= 2 && row[0].trim() !== '');

      // Merge CSV wish text into existing friends data (preserving style/thai/blessing)
      parsedRows.forEach((row) => {
        const name = row[0].trim();
        const wish = row[1].trim();
        const existingFriend = appData.friends.find(f => f.name === name);
        if (existingFriend) {
          existingFriend.wish = wish;
        } else {
          // If not found in pre-loaded list, add as new friend
          const idx = appData.friends.length;
          appData.friends.push({
            name: name,
            thai: defaultThaiNames[name] || 'เพื่อน',
            blessing: defaultBlessings[name] || 'ขอให้โชคดี',
            wish: wish,
            style: styles[idx % styles.length],
            released: false
          });
        }
      });

      renderLanternGrid();
      renderFriendTabs();
      updateSkyVault();
    },
    error: function(error) {
      console.error("Error parsing CSV:", error);
      // Still render with default data on CSV error
      renderLanternGrid();
      renderFriendTabs();
      updateSkyVault();
    }
  });
}

/* Expose Functions Globally */
window.switchTab = switchTab;
window.releaseFriendLantern = releaseFriendLantern;
window.launchGraduateMegaLantern = launchGraduateMegaLantern;
window.getRandomPresetWish = getRandomPresetWish;
window.selectFriendWish = selectFriendWish;
window.goToFriendLantern = goToFriendLantern;
window.reset3DCameraView = reset3DCameraView;
window.openLightbox = openLightbox;
window.openLightboxFromHero = openLightboxFromHero;
window.closeLightbox = closeLightbox;
window.downloadWishSummary = downloadWishSummary;
window.switchAiSubTab = switchAiSubTab;
window.drawAIFortune = drawAIFortune;
window.generateAIPoem = generateAIPoem;
window.copyPoemToClipboard = copyPoemToClipboard;
window.toggleBackgroundAudio = toggleBackgroundAudio;

window.addEventListener('DOMContentLoaded', () => {
  initThreeBG();
  initHeroGallery();
  initWishLauncherListeners();
  renderMemories();
  generateAIPoem();
  loadDataFromCSV();
});

