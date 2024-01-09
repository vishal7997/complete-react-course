import ProductDetails from "./ProductDetails";

// let imageUrl = require("../images/test-img.jpg");
// let isAvailable = "Available";

// let style = {
//     padding: '0px 20px',
//     fontSize: 14
// }

function Products(props) {
  return (
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">
            {props.description}
          </p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable}>
            <p>This is a demo</p>
          </ProductDetails>
        </div>
        <img
          src={props.imageUrl}
          alt="Generic placeholder"
          width="100"
          className="ml-lg-5 order-1 order-lg-2"
        ></img>
      </div>
    </li>
  );
}

export default Products;
