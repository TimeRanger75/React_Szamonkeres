import { Component, ReactNode } from "react";

interface State{
    name:string;
    date:Date;
    description:string;
}

export default class Contact extends Component<{}, State>{
    constructor(props:{}){
        super(props)
        this.state={
            name:"",
            date: new Date(),
            description:""
        }
    }

    thanks=()=>{
        alert("Köszönjük a foglalást")
        this.setState({
            name:"",
            description:"",
            date: new Date(Date.now())

            })
    }




    render(): ReactNode {
        const{name, description}=this.state;
        return <div>
            <h1>Lépjen velünk kapcsolatba</h1>
            <div>
                <form>
                <p>Név</p>
                <input type="text" value={name} onChange={e=> this.setState({name: e.currentTarget.value})} required />
                <p>Dátum</p>
                <input type="date"  onChange={e=> this.setState({date: new Date(e.currentTarget.value)})} required />
                <p>Leírás</p>
                <textarea value={description} onChange={e=> this.setState({description: e.currentTarget.value})} required></textarea>
                <br />
                <button type="submit">Foglalas</button>
                </form>
            </div>
        </div>
    }
}