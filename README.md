






<h1> Backend</h1>

Para rodar o projeto, basta criar um banco [mongodb](https://www.mongodb.com/)

Dar um git clone no repositório

Acionar o script yarn start ou npm install

Alterar sua string da conexão para o seu banco de dados, alterar a porta que o servidor está ouvindo a sua escolha e rodar yarn dev ou npm dev

Após isso o servidor está rodando

A aplicação não possui um usuário admin, mas pode-se criar um fazendo uma requisição de método POST no endpoint de 'localhost:SUA_PORTA/user' e passando como corpo da requisição "admin":true, para criar outros usuários não admin basta não passar o campo, adicionando no body {"username":"SEU_USERNAME","password":"SUA_SENHA_SECRETA"}

<h1> Frontend</h1>

Altere a porta que o [axios](https://github.com/axios/axios) e o [socket.io](https://github.com/axios/axios) estão tentando acessar e rode um yarn start ou npm start para rodar o servidor.




 [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

