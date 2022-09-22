import "./staticForm.css";
import { useRef,useState } from "react";

export default function StaticForm() {
  const titleRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const [formValues, setFormValues] = useState({})
  const handleChange = async (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({
        title: titleRef.current.value,
        desc: descRef.current.value,
        price: priceRef.current.value
    })
  };

  return (
    <div>
      <h1 className="formTitle">Static Form</h1>
      <h5 className="formDesc">This form will <b className="boldi">not</b> rerender on each value change on the input. Only when submit clicked. good for performance.</h5>

      <form action="" className="formContainer" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="id" className="inputLabel">
            Title:
          </label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            className="formInput"
            ref={titleRef}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="desc" className="inputLabel">
            Description:
          </label>
          <input
            type="text"
            placeholder="Description"
            id="desc"
            name="desc"
            className="formInput"
            ref={descRef}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="price" className="inputLabel">
            Price:
          </label>
          <input
            type="number"
            placeholder="Price"
            id="price"
            name="price"
            className="formInput"
            ref={priceRef}
            onChange={handleChange}
          />
        </div>
          <button type="submit" className="formBtn">Submit</button>
      </form>
      <div className="formValues">
        <div className="formValue">Title:{formValues.title || ""}</div>
        <div className="formValue">Description: {formValues.desc || ""}</div>
        <div className="formValue">Price: {formValues.price || ""} </div>
      </div>
    </div>
  );
}
