import React from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'
import Filters from './Filters'
import './styles.css'

const App = () => {
  return <div className='main-container'>
    <AddItem />
    <Filters />
    <ItemList />
  </div>
}

export default App
