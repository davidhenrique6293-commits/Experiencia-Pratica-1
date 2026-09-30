# Ação & Esperança

Site demonstrativo de uma organização social fictícia, criado com três páginas para apresentar a instituição, divulgar iniciativas comunitárias e mostrar um formulário de cadastro para pessoas interessadas em colaborar.

## Visão geral

A página inicial apresenta a missão, a visão, os valores e os contatos da organização. A página de projetos descreve iniciativas de educação e alimentação e apresenta informações sobre doações. A página de cadastro demonstra como coletar dados de voluntários e doadores, mas não envia nem armazena essas informações.

## Tecnologias

- **HTML5:** estrutura das páginas, navegação, conteúdo, formulário e diálogos nativos.
- **CSS3:** identidade visual, componentes, estados de foco e layouts responsivos por meio de media queries.
- **JavaScript (nativo):** menu móvel, fechamento acessível da navegação, abertura de diálogos e mensagens de validação do formulário.
- **Vite:** servidor de desenvolvimento e bundler para gerar a build de produção das três páginas.
- **Imagens PNG:** logotipo e imagens de conteúdo em `assets/imagens/`.

Não há framework de interface, backend ou banco de dados. O Vite é a dependência de desenvolvimento do projeto.

## Requisitos

- Node.js 20.19+ ou 22.12+ e npm.
- Um navegador moderno com suporte a HTML5, CSS e JavaScript.
- Opcionalmente, Python 3 para iniciar um servidor HTTP local pelo terminal. Não é necessário instalar Python para abrir o arquivo HTML diretamente.

## Instalação

Depois de obter os arquivos do projeto, abra a pasta no VS Code ou em outro editor e instale as dependências com:

```bash
npm ci
```

## Executar localmente

Inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

Abra no navegador o endereço apresentado no terminal. Para abrir sem instalar dependências, também é possível abrir `index.html` diretamente ou usar o servidor estático do Python 3.

## Build e testes

Gere a build de produção com:

```bash
npm run build
```

O Vite processa as três páginas HTML, agrupa e minifica o CSS e o JavaScript e grava os arquivos em `dist/`. As imagens são copiadas como estão, sem conversão de formato. Para servir a build localmente:

```bash
npm run preview
```

Não há suíte de testes automatizados configurada.

Para uma verificação manual, abra as três páginas e confira os links de navegação, o menu em uma janela estreita, os atalhos para as seções de projetos, os diálogos e a validação do formulário (campos obrigatórios, CPF, telefone e CEP). Confirme também que, ao finalizar o cadastro, aparece o aviso de demonstração e nenhum dado é enviado ou armazenado.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` gera e publica `dist/` automaticamente em cada push para a branch `main`. Na primeira publicação, no repositório do GitHub, abra **Settings → Pages** e selecione **GitHub Actions** como origem do build. O Vite usa o caminho `/Experiencia-Pratica-1/` no workflow para que páginas, scripts, estilos e imagens funcionem no endereço de projeto do GitHub Pages.

## Estrutura do projeto

```text
.
├── .gitignore          # Exclui node_modules e a saída de build
├── package.json        # Scripts do projeto e dependência de desenvolvimento
├── package-lock.json   # Versões exatas das dependências instaladas
├── vite.config.js      # Entradas das três páginas para a build multipágina
├── .github/workflows/
│   └── deploy.yml      # Build e publicação automática no GitHub Pages
├── index.html          # Página inicial: apresentação, missão, visão, valores e contato
├── projetos.html       # Projetos sociais e informações sobre doações
├── cadastro.html       # Formulário demonstrativo de voluntários e doadores
├── styles.css          # Estilos compartilhados e regras responsivas
├── script.js           # Interações da navegação, diálogos e formulário
└── assets/
    └── imagens/        # Logotipo e imagens usadas nas páginas
```

As três páginas compartilham `styles.css` e `script.js`. A navegação entre páginas usa links HTML, e os atalhos para conteúdo dentro de uma página usam identificadores na URL, como `#futuro-brilhante`.

## Funcionamento das páginas

- **Início (`index.html`):** apresenta a instituição, suas missão, visão e valores, além das informações de contato.
- **Projetos (`projetos.html`):** descreve Futuro Brilhante e Prato Cheio. Um diálogo nativo do navegador complementa as informações sobre doações.
- **Cadastro (`cadastro.html`):** agrupa informações pessoais, endereço e preferências de colaboração. A validação de campos obrigatórios e formatos é feita pelas regras nativas do HTML e acompanhada por mensagens acessíveis no JavaScript.
- **Estilos (`styles.css`):** centraliza cores, tipografia, componentes e adaptações para telas menores.
- **Interações (`script.js`):** controla o menu móvel, os atalhos de projetos e a abertura e o fechamento de diálogos. No cadastro, apresenta mensagens de validação e impede o envio do formulário.
- **Imagens (`assets/imagens/`):** reúne os recursos gráficos referenciados pelas páginas.

## Aviso sobre o cadastro

Este site é uma demonstração: os dados preenchidos não são enviados nem armazenados. Não informe dados pessoais reais. Para usar o cadastro em produção, será necessário implementar um backend e definir medidas apropriadas para o tratamento e a proteção dos dados.
