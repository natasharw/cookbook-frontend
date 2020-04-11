import React, { Component, Fragment } from "react";
import { Button, Modal, ButtonToolbar, ButtonGroup } from "reactstrap";

class TimeToDisplayModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        var button1 = <Button
            color="info"
            onClick={this.props.handleTimeButtonClick.bind(this,"10 minutes")}
            style={{ minWidth: "200px" }}
        >
        10 minutes</Button>

        var button2 = <Button
            color="info"
            value="30 minutes"
            className="float"
            onClick={this.props.handleTimeButtonClick.bind(this,"30 minutes")}
            style={{ minWidth: "200px" }}>
        30 minutes</Button>

        var button3 = <Button
            color="info"
            className="float"
            onClick={this.props.handleTimeButtonClick.bind(this,"1 hour")}
            style={{ minWidth: "200px" }}>
        1 hour</Button>

        var button4 = <Button
            color="info"
            className="float"
            onClick={this.props.handleTimeButtonClick.bind(this,"2 hours +")}
            style={{ minWidth: "200px" }}>
        2 hours + </Button>

        var button5 = <Button
            color="info"
            className="float"
            onClick={this.props.handleTimeButtonClick.bind(this,"Show me everything")}
            style={{ minWidth: "200px" }}>
        Show me everything </Button>

        return (
            <Fragment>
                <ButtonToolbar
                    div className="btn-toolbar"> 
                    <ButtonGroup>
                        {button1}
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        </Modal>
                    </ButtonGroup>
                        {' '}
                    <ButtonGroup>
                        {button2}
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        </Modal>
                    </ButtonGroup>
                        {' '}
                    <ButtonGroup>
                        {button3}
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        </Modal>
                    </ButtonGroup>
                        {' '}
                    <ButtonGroup>
                        {button4}
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        </Modal>
                    </ButtonGroup>
                        {' '}
                    <ButtonGroup>
                        {button5}
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            </Modal>
                    </ButtonGroup>
                </ButtonToolbar>
              </Fragment>
        );
    }
}

export default TimeToDisplayModal;