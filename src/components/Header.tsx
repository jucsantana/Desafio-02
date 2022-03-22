import { GenreResponseProps } from "../Model/GenreResponse";

interface Titleprops{
  title:string
}

export function Header(props: Titleprops) {
    const selectedGenretitle:string = props.title;
    return (
      <header>
        <span className="category">Categoria:<span> {selectedGenretitle}</span></span>
      </header>        
    )
}