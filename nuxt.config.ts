// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Zen+Dots&family=Archivo:wght@300;400;600;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' },
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
      noscript: [
        { innerHTML: 'Este site requer JavaScript para funcionar.' }
      ],
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'apptime-cyber'
      }
    }
  },
  css: ['~/assets/css/main.css']
})
