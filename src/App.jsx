import "./App.css";
import { useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function App() {
  const [touched, setTouched] = useState([false, false, false]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [selected, setSelected] = useState("");

  const handlefocus = (i) => {
    setTouched((curr) => {
      const currTouched = [...curr];
      currTouched[i] = true;
      return currTouched;
    });
  };

  const validatedFields = () => {
    const validateName = name.length > 0;
    const validateEmail = email.includes("@");
    const validateAge = age <= 120 && age >= 1;
    const validateCheck = selected !== "";
    return [validateName, validateEmail, validateAge, validateCheck];
  };

  return (
    <>
      <div className="container-fluid text-primary mb-3 text-center">
        <h1>Interactive Survey</h1>
      </div>
      <div className="container container-form">
        <Form noValidate >
          <Form.Group>
            <FloatingLabel
              controlId="floatingName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => handlefocus(0)}
                isValid={touched[0] && name.length > 0}
                isInvalid={touched[0] && name.length == 0}
              />
              <Form.Control.Feedback>Valid name</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid name
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel
              controlId="floatingEmail"
              label="Email address"
              className="mb-3 "
            >
              <Form.Control
                required
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handlefocus(1)}
                isValid={touched[1] && email.includes("@")}
                isInvalid={touched[1] && !email.includes("@")}
              />
              <Form.Control.Feedback>Valid email</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid email
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
              <Form.Control
                required
                type="number"
                placeholder="Age"
                min="1"
                max="120"
                onChange={(e) => setAge(e.target.value)}
                onFocus={() => handlefocus(2)}
                isValid={touched[2] && age <= 120 && age >= 1}
                isInvalid={touched[2] && !(age <= 120 && age >= 1)}
              />
              <Form.Control.Feedback>Valid age</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid age
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <div key="reverse-radio" className="mb-3">
            <p className="text-secondary">Satisfaction Level</p>
            <Form.Group onChange={(e) => setSelected(e.target.value)}>
              {["Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"].map(
                (text, i) => (
                  <Form.Check
                    required
                    label={text}
                    name="group1"
                    type="radio"
                    key={`radio-${i + 1}`}
                    id={`radio-${i + 1}`}
                    value={text}
                    className="mb-3"
                    isValid={selected !== ""}
                    feedback={
                      i === 3
                        ? selected !== ""
                          ? "Valid choose"
                          : "Please choose an option"
                        : ""
                    }
                    feedbackType={selected !== "" ? "valid" : "invalid"}
                  ></Form.Check>
                )
              )}
            </Form.Group>
          </div>
          <Button type="submit" className="mt-3" disabled={!validatedFields().every((val) => val === true)}>
            Submit Survey
          </Button>
        </Form>
      </div>
    </>
  );
}
