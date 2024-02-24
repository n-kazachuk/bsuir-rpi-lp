
import MenuLogo from "./menuLogo.js";
import LogoutButton from "./logoutButton.js";
export default function ComingSoon() {
  const mainMenu = document.createElement("div");

  // Logo
  const menuLogo = MenuLogo();
  mainMenu.appendChild(menuLogo);

  const message = document.createElement("div");
  message.innerHTML = `Login functionality under development. Check back soon!`;
  mainMenu.appendChild(message);

  return mainMenu;
}
