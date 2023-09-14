/* 1. Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.  */

let cadastro = [];
let loop = 0;

function questao1() {
    do {
        cadastro.push({
            nome: prompt("nome: "),
            idade: parseInt(prompt("idade: ")),
            curso: prompt("curso: ")
        });
        loop = parseInt(prompt("[1] CONTINUAR [2] PARAR"));

    } while (loop != 2);
    
    console.log(cadastro);

    // let list =  cadastro.map(item=> item.nome)

    list = [];

    console.log(cadastro.length);
    for (let i = cadastro.length - 1; i >= 0; i--) {
        console.log(i); 
        list.push(cadastro[i].nome); 
    }
    console.log(list);

    alert(`Há ${cadastro.length} alunos cadastrados. Nome dos alunos: ${list.join(", ")}`);
    console.log(cadastro.length);
}

/* 2. Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 

Verifique se o planeta que o usuário informou está na array e informe ao usuário.
 */

let planetas = ["Terra","Marte","Plutão","Vênus","Júpiter","Saturno"];

function questao2() {
    resp = prompt("Digite o nome de um planeta:");

    if (planetas.includes(resp)) {
        document.write(`${resp} faz parte da lista!`);
    } else {
        document.write(`${resp} não faz parte da lista!`);
    }
}

/* 3. Vamos criar uma lista de compras. 

Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das-fruta.

Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

Sempre que o usuário procurar por uma que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
 */

let frutas = ["manga", "maçã", "pera", "uva", "morango"];

function questao3() {
    while (frutas.length - 1 >= 0) { /* length - quantidade de itens dentro do array */
        let novaFruta = prompt(`Frutas na lista: ${frutas.join(", ")}. Qual deseja?`);

        if (frutas.includes(novaFruta)) {
            let continuar = prompt(`A fruta ${novaFruta} está disponível! Deseja comprar? (S/N)`);
            if (continuar == "S" || continuar == "s") {
                let remover = frutas.indexOf(novaFruta);
                console.log(continuar);
                frutas.splice(remover, 1);
            } 
            console.log(frutas);
        } else {
            alert(`A fruta ${novaFruta} não está disponível!`);
        }
    } 
}
