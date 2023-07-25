import "./ReloadMoviesButton.css"

const ReloadMoviesButton = (props) =>{
    return(
        <button className="reload-all-movies"onClick={props.reloadMovies}>Načíst filmy</button>
    )
}

export default ReloadMoviesButton