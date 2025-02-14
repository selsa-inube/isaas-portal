import { inube } from "@inubekit/inubekit";

const tokens = {
  primary: {
    content: {
      color: {
        regular: inube.palette.blue.B400,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.blue.B300,
      },
    },
  },
  success: {
    content: {
      color: {
        regular: inube.palette.green.G400,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.green.G300,
      },
    },
  },
  warning: {
    content: {
      color: {
        regular: inube.palette.yellow.Y400,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.yellow.Y300,
      },
    },
  },
  danger: {
    content: {
      color: {
        regular: inube.palette.red.R400,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.red.R300,
      },
    },
  },
  help: {
    content: {
      color: {
        regular: inube.palette.purple.P400,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.purple.P300,
      },
    },
  },
  dark: {
    content: {
      color: {
        regular: inube.palette.neutral.N900,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.neutral.N500,
      },
    },
  },
  gray: {
    content: {
      color: {
        regular: inube.palette.neutral.N300,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.neutral.N100,
      },
    },
  },
  light: {
    content: {
      color: {
        regular: inube.palette.neutral.N10,
        disabled: inube.palette.neutral.N90,
        hover: inube.palette.neutral.N0,
      },
    },
  },
};

export { tokens };