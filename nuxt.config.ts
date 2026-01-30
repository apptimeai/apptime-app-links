// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: 'static',
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'Apptime | Idéias em negócios reais, sem complicar',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Tudo em um só lugar para aprender, criar com IA ou com Experts. Mais rápido, mais simples e com foco em resultado.' },
        { name: 'keywords', content: 'Apptime, Academy, AI, Agency, Tecnologia, SaaS, Mentoria, Desenvolvimento, IA' },
        { property: 'og:title', content: 'Apptime | Idéias em negócios reais, sem complicar' },
        { property: 'og:description', content: 'Tudo em um só lugar para aprender, criar com IA ou com Experts. Mais rápido, mais simples e com foco em resultado.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://appti.me' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Apptime | Idéias em negócios reais, sem complicar' },
        { name: 'twitter:description', content: 'Tudo em um só lugar para aprender, criar com IA ou com Experts. Mais rápido, mais simples e com foco em resultado.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&family=Oxanium:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-SW0RL74KBX', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-SW0RL74KBX');
          `,
          type: 'text/javascript'
        }
      ],
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'apptime'
      }
    }
  },

})
