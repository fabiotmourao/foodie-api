# Foodie API

Foodie API é uma aplicação back-end para gerenciamento de pedidos e perfis de usuários em um sistema de entrega de alimentos. Esta API foi construída usando Node.js com Express, autenticação com JWT, banco de dados SQLite e encriptação de senhas com bcrypt.

## Instalação

### Requisitos
- Node.js (v14 ou superior)
- npm (Node Package Manager)

### Passos para Instalação

1. Clone o repositório para sua máquina local:

2. Navegue até o diretório do projeto:

       cd foodie-api

3. Instale as dependências:

       npm install

### Uso

Rodar a API

Para rodar a API localmente, execute o seguinte comando:

    npm start

A API será iniciada em http://localhost:3001.

### Banco de Dados

Esta API utiliza SQLite como banco de dados principal. O arquivo do banco de dados será criado automaticamente na primeira execução da API se não existir.

### Migrar Banco de Dados (opcional)

Se você quiser gerar o banco de dados manualmente ou executar scripts de migração, pode fazê-lo diretamente no SQLite.

### Dependências

- bcrypt - Biblioteca para encriptação de senhas.
- cors - Middleware para permitir requisições de diferentes origens.
- express - Framework minimalista para Node.js.
- jsonwebtoken - Biblioteca para criar e verificar JWT (JSON Web Tokens).
- mysql2 - Driver para conexão com banco de dados MySQL.
- sqlite3 - Driver para conexão com banco de dados SQLite.