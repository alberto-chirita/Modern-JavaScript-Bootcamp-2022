const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  const messageForm = document.querySelector("#message-form");
  messageForm.classList.add("hide");

  const messageShow = document.querySelector("#message-show");
  messageShow.classList.remove("hide");

  const h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const messageForm = document.querySelector("#message-form");
  messageForm.classList.add("hide");

  const linkForm = document.querySelector("#link-form");
  linkForm.classList.remove("hide");

  const messageInput = document.querySelector("#message-input");
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
