export const fontSizeOptions = {
  titleDefaultFontSize: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--titleFontSize")
  ),
  navigationDefaultFontSize: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--navigationFontSize")
  ),
  headerLinksDefaultFontSize: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--headerLinksFontSize")
  ),
  headerLinksDefaultFontSizeLaptop: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--headerLinksFontSizeLaptop")
  ),
  headerLinksDefaultFontSizeMobile: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--headerLinksFontSizeMobile")
  ),
  headerLinksDefaultGap: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--headerLinksGap")
  ),
  footerLinksDefaultFontSize: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--footerLinksFontSize")
  ),
  newsTitleDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--newsTitle")
  ),
  newsTitleShowMoreDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--newsTitleShowMore")
  ),
  newsTextDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--newsText")
  ),
  newsTextShowMoreDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--newsTextShowMore")
  ),
  newsReadMoreDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--readMore")
  ),
  newsDateDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--newsDate")
  ),
  aboutCardsDefaultTemplate: 3,
  aboutItemFontSizeDefault: parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--aboutItemFontSize")
  ),
};

export function increaseFontSize() {
  const increasedFontSize = `; --titleFontSize: ${
    fontSizeOptions.titleDefaultFontSize + 15 + "px"
  }; --navigationFontSize: ${
    fontSizeOptions.navigationDefaultFontSize + 10 + "px"
  }; --headerLinksFontSize: ${
    fontSizeOptions.headerLinksDefaultFontSize + 15 + "px"
  }; --headerLinksFontSizeLaptop: ${
    fontSizeOptions.headerLinksDefaultFontSizeLaptop + 20 + "px"
  }; --headerLinksFontSizeMobile: ${
    fontSizeOptions.headerLinksDefaultFontSizeMobile + 15 + "px"
  }; --footerLinksFontSize: ${
    fontSizeOptions.footerLinksDefaultFontSize + 5 + "px"
  }; --headerLinksGap: 10px; --newsTitle: ${
    fontSizeOptions.newsTitleDefault + 15 + "px"
  }; --newsTitleShowMore: ${
    fontSizeOptions.newsTitleShowMoreDefault + 20 + "px"
  }; --newsText: ${
    fontSizeOptions.newsTextDefault + 5 + "px"
  }; --newsTextShowMore: ${
    fontSizeOptions.newsTextShowMoreDefault + 10 + "px"
  }; --readMore: ${
    fontSizeOptions.newsReadMoreDefault + 10 + "px"
  }; --newsDate: ${
    fontSizeOptions.newsDateDefault + 10 + "px"
  }; --aboutCardsTemplate: ${
    fontSizeOptions.aboutCardsDefaultTemplate - 1
  }; --aboutItemFontSize: ${
    fontSizeOptions.aboutItemFontSizeDefault + 10 + "px"
  };`;
  localStorage.setItem("fontSizeAdaptivity", increasedFontSize);
}

export function decreaseFontSize() {
  const decreasedFontSize = `; --titleFontSize: ${
    fontSizeOptions.titleDefaultFontSize + "px"
  }; --navigationFontSize: ${
    fontSizeOptions.navigationDefaultFontSize + "px"
  }; --headerLinksFontSize: ${
    fontSizeOptions.headerLinksDefaultFontSize + "px"
  }; --headerLinksFontSizeLaptop: ${
    fontSizeOptions.headerLinksDefaultFontSizeLaptop + "px"
  }; --headerLinksFontSizeMobile: ${
    fontSizeOptions.headerLinksDefaultFontSizeMobile + "px"
  }; --headerLinksGap: ${
    fontSizeOptions.headerLinksDefaultGap + "px"
  }; --footerLinksFontSize: ${
    fontSizeOptions.footerLinksDefaultFontSize + "px"
  }; --newsTitle: ${
    fontSizeOptions.newsTitleDefault + "px"
  }; --newsTitleShowMore: ${
    fontSizeOptions.newsTitleShowMoreDefault + "px"
  }; --newsText: ${
    fontSizeOptions.newsTextDefault + "px"
  }; --newsTextShowMore: ${
    fontSizeOptions.newsTextShowMoreDefault + "px"
  }; --readMore: ${fontSizeOptions.newsReadMoreDefault + "px"}; --newsDate: ${
    fontSizeOptions.newsDateDefault + "px"
  }; --aboutCardsTemplate: ${
    fontSizeOptions.aboutCardsDefaultTemplate
  }; --aboutItemFontSize: ${fontSizeOptions.aboutItemFontSizeDefault + "px"};`;
  localStorage.setItem("fontSizeAdaptivity", decreasedFontSize);
}
