import React from 'react';
import Table from 'react-bootstrap/Table';

function MesAnimaux(props) {
    return (
        <Table striped bordered hover key={props.clef}>
        <thead>
          <tr>
            <th>id</th>
            <th>Animal</th>
            <th>Caractéristique</th>
            <th>Origine</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.Nom}</td>
            <td>{props.Caracteristique}</td>
            <td>{props.Origine}</td>
          </tr>
        </tbody>
      </Table>
    );
}

export default MesAnimaux;