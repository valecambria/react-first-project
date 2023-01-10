import { useContext, useEffect} from 'react';
import './index.css';
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books';
function App(){

    const {fetchBooks} = useContext(BooksContext)

    useEffect(() => {
        fetchBooks();
    }, []) //It gets called once , after the first render and it's never called again.
    //Instead, if i don't type anything , it will be called always after being rendered.
    //But if i use [] with an element (or elements) inside, it will be called only if that element (or elements are) it's being modified.

    return (
    <div>
        <BookCreate></BookCreate>
        <BookList/>
    </div>
    )

}
export default App;