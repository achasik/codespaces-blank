import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import Menu from "./Menu";
import { useContext } from "react";
import { UserContext } from "../lib/UserContext";
// import {User} from '../models/User'
// import UserContext from "../lib/UserContext";
//import { UserContext } from "../lib/UserContext";

const Header = () => {
  const user = useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Menu onClick={toggleDrawer} />
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar position="static" sx={{ color:'black', backgroundColor:'#f9bd27' }}> */}
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              component="div"
              onClick={() => toggleDrawer(true)}
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
              variant="subtitle2"
              component="div"
              sx={{ textAlign: "right" }}
            >
              {user.displayName}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
