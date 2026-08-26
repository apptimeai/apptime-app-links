<template>
  <button
    @click="toggleTheme"
    :title="
      theme === 'dark'
        ? 'Alternar para Modo Claro'
        : 'Alternar para Modo Escuro'
    "
    :aria-label="
      theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
    "
    class="w-10 h-10 rounded-full flex items-center justify-center bg-base-200 hover:bg-base-300 transition-colors duration-200 cursor-pointer text-base-content/80"
  >
    <i
      v-if="theme === 'light'"
      class="fa-solid fa-sun text-warning text-base"
    ></i>
    <i
      v-else
      class="fa-solid fa-moon text-primary text-base"
    ></i>
  </button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
</script>


