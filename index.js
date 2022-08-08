const showMoreBtns = document.getElementsByClassName("product-show-more");

for (let btn of showMoreBtns) {
  console.log(btn);
  btn.addEventListener("click", () => {
    btn.parentElement
      .getElementsByClassName("expand_more")[0]
      .classList.toggle("rotate");
    btn.parentElement
      .getElementsByClassName("product-info")[0]
      .classList.toggle("hidden");
    btn.parentElement
      .getElementsByClassName("product-discount")[0]
      .classList.toggle("hide-discount");
  });
}
