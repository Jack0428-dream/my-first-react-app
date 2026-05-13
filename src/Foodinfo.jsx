import breadImg from "./assets/painauchocolat.jpg"

function Foodinfo() {
    return(  
    <>
        <h1>My Favorite Food</h1>

        <img src={breadImg} alt="" />

        <h3>Best Pain-au-Chocolat Place in Paris</h3>
        <ol>
            <li>Blangerie Julien</li>
            <li>La Maison d'Isabelle</li>
            <li>Du pain et des idées</li>
            <li>Blé Sucré</li>
            <li>La couleur des Blés</li>
        </ol>
    </>
    )

}

export default Foodinfo