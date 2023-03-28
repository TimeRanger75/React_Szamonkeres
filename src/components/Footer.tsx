import { Component, ReactNode } from "react";
import './style.css'

export default class Footer extends Component{
    render(): ReactNode {
        return <footer>
            <p className="footer">Készítette Várszegi Ádám</p>
        </footer>
    }
}