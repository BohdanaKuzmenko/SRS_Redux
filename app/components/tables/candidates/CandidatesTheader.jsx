import {Component, PropTypes} from 'react'
import {Table} from 'semantic-ui-react'
export default class CandidatesTheader extends Component {

    onSortChange(self, id) {
        var header = self.props.tableHeader;
        var fieldsToSortBy = [];
        var order;
        var id = id.key;
        switch (header[id]["order"]){
            case null:
                order="desc";
                break;
            case 'desc':
                order="asc";
                break;
            case 'asc':
                order=null;
                break
        }
        for (var item in header) {
            if (!_.isNull(header[item]["sortIndex"])) {
                fieldsToSortBy.push(item)
            }
        }
        if (!_.isEmpty(fieldsToSortBy)) {
            if (_.include(fieldsToSortBy, id)) {
                fieldsToSortBy.map(function (fieldId) {
                    if (header[fieldId]['sortIndex'] > header[id]['sortIndex']) {
                        header[fieldId]['sortIndex'] = header[fieldId]['sortIndex'] - 1
                    }
                });
                header[id]["order"] = order;
                header[id]["sortIndex"] = null;
                if (!_.isNull(order)) {
                    header[id]["sortIndex"] = 0;
                    var orders = fieldsToSortBy.map(function (fieldId) {
                        return header[fieldId]['sortIndex'];
                    });
                    var maxSortField = _.max(orders);
                    header[id]["sortIndex"] = maxSortField + 1
                } else header[id]["sortIndex"] = null
            } else {
                header[id]["order"] = order;
                if (!_.isNull(order)) {
                    var orders = fieldsToSortBy.map(function (fieldId) {
                        return header[fieldId]['sortIndex'];
                    });
                    var maxSortField = _.max(orders);
                    header[id]["sortIndex"] = maxSortField + 1
                } else header[id]["sortIndex"] = null
            }
        }
        else {
            header[id]["order"] = order;
            header[id]["sortIndex"] = (_.isNull(order)) ? null : 1

        }
        self.props.updateSort(header)

    }


    generateHeader(header) {
        var self = this;
        var header_items = Object.keys(header).map(function (key) {
            var sortIndex = _.isNull(header[key]["sortIndex"]) ? "" : "[" + header[key]["sortIndex"] + "]";
            var iconClass;
            switch (header[key]['order']) {
                case null:
                    iconClass = "sort icon";
                    break;
                case 'desc':
                    iconClass = "sort descending icon";
                    break;
                case 'asc':
                    iconClass = "sort ascending icon";
                    break
            }
            return (
                <Table.HeaderCell key={key} id={key} onClick={self.onSortChange.bind(null, self, {key})}>
                    {header[key]["label"]}
                    <i className={iconClass}/>
                    {sortIndex}
                </Table.HeaderCell>
            )
        });
        header_items.push(<Table.HeaderCell key={"empty"}></Table.HeaderCell>);
        return <Table.Row>{header_items}</Table.Row>
    }

    render() {
        var header = this.generateHeader(this.props.tableHeader);
        return (
            <Table.Header>{header}</Table.Header>
        )
    }
}
CandidatesTheader.propTypes = {
    tableHeader: PropTypes.object.isRequired,
    updateSort: PropTypes.func.isRequired,
};