export const searchMovies = async ({ search }) => {
  if (search === '') return null;
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=613195d2&s=${search}`
    );
    const json = await resp.json();

    const movies = json.Search;
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
		throw new Error('Error searching movies')
	}
};
