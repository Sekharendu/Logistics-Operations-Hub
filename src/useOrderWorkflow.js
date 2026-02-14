export const initialOrderState = {
    activeId : 0,
    orders:[
    {
      id: 0,
      orderId: "#ORD-7892",
      customer: "Rahul Sharma",
      location: "Bangalore, KA",
      destination: "304, Palm Apartments",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [
        { time: "06:00 PM", note: "Order created in system", type: "SYSTEM" }
      ]
    },
    {
      id: 1,
      orderId: "#ORD-5521",
      customer: "Priya Kaur",
      location: "Mumbai, MH",
      destination: "Flat 102, Sea View",
      status: "DISPATCHED",
      button: ['IN_TRANSIT', 'CANCELLED'],
      history: [
        { time: "09:00 AM", note: "Order created in system", type: "SYSTEM" },
        { time: "11:30 AM", note: "Status updated to DISPATCHED", type: "USER" }
      ]
    },
    {
      id: 2,
      orderId: "#ORD-9904",
      customer: "Amit Patel",
      location: "Ahmedabad, GJ",
      destination: "House No. 12, Riverfront",
      status: "DELIVERED",
      button: [],
      history: [
        { time: "10:00 AM", note: "Order created in system", type: "SYSTEM" },
        { time: "01:00 PM", note: "Status updated to DISPATCHED", type: "USER" },
        { time: "04:45 PM", note: "Status updated to DELIVERED", type: "USER" }
      ]
    }
]
};

const VALID_TRANSITIONS={
    "PENDING": ['DISPATCHED', 'CANCELLED'],
    "DISPATCHED": ['IN_TRANSIT', 'CANCELLED'],
    "IN_TRANSIT": ['DELIVERED' , 'CANCELLED'],
    "DELIVERED": [],
    "CANCELLED": []
}

export const reducer=(state,action)=>{
    switch(action.type){
        case "STATUS_CHANGE":
            const updatedOrders=state.orders.map((order)=>{
                if(state.activeId==order.id && VALID_TRANSITIONS[order.status].includes(action.payload)){
                    return {
                        ...order,
                        status: action.payload,
                        button: VALID_TRANSITIONS[action.payload],
                        history: [...order.history, { time: new Date().toLocaleTimeString(), note: `Updated to ${action.payload}`, type: "USER" }]
                    };
                }
                return order;
            });
            return { ...state, orders: updatedOrders };
        case "SCREEN_UPDATE":
            return {
                ...state,
                activeId: action.payload
            };
        case "RESET":
            const resetOrder=state.orders.map((order)=>{
                if(order.id===action.payload){
                    return {
                            ...order,
                            status: 'PENDING',
                            button: VALID_TRANSITIONS['PENDING'],
                            history: [...order.history, {time:new Date().toLocaleTimeString(), note: "Order reset to PENDING", type: "USER"}]
                        }
                }
                return order;
                
            });
            return { ...state, orders: resetOrder };
            // find(order=>order.id===action.payload);
            // if(resetOrder){
            //     return {
            //         ...state, orders: state.orders.map(order => {
            //             if(order.id===action.payload){
            //                 return {

            //                 }
            //             }
            //             return order;
            //         })
            //     }
            // }
        default:
            return state;
    }

}