const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('nav'); // Seleciona o elemento <nav>

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active'); // Usa vanilla JavaScript para adicionar/remover a classe 'active'
});





$('.accordion-header').click(function () {
    const target = $(this).data('target'); // Obtém o ID do item correspondente
    const $body = $(target);
    const $header = $(this); // Armazena o header clicado
    const arowUp = `<img src="./src/img/dobra_4/Vector.svg" alt="" srcset="">`;
    const arowDown = `<img src="./src/img/dobra_4/Vector.svg" alt="" srcset="">`;

    // Verifica se o corpo está aberto
    if ($body.hasClass('open')) {
        // Se estiver aberto, fecha-o
        $body.slideUp(300, function () {
            $body.removeClass('open'); // Remove a classe "open" do corpo
            $header.removeClass('open'); // Remove a classe "open" do header correspondente
            // $header.find('.icon').text('+'); // Muda ícone para +
            $header.find('.icon').html(arowDown); // Muda ícone para +
        });
    } else {
        // Se não estiver aberto, fecha todos os outros
        $('.accordion-body').slideUp(300).removeClass('open');
        $('.accordion-header').removeClass('open'); // Remove a classe "open" de todos os headers
        // $('.accordion-header .icon').text('+'); // Reseta todos os ícones para +
        $('.accordion-header .icon').html(arowUp); // Reseta todos os ícones para +

        // Abre o corpo atual
        $body.slideDown(300, function () {
            $body.addClass('open'); // Adiciona a classe "open" ao corpo atual
            $header.addClass('open'); // Adiciona a classe "open" ao header correspondente
            // $header.find('.icon').text('-'); // Muda ícone para -
            $header.find('.icon').html(arowDown); // Muda ícone para -
        });
    }
});