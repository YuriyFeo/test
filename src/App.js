import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5, 6];

  let fun = (event) => {
    console.log(event.target.id)
    window.history.pushState(111,"",event.target.id)
  }

  return (
    <div className="App">
      {arr.map((el,index) => (
        <p key={index} id = {el} onClick={fun}>{el}</p>
      ))}
    </div>
  );
}

export default App;