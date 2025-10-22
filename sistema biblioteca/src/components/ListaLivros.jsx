import './ListaLivros.css';

export default function ListaLivros({ livros }) {
  
  return (
    <div className='listaCards'>
      {livros.map(livro => (
        <div className="containerLivros" key={livro.id}>
          <div className='cardLivro'>
            <img src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} className='capalivro'/>
            <div>
              <h2>{livro.titulo}</h2>
              <h3>{livro.genero}</h3>
              <h4>Ano de Lançamento: {livro.ano}</h4>
              <h4>Editora: {livro.editora}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
