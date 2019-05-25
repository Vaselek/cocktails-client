import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {createCocktail} from "../store/actions/cocktailsActions";

class NewCocktail extends Component {
    state = {
        title: '',
        recipe: '',
        ingredients: [{name: '', qty: '', key: Math.random().toString()}]
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            key === 'ingredients' ? formData.set(key, JSON.stringify(this.state.ingredients)) : formData.append(key, this.state[key]) ;
        });

        this.props.createCocktail(formData).then(() => {
            console.log(formData.ingredients)
            this.props.history.push('/');
        });
    }


    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    addIngredient = (e) => {
        this.setState({
            ingredients: [
                ...this.state.ingredients,
                {name: '', qty: '', key: Math.random().toString()}
            ]
        })
    }

    removeIng = (idx) => {
        const ings = [...this.state.ingredients]
        ings.splice(idx, 1)
        this.setState({
            ingredients: ings
        })
    }

    ingredientInputChangeHandler = (e, idx) => {
        const ingredient = {...this.state.ingredients[idx]}
        ingredient[e.target.name] = e.target.value
        const ingredients = [...this.state.ingredients]
        ingredients[idx] = ingredient
        this.setState({ingredients});
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup row>
                    <Label sm={2} for="category">Title</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="title" id="title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="receipt">Recipe</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea"
                            name="receipt" id="receipt"
                            value={this.state.receipt}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                Ingredients:
                {this.state.ingredients.map((ing, idx) => (
                    <div key={ing.key}>
                        <FormGroup row>
                            <Label sm={{offset: 2, size: 2}} for="receipt">Name</Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="name" id="name"
                                    onChange={(e)=>this.ingredientInputChangeHandler(e, idx)}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={{offset: 2, size: 2}} for="receipt">Qty</Label>
                            <Col sm={8}>
                                <Input
                                    type="text"
                                    name="qty" id="qty"
                                    onChange={(e)=>this.ingredientInputChangeHandler(e, idx)}
                                />
                            </Col>
                        </FormGroup>

                        {idx > 0 &&
                        (<FormGroup row>
                            <Col sm={{offset:4, size: 8}}>
                                <Button onClick={()=>this.removeIng(idx)} type='button'>Delete</Button>
                            </Col>
                        </FormGroup>)}
                    </div>
                ))}
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type='button' onClick={this.addIngredient}>Add ingredient</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit">Create</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    createCocktail: cocktailData => dispatch(createCocktail(cocktailData)),
});

export default connect(null, mapDispatchToProps)(NewCocktail);

