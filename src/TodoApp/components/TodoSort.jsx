import React from 'react'
import {Menu} from 'semantic-ui-react'
class TodoSort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sorting: ''
        }
        this.onSortItemClick = this.onSortItemClick.bind(this)
    }

    onSortItemClick(event, {name}) {
        this.setState({sorting: name})
        this.props.onChangeSorting(name)
    }

    render() {
        const sorting = this.state.sorting
        return (<Menu text={true} pointing={true}>
            <Menu.Item header={true}>Sort By</Menu.Item>
            <Menu.Item name='aToz' active={sorting === 'aToz'} onClick={this.onSortItemClick}>A-Z</Menu.Item>
            <Menu.Item name='zToa' active={sorting === 'zToa'} onClick={this.onSortItemClick}>Z-A</Menu.Item>
        </Menu>)
    }
}
export default TodoSort
