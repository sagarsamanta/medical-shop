import React from "react";
import { useState } from "react";
import { TextField, Button, Paper, Fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import { Backdrop } from "@material-ui/core";
import * as yup from "yup";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  modalTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  closeBtn: {
    border: "none",
    outline: "none",
    marginRight: "-2rem",
  },
  formBtn: {
    width: "100%",
    outline: "none",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

//define product validation schema
const ProductSchema = yup.object({
  name: yup.string().required("*Required"),
  price: yup.string().required("*Required"),
  status: yup.string().required("*Required"),
});

const AddProduct = ({ showModal, handleCloseModal, handleAddNewProduct }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [selectedImage, setSelectedImage] = useState(null);
  const [disable, setDisable] = useState(false);

  //modal close handelar
  const handleClose = () => {
    handleCloseModal(false);
  };
  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      status: "",
      date: new Date(),
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      values.date = today.toDateString();
      handleAddproduct(values);
    },
  });

  //modal body
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.modalTop}>
        <div></div>
        <div>
          {" "}
          <Typography variant="h5" style={{ color: "#7e7e7e" }} gutterBottom>
            ADD PRODUCT
          </Typography>
        </div>
        <Button
          onClick={handleClose}
          className={classes.closeBtn}
          startIcon={<CloseIcon />}
        ></Button>
      </div>
      <hr />

      <div style={{ marginTop: "2.5rem" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                size="small"
                placeholder="Enter Product Name"
                label="Product Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                placeholder="Enter Price here"
                label="Product price"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                getOptionSelected={(option, value) => option === value}
                size="small"
                options={["New", "Progress", "Waiting", "Completed"]}
                style={{ width: "100%" }}
                onChange={(_, val) => {
                  formik.setFieldValue("status", val);
                }}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#f7f6f0", color: "black" }}>
                    {children}
                  </Paper>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Product Status"
                    name="status"
                    value={formik.values.status}
                    error={
                      formik.touched.status && Boolean(formik.errors.status)
                    }
                    helperText={formik.touched.status && formik.errors.status}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <label style={{ marginBottom: "0.5rem" }}>Select Image</label>
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "1rem" }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                color="primary"
                onClick={() => {
                  formik.handleSubmit();
                }}
                className={classes.formBtn}
                disabled={disable}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                className={classes.formBtn}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );

  //product add handelar
  const handleAddproduct = (values) => {
    setDisable(true);
    var metaFormData = new FormData();
    metaFormData.append("productImg", selectedImage);
    metaFormData.append("name", values.name);
    metaFormData.append("status", values.status);
    metaFormData.append("date", values.date);
    metaFormData.append("price", values.price);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DASHBOARD_URL}/api/product/addProduct`,
      data: metaFormData,
    })
      .then((response) => {
        console.log(response.data);
        handleAddNewProduct(response.data?.data);
        setDisable(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={showModal}>{body}</Fade>
    </Modal>
  );
};

export default AddProduct;
