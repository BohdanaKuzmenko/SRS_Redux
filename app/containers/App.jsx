import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Login from 'components/Login.jsx'
import MainView from 'components/MainView.jsx'
import * as mainViewActions from 'actions/MainViewActions.jsx'
import * as loginActions from 'actions/LoginActions.jsx'

class App extends Component {
    render() {
        const {user, mainView} = this.props;
        const {setActiveTab} = this.props.mainViewActions;
        const {setLogin, setPassword, setAuthorized} = this.props.loginActions;
        return <div>
            {!user.authorized && <Login
                user={user}
                setLogin={setLogin}
                setPassword={setPassword}
                setAuthorized={setAuthorized}/>}
            {user.authorized && <MainView
                tabs={mainView.tabs}
                activeTab={mainView.activeTab}
                setActiveTab={setActiveTab}/>}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        mainView: state.mainView
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mainViewActions: bindActionCreators(mainViewActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)