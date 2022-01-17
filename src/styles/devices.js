const size = {
  mobile: "500px",
  tablet: "1023px",
  desktop: "1024px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
