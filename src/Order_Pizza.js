import React, { Component } from 'react';
import axios from 'axios';

export default class OrderPizza extends Component {

    constructor() {
        super();
        this.state = { pizza: [] }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/pizza")
            .then(response => this.setState({ pizza: response.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
            <div class="container">
            <div class="row">
            {
                this.state.pizza.map((pizza,key)=>
                <div key={key} className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <h4>{pizza.name}</h4>
                                        <div>
                                        <p>{(pizza.type ==="veg"?<img src="https://img.icons8.com/fluent/48/000000/vegetarian-food-symbol.png" alt="veg" height="30px"></img>:
                                <img src="https://img.icons8.com/fluent/48/000000/non-vegetarian-food-symbol.png" alt="nonveg" height="30px"></img> )}</p>
                                        </div>
                                        <br/><br/>
                                        <h3>₹{pizza.price}</h3>
                                    </div>
                                    <div className="col-5">
                                        <p>
                                            {pizza.description}
                                        </p>
                                        <p>
                                            <b>Ingredients: </b> {pizza.ingredients.join(', ')}
                                        </p>
                                        <p>
                                            <b>Topping: </b> {pizza.topping.join(', ')}
                                        </p>
                                    </div>
                                    <div className="col-4">
                                        <img src={pizza.image} alt="" width="100%" /> <br/><br/>
                                        <center><p><button className="btn btn-warning Add">Add to Cart</button></p></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            </div>
            </>
        )
    }
}
