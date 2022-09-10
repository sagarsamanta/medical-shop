import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CompletedOrders from "../components/CompletedOrder";
import NewOrders from "../components/NewOrder";
import AddProduct from "../components/Product/AddProduct";
import ProgressOrders from "../components/ProgressOrders";
import WaitingOrders from "../components/WaitingOrders";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "1rem",
    paddingRight: "4rem",
  },
  segment: {
    display: "flex",
    gap: 20,
    padding: "1rem 4rem 3rem 4rem",
    justifyContent: "space-between",
  },
}));
const Orders = () => {
  const classes = useStyles();

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [products, setProducts] = useState([]);

  //get all product api handelar
  const getAllProduct = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_DASHBOARD_URL}/api/product/getAllTypeProduct`,
    })
      .then((response) => {
        console.log(response.data?.data);
        setProducts(response.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //loading scren data
  useEffect(() => {
    getAllProduct();
  }, []);

  const handleAddProduct = () => {
    setShowAddProductModal(true);
  };
  const closeModal = () => {
    setShowAddProductModal(false);
  };
  
  //update product with new product
  const handleAddNewProduct = (newProduct) => {
    setProducts((prevProduct) => [newProduct, ...prevProduct]);
  };
  return (
    <div>
      <div className={classes.container} style={{}}>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </div>
      <div className={classes.segment}>
        <NewOrders products={products} />
        <ProgressOrders products={products} />
        <WaitingOrders products={products} />
        <CompletedOrders products={products} />
      </div>
      {showAddProductModal && (
        <AddProduct
          showModal={showAddProductModal}
          handleCloseModal={closeModal}
          handleAddNewProduct={handleAddNewProduct}
        />
      )}
    </div>
  );
};

export default Orders;
