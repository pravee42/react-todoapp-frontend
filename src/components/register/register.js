import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom"
import axios from 'axios'
import styles from './register.module.css';
const server = "https://todorestapidjangoabipravi.herokuapp.com"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            registered: false,
            result: [],
        }
    };

    postData = async (e) => {
        e.preventDefault();
        let userin = false;
        await axios.get(`${server}/user/`).then((res) => {this.setState({result: res.data})})
        let data = {
            "name": this.state.username,
            "password": this.state.password
        };
        let userdata = await this.state.result.filter((data1) => data1.name.includes(this.state.username))
        if (userdata.length > 1) {
            userin = true
            alert("User Already registerd")
        }    
        else {
            await axios.post(`${server}/createuser/`, data)
           
        }
        this.setState({
            registered: true,
        })
       window.location.reload();
    }

    render() {
        return (
            <Router>
                <div className={styles.div}>
                    <form className={ styles.form_container } onSubmit={this.postData}>
                        <input className={ styles.input_box} onChange={e => this.setState({username: e.target.value})} placeholder="Username" type="text"/>
                        <input className={ styles.input_box} onChange={e => this.setState({password: e.target.value})} placeholder="Password" type="password"/>
                        <input className={styles.button} value="Register" type="submit" />
                    </form>
                </div>
                {
                    this.state.registered && <Redirect push to="/" />
                }
            </Router>
        );
    }
}

export default Register;