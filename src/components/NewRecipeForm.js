import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_ROOT } from "../constants";

class NewRecipeForm extends Component {
    state = {
        pk: 0,
        name: "",
        time_category: "",
        recipe_detail: ""
    };

    componentDidMount() {
        if (this.props.recipe) {
            const { pk, name, time_category, recipe_detail } = this.props.recipe;
            this.setState({ pk, name, time_category, recipe_detail })
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    createRecipe = e => {
        e.preventDefault();
        axios.post(API_ROOT, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editRecipe = e => {
        // e.preventDefault();
        axios.put(API_ROOT + this.state.pk, this.state)        
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
        };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.recipe ? this.editRecipe : this.createRecipe}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Time Category</Label>
                    <Input
                        type="select"
                        name="time_category"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.time_category)}
                        >
                    <option value=""></option>
                    <option value="10 minutes">10 minutes</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="1 hour">1 hour</option>
                    <option value="2 hours +">2 hours +</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                <Label for="name">Recipe Text</Label>
                <Input
                    type="textarea"
                    name="recipe_detail"
                    rows="10"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.recipe_detail)}
                    />
            </FormGroup>
            <Button> Done </Button>
            </Form>
        );
    }
}

export default NewRecipeForm;