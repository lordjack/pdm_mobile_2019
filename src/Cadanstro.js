import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './App.css';

class Cadastro extends Component {
  constructor(args) {
    super(args)
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      country: '',
      email: '',
      password: '',
      redirect: false
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  chamaLogin = () => {
    this.setState({
      redirect: true
    })
  }
  render() {

    if (this.state.redirect) {
      return <Redirect to="/login/" />
    } else {
      return (
        <div className="login-page">
          <div className="form">

            <form className="register-form">
              <h1>Cadastro</h1>
              <div className="firstName">
                <label htmlFor="firstName"> Nome </label>
                <input value={this.state.firstName} onChange={this.onChange.bind(this)} name="firstName" id="firstName" type="text"></input>
              </div>
              <div className="creatAccount">
                <button type="submit"
                  onClick={() => this.chamaLogin()}
                >Cadastrar</button>
              </div>

            </form>
          </div>
        </div>
      );
    }
  }
}
export default Cadastro;