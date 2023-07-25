import "./AllDeleteButton.css"

const AllDeleteButton = (props) =>{
    return(
        <button className="all-delete-button" onClick={props.deleteMovies}>Vymazat vše</button>
    )
    
}

export default AllDeleteButton