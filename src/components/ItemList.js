import React, { useMemo } from 'react'
import filter from 'lodash/filter'
import { deleteItem, updateStatus } from '../redux/actions'
import { connect, useDispatch } from 'react-redux'
import './styles.css'

function Item({ item, index }){
  const { task, completed } = item
  const dispatch = useDispatch()

  const chkChange = (index, value) => {
    dispatch(updateStatus(index, value))
  }

  return useMemo(() => 
    (<tr>
      <td>{task}</td>
      <td width='10%'><input type="checkbox" onChange={(e) => chkChange(index, e.target.checked)} checked={completed ? 'checked' : ''} /></td>
      <td  width='10%' onClick={() => dispatch(deleteItem(index))}>X</td>
    </tr>)
    , [item, chkChange])
}

const ItemList = ({ items, filters }) => {
  const actualFilters = !!filters.completed ? {completed: filters.completed} : {}
  const filteredItems = filter(items, actualFilters)
  
  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Completed</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.length > 0 && filteredItems.map((item, index) => 
          <Item item={item} index={index} />
        )}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    filters: state.filters
  }
}


export default connect(mapStateToProps)(ItemList)