<script>
  import { browser } from "$app/environment";

  const MAX_PARTICLES = 120;
  const MIN_PARTICLES = 100;
  const LINE_THRESHOLD_BASE = 400;
  const PARTICLE_SPEED = 0.25;

  let canvas = $state(null);
  let ctx = $state(null);
  let frameId = $state(null);

  let width = $state(0);
  let height = $state(0);
  let dpr = $state(1);

  let particles = $state([]);

  function readCSSVar(name, target) {
    if (!browser) return "";
    const el = target ?? document.body;
    if (!el) return "";
    return getComputedStyle(el).getPropertyValue(name).trim();
  }

  function hexToRgb(hex) {
    if (!hex) return [0, 0, 0];
    const sanitized = hex.replace("#", "");
    if (sanitized.length === 3) {
      const r = sanitized[0];
      const g = sanitized[1];
      const b = sanitized[2];
      return [parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16)];
    }
    return [
      parseInt(sanitized.substring(0, 2), 16),
      parseInt(sanitized.substring(2, 4), 16),
      parseInt(sanitized.substring(4, 6), 16),
    ];
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * (width || 1);
      this.y = Math.random() * (height || 1);
      this.vx = (Math.random() - 0.5) * PARTICLE_SPEED * 2;
      this.vy = (Math.random() - 0.5) * PARTICLE_SPEED * 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= 0 || this.x >= width) {
        this.vx *= -1;
        this.x = Math.min(Math.max(this.x, 0), width);
      }

      if (this.y <= 0 || this.y >= height) {
        this.vy *= -1;
        this.y = Math.min(Math.max(this.y, 0), height);
      }
    }
  }

  function initParticles() {
    const target = Math.max(
      MIN_PARTICLES,
      Math.min(MAX_PARTICLES, Math.round((width * height) / 32000))
    );

    particles = Array.from({ length: target }, () => new Particle());
  }

  function resizeCanvas() {
    if (!browser || !canvas) return;

    width = window.innerWidth;
    height = window.innerHeight;

    dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    initParticles();
  }

  function draw() {
    if (!browser || !ctx) return;

    const background = readCSSVar("--background") || "#000";
    const primaryHex = readCSSVar("--primary") || "#ffffff";
    const [pr, pg, pb] = hexToRgb(primaryHex);

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, 0.8)`;

    particles.forEach((particle) => {
      particle.update();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    });

    const threshold = Math.min(
      LINE_THRESHOLD_BASE,
      Math.max(width, height) / 3
    );

    ctx.lineWidth = 1.5;

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist <= threshold) {
          const alpha = 1 - dist / threshold;
          ctx.strokeStyle = `rgba(${pr}, ${pg}, ${pb}, ${Math.min(
            0.65,
            alpha * 0.8
          )})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    draw();
    frameId = requestAnimationFrame(animate);
  }

  function handleVisibility() {
    if (!browser) return;
    if (document.hidden) {
      cancelAnimationFrame(frameId);
    } else {
      frameId = requestAnimationFrame(animate);
    }
  }

  $effect(() => {
    if (!browser) return;

    resizeCanvas();
    frameId = requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 -z-10 w-screen h-screen pointer-events-none"
></canvas>
