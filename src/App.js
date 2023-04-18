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
  const [newItem, setNewItem] = useState('');
  const [newQty, setNewQty] = useState(1);

  const handleSearch = (keyWord) => {
    setSearchText(keyWord);
  }

  const handleSelectedUnit = (selectedUnit) => {
    setSelectedUnit(selectedUnit);
  }

  const handleFormSubmit = () => {
    console.log(newItem,newQty,selectedUnit);
    addItemFunction(newItem,newQty,selectedUnit);
    setNewItem('');
    setNewQty(1);
    setSelectedUnit('Nos');
  }

  const addItemFunction = (newItem,newQty,selectedUnit) => {
    const newGrocceryItem = {
      id : grocceryList.length+1,
      itemName : newItem,
      qty: newQty,
      unit: selectedUnit
    }
    const newGrocceryList = [...grocceryList, newGrocceryItem];
    setGrocceryList(newGrocceryList);
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
          handleFormSubmit = {handleFormSubmit}
          newItem = {newItem}
          setNewItem = {setNewItem}
          newQty = {newQty}
          setNewQty = {setNewQty}
        />
        <FooterComponent />
    </div>
  );
}

export default App;
