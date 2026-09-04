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
        'data-theme': 'light',
        class: 'light',
      },
      title:
        'Apptime | Foque no criativo. Nós fazemos o repetitivo em minutos',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Sites hospedados, posts para redes sociais e materiais em PDF prontos em minutos para o seu negócio. Criação rápida e projetos sob medida com excelência.',
        },
        {
          name: 'keywords',
          content:
            'Apptime, Criação em minutos, Sites hospedados, Posts para redes sociais, Carrosseis, Materiais em PDF, Projetos sob medida, Design, Marketing',
        },
        {
          property: 'og:title',
          content:
            'Apptime | Foque no criativo. Nós fazemos o repetitivo em minutos',
        },
        {
          property: 'og:description',
          content:
            'Sites hospedados, posts para redes sociais e materiais em PDF prontos em minutos para o seu negócio. Criação rápida e projetos sob medida com excelência.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content:
            'Apptime | Foque no criativo. Nós fazemos o repetitivo em minutos',
        },
        {
          name: 'twitter:description',
          content:
            'Sites hospedados, posts para redes sociais e materiais em PDF prontos em minutos para o seu negócio. Criação rápida e projetos sob medida com excelência.',
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
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap',
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
