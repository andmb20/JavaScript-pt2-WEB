/*
    document -> HTML

    getElementById -> Trás UM elemento pelo ID

    getElementByClassName -> Trás TODOS os elementos com essa CLASSE
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NOME

    querySelector -> Trás UM elemento, o PRIMEIRO que ele encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar
    addEventListener -> Adiciona um ouvinte de evento
*/



document.getElementById("Coloco Aqui O Id Descrito No HTML")

document.getElementsByClassName("Coloco Aqui A Classe Descrita No HTML")

document.getElementsByTagName("Coloco Aqui A TAG Descrita No HTML")

document.getElementsByName("Coloco Aqui O Nome Do Campo Que Quero") // atributo name="nome-do-atributo"

document.querySelector("Podemos Utilizar TAG")
document.querySelector(".Podemos Utilizar CLASSE") // com "." -> estou dizendo para procurar uma CLASSE
document.querySelector("#Podemos Utilizar ID") // com "#" -> estou dizendo para procurar um ID
document.querySelector("Podemos Utilizar TAG.Utilizar CLASSE") // para quando tivermos a mesma CLASSE em mais de uma TAG / Serve como um "filtro" para trazer exclusivamente o que queremos

document.querySelectorAll("TAG") // trás todos com a mesma tag
document.querySelectorAll(".Nome Da Classe") // trás todos com a mesma classe

nomeDoElemento.addEventListener("eventoASerObservado", funçãoOuNomeDaFunção) //coloca um ouvinte de evento para o elemento "nomeDoElemento"