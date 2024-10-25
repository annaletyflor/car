Sistema de Gestão de Locação de Automóveis
Este projeto tem como objetivo desenvolver um sistema web para gerenciar a locação de automóveis em diferentes pátios de uma empresa. O sistema permitirá a visualização dos veículos disponíveis, a realização de locações, além de gerenciar avisos de baixa quantidade de veículos. Também está incluso um protótipo visual do sistema. O foco principal é a integração do front-end com React e Bootstrap, utilizando uma API construída em C# para persistência de dados.


AUTORES:
PIETRO HENRIQUE VITO E ANNA LETICIA FLOR GOUVEIA.

FIGMA:
https://www.figma.com/design/4X4eQ75oNWG3T3JnoEXF0O/Untitled?node-id=0-1&t=SixmRqEmdE5eLGWz-1

Funcionalidades Principais
Interface do Sistema
Desenvolvida utilizando React Vite com Bootstrap.
A página principal exibe múltiplos pátios de automóveis, cada um mostrando o número total de veículos disponíveis.
Ao clicar em um pátio, o usuário poderá visualizar os automóveis disponíveis e selecionar um para alugar.
A seleção de um veículo reduz automaticamente a quantidade de carros disponíveis no pátio e altera a cor do pátio, de acordo com a disponibilidade:
Verde: Disponibilidade normal.
Amarelo: Disponibilidade reduzida.
Vermelho: Baixa quantidade de veículos (com um alerta).
Gestão de Veículos
Cada pátio possui um número predefinido de veículos (ex.: Pátio 1 - 20 carros, Pátio 2 - 10 carros, etc.).
O sistema atualiza automaticamente a quantidade de carros disponíveis ao realizar uma locação.
Se o número de veículos disponíveis cair abaixo de um valor mínimo (ex.: 5), um aviso será exibido para o usuário.
Cadastro e Persistência de Clientes
Utilização de uma API em C# para gerenciar e persistir as informações dos clientes e locações.
Tecnologias Utilizadas
React com Vite: Framework JavaScript para o desenvolvimento da interface do usuário.
Bootstrap 5.3: Framework CSS para criação de layouts responsivos.
C# API: Utilizada para o backend e persistência de dados.
Git: Controle de versão.
Estrutura do Projeto
O front-end foi desenvolvido para ser altamente responsivo, utilizando o sistema de grid do Bootstrap.
A comunicação com a API ocorre via fetch ou bibliotecas similares para realizar as operações de locação, cadastro e atualizações.
Problemas e Tentativas
Durante o desenvolvimento, enfrentamos um desafio relacionado a um erro no git log, que limitou o trabalho em um curto período de tempo ao notebook de "Anna". Apesar disso, houve uma colaboração efetiva para superar os obstáculos, resultando na conclusão de partes importantes do projeto.

