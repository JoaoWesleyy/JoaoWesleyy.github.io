const btnEmail = document.getElementById("btn-email");

btnEmail.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (!nome || !email) {
    alert("Preencha o nome e email!");
    return;
  }

  emailjs
    .send("service_h95nuhz", "template_5ol6hn7", {
      nome: nome,
      email_destino: email,
    })
    .then(function () {
      alert("Currículo enviado com sucesso!");
    })
    .catch(function (error) {
      alert("Erro ao enviar: " + error.text);
    });
});

const btnWhatsapp = document.getElementById("btn-whatsapp");

btnWhatsapp.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;

  if (!nome || !numero) {
    alert("Preencha o nome e número!");
    return;
  }

  const mensagem = `Olá! Meu nome é ${nome}, gostaria de receber seu currículo.`;
  const link = `https://wa.me/5562996361963?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});
