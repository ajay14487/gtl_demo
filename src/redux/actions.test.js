import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addItem,
  applyFilter
} from './actions'

const mockStore = configureMockStore([thunk])
const store = mockStore()

describe('actions', () => {
  it('Should dispatch addItem when addItem is called', async () => {
    const mockAction = {
      type: 'ADD_ITEM',
      payload: {}
    }
    expect(addItem({})).toEqual(mockAction)
  })

  it('Should dispatch applyFilter when applyFilter is called', async () => {
    const mockAction = {
      type: 'FILTER_ITEMS',
      payload: { completed: true }
    }
    expect(applyFilter({ completed: true })).toEqual(mockAction)
  })
})
