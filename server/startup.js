Meteor.startup(function () {	


  if(Poems.find().count() == 0){
    var poem_id = Poems.insert({
      htmlContent: "<h1>The Love Song of J. Alfred Prufrock</h1>T.S. Eliot<br><br><br>LET us go then, you and I,	<br>When the evening is spread out against the sky	<br>Like a patient etherized upon a table;	<br>Let us go, through certain half-deserted streets,	<br>The muttering retreats<br>Of restless nights in one-night cheap hotels	<br>And sawdust restaurants with oyster-shells:	<br>Streets that follow like a tedious argument	<br>Of insidious intent	<br>To lead you to an overwhelming question….<br>Oh, do not ask, “What is it?”	<br>Let us go and make our visit."
    })  
    
    var assignment_id = Assignments.insert({
      poem_id: poem_id,
      owner_id: "0"
    })  
    
    Annotations.insert({
      assignment_id: assignment_id,
      start: 100,
      end: 130
    })
    
    Annotations.insert({
      assignment_id: assignment_id,
      start: 200,
      end: 250
    })
  }
})