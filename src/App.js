import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card } from "react-bootstrap";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      contador: 0,
    };

  }
  onAutoIncremento() {
    alert("OK");
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      soma: this.state.num1 + this.state.num2
    })
  }

  render() {
    return (
      <div className="App">
        Menu superior
        <Container>
          <Row>
            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card 01</Card.Title>
                  <Card.Text>
                    Conteudo
                                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={9}>Conteudo Central</Col>
            <Col sm={3}> Conteudo Lateral </Col>
          </Row>
        </Container>
        <form>
          <label>Num1</label>
          <input type="text" name="num1"
            value={this.state.num1}
            onChange={e => this.handleChange(e)}
          /><p></p>
          <label>Num2</label>
          <input type="text" name="num2"
            value={this.state.num2}
            onChange={e => this.handleChange(e)}
          /><p></p>
          <button onClick={(e) => this.onSubmit(e)}>Calc</button><p></p>
          <b>{this.state.soma}</b>
        </form>
        <b>{this.state.num1}</b>
        <b>{this.state.num2}</b>
        <h2 style={styleDiv}> teste JSX</h2>
        <DivExemplo />
        <DivExemplo02 />

        <button onClick={this.onAutoIncremento}> Clique Aqui</button>
        <Clock date={new Date()} />
        <Blog posts={posts} />
      </div>
    );
  }
}
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2>Horário {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
const styleDiv = {
  backgroundColor: 'green',
  color: 'blue',
}

class DivExemplo02 extends Component {
  render() {
    return (
      <h2 className="Componente02">Componente 02</h2>
    );
  }
}

const DivExemplo = (props) => (
  <h3 className="Componente01"> Componente 01 {props.title}</h3>
);


class Blog extends Component {
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}

const posts = [
  { id: 1, title: 'Titulo 01', content: 'Conteudo 01!' },
  { id: 2, title: 'Titulo 02', content: 'Conteudo 02' }
];

export default App;