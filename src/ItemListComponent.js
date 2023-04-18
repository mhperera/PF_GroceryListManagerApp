import React from 'react';
import ItemListRowComponent from './ItemListRowComponent';

const ItemListComponent = ({ grocceryList, searchText, handleSearch, handleCheckbox, grocceryListCount}) => {
	return (
		<div className="w-100 bg-light-grey vh-100 ItemListComponent">
			<div className="row">
				<div className="col-4 offset-8 mb-3">
					<input
						type="text"
						className="form-control"
						name="searchText"
						id="searchText"
						placeholder="Search by Item Name"
						value={ searchText }
						onChange={ (e)=>{ handleSearch(e.target.value) } }
					/>
				</div>
				<div className="col-12 mb-3">
					<table className="table table-borderless w-100">
						<colgroup>
							<col width="100px" />
							<col width="" />
							<col width="50px" />
						</colgroup>
						<tbody>
							{grocceryList.map((item) => (
								<ItemListRowComponent
									key={item.id}
									item={item}
									handleCheckbox = {handleCheckbox}
								/>
							))}
						</tbody>
					</table>
				</div>

				<div className="col-12 mb-3 text-end">
					<label htmlFor="" className="fw-bolder fs-5">
						{ grocceryListCount } Items in the List
					</label>
				</div>
			</div>
		</div>
	);
};

export default ItemListComponent;
