import "./App.css";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <>
      <div
        ClassName="container"
        fluid
        className="text-primary mb-3 text-center"
      >
        <h1>Interactive Survey</h1>
      </div>
      <div className="container container-form">
        <Form>
          <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control required type="text" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 "
          >
            <Form.Control required type="email" placeholder="email" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
            <Form.Control
              required
              type="number"
              placeholder="Age"
              min="1"
              max="120"
            />
          </FloatingLabel>

          <div key="reverse-radio" className="mb-3">
            <p className="text-secondary">Satisfaction Level</p>
            {["Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"].map(
              (text, i) => (
                <Form.Check
                  required
                  label={text}
                  name="group1"
                  type="radio"
                  id={`radio-${i + 1}`}
                  className="mb-3"
                ></Form.Check>
              )
            )}
          </div>
          <Button type="submit" className="mt-3">
            Submit Survey
          </Button>
        </Form>
      </div>
    </>
  );
}
