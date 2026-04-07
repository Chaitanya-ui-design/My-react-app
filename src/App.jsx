import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
export default App;*/




function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password;

  return (
    <div>
      <lable>Enter your Email:</lable> <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
<p></p>
     <lable>Enter your Password:</lable> <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
<p></p>
      <button disabled={isDisabled}>Login</button>
    </div>
  );
}

export default App;
