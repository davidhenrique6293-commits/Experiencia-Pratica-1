# Ação & Esperança

Site demonstrativo de uma organização social fictícia. O projeto apresenta a instituição, seus projetos e um formulário para demonstrar o cadastro de pessoas interessadas em colaborar.

## Estrutura

```text
.
├── index.html          # Página inicial: apresentação, missão, visão, valores e contato
├── projetos.html       # Projetos sociais e informações sobre doações
├── cadastro.html       # Formulário demonstrativo de voluntários e doadores
├── styles.css          # Estilos compartilhados e regras responsivas
├── script.js           # Interações da navegação, diálogos e formulário
└── assets/
    └── imagens/        # Logotipo e imagens usadas nas páginas
```

## Como o site funciona

O projeto usa HTML, CSS e JavaScript nativos, sem framework, dependências externas, servidor de aplicação ou processo de compilação. Cada página HTML representa uma tela do site e carrega o mesmo `styles.css` e `script.js`. A navegação entre as telas é feita por links comuns; os atalhos de projetos levam a seções específicas por meio de identificadores na URL.

- **Início (`index.html`):** apresenta a organização, sua missão, visão, valores e informações de contato.
- **Projetos (`projetos.html`):** descreve as iniciativas Futuro Brilhante e Prato Cheio e explica o uso das doações. Um diálogo nativo do navegador apresenta informações adicionais.
- **Cadastro (`cadastro.html`):** reúne dados pessoais e endereço, permite escolher uma forma de apoio e informar áreas de interesse. Os campos obrigatórios e os formatos de CPF, telefone e CEP são verificados pelas regras HTML do formulário.
- **Estilos (`styles.css`):** define cores, tipografia, componentes e comportamento responsivo. Os layouts se adaptam a telas menores com media queries.
- **Interações (`script.js`):** controla a abertura e o fechamento da navegação móvel, os atalhos de projetos e os diálogos. Na tela de cadastro, acompanha a validação e mostra mensagens de erro ou de confirmação.
- **Imagens (`assets/imagens/`):** contém os arquivos visuais referenciados pelas páginas, como o logotipo e as imagens das seções e projetos.

## Cadastro demonstrativo

Este site não envia nem armazena os dados preenchidos. Após a validação do navegador, o JavaScript impede o envio do formulário e informa que a ação é apenas uma demonstração. Não use dados pessoais reais. Para transformar o cadastro em um fluxo real, será necessário conectá-lo a um backend e definir como os dados serão tratados e protegidos.

## Como abrir

Abra `index.html` diretamente em um navegador. Como o projeto é estático, também pode ser servido por uma extensão como Live Server no VS Code; nesse caso, inicie o servidor pela pasta do projeto e acesse a página inicial indicada pela extensão.
