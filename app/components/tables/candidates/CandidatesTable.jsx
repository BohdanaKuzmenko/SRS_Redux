import {Component, PropTypes} from 'react'
import {Table} from 'semantic-ui-react'
import CandidatesTheader from 'components/tables/candidates/CandidatesTheader.jsx'
export default class CandidatesTable extends Component {

    render() {
        return (
            <Table celled>
                <CandidatesTheader tableHeader={this.props.tableHeader}
                                   updateSort={this.props.updateSort}
                />

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}
CandidatesTable.propTypes = {
    tableData: PropTypes.array.isRequired,
    tableHeader: PropTypes.object.isRequired,
    updateSort: PropTypes.func.isRequired
}