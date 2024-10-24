import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddBook() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="success" className='me-3' onClick={handleShow}>
        Add Book
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            
            <div className="col-md-12">
        <Form>
        <FloatingLabel
        controlId="floatingInput1"
        label="Book Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Book Title" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput2"
        label="Author Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Author Name" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput3"
        label="Genre"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Genre" />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput5"
        label=" Description"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Description" />
      </FloatingLabel>
        </Form>


            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddBook