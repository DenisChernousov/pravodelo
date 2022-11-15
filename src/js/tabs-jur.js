const tabBtnsbusiness = Array.from(document.querySelectorAll(".tab__btn-business"));
const tabIndicatorbusiness = document.querySelector("#tab_indicator-business");
const tabSlidebusiness = Array.from(document.querySelectorAll(".tab__slide-business"));

const numTabbusiness = tabBtnsbusiness.length;


tabBtnsbusiness[0].classList.add("active");
tabSlidebusiness[0].classList.add("active");

let activeBtnbusiness = tabBtnsbusiness[0];
let activeSlidebusiness = tabSlidebusiness[0];

tabBtnsbusiness.forEach((el1) => {
  el1.addEventListener("click", onTabBtnCllickbusiness);
});

function onTabBtnCllickbusiness(element) {
  element.preventDefault();
  const btnbusiness = element.target.closest(".tab__btn-business");
  changeBtnbusiness(btnbusiness);

}

function changeBtnbusiness(btnbusiness) {
  if (btnbusiness.classList.contains("active")) {
    return;
  }
  activeBtnbusiness.classList.remove("active");
  btnbusiness.classList.add("active");
  activeBtnbusiness = btnbusiness;
  changeIndicatorbusiness(btnbusiness);
}

function changeIndicatorbusiness(btnbusiness) {
  const indexBtnbusiness = tabBtnsbusiness.indexOf(btnbusiness);
  tabIndicatorbusiness.style.left = `calc(${indexBtnbusiness}*100%/3)`;
  changeSlidebusiness(indexBtnbusiness);
}

function changeSlidebusiness(index) {
  activeSlidebusiness.classList.remove("active");
  tabSlidebusiness[index].classList.add("active");
  activeSlidebusiness = tabSlidebusiness[index];
}