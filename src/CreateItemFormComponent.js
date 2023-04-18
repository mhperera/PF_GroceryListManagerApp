import React from 'react';

const CreateItemFormComponent = () => {
	return (
		<div className="w-100 vh-100 CreateItemFormComponent">
			<form>
				<div className="row">
					<div className="col-12">
						<h5 className="heading5">Add Groccery Item</h5>
					</div>

					<div className="col-12 mb-3">
						<label forHtml="itemName" className="form-label">
							Item Name <span className="text-danger">*</span>
						</label>
						<input
							type="text"
							className="form-control"
							id="itemName"
							placeholder="Item Name"
							required
						/>
					</div>

					<div className="col-6 mb-3">
						<label forHtml="quantity" className="form-label">
							Quantity <span className="text-danger">*</span>
						</label>
						<input
							type="number"
							className="form-control"
							id="quantity"
							placeholder="Quantity"
							required
						/>
					</div>

					<div className="col-6 mb-3">
						<label forHtml="unit" className="form-label">
							Unit <span className="text-danger">*</span>
						</label>
						<select
							name="unit"
							id="unit"
							className="form-control"
							required
						>
							<option value="Nos" selected>
								Nos
							</option>
							<option value="Boxes">Boxes</option>
							<option value="Packets">Packets</option>
							<option value="Bags">Bags</option>
						</select>
					</div>

					<div className="col-6 mb-3">
						<button type="submit" className="btn btn-success">
							Add to List
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateItemFormComponent;
