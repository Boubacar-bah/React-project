const askim = <img src="..src/parts/images/askim.png" alt="askim"/>
const mane = <img src="./images/mane.jpg" alt="Mane" />
const amie = <img src="./images/amie.jpg" alt="Amie" />
const ibrahima = <img src="./images/ibrahima.jpg" alt="Ibrahima"/>
const malick = <img src="./images/malick.png" alt="Malick"/>
const algass = <img src="./images/algass.jpg" alt="Algass" />
const djambata = <img src="./images/djambata.jpg" alt="Djambata" />
const alimou = <img src="./images/alimou.png" alt="Alimou" />
const mariam = <img src="./images/mariam.png" alt="Mariam" />
const tite = <img src="./images/tite.jpg" alt="Tite" />
const mamadou = <img src="./images/mamadou.jpg" alt="Mamadou" />
const boubou = <img src="./images/boubou.jpg" alt="Boubou" />
const fall = <img src="./images/fall.png" alt="Fall" />
const boubacar = <img src="./images/boubacar.jpg" alt="Boubacar" />

const User = [
    {name: 'Askim', message: "Salut mon amour", photo: askim, time: "22:23", id: 1},
    {name: 'Mané', message: "Merci pour le compliment", photo: mane, time: "15:02", id: 2},
    {name: "Une amie", message: "Bonjour weldi an", photo: amie, time: "00:10", id: 3},
    {name: "Ibrahima", message: "Salut frère tu vas bien ?", photo: ibrahima, time: "07:27", id: 4},
    {name: "Malick", message: "je ne comprens pas deh", photo: malick, time: "10:08", id: 5},
    {name: "Algass Mendez", message: "Bro, t'es allé à l'école ?", photo: algass, time: "14:23", id:6},
    {name: "Djambata", message: "Salut féetougal", photo: djambata, time: "01:00", id: 7},
    {name: "Alimou", message: "Petit cv bien", photo: alimou, time: "18:10", id: 8},
    {name: "Mariama", message: "Sticker", photo: mariam, time: "20:22", id: 9},
    {name: "Tite Soeur", message: "je suis rentrée", photo: tite, time: "23:59", id: 10},
    {name: "Mamadou", message: "Vocal : 0:11", photo: mamadou, time: "04:44", id: 11},
    {name: "Boubou", message: "Comment ça va ?", photo: boubou, time: "16:00", id: 12},
    {name: "Ahmed Fall", message: "Imam kayfal oumour", photo: fall, time: "14:11", id: 14},
    {name: "Boubacar", message: "Ya cheikh kayfa haalouka", photo: boubacar, time: "23:13", id: 13}
]


const Home = () => {
    return (
        <div>
            {User.map(user => <div className="container" key={user.id}>
                <div className="photo" key={user.photo}>{user.photo}</div>
                <div className="name" key={user.name}>{user.name}</div>
                <div className="message" key={user.message}>{user.message}</div>
                <div className="time" key={user.time}>{user.time}</div>
            </div>)}
        </div>
    )
}

export default Home;