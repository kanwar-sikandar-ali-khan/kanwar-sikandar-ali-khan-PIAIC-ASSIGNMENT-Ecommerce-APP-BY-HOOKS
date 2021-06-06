import p1 from '../../images/1.jpg'
import p2 from '../../images/2.jpg'
import p3 from '../../images/3.jpg'
import p4 from '../../images/4.jpg'
import p5 from '../../images/5.jpg'
import p6 from '../../images/6.jpg'
import p7 from '../../images/7.jpg'
import p8 from '../../images/8.jpg'
import p9 from '../../images/9.jpg'
import p10 from '../../images/10.jpg'



const INITIAL_STATE = {
    

    products: [

        {
            id: 1, name: "man shirt", image: p1, price: 20, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
        {
            id: 2, name: "man shirt", image: p2, price: 30, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
        {
            id: 3, name: "man shirt", image: p3, price: 40, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blantiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
        {
            id: 4, name: "man shirt", image: p4, price: 50, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
        {
            id: 5, name: "man shirt", image: p5, price: 60, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
        {
            id: 6, name: "man shirt", image: p6, price: 70, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
      blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
      provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
      {
        id: 7, name: "man shirt", image: p7, price: 80, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
  blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
  provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
  {
    id: 8, name: "man shirt", image: p8, price: 90, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
{
    id: 9, name: "man shirt", image: p9, price: 110, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
{
    id: 10, name: "man shirt", image: p10, price: 44, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem cumque 
blanditiis vero accusantium sunt magni non obcaecati iure, sit atque reprehenderit
provident quisquam voluptatibus eum hic pariatur doloribus suscipit.`},
      


    ],

    product: {}

 


}




export default (state = INITIAL_STATE, action) => {



    switch (action.type) {

        case "product":


            return ({
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))







            })



        default: return state;




    }








}



