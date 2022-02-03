import { Button } from './components/Button'
import { StyleLink } from './components/StyleLink';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Button>Hola mundo</Button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <StyleLink to="/">Home</StyleLink>
              </li>
              <li>
                <StyleLink to="/about">About</StyleLink>
              </li>
              <li>
                <StyleLink to="/users">Users</StyleLink>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </div>


  );
}

export default App;
