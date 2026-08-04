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
    class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-base-200/90 border border-base-content/15 flex items-center justify-center text-base-content hover:text-primary hover:border-primary/40 transition-all duration-300 shadow-md group cursor-pointer relative overflow-hidden"
  >
    <div class="relative w-5 h-5 flex items-center justify-center">
      <!-- Sun Icon (Active in Light mode, transitions out in Dark) -->
      <i
        :class="[
          'fa-solid fa-sun text-amber-500 absolute transform',
          isMounted ? 'transition-all duration-500' : '',
          theme === 'apptime-light'
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 -rotate-90 opacity-0',
        ]"
      ></i>

      <!-- Moon Icon (Active in Dark mode, transitions out in Light) -->
      <i
        :class="[
          'fa-solid fa-moon text-primary absolute transform',
          isMounted ? 'transition-all duration-500' : '',
          theme === 'apptime-dark'
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 rotate-90 opacity-0',
        ]"
      ></i>
    </div>
  </button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>
