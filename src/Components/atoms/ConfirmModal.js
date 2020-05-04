import React, {Component, useContext} from "react";
import {Button, Modal} from "react-bootstrap";

function ConfirmModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.headerText}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.bodyText}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                <Button variant="danger" onClick={props.onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;