// import GeneralSettings from "../pages/person/GeneralSettings";
// import MeasurementSettings from "../pages/person/MeasurementSettings";
// import PersonDashboard from "../pages/person/PersonDashboard";
// import PersonOrderList from "../pages/person/PersonOrderList";

// export const personPaths = [
//     {
//       name: 'Dashboard',
//       path: 'dashboard',
//       element: <PersonDashboard />,
//     },
//      {
//       name: 'Orders List',
//       path: 'orders-list',
//       element: <PersonOrderList />,
//     },
//     {
//       name: 'Measurement Settings',
//       path: 'measurement-settings',
//       element: <MeasurementSettings />,
//     },
//     {
//       name: 'GeneralSettings',
//       path: 'general-settings',
//       element: <GeneralSettings />,
//     },


    
//   ];



import GeneralSettings from "../pages/person/GeneralSettings";
import MeasurementSettings from "../pages/person/MeasurementSettings";
import PersonDashboard from "../pages/person/PersonDashboard";
import PersonOrderList from "../pages/person/PersonOrderList";
import dhActive from "../assets/dashboardActiveIcon.png";
import dhInactive from "../assets/dashboardInActiveIcon.png";
import orderListActive from "../assets/orderListActiveIcon.png";
import orderListInActive from "../assets/orderListInactiveIcon.png";
import MeasurementSettingsActiveIcon from "../assets/MeasurementSettingsActiveIcon.png";
import MeasurementSettingsInActiveIcon from "../assets/MeasurementSettingsInActiveIcon.png";
import GeneralSettingsActiveIcon from "../assets/GeneralSettingsActiveIcon.png";
import GeneralSettingsInActiveIcon from "../assets/GeneralSettingsInActiveIcon.png";

export const personPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <PersonDashboard />,
    icons: {
      active: dhActive,
      inactive: dhInactive
    }
  },
  {
    name: 'Orders List',
    path: 'orders-list',
    element: <PersonOrderList />,
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
