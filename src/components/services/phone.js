import axios from "axios";
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(url)
   return req.then(res => {
        return res.data;
    })
}

const send = (person) => {
    const req = axios.post(url, person)
        return req.then(res => {
            return res.data;
        })
}

export default {
    getAll,
    send
}