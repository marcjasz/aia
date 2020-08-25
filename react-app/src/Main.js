import React, { useState, useEffect } from 'react';
import Table from './Table'
import Search from './Search'
const R = require('ramda');

export default function Main() {
  const SORTABLE_COLUMNS = ['id', 'name', 'type', 'description', 'rating']
  const [records, setRecords] = useState([])
  const [recordsCount, setRecordsCount] = useState(0)
  const [searchString, setSearchString] = useState('')
  const [order, setOrder] = useState({
    column: 'id',
    ascending: true,
  })

  const newRecord = () => ({
    isActive: true,
    isVisible: true,
    id: String(recordsCount),
    name: '',
    description: '',
    type: '',
    rating: '',
  })

  const handleClick = () => {
    setRecords(records.concat([newRecord()]))
    setRecordsCount(recordsCount + 1)
  }

  const handleInput = event => {
    const { name, value, id } = event.target
    setRecords(records.map(
      R.when(record => record.id === id,
             record => ({ ...record, [name]: value}))
    ))
  }

  const toggleActive = event => {
    const { id, name } = event.target
    setRecords(records.map(
      R.when(record => record.id === id,
             record => ({ ...record, isActive: name === 'edit' }))
      ))
  }

  const deleteRecord = event => {
    const { id } = event.target
    setRecords(records => records.filter(record => record.id !== id))
  }

  const filterResults = event => {
    const { value } = event.target
    setSearchString(value)
  }

  const handleSorting = event => {
    const column = SORTABLE_COLUMNS.find(x => x === event.target.innerText.toLowerCase()) || 'id'
    column === order.column ?
      setOrder({ column: column, ascending: !order.ascending }) :
      setOrder({ column: column, ascending: true })
  }

  useEffect(() => {
    setRecords(records => records.map(record => ({ ...record, isVisible: record.name.includes(searchString) })))
  }, [searchString])

  useEffect(() => {
    R.pipe(
      R.sortBy(
        R.pipe(
          R.prop(order.column),
          R.when(() => R.includes(order.column, ['id', 'rating']), Number),
        )
      ),
      R.unless(() => order.ascending, R.reverse),
      R.unless(R.eqBy(R.map(R.prop(order.column)), records), setRecords)
    )(records)
  }, [order, records])

  return (
    <div id='main'>
      <div className='table-control'>
        <button onClick={handleClick}>Add a new bread</button>
        <Search records={records} filterResults={filterResults} />
      </div>
      { <Table records={records}
               order={order}
               handleInput={handleInput}
               toggleActive={toggleActive}
               deleteRecord={deleteRecord}
               handleSorting={handleSorting} /> }
    </div>
  )
}
