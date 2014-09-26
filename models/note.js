var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  noteBody: String,
  name: String,
  course: String,
  rtg1: String,
  rtg2: String,
  rtg3: String,
  goal: String,
  note: String
});

module.exports = mongoose.model('Note', noteSchema);

// <input type="text" data-ng-model="newNote.noteBody">
//   <p>name</p>
//   <input type="text" data-ng-model="newNote.name">
//   <p>course</p>
//   <input type="text" data-ng-model="newNote.course">
//   <p>raiting 1</p>
//   <input type="text" data-ng-model="newNote.rtg1">
//   <p>raiting 2</p>
//   <input type="text" data-ng-model="newNote.rtg2">
//   <p>raiting 3</p>
//   <input type="text" data-ng-model="newNote.rtg3">
//   <p>note</p>
//   <input type="text" data-ng-model="newNote.note">
