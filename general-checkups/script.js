document.getElementById('checkup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Generate QR code data (e.g., using a format that includes user details)
    const qrCodeData = `Name: ${name}, Age: ${age}, Email: ${email}`;

    // Clear any previous QR code
    document.getElementById('qr-code-container').innerHTML = '';

    // Generate and display the QR code
    const qrcode = new QRCode(document.getElementById('qr-code-container'), {
        text: qrCodeData,
        width: 128,
        height: 128,
    });
});