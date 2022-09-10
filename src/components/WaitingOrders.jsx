import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "25%",
    backgroundColor: "#6865651a",
    minHeight: "100vh",
    borderRadius: "5px",
  },
  header: {
    padding: "1rem 1rem 0rem 1rem",
    fontWeight: "bold",
    fontSize: "15px",
  },
}));
const WaitingOrders = ({ products }) => {
  const classes = useStyles();

  const newProduct = products?.filter(
    (product) => product.status === "Waiting"
  );
  console.log(newProduct, products);

  return (
    <div className={classes.container}>
      <div className={classes.header}>WAITING FOR BUYER</div>
      {newProduct?.map((product) => {
        return (
          <Card
            orderType={product.status}
            date={product.date}
            price={product.price}
            showBar
            imgUrl={product.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default WaitingOrders;
