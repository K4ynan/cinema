var imagens = ["imagens/batman.jpg", "imagens/longe-de-casa.webp", "imagens/multiverse.jpg", "imagens/ultimato.jpg", "imagens/vingadores.webp"];
var imagematual = 0;

function trocaimagem() {
    imagematual = (imagematual + 1) % 5;
    document.querySelector('.gif img').src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);