import React from "react";
import { useReducer } from "react";
import { formReducer, initialState } from "../../reducer/formReducer";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

const MultiStep = () => {
  
  const [form, dispatch] = useReducer(formReducer, initialState);
  
  const handleInput = (e) => {
    dispatch({
      type: 'UPDATE_FORM',
      field: e.name,
      value: e.value,
    });
  };
  
  

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  switch (form.step) {
    case 1:
      return <FirstStep nextStep={nextStep} handleInput={handleInput} form={form} />;
    case 2:
        return <SecondStep nextStep={nextStep} handleInput={handleInput} form={form} />
    case 3:
      return <ThirdStep nextStep={nextStep} handleInput={handleInput} form={form} />
    default:
      return null;
  }
}

export default MultiStep;