const Post = require("./posts-modelo");
const { ConversorPost } = require("../conversores");

module.exports = {
    async adiciona(req, res, next) {
        try {
            req.body.autor = req.user.id;
            const post = new Post(req.body);
            await post.adiciona();

            res.status(201).json(post);
        } catch (erro) {
            next(erro);
        }
    },

    async lista(req, res, next) {
        try {
            let posts = await Post.listarTodos();
            const conversor = new ConversorPost(
                "json",
                req.acesso.todos.permitido
                    ? req.acesso.todos.atributos
                    : req.acesso.apenasSeu.atributos
            );

            if (!req.estaAutenticado) {
                posts = posts.map((post) => {
                    post.conteudo =
                        post.conteudo.substr(0, 10) +
                        "... Você precisa assinar o blog para ver o restante do post.";
                    return post;
                });
            }

            res.send(conversor.converter(posts));
        } catch (erro) {
            next(erro);
        }
    },

    async obterDetalhes(req, res, next) {
        try {
            const post = await Post.buscaPorId(req.params.id, req.user.id);
            res.json(post);
        } catch (erro) {
            next(erro);
        }
    },

    async remover(req, res, next) {
        try {
            let post;
            if (req.acesso.todos.permitido === true) {
                post = await Post.buscaPorId(req.params.id);
            } else if (req.acesso.apenasSeu.permitido === true) {
                post = await Post.buscaPorIdAutor(req.params.id, req.user.id);
            }

            post.remover();
            res.status(204);
            res.end();
        } catch (erro) {
            next(erro);
        }
    },
};
