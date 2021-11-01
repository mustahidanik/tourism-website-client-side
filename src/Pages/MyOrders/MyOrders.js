import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState({})
    useEffect(() => {

        fetch(`https://haunted-hollow-40224.herokuapp.com/myorder`)
            .then(res => res.json())
            .then(data => setMyOrder(data))

    }, [])

    return (
        <div>

            <h1>Order Details</h1>
            <h3> {myOrder[0]?.name}</h3>
            <h3> {myOrder[0]?.email}</h3>


        </div>
    );
};

export default MyOrders;