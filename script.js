function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar tag img
  const img = document.querySelector("#profile img");

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png");
  }
}
