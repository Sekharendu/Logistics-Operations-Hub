export const initialOrderState = {
  activeId: 0,
  orders: [
    {
      id: 0,
      orderId: "#ORD-7892",
      customer: "James Anderson",
      location: "London, UK",
      destination: "12 Baker Street, Marylebone",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "06:00 PM", note: "Order created in system", type: "SYSTEM" }]
    },
    {
      id: 1,
      orderId: "#ORD-5521",
      customer: "Sarah Jenkins",
      location: "New York, NY",
      destination: "Apartment 4B, 5th Ave",
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
      customer: "Michael O'Connor",
      location: "Dublin, IE",
      destination: "House 12, River Terrace",
      status: "DELIVERED",
      button: [],
      history: [
        { time: "10:00 AM", note: "Order created in system", type: "SYSTEM" },
        { time: "01:00 PM", note: "Status updated to DISPATCHED", type: "USER" },
        { time: "04:45 PM", note: "Status updated to DELIVERED", type: "USER" }
      ]
    },
    {
      id: 3,
      orderId: "#ORD-1023",
      customer: "Thomas Müller",
      location: "Berlin, DE",
      destination: "12B, Alexanderplatz",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "08:15 AM", note: "Order created in system", type: "SYSTEM" }]
    },
    {
      id: 4,
      orderId: "#ORD-4412",
      customer: "Emma Watson",
      location: "Oxford, UK",
      destination: "High Street, Plot 45",
      status: "IN_TRANSIT",
      button: ['DELIVERED', 'CANCELLED'],
      history: [
        { time: "07:00 AM", note: "Order created in system", type: "SYSTEM" },
        { time: "09:00 AM", note: "Dispatched from Hub", type: "SYSTEM" }
      ]
    },
    {
      id: 5,
      orderId: "#ORD-2291",
      customer: "John Smith",
      location: "Chicago, IL",
      destination: "201 Michigan Ave",
      status: "CANCELLED",
      button: [],
      history: [{ time: "11:00 AM", note: "Cancelled by Customer", type: "USER" }]
    },
    {
      id: 6,
      orderId: "#ORD-8832",
      customer: "Chloe Miller",
      location: "Los Angeles, CA",
      destination: "742 Evergreen Terrace",
      status: "DISPATCHED",
      button: ['IN_TRANSIT', 'CANCELLED'],
      history: [{ time: "02:00 PM", note: "Order processed", type: "SYSTEM" }]
    },
    {
      id: 7,
      orderId: "#ORD-3110",
      customer: "David Brown",
      location: "Sydney, AU",
      destination: "Circular Quay, Wharf 7",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "04:30 PM", note: "Payment verified", type: "SYSTEM" }]
    },
    {
      id: 8,
      orderId: "#ORD-6721",
      customer: "Linda Garcia",
      location: "Madrid, ES",
      destination: "Calle de Alcalá, 44",
      status: "DELIVERED",
      button: [],
      history: [{ time: "10:00 AM", note: "Delivered to reception", type: "SYSTEM" }]
    },
    {
      id: 9,
      orderId: "#ORD-1102",
      customer: "Robert Wilson",
      location: "Toronto, ON",
      destination: "Bay Street, Suite 500",
      status: "IN_TRANSIT",
      button: ['DELIVERED', 'CANCELLED'],
      history: [{ time: "05:00 PM", note: "Out for delivery", type: "SYSTEM" }]
    },
    {
      id: 10,
      orderId: "#ORD-9001",
      customer: "Emily Davis",
      location: "Seattle, WA",
      destination: "Capitol Hill, Block 12",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "09:45 AM", note: "Order received", type: "SYSTEM" }]
    },
    {
      id: 11,
      orderId: "#ORD-4567",
      customer: "Christopher Lee",
      location: "Vancouver, BC",
      destination: "West Hastings St",
      status: "DISPATCHED",
      button: ['IN_TRANSIT', 'CANCELLED'],
      history: [{ time: "01:15 PM", note: "Packed and ready", type: "SYSTEM" }]
    },
    {
      id: 12,
      orderId: "#ORD-3321",
      customer: "Olivia Taylor",
      location: "Paris, FR",
      destination: "Avenue des Champs-Élysées",
      status: "IN_TRANSIT",
      button: ['DELIVERED', 'CANCELLED'],
      history: [{ time: "08:00 AM", note: "Transit to hub", type: "SYSTEM" }]
    },
    {
      id: 13,
      orderId: "#ORD-8810",
      customer: "William Clark",
      location: "Houston, TX",
      destination: "Westheimer Rd",
      status: "DELIVERED",
      button: [],
      history: [{ time: "12:00 PM", note: "Handed to customer", type: "SYSTEM" }]
    },
    {
      id: 14,
      orderId: "#ORD-2204",
      customer: "Jessica White",
      location: "Boston, MA",
      destination: "Beacon Street",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "03:30 PM", note: "Awaiting stock", type: "SYSTEM" }]
    },
    {
      id: 15,
      orderId: "#ORD-7765",
      customer: "Matthew Harris",
      location: "Melbourne, VIC",
      destination: "Collins Street",
      status: "CANCELLED",
      button: [],
      history: [{ time: "10:20 AM", note: "Address incorrect", type: "SYSTEM" }]
    },
    {
      id: 16,
      orderId: "#ORD-5500",
      customer: "Sophia Martin",
      location: "Atlanta, GA",
      destination: "Peachtree Street",
      status: "DISPATCHED",
      button: ['IN_TRANSIT', 'CANCELLED'],
      history: [{ time: "04:00 PM", note: "Shipped via Air", type: "SYSTEM" }]
    },
    {
      id: 17,
      orderId: "#ORD-6612",
      customer: "Daniel Thompson",
      location: "Austin, TX",
      destination: "Rainey Street",
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: "06:00 AM", note: "New order", type: "SYSTEM" }]
    },
    {
      id: 18,
      orderId: "#ORD-4491",
      customer: "Grace Kelly",
      location: "Philadelphia, PA",
      destination: "Market Street",
      status: "IN_TRANSIT",
      button: ['DELIVERED', 'CANCELLED'],
      history: [{ time: "11:50 AM", note: "Reached local hub", type: "SYSTEM" }]
    },
    {
      id: 19,
      orderId: "#ORD-1008",
      customer: "Mark Robinson",
      location: "Denver, CO",
      destination: "Colfax Avenue",
      status: "DELIVERED",
      button: [],
      history: [{ time: "02:15 PM", note: "Signed by recipient", type: "SYSTEM" }]
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