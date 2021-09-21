import React, { useState } from "react";
import "./MovieRow.css";

const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export default ({titulo, filmes}) => {
    

    const [ScrollX, SetScrollX] = useState(0)

    function goLeft (e) {
        const larg_percorrida = 150 * 3
        if (ScrollX + larg_percorrida >= 0) {
            SetScrollX(30)
        } else {
            SetScrollX(ScrollX + larg_percorrida)
        }
    }
    
    const goRight = () => {
        const larg_max = -filmes.results.length * 150
        const larg_percorrida = 150 * 3

        if (ScrollX - larg_percorrida > larg_max + window.innerWidth) {
            SetScrollX(ScrollX - larg_percorrida)
        } else {
            SetScrollX(larg_max + window.innerWidth - 60)
        }
        
    }

    return (
        <div className="movieRow">
            <h2>{titulo}</h2>
            <div className="arrow-left" onClick={goLeft}>
                <i className="material-icons">arrow_back_ios</i>
            </div>
            <div className="arrow-right" onClick={goRight}>
                <i className="material-icons md-36">arrow_forward_ios</i>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    width: filmes.results.length * 150,
                    marginLeft: ScrollX
                }}>
                    {filmes.results.length > 0 && filmes.results.map( (filme, key) => {
                        return <div key={key} className="movieRow--item"><img src={API_IMAGE_URL + filme.poster_path} alt={filme.name} /></div>
                    })}

                </div>
            </div>
        </div>
        
    )
}
