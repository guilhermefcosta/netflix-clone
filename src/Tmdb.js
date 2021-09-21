/* Aqui que colhemos os dados para montar a interface */

import React from "react";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7130f0fcb66d25c180e89613bb4b74e1';
const ID_PROVEDOR = 8;
const GENERO =  {
    'terror': 27,
    'documentario': 99,
    'acao': 28,
    'sci-fi': 878,
    'guerra': 10752,
    'crime': 80,
    'comedia': 35
}




/* 
- Originais netflix
- Recomendados netflix(trending)
- Em alta
- Horror
- Documentário
- Ação
- Sci-fi
- ...

*/

const buscandoFilmes = async (pesquisa)=>  {
    const requisicao = await fetch(`${API_BASE_URL}${pesquisa}`);
    let json = await requisicao.json();
    return json;
}



export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                filmes: await buscandoFilmes(`/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&page=1&with_watch_providers=${ID_PROVEDOR}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                filmes: await buscandoFilmes(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                filmes: await buscandoFilmes(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)
            },
            {
                slug: 'horror',
                title: 'Filmes de Terror',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['terror']}`)
            },
            {
                slug: 'comedy',
                title: 'Filmes de comédia',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['comedia']}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['documentario']}`)
            },
            {
                slug: 'action',
                title: 'Filmes de ação',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['acao']}`)
            },
            {
                slug: 'sci-fi',
                title: 'Filmes de ficção científica',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['sci-fi']}`)
            },
            {
                slug: 'crime',
                title: 'Filmes de crimes',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['crime']}`)
            },
            {
                slug: 'war',
                title: 'Filmes de guerra',
                filmes: await buscandoFilmes(`/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&with_genres=${GENERO['guerra']}`)
            }
        ]
    },

    getMovieDetails: async (movieID, type) => {

        let info = {}


        switch (type) {
            case 'movie':
                info = await buscandoFilmes(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
            case 'tv':
                info = await buscandoFilmes(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                break;
            default:
                break;
        }
        
        return info

    }
} 