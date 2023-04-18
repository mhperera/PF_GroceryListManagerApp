import React from 'react'
import CreateItemFormComponent from './CreateItemFormComponent'
import ItemListComponent from './ItemListComponent'

const ContentComponent = ({ grocceryList, searchText, handleSearch, selectedUnit, handleSelectedUnit }) => {
  return (
    <div className="content">
        <div className="row w-100 gy-0">
            <div className="col-6 p-0">
                <CreateItemFormComponent
                  selectedUnit = {selectedUnit}
                  handleSelectedUnit = {handleSelectedUnit}
                />
            </div>
            <div className="col-6 p-0">
                <ItemListComponent
                  grocceryList = {grocceryList}
                  searchText = {searchText}
                  handleSearch = {handleSearch}
                />
            </div>
        </div>
    </div>
  )
}

export default ContentComponent