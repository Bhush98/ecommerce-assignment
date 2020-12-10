export const addCart = (content , count ) => {
    console.log(content)
    return {
        type : "add_cart",
        payload : {
            content,
            counter : count + 1
    }}
}

export const removeCart = ( product_name , count) => {
    console.log(product_name)
    return {
        type : "remove_item",
        payload : {
            product_name,
            counter : count - 1
        }
    }
}

export const searchItem = (name , category) => {
    return {
        type : "search_item",
        payload : {
            name , 
            category
        }
    }
}

export const addRecords = (record) => {
    return {
        type : "add_records",
        payload: {
            record
        }
    }
}