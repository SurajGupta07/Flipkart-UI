import { useCart } from "../context/cart-context";
import { productList } from "../Data/ProductsData";

export const Products = () => {
  let { setItemsInCart } = useCart();
  console.log(productList);
  return (
    <div>
      <h1>Products</h1>
      {productList.map((item) => (
        <div key={item.id}>
          <div>
            <h2 key={item.name}>{item.name}</h2>
            <img src={item.image} alt="itm-img" />
            <div>Rs. {item.price}</div>
            <div>Rs. {item.type}</div>
            <div>Rs. {item.stitched}</div>
          </div>
          <button onClick={() => setItemsInCart((items) => [...items, item])}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
