import { useState } from 'react'

const Feedback = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [avg, setAvg] = useState(0)
    const [positive, setPositive] = useState(0)

    const Rate = (props) => {
        const i = (good-bad)/(good + bad + neutral);
        setAvg(i);
        const p = (good)/(good + bad + neutral);
        setPositive(p);
        return(
            <button onClick={() => props.setVal(props.val + 1)}>{props.display}</button>
        )
    }
    const Stat = (props) => <div> {props.display}: {props.stat} </div>


    const StatDisplay = () =>{
        switch(good + neutral + bad){
            case 0:
                return (
                    <div>
                        no feedback given
                    </div>
                )
            default:
                return (
                    <div>
                        <br/>
                        <table style={{width: '30%', margin: 'auto'}}>
                            <tbody>
                            <tr key={good}>
                                <td> good </td>
                                <td> {good} </td>
                            </tr>
                            <tr>
                                <td> neutral </td>
                                <td> {neutral} </td>
                            </tr>
                            <tr>
                                <td> bad </td>
                                <td> {bad} </td>
                            </tr>
                            <tr>
                                <td> average </td>
                                <td> {avg} </td>
                            </tr>
                            <tr>
                                <td> positive </td>
                                <td> {positive} </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
        }
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Rate val = {good} setVal = {setGood} display = 'good'></Rate>
            <Rate val = {neutral} setVal = {setNeutral} display = 'neutral'></Rate>
            <Rate val = {bad} setVal = {setBad} display = 'bad'></Rate>
            <br/>
            <StatDisplay/>
            </div>
    )
}

export default Feedback