import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const COLORS = {
    // base colors
    blue: "#0d6efd",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#d63384",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#198754",
    jade: "#00A36C",
    teal: "#20c997",
    cyan: "#0dcaf0",
    white: "#fff",
    lightGray: "#D3D3D3",
    black: "#000",
    gray: "#A9A9A9",
    primary: "#007bff"
}

export const SIZES = {

    // GLobal Size
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // Font Size
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // Add Dimenssion
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 36 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 }
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;