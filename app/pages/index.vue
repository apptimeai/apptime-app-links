<script setup lang="ts">
const profile = ref({
  catchphrase: "Aprenda, construa e venda. No mesmo lugar.",
  description:
    "A Apptime une plataforma SaaS, conhecimento prático e execução profissional para transformar ideias em negócios reais.",
});

const mainLinks = ref([
  {
    id: "lp-info",
    title: "Apptime Academy",
    description:
      "Aprenda a dominar a tecnologia com os nossos infoprodutos exclusivos.",
    url: "https://apptime.com.br",
    tag: "Para começar",
    brandColor: "#ff00ae",
  },
  {
    id: "saas-plat",
    title: "Apptime AI",
    description:
      "Crie seu próprio aplicativo em segundos com nossa solução SaaS.",
    url: "https://apptime.ai",
    tag: "Este site foi feito aqui",
    brandColor: "#ff7f00",
  },
  {
    id: "agency-dev",
    title: "Apptime Agency",
    description:
      "Desenvolvimento sob medida para transformar suas ideias em softwares robustos.",
    url: "https://apptime.dev",
    tag: "Nós criamos pra você",
    brandColor: "#4508f9",
  },
]);

const socialLinks = ref([
  {
    id: "ig",
    name: "Instagram",
    url: "https://instagram.com/apptimeai",
    iconClass: "fa-brands fa-instagram",
  },
  {
    id: "li",
    name: "LinkedIn",
    url: "https://linkedin.com/company/apptimeai",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    id: "gh",
    name: "GitHub",
    url: "https://github.com/apptimeai",
    iconClass: "fa-brands fa-github",
  },
]);
</script>

<template>
  <div class="max-w-xl mx-auto px-6 py-16 flex flex-col items-center gap-12">
    <!-- Profile Header -->
    <header class="flex flex-col items-center text-center gap-6">
      <Logo size="xl" />
      <div>
        <p class="text-primary font-bold mb-4">{{ profile.catchphrase }}</p>
        <p class="text-base-content/70 max-w-md mx-auto leading-relaxed">
          {{ profile.description }}
        </p>
      </div>
    </header>

    <!-- Links List -->
    <main class="w-full flex flex-col gap-4">
      <a 
        v-for="item in mainLinks" 
        :key="item.id"
        :href="item.url"
        target="_blank"
        class="group flex items-center gap-4 p-4 rounded-field border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        
        <div class="flex-grow">
          <div class="flex items-center gap-2">
            <h2 class="font-bold text-lg text-white group-hover:text-primary transition-colors">
              {{ item.title }}
            </h2>
            <span class="badge badge-sm badge-outline opacity-40">{{ item.tag }}</span>
          </div>
          <p class="text-sm text-base-content/60 line-clamp-1 italic">{{ item.description }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </main>

    <!-- Socials -->
    <footer class="flex flex-col items-center gap-8 mt-4 w-full">
      <div class="flex gap-4">
        <a 
          v-for="social in socialLinks" 
          :key="social.id"
          :href="social.url"
          target="_blank"
          class="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors"
          :title="social.name"
        >
          <i :class="social.iconClass"></i>
        </a>
      </div>
      
      <div class="text-center opacity-40 text-xs tracking-tighter font-medium">
        <p>© {{ new Date().getFullYear() }} Apptime Serviços de Internet Ltda.<br>Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Minimalist overrides if needed */
</style>
