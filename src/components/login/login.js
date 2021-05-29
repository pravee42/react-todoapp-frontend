import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Redirect } from "react-router-dom"
import styles from './login.module.css';
const server = "https://todorestapidjangoabipravi.herokuapp.com"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            username: "",
            password: "",
            loggedin: false,
        }
    };

    getData = async (e) => {
        e.preventDefault();
        await axios.get(`${server}/user/`).then((res) => {
            this.setState({ userData: res.data })
        });
        this.state.userData.map((data) => {
            if (this.state.username === data.name && this.state.password === data.password) {
                sessionStorage.setItem("login", this.state.username)
                this.setState({
                    loggedin: true
                })
                window.location.reload();
            }
        })
        if (sessionStorage.getItem("login") === null) {
            alert("Login Faild!!!")
        }
    };


    render() {
        return (
            <Router>
                <div className={styles.div}>
                    <form className={ styles.form_container } onSubmit={this.getData}>
                        <input className={ styles.input_box} onChange={e => this.setState({username:    e.target.value})} placeholder="Username" type="text"/>
                        <input className={ styles.input_box} onChange={e => this.setState({password: e.target.value})} placeholder="Password" type="password"/>
                        <input className={styles.button} value="Login" type="submit" />
                        <a className={ styles.button } href="/register">New To Abipravi- Tasks : Resigter</a>
                    </form>
                    {
                        this.state.loggedin && <Redirect push to="/addtodo" />
                    }
                </div>
            </Router>
        );
    }
}

export default Login;