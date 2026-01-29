<script setup lang="ts">
interface Props {
  iconOnly?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  to?: string;
  fill?: string;
  iconFill?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconOnly: false,
  size: 'md',
  fill: 'var(--color-base-content)',
});

// Size mappings for sm, md, lg
const sizeMap = {
  xs: { icon: 'h-3 w-3', text: 'h-[0.75rem]', gap: 'gap-[0.125rem]' },
  sm: { icon: 'h-4 w-4', text: 'h-[1rem]', gap: 'gap-[0.25rem]' },
  md: { icon: 'h-6 w-6', text: 'h-[1.25rem]', gap: 'gap-[0.375rem]' },
  lg: { icon: 'h-8 w-8', text: 'h-[1.5rem]', gap: 'gap-[0.5rem]' },
  xl: { icon: 'h-10 w-10', text: 'h-[1.875rem]', gap: 'gap-[0.625rem]' },
};

const sizeClasses = computed(() => sizeMap[props.size]);

// Animation scale based on size
const animationScale = computed(() => {
  const scaleMap = {
    xs: 0.5, // 50% of base movement
    sm: 0.75, // 75% of base movement
    md: 1, // 100% of base movement (current)
    lg: 1.25, // 125% of base movement
    xl: 1.5, // 150% of base movement
  };
  return scaleMap[props.size];
});

const linkClasses = computed(() => {
  const baseClasses = `flex flex-row items-center justify-center ${sizeClasses.value.gap}`;
  return props.to ? `${baseClasses} transition-opacity cursor-pointer` : baseClasses;
});

// Resolve the component properly for dynamic component
const wrapperComponent = computed(() => {
  return props.to ? 'a' : 'div';
});

// Use static gradient ID to avoid hydration mismatch
const gradientId = 'logoGradient-apptime';
</script>

<template>
  <component
    :is="wrapperComponent"
    :href="to || undefined"
    :aria-label="to ? 'Logo' : undefined"
    :class="['logo-container', linkClasses]"
  >
    <!-- Icon SVG -->
    <div :class="['logo-icon', sizeClasses.icon]" :style="{ '--animation-scale': animationScale }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="100%"
        height="100%"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 1300 1300"
        class="h-full w-full"
      >
        <defs>
          <linearGradient
            :id="gradientId"
            gradientUnits="userSpaceOnUse"
            x1="531.81"
            y1="765.53"
            x2="1239.28"
            y2="57.35"
          >
            <stop offset="0" style="stop-opacity: 1; stop-color: var(--color-primary)" />
            <stop offset="1" style="stop-opacity: 1; stop-color: var(--color-secondary)" />
          </linearGradient>
        </defs>
        <path
          :fill="iconFill || `url(#${gradientId})`"
          fill-rule="nonzero"
          d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z"
        />
      </svg>
    </div>

    <!-- Text SVG -->
    <div v-if="!iconOnly" :class="['logo-text', sizeClasses.text]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        height="100%"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 5300 1100"
        class="h-full"
      >
        <path
          :fill="fill"
          fill-rule="nonzero"
          d="M241.35 822.54c-60.32,0 -106.48,-15.27 -138.51,-45.8 -32.02,-30.53 -48.03,-74.09 -48.03,-130.69 0,-55.85 16.01,-99.04 48.03,-129.57 32.02,-30.53 78.19,-45.8 138.51,-45.8l395.05 0c9.7,0 18.06,-3.65 24.65,-10.76 6.6,-7.11 9.61,-15.72 8.88,-25.39 -2.94,-39.19 -25.18,-58.79 -66.68,-58.79l-439.97 0c-18.52,0 -33.63,-15.11 -33.63,-33.63l0 -61.19c0,-18.52 15.11,-33.63 33.63,-33.63l482.42 0c67.76,0 115.79,15.45 144.09,46.35 28.3,30.91 42.44,74.28 42.44,130.13l0 365.13c0,18.52 -15.11,33.63 -33.63,33.63l-557.25 0zm29.04 -128.46l366.25 0c18.52,0 33.63,-15.11 33.63,-33.63l0 -27.69c0,-18.52 -15.11,-33.63 -33.63,-33.63l-366.25 0c-14.15,0 -25.13,4.28 -32.95,12.85 -7.82,8.56 -11.73,19.92 -11.73,34.07 0,14.15 3.91,25.69 11.73,34.63 7.82,8.94 18.8,13.4 32.95,13.4zm684.71 346.15l0 -759.31c0,-18.52 15.11,-33.63 33.63,-33.63l379.66 0c99.78,0 177.59,24.57 233.44,73.72 55.85,49.15 83.78,120.26 83.78,213.35 0,93.83 -27.92,165.31 -83.78,214.46 -55.85,49.15 -133.67,73.72 -233.44,73.72l-217.69 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 184.06c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63zm413.29 -664.49l-217.69 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 251.08c0,18.52 15.11,33.63 33.63,33.63l217.69 0c48.4,0 85.44,-13.22 111.13,-39.65 25.69,-26.43 38.54,-66.46 38.54,-120.07 0,-52.87 -12.85,-92.53 -38.54,-118.96 -25.69,-26.43 -62.73,-39.65 -111.13,-39.65zm417.75 664.49l0 -759.31c0,-18.52 15.11,-33.63 33.63,-33.63l379.66 0c99.78,0 177.6,24.57 233.45,73.72 55.85,49.15 83.77,120.26 83.77,213.35 0,93.83 -27.92,165.31 -83.77,214.46 -55.85,49.15 -133.67,73.72 -233.45,73.72l-217.69 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 184.06c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63zm413.29 -664.49l-217.69 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 251.08c0,18.52 15.11,33.63 33.63,33.63l217.69 0c48.4,0 85.44,-13.22 111.14,-39.65 25.69,-26.43 38.54,-66.46 38.54,-120.07 0,-52.87 -12.85,-92.53 -38.54,-118.96 -25.69,-26.43 -62.74,-39.65 -111.14,-39.65zm605.16 446.8c-64.77,0 -112.45,-16.2 -142.98,-48.59 -30.53,-32.39 -45.8,-75.02 -45.8,-127.89 0,-355.27 0,-275.25 0,-541.61 -0,-18.52 15.11,-33.63 33.63,-33.63l94.7 0c18.52,0 33.63,15.11 33.63,33.63l0 109.22c0,18.52 15.11,33.63 33.63,33.63l171.78 0c18.52,0 33.63,15.11 33.63,33.63l0 61.19c0,18.52 -15.11,33.63 -33.63,33.63l-171.78 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 216.58c0,45.41 22.34,68.13 67.02,68.13l169.66 0c18.52,0 33.63,15.11 33.63,33.63l0 61.2c0,18.52 -15.11,33.63 -33.63,33.63l-209.87 0zm327.28 -33.63l0 -507.99c0,-18.52 15.11,-33.63 33.63,-33.63l94.7 0c18.52,0 33.63,15.11 33.63,33.63l0 507.99c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63zm-1.12 -670.19l0 -58.96c0,-18.52 15.11,-33.63 33.63,-33.63l96.94 0c18.52,0 33.63,15.11 33.63,33.63l0 58.96c0,18.52 -15.11,33.63 -33.63,33.63l-96.94 0c-18.52,0 -33.63,-15.11 -33.63,-33.63zm285.95 670.19l0 -507.99c0,-18.52 15.11,-33.63 33.63,-33.63l711.4 0c65.53,0 113.57,16.2 144.09,48.59 30.53,32.39 45.8,75.03 45.8,127.89l0 365.13c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63l0 -345.03c0,-45.42 -23.09,-68.13 -69.25,-68.13l-121.63 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 379.54c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63l0 -379.54c0,-18.52 -15.11,-33.63 -33.63,-33.63l-157.25 0c-18.52,0 -33.63,15.11 -33.63,33.63l0 379.54c0,18.52 -15.11,33.63 -33.63,33.63l-94.7 0c-18.52,0 -33.63,-15.11 -33.63,-33.63zm1347.09 39.21c-99.77,0 -177.6,-24.76 -233.45,-74.28 -55.85,-49.52 -83.78,-122.31 -83.78,-218.37 0,-96.81 27.93,-169.97 83.78,-219.49 55.85,-49.52 133.67,-74.28 233.45,-74.28l279.25 0c65.53,0 115.61,15.45 150.23,46.35 34.63,30.9 51.94,75.02 51.94,132.36 0,116.91 -67.4,175.37 -202.17,175.37l-371.99 0c-12.96,0 -24.07,6.8 -29.96,18.35 -5.89,11.54 -4.87,24.53 2.74,35.02 24.42,33.67 64.41,50.51 119.96,50.51l418.75 0c18.52,0 33.63,15.11 33.63,33.63l0 61.19c0,18.52 -15.11,33.63 -33.63,33.63l-418.75 0zm0 -457.96c-49.67,0 -87.02,13.6 -112.03,40.78 -9.24,10.05 -11.52,23.79 -6.04,36.28 5.48,12.49 17.15,20.11 30.79,20.11l358.7 0c14.9,0 26.63,-4.47 35.19,-13.4 8.56,-8.93 12.84,-21.22 12.84,-36.86 0,-31.27 -16.02,-46.91 -48.03,-46.91l-271.43 0z"
        />
      </svg>
    </div>
  </component>
</template>

<style scoped>
.logo-icon {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0) translateX(0);
}

.logo-container:hover .logo-icon {
  animation: logo-bounce 1s ease-in-out infinite alternate;
  transition: none;
}

.logo-container:not(:hover) .logo-icon {
  animation: logo-bounce-out 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes logo-bounce {
  from {
    transform: translateY(calc(0.1em * var(--animation-scale, 1)))
      translateX(calc(0.1em * var(--animation-scale, 1)));
  }
  to {
    transform: translateY(calc(-0.1em * var(--animation-scale, 1)))
      translateX(calc(-0.1em * var(--animation-scale, 1)));
  }
}

@keyframes logo-bounce-out {
  0% {
    transform: translateY(calc(-0.1em * var(--animation-scale, 1)))
      translateX(calc(-0.1em * var(--animation-scale, 1)));
  }
  30% {
    transform: translateY(calc(0.08em * var(--animation-scale, 1)))
      translateX(calc(0.08em * var(--animation-scale, 1)));
  }
  60% {
    transform: translateY(calc(-0.03em * var(--animation-scale, 1)))
      translateX(calc(-0.03em * var(--animation-scale, 1)));
  }
  80% {
    transform: translateY(calc(0.01em * var(--animation-scale, 1)))
      translateX(calc(0.01em * var(--animation-scale, 1)));
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
</style>