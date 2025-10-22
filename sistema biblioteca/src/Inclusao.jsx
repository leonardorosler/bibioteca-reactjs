import Cabecalho from "./components/Cabecalho";

export default function Inclusao() {



    async function cadastraLivros(data) {

        const titulo = data.titulo
        const autor = data.autor
        const genero = data.genero
        const editora = data.editora
        const ano = data.ano
        const capa = data.capa


        // const livrosFiltrados = livrosOriginais.filter(livro => 
        // livro.titulo.toLowerCase().includes(nomeLivro.toLowerCase())
        // )
        // setLivros(livrosFiltrados)
        // reset()
    }



    return(
        <>
            <Cabecalho />
            <div className="incluiLivros">
            <h1>Inclusão de Livros</h1>
                <form onSubmit={handleSubmit(cadastraLivros)}>
                    <p>
                        <label>Titulo do Livro:</label>
                        <input type="text"  {...register("titulo")} required/>
                    </p>
                    <p>
                        <label>Nome do autor:</label>
                        <input type="text"  {...register("autor")} required/>
                    </p>
                    <p>
                        <label>Gênero do livro:</label>
                        <select name="genero" {...register("genero")} required>
                            <option value="">Selecione...</option>
                            <option value="Ação">Ação</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Romance">Romance</option>
                            <option value="Drama">Drama</option>
                            <option value="Comédia">Comédia</option>
                            <option value="Terror">Terror</option>
                            <option value="Suspense">Suspense</option>
                            <option value="Mistério">Mistério</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Ficção Científica">Ficção Científica</option>
                            <option value="Distopia">Distopia</option>
                            <option value="Histórico">Histórico</option>
                            <option value="Biografia">Biografia</option>
                            <option value="Autobiografia">Autobiografia</option>
                            <option value="Poesia">Poesia</option>
                            <option value="Religião">Religião</option>
                            <option value="Autoajuda">Autoajuda</option>
                            <option value="Didático">Didático</option>
                            <option value="Infantil">Infantil</option>
                            <option value="Juvenil">Juvenil</option>
                            <option value="HQ / Mangá">HQ / Mangá</option>
                            <option value="Conto">Conto</option>
                            <option value="Crônica">Crônica</option>
                            <option value="Policial">Policial</option>
                            <option value="Erótico">Erótico</option>
                        </select>
                    </p>
                    <p>
                        <label>Nome da editora:</label>
                        <input type="text" {...register("editora")} required/>
                    </p>
                    <p>
                        <label>Ano de publicação:</label>
                        <select name="ano" {...register("ano")} required>
                            <option value="">Selecione...</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2010">2010</option>
                            <option value="2000">2000</option>
                            <option value="1990">1990</option>
                            <option value="1980">1980</option>
                        </select>
                    </p>
                    <p>
                        <label>URL da capa do livro:</label>
                        <input type="url" {...register("capa")} placeholder="https://exemplo.com/capa.jpg" required/>
                    </p>
                    
                    <div className="botao">
                        <button type='submit'>Incluir</button>
                    </div>
                </form>
            </div>
            <div className='listaCards'>
                {/* {listaLivros} */}
            </div>
        </>
    )
}