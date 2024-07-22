import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemBaseProps,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

type MenuItemType = {
  text: string;
  to?: string;
  hidden?: boolean;
  subMenu?: MenuItemType[];
  onClick?: (open: boolean) => void;
};

const menuItems: MenuItemType[] = [
  { text: "Домашняя", to: "/" },
  { text: "Two", subMenu: [{ text: "2.1", to: "/new" }] },
  { text: "Old", to: "/lndcard" },
];

const Menu: FC<{ onClick(open: boolean): void }> = ({ onClick }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        {menuItems.map((item) => {
          if (item.hidden) return null;
          item.onClick = onClick;
          return item.subMenu ? (
            <Submenu key={item.text} {...item} />
          ) : (
            <MenuItem key={item.text} {...item} />
          );
        })}
      </List>
    </Box>
  );
};
const MenuItem: FC<MenuItemType & { sx?: ListItemBaseProps["sx"] }> = ({
  to,
  text,
  onClick,
  sx,
}) => (
  <ListItemButton
    component={Link}
    to={to || "#"}
    onClick={() => {
      onClick ? onClick(false) : {};
    }}
    sx={sx}
  >
    <ListItemText primary={text} />
  </ListItemButton>
);

const Submenu: FC<MenuItemType> = ({ text, subMenu, onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu &&
            subMenu.map((item) => {
              if (item.hidden) return null;
              item.onClick = onClick;
              return <MenuItem {...item} sx={{ pl: 4 }} />;
            })}
        </List>
      </Collapse>
    </>
  );
};
export default Menu;
