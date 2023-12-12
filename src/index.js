import { createElement } from "./utils/createElement.js";
import { setChildren } from "./utils/setChildren.js";
import { importCSS } from "./utils/importCSS.js";
import { dataList } from "./data/data.js";
import { containerList } from "./containerList/index.js";
const $root = document.querySelector("#root");

const $container = createElement({
  tagName: "section",
  className: ["container"],
});

const $containerList = containerList();

setChildren($container, [$containerList]);
setChildren($root, [$container]);
