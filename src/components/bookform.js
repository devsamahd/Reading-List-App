import {useContext, useState} from 'react';
import { BookContext } from '../contexts/Bookcontext';

const Bookform = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault();
       dispatch({type: 'ADD_BOOK', book:{
           title, author
       }})
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handlesubmit}>
            <input type='text' placeholder='Title...' onChange={(e) => setTitle(e.target.value)} required/>
            <input type='text' placeholder='Author...' onChange={(e) => setAuthor(e.target.value)} required/>
            <input type='submit' value='Add Book'/>
        </form>
     );
}
 
export default Bookform;