import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

// function logout() {
//     var result = confirm("yakin?");
//     if (result) {
//         deleteCookie("token");
//         // Mengarahkan ke halaman login
//         window.location.href = "login.html";
//     }
// }

// document.getElementById("button").addEventListener("click", logout);

const logout = () => {
    // Menampilkan Sweet Alert konfirmasi
    Swal.fire({
      icon: "question",
      title: "Konfirmasi",
      text: "Apakah Anda benar ingin logout?",
      showCancelButton: true,
      confirmButtonText: "Benar",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        // Menghapus cookie
        deleteCookie("token");
        // Menampilkan Sweet Alert berhasil logout
        Swal.fire({
          icon: "success",
          title: "Logout Berhasil",
          text: "Anda telah logout dari sistem",
        }).then(() => {
          // Mengarahkan ke halaman login
          window.location.href = "login.html";
        });
      }
    });
  };
  
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", logout);