import React, { useState } from 'react';
import Table from './Table'

export default function Main() {
  const [records, setRecords] = useState([])
  const [recordsCount, setRecordsCount] = useState(0)

  const newRecord = () => ({
    isActive: true,
    id: String(recordsCount),
    name: '',
    description: '',
    type: '',
    value: '',
    rating: '',
  })

  const handleClick = () => {
    setRecords(records.concat([newRecord()]))
    setRecordsCount(recordsCount + 1)
  }

  const mapIf = ({ update, condition }) => collection => {
    return collection.map(element => {
      return condition(element) ? update(element) : element;
    })
  }

  const handleInput = (event) => {
    const { name, value, id } = event.target
    setRecords(mapIf({
      update: record => ({ ...record, [name]: value }),
      condition: record => record.id === id,
    }))
  }

  return (
    <div id='main'>
        <button onClick={handleClick}>Add a new bread</button>
        { <Table records={records} handleInput={handleInput} />}
    </div>
  )
}
