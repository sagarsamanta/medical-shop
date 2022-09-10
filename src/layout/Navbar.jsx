import React, { useState } from "react";
import Analytics from "../Pages/Analytics";
import Dashboard from "../Pages/Dashboard";
import Earnings from "../Pages/Earnings";
import Gigs from "../Pages/Gigs";
import Message from "../Pages/Message";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Orders from "../Pages/Orders";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "rgb(61 221 115)",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "rgb(61 221 115)",
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
    marginRight: "2rem",
  },
  bodyData: {
    backgroundColor: "#b5b0b01f",
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
          <Tabs value={value} onChange={handleChange} className={classes.tabs}>
            <Tab
              label="Dashboard"
              className={classes.tab}
              onClick={() => handleSwitchTab(1)}
            />
            <Tab
              label="Message"
              className={classes.tab}
              onClick={() => handleSwitchTab(2)}
            />
            <Tab
              label="Orders"
              className={classes.tab}
              onClick={() => handleSwitchTab(3)}
            />
            <Tab
              label="Gigs"
              className={classes.tab}
              onClick={() => handleSwitchTab(4)}
            />
            <Tab
              label="Analytics"
              className={classes.tab}
              onClick={() => handleSwitchTab(5)}
            />
            <Tab
              label="Earnings"
              className={classes.tab}
              onClick={() => handleSwitchTab(6)}
            />
          </Tabs>
        </div>

        <Avatar
          className={classes.img}
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
        />
        {/* </Paper> */}
      </div>
      <div className={classes.bodyData}>
        {selectedTab === 1 && <Dashboard />}
        {selectedTab === 2 && <Message />}
        {selectedTab === 3 && <Orders />}
        {selectedTab === 4 && <Gigs />}
        {selectedTab === 5 && <Analytics />}
        {selectedTab === 6 && <Earnings />}
      </div>
    </div>
  );
};

export default Navbar;
