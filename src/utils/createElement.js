export const createElement = (props) => {
  const $element = document.createElement(props.tagName);

  props.className &&
    props.className.forEach((className) => {
      $element.classList.add(className);
    });

  if (props.textContent) $element.textContent = props.textContent;

  return $element;
};
