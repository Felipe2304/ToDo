import { createElement } from "../../utils/createElement.js";

export const ButtonAddList = () => {
  const $buttonAddList = createElement({
    tagName: "button",
    textContent: "Add list",
  });

  return $buttonAddList;
};
