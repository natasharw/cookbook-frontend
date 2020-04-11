import React, { Component } from "react";
import { Card, CardText } from "reactstrap";

class IndiviudalView extends Component {
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

    render() {
        return (
            <Card>
                <CardText>{this.state.recipe_detail}</CardText>
            </Card>
        );
    }
}

export default IndiviudalView;