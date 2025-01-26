import {useEffect, useState} from 'react'
import axios from "axios"
import phoneService from './services/phone.js'

const Book = () => {

    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState('');
    const [newName, setNewName] = useState('');
    const [newNum, setNewNum] = useState('');

    const handleFilter = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    useEffect(() =>
        {
            console.log('getting...');
            phoneService
                .getAll()
                .then((res) => {
                    Array.isArray(res)
                    ? setPersons(res)
                        : null
                })
        }, []);


    const added = (name) => {
        added.propTypes = {
            name: String
        }
        for (let j of persons) {
            if (name.toLowerCase() === j.name.toLowerCase()) {
                return {
                    added: true,
                    id: j.id,
                };
            }

        }
        return false;
    }

    const handleAdd = (event) => {
        event.preventDefault();

        const z =
            {name: newName, number: newNum, id: (1 + parseInt(persons[persons.length - 1].id)).toString()};
        added(newName).added
            ? window.confirm(`${newName} already in book, replace number?`)
                ?axios.put(`http://localhost:3001/persons/${added(newName).id}`,
                    {
                        id: added(newName).id,
                        name: newName,
                        number: newNum
                    }
                )
                    .then((res) => {
                        setPersons(persons.map(
                            person => person.name === res.data.name ? res.data : person
                            ))
                    })
            :null
            : phoneService
                .send(z)
                .then((res) => {
                    setPersons(persons.concat(res));
                })
    }

    const handleRemoveOf = (id) => {
        const i = parseInt(id)
        const url = 'http://localhost:3001'
        if(window.confirm('Are you sure you want to delete?')) {
        axios
            //.delete(`${url}/${id}`)
            .delete(`${url}/persons/${i}`)
            .then(res => {
                setPersons(
                    persons.filter(person => person.id !== res.data.id)
                )
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    const handlePhone = (event) => {
        event.preventDefault()
        setNewName(event.target.value);
    }

    const handleNum = (event) => {
        event.preventDefault()
        setNewNum(event.target.value);
    }

    const ListElem = ({ person, handleRemove }) => {
        return (
            <li>
                {person.name} {person.number}
                <button onClick={handleRemove}>delete</button>
            </li>
        )
    }

    const List = () => {
        const search = new RegExp(filter, 'i');
        return(
            <div>
                <ul >
                    {persons.map(person =>
                            person.name.match(search)
                                ? <ListElem person={person} key={person.id} handleRemove={() =>
                                    handleRemoveOf(person.id)
                                }/>
                                : '  '
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