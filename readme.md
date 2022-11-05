# Catálogo de carros - Verzel
</br>

## Banco de dado
- O banco de dados utilizado foi o Postgres. Para instalá-lo corretamente, siga as orientações da documentação no link https://www.postgresql.org/download/
</br></br></br>
## Variáveis de ambiente
- No arquivo .env, devem constar as variáveis de ambiente conforme o exemplo abaixo:</br></br>
DATABASE_URL=postgres://seu_usuario_do_banco:sua_senha@localhost:5432/nome_do_banco</br>
PORT=5000</br>
JWT_SECRET=MINHACHAVE
</br></br></br>

## Comando inicial
</br>
- Abra o terminal no diretório do projeto e execulte o comando <strong>npm install</strong> para instalar as todas as dependencias.
</br></br></br>

## Comandos Prisma
- Para a coneção com o banco de dados foi utilizado o ORM Prisma, e para o funcionamento correto do projeto, será necessário execultar os comandos a seguir:</br></br>
<strong>npx prisma migrate dev</strong></br>
<strong>npx prisma generate</strong></br>
<strong>npx prisma db seed</strong></br></br>
Após estes comandos, as configurações com o banco de dados estarão feitas e alguns dados de exemplo terão sido criados.
</br></br></br>

## Iniciando a aplicação
- Para rodar a aplicação em modo de desenvolvimento na sua máquina basta execultar o comando <strong>npm run dev</strong>
</br></br></br>

## Usuário administrador
- No processo de configuração do Prisma que realizamos anteriormente, foram criados alguns dados no banco, mais especificamente quando execultamos o comando <strong>npx prisma db seed</strong>, e entre estes dados estam o usuário e senha que você poderá usar para fazer o login. Os dados encontra-se logo abaixo.</br></br>
<strong>USUÁRIO: admin</strong></br>
<strong>SENHA: adminpassword</strong>