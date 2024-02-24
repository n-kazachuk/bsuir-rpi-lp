export default function Board() {
  const board = document.createElement("div");
  board.setAttribute("id", "board");
  switch (level) {
    case "beginner":
      board.style.height = "317px";
      break;
    case "intermediate":
      board.style.height = "541px";
      break;
    case "expert":
      board.style.height = "541px";
      break;
  }

  return board;
}
