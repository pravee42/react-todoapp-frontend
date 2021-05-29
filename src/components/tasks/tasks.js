import React, { Component } from 'react';
import Deleteiconsvg from './delete_svg_icon'
import axios from 'axios'
import styles from './tasks.module.css';
const server = "https://todorestapidjangoabipravi.herokuapp.com"

class tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            username: "",
        }
    };

    getUser = () => {
        const user = sessionStorage.getItem("login");
        this.setState({
            username: user
        })
    }


    getData = async() => {
        await axios.get(`${server}/list/`).then((res) => {
            this.setState({ Data: res.data})
        })
        let data = this.state.Data;
        let userdata = await data.filter((data0) => data0.user.includes(this.state.username))
        let exactData = await userdata.filter((data1) => data1.category.includes(this.props.category))
        this.setState({
            Data: exactData
        })
    };


    deleteTask = (data) => {
        axios.delete(`${server}/delete/${data}/`).then((res) => this.getData())
    }

    componentDidMount() {
        this.getUser();
        this.getData();
    }

    render() {
        return (
            <>
            {
                this.state.Data.map((data) => {
                return (
                    <div key={data.id} className={styles.task}>
                        <p className={styles.task_data}>{data.task}</p>
                        <button className={styles.button_style} onClick={e => this.deleteTask(data.id)}><Deleteiconsvg /></button>
                    </div>
                )
                })
            } 
            </>
        );
    }
}

export default tasks;