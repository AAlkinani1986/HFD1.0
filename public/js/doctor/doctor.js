console.log("Hello");
const uploadFile = document.getElementById("doctor_img");
const image = document.querySelector("img");
var uploadImage = "";
uploadFile.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadImage = reader.result;
    image.setAttribute("src", uploadImage);
  });
  reader.readAsDataURL(uploadFile.files[0]);
});
