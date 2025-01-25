
import ReactDOM from 'react-dom/client'
import './App.css'
import Book from "./components/Phone/Phonebook.jsx";
import Collections from "./components/Collections.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(<Collections/>)
//npx json-server --port 3001 --watch db.json
