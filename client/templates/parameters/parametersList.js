Template.parametersList.helpers({
  parametersClass: function() {
    return classes.findOne({_id: Session.get('classId')});
  }
});

Template.parametersList.events({
  'change #studentImg': function(event) {
    event.preventDefault();
    Meteor.call('studentImgUpdate', Session.get('classId'), event.currentTarget.value);
  },
  'change #groupImg': function(event) {
    event.preventDefault();
    Meteor.call('groupImgUpdate', Session.get('classId'), event.currentTarget.value);
  }
});
