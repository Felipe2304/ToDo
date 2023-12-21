import { createElement } from "../../utils/createElement.js";
import { importCSS } from "../../utils/importCSS.js";
import { setChildren } from "../../utils/setChildren.js";

importCSS("./src/components/Modal/modal.css");

export const Modal = () => {
  const $containerModal = createElement({
    tagName: "section",
    className: ["container-modal"],
    setAttribute: ["id", "container-modal-id"],
    onclick: (e) => {
      removeModal(e);
    },
  });

  return $containerModal;
};

export const BoxModal = () => {
  const $boxModal = createElement({
    tagName: "div",
    className: ["box-modal"],
  });

  return $boxModal;
};

const removeModal = (e) => {
  if (e.target.id === "container-modal-id")
    document.getElementById("container-modal-id").remove();
};
