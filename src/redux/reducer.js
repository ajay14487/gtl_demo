import { filter, map } from 'lodash'


const filterItems = (items, itemIndex, completed) => {
  return map(items, (item, index) => {
    if(index === itemIndex) {
      item.completed = !!completed
    }
    return item
  })
}

export default (state = { items : [], filters: {} }, action = '') => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        items: filter(state.items, (item, index) => { return index !== action.payload })
      }

    case 'FILTER_ITEMS':
      return {
        ...state,
        filters: {...state.filters, ...action.payload}
      }
    case 'UPDATE_STATUS':
      return {
        ...state,
        items: filterItems(state.items, action.payload.index, action.payload.value)
      }
    default:
      return state
  }
}
