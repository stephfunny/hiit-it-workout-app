const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/hiit-it');


var WorkoutSchema = mongoose.Schema({
  _id: String,
  date: Date,
  exercises: Array,
  time: {
    move: Number,
    break: Number,
    warmUp: Number,
    coolDown: Number,
  },
  options: {
    exercises: Number,
    circuits: Number, // circuits will split exercises
    cycles: Number, // will multiply all exercises & circuits
  },
  phases: Array,
  currentPhase: Number,
  active: Boolean,
});

const WorkoutModel = mongoose.model('Workout', WorkoutSchema);

var removeAll = function(callback) {
  WorkoutModel.remove({}, callback);
};

var insertOne = function(data) {
  return WorkoutModel.create(data);
};

var findAll = function() {
  return WorkoutModel.find({});
};

var findOne = function(workoutId) {
  console.log('find one called');
  return WorkoutModel.findOne({'id': workoutId})
    .exec();
};

module.exports = {
  WorkoutSchema: WorkoutSchema,
  WorkoutModel: WorkoutModel,
  removeAll: removeAll,
  insertOne: insertOne,
  findAll: findAll,
  findOne: findOne,
};
