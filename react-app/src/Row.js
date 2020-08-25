import React from 'react'

export default function Row(props) {
  return props.isActive ? (
      <tr>
        <td>
          <input id={props.id} type='text' name='imgUrl' placeholder='image URL' onChange={props.handleInput} value={props.imgUrl}/>
        </td>
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
        <td>
          <button id={props.id} name='save' onClick={props.toggleActive}>Save</button>
          <button id={props.id} name='delete' onClick={props.deleteRecord}>Delete</button>
        </td>
      </tr>
    ) : (
      <tr>
        <td>
          <img id={props.id} name='imgUrl' src={props.imgUrl} style={{ width: '60%', display: 'block', margin: 'auto' }}/>
        </td>
        <td>
          <span id={props.id} name='name'>{props.name}</span>
        </td>
        <td>
          <span id={props.id} name='type'>{props.type}</span>
        </td>
        <td>
          <span id={props.id} name='description'>{props.description}</span>
        </td>
        <td>
          <span id={props.id} name='rating'>{props.rating}</span>
        </td>
        <td>
          <button id={props.id} name='edit' onClick={props.toggleActive}>Edit</button>
          <button id={props.id} name='delete' onClick={props.deleteRecord}>Delete</button>
        </td>
      </tr>
    )
}
