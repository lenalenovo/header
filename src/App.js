import "./style.css";
import logo from "./assets/logo.jpg";

function App() {
  return (
    <>
      <main>
        <div class="tela-inteira">
          <header>
            <div class="logoframe">
              <img class="logo" src={logo} alt="Caixinha" />
              <h1>Seconda Vitta</h1>
            </div>
            <input type="text" id="campoDeBusca"></input>
          </header>
        </div>
      </main>
    </>
  );
}

export default App;
