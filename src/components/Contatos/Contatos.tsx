import { Component } from "react";

class Contatos extends Component<any> {
  render() {
    return (
      <div>
        <p>Nome: {this.props.nome}</p>
        <p>
          Numero: <strong>{this.props.numero}</strong>
        </p>
      </div>
    );
  }
}

export default Contatos;
