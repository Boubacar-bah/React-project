import { useState } from "react";

const Formulaire = () => {
        const [isAccepted, setAccepted] = useState(false);

    return (
        <div className="contact"><div className='contact center'>
            <h1>Inscription</h1>
            <form>  
                <Checkbox checked={isAccepted} onCheck={setAccepted} />
                <button disabled={!isAccepted}>Envoyer le formulaire</button>
            </form>
        </div></div>
    )
};

function Checkbox ({checked, onCheck}) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValue((values) => [...values, [name], value])
    };

    return (
        <>
            <label htmlFor="name">Entrez votre nom</label><br></br>
            <input 
                id="name"
                required
                type="text"
                name="Name"
                value={value.name}
                onChange={handleChange}
                placeholder="Nom..." />
            <br />
            <label htmlFor="country">Entrez votre Pays</label><br />
            <input 
                type="text"
                name="pays"
                value={value.pays}
                onChange={handleChange}
                id="country"
                placeholder="Pays..." />
            <br />
            <label htmlFor="e-mail">Entrez votre e-mail</label><br />
            <input 
                id="e-mail"
                name="email"
                type="email"
                value={value.email}
                onChange={handleChange}
                placeholder="E-mail..." />
            <br />
            <label htmlFor="num">Entrez votre numéro de téléphone</label><br />
            <input 
                id="num"
                name="num"
                type="number"
                value={value.num}
                onChange={handleChange}
                placeholder="N° de Téléphone..." />
            <br />
            <label>
                <input 
                    type="checkbox"
                    onChange={(e) => onCheck(e.target.checked)}
                    checked={checked} />
                    Acceter les conditions d'utilisations
            </label>
            <br />
        </>
    )
}

export default Formulaire;