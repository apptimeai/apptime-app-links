<script setup lang="ts">
useSeoMeta({
  title: 'Apptime | Criação com IA & Projetos Sob Medida',
  description:
    'Sites hospedados, posts e carrosseis para redes sociais e materiais em PDF prontos em minutos para o seu negócio.',
  ogTitle: 'Apptime | Criação com IA & Projetos Sob Medida',
  ogDescription:
    'Sites hospedados, posts e carrosseis para redes sociais e materiais em PDF prontos em minutos para o seu negócio.',
  twitterTitle: 'Apptime | Criação com IA & Projetos Sob Medida',
  twitterDescription:
    'Sites hospedados, posts e carrosseis para redes sociais e materiais em PDF prontos em minutos para o seu negócio.',
});

const appImages = ref([
  'https://storage.googleapis.com/storage.apptime.app/public/artifacts/1CqXPasHfhYrO92ziHh9/imgHd.jpeg',
  'https://storage.googleapis.com/storage.apptime.app/public/artifacts/075oNIx7DwYMj4jP2T6n/imgHd.jpeg',
  'https://storage.googleapis.com/storage.apptime.app/public/artifacts/yMtXNbvS2JIdqqMu0r0L/imgHd.jpeg',
  'https://storage.googleapis.com/storage.apptime.app/public/artifacts/1Uh9aEOkpNKPPTLWSN5D/imgHd.jpeg',
  'https://storage.googleapis.com/storage.apptime.app/public/artifacts/PW2IWuLhdkGX3FtVHeAD/imgHd.jpeg',
]);

const mainLinks = ref([
  {
    id: 'academy',
    title: 'Crie tudo com IA em minutos',
    description:
      'Crie sites, posts e materiais apenas pedindo em português pra IA que te entrega tudo pronto em minutos.',
    url: 'https://apptime.com.br?utm_source=apptime-links',
    cta: 'Começar agora',
    btnStyle: 'bg-primary text-primary-content hover:brightness-90',
  },
  {
    id: 'agency',
    title: 'Nós criamos tudo pra você',
    description:
      'Quer um projeto exclusivo? Nossa equipe de experts impulsiona o seu negócio, do design à venda.',
    url: 'https://wa.me/5511975205644?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20um%20projeto%20sob%20medida.',
    cta: 'Falar com especialista',
    btnStyle: 'bg-secondary text-secondary-content hover:brightness-90',
  },
]);

const socialLinks = ref([
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/5511975205644?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Apptime.',
    iconClass: 'fa-brands fa-whatsapp',
    hoverText: 'hover:text-success',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-instagram',
    hoverText: 'hover:text-primary',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-linkedin',
    hoverText: 'hover:text-primary',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/afcuMUuXju?utm_source=apptime-links',
    iconClass: 'fa-brands fa-discord',
    hoverText: 'hover:text-warning',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/apptimeai?utm_source=apptime-links',
    iconClass: 'fa-brands fa-github',
    hoverText: 'hover:text-accent',
  },
]);
</script>

<template>
  <div
    class="min-h-screen flex flex-col font-modern bg-base-100 text-base-content selection:bg-primary selection:text-primary-content"
  >
    <div
      class="w-full max-w-xl mx-auto flex flex-col gap-7 py-8 sm:py-12 px-4 sm:px-6"
    >
      <!-- Navigation Header -->
      <nav class="w-full flex items-center justify-between pb-1">
        <Logo to="https://apptime.ai?utm_source=apptime-links" size="md" />

        <!-- Flat Theme Toggle -->
        <ThemeToggle />
      </nav>

      <!-- Direct Hero Section -->
      <header class="flex flex-col text-left gap-2.5">
        <h1
          class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-base-content"
        >
          Foque no criativo. <br />
          <span class="text-primary"> A IA faz o repetitivo. </span>
        </h1>
        <p
          class="font-modern text-sm sm:text-base text-base-content/75 font-medium leading-relaxed"
        >
          Sites hospedados, posts e carrosseis para redes sociais e materiais em
          PDF prontos em minutos para o seu negócio.
        </p>
      </header>

      <!-- Flat Fill Showcase Strip with Rounded Crop -->
      <section
        class="w-full bg-base-200 rounded-[1.75rem] p-2.5 sm:p-3 overflow-hidden"
      >
        <div class="relative flex gap-3 overflow-hidden rounded-2xl">
          <div
            class="flex shrink-0 animate-marquee-slow gap-3 whitespace-nowrap min-w-max"
          >
            <div
              v-for="(img, idx) in appImages"
              :key="`showcase-a-${idx}`"
              class="relative w-[95px] sm:w-[120px] aspect-[9/16] bg-base-300 rounded-2xl overflow-hidden shrink-0"
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
            class="flex shrink-0 animate-marquee-slow gap-3 whitespace-nowrap min-w-max"
            aria-hidden="true"
          >
            <div
              v-for="(img, idx) in appImages"
              :key="`showcase-b-${idx}`"
              class="relative w-[95px] sm:w-[120px] aspect-[9/16] bg-base-300 rounded-2xl overflow-hidden shrink-0"
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
          class="group flat-card rounded-2xl p-5 sm:p-6 flex flex-col gap-3 transition-colors"
        >
          <h2
            class="font-display text-xl sm:text-2xl font-bold tracking-tight text-base-content leading-snug"
          >
            {{ item.title }}
          </h2>

          <p
            class="font-modern text-xs sm:text-sm text-base-content/75 font-medium leading-relaxed"
          >
            {{ item.description }}
          </p>

          <div class="pt-1.5 flex items-center">
            <div
              class="px-4 py-2 text-xs font-bold rounded-full inline-flex items-center gap-1.5 transition-colors duration-150"
              :class="item.btnStyle"
            >
              {{ item.cta }} <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </div>
          </div>
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

        <p
          class="font-modern text-xs text-base-content/50 font-medium tracking-normal"
        >
          © {{ new Date().getFullYear() }} Apptime · Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  </div>
</template>
