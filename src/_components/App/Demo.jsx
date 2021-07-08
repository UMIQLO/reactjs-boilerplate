import React from 'react';
import ReactDOM from 'react-dom';

const Demo = ({clickCount, addClickCount}) => {
    return (<div>
        <p>
            Hello World (Click Count: {clickCount})
        </p>
        <p><input type="submit" value="Click Me" onClick={addClickCount}/></p>
    </div>)
}
export default Demo
