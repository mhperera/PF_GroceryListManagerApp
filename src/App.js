// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
