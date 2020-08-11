import React from 'react'
import Row from './Row'

export default function Table(props) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            { ['Name', 'Type', 'Description', 'Rating'].map((header, id) => <th key={id}>{header}</th>) }
          </tr>
        </thead>
        <tbody>
          { props.records.map(record => <Row {...record} key={record.id} handleInput={props.handleInput}/>) }
        </tbody>
      </table>
    </div>
  )
}
