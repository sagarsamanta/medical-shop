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
const CompletedOrders = ({ products }) => {
  const classes = useStyles();
  const newProduct = products?.filter(
    (product) => product.status === "Completed"
  );
  return (
    <div className={classes.container}>
      <div className={classes.header}>COMPLETED</div>
      {newProduct?.map((product) => {
        return (
          <Card
            orderType={product.status}
            date={product.date}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default CompletedOrders;
