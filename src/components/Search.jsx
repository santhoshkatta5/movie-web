import './search.css';

function Search(props) {


  return (
    <div className="search">
    <input type="text" placeholder="        Search . . ."
    value={props.value}
    onChange={(event)=> props.setSearchValue(event.target.value)} />
    <ion-icon name="search-outline"></ion-icon>
    {/* <ion-icon name="search-circle-outline"></ion-icon> */}
    </div>
  );
}

export default Search;
