// variabel tombol bayar dan terima
let allTombolBayar = document.querySelectorAll('.bayar-toggle');
let allTombolTerima = document.querySelectorAll('.terima-toggle');

// waktu
let containerWaktuDiterima = document.querySelectorAll('.waktu-diterima');

// tombol bayar
allTombolBayar.forEach((tombolBayar, index) => {
	tombolBayar.addEventListener('click', () => {
		aksiHijau(tombolBayar);
		tombolBayar.parentNode.innerHTML = "LUNAS";
	});
})

// tombol terima
allTombolTerima.forEach((tombolTerima, index) => {
	tombolTerima.addEventListener('click', () => {
		if (tombolTerima.parentNode.previousSibling['previousSibling'].style['background-color'] == 'rgb(119, 255, 51)') {
			aksiHijau(tombolTerima);
			tombolTerima.parentNode.innerHTML = 'DITERIMA';
			containerWaktuDiterima[index].innerHTML = waktuSekarang();
		}
	})
})

// aksi jika sudah bayar atau terima
function aksiHijau(tombol) {
	// mengubah warna background dari parent-nya tombol
	tombol.parentNode.style['background-color'] = '#77FF33';
}

// mengambil waktu sekarang
function waktuSekarang() {
	let waktu = new Date();
	let jam = waktu.getHours();
	let menit = waktu.getMinutes();
	let detik = waktu.getSeconds();

	if (jam < 10 || menit < 10 || detik < 10) {
		if (jam < 10) {
			var jam2 = '0' + jam;
		}
		if (menit < 10) {
			var menit2 = '0' + menit;
		} 
		if (detik < 10) {
			var detik2 = '0' + detik;
		}
		
		let formatWaktu2 = (jam2 ? jam2 : jam) + ':' + (menit2 ? menit2 : menit) + ':' + (detik2 ? detik2 : detik);
		return formatWaktu2;
	}

	let formatWaktu = jam.toString() + ':' + menit.toString() + ':' + detik.toString();

	return formatWaktu;
}