import "./Product.css"

function Product({ title, price, feature, feature2 }) {
   
    return ( 
        <div className="Product">
       
            <h1>your {title}</h1>
            <p>Product price {price}</p>
            <p>High{feature}</p>
            {/* <p>{feature2.b}</p> */}
        </div>
    )
}
export default Product;

// import PropTypes from 'prop-types'; // Import PropTypes

// function Product({ title, price, feature, feature2 }) {
//     return ( 
//         <div className="Product">
//             <h1>your {title}</h1>
//             <p>Product price {price}</p>
//             <p>High{feature}</p>
//             <p>{feature2.a}</p>
//         </div>
//     )
// }

// // Define PropTypes for the component
// Product.propTypes = {
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     feature: PropTypes.string.isRequired,
//     feature2: PropTypes.string.isRequired // Add PropTypes for feature2
// };

// export default Product;
