import { Component, ReactNode } from "react";
import './style.css'

export default class Main extends Component{
    render(){
        return <main>
            <h1>Üdvözöllek a DJ Petrik weboldalán!</h1>
            <h2> Válassz a fenti lehetőségek közül!</h2>
            <img src={require('./dj.jpg')} className='main' alt="DJ Petrik" />
        </main>
    }
}