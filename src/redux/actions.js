export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
  })
  
  export const deleteItem = index => ({
    type: 'DELETE_ITEM',
    payload: index
  })

  export const applyFilter = filter => ({
    type: 'FILTER_ITEMS',
    payload: filter
  })

  export const updateStatus = (index, value) => ({
    type: 'UPDATE_STATUS',
    payload: {index, value}
  })