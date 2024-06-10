

import GeneralSettings from "../pages/user/GeneralSettings";
import MeasurementSettings from "../pages/user/MeasurementSettings";
import dhActive from "../assets/dashboardActiveIcon.png";
import dhInactive from "../assets/dashboardInActiveIcon.png";
import orderListActive from "../assets/orderListActiveIcon.png";
import orderListInActive from "../assets/orderListInactiveIcon.png";
import MeasurementSettingsActiveIcon from "../assets/MeasurementSettingsActiveIcon.png";
import MeasurementSettingsInActiveIcon from "../assets/MeasurementSettingsInActiveIcon.png";
import GeneralSettingsActiveIcon from "../assets/GeneralSettingsActiveIcon.png";
import GeneralSettingsInActiveIcon from "../assets/GeneralSettingsInActiveIcon.png";
import UserDashboard from "../pages/user/UserDashboard";
import OrderList from "../pages/user/OrderList";

export const personPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <UserDashboard />,
    icons: {
      active: dhActive,
      inactive: dhInactive
    }
  },
  {
    name: 'Orders List',
    path: 'orders-list',
    element: <OrderList />,
    icons: {
      active: orderListActive,
      inactive: orderListInActive
    }
  },
  {
    name: 'Measurement Settings',
    path: 'measurement-settings',
    element: <MeasurementSettings />,
    icons: {
      active: MeasurementSettingsActiveIcon,
      inactive: MeasurementSettingsInActiveIcon
    }
  },
  {
    name: 'General Settings',
    path: 'general-settings',
    element: <GeneralSettings />,
    icons: {
      active: GeneralSettingsActiveIcon,
      inactive: GeneralSettingsInActiveIcon
    }
  }
];
