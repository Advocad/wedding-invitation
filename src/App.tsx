import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Main, User } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/:Id" element={<User />} />
            
          <Route path="/" element={<Main />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
