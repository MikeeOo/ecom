export const components = {
    Nav: "nav",
    Header: "header",
    Main: "main",
    Footer: "footer",
    Section: "section",
    Article: "article",
    Aside: "aside",
    Ul: "ul",
    Li: "li",
    Div: "div",
    Span: "span",
} as const;
export type Tag = (typeof components)[keyof typeof components];
