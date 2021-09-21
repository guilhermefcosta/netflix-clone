import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";

export default () => {

  const [lista_filmes, set_lista_filmes] = useState([])
  const [filmeDestaque, setfilmeDestaque] = useState(null)

  // Quando a pagina carregar o useEffect é executado
  useEffect(() => {
    
    const carregaLista = async () => {

    // carregamos a lista de forma assincrona
    var lista = await Tmdb.getHomeList()
    set_lista_filmes(lista)

    // aqui nos setamos o filme de destaque
    var lista_netflix = lista[0].filmes.results
    var filme_escolhido = Math.floor(Math.random() * lista_netflix.length)
    var info_filme_escolhido = await Tmdb.getMovieDetails(lista_netflix[filme_escolhido].id, 'tv')
    setfilmeDestaque(info_filme_escolhido)
  }
    
    carregaLista()
  }, [])



  return (
    <div className="page">

      <Header />
      
      {filmeDestaque && 
      <FeaturedMovie filme_destaque={filmeDestaque} />
      }


      <section className="listas">
        {lista_filmes.map((item, key)=> (
          <MovieRow key={key} titulo={item.title} filmes={item.filmes}/>
        ))}

      </section>

      <Footer />

    </div>
  )
}
