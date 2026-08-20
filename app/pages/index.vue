<script setup lang="ts">
useSeoMeta({
  title: 'Apptime | Criação com IA & Projetos Sob Medida',
  description:
    'Crie sites, marcas e plataformas sob medida com IA. Sem mensalidade, direto ao ponto.',
  ogTitle: 'Apptime | Criação com IA & Projetos Sob Medida',
  ogDescription:
    'Crie sites, marcas e plataformas sob medida com IA. Sem mensalidade, direto ao ponto.',
  twitterTitle: 'Apptime | Criação com IA & Projetos Sob Medida',
  twitterDescription:
    'Crie sites, marcas e plataformas sob medida com IA. Sem mensalidade, direto ao ponto.',
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
    numeral: '01',
    title: 'Crie com IA em Minutos',
    description:
      'Sites, posts e identidade de marca sob demanda. Sem mensalidade.',
    url: 'https://apptime.com.br?utm_source=apptime-links',
    cta: 'Começar agora',
    accentColor: 'text-[#c85a38]',
    btnStyle: 'bg-[#c85a38] text-white hover:bg-[#b84c2a]',
  },
  {
    id: 'agency',
    numeral: '02',
    title: 'Projetos Sob Medida',
    description:
      'Sites, softwares e automações exclusivas com equipe especialista.',
    url: 'https://apptime.dev?utm_source=apptime-links',
    cta: 'Falar com especialista',
    accentColor: 'text-[#1b4d3e] dark:text-[#2a7a63]',
    btnStyle: 'bg-[#1b4d3e] dark:bg-[#2a7a63] text-white hover:bg-[#153e32]',
  },
]);

const socialLinks = ref([
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-instagram',
    hoverText: 'hover:text-[#c85a38]',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-linkedin',
    hoverText: 'hover:text-[#8d4925]',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/afcuMUuXju?utm_source=apptime-links',
    iconClass: 'fa-brands fa-discord',
    hoverText: 'hover:text-[#d9822b]',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-github',
    hoverText: 'hover:text-[#1b4d3e] dark:hover:text-[#2a7a63]',
  },
]);
</script>

<template>
  <div
    class="min-h-screen flex flex-col font-modern bg-base-100 text-base-content selection:bg-[#c85a38] selection:text-white"
  >
    <div
      class="w-full max-w-xl mx-auto flex flex-col gap-7 py-8 sm:py-12 px-4 sm:px-6"
    >
      <!-- Navigation Header -->
      <nav class="w-full flex items-center justify-between pb-1">
        <Logo
          to="https://apptime.ai?utm_source=apptime-links"
          size="md"
        />

        <!-- Flat Theme Toggle -->
        <ThemeToggle />
      </nav>

      <!-- Direct Hero Section -->
      <header class="flex flex-col text-left gap-2">
        <h1
          class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-base-content"
        >
          Foque no criativo. <br />
          <span class="text-[#c85a38]">
            A IA faz o repetitivo.
          </span>
        </h1>
        <p class="font-modern text-sm sm:text-base text-base-content/75 font-medium leading-relaxed">
          Sites, marcas e sistemas prontos em minutos. Sem mensalidade.
        </p>
      </header>

      <!-- Flat Fill Showcase Strip -->
      <section class="w-full bg-base-200 rounded-2xl p-2.5 overflow-hidden">
        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee-slow gap-2.5 pr-2.5 whitespace-nowrap min-w-max">
            <div
              v-for="(img, idx) in appImages"
              :key="`showcase-a-${idx}`"
              class="relative w-[65px] sm:w-[75px] aspect-[9/16] bg-base-300 rounded-xl overflow-hidden shrink-0"
            >
              <img
                :src="img"
                class="w-full h-full object-cover object-top"
                loading="lazy"
                alt="App"
              />
            </div>
          </div>

          <div
            class="flex animate-marquee-slow gap-2.5 pr-2.5 whitespace-nowrap min-w-max"
            aria-hidden="true"
          >
            <div
              v-for="(img, idx) in appImages"
              :key="`showcase-b-${idx}`"
              class="relative w-[65px] sm:w-[75px] aspect-[9/16] bg-base-300 rounded-xl overflow-hidden shrink-0"
            >
              <img
                :src="img"
                class="w-full h-full object-cover object-top"
                loading="lazy"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Direct Flat Fill Action Cards -->
      <main class="w-full flex flex-col gap-3.5">
        <a
          v-for="item in mainLinks"
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="group flat-card rounded-2xl p-5 sm:p-6 flex flex-col gap-2.5"
        >
          <div class="flex items-center justify-between">
            <span class="font-display text-xs font-black tracking-wider" :class="item.accentColor">
              {{ item.numeral }}
            </span>
            <div
              class="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors duration-150"
              :class="item.btnStyle"
            >
              {{ item.cta }} <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
            </div>
          </div>

          <h2 class="font-display text-xl sm:text-2xl font-bold tracking-tight text-base-content leading-snug">
            {{ item.title }}
          </h2>

          <p class="font-modern text-xs sm:text-sm text-base-content/75 font-medium leading-relaxed">
            {{ item.description }}
          </p>
        </a>
      </main>

      <!-- Clean Minimal Footer -->
      <footer class="flex flex-col items-center gap-4 pt-2 pb-6">
        <div class="flex gap-2.5 items-center justify-center">
          <a
            v-for="social in socialLinks"
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="w-9 h-9 rounded-full flex items-center justify-center bg-base-200 hover:bg-base-300 text-base-content/70 transition-colors"
            :class="social.hoverText"
            :title="social.name"
          >
            <i :class="social.iconClass" class="text-sm"></i>
          </a>
        </div>

        <p class="font-modern text-xs text-base-content/50 font-medium tracking-normal">
          © {{ new Date().getFullYear() }} Apptime · Todos os direitos reservados.
        </p>
      </footer>
    </div>
  </div>
</template>

