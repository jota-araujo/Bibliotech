const CACHE_NAME = "bibliotech-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./page3.html",

    "./page2.css",
    "./page3.css",

    "./manifest.json",

    "./imagens/livro_2.png",

    "./imagens/catalogo.jpg",
    "./imagens/tecnologia.jpg",
    "./imagens/ficcao.jpg",
    "./imagens/historia.jpg",

    "./imagens/arte_da_guerra.png",
    "./imagens/a_metamorfose.png",
    "./imagens/o_alienista.png",
    "./imagens/a_revolucao_dos_bichos.png",
    "./imagens/vidas_secas.png",
    "./imagens/noites_brancas.png",
    "./imagens/o_cortico.png",
    "./imagens/romeu_e_julieta.png",

    "./imagens/telefone-light.svg",
    "./imagens/instagram.svg",
    "./imagens/facebook.svg",
    "./imagens/email-light.svg",

    "./livros/arte-da-guerra.pdf",
    "./livros/metamorfose.pdf",
    "./livros/o-Alienista.pdf",
    "./livros/revolucao-dos-bichos.pdf",
    "./livros/vidas-secas.pdf",
    "./livros/noites-brancas.pdf",
    "./livros/o-cortico.pdf",
    "./livros/romeu-e-julieta.pdf"
];


// INSTALAÇÃO

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(ARQUIVOS);

            })

    );

    self.skipWaiting();

});


// ATIVAÇÃO

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(chaves => {

                return Promise.all(

                    chaves
                        .filter(chave => chave !== CACHE_NAME)
                        .map(chave => caches.delete(chave))

                );

            })

    );

    self.clients.claim();

});


// BUSCA DE ARQUIVOS

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(resposta => {

                if (resposta) {

                    return resposta;

                }

                return fetch(event.request);

            })

    );

});
