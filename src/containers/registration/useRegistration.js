import React from 'react';
import { useNavigate } from 'react-router-dom';

const addTelephoneNumber = ({telephoneNumbersIndexes, setTelephoneNumbersIndexes, telephoneNumbersCounter, setTelephoneNumbersCounter}) => {
    setTelephoneNumbersIndexes([...telephoneNumbersIndexes, telephoneNumbersCounter]);
    setTelephoneNumbersCounter(telephoneNumbersCounter+1);
  };

const addRelatives = ({relativesIndexes, setRelativesIndexes, relativesCounter, setRelativesCounter}) => {
    setRelativesIndexes([...relativesIndexes, relativesCounter]);
    setRelativesCounter(relativesCounter + 1);
};

const useRegistration = () => {
    const [telephoneNumbersIndexes, setTelephoneNumbersIndexes] = React.useState([0]);
    const [telephoneNumbersCounter, setTelephoneNumbersCounter] = React.useState(1);
    const [relativesIndexes, setRelativesIndexes] = React.useState([0]);
    const [relativesCounter, setRelativesCounter] = React.useState(1);
    const navigate = useNavigate();

    return {
        navigate,
        telephoneNumbersIndexes, setTelephoneNumbersIndexes,
        telephoneNumbersCounter, setTelephoneNumbersCounter,
        relativesIndexes, setRelativesIndexes,
        relativesCounter, setRelativesCounter,
        addTelephoneNumber: () => addTelephoneNumber({telephoneNumbersIndexes, setTelephoneNumbersIndexes, telephoneNumbersCounter, setTelephoneNumbersCounter}),
        addRelatives: () => addRelatives({relativesIndexes, setRelativesIndexes, relativesCounter, setRelativesCounter})
    };
}

export default useRegistration;