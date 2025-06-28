# JavaScript Calculator
# Calculadora JavaScript com React e Redux

Este é um projeto de calculadora interativa desenvolvido em JavaScript, utilizando as bibliotecas **React** para a interface do usuário e **Redux** para o gerenciamento de estado. O objetivo principal é atender aos requisitos do desafio "Build a JavaScript Calculator" da plataforma freeCodeCamp.

## Breve Resumo do Projeto

A calculadora oferece funcionalidades básicas de operações aritméticas (adição, subtração, multiplicação, divisão), entrada de dígitos e ponto decimal, e um botão para limpar o visor. Ela mantém um histórico das operações no display superior e exibe o valor atual no display principal, simulando o comportamento de calculadoras eletrônicas. O gerenciamento de estado complexo é centralizado no Redux, garantindo um fluxo de dados previsível e fácil de depurar.

## Como Rodar o Projeto

Para colocar a calculadora em funcionamento na sua máquina, siga estes passos:

1.  **Configuração Inicial:**
    Certifique-se de ter seu ambiente de desenvolvimento configurado (Node.js, npm/Yarn, VS Code e extensões recomendadas). Para detalhes completos sobre a configuração, consulte o arquivo [`SETUP.md`](./SETUP.md) neste repositório.

2.  **Clone ou Baixe o Repositório:**
    Se você estiver usando Git, clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd javascript-calculator
    ```
    Caso contrário, baixe o ZIP do projeto e descompacte na sua pasta preferida. Em seguida, navegue até a pasta raiz do projeto (`javascript-calculator`) no seu terminal.

3.  **Instale as Dependências:**
    No terminal, dentro da pasta raiz do projeto (`javascript-calculator`), execute:
    ```bash
    npm install
    ```
    Ou, se estiver usando Yarn:
    ```bash
    yarn install
    ```
    Este comando instalará todas as bibliotecas e ferramentas necessárias (como React, Redux e Parcel) definidas no `package.json`.

4.  **Inicie o Servidor de Desenvolvimento:**
    Após a instalação das dependências, execute no mesmo terminal:
    ```bash
    npm start
    ```
    Ou, se estiver usando Yarn:
    ```bash
    yarn start
    ```
    Isso iniciará o servidor de desenvolvimento do Parcel. Você verá uma mensagem indicando o endereço local (geralmente `http://localhost:1234`).

5.  **Acesse a Calculadora no Navegador:**
    Seu navegador padrão deverá abrir automaticamente em `http://localhost:1234`. Caso contrário, copie e cole este endereço na barra de URL do seu navegador.

6.  **Desenvolvimento:**
    Qualquer alteração que você fizer nos arquivos do projeto (especialmente na pasta `src/`) será automaticamente refletida no navegador enquanto o servidor de desenvolvimento estiver rodando.

---

