import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const req = axios.get(baseUrl);
    const nonExisting = {
        id: 10000,
        content: 'note does not exist',
        important: true
    }
    return req.then(res => res.data.concat(nonExisting))
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject);
    return req.then(res => res.data);
}

const update = (id, newObject) => {
    return(
        axios
        .put(`${baseUrl}/${id}`, newObject)
            .then(response => response.data)
        .catch(err => {
            console.log(err)
        }))
}

export default {
    getAll,
    create,
    update
}