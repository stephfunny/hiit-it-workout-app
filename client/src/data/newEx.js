var newEx = function(name, reps, repInfo, description) {
  return {
    name: name || null,
    reps: reps || null,
    repInfo: repInfo || null,
    description: description || null,
    editing: false,
  };
};
export default newEx;
