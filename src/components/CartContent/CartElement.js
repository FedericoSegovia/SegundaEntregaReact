import { useContext } from "react";
import { dataContext } from "../Contex/DataContext";
import "./CartContent.css";


const CartElement = () => {
    const {cart} = useContext(dataContext);
  return cart.map ((product) => {
    return (
  
    <div className="cartContent" key={product.id}>
            <img src = {product.img} alt= "product-card" />
            <h3 className="name">{product.name} </h3>
            <h4 className="price">{product.price}$</h4>
     
     </div>
    );
});
};
export default CartElement;