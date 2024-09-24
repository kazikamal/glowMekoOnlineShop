import React from 'react';

const SingleProduct = (props) => {
    const {product} = props;
    return (
        <div 
        key = {product?._id} className="bg-white p-4 rounded border border-red-100 shadow space-y-4 relative">
        <span className="absolute top-0 right-0 bg-orange-500 p-1 rounded">10%</span>
        <div className="bg-gray-100">
            <img src={`https://glowmeko.s3.amazonaws.com/${product.mainImageUrl}`} alt="" />
        </div>
        <p className="text-xs font-semibold" title={product?.name}>
            {product?.name.slice(0, 70)}
        </p>
        <p>{product?.price}</p>
        <button type="button" className="bg-orange-500 rounded px-3 py-2 text-white "> Add to cart</button>
    </div>
    );
};

export default SingleProduct;