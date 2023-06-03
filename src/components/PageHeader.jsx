import React from 'react';

const PageHeader = () => {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Shop</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <p style={{color: "white"}}>Shop for Your Products</p>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
    </div>
  );
};

export default PageHeader;
