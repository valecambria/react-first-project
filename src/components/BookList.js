import useBooksContext from '../hooks/useBooksContext';
import BookShow from './BookShow'

function BookList(){
    const { books } = useBooksContext()

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      });

    return( <div className='flex flex-wrap justify-center items-center gap-5 mt-5'>
    {renderedBooks}
    </div>
    )
}
export default BookList;