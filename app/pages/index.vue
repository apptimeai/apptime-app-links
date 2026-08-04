<script setup lang="ts">
useSeoMeta({
  title: 'Apptime | Crie site, posts e marca com IA em minutos',
  description:
    'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
  ogTitle: 'Apptime | Crie site, posts e marca com IA em minutos',
  ogDescription:
    'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
  twitterTitle: 'Apptime | Crie site, posts e marca com IA em minutos',
  twitterDescription:
    'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
});

const appImages = ref([
  '/images/apps/akira_appti_me.webp',
  '/images/apps/beijo-doce-confeitari-zy1mhxba_appti_me.webp',
  '/images/apps/cardapio-ehfjjv_appti_me.webp',
  '/images/apps/cardapio-restaurante-italiano-tp2n40zg_appti_me.webp',
  '/images/apps/cathedra_appti_me.webp',
  '/images/apps/cns_com_br.webp',
  '/images/apps/jogo-luta-3d-mobile-combate-personalizaca-a0qzw7ta_appti_me.webp',
  '/images/apps/loupeloupe_com.webp',
  '/images/apps/mapa-interativo-moder-dduv9pth_appti_me.webp',
  '/images/apps/mimi-se_appti_me.webp',
  '/images/apps/observatorio-migracao-religiao_appti_me.webp',
  '/images/apps/quiz-emagrecimento-cartoon-dqmcchko_appti_me.webp',
  '/images/apps/souzalimaodontologia_com.webp',
  '/images/apps/teste-mbti-lb63ify0_appti_me.webp',
]);

const mainLinks = ref([
  {
    id: 'academy',
    title: 'Crie Tudo com IA em Minutos',
    description:
      'Crie sites, posts, marca e entregáveis em minutos. Mais foco criativo, menos trabalho repetitivo. Sem mensalidade.',
    url: 'https://apptime.com.br?utm_source=apptime-links',
    tag: 'Comece agora',
    cta: 'Tirar ideia do papel',
    themeColorRgb: '255, 107, 0', // Primary (Orange)
    textClass: 'group-hover:text-primary',
    tagClass:
      'border-primary/30 bg-primary/10 text-primary group-hover:border-primary/50',
    ctaClass: 'text-primary',
  },
  {
    id: 'agency',
    title: 'Projetos Sob Medida & Experts',
    description:
      'Quer um projeto exclusivo? Nossa equipe de experts transforma suas ideias em sites, apps e automações sob medida.',
    url: 'https://apptime.dev?utm_source=apptime-links',
    tag: 'Agência Expert',
    cta: 'Falar com especialista',
    themeColorRgb: '0, 191, 255', // Cyan/Blue
    textClass: 'group-hover:text-[#00BFFF]',
    tagClass:
      'border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF] group-hover:border-[#00BFFF]/50',
    ctaClass: 'text-[#00BFFF]',
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
    class="min-h-screen flex flex-col font-archivo relative bg-base-100 text-base-content overflow-x-hidden selection:bg-primary/20 selection:text-primary"
  >
    <!-- Ambient Glow Background Effects -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-primary/10 blur-[150px] rounded-full animate-pulse"
        style="animation-duration: 8s"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-secondary/10 blur-[150px] rounded-full animate-pulse"
        style="animation-duration: 10s; animation-delay: 2s"
      ></div>
    </div>

    <div
      class="relative z-10 w-full mx-auto flex flex-col gap-12 py-10 px-4 md:px-8"
    >
      <!-- Top Header: Logo & Theme Toggle -->
      <div
        class="max-w-xl mx-auto w-full flex items-center justify-between mb-2 animate-fade-in-up"
      >
        <a
          href="https://apptime.ai?utm_source=apptime-links"
          target="_blank"
          class="flex items-center gap-2 group"
        >
          <img
            src="/images/brand/apptime_project_icon.svg"
            alt="Apptime AI Icon"
            class="w-8 h-8 group-hover:scale-105 transition-transform"
          />
          <img
            src="/images/brand/apptime_project_text_dark.svg"
            alt="Apptime"
            class="h-4.5 w-auto transition-all"
          />
        </a>
        <ThemeToggle />
      </div>

      <!-- Hero Section -->
      <header
        class="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto animate-fade-in-up"
      >
        <!-- Headline & Subheadline -->
        <h1
          class="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-base-content px-2"
        >
          Foque no criativo. <br />
          <span class="brand-text-gradient">A IA faz o repetitivo.</span>
        </h1>

        <p
          class="text-base md:text-lg font-medium text-base-content/75 leading-relaxed px-4 max-w-xl"
        >
          Plataforma de IA com <strong class="text-base-content font-bold">sites, posts e entregáveis prontos 🚀</strong> — mais foco criativo, menos trabalho repetitivo. Tire sua ideia do papel e coloque seu negócio no ar.
        </p>

        <!-- Trust Checkmarks -->
        <div
          class="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs sm:text-sm font-medium text-base-content/75 mt-2"
        >
          <span class="flex items-center gap-1.5"
            ><i class="fa-solid fa-circle-check text-success"></i> Sem
            Mensalidade</span
          >
          <span class="flex items-center gap-1.5"
            ><i class="fa-solid fa-circle-check text-success"></i> Foco em
            Resultados</span
          >
          <span class="flex items-center gap-1.5"
            ><i class="fa-solid fa-circle-check text-success"></i> Sites, Posts
            e Entregáveis</span
          >
        </div>
      </header>

      <!-- App Images Carousel -->
      <div
        class="w-full overflow-hidden flex flex-col max-w-2xl mx-auto gap-4 animate-fade-in-up"
        style="animation-delay: 200ms"
      >
        <div
          class="relative flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div
            class="flex animate-marquee gap-2 pr-2 whitespace-nowrap min-w-max"
          >
            <div
              v-for="(img, idx) in appImages"
              :key="`a-${idx}`"
              class="relative w-[60px] md:w-[85px] aspect-[9/16] rounded-xl overflow-hidden shrink-0 border border-base-content/10 shadow-xl bg-base-200"
            >
              <img
                :src="img"
                class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
          <div
            class="flex animate-marquee gap-2 pr-2 whitespace-nowrap min-w-max"
            aria-hidden="true"
          >
            <div
              v-for="(img, idx) in appImages"
              :key="`b-${idx}`"
              class="relative w-[60px] md:w-[85px] aspect-[9/16] rounded-xl overflow-hidden shrink-0 border border-base-content/10 shadow-xl bg-base-200"
            >
              <img
                :src="img"
                class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Links -->
      <main
        class="w-full flex flex-col gap-5 max-w-xl mx-auto perspective-1000 mt-4"
      >
        <a
          v-for="(item, index) in mainLinks"
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="group relative flex flex-col items-start gap-4 p-6 sm:p-8 rounded-[1.5rem] premium-card overflow-hidden animate-fade-in-up"
          :style="
            {
              '--theme-color-rgb': item.themeColorRgb,
              'animation-delay': `${index * 150 + 300}ms`,
            } as any
          "
        >
          <!-- Hover Sweep -->
          <div
            class="absolute inset-0 -translate-x-full group-hover:animate-sweep bg-gradient-to-r from-transparent via-base-content/5 to-transparent skew-x-12 pointer-events-none z-20"
          ></div>

          <!-- Radial Glow on Hover -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="`background: radial-gradient(400px circle at right top, rgba(var(--theme-color-rgb), 0.15), transparent 60%);`"
          ></div>

          <div class="flex-grow z-10 w-full text-left relative">
            <span
              v-if="item.tag"
              :class="[
                'inline-block text-xs md:text-sm font-bold px-3 py-1 rounded-full border mb-4 backdrop-blur-sm transition-all duration-300 shadow-sm',
                item.tagClass,
              ]"
            >
              {{ item.tag }}
            </span>

            <h2
              class="font-black text-2xl md:text-3xl text-base-content transition-colors tracking-tight mb-2 group-hover:drop-shadow-md"
              :class="item.textClass"
            >
              {{ item.title }}
            </h2>

            <p
              class="text-sm md:text-base text-base-content/75 group-hover:text-base-content/90 transition-colors leading-relaxed font-medium"
            >
              {{ item.description }}
            </p>

            <!-- CTA -->
            <div
              class="mt-5 flex items-center gap-2.5 opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            >
              <div
                class="w-2 h-2 rounded-full shadow-[0_0_12px_rgba(var(--theme-color-rgb),1)] animate-pulse"
                :style="`background-color: rgb(var(--theme-color-rgb))`"
              ></div>
              <span
                class="text-base md:text-lg font-bold transition-colors"
                :class="item.ctaClass"
              >
                {{ item.cta }}
                <i
                  class="fa-solid fa-arrow-right inline-block ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                ></i>
              </span>
            </div>
          </div>
        </a>
      </main>

      <!-- Social Footer -->
      <footer
        class="flex flex-col items-center gap-8 w-full mt-6 animate-fade-in-up"
        style="animation-delay: 600ms"
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
              class="absolute inset-0 bg-base-content/5 backdrop-blur-md border border-base-content/10 rounded-full scale-100 group-hover:scale-110 group-hover:bg-base-content/10 transition-all duration-300 shadow-sm"
            ></div>
            <i
              :class="social.iconClass"
              class="relative text-xl text-base-content/60 group-hover:text-primary transition-colors duration-300"
            ></i>
          </a>
        </div>

        <div
          class="text-center text-xs font-semibold text-base-content/40 space-y-1"
        >
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
.animate-sweep {
  animation: sweep 1.5s ease-in-out infinite;
}

@keyframes sweep {
  0% {
    transform: translateX(-100%) skewX(12deg);
  }
  100% {
    transform: translateX(200%) skewX(12deg);
  }
}

.perspective-1000 {
  perspective: 1000px;
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

.group:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
