var botao = document.getElementById("botao");
botao.addEventListener("click" , alertar, false );

var nome = document.getElementById("nome"); 
var email = document.getElementById("email");
var saida = document.getElementById("saida-de-dados");
var celular = document.getElementById("celular");
var logradouro = document.getElementById("lograd");
var cep = document.getElementById("cep");
var numero = document.getElementById("numero");
var comp = document.getElementById("comp");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");


function alertar(event){
//     alert("Você clicou no botão!!! " + nome.value);


// var numero = 6;
// var resultado = numero % 2;
// if(resultado == 0 ){
//     alert ("este número é par: "+numero);
// }

// }
 saida.innerText = "Nome:" +nome.value +
        "\n Email:" +email.value +
        "\n Celular:" +celular.value +
        "\n Cep:" +cep.value +
        "\n Logradouro:" +lograd.value+
        "\n Numero:" +numero.value +
        "\n Complemento:" +comp.value +
        "\n Bairro:" +bairro.value +
        "\n Cidade:" +cidade.value +
        "\n Estado:" +estado.value;
}