var updateEx = (id, name, desc, reps, repInfo, misc, videoLink) => ({
  type: 'UPDATE_EX',
  id: id,
  name: name,
  description: desc,
  reps: reps,
  repInfo: repInfo,
  misc: misc,
  videoLink: videoLink,
});

export default updateEx;
