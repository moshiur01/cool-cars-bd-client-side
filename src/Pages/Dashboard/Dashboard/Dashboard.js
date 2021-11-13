import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddCars from "../AddCars/AddCars";
import AddReview from "../AddReview/AddReview";
import MakePayment from "../MakePayment/MakePayment";
import ManageOrders from "../ManageOrders/ManageOrders";
import useAuth from "../../hooks/useAuth/useAuth";
import ManageCars from "../ManageCars/ManageCars";
import AdminRoute from "../MakeAdmin/AdminRoute";

const drawerWidth = 200;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { logout, admin } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Box sx={{ textAlign: "center" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="text">Home</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}`}>
          <Button variant="text">My Orders</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}/makePayment`}>
          <Button variant="text">Payment</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}/addReview`}>
          <Button variant="text">Add Review</Button>
        </Link>
        <br />

        {admin && (
          <Box>
            <Divider />
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button variant="text">Make Admin</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/manageOrders`}>
              <Button variant="text">Manage Orders</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/manageCars`}>
              <Button variant="text">Manage Cars</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/addCars`}>
              <Button variant="text">Add Cars</Button>
            </Link>
          </Box>
        )}
        <Button variant="text" onClick={logout}>
          Logout
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>

          <Route exact path={`${path}/makePayment`}>
            <MakePayment></MakePayment>
          </Route>
          <Route exact path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>

          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageCars`}>
            <ManageCars></ManageCars>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addCars`}>
            <AddCars></AddCars>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
