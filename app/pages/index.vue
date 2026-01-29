<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  title: 'Apptime AI',
  catchphrase: 'Aprenda, construa e venda. No mesmo lugar.',
  description: 'A Apptime une plataforma SaaS, conhecimento prático e execução profissional para transformar ideias em negócios reais.',
  image: {
    url: 'https://storage.googleapis.com/storage.apptime.app/public/apps/aDImrvAM8MvciCtg7vMk/storage/libraries/default/lJLbRmB3D7H02M2RZ41y/imgHd.jpeg'
  }
});

const mainLinks = ref([
  {
    id: 'lp-info',
    title: 'Apptime Academy',
    description: 'Aprenda a dominar a tecnologia com os nossos infoprodutos exclusivos.',
    url: 'https://apptime.com.br',
    tag: '.com.br',
    brandColor: '#ff00ae',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>'
  },
  {
    id: 'saas-plat',
    title: 'Plataforma Apptime',
    description: 'Crie seu próprio aplicativo em segundos com nossa solução SaaS.',
    url: 'https://apptime.ai',
    tag: '.ai',
    brandColor: '#ff7f00',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>'
  },
  {
    id: 'agency-dev',
    title: 'Apptime Agency',
    description: 'Desenvolvimento sob medida para transformar suas ideias em softwares robustos.',
    url: 'https://apptime.dev',
    tag: '.dev',
    brandColor: '#4508f9',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>'
  }
]);

const socialLinks = ref([
  { id: 'ig', name: 'Instagram', url: 'https://instagram.com/apptimeai', iconClass: 'fa-brands fa-instagram' },
  { id: 'li', name: 'LinkedIn', url: 'https://linkedin.com/company/apptimeai', iconClass: 'fa-brands fa-linkedin' },
  { id: 'gh', name: 'GitHub', url: 'https://github.com/apptimeai', iconClass: 'fa-brands fa-github' }
]);

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Apptime+AI&background=1e293b&color=a78bfa';
};
</script>

<template>
  <div id="content-container" class="container mx-auto px-4 py-12 max-w-2xl relative z-20">
    <!-- Header Section -->
    <header class="flex flex-col items-center mb-16 fade-in-up">
      <div class="relative mb-12">
        <Logo size="xl" icon-only />
        <div class="absolute -bottom-2 -right-2 badge p-3 font-bold border-none"
          style="background-color: var(--color-secondary); color: var(--color-secondary-content)">AI</div>
      </div>

      <h1 class="text-3xl md:text-4xl font-black mb-10 heading-cyber text-center opacity-80" :data-text="profile.title">
        {{ profile.title }}
      </h1>

      <div class="text-center max-w-lg mb-4 mt-4">
        <p class="catchphrase-cyber text-xl md:text-base font-black mb-12 leading-snug">
          {{ profile.catchphrase }}
        </p>
        <p class="text-slate-400 text-lg md:text-base font-light leading-relaxed p-4">
          {{ profile.description }}
        </p>
      </div>
    </header>

    <!-- Main Services Section -->
    <div class="grid gap-6 mb-12">
      <template v-for="(item, index) in mainLinks" :key="item.id">
        <a :href="item.url" target="_blank"
          class="glass-card neon-border rounded-2xl p-6 flex items-center gap-6 group fade-in-up tilt-card"
          :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="card-content flex items-center gap-6 w-full">
            <div class="p-4 rounded-xl shadow-lg transition-all bg-opacity-20 group-hover:scale-110"
              :style="{ backgroundColor: item.brandColor }">
              <div v-html="item.icon" class="w-8 h-8 text-white"></div>
            </div>

            <div class="flex-grow">
              <div class="flex items-center gap-2">
                <h3 class="text-xl font-bold text-white transition-colors" :style="{ color: item.brandColor }">
                  {{ item.title }}
                </h3>
                <span class="badge badge-sm badge-outline opacity-50">{{ item.tag }}</span>
              </div>
              <p class="text-slate-400 text-sm mt-1">{{ item.description }}</p>
            </div>

            <div class="text-slate-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </a>
      </template>
    </div>

    <!-- Social Links Section -->
    <div class="flex flex-wrap justify-center gap-6 mb-16 fade-in-up" style="animation-delay: 0.4s">
      <template v-for="social in socialLinks" :key="social.id">
        <a :href="social.url" target="_blank"
          class="btn btn-circle btn-ghost glass-card border-none hover:bg-opacity-80 text-2xl" :title="social.name">
          <i :class="social.iconClass"></i>
        </a>
      </template>
    </div>

    <!-- Footer -->
    <footer class="text-center text-slate-500 text-sm fade-in-up" style="animation-delay: 0.6s">
      <p>© 2026 Apptime AI. Todos os direitos reservados.</p>
      <div class="mt-4 flex justify-center gap-2">
        <span class="w-2 h-2 rounded-full animate-pulse" style="background-color: var(--color-primary)"></span>
        <span class="uppercase tracking-widest text-[10px] font-bold">Inovação Continua</span>
      </div>
    </footer>
  </div>
</template>
