const amarelo = document.querySelector('amarelo');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
//uma variavel (VAR) manipula dados vindos do HTML por meio de indentificadores (ID)
//uma constante manipula elementos(CONST) manipul elementos vindos do HTML por meio classes (queryselector)
let contador = 1;

setInterval(() => {
    if(contador <= 1) {
        vermelho.classList.add('vermelho-ativo');
    } else if (contador == 5)  {
        amarelo.classList.add('amarelo-ativo');
        vermelho.classList.remove('vermelho-ativo');
    } else if (contador == 10) {
        verde.classList.add('verde-ativo');
        amarelo.classList.remove('amarelo-ativo');
    } else if (contador == 15)
        verde.classList.remove('verde-ativo');
    contador = 0 ;

    
    contador += 1;
    
},1000);