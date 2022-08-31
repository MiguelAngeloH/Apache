import React,{Component}from "react";
class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesion</button>
    }
}
class LogoutButton extends Component{
    render(){
        return(
             <div>
                <p>Bienvenido, User!</p>
                <button>Close Session</button>
             </div>
        )
    }
}
//function useConditionalRendering(mostrarA){
  //  if (mostrarA) {
    //    return <ComponenteA />
   // }
   // return <ComponenteB />
//}

export default class ConditionalSection extends Component{
 constructor(){
    super()
    this.state ={isUserLogged:false}
 } 
    render(){
    
        return(
            <div>
            <h4>Condicional renderizado</h4>
            {this.state.isUserLogged 
        ? <LogoutButton/>
        :<LoginButton/>}
            
            </div>
        )
    }
}
//<ComponenteA/>
//<ComponenteB/>


