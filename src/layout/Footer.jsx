import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  newsletter: {
    margin: "0rem 7rem",
    paddingTop: "2rem",
    width: "",
    display: "flex",
    gap: "350px",
    marginTop: "3rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "100px",
    },
  },
  termsCondi: {
    margin: "0rem 7rem",
    paddingTop: "2rem",
    width: "",
    display: "flex",
    gap: "350px",
    marginTop: "1rem",
    paddingBottom: "2rem",
    color: "white",
    fontWeight: "100",
    [theme.breakpoints.down("md")]: {
      gap: "20px",
    },
  },
  title: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.7rem",
    },
  },
  innerText: {
    fontSize: "13px",
    color: "white",
    fontWeight: "100",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  getStarted: {
    fontSize: "30px",
    color: "white",
    fontWeight: "400",
    marginLeft: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.7rem",
    },
  },
  newsletter_inerText: {
    fontSize: "13px",
    color: "white",
    fontWeight: "100",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  newsLetterTitle:{
    fontSize: "30px", color: "#2dd1d1", fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.7rem",
    },
  },
  helpCenter:{
    display: "flex", gap: "20px" ,
    [theme.breakpoints.down("md")]: {
      justifyContent:'space-evenly'
    },
  }
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#070724" }}>
      <div style={{ margin: "0rem 7rem", paddingTop: "2rem", width: "450px" }}>
        <div className={classes.title}>
          Non-reomte Gigs <span style={{ color: "#2dd1d1" }}>Simplified</span>
        </div>
        <div className={classes.innerText}>
          Get the best outdoor gig professionals in your city, wemade it budget
          friendly, easy & reliable
        </div>
      </div>
      <div
        style={{
          margin: "0rem 7rem",
          paddingTop: "1rem",
          width: "100%",
          display: "flex",
        }}
      >
        <div style={{ width: "50%", display: "flex", gap: "15px" }}>
          <div>
            <WhatsAppIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
          <div>
            <FacebookIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
          <div>
            <TwitterIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className={classes.getStarted} style={{}}>
            Get Started
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#2dd1d1",
                cursor: "pointer",
                fontWeight: "100",
                color: "white",
                padding: "7px 15px",
                borderRadius: "30px",
              }}
            >
              Hire a vendor
            </div>
            <div
              style={{
                backgroundColor: "#2dd1d1",
                cursor: "pointer",
                fontWeight: "100",
                color: "white",
                padding: "7px 15px",
                borderRadius: "30px",
              }}
            >
              Register a vendor
            </div>
          </div>
        </div>
      </div>
      <div className={classes.newsletter} >
        <div>
          <div
          className={classes.newsLetterTitle}
            style={{  }}
          >
            Newsletter
          </div>
          <div className={classes.newsletter_inerText} style={{}}>
            Subscribe to our monthly newsletter
          </div>
          <div
            style={{
              //   backgroundColor: "#2dd1d1",
              cursor: "pointer",
              fontWeight: "100",
              color: "white",
              padding: "7px 15px",
              borderRadius: "30px",
              width: "300px",
              border: "1px solid white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            Enter your email here
            <ArrowForwardIcon
              style={{
                backgroundColor: "#2dd1d1",
                borderRadius: "20px",
                padding: "5px",
              }}
            />
          </div>
        </div>
        <div className={classes.helpCenter} style={{ }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100",fontSize:'1.3rem' }}>Support</div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Help center
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Account information
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>About</div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Contact us
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Help and solution
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Talk to support
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Support docs
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100",fontSize:'1.3rem' }}>
              System status
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Covid responsible
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Market place
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Photography
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Videography
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>
              Makeup artist
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" ,fontSize:'1.3rem'}}>Planner</div>
          </div>
        </div>
      </div>
      <div className={classes.termsCondi}>
        <div>@ 2022 Wizzle , Copyright and right reserved</div>
        <div>Tearms and condition - Privecy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
