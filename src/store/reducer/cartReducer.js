


const INITIAL_STATE = {


    products: [],



    totalPrice: 0,

    totalQuanties: 0





}







export default (state = INITIAL_STATE, action) => {

    let findPro;
    let index;



    switch (action.type) {

        case "add-to-cart":
            const { product, quantity } = action.payload
            const check = state.products.find(pr => pr.id === product.id)
            if (check) {
                return state;
            }

            else {

                const Tprice = state.totalPrice + product.discountPrice * quantity;
                const Tquantities = state.totalQuanties + quantity;
                product.quantity = quantity;



                return ({
                    ...state,
                    products: [...state.products, product],
                    totalQuanties: Tquantities,
                    totalPrice: Tprice


                })


            }



        case "inc":
            // parseInt(action.payload)
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;




            return ({
                ...state,
                totalPrice: state.totalPrice + findPro.discountPrice,
                totalQuanties: state.totalQuanties + 1


            })


        case "dec":
            // parseInt(action.payload)
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;



                return ({
                    ...state,
                    totalPrice: state.totalPrice - findPro.discountPrice,
                    totalQuanties: state.totalQuanties - 1


                })

            } else {
                return state;

            }

            case "remove":
              
                findPro = state.products.find(product => product.id === action.payload);
                const filtered= state.products.filter(product => product.id !== action.payload);
               return{
                   ...state,
                   products:filtered,
                   totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
                   totalQuanties:state.totalQuanties-findPro.quantity
               }













        default: return state;




    }








}



