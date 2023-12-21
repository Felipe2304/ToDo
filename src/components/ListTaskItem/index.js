import { createElement } from "../../utils/createElement.js";
import { importCSS } from "../../utils/importCSS.js";
import { setChildren } from "../../utils/setChildren.js";

importCSS("./src/components/ListTaskItem/listTaskItem.css");

export const ListTaskItem = () => {
  const $listTaskItem = createElement({
    tagName: "li",
    className: ["list-task-item"],
  });

  const $listTaskItemBall = createElement({
    tagName: "div",
    className: ["list-task-item-ball"],
  });

  const $listTaskItemTitle = createElement({
    tagName: "p",
    className: ["list-task-item-title"],
    textContent: "All",
  });

  setChildren($listTaskItem, [$listTaskItemBall]);
  setChildren($listTaskItem, [$listTaskItemTitle]);

  return $listTaskItem;
};
