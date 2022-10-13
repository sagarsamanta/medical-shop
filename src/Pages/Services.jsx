import React from "react";
import { TextField, Button, Paper, InputLabel } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import BodyImage from "../imges/body.png";
import MapImage from "../imges/map.jpeg";
import Footer from "../layout/Footer";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const Services = () => {
  const classes = useStyles();

  return (
    <div style={{ padding: "1rem 0rem 0rem 0rem", fontWeight: "bold" }}>
      {/* <div
        style={{
          height: "200px",
          backgroundColor: "rgb(174 233 213 / 43%)",
          marginBottom: "1rem",
        }}
      ></div> */}
      <img src={BodyImage} alt="not" style={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // margin: "0rem 20rem 0rem 20rem",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              margin: "4rem 0rem",
            }}
          >
            <div style={{ width: "300px", marginRight: "7rem" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Select Category
              </div>
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#444040bd",
                }}
              >
                Select the category which suits you best!
              </div>
            </div>
            <div style={{ width: "300px", margin: "" }}>
              <Autocomplete
                size="small"
                options={["Gold", "Siver", "Iron"]}
                // value={formik.values.state}
                // onChange={(event, newValue) => {
                //   formik.setFieldValue("state", newValue);
                // }}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#f7f6f0", color: "black" }}>
                    {children}
                  </Paper>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Services"
                    name="state"
                    // value={formik.values.state}
                    // onChange={formik.handleChange}
                    // error={formik.touched.state && Boolean(formik.errors.state)}
                    // helperText={formik.touched.state && formik.errors.state}
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <Divider variant="fullWidth" />
          <div
            style={{
              display: "flex",
              margin: "4rem 0rem",
            }}
          >
            <div style={{ width: "300px", marginRight: "7rem" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Select Sub-Category
              </div>
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#444040bd",
                }}
              >
                Select the category which suits you best!
              </div>
            </div>
            <div style={{ width: "300px", margin: "" }}>
              <Autocomplete
                size="small"
                options={["Ring", "Bala", "Pendent"]}
                // value={formik.values.state}
                // onChange={(event, newValue) => {
                //   formik.setFieldValue("state", newValue);
                // }}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#f7f6f0", color: "black" }}>
                    {children}
                  </Paper>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Services"
                    name="state"
                    // value={formik.values.state}
                    // onChange={formik.handleChange}
                    // error={formik.touched.state && Boolean(formik.errors.state)}
                    // helperText={formik.touched.state && formik.errors.state}
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <Divider variant="fullWidth" />
          <div
            style={{
              display: "flex",
              margin: "4rem 0rem",
            }}
          >
            <div style={{ width: "300px", marginRight: "7rem" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Work Location
              </div>
              <div
                style={{
                  fontSize: "13px",
                  alignItems: "center",
                  color: "black",
                  marginTop: "10px",
                }}
              >
                <div style={{ marginBottom: "7px" }}>Enter Location</div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid rgb(174 233 213)",
                    padding: "5px",
                    borderRadius: "5px",
                    marginRight: "1rem",
                  }}
                >
                  <LocationOnOutlinedIcon />
                  <input
                    placeholder="Search Location...."
                    style={{
                      border: "none",
                      marginLeft: "1rem",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <img
                    src={MapImage}
                    alt="not"
                    style={{
                      width: "285px",
                      height: "150px",
                      border: "1px solid black",
                      marginTop: "1rem",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ width: "300px", margin: "" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Date
              </div>
              <div
                style={{
                  fontSize: "13px",
                  alignItems: "center",
                  color: "black",
                  marginTop: "10px",
                }}
              >
                <div style={{ marginBottom: "7px" }}>
                  Select the date when you required the services
                </div>
                <TextField
                  id="date"
                  label=""
                  type="date"
                  defaultValue="13-10-2022"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "4rem 0rem",
            }}
          >
            <div style={{ width: "350px", marginRight: "7rem" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Project Details
              </div>
              <div
                style={{
                  fontSize: "13px",
                  alignItems: "center",
                  color: "black",
                  marginTop: "10px",
                }}
              >
                <div style={{ marginBottom: "7px" }}>
                  Please describe the requirements of your work in details so
                  that vendor can have clear understanding
                </div>
                <TextField
                  id="outlined-multiline-static"
                  // label="Multiline"
                  fullWidth
                  multiline
                  rows={4}
                  // defaultValue="I am lokking for..."
                  variant="outlined"
                  placeholder="I am looking for.."
                />
                <Button
                  variant="outlined"
                  size="small"
                  // color="primary"
                  endIcon={<AttachmentIcon />}
                  style={{
                    borderColor: "rgb(174 233 213)",
                    color: "black",
                    marginTop: "1rem",
                  }}
                >
                  Upload Files
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "4rem 0rem",
            }}
          >
            <div style={{ width: "350px", marginRight: "7rem" }}>
              <div
                style={{
                  fontSize: "25px",
                  paddingBottom: "3px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Your budget
              </div>
              <div
                style={{
                  fontSize: "13px",
                  alignItems: "center",
                  color: "black",
                  marginTop: "10px",
                }}
              >
                <div style={{ marginBottom: "7px" }}>
                  Put the approx budget that you set for your project
                </div>

                <div style={{}}>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    aria-setsize={40}
                    style={{ width: "150px" }}
                    // value={values.amount}
                    // onChange={handleChange("amount")}
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    // labelWidth={60}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      borderColor: "rgb(174 233 213)",
                      color: "rgb(174 233 213)",
                      marginTop: "1rem",
                      width: "100px",
                      backgroundColor: "rgb(29 141 76)",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
