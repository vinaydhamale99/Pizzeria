import React, { Component } from 'react';
import axios from 'axios';
import './Build_Ur_Pizza.css';

export default class BuildUrPizza extends Component {

    constructor() {
        super();
        this.state = { ingredients: [],total:0 }
    }
    handleOnChange = (check, price) => {
        //console.log(check)
        if (check) {
            this.setState({
                total: this.state.total + price
            })
        }
        else {
            this.setState({
                total: this.state.total - price
            })
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/ingredients")
            .then(response => this.setState({ ingredients: response.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div class="container">
                <center><p>Pizzeria now gives you options to build your own pizza.
                    Customize your pizza by choosing ingredients from the list give below.
                </p></center>
                <div class="card card1">
                <div class="card-body">
                    <div class="table-container">
                    <table className="table table-striped table-bordered mb-0">
                        <tbody>
                            {this.state.ingredients.map((item, key) => <tr key={key}>
                                <td><img src={item.image} alt="" height="100" width="130px"></img></td>
                                <td><b>{item.tname}</b></td>
                                <td><b>₹{item.price}</b></td>
                                <td><input type="checkbox" value="Add" onChange={(e)=>this.handleOnChange(e.target.checked,item.price)}></input><label>Add</label></td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                    </div>
                    <h5 class="total"><strong>Total Cost: {this.state.total}</strong></h5>
                    <center><button type="button" className="btn btn-dark">Build Ur Pizza</button></center>
                </div>
                </div>           
            </div>
        )
    }
}
