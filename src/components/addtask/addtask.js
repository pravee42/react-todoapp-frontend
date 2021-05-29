import React, { Component } from 'react';
import axios from 'axios'
import styles from './addtask.module.css'
const server = "https://todorestapidjangoabipravi.herokuapp.com"

class Addtask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            todo: "",
            category: "",
        };
    }

    getUser = () => {
        const user = sessionStorage.getItem("login");
        this.setState({
            username: user
        })
    }

    addTodo = async () => {
        let data = {
            "user": this.state.username,
            "task": this.state.todo,
            "category": this.state.category
        }
        await axios.post(`${server}/create/`, data)
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <div className={styles.div1}>
                <div className={styles.div}>
                    <input type="text"
                        onChange={e => this.setState({ todo: e.target.value })} placeholder="Task Name" className={styles.input_box} />
                    <select
                        onChange={e => this.setState({ category: e.target.value })} className={styles.option_list}>
                        <option className={styles.option}>select option</option>
                        <option className={styles.option}>work</option>
                        <option className={styles.option}>personal</option>
                        <option className={styles.option}>trip</option>
                        <option className={styles.option}>other</option>
                    </select>
                    <button
                        style={{ 'margin': '30px 0 0 10px', 'outline': 'none', 'padding': '3px', 'cursor': 'pointer' }}
                        onClick={this.addTodo}
                    >
                    Add Task +</button>
                </div>
            </div>
        );
    }
}

export default Addtask;