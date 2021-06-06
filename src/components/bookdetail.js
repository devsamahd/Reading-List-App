import {useContext} from 'react'
import { BookContext } from '../contexts/Bookcontext';

const Bookdetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return ( 
        <div className='container3'>
            <div className='card3'>
                <div className='content'>
                <h3 onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})} style={{color:'white'}}>{book.title}</h3>
                </div>
            </div>  
        </div>
     );
} 
 
export default Bookdetails;