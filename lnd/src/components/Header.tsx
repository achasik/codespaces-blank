import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";

export default function MenuAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar position="static" sx={{ color:'black', backgroundColor:'#f9bd27' }}> */}
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              component="div"
              onClick={toggleDrawer(true)}
            >
              Меню
            </Button>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 8,
                textAlign: "left",
                fontWeight: "bold",
                lineHeight: "1em",
                marginLeft: "3em",
              }}
            >
              Информационная система
              <br />
              нормативного обеспечения бизнеса
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 3, textAlign: "right" }}
            >
              Info Info Info Info Info Info Info Info
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
