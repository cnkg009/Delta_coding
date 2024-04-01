import Product from "./Product.jsx";

function ProductTab () {
    let options = ["Task","durable","fast"];
    let options2 = {a: "high",b: "fly",c: 30};
    return (
        <>  
        <Product title="phone" price={10000} feature={options} feature2={options2}/>
        <Product title="Laptop" price={200} />
        <Product title="Game" price={300}/>
        </>
    )
}
export default ProductTab;


