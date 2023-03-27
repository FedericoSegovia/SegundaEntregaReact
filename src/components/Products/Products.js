import { useContext } from "react";
import {dataContext} from "../Contex/DataContext";
import "./Products.css"

const Products = () => {
  const {data, cart, setCart} = useContext(dataContext);
  const buyProduct = (product) => {
    
    setCart([...cart, product]);
  };
 
 
  return data.map((product) => {
        return(
            <div className="card" key={product.id}>
             <img src={product.img} alt="img-product-card" />
            <h3>{product.name} </h3>
            <h4>{product.price}$</h4>
            <button onClick={()=>buyProduct(product)}>Agregar al Carrito</button>
            </div>
        )    
})
    
  
};

export default Products