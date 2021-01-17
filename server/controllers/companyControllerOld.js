const FirestoreClient = require('../firestoreClient');

module.exports = {
    async save(req, res){
        const { nome, descricao, nota, telefone, email, endereco, vip } = req.body;
        const company = {
            nome,
            descricao,
            nota,
            telefone, 
            email,
            endereco,
            vip
        }
        teste = await FirestoreClient.save('companies', company);
        return res.json(teste.WriteResult);
    },
    async list(req, res){
        const result = await FirestoreClient.getAll('companies');
        return res.json(result);
    },
    async listVipCompanies(req, res){
        const result = await FirestoreClient.getFiltered('companies', 'vip', '==', true);
        return res.json(result);
    }
}