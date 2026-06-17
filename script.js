document.getElementById('agendamento-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar

    // Pega os dados digitados pela cliente
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Formata a data para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = data.split('-').reverse().join('/');

    // Seu número de WhatsApp (DDD + Número, sem espaços ou traços)
    const meuNumero = "5531984555598"; 

    // Cria o texto da mensagem
    const textoMensagem = `Olá Deise! Gostaria de solicitar um agendamento:%0A%0A` +
                          `*Nome:* ${nome}%0A` +
                          `*Serviço:* ${servico}%0A` +
                          `*Data:* ${dataFormatada}%0A` +
                          `*Horário:* ${hora}%0A` +
                          `*WhatsApp:* ${whatsapp}`;

    // Link oficial do WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${textoMensagem}`;

    // Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank');
});