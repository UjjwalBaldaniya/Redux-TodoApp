const saveData = (state) => {
  localStorage.setItem("state", state);
};

const getData = () => {
  const lsData = localStorage.getItem("state");
  if (lsData === null) {
    return undefined;
  }
  return JSON.parse(lsData);
};

export { saveData, getData };
