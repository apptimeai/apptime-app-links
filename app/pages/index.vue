<script setup lang="ts">
const profile = ref({
  catchphrase: "Idéias em negócios reais, sem complicar",
  description:
    "Tudo em um só lugar para aprender, criar com IA ou com Experts. Mais rápido, mais simples e com foco em resultado.",
});

const mainLinks = ref([
  {
    id: "academy",
    title: "Apptime Academy",
    description:
      "Aprenda o que importa para lançar e validar, sem perder tempo.",
    url: "https://apptime.com.br?utm_source=apptime-links",
    tag: "Para começar",
    brandColor: "#ff00ae",
  },
  {
    id: "platform",
    title: "Apptime AI",
    description:
      "Crie e hospede seu app rapidamente com IA, sem complicação.",
    url: "https://apptime.ai?utm_source=apptime-links",
    tag: "Este site foi feito aqui",
    brandColor: "#ff7f00",
  },
  {
    id: "agency",
    title: "Apptime Agency",
    description:
      "Transformamos suas ideias em sites e automações que funcionam de verdade.",
    url: "https://apptime.dev?utm_source=apptime-links",
    tag: "Nós criamos pra você",
    brandColor: "#4508f9",
  },
]);

const socialLinks = ref([
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-instagram",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/company/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.gg/afcuMUuXju?utm_source=apptime-links",
    iconClass: "fa-brands fa-discord",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/apptimeai?utm_source=apptime-links",
    iconClass: "fa-brands fa-github",
  },
]);
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center gap-12">
    <!-- Profile Header -->
    <header class="flex flex-col items-center text-center gap-6">
      <Logo size="2xl" />
      <div>
        <p class="text-primary font-bold mb-4 text-3xl">{{ profile.catchphrase }}</p>
        <p class="text-base-content/70 max-w-md mx-auto text-sm">
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
        class="group flex items-start gap-4 p-4 rounded-field border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        
        <div class="flex-grow">
          <span v-if="item.tag" class="badge badge-xs badge-outline opacity-40 mb-1">{{ item.tag }}</span>
          <h2 class="font-bold text-lg text-white group-hover:text-primary transition-colors">
            {{ item.title }}
          </h2>
          <p class="text-sm text-base-content/60 italic">{{ item.description }}</p>
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
