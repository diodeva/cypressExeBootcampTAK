import 'jquery/dist/jquery.min.js';
Cypress.on('uncaught:exception', (err, runnable) => {
    // atur penanganan kesalahan (error handling) yang diinginkan
    // misalnya dengan menampilkan pesan error ke konsol
    console.error('Uncaught exception:', err, runnable)
    // atau dengan mengirim pesan error ke server
    // kirimPesanErrorKeServer(err)
    // atau dengan cara lain yang sesuai dengan kebutuhan Anda
    return false
  })
  