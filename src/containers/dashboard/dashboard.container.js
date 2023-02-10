import { connect } from 'react-redux';

import DashboardComponent from './dashboard.component';

const DashboardContainer = (props) => (<DashboardComponent {...props} />)

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
};

export default connect(mapStateToProps, null)(DashboardContainer);