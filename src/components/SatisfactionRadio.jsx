import React from "react";
import Form from "react-bootstrap/Form";

const SatisfactionRadio = ({ selected, setSelected}) => {
  return (
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
  );
};

export default SatisfactionRadio;
