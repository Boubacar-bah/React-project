import {createContext, useContext, useState} from 'react';
/*const PRODUCT = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    { category: "Vegetables", price: "$4", stocked: false, name: "Ponpin"},
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
]*/
const userContext = createContext();

const Lists = () => {

    const [name, setName] = useState("Amina Mané");

    function ChangeName () {
        setName("Mané Diallo")
    }
    return (
        <userContext.Provider value={name}>
            <div className='contact'>
                <Test />
                <h1>Salut ma meilleure amie {name} !</h1>
                <button onClick={ChangeName}>Changer le nom</button>
            </div>
        </userContext.Provider>
    )
}

function Test () {
    const context = useContext(userContext);
    return (
        <>
            <h1>Bonjour {context} !</h1>
        </>
    )
}

export default Lists;