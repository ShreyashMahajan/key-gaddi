const buttonReset = document.querySelector(".btn--reset");
const buttonChangePass = document.querySelector(".btn--change-pass");
const confirmUserData = document.querySelector(".confirm-user-data");

buttonReset.addEventListener("click", () => {
    buttonChangePass.style.display = "initial";
    buttonReset.style.display = "none";
    confirmUserData.style.display = "flex";
})
