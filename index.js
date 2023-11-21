(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    const resultado = await database.sync();

    const resultadoCreate = await Produto.create({
        nome: 'Camiseta',
        preco: 29.90,
        descricao: 'Camiseta Preta',
    })

    const resultadoCreat1 = await Produto.create({
        nome: 'Bermuda',
        preco: 49.90,
        descricao: 'Bermuda Preta',
    })

    const produtos = await Produto.findByPk(2);
    console.log(produtos);

    const produto = await Produto.findByPk(1);
    produto.nome='Cropped';

    const resultadoSave = await produto.save();
    console.log(resultadoSave);

    const produto1 = await Produto.findByPk(1);
    produto.destroy();
        
})();