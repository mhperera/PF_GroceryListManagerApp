import React from 'react'

const ItemListRowComponent = ({ itemName, qty, unit }) => {
  return (
    <tr>
        <td className="text-start">
            <input className="form-check-input" type="checkbox" id="" />
        </td>
        <td className="text-start">
            <label htmlFor="">{ itemName } -  {qty} {unit} </label>
        </td>
        <td className="text-end">
            <button type="button" className="btn btn-danger btn-sm">
                D
            </button>
        </td>
    </tr>
  )
}

export default ItemListRowComponent