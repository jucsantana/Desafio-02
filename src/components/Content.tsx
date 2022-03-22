import { GenreResponseProps } from "../Model/GenreResponse";
import { MovieProps } from "../Model/MovieResponse";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

export function Content(props: { selectedGenre: GenreResponseProps; movies: MovieProps[]; }) {

  const movies:MovieProps[] = props.movies;
  const selectedTitle:string = props.selectedGenre.title;
  
  return (
          <div className="container">
          <Header title ={selectedTitle}/>
          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
    )
}