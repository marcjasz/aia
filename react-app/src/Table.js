import React from 'react'
import Row from './Row'

export default function Table(props) {
  const COLUMN_HEADERS = ['Image', 'Name', 'Type', 'Description', 'Rating', 'Actions']

  return (
    <div>
      <table>
        <thead>
          <tr>
            { COLUMN_HEADERS.map((header, id) =>
              <th key={id} onClick={props.handleSorting}
                  style={props.order.column === header.toLowerCase() ? { textDecoration: 'underline black' } : {} }
              >
                {header}
              </th>)
            }
          </tr>
        </thead>
        <tbody>
          { props.records.filter(record => record.isVisible).map(record =>
            <Row {...record}
                 key={record.id}
                 handleInput={props.handleInput}
                 toggleActive={props.toggleActive}
                 deleteRecord={props.deleteRecord} />)
          }
        </tbody>
      </table>
    </div>
  )
}
