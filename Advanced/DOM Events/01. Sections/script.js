function create(words) {
  const content = document.getElementById("content");
  words.forEach((x) => {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = x;
    paragraph.style.display = "none";
    div.appendChild(paragraph);
    content.appendChild(div);
  });

  content.addEventListener("click", function (e) {
     console.log(e.target)
    if (e.target.tagName === "DIV" || e.target.tagName==='P') {
      const p = e.target.children[0] || e.target;
      const isVisible = p.style.display === "block";
      p.style.display = isVisible ? "none" : "block";
      console.log(p.style.display)
    }
  });
}
