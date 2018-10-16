import React from 'react'
import Dropzone from 'react-dropzone'
import {dropFile} from '../_actions/dragNdrop.action'
import {connect} from 'react-redux'
import {
    Card,
    Button,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class DrapNDrop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {files, onDrop} = this.props
        return (<div className="container">
            <div className="row">
                <div className="col">
                    <Dropzone onDrop={onDrop} className="border border-primary">
                        <Card body={true} outline={true} color="primary">
                            <CardText>Please Drop Files Here</CardText>
                            <Button color="secondary">Add Files...</Button>
                        </Card>
                    </Dropzone>
                    <ListGroup>
                        {
                            files.map((item, index) => {
                                return (<ListGroupItem>
                                    {item.name}
                                    - {item.size} bytes
                                </ListGroupItem>)
                            })
                        }
                    </ListGroup>
                </div>
            </div>
        </div>)
    }
}
const mapStateToProps = state => {
    return {files: state.dragNdrop.files}
}

const mapDispatchToProps = dispatch => {
    return {
        onDrop: (files) => {
            dispatch(dropFile(files))
        }
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(DrapNDrop)
export {
    connected as DrapNDrop
}
