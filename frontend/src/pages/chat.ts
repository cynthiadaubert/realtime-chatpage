type Message = {
    from: String;
    message: String,
}

class ChatPage extends HTMLElement{

    connectedCallback (){
        this.render()
        const form = this.querySelector(".submit-message") ;
        form!.addEventListener("submit", (e)=>{
            e.preventDefault()
            const target = e.target as any
            console.log(target["new-message"].value)
        })
    }

    messages: Message[] = []; /* <--1
 */
    render() {
        this.innerHTML = `

        <div class="container">
            <h1>Chat</h1>
            <div class="chat">
                ${this.messages.map(messag=>{
                    return `<div class="mensaje">${messag.from}:${messag.message}</div>`
                })}
            </div>
            <form class="submit-message">
                <input type="text" name="new-message">
                <button>Enviar</button>
            </form>
        </div>
        
        `;
    }
}

customElements.define("chat-page", ChatPage)

/* 1. tiene que arrancar como un array vacio, sino el map va a dar error */