
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';
import { useState , useEffect } from 'react';

function App() {

  const [grocceryList, setGrocceryList] = useState(JSON.parse(localStorage.getItem('shopping-list')) || []);
  const [grocceryListCount, setGrocceryListCount] = useState(grocceryList.length);
  const [searchText, setSearchText] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Nos');
  const [newItem, setNewItem] = useState('');
  const [newQty, setNewQty] = useState(1);

  useEffect(()=>{
    localStorage.setItem('shopping-list',JSON.stringify(grocceryList));
  },[grocceryList]);

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
