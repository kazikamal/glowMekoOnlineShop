import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { getAllProduct } from "../../utils/product";
const Productlist = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    return (
        <section className="mx-auto container">
            <div className="grid grid-cols-5 gap-5">
                {products?.map((product)=>(
                <SingleProduct key = {product._id} product = {product}/>
        ))}</div>
        </section>
    );
};

export default Productlist;