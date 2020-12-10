const init_state = {
    records : [],
    cart_value : [],
    selected_value : 0,
    name: '',
    category : ''
}

export const cartReducer = (state = init_state , action) => {
    switch(action.type){
        case "add_cart" : {
            const { content , counter} = action.payload
        return { ...state , cart_value : [...state.cart_value , content] , selected_value : counter }
        }

        case "remove_item" : {
            const {product_name , counter } = action.payload
            return { ...state , cart_value : state.cart_value.filter(item => item.product_name !== product_name) , selected_value : counter}
        }

        case "search_item" : {
            const { name , category} = action.payload
            return { ...state , name , category}
        }
        case "add_records" : {
            const { record } = action.payload
            return { ...state , records : record}
        }
        default : return state
    }
}