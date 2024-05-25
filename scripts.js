const wrapper = document.querySelector(".wrapper");
generateBtn = wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.textContent = "Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}&charset-target=ISO-8859-1&ecc=H&color=3498DB`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.textContent = "Generate QR Code"
    })

})