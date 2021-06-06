import {useContext} from 'react'
import { BookContext } from '../contexts/Bookcontext'

const Nav = () => {
    const {books} = useContext(BookContext)

    return( 
        <div className='container'>
            <div className='card'>
                <div className='content'>
                    <h2>#{books.length}</h2>
                    <h3>Samahd Reading App</h3>
                    <p>you have {books.length} to read</p>
                </div>
            </div>  
        </div>
    )
}

export default Nav;