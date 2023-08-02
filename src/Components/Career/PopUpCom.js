import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const PopupModal = ({ show, onHide, onSave, Position, Department }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cvFile, setCvFile] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ name, email, message }, cvFile);
    onHide();
  };

  const isFormValid = () => {
    return name && email && message && cvFile;
  };


  return (
    <Modal show={show} className='PopUpModal'>
      <Modal.Header>
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
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="cvFile">
            <Form.Label>CV</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setCvFile(e.target.files[0])}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={!isFormValid()}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;