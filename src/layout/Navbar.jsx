import React, { useState } from "react";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "rgb(174 233 213)",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "rgb(45 118 94)",
    },
    "& .MuiTab-root": {
      minWidth: "100px",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0px 0px 10px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginLeft: "2rem",
  },
  logo: {
    fontSize: "40px",
    fontWeight: "bold",
    padding: "15px",
  },
  tab: {
    outline: "none",
    fontWeight: "bold",
  },
  img: {
    marginRight: "0rem",
  },
  bodyData: {
    // backgroundColor: "#b5b0b01f",
    backgroundColor: "white",
    minHeight: "100vh",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSwitchTab = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.logo}>fiverr</div>
        </div>
        <div style={{ display: "flex", alignItems: "center",marginRight:'8rem' }}>
          <div  style={{ display: "flex", alignItems: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabs}
            >
              <Tab
                label="Services"
                className={classes.tab}
                onClick={() => handleSwitchTab(1)}
              />
              <Tab
                label="Blog"
                className={classes.tab}
                onClick={() => handleSwitchTab(2)}
              />
            </Tabs>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid rgb(174 233 213)",
                padding: "5px",
                borderRadius: "10px",
                marginRight: "1rem",
              }}
            >
              <SearchIcon />
              <input
                placeholder="Search Services...."
                style={{ border: "none", marginLeft: "1rem", outline: "none" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              className={classes.img}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            />
            <MenuIcon />
          </div>
        </div>

        {/* </Paper> */}
      </div>
      <div className={classes.bodyData}>
        {selectedTab === 1 && <Services />}
        {selectedTab === 2 && <Blog />}
      </div>
    </div>
  );
};

export default Navbar;
