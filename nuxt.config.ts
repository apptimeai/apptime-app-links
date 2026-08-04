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
        'data-theme': 'apptime-dark',
        class: 'dark',
      },
      title: 'Apptime | Crie site, posts e marca com IA em minutos',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
        },
        {
          name: 'keywords',
          content:
            'Apptime, Crie site com IA, IA, Criador de site, Posts com IA, Marca com IA, Tecnologia, SaaS',
        },
        {
          property: 'og:title',
          content: 'Apptime | Crie site, posts e marca com IA em minutos',
        },
        {
          property: 'og:description',
          content:
            'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Apptime | Crie site, posts e marca com IA em minutos',
        },
        {
          name: 'twitter:description',
          content:
            'Tire sua ideia do papel: crie site, identidade de marca, posts e documentos com IA. Sem mensalidade — compre créditos e use quando quiser. Resultados profissionais.',
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
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      script: [
        {
          innerHTML: `(function(){try{var m=document.cookie.match(/apptime-theme=([^;]+)/);var theme=(m&&m[1])?m[1]:'apptime-dark';document.documentElement.setAttribute('data-theme',theme);if(theme==='apptime-light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}}catch(e){}})()`,
          type: 'text/javascript',
        },
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
