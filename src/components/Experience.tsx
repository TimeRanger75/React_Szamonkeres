import { Component, ReactNode } from "react";
import './style.css'

export default class Experience extends Component{
    render(): ReactNode {
        return <div className="centered">
            <h1>Szakmai tapasztalat</h1>
            <h4>Pro-bono bulik</h4>
            <ul>
                <li>Csibeavató, 2021.08.31</li>
                <li>Karácsonyi bál, 2021.12.22</li>
                <li>Farsangi mulatság, 2022.02.20</li>
            </ul>
            <img src={require('./petrik.jpg')} className="rounded petrik"   alt="Petrik" />
            <h4>Professzionális bulik</h4>
            <ul>
                <li>Tanárkarácsony, 2021. 12. 20.</li>
                <li>Ballagás, 2022. 04. 30.</li>
            </ul>
            
        </div>
    }
}