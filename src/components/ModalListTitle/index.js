import { Modal } from "../Modal/index.js";
import { importCSS } from "../../utils/importCSS.js";
import { createElement } from "../../utils/createElement.js";
import { setChildren } from "../../utils/setChildren.js";
import { BoxModal } from "../Modal/index.js";

importCSS("./src/components/ModalListTitle/modalListTitle.css");

export const ModalListTitle = () => {
  const $modal = Modal();
  const $boxModal = BoxModal();

  const $title = createElement({
    tagName: "h3",
    className: ["text-title", "title-modal-list"],
    textContent: "List title",
  });

  const $wrapperInputButton = createElement({
    tagName: "div",
    className: ["wrapper-input-button"],
  });

  const $inputBoxIcon = createElement({
    tagName: "div",
    className: ["input-box-icon"],
  });
  const $inputIcon = createElement({
    tagName: "b",
    textContent: "T",
  });

  const $input = createElement({
    tagName: "input",
    setAttribute: ["type", "text"],
    className: ["input"],
    setAttribute: ["placeholder", "Enter your title here..."],
  });

  const $buttonSave = createElement({
    tagName: "button",
    className: ["button-icon", "button-save"],
    textContent: "save",
  });

  const colorBalls = [
    { colorBall: "#0077EF", id: 1 },
    { colorBall: "#6500EF", id: 2 },
    { colorBall: "#C100EF", id: 3 },
    { colorBall: "#EF8100", id: 4 },
    { colorBall: "#EFCA00", id: 5 },
    { colorBall: "#00EFA5", id: 6 },
  ];

  const $colorPallet = createElement({
    tagName: "div",
    className: ["color-pallet"],
  });

  const addColoredBalls = () => {
    colorBalls.forEach((color) => {
      const $balls = createElement({
        tagName: "div",
        className: ["ball", "ball-" + color.id],
      });

      $balls.style.background = `${color.colorBall}`;

      setChildren($colorPallet, [$balls]);
    });
  };

  addColoredBalls();

  setChildren($inputBoxIcon, [$inputIcon, $input]);
  setChildren($wrapperInputButton, [$inputBoxIcon, $buttonSave]);
  setChildren($boxModal, [$title, $wrapperInputButton, $colorPallet]);
  setChildren($modal, [$boxModal]);

  return $modal;
};
