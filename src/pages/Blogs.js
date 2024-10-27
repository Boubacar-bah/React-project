import { useEffect, useState } from "react";

const Blogs = () => {
    const [input, setInput] = useState(5);
    const [count, setCount] = useState(20);

    useEffect(() => {
        setCount(input)
        const timer = setInterval(() => {
            setCount(counter => counter - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [input]) 

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const calcul = (c) => c / 60;
    return (
        <div className="contact">
            <form>
                <input 
                    type="number"
                    value={input}
                    onChange={handleChange} />
            </form>
            <div>
                <p>Champs de saisie à rebours : {count} <br></br> {calcul(1000)}</p>
            </div>
        </div>
    )
};

export default Blogs;