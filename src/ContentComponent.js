import React from 'react'
import CreateItemFormComponent from './CreateItemFormComponent'
import ItemListComponent from './ItemListComponent'

const ContentComponent = () => {
  return (
    <div className="content valign-wrapper">
        <div className="row w-100">
            <div className="col s6 p-0">
                <CreateItemFormComponent />
            </div>
            <div className="col s6 p-0">
                <ItemListComponent />
            </div>
        </div>
    </div>
  )
}

export default ContentComponent