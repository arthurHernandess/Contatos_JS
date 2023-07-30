const Console = require("console-read-write");

let opcao = 0;
let nomes = [];
let telefones = [];

async function main()
{    
    do
    {
        Console.write("1- Listar");
        Console.write("2- Adicionar");
        Console.write("3- Editar");
        Console.write("4- Excluir");
        Console.write("5- Sair");
    
        Console.write("Digite sua opção: ");
        opcao = await Console.read();
        opcao = Number(opcao);
    
        entradaDeDados();
        
        if (opcao == 1)
        {
            let indice = 0;
            
            do
            {
                if (nomes.toString() == "")
                {
                    Console.write("Nenhum contato existente. Tente adicionar um :)");
                }
                else
                {
                    Console.write("");
                    Console.write("Contato " + [indice + 1]);
                    Console.write("Nome - " + nomes[indice]);
                    Console.write("Telefone - "+ telefones[indice]);
                }

                indice++;

            } while (indice < telefones.length)

            Console.write("");
        }
    
        if (opcao == 2)
        {
            Console.write("Digite o nome que deseja adicionar: ");
            NovoNome = await Console.read();
            nomes.push(NovoNome);
    
            Console.write("Digite o telefone que deseja adicionar: ");
            NovoTelefone = await Console.read();
            telefones.push(NovoTelefone);

            /* teste = [];
            teste.push(nomes, telefones);
            console.log(teste); */

            Console.write("");
        }

        if (opcao == 3)
        {
            Console.write("Digite o contato que deseja EDITAR: ");
            ContatoAEditar = await Console.read();

            let encontrado = 0;

            for (let indice = 0; indice < nomes.length; indice++)
            {
                if(ContatoAEditar.toString() == nomes[indice].toString())
                {
                    Console.write("Insira o nome editado: ");
                    EditarNome = await Console.read();
                    nomes[indice] = EditarNome;

                    Console.write("Insira o telefone editado: ");
                    EditarTelefone = await Console.read();
                    telefones[indice]= EditarTelefone;

                    encontrado = 1;
                }
            }

            if(encontrado != 1)
            {
                Console.write("Não há contatos salvos com esse nome, confira os dados inseridos e tente novemente.");
            }
        }

        if (opcao == 4)
        {
            Console.write("Digite o contato que deseja EXCLUIR: ");
            ContatoAExcluir = await Console.read();

            let encontrado = 0; 

            for (let indice = 0; indice < nomes.length; indice+=1)
            {
                if(ContatoAExcluir == nomes[indice])
                {
                    Console.write("Tem certeza que deseja excluir " + ContatoAExcluir.toUpperCase() + "?");
                    Console.write('Digite "S" para Sim e "N" para Não: ');
                    let resposta = await Console.read();

                    if(resposta.toString() == "S" || resposta.toString() == "s")
                    {
                        nomes.splice(indice, 1);
                        telefones.splice(indice, 1);
                    }

                    encontrado = 1;
                }
            }
            if(encontrado != 1)
            {
                Console.write("Não há contatos salvos com esse nome, confira os dados inseridos e tente novemente."); 
            }
        }


    } while (opcao != 5)

    console.clear();
}
main();

async function entradaDeDados()
{
    if (opcao <= 0 || opcao > 5)
        {
            Console.write("Digite um número entre 1 e 5!!"); 
            return;
        }
        else if (isNaN(opcao))
        {
            Console.write("Valor precisa ser numérico!!");
            return;
        }
}