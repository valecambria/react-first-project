import {useState} from 'react'
import useBooksContext from '../hooks/useBooksContext'
import './BookCreate.css'
function BookCreate(){
    const [title, setTitle] = useState('')
    const {createBook} = useBooksContext()
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createBook(title)
        setTitle('')
    }
    return( 
    <div>
        <form onSubmit={handleSubmit} className="createForm flex flex-col items-center  gap-3">
            <h3>Create a Book!</h3>
            <div className='flex gap-5'>
            <label className='flex self-center'>Title</label>
            <input className='input input-bordered input-error w-full max-w-xs' value={title} onChange={handleChange}></input>
            <button className='btn btn-warning'>Create</button>
            </div>
        </form>
    </div>
    )
}
export default BookCreate;