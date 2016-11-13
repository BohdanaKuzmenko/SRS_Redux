import {PropTypes, Component} from 'react'
import {Grid, Segment, Form, Input, Button} from 'semantic-ui-react'
import Authorization from 'services/Authorization.jsx'
export default class Login extends Component {

    checkEnter(event) {
        if (event.keyCode == 13) {
            this.onSubmit()
        }
    }

    onLoginChanged(component, event) {
        this.props.setLogin(event.target.value)
        this.checkEnter(event)
    }

    onPasswordChanged(component, event) {
        this.props.setPassword(event.target.value)
        this.checkEnter(event)
    }

    onSubmit() {
        var self = this;
        if (!(_.isNull(this.props.user.login) || _.isNull(this.props.user.password))){
            var auth = new Authorization();
            var test = auth.login(this.props.user);
            test.then(function (data) {
                self.props.setAuthorized(!_.isEmpty(data))
            })
        }
    }

    render() {
        const {name} = this.props;
        return (
            <Grid className="centered page" verticalAlign='middle'>
                <Grid.Column width={7} textAlign="left">
                    <Segment>
                        <Form >
                            <div className="login">
                                <Input onKeyUp={this.onLoginChanged.bind(this, this)} className="fluid"
                                       placeholder="Login" type="text"/>
                            </div>
                            <br/>
                            <div className="password">
                                <Input onKeyUp={this.onPasswordChanged.bind(this, this)} className="fluid"
                                       placeholder="Password" type="password"/>
                            </div>
                            <br/>
                        </Form>
                        <Button color="vk" onClick={::this.onSubmit}> Login
                        </Button>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
Login.propTypes = {
    user: PropTypes.object.isRequired,
    setLogin: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setAuthorized: PropTypes.func.isRequired
};
