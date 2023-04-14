import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <FooterComponent />
      </header>
    </div>
  );
}

export default App;
