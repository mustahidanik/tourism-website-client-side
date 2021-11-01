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
            <h1 style={{ color: 'red' }}> Orders History</h1>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3  ">
                {
                    orders.map(ora => <Show>
                        ora ={ora}
                    </Show>)
                }

            </div>
        </div>
    );
};

export default ManageOrders;



;