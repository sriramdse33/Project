

function SearchBox(props){
  return (
    <div className='pa2'>
      <input
        className = "pa3 ba b--green bg-lightest-blue"
        onChange = {props.searchChange}
        type = 'search'
        placeholder='search doctors'
      />
    </div>
  );
}


export default SearchBox;
