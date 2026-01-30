<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null);

const profile = ref({
  catchphrase: "Sites e IA para quem quer resultado",
  description:
    "Tudo em um só lugar para aprender e criar com IA + Experts. Mais rápido e com foco em resultado.",
});

const mainLinks = ref([
  {
    id: "academy",
    title: "Apptime Academy",
    description:
      "Aprenda o que importa para lançar e validar, sem perder tempo.",
    url: "https://apptime.com.br?utm_source=apptime-links",
    tag: "Para começar",
  },
  {
    id: "platform",
    title: "Apptime AI",
    description:
      "Crie e hospede seu app rapidamente com IA, sem complicação.",
    url: "https://apptime.ai?utm_source=apptime-links",
    tag: "Este site foi feito aqui",
  },
  {
    id: "agency",
    title: "Apptime Agency",
    description:
      "Transformamos suas ideias em sites e automações que funcionam de verdade.",
    url: "https://apptime.dev?utm_source=apptime-links",
    tag: "Nós criamos para você",
  },
]);

const socialLinks = ref([
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-instagram",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/company/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.gg/afcuMUuXju?utm_source=apptime-links",
    iconClass: "fa-brands fa-discord",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-github",
  },
]);

// HUD State
const mousePos = ref({ x: 0, y: 0 });
const systemTime = ref("");
const altitude = ref(45000);
const velocity = ref(28400);
const isMobile = ref(false);

const updateMobileStatus = () => {
    isMobile.value = window.innerWidth < 768;
};

// Starfield Animation Logic
let animationId: number;
let width = 0;
let height = 0;
const getStarCount = () => window.innerWidth < 768 ? 800 : 2600;
const stars: { x: number; y: number; z: number; speed: number; color: string; size: number; o: number }[] = [];
const nebulas: { x: number; y: number; radius: number; color: string; vx: number; vy: number }[] = [];
const baseSpeed = 1.2;
let targetSpeed = baseSpeed;
let currentSpeed = baseSpeed;
let lastStatsUpdate = 0;

const updateSystemStats = (timestamp: number) => {
    if (timestamp - lastStatsUpdate < 200) return;
    lastStatsUpdate = timestamp;
    
    const now = new Date();
    systemTime.value = now.toLocaleTimeString('pt-BR', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    altitude.value += (Math.random() - 0.5) * 10;
    velocity.value += (Math.random() - 0.5) * 5;
};

const getStarColor = () => {
    const r = Math.random();
    if (r > 0.95) return '#a855f7'; 
    if (r > 0.90) return '#fb923c'; 
    if (r > 0.85) return '#38bdf8'; 
    return '#ffffff';
};

const initNebulas = () => {
    nebulas.length = 0;
    const colors = ['rgba(168, 85, 247, 0.05)', 'rgba(251, 146, 60, 0.05)', 'rgba(30, 20, 100, 0.05)'];
    for (let i = 0; i < 5; i++) {
        const color = colors[i % colors.length] || colors[0];
        nebulas.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 400 + 300,
            color: color as string,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
        });
    }
};

const resetStar = (index: number, initial = false) => {
    const spread = width * 2; 
    let x = (Math.random() - 0.5) * spread;
    let y = (Math.random() - 0.5) * spread;
    const z = initial ? Math.random() * width : width;
    
    const starData = { 
        x, 
        y, 
        z, 
        speed: 1 + Math.random() * 2, 
        color: getStarColor(),
        size: 0.2 + Math.random() * 1.8,
        o: 0.3 + Math.random() * 0.7
    };

    if (stars[index]) {
        stars[index] = starData;
    } else {
        stars.push(starData);
    }
};

const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const canvas = canvasRef.value;
    if (canvas) {
        canvas.width = width;
        canvas.height = height;
    }
    
    stars.length = 0;
    const count = getStarCount();
    for (let i = 0; i < count; i++) {
        resetStar(i, true);
    }
    initNebulas();
};

const handleMouseMove = (e: MouseEvent) => {
    mousePos.value = { x: e.clientX, y: e.clientY };
};

const handleMouseDown = () => {
    targetSpeed = baseSpeed * 5;
};

const handleMouseUp = () => {
    targetSpeed = baseSpeed;
};

const draw = (timestamp: number) => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fade effect for trails
    ctx.fillStyle = "rgba(8, 4, 18, 0.2)"; 
    ctx.fillRect(0, 0, width, height);

    // Speed interpolation
    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    // Draw Nebulas
    nebulas.forEach(nebula => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;
        
        if (nebula.x < -nebula.radius) nebula.x = width + nebula.radius;
        if (nebula.x > width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = height + nebula.radius;
        if (nebula.y > height + nebula.radius) nebula.y = -nebula.radius;

        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius);
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(nebula.x - nebula.radius, nebula.y - nebula.radius, nebula.radius * 2, nebula.radius * 2);
    });

    const cx = width / 2;
    const cy = height / 2;
    
    // Parallax mouse effect
    const mx = (mousePos.value.x - cx) / 25;
    const my = (mousePos.value.y - cy) / 25;

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!star) continue;
      
        star.z -= star.speed * (currentSpeed / 2);

        if (star.z <= 0) {
            resetStar(i);
            continue;
        }

        // Project 3D to 2D with parallax
        const px = (star.x / star.z) * width + cx - (mx * (1 - star.z / width));
        const py = (star.y / star.z) * height + cy - (my * (1 - star.z / width));

        if (px < -100 || px > width + 100 || py < -100 || py > height + 100) {
            continue;
        }

        const normZ = (1 - star.z / width);
        const opacity = normZ * star.o;
        const r = Math.max(0.1, normZ * star.size);

        // Convert hex to rgba for performance (avoiding globalAlpha)
        const rgb = star.color === '#a855f7' ? '168, 85, 247' :
                    star.color === '#fb923c' ? '251, 146, 60' :
                    star.color === '#38bdf8' ? '56, 189, 248' : '255, 255, 255';
        
        ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
        
        // Use fillRect instead of arc for performance - fits HUD aesthetic
        ctx.fillRect(px - r, py - r, r * 2, r * 2);
        
        // Star streaks when fast or close
        if (star.z < width * 0.2) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb}, ${opacity * 0.2})`;
            ctx.lineWidth = Math.max(0.5, r / 2);
            const streakLen = 1 + (currentSpeed * 1.5);
            ctx.moveTo(px, py);
            const zOff = star.z + star.speed * streakLen;
            const prevX = (star.x / zOff) * width + cx - (mx * (1 - zOff / width));
            const prevY = (star.y / zOff) * height + cy - (my * (1 - zOff / width));
            ctx.lineTo(prevX, prevY);
            ctx.stroke();
        }
    }
    
    updateSystemStats(timestamp);
    animationId = requestAnimationFrame(draw);
};

onMounted(() => {
  window.addEventListener('resize', resize);
  window.addEventListener('resize', updateMobileStatus);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
  resize();
  updateMobileStatus();
  requestAnimationFrame(draw);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', resize);
  window.removeEventListener('resize', updateMobileStatus);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mouseup', handleMouseUp);
});
</script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-[#0a0510] text-white font-sans selection:bg-primary selection:text-white">
    
    <!-- Starfield Background -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>
    
    <!-- CRT Scanline Effect -->
    <div class="absolute inset-0 pointer-events-none z-[1] opacity-[0.07] bg-scanlines mix-blend-overlay"></div>
    
    <!-- Cockpit Frame & Vignette -->
    <div class="absolute inset-0 pointer-events-none z-[2] bg-cockpit-vignette opacity-80"></div>
    <div class="absolute inset-0 pointer-events-none z-[3] border-[40px] border-black/20 blur-2xl"></div>

    <!-- HUD Overlay Dynamic Elements -->
    <div class="absolute inset-0 pointer-events-none z-[5] p-4 md:p-8 flex flex-col justify-between overflow-hidden font-oxanium">
        <!-- Top HUD -->
        <div class="flex justify-between items-start">
            <div class="flex flex-col gap-2">
                <div class="border-t-2 border-l-2 border-primary/60 w-20 md:w-24 h-12 rounded-tl-field relative bg-primary/5 backdrop-blur-[2px]">
                    <span class="absolute top-1 left-2 text-[8px] md:text-[9px] text-primary/80 tracking-tighter">HDG.312°</span>
                    <span class="absolute bottom-1 left-2 text-[9px] md:text-[10px] text-primary font-mono">{{ systemTime }}</span>
                </div>
                <div class="flex gap-1">
                    <div v-for="i in 5" :key="i" class="h-1 w-2 md:w-4 bg-primary/20 rounded-field overflow-hidden">
                        <div class="h-full bg-primary animate-pulse" :style="{ animationDelay: `${i * 200}ms`, width: '100%' }"></div>
                    </div>
                </div>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 md:gap-1 scale-[0.8] md:scale-100 transition-all duration-300">
                <div class="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
                <div class="text-[9px] md:text-[10px] text-primary/60 tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap">Feito na Apptime AI</div>
                <div class="h-[1px] w-48 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </div>

            <div class="flex flex-col items-end gap-2">
                <div class="border-t-2 border-r-2 border-primary/60 w-20 md:w-24 h-12 rounded-tr-field relative bg-primary/5 backdrop-blur-[2px]">
                    <span class="absolute top-1 right-2 text-[8px] md:text-[9px] text-primary/80 tracking-tighter">REACT.CORE</span>
                    <span class="absolute bottom-1 right-2 text-[9px] md:text-[10px] text-primary font-mono">99.2%</span>
                </div>
                <div class="text-[7px] md:text-[8px] text-secondary/60 font-mono uppercase">See you space cowboy...</div>
            </div>
        </div>

        <!-- Center Aiming HUD (Subtle) -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-field flex items-center justify-center pointer-events-none">
            <div class="w-full h-[1px] bg-primary/5 absolute"></div>
            <div class="h-full w-[1px] bg-primary/5 absolute"></div>
            <div class="w-12 h-12 border-2 border-primary/20 rounded-field animate-ping"></div>
        </div>
        
        <!-- Bottom HUD -->
         <div class="flex justify-between items-end">
             <div class="flex flex-col gap-2">
                 <div class="text-[8px] text-primary/40 font-mono tracking-widest uppercase">Alt: {{ Math.floor(altitude) }}m</div>
                 <div class="border-b-2 border-l-2 border-primary/60 w-20 md:w-24 h-12 rounded-bl-field relative bg-primary/5 backdrop-blur-[2px]">
                      <span class="absolute bottom-1 left-2 text-[9px] md:text-[10px] text-primary font-mono">VEL: {{ Math.floor(velocity) }}</span>
                 </div>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center scale-[0.8] md:scale-100 transition-all duration-300">
                 <div class="font-mono text-[8px] md:text-[9px] text-primary/60 tracking-[0.3em] md:tracking-[0.5em] mb-2 uppercase whitespace-nowrap">Pronto para decolar?</div>
                 <div class="flex gap-1 mb-1">
                    <div v-for="i in (isMobile ? 8 : 12)" :key="i" class="w-1 h-3 rounded-field" :class="i < 6 ? 'bg-primary/60' : 'bg-primary/40'"></div>
                 </div>
                 <div class="hidden md:block w-64 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            <div class="flex flex-col items-end gap-2">
                <div class="text-[8px] text-primary/40 font-mono tracking-widest uppercase truncate w-20 md:w-24 text-right">Target_Acq</div>
                <div class="border-b-2 border-r-2 border-primary/60 w-20 md:w-24 h-12 rounded-br-field relative bg-primary/5 backdrop-blur-[2px]">
                      <span class="absolute bottom-1 right-2 text-[9px] md:text-[10px] text-primary font-mono">X-{{ (mousePos.x/100).toFixed(1) }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Dynamic Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-3 md:px-6 py-26 md:py-20 flex flex-col items-center gap-10 h-full">
      
      <!-- Profile HUD Module -->
      <header class="flex flex-col items-center text-center gap-6 animate-slide-down relative w-full">
        <div class="absolute -top-20 -inset-x-20 h-64 bg-secondary/10 blur-[100px] rounded-field"></div>
        
        <div class="relative group cursor-crosshair">
            <!-- HUD Target Circle -->
            <div class="absolute -inset-12 border border-primary/10 rounded-field animate-spin-slow-reverse"></div>
            <div class="absolute -inset-16 border border-secondary/5 rounded-field animate-spin-slow"></div>
            
            <div class="absolute -inset-1 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-field blur transition duration-511 animate-pulse-slow"></div>
            <div class="relative bg-black/40 p-6 rounded-field border border-white/5 backdrop-blur-md">
                <Logo size="2xl" />
            </div>
             
             <!-- Corner brackets for logo -->
             <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40"></div>
             <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40"></div>
             <div class="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40"></div>
             <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40"></div>
        </div>
        
        <div class="space-y-4 relative">
          <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] font-oxanium italic">
            {{ profile.catchphrase }}
          </h1>
          <div class="flex items-center gap-4 justify-center">
            <div class="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div class="w-2 h-2 bg-primary rotate-45 animate-pulse"></div>
            <div class="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <p class="max-w-lg mx-auto text-xs md:text-sm leading-relaxed font-mono tracking-wide uppercase text-base-content">
            <span class="text-primary">></span> {{ profile.description }}
          </p>
        </div>
      </header>

      <!-- Links Holographic Panels -->
      <main class="w-full flex flex-col gap-6 perspective-container px-2">
        <a 
          v-for="(item, index) in mainLinks" 
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="holo-card group relative flex flex-col md:flex-row items-center md:items-start gap-4 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
            <!-- Border Glows -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-field transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-primary group-hover:bg-primary/5 opacity-60"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-field transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-primary group-hover:bg-primary/5 opacity-60"></div>
          
            <!-- Moving Grid Background (Subtle) -->
            <div class="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

            <!-- Content -->
            <div class="flex-grow z-10 w-full text-left relative">
                <div class="flex justify-between items-start mb-2">
                    <span v-if="item.tag" class="font-oxanium text-xs uppercase tracking-[0.2em] px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary group-hover:border-primary group-hover:text-white transition-colors">
                        {{ item.tag }}
                    </span>
                    <span class="text-[9px] font-mono text-primary/30 group-hover:text-primary/60 transition-colors">0{{ index + 1 }}</span>
                </div>

                <h2 class="font-oxanium font-bold uppercase italic text-xl md:text-2xl text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                    {{ item.title }}
                </h2>
                
                <p class="text-sm md:text-base text-base-content/80 font-mono leading-relaxed group-hover:text-base-content transition-colors">
                    {{ item.description }}
                </p>

                <!-- Status Indicator -->
                <div class="mt-4 flex items-center gap-2 opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div class="w-2 h-2 rounded-field bg-primary animate-ping"></div>
                    <span class="text-[10px] font-oxanium text-base-content/80 group-hover:text-primary tracking-widest uppercase">Acesse Agora</span>
                </div>
            </div>
        </a>
      </main>

      <!-- Socials -->
      <footer class="flex flex-col items-center gap-6 w-full mt-2">
        <div class="flex gap-4 items-center justify-center p-4 rounded-box bg-black/40 border border-white/5 backdrop-blur-sm">
          <a 
            v-for="social in socialLinks" 
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="group relative p-2 transition-all duration-300 hover:scale-110"
            :title="social.name"
          >
            <div class="absolute inset-0 bg-primary/20 rounded-field blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i :class="social.iconClass" class="relative text-2xl text-primary/80 group-hover:text-primary transition-colors"></i>
          </a>
        </div>
        
        <div class="text-center font-mono text-[9px] text-primary/30 uppercase tracking-[0.2em] hover:text-primary/60 transition-colors">
          <p class="mb-1">© {{ new Date().getFullYear() }} Apptime Serviços de Internet Ltda.</p>
          <p class="mb-1">Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.font-oxanium { font-family: 'Oxanium', sans-serif; }

.bg-scanlines {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 127, 0, 0.1) 50%,
        rgba(255, 127, 0, 0.1)
    );
    background-size: 100% 4px;
}

.bg-cockpit-vignette {
    background: radial-gradient(
        circle at center,
        transparent 40%,
        rgba(10, 5, 25, 0.4) 70%,
        rgba(5, 2, 12, 0.98) 100%
    );
}

.bg-grid-pattern {
    background-image: 
        linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}

.holo-card {
    background: rgba(20, 10, 30, 0.4);
    backdrop-filter: blur(12px) saturate(180%);
    clip-path: polygon(
        15px 0, 
        100% 0, 
        100% calc(100% - 15px), 
        calc(100% - 15px) 100%, 
        0 100%, 
        0 15px
    );
    border: 1px solid rgba(249, 115, 22, 0.08);
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
}

.holo-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(249, 115, 22, 0.03), transparent);
    pointer-events: none;
}

.holo-card:hover {
    background: rgba(30, 15, 45, 0.6);
    box-shadow: 
        0 0 30px rgba(249, 115, 22, 0.1),
        inset 0 0 15px rgba(249, 115, 22, 0.05);
}

@media (max-width: 768px) {
    .holo-card {
        backdrop-filter: blur(6px) saturate(150%);
    }
}

@keyframes scan-vertical {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(1000%); }
}

@keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes spin-slow-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
}

.animate-scan-vertical {
    animation: scan-vertical 3s linear infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 5s ease-in-out infinite;
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
    animation: spin-slow-reverse 15s linear infinite;
}

.animate-slide-down {
    animation: slideDown 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Custom scrollbar for HUD feel */
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb {
    background: rgba(249, 115, 22, 0.3);
    border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
    background: rgba(249, 115, 22, 0.5);
}
</style>

