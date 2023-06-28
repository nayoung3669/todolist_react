import Router from "./shared/Router.js";
import "./styles/App.css";
import GlobalStyle from "./styles/GlobalStyle.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
