export const importCSS = (resultLink) => {
  const $head = document.querySelector("head");
  const $link = document.createElement("link");
  $link.setAttribute("rel", "stylesheet");
  $link.setAttribute("href", resultLink);

  $head.appendChild($link);
};

//<link rel="stylesheet" href="./src/styles/global.css" />
