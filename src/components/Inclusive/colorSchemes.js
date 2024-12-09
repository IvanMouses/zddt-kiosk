export const colorSchemesOptions = {
  mainBGColorDefault: "#f7f7f7",
  secondaryBGColorDefault: "#fff",
  cardBGColorDefault: "#fff",
  headerBGColorDefault: "rgb(219, 240, 253)",
  headerBGColorAccentDefault: "rgb(175, 224, 255)",
  footerBGColorDefault: "rgb(80, 80, 80)",
  footerBannersBGColorDefault: "#fff",
  mainColorDefault: "rgba(0, 0, 0, 0.8)",
  footerLinksColorDefault: "rgba(255, 255, 255, 0.8)",
  extraYellowDefault: "#fdde55",
  invertedColor0Default: "invert(0)",
  tablesBGColorDefault: "#f7f7f7",
  linksColorDefault: "#1e90ff",
  coursesCardsButtonColorDefault: "rgb(219, 240, 253)",
  coursesCardsButtonActiveColorDefault: "rgb(175, 224, 255)",
  VKIconColorDefault: "#0000ff",
};

export function switchToLightMode() {
  const lightMode = `; --mainBGColor: ${colorSchemesOptions.mainBGColorDefault}; --secondaryBGColor: ${colorSchemesOptions.secondaryBGColorDefault}; --headerBGColor: ${colorSchemesOptions.headerBGColorDefault}; --headerBGColorAccent: ${colorSchemesOptions.headerBGColorAccentDefault}; --mainColor: ${colorSchemesOptions.mainColorDefault}; --invertedColor0: ${colorSchemesOptions.invertedColor0Default}; --cardBGColor: ${colorSchemesOptions.cardBGColorDefault}; --footerBGColor: ${colorSchemesOptions.footerBGColorDefault}; --footerLinksColor: ${colorSchemesOptions.footerLinksColorDefault}; --footerBannersBGColor: ${colorSchemesOptions.footerBannersBGColorDefault}; --tablesBGColor: ${colorSchemesOptions.tablesBGColorDefault}; --linksColor: ${colorSchemesOptions.linksColorDefault}; --coursesCardsButtonColor: ${colorSchemesOptions.coursesCardsButtonColorDefault}; --coursesCardsButtonActiveColor: ${colorSchemesOptions.coursesCardsButtonActiveColorDefault}; --VKIconColor: ${colorSchemesOptions.VKIconColorDefault};`;
  localStorage.setItem("colorScheme", lightMode);
}

export function switchToDarkMode() {
  const darkMode = `; --mainBGColor: #000; --secondaryBGColor: #000; --headerBGColor: #3C3D37; --headerBGColorAccent:
    ${colorSchemesOptions.footerBGColorDefault}; --mainColor: #fff; --invertedColor0: invert(100%); --cardBGColor: #3C3D37; --footerBGColor: #3C3D37; --footerLinksColor: #fff; --footerBannersBGColor: ${colorSchemesOptions.footerBGColorDefault}; --tablesBGColor: #3C3D37; --linksColor: #ff407d; --coursesCardsButtonColor: ${colorSchemesOptions.footerBGColorDefault}; --coursesCardsButtonActiveColor: #1E201E; --VKIconColor: #ff407d;`;
  localStorage.setItem("colorScheme", darkMode);
}
