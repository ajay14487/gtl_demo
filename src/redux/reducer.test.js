import reducer from './reducer'

describe('reducer', () => {
  it('should set items in redux state when ADD_ITEM action with item data in payload', () => {
    const initialState = { items : [], filters: {} }
    const payload = { task: 'Reading', completed: false }
    const action = {
      type: 'ADD_ITEM',
      payload: { task: 'Reading', completed: false }
    }
    const state = reducer(initialState, action)
    expect(state.items[0]).toEqual(payload)
  })
})
