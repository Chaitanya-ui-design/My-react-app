//-----------introduction about react----------



/*const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myelement
)*/
/*
const myElement = <input type="text" />;

createRoot(document.getElementById('root')).render(
  myElement
);*/
//jsx in components:

/*function Car() {
  const brand = "Ford";
  const model = "Mustang";
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
)
*/
/*function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
  
/*import { createRoot } from 'react-dom/client'
function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car />
);

*/