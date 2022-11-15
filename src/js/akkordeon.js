const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach(box => {
  box.addEventListener("click", boxHandler);
  });

  function boxHandler(ebox) {
    ebox.preventDefault();
    let currentBox = ebox.target.closest(".box");
    let currentContent = ebox.target.nextElementSibling;
    currentBox.classList.toggle("active");
    
    if (currentBox.classList.contains("active")) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
      currentContent.style.maxHeight = 0;
    }
  }