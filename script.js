function hitungCinta() {
  const namaKamu = document.getElementById("namaKamu").value;
  const namaPasangan = document.getElementById("namaPasangan").value;

  // Menghitung total kemunculan huruf yang sama
  let totalSama = 0;
  for (let i = 0; i < namaKamu.length; i++) {
    for (let j = 0; j < namaPasangan.length; j++) {
      if (namaKamu[i].toLowerCase() === namaPasangan[j].toLowerCase()) {
        totalSama++;
      }
    }
  }

  // Menghitung persentase cinta
  let persentaseCinta = Math.floor(
    (totalSama / (namaKamu.length + namaPasangan.length)) * 100
  );

  // Menampilkan hasil
  const hasilCintaElement = document.getElementById("hasilCinta");
  const hasilPersentase = document.getElementById("persentaseCinta");

  hasilPersentase.innerHTML = persentaseCinta + " %";

  if (persentaseCinta >= 90 && persentaseCinta <= 100) {
    hasilCintaElement.innerHTML = `Cinta kalian sempurna! `;
  } else if (persentaseCinta >= 75 && persentaseCinta < 90) {
    hasilCintaElement.innerHTML = `Kalian sangat cocok! `;
  } else if (persentaseCinta >= 60 && persentaseCinta < 75) {
    hasilCintaElement.innerHTML = `Kalian memiliki hubungan yang kuat! `;
  } else if (persentaseCinta >= 40 && persentaseCinta < 65) {
    hasilCintaElement.innerHTML = `Kalian memiliki potensi untuk bersama! `;
  } else if (persentaseCinta >= 0 && persentaseCinta < 40){
    hasilCintaElement.innerHTML = `Tetaplah berusaha untuk hubungan kalian!`;
  } else {
    hasilCintaElement.innerHTML = 'Cinta Kalian melebihi batas !!!'
  }

  
}

const hitungKecocokan = document.getElementById("btn-hitung");
hitungKecocokan.addEventListener("click", function (e) {
  e.preventDefault();
  hitungCinta();
});


