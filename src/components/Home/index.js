import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";

import RecipeList from "../RecipeList";
import NewRecipeModal from "../NewRecipeModal";
import TimeToDisplayModal from "../TimeToDisplayModal";
import { API_ROOT } from "../../constants";

class Home extends Component {
    state = {
        timeToDisplay: "",
        recipes: []
    };

    componentDidMount() {
        this.resetState();
    }

    getRecipes = () => {
        axios.get(API_ROOT).then(res => this.setState({ recipes: res.data}));
    };

    handleTimeButtonClick(value) {
        this.setState({ timeToDisplay: value})
    };

    resetState = () => {
        this.getRecipes();
    };

    render() {
        return(
            <Container style={{marginTop: "20px"}}>
                <div className="row sml-buffer"></div>
                    <h5>How long do you have to cook? </h5> 
                <div className="row mdm-buffer"></div>
                <Row>
                    <Col>
                    <TimeToDisplayModal
                        handleTimeButtonClick={this.handleTimeButtonClick.bind(this)}
                        resetState={this.resetState}
                    />
                    </Col>
                </Row>
                <div className="row mdm-buffer"></div>
                <Row>
                    <Col>
                    <RecipeList
                        timeToDisplay={this.state.timeToDisplay}
                        recipes={this.state.recipes}
                        resetState={this.resetState}
                    />
                    </Col>
                </Row>
                <div className="row mdm-buffer"></div>
                <Row>
                    <Col>
                    <NewRecipeModal
                        create={true}
                        resetState={this.resetState}
                    />
                    </Col>
                </Row>
                <div className="row lrg-buffer"></div>
                <div className="row lrg-buffer"></div>
            </Container>
        );
    }
}

export default Home;