import {Router} from "@vaadin/router"
import { state } from "../state";
 
class Home extends HTMLElement{
    connectedCallback(){
        this.render();
        const form = document.querySelector(".form") ;
       form!.addEventListener("submit", (e)=>{
            e.preventDefault()
            const target = e.target as any
            console.log(target.nombre.value)
           /* 4 */ state.setNombre(target.nombre.value)
            Router.go("/chat")
        })
    }
    render() {
        this.innerHTML = `
        <h1>Bienvenido</h1>
        <form class="form">
            <div><label>Tu nombre</label></div>
            <input type="text" name="nombre">
            <button>Comenzar</button>
        </form>
        `;
    }
}

customElements.define("home-page", Home)

/* 4. Todo lo que sean datos no va a ser manejado por los componentes, sino que ellos le informan 
al state y este los vuelve a informar de los cambios. Guardamos el nombre que nos pasaron en el formulario, para que en el segundo paso
lo tengamos accesible y podamos mandar al servidor un mensaje que tenga el nombre */