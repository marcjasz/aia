import React from 'react'

export default function Search(props) {
   return (
    <input className='search-bar'
           name='search'
           type='text'
           onInput={props.filterResults}
           value={props.searchString}
           placeholder='Search breads by name' />
   )
}
