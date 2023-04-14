const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const criar = async (req, res) => {
    let parse = {
        descricao: req.body.descricao,
        colaborador: Number(req.body.colaborador),
        executor: Number(req.body.executor)
    }
    let comentario = await prisma.comentario.create ({
        data: parse
    })
    res.redirect("/?msg=Comentário criado com sucesso!")
}

module.exports = {
    criar
}