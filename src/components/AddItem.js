import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/actions'
import './styles.css'

const AddItem = () => {
  const [inputText, setTextInput] = useState('')
  const dispatch = useDispatch()
  
  const onTextChange = val => {
    setTextInput(val)
  }

  return (
    <div>
      <form className='form-style-9'>
        <ul>
          <li>
            <input type="text" name="field3" className="field-style field-full align-none" placeholder="Subject"  onChange={e => onTextChange(e.target.value)} />
          </li>
          <li>
            <input type="button" value="Add" onClick={() => dispatch(addItem({task: inputText, completed: false}))} />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default AddItem
