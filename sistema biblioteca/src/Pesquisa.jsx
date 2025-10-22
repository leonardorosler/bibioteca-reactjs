import { useForm } from "react-hook-form";
import Cabecalho from "./components/Cabecalho";
import { useEffect, useState } from 'react'
import './Pesquisa.css'

export default function Pesquisa() {
    const{ register, handleSubmit, reset } = useForm ()
    const [livrosOriginais, setLivrosOriginais] = useState ([])
    const [livros, setLivros] = useState([])

    async function pesquisaLivro(data) {
        const nomeLivro = data.nomeLivro
        const livrosFiltrados = livrosOriginais.filter(livro => 
        livro.titulo.toLowerCase().includes(nomeLivro.toLowerCase())
        )
        setLivros(livrosFiltrados)
        reset()
    }

    useEffect( () => {
        async function buscarLivros() {
          const resposta = await fetch("http://localhost:3000/livros")
          const dados = await resposta.json()
          setLivros(dados)
          setLivrosOriginais(dados)
        }
        buscarLivros()
    }, [])

    const listaLivros = livros.map( livro => (
        <div className="containerLivros">
            <div className='cardLivro' key={livro.id}>
                <img src={livro.imagem} alt="Capa do Filme" />
                <div>
                    <h2>{livro.titulo}</h2>
                    <h3>{livro.genero}</h3>
                    <h4>Ano de Lançamento: {livro.ano}</h4>
                    <h4>Editora: {livro.editora}</h4>
                </div>
            </div>
        </div>
    ))

    return(
        <>
            <Cabecalho />
            <div className="pesquisaLivros">
            <h1><img src="search-lilas.png" className="lupa"/> Pesquisa de Livros</h1>
                <form onSubmit={handleSubmit(pesquisaLivro)}>
                    <p>
                        <label>Digite o nome do Livro:</label>
                        <input type="text"  {...register("nomeLivro")} required/>
                    </p>
                    <div className="botoes">
                        <button type='submit'>Pesquisar</button>
                        <button type='button' onClick={() => setLivros(livrosOriginais)}>Limpar Pesquisa</button>
                    </div>
                </form>
            </div>
            <div className='listaCards'>
                {listaLivros}
            </div>
        </>
    )
}