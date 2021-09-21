import React from "react";
import "./FeaturedMovie.css";


export default ({filme_destaque}) => {

    let descricao = ""
    let desc_list = filme_destaque.overview.split(" ")
    if (desc_list.length > 50) {
        for (let i = 0; i < 50; i++) {
            descricao += (" " + desc_list[i])
        }
        descricao += "..."
    } else {
        descricao = filme_destaque.overview
    }

    let ano = new Date(filme_destaque.first_air_date)


    return (
        <div className="banner" style={{
            "backgroundImage": `url(https://image.tmdb.org/t/p/original/${filme_destaque.backdrop_path})`
             }}>
            <div className="banner_gradient"> 
                <div className="banner_gradient_horizontal">

                <div className="info-capa">
                    <h2 className="titulo_filme_destaque">{filme_destaque.name}</h2>
                    <p className="info-movie">
                        <span className="pontos">{filme_destaque.vote_average}</span>
                        <span className="ano"> {ano.getFullYear()}</span>
                        <span className="temporada"> {filme_destaque.number_of_seasons}
                        {filme_destaque.number_of_seasons === 1 ? " temporada" : " temporadas"}</span>
                    </p>
                    <div className="descricao">{descricao}</div>
                    <div className="btns">
                        <a className="assistir" href="@">Assistir </a>
                        <a className="mais_info" href="@"> Mais informações</a></div>
                </div>
                {console.log(filme_destaque)}
                </div>
            </div>
        </div>
    )
}