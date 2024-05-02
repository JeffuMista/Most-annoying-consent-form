const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCloseBtnContainer = document.getElementById(
  "modal-close-btn-container"
);
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalBtns = document.getElementById("modal-btns")
setTimeout(function () {
  modalContainer.style.display = "block";
}, 3000);

modalCloseBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

document.getElementById('decline-btn').addEventListener('mouseover', function(){
  modalBtns.classList.toggle("row-reverse")
})
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullname");
  console.log(fullName);
  modalText.innerHTML = `
  <div>
    <img src="public/loading.svg" class="loading" alt="animated loading svg">
    <p class="upload-text" id="upload-text"> Uploading your details to the Dark Web...</p>
  </div>
  `;
  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
    Making the Transaction...
    `;
  }, 2000);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
    <div class="modal-gif">
      <h2> Thanks <span class="full-name-text">${fullName}</span>, you sucker!</h2> 
      <p>Our hackers are acting on your information.</p>
      <img src="anon.gif" alt="Anonymous hacker coloured image 
      flickering followed by 'Game Over' text">
    </div>
    `;
  }, 5000);
  modalCloseBtn.disabled = false
});
