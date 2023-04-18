// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';
import { useState } from 'react';

function App() {

  const sampleList = [
    {
      id: 1,
      itemName: 'Milk Powder 300G',
      qty: 3,
      unit: 'Nos'
    },
    {
      id: 2,
      itemName: 'Coconut Powder 400G',
      qty: 3,
      unit: 'Nos'
    },
    {
      id: 3,
      itemName: 'Chicken 1KG',
      qty: 2,
      unit: 'Nos'
    },
    {
      id: 4,
      itemName: 'Potatop 1KG',
      qty: 1,
      unit: 'Nos'
    },
    {
      id: 5,
      itemName: 'Sugar 1KG',
      qty: 3,
      unit: 'Nos'
    }
  ];

  const [grocceryList, setGrocceryList] = useState(sampleList);
  const [searchText, setSearchText] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Nos');

  const handleSearch = (keyWord) => {
    setSearchText(keyWord);
  }

  const handleSelectedUnit = (selectedUnit) => {
    setSelectedUnit(selectedUnit);
  }

  return (
    <div className="App">
        <HeaderComponent />
        <ContentComponent
          grocceryList = {grocceryList.filter((item)=>(
            (item.itemName).toLowerCase().includes(searchText.toLowerCase())
          ))}
          searchText = {searchText}
          handleSearch = {handleSearch}
          selectedUnit = {selectedUnit}
          handleSelectedUnit = {handleSelectedUnit}
        />
        <FooterComponent />
    </div>
  );
}

export default App;
