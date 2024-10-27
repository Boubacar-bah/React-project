import    { useState, useEffect } from "react"


const Home1 = () => {
    const [count, setCount] = useState(0);
    const [day, setDay] = useState(["Lundi"]);

    const increment = () => {
        return setCount((c) => c + 1)
    }
    const decrement = () => {
        return setCount((c) => c - 1)
    }
    useEffect(() => {
        setDay(() => {
            let d = new Date().getFullYear();
            return d;
        });
    }, [count])
    return (
        <div className="contact">
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>
            <p>{day}</p>
        </div>
    )
};

export default Home1;