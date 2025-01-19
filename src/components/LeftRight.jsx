import {useState} from "react";

const LeftRight = () => {

    const [clicks, setClicks] = useState({left: 0, right: 0});
    const [allClicks, setAll] = useState([]);
    const [total, setTotal] = useState(0);
    const [clicked, setClicked] = useState(false);


    const handleLeftClick = () => {
        setClicks({...clicks, left: ++clicks.left});
        setAll(allClicks.concat('L '));
        setTotal(clicks.left + clicks.right);
    }

    const handleRightClick = () => {
        setClicks({...clicks, right: ++clicks.right});
        setAll(allClicks.concat('R '));
        setTotal(clicks.left + clicks.right);
    }

    const setRandom = () => {
        let a = Math.round(Math.random() * 100);
        let b = Math.round(Math.random() * 100);

        setClicks({
            left: a,
            right: b
        });

        setAll(allClicks.concat('% '));
        setTotal(a + b);
    }

// eslint-disable-next-line react/prop-types
    const Button = ({handleClick, text}) =>
        <button onClick={handleClick}>
            {text}
        </button>

    const resetAll = () => {
        setClicks({left: 0, right: 0});
        setAll([]);
        setTotal(0);
        setClicked(true);
        console.log(clicked);
    }

    const History = (props) => {
        // eslint-disable-next-line react/prop-types
        if(props.allClicks.length === 0 && clicked === false){
            return (
                <div>
                    press the buttons
                </div>
            )
        }
        else{
            return (
                <div>
                    {/* eslint-disable-next-line react/prop-types */}
                    history: {props.allClicks}
                </div>
            )
        }
    }


    return(
        <div>
            {clicks.left} {clicks.right} <br/>
            <Button handleClick={handleLeftClick} text= 'left' />
            <button onClick={() => setRandom()}>random </button>
            <Button handleClick={handleRightClick} text= 'right' />
            <br/>
            <button onClick={resetAll}>reset</button>
            <br/>
            <div>
            <History allClicks={allClicks}/>
            </div>
            <br/>
            <p> total: {total} </p>
        </div>
    )
}

export default LeftRight;