import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const PopupModal = ({ show, onHide, onSave, Position, Department }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = () => {
    onSave({ name, email, message });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} className='PopUpModal'>
      <Modal.Header closeButton>
        <Modal.Title>{Department}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>{Position}</Modal.Title>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;