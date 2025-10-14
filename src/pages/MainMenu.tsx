import MenuButton from "../components/MenuButton";
import "./MainMenu.css";

export default function MainMenu() {
    return(

        <div className="menu-container">
            <div className="menu-banner">
                <img src="../assets/hiphop.png" alt="Cauquita Racer" className="banner-img"/>
                <h1 className="menu-title">Cauquita Racer</h1>


            </div>
            <div className="menu-buttons">

                <MenuButton icon="/assets/play-icon.png" text="JUGAR" onClick={() => console.log("Iniciar juego")} />
                 <MenuButton icon="/assets/options-icon.png" text="OPCIONES" onClick={() => console.log("Abrir opciones")} />
                <MenuButton icon="/assets/exit-icon.png" text="SALIR" onClick={() => console.log("Salir del juego")} />

            </div>


        </div>
    );
}