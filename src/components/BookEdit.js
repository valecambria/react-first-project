import {useState} from 'react'
import useBooksContext from '../hooks/useBooksContext'
function BookEdit({book, onSubmit}){
    const  [title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext()
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }
    return( 
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <label>Title</label>
            <input value={title} onChange={handleChange} type="text" placeholder="Change Title" className="input input-bordered input-error w-full max-w-xs" />
            <button className="btn btn-success">Save</button>
        </form>
    )
}
export default BookEdit;