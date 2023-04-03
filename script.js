const nisab = 653 * 5000; // Nisab zakat pertanian dalam rupiah
const zakatFitrah = 3 * 90000; // Jumlah zakat fitrah dalam rupiah

function hitungZakat(event) {
  event.preventDefault();
  const jenisZakat = document.getElementById("jenis-zakat").value;
  const jumlahZakat = document.getElementById("jumlah-zakat").value;
  let zakat = 0;

  // Hitung zakat berdasarkan jenis zakat
  switch (jenisZakat) {
    // case "zakat-fitrah":
    //   zakat = zakatFitrah * jumlahZakat;
    //   break;
    case "zakat-mal":
      if (jumlahZakat >= 85 * 900000) {
        zakat = 0.025 * jumlahZakat;
      }
      break;
    case "zakat-penghasilan":
      if (jumlahZakat >= 85 * 900000) {
        zakat = 0.025 * jumlahZakat;
      }
      break;
    case "zakat-pertanian":
      if (jumlahZakat >= nisab) {
        zakat = 0.1 * jumlahZakat;
      }
      break;
    case "zakat-pertanian-hujan":
      if (jumlahZakat >= nisab) {
        zakat = 0.05 * jumlahZakat;
      }
      break;

    default:
      console.log("Pilih jenis zakat yang ingin dihitung");
  }

  // Tampilkan hasil penghitungan
  const hasilDiv = document.getElementById("hasil");
  if (zakat > 0) {
    hasilDiv.innerHTML = `Jumlah zakat yang harus dibayar: Rp${zakat.toLocaleString()}`;
  } else {
    hasilDiv.innerHTML =
      "Anda tidak wajib membayar zakat, karena belum mencapai nisab";
  }
}

// Tambahkan event listener pada tombol submit
const tombolHitung = document.querySelector("button[type='submit']");
tombolHitung.addEventListener("click", hitungZakat);
