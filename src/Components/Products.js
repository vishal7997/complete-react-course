function Products() {
  return (
    <ul className="list-group shadow">
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-cloumn flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
            <p className="font-italic text-muted mb-0 small">sdfsf sdff sfdfsd fssd</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">$111.00</h6>
            </div>
          </div>
          <img src="" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
        </div>
      </li>
    </ul>
  );
}

export default Products;