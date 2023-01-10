import { useState, useContext } from 'react'
import BooksContext from '../context/books'
import BookEdit from './BookEdit'
function BookShow({book}){
    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById } = useContext(BooksContext)
    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = () => {
        setShowEdit(false)
    }
    let content = <h3>{book.title}</h3>
    if(showEdit === true){
        content = <BookEdit onSubmit={handleSubmit} book={book}></BookEdit>
    }
    return(
        <div className="card card-compact bg-red-300 w-96 bg-base-100 shadow-xl">
            <figure><img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" /></figure>
            <div className='flex justify-end mr-2 mt-2'>
            <button className="btn btn-xs" onClick={handleEditClick}>Edit</button>
            </div>
        <div className="card-body">
            <h2 className="card-title text-black">{content}</h2>
        <div className="card-actions justify-end">
        <button className="btn btn-square" onClick={handleDeleteClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </div>
        </div>
        </div>

        ) 
        

}
export default BookShow;