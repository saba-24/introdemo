import './App.css'
import Collections from "./components/Collections.jsx";


const App = (notes) => {
    return(
        <div>
            <Collections notes={notes}/>
        </div>
    )
}


export default App


