var addEx = (name, desc, reps, repInfo, misc) => ({
  type: 'ADD_EX',
  name: name,
  description: desc,
  reps: reps,
  repInfo: repInfo,
  misc: misc,
});

export default addEx;

// [
//   {
//     name: 'jump squats',
//     reps: 15,
//     repInfo: null,
//     description: null,
//   },
//   {
//     name: 'jump lunges',
//     reps: 10,
//     repInfo: 'each side',
//     description: null,
//   },
//   {
//     name: 'squats',
//     reps: 15,
//     repInfo: null,
//     description: 'traditional squat',
//   },
//   {
//     name: 'lunges',
//     reps: 10,
//     repInfo: 'each side',
//     description: 'traditional lunge',
//   },
//   {
//     name: 'elevated bulgarian split squats',
//     reps: 10,
//     repInfo: 'each side',
//     description: 'back leg elevated, perform a split squat',
//   },
//   {
//     name: 'uni-kick lunges',
//     reps: 10,
//     repInfo: 'each side',
//     description: 'go from a backward lunge to a kick',
//   },
//   {
//     name: 'crab-walk squats',
//     reps: 20,
//     repInfo: null,
//     description: 'sideways squat, activate glutes',
//   },
//   {
//     name: 'pulse lunges',
//     reps: 10,
//     repInfo: 'each side',
//     description: null,
//   }
// ];
