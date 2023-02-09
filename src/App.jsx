import { useState } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import './App.css';

function App() {
  const [sort, setSort] = useState(false);
  const { error, search, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSort = event => {
    setSort(!sort);
  };
  const handleSubmit = event => {
    event.preventDefault();
    getMovies({ search });
  };
  const handleChange = ({ target }) => {
    updateSearch(target.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movenatorck</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='search'
            value={search}
            placeholder='Matrix, Pokemon, Naruto...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'tomato' }}>{error}</p>}
      </header>
      <main>{loading ? <h3>Loading...</h3> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
