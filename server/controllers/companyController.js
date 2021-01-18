const connection = require('../database/connection');
const crypto  = require('crypto');

module.exports = {
    async index(request, response) {
        const companies = await connection('companies').select('*');
        return response.json(companies);
    },
    async indexById(request, response) {
        const {id} = request.body;
        
        const companie = await connection('companies').select('*').where({"id" : id}, true);

        return response.json(companie);
    },
    async indexFiltered(request, response) {
        const {filtro} = request.body;
        let responses = [];
        const companiesName = await connection('companies').select('*').where({"nome" : filtro}, true).orderBy('vip', 'desc').orderBy('nota','desc');
        const companiesCity = await connection('companies').select('*').where({"endereco" : filtro}, true).orderBy('vip', 'desc').orderBy('nota','desc');

        responses = companiesName
        responses.push(companiesCity)

        return response.json(responses);
    },
    async indexVips(request, response) {
        const companies = await connection('companies').select('*').where('vip', true);
        return response.json(companies);
    },
    async create (request, response) {
        const { nome, descricao, nota, telefone, email, endereco, vip } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('companies').insert({
            id,
            nome,
            email,
            telefone,
            endereco,
            vip,
            nota,
            descricao
        });
    
        return response.json({id});
    },
    async createMultiple (request, response) {
        const empresas = request.body;
        let ids = [];
        empresas.map( async empresa =>{
            const { nome, descricao, nota, telefone, email, endereco, vip } = empresa;
            const id = crypto.randomBytes(4).toString('HEX');
    
            await connection('companies').insert({
                id,
                nome,
                email,
                telefone,
                endereco,
                vip,
                nota,
                descricao
            });
            ids.push({nome, id});
        })
        
        return response.json({ids});
    }
}
