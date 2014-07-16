Meteor.publish('assignments', function () {
  return Assignments.find()
});

Meteor.publish('poems', function () {
  return Poems.find()
});

Meteor.publish('annotations', function () {
  return Annotations.find()
});