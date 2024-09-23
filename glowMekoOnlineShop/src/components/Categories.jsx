
const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Category 1",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 2,
            name: "Category 2",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 3,
            name: "Category 3",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 4,
            name: "Category 4",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 5,
            name: "Category 5",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 6,
            name: "Category 6",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 7,
            name: "Category 7",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
        {
            id: 8,
            name: "Category 8",
            image: "https://glowmeko.s3.amazonaws.com/products/collagen-&-luxury-gold-revitalizing-comfort-gold-essence.webp"
    },
];
    return (
        <section className="py-4 container mx-auto"> 
            <div className="grid grid-cols-8 gap-3" >
                {categories?.map((category)=> {
                return (
                <div key = {category.id} className="p-4 rounded space-y-4 justify-center items-center">
                    <img src={category.image} className="h-12" alt="" />
                    <span className="text-[10px] block text-center">{category.name}</span>
                </div>
                    );
                    })} 
            </div>
        </section>
    );
};

export default Categories;