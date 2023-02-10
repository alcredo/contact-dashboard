import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import RegistrationComponent from './registration.component';
import handler from './registration.handler';

const RegistrationContainer = (props) => (<RegistrationComponent {...props} />)

const mapDispatchToProps = (dispatch) => {
    return {
        saveContact: (contact) => dispatch({ type: "ADD_CONTACT", payload: contact })
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withHandlers(handler)
)(RegistrationContainer);