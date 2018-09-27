import React from 'react'
import {Button, Table} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons'

const TodoList = ({counter, todoList, onChangeStatus, onDelete, markAllAsDone}) => {
    return (<div>
        <Table striped={true}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='2'>
                        Todo List (Total: {todoList.length})
                        <Button color='green' floated='right' compact={true} onClick={markAllAsDone}>Mark all as done</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    todoList.map((item, index) => {
                        return (<Table.Row key={index}>
                            <Table.Cell collapsing={true}>
                                {item.title}
                            </Table.Cell>
                            <Table.Cell collapsing={true} textAlign='right'>
                                <Button.Group size='small' floated='right' compact={true}>
                                    <Button color={(
                                            item.isFinish)
                                            ? 'green'
                                            : 'red'} onClick={() => onChangeStatus(index)}>
                                        <FontAwesomeIcon icon={(
                                                item.isFinish)
                                                ? faCheckDouble
                                                : faCheck}/>
                                    </Button>
                                    <Button.Or text='|'/>
                                    <Button onClick={() => onDelete(index)}>
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>)
                    })
                }
            </Table.Body>
        </Table>
    </div>)
}

export default TodoList
