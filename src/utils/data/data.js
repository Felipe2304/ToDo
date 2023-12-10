let tasksList = [];

const create = (nome, idade, gênero) => {
  return tasksList.push({
    nome: nome,
    idade: idade,
    gênero: gênero,
  });
};

create("felipe", 20, "masculino");
create("marcia", 30, "feminino");
create("janete", 20, "não declarado");

const read = () => {
  return [...tasksList];
};

const update = (position, newInfo) => {
  const updateList = tasksList.map((info, index) => {
    if (position == index) {
      return {
        nome: info.nome,
        idade: newInfo,
        gênero: info.gênero,
      };
    }

    return info;
  });

  tasksList = updateList;
};
update(2, 37);

// console.log(tasksList);

const deleted = (position) => {
  const newList = tasksList.filter((_info, index) => {
    return position !== index;
  });

  tasksList = newList;
};

deleted(0);

// console.log(tasksList);
read();
