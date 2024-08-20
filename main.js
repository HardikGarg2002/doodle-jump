import { Doodle } from "./doodle.js";
import ParticleBackground from "./particleBackground.js";
import { Platform } from "./platform.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = 400);
const height = (canvas.height = 600);
const doodleJumpHiest = 10;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

function createParticleBackground() {
  const particleBackground = new ParticleBackground(width, height);
  return particleBackground;
}

function MoveParticleBackground(particleBackground) {
  particleBackground.move();
  particleBackground.draw(ctx);
}

function createDoodle() {
  const doodle = new Doodle({
    x: width / 2 - 30,
    y: height - 60,
    width: 50,
    height: 60,
  });
  doodle.draw(ctx);
}
function createPlatforms(count = 1) {
  const platforms = [];
  for (let i = 0; i < count; i++) {
    let x = Math.random() * 400;
    let y = Math.random() * 600;
    platforms.push(new Platform({ x, y }));
    // y += Math.random() * 100;
    // x += Math.random() * 50;
  }
  return platforms;
}
function movePlatform(platforms) {
  platforms.forEach((platform) => {
    platform.draw(ctx);
    platform.move();
  });
}
const particleBackground = createParticleBackground();
const platforms = createPlatforms(8);

function update() {
  MoveParticleBackground(particleBackground);
  createDoodle();
  movePlatform(platforms);
  requestAnimationFrame(update);
}
update();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
