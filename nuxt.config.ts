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
      title: 'Apptime AI | Hub de Serviços',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '🚀 Apptime AI - Seu Hub de Tecnologia, Infoprodutos e Desenvolvimento Sob Medida.' },
        { name: 'keywords', content: 'Apptime, Tecnologia, SaaS, Agência Dev, Infoprodutos' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
      script: [
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
