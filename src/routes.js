import React, { useEffect } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  iconStyling1,
  iconStyling2,
} from "./components/Helpers/GlobalVariables";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

const routes = () => {
  return [
    {
      text: "Dashboard",
      icon: <DashboardRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <DashboardRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <Dashboard />,
      path: "/",
      childs: [],
    },
    {
      text: "Smart Schedule",
      icon: <EventRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <EventRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <h1>Smart Schedule</h1>,
      path: "/smart-schedule",
      childs: [],
    },
    {
      text: "Customers",
      icon: <PersonRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <PersonRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <h1>Customers</h1>,
      path: "/customers",
      childs: [],
    },
    {
      text: "Inventory",
      icon: <Inventory2RoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <Inventory2RoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <Dashboard />,
      path: "/inventory",
      childs: [
        {
          text: "Products",
          component: <h1>Products</h1>,
          path: "/inventory/products",
        },
        {
          text: "Kits",
          component: <h1>Kits</h1>,
          path: "/inventory/kits",
        },
        {
          text: "Locations",
          component: <h1>Locations</h1>,
          path: "/inventory/locations",
        },
        {
          text: "Reconcile",
          component: <h1>Reconcile</h1>,
          path: "/inventory/reconcile",
        },
      ],
    },
    {
      text: "Supply Chain",
      icon: <DonutLargeRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <DonutLargeRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <Dashboard />,
      path: "/supply-chain",
      childs: [
        {
          text: "Carriers",
          component: <h1>Hello</h1>,
          path: "/supply-chain/carriers",
        },
        {
          text: "Vendors",
          component: <h1>Hello 2</h1>,
          path: "/supply-chain/vendors",
        },
        {
          text: "Ship To",
          component: <Dashboard />,
          path: "/supply-chain/ship-to",
        },
        {
          text: "Needs",
          component: <Dashboard />,
          path: "/supply-chain/needs",
        },
        {
          text: "Invoices",
          component: <Dashboard />,
          path: "/supply-chain/invoices",
        },
      ],
    },
    {
      text: "Accounting",
      icon: <WorkRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <WorkRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <Dashboard />,
      path: "/accounting",
      childs: [
        {
          text: "Production Extras",
          component: <Dashboard />,
          path: "/accounting/production-extras",
        },
        {
          text: "Pricing",
          component: <Dashboard />,
          path: "/accounting/pricing",
        },
        {
          text: "Revenue",
          component: <Dashboard />,
          path: "/accounting/revenue",
        },
        {
          text: "Expenses",
          component: <Dashboard />,
          path: "/accounting/expenses",
        },
        {
          text: "Purchase Orders",
          component: <Dashboard />,
          path: "/accounting/purchase-orders",
        },
      ],
    },
    {
      text: "Reporting",
      icon: <BarChartRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <BarChartRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <h1>Reporting</h1>,
      path: "/reporting",
      childs: [],
    },

    {
      text: "Administration",
      icon: <BuildRoundedIcon fontSize="small" sx={iconStyling1} />,
      iconActive: <BuildRoundedIcon fontSize="small" sx={iconStyling2} />,
      component: <Dashboard />,
      path: "/administration",
      childs: [
        {
          text: "Users",
          component: <h1>Users</h1>,
          path: "/administration/users",
        },
        {
          text: "Facilities",
          component: <h1>Facilities</h1>,
          path: "/administration/facilities",
        },
        {
          text: "Integrations",
          component: <h1>Integrations</h1>,
          path: "/administration/integrations",
        },
      ],
    },
    // {
    //   text: "",
    //   icon: "",
    //   iconActive: "",
    //   component: <ProfileSettings />,
    //   path: "/profile",
    //   childs: [],
    // },
  ];
};
export default routes();
