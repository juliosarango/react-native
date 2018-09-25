const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    // el resultado tiene una key llamada data, x eso extraemos únicamente ese key
    const { data } = await query.json();    
    return data.movies;
  }

  async getPeliculas() {
    const query = await fetch(`${BASE_API}list_movies.json`);
    // el resultado tiene una key llamada data, x eso extraemos únicamente ese key
    const { data } = await query.json();    
    return data.movies;
  }
}

export default new Api();