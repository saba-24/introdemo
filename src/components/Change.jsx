import {useState} from "react";

const Display = ({scounter}) => <div>{scounter}</div>
const [counter, setCounter] = useState(0);
const r = () => setCounter(Math.floor(Math.random() * 100));
const increment = () => {setCounter(counter + 1)};
const decrement = () => {setCounter(counter - 1)};

const Increment = (props) => {
    return (
        <div>
            <button onClick={props.increment} title={'plus'}>plus</button>
        </div>
    )
}

const Decrement = (props) => {
    return (
        <div>
            <button onClick={props.decrement} title={'minus'}>minus</button>
        </div>
    )
}

const Random = (props) => {
    return (
        <div>
            <button onClick={props.r} title={'random'}>random</button>
        </div>
    )
}

const Change = (props) => {
    return (
        <div>
            <Increment increment={props.increment}/>
            <Decrement decrement={props.decrement}/>
            <Random r = {props.random}/>
        </div>
    )
}

export default Change;