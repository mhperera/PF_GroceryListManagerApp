import React from 'react'

const ItemListRowComponent = () => {
  return (
    <tr>
        <td className="text-start">
            <input className="form-check-input" type="checkbox" id="" />
        </td>
        <td className="text-start">
            <label htmlFor="">XXXXXX</label>
        </td>
        <td className="text-end">
            <button type="button" className="btn btn-danger">
                D
            </button>
        </td>
    </tr>
  )
}

export default ItemListRowComponent