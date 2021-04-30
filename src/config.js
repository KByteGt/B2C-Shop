const prod = {
    url:{
        itemsApi: '', 
        checkoutApi: ''
    }
}

const dev = {
    url:{
        itemsApi: 'http://localhost:2500/api',
        checkoutApi: 'http://localhost:8042'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;