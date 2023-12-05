const sequelize = require('./db');
const User = require('./usuarios');
const Produto = require('./produto');

// sequelize.sync().then(() => {
//   console.log('Tabelas criadas');
// }).catch((error) => {
//   console.log('Erro ao criar as tabelas:', error);

sequelize.sync().then(() => {
    console.log('Tabelas criadas');

// Criar um novo produto
Produto.create({
    nome: 'Camiseta',
    valor: 100.0
  }).then(produto => {
    console.log('Produto criado:', produto);
  }).catch(error => {
    console.log('Erro ao criar produto:', error);
  });

  Produto.create({
    nome: 'Bermuda',
    valor: 100.0
  }).then(produto => {
    console.log('Produto criado:', produto);
  }).catch(error => {
    console.log('Erro ao criar produto:', error);
  });

  // Ler todos os produtos
  Produto.findAll().then(produtos => {
    console.log('Todos os produtos:', produtos);
  }).catch(error => {
    console.log('Erro ao ler produtos:', error);
  });

  // Atualizar um produto
  Produto.update({
    valor: 200.0
  }, {
    where: {
      id: 1
    }
  }).then(() => {
    console.log('Produto atualizado');
  }).catch(error => {
    console.log('Erro ao atualizar produto:', error);
  });

  // Deletar um produto
  Produto.destroy({
    where: {
      id: 2
    }
  }).then(() => {
    console.log('Produto deletado');
  }).catch(error => {
    console.log('Erro ao deletar produto:', error);
  });

  User.create({
    nome: 'Marcos',
    consumo: 100
  }).then(usuario => {
    console.log('Usuário criado:', usuario);
  }).catch(error => {
    console.log('Erro ao criar usuário:', error);
  });

  // Ler todos os usuários
  User.findAll().then(usuarios => {
    console.log('Todos os usuários:', usuarios);
  }).catch(error => {
    console.log('Erro ao ler usuários:', error);
  });

  // Atualizar um usuário
  User.update({
    consumo: 200
  }, {
    where: {
      id: 1
    }
  }).then(() => {
    console.log('Usuário atualizado');
  }).catch(error => {
    console.log('Erro ao atualizar usuário:', error);
  });

  // Deletar um usuário
  User.destroy({
    where: {
      id: 1
    }
  }).then(() => {
    console.log('Usuário deletado');
  }).catch(error => {
    console.log('Erro ao deletar usuário:', error);
  });


}).catch((error) => {
  console.log('Erro ao criar as tabelas:', error);
});

