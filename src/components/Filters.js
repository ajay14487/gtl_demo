import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { applyFilter } from '../redux/actions'
import './styles.css'

const Filters = ({filters}) => {
  const dispatch = useDispatch()
  
  const chkChanged = val => {
    dispatch(applyFilter({ completed:val }))
  }

  return (
    <div className='filter-container'>
      Show Completed <input 
        type="checkbox"
        onChange={(e) => chkChanged(e.target.checked)}
        checked={filters.completed || ''
      }
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Filters)
