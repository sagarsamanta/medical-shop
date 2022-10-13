import React, { useState } from "react";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import logoo from "../imges/logo.png";
const useStyles = makeStyles((theme) => ({
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
    marginLeft: "2rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  tab: {
    outline: "none",
    fontWeight: "bold",
  },
  imgStyle: {
    width: "200px",
    height: "50px",
    backgroundColor: "white",
  },
  bodyData: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    marginRight: "8rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbar_tabs_container: {
    display: "flex",
    alignItems: "center",
  },
  navbar_tabs: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbar_searchBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(174 233 213)",
    padding: "5px",
    borderRadius: "10px",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu: {},
  registervendorBtn: {
    backgroundColor: "#2dd1d1",
    cursor: "pointer",
    fontWeight: "100",
    color: "white",
    padding: "10px 15px",
    // width:'300px',
    borderRadius: "30px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuTop: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

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
        <div className={classes.menuTop}>
          <MenuIcon style={{fontSize:'50px'}}/>
        </div>
        <div className={classes.logo}>
          <img src={logoo} alt="not" className={classes.imgStyle} />
        </div>

        <div className={classes.navbar}>
          <div className={classes.navbar_tabs_container}>
            <div className={classes.navbar_tabs}>
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
            </div>
            <div className={classes.navbar_searchBar}>
              <SearchIcon />
              <input
                placeholder="Search Services...."
                style={{ border: "none", marginLeft: "1rem", outline: "none" }}
              />
            </div>
          </div>

          <div className={classes.profile}>
            <Avatar
              className={classes.img}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            />
            <div className={classes.menu}>
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className={classes.registervendorBtn}>Register as a vendor</div>

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
