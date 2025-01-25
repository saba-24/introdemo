import {useEffect, useState} from 'react'
import axios from "axios";


const Book = () => {

    const [persons, setPersons] = useState([

    ]);
    const [filter, setFilter] = useState('');
    const [newName, setNewName] = useState('');
    const [newNum, setNewNum] = useState('');

    const handleFilter = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const hook = () => {
        console.log('getting...');
            axios
                .get('http://localhost:3001/persons')
                .then((res) => {
                    setPersons(res.data);
                    console.log(persons);
                })
    }

    useEffect(hook, []);

    const added = (name) => {
        added.propTypes = {
            name: String
        }
        for (let j of persons) {
            if (name === j.name) {
                window.alert(`${name} is already added to the book`);
                return true;
            }

        }
        return false;
    }

    const handleAdd = (event) => {
        event.preventDefault();
        const z = persons.concat(
            {name: newName, number: newNum},
        )
        added(newName)
            ? setPersons([...persons])
            : setPersons([...z])


    }

    const handlePhone = (event) => {
        event.preventDefault()
        setNewName(event.target.value);
    }

    const handleNum = (event) => {
        event.preventDefault()
        setNewNum(event.target.value);
    }

    const List = () => {
        const search = new RegExp(filter, 'i');
        return(
            <div>
                <ul >
                    {persons.map(person =>
                        person.name.match(search)
                        ?<li key={person.name}>
                            {person.name} {person.number}
                        </li>
                    :' '
                    )}
                </ul>
            </div>
        )

    }

    return (
        <div >
            <h2 className={'book'}>Phonebook</h2>
            <div>
                <p>filter shown with</p>
                <input onChange={handleFilter} value={filter} />
            </div>
            <form onSubmit={
                handleAdd}>
                <div>
                    <h2>Add new</h2>
                    name: <input onChange={handlePhone} />
                    <br/>
                    number: <input onChange={handleNum} />
                    <br/>
                    <button type="submit" >add</button>
                </div>
            </form>
            <h2 className={'book'}>Numbers</h2>
            <List/>
            </div>
    )
}

export default Book