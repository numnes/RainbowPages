const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { company } = request.body;

        const feedbacks = await connection('feedbacks')
        .select('*')
        .where('id_company', company);

        return response.json(feedbacks);
    },
    async create(request, response) {
        const { id_company, pros, contras, cargo, nota, comentario} = request.body;

        const [id] = await connection('feedbacks').insert({
            id_company,
            pros,
            contras,
            cargo,
            nota,
            comentario
        });

        return response.json({ id });
    }
}