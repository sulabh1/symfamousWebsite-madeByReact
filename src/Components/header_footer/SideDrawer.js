import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.onClose(false);
      }}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          HOME
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          MY INFO
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          MY ALBUM
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          MIXTAPES
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          SEND ME A MAIL
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          ABOUT ME
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
