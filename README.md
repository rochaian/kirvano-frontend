# Kirvano Checkout - FrontEnd
## Projeto de Simulação de Pagamento - Validação de Cartões de Crédito

Este repositório contém um projeto que simula um processo de pagamento ao enviar informações de cartão de crédito para uma API de validação. A aplicação valida se os dados do cartão inseridos pelo usuário estão corretos e se passam por uma série de verificações, incluindo a validação pelo algoritmo de Luhn.

[kirvano-frontend](https://kirvano-frontend.vercel.app/)

## Recursos do Projeto
- Simulação de processo de pagamento com validação em tempo real
- Verificação de informações do cartão, como número, data de validade e código de segurança
- Uso do algoritmo de Luhn para validação de números de cartões
- Interface amigável para simular pagamentos e validar dados de cartão

## Como Funciona
O projeto permite ao usuário inserir informações do cartão de crédito e enviar para uma API simulada que verifica a validade dos dados. A API responde indicando se o cartão é válido, retornando mensagens de erro quando aplicável.

## Instalação e Configuração
Para instalar e configurar este projeto, siga as instruções abaixo.

### Pré-requisitos
- Node.js 18 ou superior
- Gerenciador de pacotes como `npm` ou `yarn`

### Passo 1: Clone o Repositório
Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/projeto-simulacao-pagamento.git
```

### Passo 2: Instale as Dependências
Navegue até a pasta do projeto e instale as dependências:

```bash
cd projeto-simulacao-pagamento
npm install
# ou
yarn install
```

### Passo 3: Inicie a Aplicação
Após instalar as dependências, inicie a aplicação para testar a simulação de pagamento:

```bash
npm run dev
# ou
yarn dev
```

### Passo 4: Simule um Pagamento
Com a aplicação em execução, use a interface para inserir informações de cartão de crédito e simular um pagamento. A API responderá com uma validação dos dados inseridos.

Para testar o projeto de simulação de pagamento, acesse o link na Vercel: [kirvano-frontend](https://kirvano-frontend.vercel.app/). 

## Contribuição
Contribuições para aprimorar o projeto são bem-vindas. Para contribuir, crie um fork, faça suas alterações e envie um pull request.

## Licença
Este projeto está sob a [licença MIT](LICENSE).

## Contato
Para perguntas ou sugestões, entre em contato com o desenvolvedor ou abra uma issue no GitHub.