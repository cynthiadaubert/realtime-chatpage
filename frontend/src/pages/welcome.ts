import {Router} from "@vaadin/router"
 
class Home extends HTMLElement{
    connectedCallback(){
        this.render();
        const form = document.querySelector(".form") ;
       form.addEventListener("submit", (e)=>{
            e.preventDefault()
            const target = e.target as any
            console.log(target.nombre.value)
            Router.go("/chat")
        })
    }
    render() {
        this.innerHTML = `
        <form class="form">
            <div><label>Tu nombre</label></div>
            <input type="text" name="nombre">
            <button>Comenzar</button>
        </form>
        `;
    }
}

customElements.define("home-page", Home)