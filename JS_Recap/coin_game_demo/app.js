const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

const extractPos = (pos) => parseInt(pos);

const moveVertical = (element, amount) => {
  const currTop = extractPos(getComputedStyle(element).top);
  element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(getComputedStyle(element).left);
  element.style.left = `${currLeft + amount}px`;
};

const isTouching = (a, b) => {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "Up":
    case "ArrowUp":
      moveVertical(avatar, -50);
      break;
    case "Down":
    case "ArrowDown":
      moveVertical(avatar, 50);
      break;
    case "Right":
    case "ArrowRight":
      moveHorizontal(avatar, 50);
      avatar.style.transform = "scale(1,1)";
      break;
    case "Left":
    case "ArrowLeft":
      moveHorizontal(avatar, -50);
      avatar.style.transform = "scale(-1,1)";
      break;
    default:
      break;
  }

  if (isTouching(avatar, coin)) {
    moveCoin();
  }
});

moveCoin();
