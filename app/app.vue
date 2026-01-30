<script setup lang="ts">

const initVisuals = () => {
  const starContainer = document.getElementById('stars');
  const aura = document.getElementById('mouse-aura');
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  const tiltCards = document.querySelectorAll('.tilt-card');

  if (!starContainer) return;

  // 1. Hyperspace Starfield
  const starCount = 150;
  const stars: HTMLElement[] = [];
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    const depth = Math.random();
    star.className = 'star';
    Object.assign(star.style, {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${(depth * 2) + 1}px`,
      height: `${(depth * 2) + 1}px`,
      background: depth > 0.8 ? 'var(--color-secondary)' : 'white',
      opacity: depth * 0.8,
      position: 'absolute'
    });
    star.dataset.depth = depth.toString();
    starContainer.appendChild(star);
    stars.push(star);
  }

  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (x - centerX) / centerX;
    const moveY = (y - centerY) / centerY;

    requestAnimationFrame(() => {
      // Cursor Physics
      if (cursor && follower) {
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }

      // Stars (Hyperspace / Parallax)
      stars.forEach(star => {
        const depth = parseFloat(star.dataset.depth || '0');
        const sX = moveX * (depth * 100);
        const sY = moveY * (depth * 100);
        star.style.transform = `translate(${sX}px, ${sY}px) scale(${1 + (moveX + moveY) * depth * 0.5})`;
      });

      // Nebula & Aura
      if (aura) aura.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      // 3D Tilt for cards
      tiltCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = x - (rect.left + rect.width / 2);
        const cardY = y - (rect.top + rect.height / 2);
        const angleX = (cardY / (rect.height / 2)) * -10;
        const angleY = (cardX / (rect.width / 2)) * 10;
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
    });
  });

  // Reset Tilt on Leave
  tiltCards.forEach(card => {
    card.addEventListener('mouseleave', () => {
      (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });

    // Cursor interaction
    card.addEventListener('mouseenter', () => {
      cursor?.classList.add('cursor-active');
      follower?.classList.add('cursor-follower-active');
    });
    card.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor-active');
      follower?.classList.remove('cursor-follower-active');
    });
  });
};

onMounted(() => {
  initVisuals();
});
</script>

<template>
  <div>
    <!-- Background Layers -->
    <div class="nebula-container" id="nebulas">
      <div class="nebula nebula-1" id="nebula-1"></div>
      <div class="nebula nebula-2" id="nebula-2"></div>
    </div>
    <div class="stars-container" id="stars"></div>
    <div class="mouse-aura" id="mouse-aura"></div>
    <div class="custom-cursor" id="cursor"></div>
    <div class="custom-cursor-follower" id="cursor-follower"></div>

    <!-- CRT Effects -->
    <div class="crt-overlay"></div>
    <div class="scanlines"></div>

    <!-- Main Content -->
    <NuxtPage />
  </div>
</template>
