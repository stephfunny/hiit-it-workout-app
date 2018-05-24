var editEx = (id, name, desc, reps, repInfo, misc) => ({
  type: 'Edit_EX',
  name: name,
  description: desc,
  reps: reps,
  repInfo: repInfo,
  misc: misc,
});

export default editEx;
