<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>APP</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="styles/form.css">
</head>
<body>

	<h1>Bazar App</h1>
	<hr>

	<div class="container">
		<form>
			<label for="inputnama">Nama </label>
    		<input type="text" id="inputnama" name="Nama" placeholder="Masukan Nama..">
		</form>
	</div>

	<br><br><br>

	<div class="order">

		<hr>
		<button>help</button>
		<button>edit</button>
		<hr>

		<table cellpadding="10" cellspacing="0" border="1">
			<tr>
				<th>No</th>
				<th>nama</th>
				<th>kelas</th>
				<th>daftar makanan</th>
				<th>total harga</th>
				<th>bayar</th>
				<th>diterima</th>
				<th>waktu pemesanan</th>
				<th>waktu diterima</th>
			</tr>
			<?php for($j=1; $j<=100; $j++) : ?>
				<tr>
					<td><?= $j ?></td>
					<td>lorem</td>
					<td>XI IPA</td>
					<td class="bold">lorem, lorem, lorem, lorem</td>
					<td class="bold">Rp24.000</td>
					<td>
						<button class="bayar-toggle">bayar pesanan</button>
					</td>
					<td>
						<button class="terima-toggle">terima pesanan</button>
					</td>
					<td>10:09:16</td>
					<td class="waktu-diterima"></td>
				</tr>
			<?php endfor; ?>
		</table>
	</div>

<script src="script.js"></script>
</body>
</html>