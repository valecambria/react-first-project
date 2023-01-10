import { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'
function BookList(){
    const { books } = useContext(BooksContext)
    const renderedBooks = books.map((book) => {
        return (<div>
            <BookShow key={book.id} book={book}></BookShow>
        </div>)
    })
    return <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
    {renderedBooks}
    </div>
}
export default BookList;