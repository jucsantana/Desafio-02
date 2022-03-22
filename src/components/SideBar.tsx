import { GenreResponseProps } from "../Model/GenreResponse";
import { Button } from "./Button";


export function SideBar(props: { genres: GenreResponseProps[]; handleClick: any; selectedGenreId: any; }) {
  
  const genres:GenreResponseProps[] = props.genres;
  const handleClickButton = props.handleClick;
  const selectedGenreId = props.selectedGenreId;
    return (
          <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
              {genres.map(genre => (
                <Button
                  key={String(genre.id)}
                  title={genre.title}
                  iconName={genre.name}
                  onClick={() => handleClickButton(genre.id)}
                  selected={selectedGenreId === genre.id}
                />
              ))}
            </div>
          </nav>
     );

}