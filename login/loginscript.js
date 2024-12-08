document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const alamat = document.getElementById('alamat').value;
    const foto = document.getElementById('foto').value;

    // Validasi
    if (nama.trim() === '') {
        alert('Nama harus diisi.');
        return false;
    }

    if (email.trim() === '') {
        alert('Email harus diisi.');
        return false;
    }

    if (!email.includes('@') || !email.endsWith('.com')) {
        alert('Email harus mengandung "@" dan diakhiri dengan ".com".');
        return false;
    }

    if (telepon.trim() === '') {
        alert('Nomor Telepon harus diisi.');
        return false;
    }

    if (!/^\d{11,}$/.test(telepon)) {
        alert('Nomor telepon harus berupa angka dengan minimal 11 digit.');
        return false;
    }

    if (alamat.trim() === '') {
        alert('Alamat harus diisi.');
        return false;
    }

    if (foto.trim() === '') {
        alert('File foto harus diisi.');
        return false;
    }

    // Jika semua validasi lolos
    alert(`Terima kasih, ${nama}! Anda telah mendaftar dengan email ${email}.`);
    // return true;
    this.submit();
});
