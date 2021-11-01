import React from 'react';
import { useEffect, useState } from 'react';
import Show from '../Home/HomePage/Manage/Show';
import Manage from '../Home/HomePage/Manage/Show';



const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://haunted-hollow-40224.herokuapp.com/myorder")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h1> All the Orders</h1>
            {
                orders.map(ora => <Show>
                    ora ={ora}
                </Show>)
            }

        </div>
    );
};

export default ManageOrders;



;