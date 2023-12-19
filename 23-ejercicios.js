const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const shortMovie = [];
  const mediumMovie = [];
  const longestMovie = [];

const moviesDuration = (movies) => { 
 

        for(let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            if(movie.durationInMinutes < 100){
                shortMovie.push(movie);
            } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
                mediumMovie.push(movie);
            } else {
                longestMovie.push(movie);
            }
        }
        return {shortMovie, mediumMovie, longestMovie};
  }

  const result = moviesDuration(movies);
  console.log(result);