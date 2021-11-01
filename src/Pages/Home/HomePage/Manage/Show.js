import React from 'react';

const Show = (props) => {
    console.log(props.children[1].name)

    return (
        <div>
            <div style={{ border: '1px solid grey', backgroundColor: 'rgb(222, 222, 228)' }} className="col show">
                <h1> {props.children[1].name}</h1>
                <h5> email:{props.children[1].email}</h5>
            </div></div>
    );
};

export default Show;
