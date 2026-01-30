<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null);

const profile = ref({
  catchphrase: "Idéias em negócios reais, sem complicar",
  description:
    "Tudo em um só lugar para aprender, criar com IA ou com Experts. Mais rápido, mais simples e com foco em resultado.",
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

// Starfield Animation Logic
let animationId: number;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  
  // Star parameters
  const starCount = 1500;
  const stars: { x: number; y: number; z: number; speed: number; color: string }[] = [];
  const baseSpeed = 4.0; 
  
  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Initialize stars
    stars.length = 0;
    for (let i = 0; i < starCount; i++) {
        resetStar(i, true);
    }
  };

  const getStarColor = () => {
    const r = Math.random();
    if (r > 0.8) return '#a855f7'; // Purple-500
    if (r > 0.6) return '#d8b4fe'; // Purple-300
    if (r > 0.4) return '#e879f9'; // Fuchsia
    return '#ffffff'; // White
  }

  const resetStar = (index: number, initial = false) => {
    const spread = width + height; 
    let x = (Math.random() - 0.5) * spread;
    let y = (Math.random() - 0.5) * spread;

    const z = initial ? Math.random() * width : width;
    
    if (stars[index]) {
        stars[index].x = x;
        stars[index].y = y;
        stars[index].z = z;
        stars[index].speed = baseSpeed + Math.random();
        stars[index].color = getStarColor();
    } else {
        stars.push({ x, y, z, speed: baseSpeed + Math.random(), color: getStarColor() });
    }
  };

  const draw = () => {
    // Warp speed trail effect - Slight purple tint in the void
    ctx.fillStyle = "rgba(10, 5, 20, 0.3)"; 
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!star) continue;
      
        // Update Z
        star.z -= star.speed;

        // Reset if passed viewer
        if (star.z <= 0) {
            resetStar(i);
            continue;
        }

        const px = (star.x / star.z) * width + cx;
        const py = (star.y / star.z) * height + cy;

        // Size grows as it gets closer
        const r = (1 - star.z / width) * 3.5; 

        if (px < 0 || px > width || py < 0 || py > height) {
            continue;
        }

        const opacity = (1 - star.z / width);
        ctx.beginPath();
        const flicker = Math.random() > 0.9 ? 0.5 : 1;
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity * flicker;
        ctx.arc(px, py, r > 0 ? r : 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
    
    animationId = requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  resize();
  draw();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-[#0a0510] text-white font-sans selection:bg-orange-500 selection:text-white">
    
    <!-- Starfield Background -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>
    
    <!-- CRT Scanline Effect -->
    <div class="absolute inset-0 pointer-events-none z-[1] opacity-20 bg-scanlines mix-blend-overlay"></div>
    
    <!-- Cockpit Vignette -->
    <div class="absolute inset-0 pointer-events-none z-[2] bg-cockpit-vignette"></div>

    <!-- HUD Overlay Static Elements -->
    <div class="absolute inset-0 pointer-events-none z-[5] p-6 flex flex-col justify-between overflow-hidden">
        <!-- Top HUD -->
        <div class="flex justify-between items-start opacity-70">
            <div class="border-t-2 border-l-2 border-orange-500/50 w-16 h-16 rounded-tl-xl relative">
                <span class="absolute top-2 left-2 font-mono text-[10px] text-orange-400">SYS.01</span>
            </div>
            <div class="flex gap-4">
                 <div class="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
            </div>
            <div class="border-t-2 border-r-2 border-orange-500/50 w-16 h-16 rounded-tr-xl relative">
                 <span class="absolute top-2 right-2 font-mono text-[10px] text-orange-400">PWR.99%</span>
            </div>
        </div>
        
        <!-- Bottom HUD -->
         <div class="flex justify-between items-end opacity-70">
            <div class="border-b-2 border-l-2 border-orange-500/50 w-16 h-16 rounded-bl-xl relative">
                 <span class="absolute bottom-2 left-2 font-mono text-[10px] text-orange-400 blur-[0.5px]">VEL.MACH.10</span>
            </div>
            <div class="text-center">
                 <div class="font-mono text-[10px] text-orange-500/70 tracking-[0.5em] mb-2 uppercase">Pronto para lançar?</div>
                 <div class="w-64 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
            <div class="border-b-2 border-r-2 border-orange-500/50 w-16 h-16 rounded-br-xl relative">
                  <span class="absolute bottom-2 right-2 font-mono text-[10px] text-orange-400">COORD.X09</span>
            </div>
        </div>
    </div>

    <!-- Dynamic Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-6 py-20 flex flex-col items-center gap-10 h-full">
      
      <!-- Profile HUD Module -->
      <header class="flex flex-col items-center text-center gap-6 animate-slide-down relative">
        <div class="absolute -inset-10 bg-orange-500/10 blur-3xl rounded-full"></div>
        
        <div class="relative group cursor-crosshair">
            <div class="absolute -inset-0.5 bg-gradient-to-b from-orange-400/20 to-red-600/20 rounded-full blur transition duration-500 animate-pulse-slow"></div>
                <Logo size="2xl" />
             <!-- HUD Target Circle -->
             </div>
        
        <div class="space-y-3 relative">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-white to-orange-300 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
            {{ profile.catchphrase.toUpperCase() }}
          </h1>
          <div class="h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          <p class="text-orange-100/80 max-w-lg mx-auto text-sm leading-relaxed font-mono">
            >> {{ profile.description }}
          </p>
        </div>
      </header>

      <!-- Links Holographic Panels -->
      <main class="w-full flex flex-col gap-4 perspective-container px-2">
        <a 
          v-for="(item, index) in mainLinks" 
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="holo-card group relative flex flex-col md:flex-row items-center md:items-start gap-4 p-5 overflow-hidden transition-all duration-300"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
            <!-- Border Glows -->
            <div class="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-orange-500/50 rounded-tl transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-orange-400 group-hover:border-opacity-100 opacity-60"></div>
            <div class="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-orange-500/50 rounded-br transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-orange-400 group-hover:border-opacity-100 opacity-60"></div>
          
            <!-- Active Scan Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent -translate-x-[200%] group-hover:animate-scan-once"></div>

            <!-- Content -->
            <div class="flex-grow z-10 w-full text-center md:text-left">
              <span v-if="item.tag" class="font-mono text-xs uppercase tracking-widest px-2 rounded border border-orange-900 bg-orange-950/50 text-orange-400 group-hover:bg-orange-900/50 group-hover:text-orange-200 transition-colors shadow-[0_0_10px_-3px_rgba(249,115,22,0.5)]">
                        // {{ item.tag }}
                    </span>
                <div class="flex flex-col md:flex-row items-center gap-3 mb-1 mt-2 justify-center md:justify-start">
                    <h2 class="font-bold text-lg text-white group-hover:text-orange-300 transition-colors tracking-wide drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
                    {{ item.title }}
                    </h2>
                    
                 </div>
                <p class="text-sm text-orange-200/60 font-mono leading-relaxed group-hover:text-orange-100 transition-colors">
                    {{ item.description }}
                </p>
            </div>
        </a>
      </main>

      <!-- Socials -->
      <footer class="flex flex-col items-center gap-6 w-full mt-2">
        <div class="flex gap-4 items-center justify-center p-4 rounded-full bg-black/40 border border-white/5 backdrop-blur-sm">
          <a 
            v-for="social in socialLinks" 
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="group relative p-2 transition-all duration-300 hover:scale-110"
            :title="social.name"
          >
            <div class="absolute inset-0 bg-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i :class="social.iconClass" class="relative text-2xl text-orange-300/50 group-hover:text-orange-300 transition-colors"></i>
          </a>
        </div>
        
        <div class="text-center font-mono text-[9px] text-orange-500/30 uppercase tracking-[0.2em] hover:text-orange-500/60 transition-colors">
          <p class="mb-1">© {{ new Date().getFullYear() }} Apptime Serviços de Internet Ltda.</p>
          <p class="mb-1">Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.bg-scanlines {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0) 50%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.2)
    );
    background-size: 100% 4px;
}

.bg-cockpit-vignette {
    background: radial-gradient(
        circle at center,
        transparent 50%,
        rgba(10, 5, 20, 0.6) 80%,
        rgba(10, 5, 20, 0.95) 100%
    );
}

.holo-card {
    background: rgba(30, 20, 40, 0.6);
    backdrop-filter: blur(8px);
    clip-path: polygon(
        10px 0, 
        100% 0, 
        100% calc(100% - 10px), 
        calc(100% - 10px) 100%, 
        0 100%, 
        0 10px
    );
    border: 1px solid rgba(249, 115, 22, 0.1);
}

.holo-card:hover {
    background: rgba(40, 25, 50, 0.8);
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.15), inset 0 0 10px rgba(249, 115, 22, 0.05);
}

@keyframes scan-once {
    0% { transform: translateX(-150%) skewX(-20deg); }
    100% { transform: translateX(200%) skewX(-20deg); }
}

@keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes spin-slow-reverse {
    from { transform: rotate(360deg) scale(1.1); }
    to { transform: rotate(0deg) scale(1.1); }
}

.animate-scan-once {
    animation: scan-once 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

.animate-spin-slow-reverse {
    animation: spin-slow-reverse 15s linear infinite;
}

.animate-slide-down {
    animation: slideDown 1s ease-out forwards;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>

