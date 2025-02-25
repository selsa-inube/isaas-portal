import { MdApps, MdMiscellaneousServices, MdOutlineAccountTree, MdOutlineCategory, MdOutlineCorporateFare, MdOutlineEngineering, MdOutlineEvent, MdOutlineSettings } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const appCards: ICardData[] = [
  {
    id: "SaasService",
    label: "Servicio Saas",
    description: "Servicio Saas.",
    icon: <MdOutlineSettings />,
    url: "/positions",
  },
  {
    id: "Suites",
    label: "Suites",
    description: "Suites.",
    icon: <MdOutlineCategory />,
    url: "/positions",
  },
  {
    id: "Apps",
    label: "Aplicaciones",
    description: "Aplicaciones.",
    icon: <MdApps />,
    url: "/positions",
  },
  {
    id: "Entities",
    label: "Entidades",
    description: "Entidades.",
    icon: <MdOutlineCorporateFare />,
    url: "/positions",
  },
  {
    id: "UseCases",
    label: "Casos de uso",
    description: "Casos de uso.",
    icon: <MdOutlineAccountTree />,
    url: "/positions",
  },
  {
    id: "Microservices",
    label: "Microservicios",
    description: "Microservicios.",
    icon: <MdMiscellaneousServices />,
    url: "/positions",
  },
  {
    id: "Processes",
    label: "Procesos",
    description: "Procesos.",
    icon: <MdOutlineEngineering />,
    url: "/positions",
  },
  {
    id: "Events",
    label: "Eventos",
    description: "Eventos.",
    icon: <MdOutlineEvent />,
    url: "/positions",
  },
];

export { appCards };
