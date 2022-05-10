function notify(message) {
  let notification = document.getElementById("notification");
  let btn = document.querySelectorAll("button")[0];
  btn.addEventListener("click", () => {
    notification.style.display = "block";
    let paragraph = (document.createElement("p").value = "message");
    if (notification.childNodes.length == 0) {
      notification.append(paragraph);
    }
  });
}
