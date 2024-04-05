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

    
       //validação dos dados
       if(cep.value.length < 8 ){
        alert('Entre com um CEP válido!');
        return;
       }      

           // formatar os dados
           cep.value = cep.value.replace ('-','');
       
       
const url = `https://viacep.com.br/ws/${cep.value}/json`;

fetch(url)

        .then(function(resposta){
        return resposta.json();
})
        .then(function(dadosDoEndereco){
        logradouro.value = dadosDoEndereco.logradouro;
        bairro.value = dadosDoEndereco.bairro;
        cidade.value = dadosDoEndereco.localidade;
        estado.value = dadosDoEndereco.uf;
        comp.value = dadosDoEndereco.complemento;

        saidaDeDados (); // chamada da função
})

        .catch(function(e){
                alert(e.message())
        })

        function saidaDeDados(){

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
}
