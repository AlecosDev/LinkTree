'use strict'

const links = {
    "nome": "Alex Costa",
    "img": "invencivel.jpg",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "http://www.fernandoleonid.com.br/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/fernandoleonid/"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/fernandoleonid"
        }
    ]
}


const imagem = document.getElementById('avatar');

imagem.src = links.img;

const nome = document.getElementById('titulo');
nome.textContent = links.nome;

console.log(linkTree);

for (let index = 0; index < links['links'].length; index++) {
    const linkTree = document.getElementById('linkTree');
    const a = document.createElement('a');
    console.log(a);

    a.classList.add('link');

    a.href = (links["links"][index]['url']);
    a.innerText = links["links"][index]['titulo'];

    linkTree.appendChild(a);
}




