export default class ParticleBackground {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.numParticles = 100;
    this.particles = [];
    this.createParticles();
  }
  createParticles() {
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(
        new Particle({
          x: Math.random() * this.width - 1,
          y: Math.random() * this.height - 1,
          vx: Math.random(),
          vy: Math.random(),
          radius: Math.random() * 2 + 1,
        })
      );
    }
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);

    this.particles.forEach((particle) => {
      particle.draw(ctx);
    });
  }

  move() {
    this.particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > this.width) {
        particle.vx *= -1;
      }

      if (particle.y < 0 || particle.y > this.height) {
        particle.vy *= -1;
      }
    });
  }
}

class Particle {
  constructor({ x, y, vx, vy, radius }) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
  }
  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
