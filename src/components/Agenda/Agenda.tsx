import { Component } from 'react'
import Contato from '../Contatos/Contatos'

class Agenda extends Component<any> {

  state = {
    array: [ { nome: 'Maria', numero: '3232-3444'}, {nome: 'Lara', numero: '3030-2334'} ],
    mostraAgenda: false
  } 

  mostraAgenda = () => {
    this.setState(
      { mostraAgenda: true }
    ) 
  }

  render() {
    return (
      <div>
        {
          this.state.mostraAgenda && this.state.array.map((n: any) => (
            <Contato nome={n.nome} numero={n.numero} key={n.numero}/>
          ))
        }
        <button onClick={this.mostraAgenda}>Contatos</button>
      </div>
    )
  }
}

export default Agenda