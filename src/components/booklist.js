import {useContext} from 'react';
import { BookContext } from '../contexts/Bookcontext';
import Bookdetails from './bookdetail';
import Bookform from './bookform';

const Booklist = () => {
    const {books} = useContext(BookContext);

    return  books.length ? ( 
        <div className='container' style={{overflowX: 'visible'}}>
            <div className='card1'>
                <div className='content'>
                    {books.map((book) => {
                        return(<Bookdetails book={book} key={book.id}/>)
                    })}
                </div>
            </div> 
            <Bookform />
        </div>
     ) : (
         <div className='container'>
            <div className='card1'>
                <div className='content'>
                    <p>No book to read, Free time :)</p>
                </div>
            </div>  
            <Bookform />

        </div>
        
     )
}
 
export default Booklist;