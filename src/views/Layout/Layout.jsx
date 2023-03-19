import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ChevronLeft,
  Menu,
  Home,
  AutoAwesomeMosaic,
  Settings,
} from "@mui/icons-material";
import { Drawer, DrawerHeader, SideBar } from "./Layout.styled";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 200;

  const list = [
    { name: "Home", icon: <Home /> },
    {
      name: "Gallery",
      icon: <AutoAwesomeMosaic />,
    },
    {
      name: "Settings",
      icon: <Settings />,
    },
  ];

  return (
    <>
      <SideBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader open={open}>
            {open ? (
              <IconButton aria-label="close drawer" onClick={toggleDrawer}>
                <ChevronLeft color="secondary" />
              </IconButton>
            ) : (
              <IconButton aria-label="open drawer" onClick={toggleDrawer}>
                <Menu color="secondary" />
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <List sx={{ mt: 3 }}>
            {list.map(({ name, icon }) => (
              <ListItem
                key={name}
                disablePadding
                sx={{ display: "block", mb: 3, color: "secondary.main" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "inherit",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            height: 1,
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </SideBar>
    </>
  );
}
