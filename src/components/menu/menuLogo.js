
export default function MenuLogo() {
  const menuLogo = document.createElement("img");
  menuLogo.setAttribute("id", "menu-logo");
  menuLogo.setAttribute("src", "../../assets/logo.svg");
  menuLogo.setAttribute("alt", "Minesweeper Logo");
  menuLogo.setAttribute("width", "40px");

  return menuLogo;
}
