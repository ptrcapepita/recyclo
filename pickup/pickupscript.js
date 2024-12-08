document.getElementById('recycleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const berat = parseInt(document.querySelector('input[name="berat"]').value);

    if (berat < 2) {
        alert('Berat sampah minimal adalah 2 kilogram.');
    } else {
        alert('Formulir berhasil dikirim! Kami akan menjemput sampah Anda.');
        this.submit();
    }
});