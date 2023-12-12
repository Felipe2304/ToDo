import { createElement } from "../utils/createElement.js";
import { importCSS } from "../utils/importCSS.js";
import { setChildren } from "../utils/setChildren.js";
import { ListTaskItem } from "../components/ListTaskItem/index.js";
importCSS("./src/containerList/containerList.css");

export const containerList = () => {
  const $containerList = createElement({
    tagName: "div",
    className: ["container-list"],
  });

  const $headerMenuList = createElement({
    tagName: "header",
    className: ["header-menu-list"],
  });

  const $headerMenuListTitle = createElement({
    tagName: "h3",
    className: ["text-title"],
    textContent: "Lists",
  });

  const $headerMenuListIcon = createElement({
    tagName: "img",
    className: ["header-menu-list-icon"],
    setAttribute: ["src", "./src/assets/menu.png"],
  });

  const $listTasks = createElement({
    tagName: "ul",
    className: ["list-tasks"],
  });

  const $listTaskItem = ListTaskItem();

  setChildren($headerMenuList, [$headerMenuListTitle]);
  setChildren($headerMenuList, [$headerMenuListIcon]);
  setChildren($containerList, [$headerMenuList]);
  setChildren($listTasks, [$listTaskItem]);
  setChildren($containerList, [$listTasks]);

  return $containerList;
};
