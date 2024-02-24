export default function LogoutButton() {
  // Button
  const logoutButton = document.createElement("button");
  logoutButton.innerText = `Logout`;

  // Functionality
  logoutButton.addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    let config = {
      headers: { "x-access-token": token },
    };
    try {
      const res = await axios.post("https://emojiminesweeper.cyclic.app/user/logout", null, config);
      window.localStorage.setItem("token", "")
      window.localStorage.setItem("isLoggedIn", "false");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    
  });

  return logoutButton;
}
