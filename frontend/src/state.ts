const API_BASE_URL = "http://localhost.3000";

import {rtdb} from "../src/realdatabase"

type Message = {
    from: String;
    message: String,
}

const state = {
    data : {
        nombre: "",
        messages: []
    },
    listeners: [],

    /* 3 */initListener(){
        const chatroomRef = rtdb.ref("/chatrooms/")
        const currentState = this.getState();
        console.log("este current state funciona", currentState)
        chatroomRef.on("value",(snapshot)=>{
            const serverMessages = snapshot.val();
            console.log("los mensajs del servidor", serverMessages)
            
        })
    },

    getState(){
        return this.data;
    },

    setNombre(nombre: string){
        const currentState = this.getState();
        currentState.nombre = nombre;
        this.setState(currentState)
    },

   /*  2 */pushMessage(/* 5 */message: String){
    const nombreEnState = this.data.nombre
        fetch(API_BASE_URL+"/messages",{
            method: "post",
            body: JSON.stringify({
                nombre: nombreEnState,
                message: message,
            })
        });
    },

    setState(newState){
        this.data = newState;
        for (const cb of this.listeners){
            cb();
        }
    },

    suscribe(callback:(any)=> any){
        this.listeners.push(callback)
    }

};

export {state};

/* 2. el push message va a mandar al backend el mensaje nuevo, y nuestro backend
va a devolver la respuesta no con la promesa sino con firebase */
/* 3. tenemos que darle el permiso en la bd para que escriba los mensajes, sino no va a imprimir nada
5. no vamos a recibir un message: type message, sino el mensaje de tipo string */