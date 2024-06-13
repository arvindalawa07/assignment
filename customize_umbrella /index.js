const elements = {
  blueBtn: document.getElementById("blue-btn"),
  blackBtn: document.getElementById("black-btn"),
  greyBtn: document.getElementById("grey-btn"),
  royalBlueBtn: document.getElementById("royal-blue-btn"),
  yellowBtn: document.getElementById("yellow-btn"),
  pinkBtn: document.getElementById("pink-btn"),
  lightGreenBtn: document.getElementById("light-green-btn"),
  orangeBtn: document.getElementById("orange-btn"),
  redBtn: document.getElementById("red-btn"),
  creamColorBtn: document.getElementById("cream-color-btn"),
  lightRedBtn: document.getElementById("light-red-btn"),
  umbrellaImage: document.getElementById("umbrella-img"),
  loaderContainer: document.getElementById("loader-img"),
  logoUploadButton: document.getElementById("logo-upload-btn"),
  logoUploadInput: document.getElementById("logo-functionality"),
  logoText: document.getElementById("logText"),
  uploadLogo: document.getElementById("upload-logo"),
  umbrellaUploadedLogo: document.getElementById("logo-img"),
  uploadLoader: document.getElementById("uploade-loader"),
  removeIcon: document.getElementById("remove-icon")
};

let isLogoAdded = false;
let currentColor = "#2db3e5";

elements.uploadLogo.style.fill = "white";
elements.removeIcon.style.display = "none";

function showLoader(color = currentColor) {
  elements.umbrellaImage.style.display = "none";
  elements.umbrellaUploadedLogo.style.display = "none";
  document.getElementById("loader").style.fill = color;
  elements.uploadLogo.style.display = "none";
  elements.uploadLoader.style.display = "block";
  elements.uploadLoader.style.backgroundColor = "transparent";
  elements.uploadLoader.style.fill = "white";
  elements.loaderContainer.style.opacity = 1;
}

function hideLoader() {
  elements.uploadLogo.style.display = "block";
  elements.uploadLoader.style.display = "none";
  elements.loaderContainer.style.opacity = 0;
  elements.umbrellaImage.style.display = "block";
  elements.umbrellaUploadedLogo.style.display = "block";
}

function handleLogoUpload(event) {
  elements.umbrellaUploadedLogo.style.display = "none";
  const file = event.target.files[0];
  if (file.size > 5242880) {
    alert("File Size should not be greater than 5MB");
    return;
  }
  elements.logoText.innerText = file.name;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    isLogoAdded = true;
    elements.umbrellaImage.style.display = "none";
    showLoader();
    setTimeout(() => {
      hideLoader();
      elements.umbrellaUploadedLogo.src = reader.result;
      elements.logoText.innerText = "Upload Logo";
      elements.removeIcon.style.display = "block";
    }, 3000);
  };
}

function changeUmbrellaColor(color, backgroundColor, umbrellaSrc) {
  currentColor = color;
  elements.logoUploadButton.style.backgroundColor = color;
  elements.uploadLogo.style.backgroundColor = color;
  document.body.style.backgroundColor = backgroundColor;
  if (!isLogoAdded) {
    elements.umbrellaImage.src = umbrellaSrc;
  } else {
    showLoader(color);
    setTimeout(() => {
      hideLoader();
      elements.umbrellaImage.src = umbrellaSrc;
    }, 3000);
  }
}

elements.removeIcon.addEventListener("click", () => {
  elements.removeIcon.style.display = "none";
  elements.logoUploadInput.value = "";
  elements.umbrellaUploadedLogo.src = "";
});

elements.logoUploadInput.addEventListener("change", handleLogoUpload);

elements.blueBtn.addEventListener("click", () => changeUmbrellaColor("#2db3e5", "#c5e0dc", "./assets/Blue.png"));
elements.yellowBtn.addEventListener("click", () => changeUmbrellaColor("#fed144", "#f7e09e", "./assets/Yello.png"));
elements.pinkBtn.addEventListener("click", () => changeUmbrellaColor("#da358c", "#f4c4c4", "./assets/Pink.png"));
elements.blackBtn.addEventListener("click", () => changeUmbrellaColor("#4b0f40", "#bc54a8", "./assets/Purple.png"));
elements.greyBtn.addEventListener("click", () => changeUmbrellaColor("#1f961d", "#c3e3c3", "./assets/Green.png"));
elements.royalBlueBtn.addEventListener("click", () => changeUmbrellaColor("#102C57", "#878edb", "./assets/Dark_Blue.png"));
elements.orangeBtn.addEventListener("click", () => changeUmbrellaColor("#FF7D29", "#dba179", "./assets/Orange.png"));
elements.redBtn.addEventListener("click", () => changeUmbrellaColor("#EE4E4E", "#fc9696", "./assets/Red.png"));

elements.logoUploadButton.addEventListener("click", () => {
  elements.logoUploadInput.click();
});
