import { useState } from 'react'

const Anecdote = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const [selected, setSelected] = useState(0)

    const vUpdate = (currentValue, index) => {
        if(index === selected){
            return currentValue + 1;
        }
        else {
            return currentValue;
        }
    }

    const Vote = () => {
        console.log(votes)
        const copy = [...votes]

        return (
            <div>
                <p> has {votes[selected]} votes </p>
                <button onClick={() => setVotes(copy.map((currentValue, index) => vUpdate(currentValue, index), ))}> vote </button>
            </div>
        )
    }

    const Top = () => {
        const i = votes.indexOf(Math.max(...votes));
        console.log(i);
        return (
            <div>
                <h3>Top anecdote</h3>
                <p> {anecdotes[i]} </p>
            </div>
        )
    }

    return (
        <div>
            <h2> Anecdote of the day </h2>
                {anecdotes[selected]}
            <br/>
                <Vote/>
                <button onClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))}> randomize</button>
                <Top/>
        </div>
        )

}

export default Anecdote