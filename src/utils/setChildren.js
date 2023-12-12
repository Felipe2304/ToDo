export const setChildren = (parent, listChildren) => {
  const resultList = listChildren.forEach((child) => {
    parent.appendChild(child);
  });

  return resultList;
};
