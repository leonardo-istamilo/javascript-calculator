# Configuração do Ambiente de Desenvolvimento para a Calculadora React/Redux

Este documento detalha as ferramentas e configurações necessárias para iniciar o desenvolvimento do projeto da calculadora.

## 1. Editor de Código (IDE)

* **Visual Studio Code (VS Code)**: É o editor de código altamente recomendado para este projeto devido ao seu excelente suporte a JavaScript, React e Redux, além de sua vasta gama de extensões.
    * [Download VS Code](https://code.visualstudio.com/)

## 2. Extensões do VS Code (Recomendadas)

Após instalar o VS Code, abra a aba de Extensões (Ctrl+Shift+X ou Cmd+Shift+X) e pesquise pelas seguintes extensões para otimizar seu fluxo de trabalho:

* **ES7+ React/Redux/GraphQL/React-Native snippets**: Fornece snippets de código (atalhos de teclado) para gerar rapidamente estruturas comuns de React, Redux, e JavaScript. Por exemplo, digitar `rafce` e pressionar `Tab` pode gerar um componente funcional React com exportação padrão.
* **Prettier - Code formatter**: Um formatador de código para garantir que seu código JavaScript, JSX e CSS mantenha um estilo consistente (indentação, aspas, ponto e vírgula, etc.).
    * **Configuração Adicional**: Recomenda-se configurar o Prettier para formatar automaticamente ao salvar. Vá em `File > Preferences > Settings` (ou `Code > Settings` no macOS), procure por `editor.formatOnSave` e marque a opção. Certifique-se também de que `editor.defaultFormatter` esteja definido como `esbenp.prettier-vscode`.
* **ESLint**: Integra o ESLint ao VS Code, mostrando erros e avisos de linting (problemas de qualidade de código e estilo) diretamente no editor. Ajuda a manter a qualidade do código e a seguir as melhores práticas.
* **Material Icon Theme**: Altera os ícones dos arquivos no explorador para serem mais visuais e reconhecíveis (ex: ícone do React para arquivos `.jsx`, ícone do Redux para arquivos relacionados a Redux). Isso auxilia na navegação rápida pelo projeto.

## 3. Node.js e npm (ou Yarn)

O Node.js é um ambiente de tempo de execução JavaScript que permite executar código JavaScript fora do navegador. Ele é essencial para o gerenciamento de pacotes (npm/Yarn) e para o servidor de desenvolvimento.

* **Node.js**: Baixe e instale a versão **LTS (Long Term Support)** recomendada para a maioria dos usuários no site oficial. O **npm** (Node Package Manager) virá incluído na instalação do Node.js.
    * [Download Node.js](https://nodejs.org/)
    * **Verificação da Instalação**: Após a instalação, abra seu terminal ou prompt de comando e digite:
        ```bash
        node -v
        npm -v
        ```
        Você deverá ver os números das versões instaladas (ex: `v18.17.0` para Node, `9.6.7` para npm). Se receber erros, verifique se o Node.js foi adicionado corretamente às variáveis de ambiente PATH durante a instalação.

* **(Opcional) Yarn**: Yarn é um gerenciador de pacotes alternativo ao npm, desenvolvido pelo Facebook, que em alguns casos pode oferecer instalações mais rápidas e consistentes. Para instalá-lo globalmente (após já ter o Node.js/npm):
    ```bash
    npm install -g yarn
    ```
    * **Verificação da Instalação do Yarn**:
        ```bash
        yarn -v
        ```

## 4. Configuração do PowerShell (Apenas para Usuários de Windows)

Se você estiver utilizando o Windows e encontrar a mensagem de erro `O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema` ao tentar executar comandos como `npm start`, isso se deve à política de execução de scripts do PowerShell. Para resolver:

1.  **Abra o PowerShell como Administrador**:
    * Clique no botão **Iniciar** do Windows.
    * Digite `powershell`.
    * Clique com o botão direito em `Windows PowerShell` e selecione **"Executar como administrador"**.
    * Confirme a permissão na janela de Controle de Conta de Usuário (UAC), se solicitado.
2.  **Altere a Política de Execução**:
    No terminal do PowerShell (como Administrador), execute o seguinte comando:
    ```powershell
    Set-ExecutionPolicy RemoteSigned
    ```
    Quando perguntado se deseja alterar a política de execução, digite `S` (para Sim) e pressione `Enter`.
3.  **Feche o PowerShell como Administrador**. A alteração da política entrará em vigor.

Com estas ferramentas instaladas e configuradas, você estará pronto para rodar e desenvolver o projeto da calculadora!