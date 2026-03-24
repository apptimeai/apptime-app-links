// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'apptime',
      },
      title: 'Apptime | Crie e hospede sites com IA + Experts',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Crie e publique seu site profissional rapidamente com IA, como se fosse uma conversa no WhatsApp.',
        },
        {
          name: 'keywords',
          content:
            'Apptime, Academy, AI, Agency, Tecnologia, SaaS, Mentoria, Desenvolvimento, IA',
        },
        {
          property: 'og:title',
          content: 'Apptime | Crie e hospede sites com IA + Experts',
        },
        {
          property: 'og:description',
          content:
            'Crie e publique seu site profissional rapidamente com IA, como se fosse uma conversa no WhatsApp.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Apptime | Crie e hospede sites com IA + Experts',
        },
        {
          name: 'twitter:description',
          content:
            'Crie e publique seu site profissional rapidamente com IA, como se fosse uma conversa no WhatsApp.',
        },
        { name: 'twitter:image', content: '/og-image.webp' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&family=Oxanium:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
          async: true,
        },
        {
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N35ZZJBP');
          `,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N35ZZJBP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },
});
