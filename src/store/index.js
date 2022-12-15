import { createStore, createLogger } from 'vuex'
import cart from './../modules/cart/store/Cart';
import products from './../modules/products/store/Products';
import articles from '../modules/articles/store/Articles';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        cart,
        products,
        articles
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})