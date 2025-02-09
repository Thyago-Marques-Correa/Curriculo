     // envio de e-mail via JavaScript (usando mailto)
     document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:thyago30407@outlook.com?subject=Mensagem de ${name}&body=${encodeURIComponent(message)}%0A%0AEnviado por: ${email}`;
        window.location.href = mailtoLink;
    });