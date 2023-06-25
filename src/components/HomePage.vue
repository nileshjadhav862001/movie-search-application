<template>
  <div id="app">
    <header class="header-group">
      <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-brand-wrapper">
          <span class="navbar-brand mb-0 h1">Movies Search</span>
        </div>
      </nav>
    </header>

    <div class="input-group">
      <div class="input-group mb-3">
        <!-- <label for="searchTerm">Search</label> -->
        <div class="input-group-prepend"></div>
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="searchTerm"
          placeholder="Enter movie title"
          @keyup.enter="searchMovies"
        />
        <button @click="searchMovies" type="submit" class="btn btn-primary">
          GO
        </button>
      </div>
    </div>
    <!-- ---------------------------------------- -->
    <section class="row movies-area">
      <section class="mt-2 col-9 row" id="movies">
        <div
          class="card col-4"
          v-for="movie in movies"
          :key="movie.imdbID"
          @click="getMovieDetails(movie.imdbID)"
        >
          <img class="card-img-top" :src="movie.Poster" :alt="movie.Title" />
          <div>
            <h5 class="card-title">{{ movie.Title }}</h5>
            <p class="card-text">{{ movie.Year }}</p>
          </div>
        </div>
      </section>
    </section>
    <!-- ---------------------------------------- -->
    <div v-if="selectedMovie" class="container">
      <div class="row">
        <div>
          <!--class="col-md-6" -->
          <div class="media">
            <img
              :src="selectedMovie.Poster"
              alt="Movie Poster"
              class="img-fluid"
            />
            <div class="detail">
              <h2>{{ selectedMovie.Title }}</h2>
              <p>Year: {{ selectedMovie.Year }}</p>
              <p>Rating: {{ selectedMovie.imdbRating }}</p>
              <p>Release date: {{ selectedMovie.Released }}</p>
              <p>Plot: {{ selectedMovie.Plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      searchTerm: "",
      movies: [],
      selectedMovie: null,
    };
  },

  methods: {
    searchMovies() {
      // Make a request to the OMDB API
      fetch(`http://www.omdbapi.com/?apikey=b6f80e1&s=${this.searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            this.movies = data.Search;
          } else {
            this.movies = [];
          }
        });
    },
    getMovieDetails(imdbID) {
      // Make a request to the OMDB API to get movie details
      fetch(`http://www.omdbapi.com/?apikey=b6f80e1&i=${imdbID}`)
        .then((response) => response.json())
        .then((data) => {
          this.selectedMovie = data;
          console.log(data);
        });
    },
    
  },
};
</script>

<style scoped>
.detail {
  padding: 10px;
  margin: 10px;
}
.container {
  justify-items: center;
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
}
.navbar-brand-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.movies-area {
  justify-content: space-around;
  align-items: flex-start;
}
.input-group {
  padding: 10px;
  margin: 10px;
  /* border-radius: 10px; */
}
</style>
