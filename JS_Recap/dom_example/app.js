const myImg = document.createElement("img");
myImg.src =
  "https://images.unsplash.com/photo-1548135160-2ddd99526762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80";
myImg.style.width = "200px";
myImg.style.transition = "all 2s";
document.body.append(myImg);

setInterval(() => {
  const rotation = Math.floor(Math.random() * 360);
  const x = Math.floor(document.body.clientWidth * Math.random()) + 1;
  const y = Math.floor(document.body.clientHeight * Math.random()) + 1;
  myImg.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}, 2000);
