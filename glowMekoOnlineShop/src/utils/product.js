export function getAllProduct() {
    const products = [];
    fetch(
        "https://api.glowmeko.com/v1/products/home/get-all?productType=skin-care"
    )
    .then((response) => response.json())
    .then((data) => {
        if(data?.status && data.results.length > 0){
           console.log(data?.results);
            //setProducts(data.results);
        }
        else{
            //setProducts([]);
        }
    })
    .catch((error) => console.error("Error:", error));
    return products;
}