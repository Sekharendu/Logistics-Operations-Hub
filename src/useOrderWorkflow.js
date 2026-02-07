export const initialOrderState = {
  orderId: "#ORD-7892",
  customer: "Rahul Sharma",
  location: "Bangalore, KA",
  destination: "304, Palm Apartments",
  status: "PENDING", // This starts as PENDING,
  button: ['DISPATCHED', 'CANCELLED'],
  history: [
    { time: "06:00 PM", note: "Order created in system", type: "SYSTEM" }
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
            if(VALID_TRANSITIONS[state.status].includes(action.payload))
            {
                return(
                    {...state,
                    status: action.payload,
                    button: VALID_TRANSITIONS[action.payload],
                    history: [
                                ...state.history,
                                { 
                                time: new Date().toLocaleTimeString(), 
                                note: `Status updated to ${action.payload}`,
                                type: "USER" 
                                }
                            ]
                    }
                );
            }
            return state;
        default:
            return state;
    }

}