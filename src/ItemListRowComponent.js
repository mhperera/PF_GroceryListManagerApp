import React from 'react';

const ItemListRowComponent = ({ item, handleCheckbox, handleDelete }) => {
	return (
		<tr>
			<td className="text-start">
				<input
					className="form-check-input"
					type="checkbox"
					id=""
					onChange={() => {
						handleCheckbox(item.id);
					}}
				/>
			</td>
			<td className="text-start">
				<label
					htmlFor=""
					style={
						item.checked ? { textDecoration: 'line-through' } : {}
					}
				>
					{item.itemName} - {item.qty} {item.unit}{' '}
				</label>
			</td>
			<td className="text-end">
				<button
					type="button"
					className="btn btn-danger btn-sm"
					onClick={() => {
						handleDelete(item.id);
					}}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ItemListRowComponent;
