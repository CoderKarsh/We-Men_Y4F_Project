export const Colors = {
    "background": (opacity) => (`rgba(255, 255, 255, ${opacity})`),
    "gray": (opacity) => (`rgba(125, 125, 125, ${opacity})`),
    "darkGray": (opacity) => (`rgba(48, 48, 48, ${opacity})`),
    "fontBlack": (opacity) => (`rgba(1, 0, 28, ${opacity})`),
    "peach": (opacity) => (`rgba(254, 160, 158, ${opacity})`),
    "darkPeach": (opacity) => (`rgba(254, 129, 127, ${opacity})`),
    "fontRed": (opacity) => (`rgba(251, 77, 95, ${opacity})`),
};

export const Images = {
    "sos": require("../assets/images/SOSButton.png"),
    "placeholder": require("../assets/images/placeholder.png"),
    "safestroute": require("../assets/images/safestroute.png"),
    "legalhelp": require("../assets/images/legalhelp.png"),
    "devices": require("../assets/images/devices.png"),
    "devices2": require("../assets/images/devices2.png"),
    "smartwatchApp": require("../assets/images/smartwatchApp.png"),
    "home": require("../assets/images/home.png"),
    "logo": require("../assets/images/logo.png"),
};