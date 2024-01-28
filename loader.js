
const element = document.getElementById("loader");

async function loaderHide() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    element.classList.add("loader-hide");
    await new Promise(resolve => setTimeout(resolve, 1020));
    element.classList.add("loader-remove");
  }

window.onload = loaderHide;
