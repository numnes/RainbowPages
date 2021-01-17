const FirestoreClient = require('../firestoreClient');

module.exports = {
    async save(req, res){
        const { nome, descricao, nota, telefone, email, endereco } = req.body;
        const company = {
            nome,
            descricao,
            nota,
            telefone, 
            email,
            endereco
        }
        teste = await FirestoreClient.save('companies', company);
        return res.json(teste.WriteResult);
    },
    async list(req, res){
        const result = await FirestoreClient.getByPath('companies');
        return res.json(result);
    }
}