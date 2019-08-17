import React, {PureComponent} from 'react';
import { Redirect } from'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                <div>New Post</div>
            )
        }else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps, null)(Write);