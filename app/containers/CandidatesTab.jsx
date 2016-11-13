import {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Loader} from 'semantic-ui-react'
import {CANDIDATES} from 'constants/Urls.jsx'
import CandidatesTable from 'components/tables/candidates/CandidatesTable.jsx'
import * as candidatesTabActions from 'actions/CandidatesTabActions.jsx'

class Candidates extends Component {
    componentWillMount() {
        var self = this;
        let config = {
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        };
        fetch(CANDIDATES, config)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            self.props.candidatesTabActions.setTableData(data)
        })

    }

    render() {
        var {candidates} = this.props;
        const {setTableData, updateSort} = this.props.candidatesTabActions;
        return (
            <div>
                {_.isNull(candidates.tableData) ?
                    <Loader active inline/> :
                    <div id="queries">
                        <CandidatesTable
                            tableData={candidates.tableData}
                            tableHeader={candidates.tableHeader}
                            updateSort={updateSort}
                        />
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        candidates: state.candidates,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        candidatesTabActions: bindActionCreators(candidatesTabActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Candidates)
