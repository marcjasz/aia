import React from 'react'

export default function Row(props) {
  return (
    <tr>
      <td>
        <input id={props.id} type='text' name='name' onChange={props.handleInput} value={props.name}/>
      </td>
      <td>
        <input id={props.id} type='text' name='type' onChange={props.handleInput} value={props.type}/>
      </td>
      <td>
        <input id={props.id} type='text' name='description' onChange={props.handleInput} value={props.description}/>
      </td>
      <td>
        <input id={props.id} type='number' name='rating' onChange={props.handleInput} value={props.rating}/>
      </td>
    </tr>
  )
}
