
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
      unit: 'Nos',
      checked : false
    },
    {
      id: 2,
      itemName: 'Coconut Powder 400G',
      qty: 3,
      unit: 'Nos',
      checked : false
    },
    {
      id: 3,
      itemName: 'Chicken 1KG',
      qty: 2,
      unit: 'Nos',
      checked : false
    },
    {
      id: 4,
      itemName: 'Potatop 1KG',
      qty: 1,
      unit: 'Nos',
      checked : false
    },
    {
      id: 5,
      itemName: 'Sugar 1KG',
      qty: 3,
      unit: 'Nos',
      checked : false
    }
  ];

  const [grocceryList, setGrocceryList] = useState(sampleList);
  const [grocceryListCount, setGrocceryListCount] = useState(grocceryList.length);
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
      unit: selectedUnit,
      checked : false
    }
    const newGrocceryList = [...grocceryList, newGrocceryItem];
    setGrocceryList(newGrocceryList);
    setGrocceryListCount(newGrocceryList.length);
  }

  const handleCheckbox = (id) => {
    const newGrocceryList = grocceryList.map((item)=>(
      (item.id === id) ? { ...item, checked: !item.checked } : item
    ));
    setGrocceryList(newGrocceryList);
  }

  const handleDelete = (id) => {
    console.log(id);
    const newGrocceryList = grocceryList.filter((item) => item.id !== id);
    setGrocceryList(newGrocceryList);
    setGrocceryListCount(newGrocceryList.length);
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
          handleCheckbox = {handleCheckbox}
          grocceryListCount = {grocceryListCount}
          handleDelete={handleDelete}
        />
        <FooterComponent />
    </div>
  );
}

export default App;
