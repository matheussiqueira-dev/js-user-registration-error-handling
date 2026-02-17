# Cadastro de Usuários com Validação e Tratamento de Erros

## Objetivo
Projeto front-end em **HTML + CSS + JavaScript (ES6 Modules)** para simular cadastro de usuários com foco em:
- organização do código
- validação robusta
- tratamento de erros com `try...catch`
- separação de responsabilidades

## Regras de validação
No envio do formulário, os campos são validados na seguinte lógica:
1. Todos os campos são obrigatórios.
2. Nome: mínimo de 3 caracteres.
3. Usuário: mínimo de 4 caracteres e sem espaços.
4. Senha: mínimo de 8 caracteres.
5. Email: formato válido por regex simples.
6. Data de nascimento: idade mínima de 18 anos.

### Mensagens de erro usadas
- `Este campo é obrigatório.`
- `Informe um nome válido (mínimo 3 caracteres).`
- `Usuário deve ter no mínimo 4 caracteres e não pode conter espaços.`
- `Senha deve ter no mínimo 8 caracteres.`
- `Informe um email válido.`
- `Você precisa ter 18 anos ou mais para se cadastrar.`

## Como executar
1. Abra a pasta do projeto.
2. Abra `src/index.html` no navegador.

Opcional com servidor local:
- VS Code Live Server, ou
- `npx serve src`

## Estrutura de pastas
```text
/src
  index.html
  /css
    styles.css
  /js
    main.js
    validators.js
    dom.js
```

## Organização do código
- `src/js/validators.js`: regras de validação e lançamento de erros com `field` e `message`.
- `src/js/dom.js`: manipulação da interface (limpar/exibir erros e mensagens, capturar dados).
- `src/js/main.js`: orquestração do submit com `try...catch`.

## Print ou GIF (opcional)
Você pode incluir nesta seção uma imagem/GIF da interface em execução para reforçar o portfólio.