import {PropTypes, Component} from 'react';
import Header from "components/header/Header.jsx"
import {Menu} from 'semantic-ui-react'

export default class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {activeItem: 'candidates'}
    }


    handleItemClick(e, {name}) {
        this.props.setActiveTab(name)
    }

    render() {
        const {tabs, activeTab} = this.props;
        return (
            <div className="main view">
                <Header/>
                <Menu left vertical
                      fixed={"left"}>
                    <Menu.Item name='candidates' active={activeTab === 'candidates'}
                               onClick={this.handleItemClick.bind(this)}/>
                    <Menu.Item name='possible matches' active={activeTab === 'possible matches'}
                               onClick={this.handleItemClick.bind(this)}/>
                    <Menu.Item name='settings' active={activeTab === 'settings'}
                               onClick={this.handleItemClick.bind(this)}/>
                </Menu>
                <div className="content">
                    {tabs[activeTab]}
                </div>
            </div>
        )
    }

}
MainView.propTypes = {
    tabs: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired
}