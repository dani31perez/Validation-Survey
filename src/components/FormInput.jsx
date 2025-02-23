import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function FormInput({
  label,
  type,
  value,
  setValue,
  onFocus,
  isValid,
  isInvalid,
}) {
  return (
    <Form.Group>
      <FloatingLabel
        controlId={`floating${label}`}
        label={label}
        className="mb-3"
      >
        <Form.Control
          required
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={onFocus}
          isValid={isValid}
          isInvalid={isInvalid}
        />
        <Form.Control.Feedback>Valid {label.toLowerCase()}</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter a valid {label.toLowerCase()}
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
}
