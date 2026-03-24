<script setup lang="ts">
const profile = ref({
  title: 'Crie e hospede sites com IA + Experts',
  subtitle: [
    'Simples como pedir uma pizza 🍕',
    'Profissional com resultados reais 🚀',
  ],
});

const mainLinks = ref([
  {
    id: 'academy',
    title: 'Seu site com IA em minutos',
    description:
      'Crie e publique seu site profissional rapidamente com IA, sem complicações.',
    url: 'https://apptime.com.br?utm_source=apptime-links',
    tag: 'Comece por aqui',
    cta: 'Quero criar agora',
    themeColorRgb: '236, 72, 153',
    textClass: 'group-hover:text-pink-400',
    tagClass:
      'border-pink-500/30 bg-pink-500/10 text-pink-400 group-hover:text-pink-300 group-hover:border-pink-400',
    ctaClass: 'text-pink-400',
  },
  {
    id: 'agency',
    title: 'Experts criam seu projeto',
    description:
      'Transformamos suas ideias em sites e automações que funcionam de verdade.',
    url: 'https://apptime.dev?utm_source=apptime-links',
    tag: 'Agência para resultados',
    cta: 'Quero resultados',
    themeColorRgb: '59, 130, 246',
    textClass: 'group-hover:text-blue-400',
    tagClass:
      'border-blue-500/30 bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400',
    ctaClass: 'text-blue-400',
  },
]);

const socialLinks = ref([
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-instagram',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-linkedin',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/afcuMUuXju?utm_source=apptime-links',
    iconClass: 'fa-brands fa-discord',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-github',
  },
]);
</script>

<template>
  <div
    class="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white flex flex-col justify-center items-center py-16 px-4 md:px-8 overflow-hidden relative"
  >
    <!-- Dynamic Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-pink-600/10 blur-[120px] mix-blend-screen animate-blob"
      ></div>
      <div
        class="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-[40%] left-[10%] w-[80%] h-[80%] rounded-full bg-orange-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000"
      ></div>
      <div class="absolute inset-0 opacity-20 mix-blend-overlay"></div>
    </div>

    <div class="relative z-10 w-full mx-auto flex flex-col gap-12">
      <!-- Profile section -->
      <header
        class="flex flex-col items-center text-center gap-6 md:gap-8 animate-slide-down"
      >
        <!-- Logo Container with glow -->
        <a
          class="relative group"
          href="https://apptime.ai?utm_source=apptime-links"
          target="_blank"
        >
          <div
            class="absolute -inset-1 bg-gradient-to-r from-pink-600 via-orange-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"
          ></div>
          <div
            class="relative h-20 md:h-24 bg-base-100/80 backdrop-blur-xl rounded-3xl flex items-center justify-center p-4 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          >
            <Logo size="2xl" />
          </div>
        </a>

        <div class="space-y-3 px-2 max-w-2xl mx-auto">
          <h1
            class="text-3xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-sm leading-tight"
          >
            {{ profile.title }}
          </h1>
          <div class="flex flex-col gap-1">
            <p
              v-for="(line, index) in profile.subtitle"
              :key="index"
              class="text-xl md:text-2xl text-neutral-400 font-medium italic leading-relaxed"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </header>

      <!-- Main Links -->
      <main
        class="w-full flex flex-col gap-4 perspective-1000 max-w-xl mx-auto"
      >
        <a
          v-for="(item, index) in mainLinks"
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="group relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 overflow-hidden animate-slide-up"
          :style="
            {
              '--theme-color-rgb': item.themeColorRgb,
              'animation-delay': `${index * 150 + 200}ms`,
            } as any
          "
        >
          <!-- Shiny sweep effect -->
          <div
            class="absolute inset-0 -translate-x-full group-hover:animate-sweep bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-20"
          ></div>

          <!-- Radial Glow on Hover with Specific Color -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style="
              background: radial-gradient(
                400px circle at right top,
                rgba(var(--theme-color-rgb), 0.15),
                transparent 60%
              );
            "
          ></div>

          <!-- Colored Border Glow -->
          <div
            class="absolute inset-0 border-2 rounded-2xl border-transparent group-hover:border-[rgba(var(--theme-color-rgb),0.4)] transition-colors duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(var(--theme-color-rgb),0)] group-hover:shadow-[inset_0_0_20px_rgba(var(--theme-color-rgb),0.1)]"
          ></div>

          <!-- Card Content -->
          <div class="flex-grow z-10 w-full text-left relative">
            <div class="flex justify-between items-start mb-3">
              <span
                v-if="item.tag"
                :class="[
                  'text-xs md:text-sm font-semibold px-3 py-1 rounded-full border backdrop-blur-sm transition-all duration-300 shadow-lg',
                  item.tagClass,
                ]"
              >
                {{ item.tag }}
              </span>
            </div>

            <h2
              class="font-bold text-xl md:text-2xl text-neutral-100 transition-colors tracking-tight mb-2 group-hover:drop-shadow-[0_0_8px_rgba(var(--theme-color-rgb),0.5)]"
              :class="item.textClass"
            >
              {{ item.title }}
              <i
                class="fa-solid fa-arrow-right inline-block ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              ></i>
            </h2>

            <p
              class="text-sm md:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed"
            >
              {{ item.description }}
            </p>

            <!-- Interactive Colored CTA -->
            <div
              class="mt-4 flex items-center gap-2.5 opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            >
              <div
                class="w-2 h-2 rounded-full shadow-[0_0_12px_rgba(var(--theme-color-rgb),1)] animate-pulse"
                style="background-color: rgb(var(--theme-color-rgb))"
              ></div>
              <span
                class="text-sm md:text-base font-bold transition-colors"
                :class="item.ctaClass"
                >{{ item.cta }}</span
              >
            </div>
          </div>
        </a>
      </main>

      <!-- Social Footer -->
      <footer
        class="flex flex-col items-center gap-8 w-full animate-fade-in"
        style="animation-delay: 800ms"
      >
        <div class="flex gap-4 md:gap-6 items-center justify-center">
          <a
            v-for="social in socialLinks"
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="group relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            :title="social.name"
          >
            <div
              class="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full scale-100 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            ></div>
            <i
              :class="social.iconClass"
              class="relative text-xl text-neutral-400 group-hover:text-white transition-colors duration-300"
            ></i>
          </a>
        </div>

        <div class="text-center text-xs text-neutral-500 space-y-1">
          <p>
            © {{ new Date().getFullYear() }} Apptime Serviços de Internet Ltda.
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.animate-slide-down {
  animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animate-blob {
  animation: blob 15s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-sweep {
  animation: sweep 1.5s ease-in-out infinite;
}

.animate-tilt {
  animation: tilt 10s infinite linear;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-40px, 40px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes sweep {
  0% {
    transform: translateX(-100%) skewX(12deg);
  }
  100% {
    transform: translateX(200%) skewX(12deg);
  }
}

@keyframes tilt {
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
}

.perspective-1000 {
  perspective: 1000px;
}
</style>
