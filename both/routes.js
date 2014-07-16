splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

Router.map(function () {
  this.route('assignment', {
    path: '/assignment/:id',
    template: 'assignment',
    waitOn: function(){
      var assignment_id = this.params.id
      return Meteor.subscribe('assignments')
      //Meteor.subscribe('poems')
      //Meteor.subscribe('annotations')
    },
    data: function(){
      var assignment_id = this.params.id
      var assignment = Assignments.findOne({_id: assignment_id})

      var poem_id = assignment.poem_id
      var poem = Poems.findOne({_id:poem_id}).htmlContent
      
      var annotations = Annotations.find({assignment_id: assignment_id}).fetch()
      
      _.each(annotations, function(annotation){
        var start = annotation.start
        var end = annotation.end
        poem = poem.substring(0, start) + "<b>" + poem.substring(start, poem.length)
        poem = poem.substring(0, end) + "</b>" + poem.substring(end, poem.length)
        //poem.splice( start, 0, "<b> " );
        //poem.splice( end, 0, "</b> " );
      })
      console.log(poem)
      return {poem: poem, annotations: annotations}
    },
    action: function(){
      this.render()
    }
    
    })
});