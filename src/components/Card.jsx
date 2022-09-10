import { Avatar, Chip, Divider } from "@material-ui/core";
import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
const useStyles = makeStyles((theme) => ({
  green: {
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#d9d0d0",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "rgb(61 221 115)",
    },
  },
  chatBox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    color: "gray",
    margin: "0.5rem",
    padding: "0.5rem",
    borderRadius: "3px",
  },
  end: {
    display: "flex",
    justifyContent: "flex-end",
  },
  leftSegmet: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightSegment: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    flex: 2,
  },
  price: {
    display: "flex",
    fontSize: "17px",
    fontWeight: "bold",
    justifyContent: "flex-end",
  },
  devider: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  bottomSegment: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bar: {
    height: "7px",
    borderRadius: "10px",
    width: "50px",
  },
  img: {
    height: "20px",
    width: "20px",
  },
}));
const Card = ({ orderType, name, price, date, showBar, imgUrl }) => {
  const classes = useStyles();

  //type of product and color detection
  let orderTypleColor = "#d7911087";
  let orderTypeText = "NEW ORDER";
  if (orderType === "Progress") {
    orderTypleColor = "rgb(123 131 225 / 53%)";
    orderTypeText = "IN PROGRESS";
  } else if (orderType === "Waiting") {
    orderTypleColor = "rgb(191 84 201 / 53%)";
    orderTypeText = "DELIVERED";
  } else if (orderType === "Completed") {
    orderTypleColor = "rgb(84 201 123 / 53%)";
    orderTypeText = "COMPLETED";
  }
  return (
    <div className={classes.container}>
      <div className={classes.end}>
        <MoreHorizIcon />
      </div>
      <div className={classes.leftSegmet}>
        <div style={{ flex: 2 }}>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
            }
            alt="NOT"
            height="70px"
            width="70px"
            style={{ borderRadius: "5px" }}
          />
        </div>

        <div className={classes.rightSegment}>
          <Chip
            style={{
              color: "black",
              backgroundColor: orderTypleColor,
              width: "120px",
              height: "20px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            label={orderTypeText}
            component="a"
            href="#"
            clickable={false}
          />
          <div className={classes.end}>
            <AccessTimeIcon style={{ height: "20px" }} />
            {/* {date?.split("T")[0]} */}
            {date}
          </div>
          <div className={classes.price}>$ {price}</div>
        </div>
      </div>
      <Divider className={classes.devider} />
      <div className={classes.bottomSegment}>
        <div>View Orders</div>
        {showBar && (
          <div className={classes.green}>
            <LinearProgress
              variant="determinate"
              value={40}
              className={classes.bar}
            />
          </div>
        )}

        <div className={classes.chatBox}>
          <ChatBubbleOutlineOutlinedIcon />

          <Avatar
            className={classes.img}
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
