import React, { Component } from "react";
import { Table } from "reactstrap";
import Emoji from "./Emoji";
import NewRecipeModal from "./NewRecipeModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import IndividualViewModal from "./IndividualViewModal";

class RecipeList extends Component {
    render() {
        const { recipes } = this.props;
        const { timeToDisplay } = this.props;
        var filteredRecipes = [];

        if (timeToDisplay === 'Show me everything') {
            filteredRecipes = recipes
        } else {
            filteredRecipes = recipes
            .filter(r => r.time_category === timeToDisplay)  
        }

        return(
            <Table className = "borderless" size = "sm"  style={{width: "75%", margin: "auto"}}>
            <thead>
            {!filteredRecipes || filteredRecipes.length <= 0 ? (
                <tr>
                </tr>
            ) : (
                <tr>
                    <th>Meal</th>
                    <th>Time Category</th>
                    <th></th>
                </tr>
            )}
            </thead>
            <tbody>
                {(!filteredRecipes || filteredRecipes.length <= 0) && timeToDisplay !== "" ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>No recipes here yet </b><Emoji symbol="🥜" label="food bowl"/>
                        </td>
                    </tr>
                ) : (
                    filteredRecipes.map(filteredRecipe => (
                        <tr key={filteredRecipe.pk}>
                            <td>{filteredRecipe.name}</td>
                            <td>{filteredRecipe.time_category}</td>
                            <td align="center">
                                <IndividualViewModal
                                recipe={filteredRecipe}
                                resetState={this.props.resetState}
                                />
                                &nbsp;&nbsp;
                                <NewRecipeModal
                                create={false}
                                recipe={filteredRecipe}
                                resetState={this.props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmDeleteModal
                                recipe={filteredRecipe}
                                resetState={this.props.resetState}
                                />
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
            </Table>
        );
    }
}

export default RecipeList;