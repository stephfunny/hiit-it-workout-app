var updateEx = (id, name, reps, desc, misc, mediaLink) => ({
  type: 'UPDATE_EX',
  id: id,
  name: name,
  description: desc,
  reps: reps,
  misc: misc,
  mediaLink: mediaLink,
});

export default updateEx;
