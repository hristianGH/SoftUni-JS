function create(words) {
  const content = document.getElementById("content");
  words.forEach((x) => {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = x;
    paragraph.style.display = "none";
    div.appendChild(paragraph);
    content.appendChild(div);
    div.addEventListener('click', function(e){
      const p = e.target.children[0] || e.target;
      const isVisible = p.style.display === "block";
      p.style.display = isVisible ? "none" : "block";
      console.log(p.style.display)
    })
  });

 
}
