# Configuração do Banco de Dados

Para executar este projeto, é necessário possuir o **MySQL** instalado e em execução.

## 1. Criar o banco de dados

Abra o MySQL e execute o comando abaixo:

```sql
CREATE DATABASE fornecedor_db;
```

Em seguida, selecione o banco:

```sql
USE fornecedor_db;
```

## 2. Criar a tabela

Copie e execute o script abaixo no MySQL:

```sql
CREATE TABLE `fornecedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```

## 3. Configurar o arquivo `.env`

Na pasta **backend**, crie (ou edite) um arquivo chamado **`.env`** e informe os dados da sua instalação do MySQL.

Exemplo:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=fornecedor_db
PORT=3000
```

### Altere os seguintes campos conforme a sua configuração:

- **DB_HOST** → Endereço do servidor MySQL (geralmente `127.0.0.1` ou `localhost`).
- **DB_PORT** → Porta do MySQL (o padrão é `3306`).
- **DB_USER** → Usuário do MySQL.
- **DB_PASSWORD** → Senha do usuário do MySQL.
- **DB_NAME** → (`fornecedor_db`).

Após concluir essas etapas, o projeto estará pronto para se conectar ao banco de dados.