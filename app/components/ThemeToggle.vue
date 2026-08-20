<template>
  <button
    @click="toggleTheme"
    :title="
      theme === 'apptime-dark'
        ? 'Alternar para Modo Claro'
        : 'Alternar para Modo Escuro'
    "
    :aria-label="
      theme === 'apptime-dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
    "
    class="w-9 h-9 rounded-full flex items-center justify-center bg-base-200 hover:bg-base-300 transition-colors duration-200 cursor-pointer text-base-content/80"
  >
    <i
      v-if="theme === 'apptime-light'"
      class="fa-solid fa-sun text-warning text-sm"
    ></i>
    <i
      v-else
      class="fa-solid fa-moon text-primary text-sm"
    ></i>
  </button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
</script>


