import './app.css'

function App() {
  // const p = document.createElement('p');
  // p.textContent = 'This is a demo paragraph';
  // return p;
  let msg = "awesome";
  return (
    <div>
      <h1 className="myHeader">This is a header</h1>
      <p className="myParagraph">This is my first {msg} component</p>
    </div>
  );
}

export default App;
