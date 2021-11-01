import React from 'react';

const Show = (props) => {
    console.log(props.children[1].name)

    return (
        <div>
            <h1> {props.children[1].name}</h1>
            <h5> email:{props.children[1].email}</h5>
        </div>
    );
};

export default Show;
