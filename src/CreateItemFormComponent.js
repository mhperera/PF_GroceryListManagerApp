import React from 'react';

const CreateItemFormComponent = ({selectedUnit, handleSelectedUnit, handleFormSubmit, newItem, setNewItem, newQty, setNewQty}) => {
	return (
		<div className="w-100 vh-100 CreateItemFormComponent">
			<form onSubmit={(e)=>{e.preventDefault()}}>
				<div className="row">
					<div className="col-12">
						<h5 className="heading5">Add Groccery Item</h5>
					</div>

					<div className="col-12 mb-3">
						<label forhtml="itemName" className="form-label">
							Item Name <span className="text-danger">*</span>
						</label>
						<input
							type="text"
							className="form-control"
							id="itemName"
							placeholder="Item Name"
							required
							value={ newItem }
            				onChange = { (e)=>{ setNewItem(e.target.value) } }
						/>
					</div>

					<div className="col-6 mb-3">
						<label forhtml="quantity" className="form-label">
							Quantity <span className="text-danger">*</span>
						</label>
						<input
							type="number"
							className="form-control"
							id="quantity"
							placeholder="Quantity"
							required
							value={ newQty }
            				onChange = { (e)=>{ setNewQty(e.target.value) } }
						/>
					</div>

					<div className="col-6 mb-3">
						<label forhtml="unit" className="form-label">
							Unit <span className="text-danger">*</span>
						</label>
						<select
							name="unit"
							id="unit"
							className="form-control"
							required
							value={selectedUnit}
							onChange={(e)=>{handleSelectedUnit(e.target.value)}}
						>
							<option value="Nos">Nos</option>
							<option value="Boxes">Boxes</option>
							<option value="Packets">Packets</option>
							<option value="Bags">Bags</option>
						</select>
					</div>

					<div className="col-6 mb-3">
						<button type="submit" className="btn btn-success" onClick={()=>{handleFormSubmit()}}>
							Add to List
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateItemFormComponent;
