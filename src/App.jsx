import "./App.css";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Progress from "./components/Progress";
import FormInput from "./components/FormInput";
import SatisfactionRadio from "./components/SatisfactionRadio";

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
        <Progress fields={validatedFields()} />
      </div>
      <div className="container container-form">
        <Form noValidate>
          <FormInput
            label="Name"
            type="text"
            setValue={setName}
            onFocus={() => handlefocus(0)}
            isValid={touched[0] && name.length > 0}
            isInvalid={touched[0] && name.length === 0}
          />
          <FormInput
            label="Email Address"
            type="text"
            setValue={setEmail}
            onFocus={() => handlefocus(1)}
            isValid={touched[1] && email.includes("@")}
            isInvalid={touched[1] && !email.includes("@")}
          />

          <FormInput
            label="Age"
            type="number"
            setValue={setAge}
            onFocus={() => handlefocus(2)}
            isValid={touched[2] && age <= 120 && age >= 1}
            isInvalid={touched[2] && !(age <= 120 && age >= 1)}
          />

          <SatisfactionRadio selected={selected} setSelected={setSelected} />

          <Button
            type="submit"
            className="mt-3"
            disabled={!validatedFields().every((val) => val === true)}
          >
            Submit Survey
          </Button>
        </Form>
      </div>
    </>
  );
}
