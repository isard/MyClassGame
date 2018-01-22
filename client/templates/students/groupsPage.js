Template.groupsPage.helpers({
  groups: function() {
    return groups.find({classId: Session.get('classId')}, {sort: {createdOn: -1}});
  },
  teacher: function() {
    if (Session.get('userType')=="teacher") {
     return true;
    } else {
     return false;
    };
  }
});
Template.groupsPage.events({
  'click .btn-delete-group': function(event) {
    event.preventDefault();
    Session.set('groupId', event.target.name);
    Modal.show('deleteGroup');
  },
  'click .btn-xp': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId', event.target.name);
    Modal.show('groupXPModal');
  },
  'click .btn-hp': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId', event.target.name);
    Modal.show('groupHPModal');
  },
  'click .btn-primary': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId', event.target.name);
    Modal.show('groupModal');
  }
});