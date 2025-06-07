<template>
  <canvas ref="canvasRef" class="absolute inset-0 z-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number;

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
};

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
}

const stars: Star[] = [];

const initStars = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  stars.length = 0;
  const starCount = Math.floor((canvas.width * canvas.height) / 2000);
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.05,
      alpha: Math.random(),
    });
  }
};

const drawStars = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    // Twinkle effect
    star.alpha += Math.random() * 0.01 - 0.005;
    star.alpha = Math.max(0.1, Math.min(1, star.alpha));

    // Subtle movement
    star.y -= star.speed;

    // Reset if star moves off canvas
    if (star.y < -10) {
      star.y = canvas.height + 10;
      star.x = Math.random() * canvas.width;
    }
  });

  animationFrameId = requestAnimationFrame(drawStars);
};

onMounted(() => {
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawStars();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas);
  cancelAnimationFrame(animationFrameId);
});
</script>