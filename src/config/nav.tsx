import {
  MdVpnKey,
  MdOutlineSettings,
  MdLogout,
  MdOutlineCategory,
  MdApps,
  MdOutlineAccountTree,
  MdOutlineCorporateFare,
  MdMiscellaneousServices,
  MdOutlineEngineering,
  MdOutlineEvent,
} from "react-icons/md";

import { INav } from "@pages/home/types";
const appsConfig = [
  {
    id: 1,
    label: "Cargos",
    description: "Gestionar los Cargos y sus privilegios",
    icon: <MdVpnKey />,
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/positions",
        label: "Cargos",
        id: "/positions",
        isActive: true,
      },
    ],
    url: "/positions",
  },
];

const nav: INav = {
  items: {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: {
          positions: {
            id: "SaasService",
            label: "Servicio Saas",
            icon: <MdOutlineSettings />,
            path: "/positions",
          },
          suites: {
            id: "Suites",
            label: "Suites",
            icon: <MdOutlineCategory />,
            path: "/positions",
          },
          apps: {
            id: "Apps",
            label: "Aplicaciones",
            icon: <MdApps />,
            path: "/positions",
          },
          entities: {
            id: "Entities",
            label: "Entidades",
            icon: <MdOutlineCorporateFare />,
            path: "/positions",
          },
          useCases: {
            id: "UseCases",
            label: "Casos de uso",
            icon: <MdOutlineAccountTree />,
            path: "/positions",
          },
          microservices: {
            id: "Microservices",
            label: "Microservicios",
            icon: <MdMiscellaneousServices />,
            path: "/positions",
          },
          processes: {
            id: "Processes",
            label: "Procesos",
            icon: <MdOutlineEngineering />,
            path: "/positions",
          },
          events: {
            id: "Events",
            label: "Eventos",
            icon: <MdOutlineEvent />,
            path: "/positions",
          },
        },
      },
    },
  },
  breakpoint: "848px",
};

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig, userMenu };
