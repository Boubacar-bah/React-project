import { useReducer } from "react";

function reducer (state, action) {
    if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter(todo => todo !== action.payload)
        }
    }
    if (action.type === "TOGGLE_TODO") {
        return {
            ...state,
            todos: state.todos.map(todo => todo === action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }
    if (action.type === "REMOVE_ALL") {
        return {
            ...state,
            todos:  state.todos.filter(todo => !todo.checked)
        }
    }
    return state; 
}
const Car = () => {
    const [state, dispatch] = useReducer(reducer, {
        todos: [{
            name: "Faire les courses",
            checked: false
        },{
            name: "Ranger les courses",
            checked: false
        }, {
            name: "Manger les courses",
            checked: false
        }]
    });

    return (
        <div>
            <ul>
                {state.todos.map(todo => (<li key={todo.name}
                >
                    <input type="checkbox" onChange={() => dispatch({type: 'TOGGLE_TODO', payload: todo})} checked={todo.checked} />
                    {todo.name} 
                    <button onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})}>Effacer</button>
                    </li>))}
            </ul>
            <button onClick={() => dispatch({type: "REMOVE_ALL", payload: state.todos})}>Clean checked tasks</button>
        </div>
    )
};


export default Car;