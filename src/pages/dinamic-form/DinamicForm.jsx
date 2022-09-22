import './dinamicForm.css'
import { useReducer } from 'react'
import { initial_state, formReducer } from '../../redux/reducers/formReducer'

export default function DinamicForm() {

    const [state,dispatch] = useReducer(formReducer,initial_state)

    const handleChange = async (e) =>{
        await dispatch({type:"FORM_VALUES", payload: {
            name:e.target.name,
            value: e.target.value
        }} )
    }
  return (
    <div>
        <h1 className="formTitle">Dinamic Form</h1>
        <h5 className="formDesc">This form will rerender the whole component on each value change on the input. good for validations.</h5>
     <form action="" className="formContainer">
        <div className="inputContainer">

        <label htmlFor='id' className='inputLabel' >Title:</label>
        <input type="text" placeholder='Title' id='title' name='title' className="formInput" onChange={handleChange} />
        </div>
        <div className="inputContainer">
        <label htmlFor='desc' className='inputLabel' >Description:</label>
        <input type="text" placeholder='Description' id='desc' name='desc' className="formInput" onChange={handleChange} />
        </div>
        <div className="inputContainer">
        <label htmlFor='price' className='inputLabel' >Price:</label>
        <input type="number" placeholder='Price' id='price' name='price' className="formInput" onChange={handleChange} />
        </div>
     </form>
     <div className="formValues">
        <div className="formValue">Title: {state.form.title}</div>
        <div className="formValue">Description: {state.form.desc}</div>
        <div className="formValue">Price: {state.form.price}</div>
     </div>
    </div>
  )
}
