import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export default function Header(){
    return(

        <>
        <header className={styles.Header}>
            <div>
              DevMax Solutions  
            </div>
       
            <nav>
             <Link to="/Contato">Contato</Link>
             <Link to="/Sobre">Sobre</Link>
             
            </nav>
       
        </header>
        
        </>
    )
}