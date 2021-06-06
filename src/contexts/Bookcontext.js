import { useReducer, createContext, useEffect } from 'react'
import { bookReducer } from '../reducers/bookreducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
     const [books, dispatch] = useReducer(bookReducer, [], ()=> {
         const localdata = localStorage.getItem('books')
         return localdata ? JSON.parse(localdata) : []
     })
     useEffect(() => {
         localStorage.setItem('books', JSON.stringify(books))
        }, [books])

    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;