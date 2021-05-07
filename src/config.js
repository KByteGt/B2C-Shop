const prod = {
    url:{
        itemsApi: 'https://b2c-shop-api-dot-b2c-shop-fortnite.uc.r.appspot.com/api', 
        checkoutApi: 'https://checkout-dot-b2c-shop-fortnite.uc.r.appspot.com'
    }
}

const dev = {
    url:{
        itemsApi: 'http://localhost:8080/api',
        checkoutApi: 'http://localhost:8042'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;