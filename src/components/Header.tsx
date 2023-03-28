import { Component, ReactNode } from "react";
import { Container, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component{
    render(): ReactNode {
        return <header>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Navigáció</Navbar.Brand>
                    <NavLink to="/">Főoldal</NavLink>
                    <NavLink to="/tapasztalat">Szakmai tapasztalat</NavLink>
                    <NavLink to="/idopont">Időpontfoglalás</NavLink>
                </Container>
            </Navbar>
        </header>
    }
}