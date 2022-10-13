import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#070724" }}>
      <div style={{ margin: "0rem 7rem", paddingTop: "2rem", width: "450px" }}>
        <div style={{ fontSize: "30px", color: "white", fontWeight: "400" }}>
          Non-reomte Gigs <span style={{ color: "#2dd1d1" }}>Simplified</span>
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "white",
            fontWeight: "100",
            marginTop: "1rem",
          }}
        >
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
          <div
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "400",
              marginLeft: "3rem",
            }}
          >
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
      <div
        style={{
          margin: "0rem 7rem",
          paddingTop: "2rem",
          width: "",
          display: "flex",
          gap: "350px",
          marginTop:'3rem'
        }}
      >
        <div>
          <div
            style={{ fontSize: "30px", color: "#2dd1d1", fontWeight: "400" }}
          >
            Newsletter
          </div>
          <div style={{ fontSize: "13px", color: "white", fontWeight: "100" }}>
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
        <div style={{ display: "flex", gap: "70px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100" }}>Support</div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Help center
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Account information
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>About</div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Contact us
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100" }}>
              Help and solution
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Talk to support
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Support docs
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              System status
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Covid responsible
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ color: "white", fontWeight: "100" }}>
              Market place
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Photography
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Videography
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>
              Makeup artist
            </div>
            <div style={{ color: "#c7bbbbab", fontWeight: "100" }}>Planner</div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0rem 7rem",
          paddingTop: "2rem",
          width: "",
          display: "flex",
          gap: "350px",
          marginTop:'1rem',
          paddingBottom:'2rem',
          color:'white',
          fontWeight:'100'
        }}
      >
        <div>@ 2022 Wizzle , Copyright and right reserved</div>
        <div>Tearms and condition - Privecy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
