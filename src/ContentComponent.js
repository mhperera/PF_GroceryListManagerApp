import React from 'react';
import CreateItemFormComponent from './CreateItemFormComponent';
import ItemListComponent from './ItemListComponent';

const ContentComponent = ({
	grocceryList,
	searchText,
	handleSearch,
	selectedUnit,
	handleSelectedUnit,
	handleFormSubmit,
	newItem,
	setNewItem,
	newQty,
	setNewQty,
	handleCheckbox,
	grocceryListCount,
	handleDelete
}) => {
	return (
		<div className="content">
			<div className="row w-100 gy-0">
				<div className="col-6 p-0" id="CreateItemFormSection">
					<CreateItemFormComponent
						selectedUnit={selectedUnit}
						handleSelectedUnit={handleSelectedUnit}
						handleFormSubmit={handleFormSubmit}
						newItem={newItem}
						setNewItem={setNewItem}
						newQty={newQty}
						setNewQty={setNewQty}
					/>
				</div>
				<div className="col-6 p-0" id="ItemListSection">
					<ItemListComponent
						grocceryList={grocceryList}
						searchText={searchText}
						handleSearch={handleSearch}
						handleCheckbox={handleCheckbox}
						grocceryListCount={grocceryListCount}
						handleDelete={handleDelete}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContentComponent;
