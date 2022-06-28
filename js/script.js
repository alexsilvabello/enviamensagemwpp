document
    .querySelector('.enviarMensagem')
    .addEventListener('click', function () {

        let btnEnviar = document.querySelector('.enviarMensagem'),
            codigoPais = document.querySelector('#cdpais').value,
            telefone = document.querySelector('#tl').value,
            msgDev = document.querySelector('#ms').value;
        let url = `https://api.whatsapp.com/send?phone=${codigoPais}${telefone}&text=${msgDev}`;
        btnEnviar.href = `${url}`;
    });