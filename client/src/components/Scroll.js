

function Scroll(props){

  return (
    <div style={{overflowY: 'scroll', border: '1px black', height: '1000px'}}>
      {props.children}
    </div>
  );
}


export default Scroll;
