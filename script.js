function updateTime() {
  const now = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const day = days[now.getDay()];
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${day}, ${hours}:${minutes}:${seconds}`;
  document.getElementById("timeDisplay").textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Untuk Navbar

const anavlink = document.getElementsByClassName("nav-link");

for (let i = 0; i < anavlink.length; i++) {
  anavlink[i].addEventListener("mouseenter", function () {
    this.style.fontSize = "20px";
  });

  anavlink[i].addEventListener("mouseleave", function () {
    this.style.fontSize = "18px";
  });
}

// contoh modal

document.addEventListener("DOMContentLoaded", () => {
  const myModal = new bootstrap.Modal(document.getElementById("namaAnda"));
  const saveButton = document.getElementById("simpanNama");
  const userNameInput = document.getElementById("userName");
  const userNameDisplay = document.getElementById("user-name");

  myModal.show();

  function handleSubmit() {
    const userName = userNameInput.value.trim();
    const lettersAndSpacesRegex = /^[A-Za-z\s]+$/;
    if (userName && lettersAndSpacesRegex.test(userName)) {
      myModal.hide();
      userNameDisplay.textContent = userName;
      alert(`Selamat datang, ${userName}!`);
    } else {
      alert("Silakan Masukkan Nama Anda yang Hanya Terdiri Dari Huruf");
    }
  }

  saveButton.addEventListener("click", handleSubmit);

  userNameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  });
});
