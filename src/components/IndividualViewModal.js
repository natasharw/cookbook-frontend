import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import IndividualView from "./IndividualView";

class IndividualViewModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal 
        }));
    };

    render() {
        var title = this.props.recipe.name;
        var button = <Button color="info" size="sm" onClick={this.toggle}>
            View Recipe Details
        </Button>

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> {title} </ModalHeader>
                <ModalBody>
                    <IndividualView
                        resetState={this.props.resetState}
                        toggle={this.toggle}
                        recipe={this.props.recipe}
                    />
                </ModalBody>
              </Modal>
            </Fragment>
            
        );
    }
}

export default IndividualViewModal;