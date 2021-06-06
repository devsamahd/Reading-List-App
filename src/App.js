import Booklist from "./components/booklist";
import Nav from "./components/nav";
import BookContextProvider from "./contexts/Bookcontext";

const App = () => {

    return(
       <BookContextProvider>
           <Nav />
           <Booklist />
       </BookContextProvider>
    )
}

export default App;