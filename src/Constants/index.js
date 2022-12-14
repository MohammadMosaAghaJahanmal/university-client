export const Colors = {
  white: "#ffffff",
  black: "#000000",
  green: "#8ac53a",
  blue: "#0080d6",
  yellow: "#facc07",
  darkGreen: "#007600",
  darkBlue: "#002060",
  textColor: "#3e4958"
}

export const menus = [
  {
    name: "About", 
    mainLink: "/", 
    nested: false 
  },
  {
    name: "Qec", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/blah"}, {name: "Some Two", link: "/a1"}, {name: "Some Text", link: "/a2"}, {name: "Some Text", link: "/a3"}],
    nested: false 
  },
  {
    name: "Programs", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/a4"}, {name: "Some Two", link: "/a5"}, {name: "Some Text", link: "/a6"}, {name: "Some Text", link: "/a7"}],
    nested: false 
  },
  {
    name: "Admission", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/a12"}, {name: "Some Two", link: "/a23"}, {name: "Some Text", link: "/a13"}, {name: "Some Text", link: "/a14"}],
    nested: false 
  },
  {
    name: "R&D", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/a15"}, {name: "Some Two", link: "/a21"}, {name: "Some Text", link: "/a23"}, {name: "Some Text", link: "/a24"}],
    nested: false 
  },
  {
    name: "Events", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/a42"}, {name: "Some Two", link: "/a124"}, {name: "Some Text", link: "/a132"}, {name: "Some Text", link: "/a432"}],
    nested: false 
  },
  {
    name: "News", 
    mainLink: undefined, 
    links: [{name: "Some Text", link: "/firstNews"}, {name: "Some Two", link: "/a123"}, {name: "Some Text", link: "/a435"}, {name: "Some Text", link: "/a1223"}],
    nested: false 
  },
  {
    name: "Contact", 
    mainLink: "/contact", 
    nested: false 
  },
  {
    name: "OneOther", 
    mainLink: "other", 
    nested: false 
  },
  {
    name: "OtherToo", 
    mainLink: "othert", 
    nested: false 
  },
]
export const headHeight = 65;