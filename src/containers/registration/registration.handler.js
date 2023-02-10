const submit = (props) => (handleSubmit, event, errors) => {
    event.preventDefault();
    const { saveContact } = props;

    if(Object.keys(errors).length !== 0){
        return null;
    }

    handleSubmit(saveContact)();
};

export default {
    submit
};