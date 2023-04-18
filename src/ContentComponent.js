import React from 'react'
import CreateItemFormComponent from './CreateItemFormComponent'
import ItemListComponent from './ItemListComponent'

const ContentComponent = ({ grocceryList }) => {
  return (
    <div className="content">
        <div className="row w-100 gy-0">
            <div className="col-6 p-0">
                <CreateItemFormComponent />
            </div>
            <div className="col-6 p-0">
                <ItemListComponent
                  grocceryList = {grocceryList}
                />
            </div>
        </div>
    </div>
  )
}

export default ContentComponent