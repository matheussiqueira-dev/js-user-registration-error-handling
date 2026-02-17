# JS User Registration Error Handling

Formulário de cadastro de usuários com validação robusta e tratamento de erros em JavaScript (ES6 Modules), com foco em organização, clareza e boas práticas para portfólio front-end.

## Objetivo
Demonstrar um fluxo realista de cadastro com:
- validação de campos obrigatórios e regras de negócio;
- exibição de erro por campo, sem uso de `alert()`;
- separação clara de responsabilidades entre validação, DOM e orquestração;
- código modular, legível e fácil de manter.

## Funcionalidades
- Formulário com campos: nome, usuário, senha, email e data de nascimento.
- Mensagens de erro exibidas abaixo do campo correspondente.
- Mensagem geral de sucesso ou falha no rodapé do formulário.
- Limpeza de erros anteriores a cada tentativa de envio.
- Limpeza do formulário após cadastro válido.

## Regras de validação
As validações são executadas no `submit`:
1. Todos os campos são obrigatórios.
2. Nome com mínimo de 3 caracteres.
3. Usuário com mínimo de 4 caracteres e sem espaços.
4. Senha com mínimo de 8 caracteres.
5. Email com formato válido (regex simples e confiável).
6. Data de nascimento com idade mínima de 18 anos.

### Mensagens aplicadas
- `Este campo é obrigatório.`
- `Informe um nome válido (mínimo 3 caracteres).`
- `Usuário deve ter no mínimo 4 caracteres e não pode conter espaços.`
- `Senha deve ter no mínimo 8 caracteres.`
- `Informe um email válido.`
- `Você precisa ter 18 anos ou mais para se cadastrar.`

## Arquitetura do código
- `src/js/validators.js`: regras de validação e lançamento de erros com `field` e `message`.
- `src/js/dom.js`: funções de manipulação de interface (ler dados, limpar/exibir mensagens).
- `src/js/main.js`: orquestração do fluxo de `submit` com `try...catch`.

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

## Tecnologias
- HTML5
- CSS3
- JavaScript ES6 (Modules)

## Como executar
1. Clone o repositório:
```bash
git clone https://github.com/matheussiqueira-dev/js-user-registration-error-handling.git
```
2. Acesse a pasta do projeto:
```bash
cd js-user-registration-error-handling
```
3. Abra `src/index.html` no navegador.

Opcional: rodar com servidor local (`Live Server` ou `npx serve src`).

## Resultado esperado
- Em caso de erro: mensagem específica no campo inválido e mensagem geral de revisão.
- Em caso de sucesso: `Cadastro realizado com sucesso!` e formulário resetado.

## Autor
**Matheus Siqueira**
- GitHub: [@matheussiqueira-dev](https://github.com/matheussiqueira-dev)