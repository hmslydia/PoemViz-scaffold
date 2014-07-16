
1. Install Iron-Router
mrt add iron-router

2. If you Meteor hassels you about auto-publish, turn it off
meteor remove autopublish

Test:

1. You should be able to see one assignment by querying the database on the client (in the Javascript console)
Assignments.findOne()

2.  If that works, get the id of that assignment
Assignments.findOne()._id

3. Go the the URL: http://localhost:3000/assignment/##############
(replace # with the result of the previous step)
You should see a poem and 2 annotations (in bold)

4. At the console, create a new Annotation and make sure it shows up dynamically:

Annotations.insert({
  assignment_id: '###put assignment id here ###',
  start: 260,
  end: 270
})