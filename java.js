function verificarPalindrome(frase) {
    frase = frase.replace(/\s/g, '').toLowerCase();

    var fraseInvertida = frase.split('').reverse().join('');

    if (frase === fraseInvertida) {
        return 'Sí es un palíndromo.';
    } else {
        return 'No es un palíndromo.';
    }
}

var resultado = verificarPalindrome('Anita lava la tina');
console.log(resultado);
