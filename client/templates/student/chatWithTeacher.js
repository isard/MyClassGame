Template.chatWithTeacher.onRendered(function() {
  /*
  var elmnt = document.querySelector('#mG9saZR5ZHrwmZLyEm');
  var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true)
      console.log('Element is fully visible in screen');
  }, { threshold: [1] });
  observer.observe(elmnt);*/
  const callback = (entries, observer) =>
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Meteor.call('messageRead', entry.target.id);
      //entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
  const observer = new IntersectionObserver(callback, { root: document.querySelector('#messageContainer'), threshold: [1] });

  document.querySelectorAll('.messageNotRead').forEach(m => observer.observe(m));
})

Template.chatWithTeacher.helpers({
  image: function(avatar) {
    avatarVisible=classes.findOne({ _id: Session.get('classId') }).avatarVisible;
    if ( avatar=="" || !avatar || (  Session.get('userType') != "teacher"  &&  !avatarVisible ) ) {
      if ( classes.findOne({_id: Session.get('classId')}).studentImg ) {
        if (classes.findOne({_id: Session.get('classId')}).studentImg.substring(0, 4)=="http") {
          return classes.findOne({_id: Session.get('classId')}).studentImg;
        } else {
          return images.findOne({_id: classes.findOne({_id: Session.get('classId')}).studentImg}).image_url;
        }
      } else {
        return "https://res.cloudinary.com/myclassgame/image/upload/v1542963357/proves/luke.png";
      }
    } else  {
      if (avatar.substring(0, 4)=="http") {
        return avatar;
      } else {
        return images.findOne({_id: avatar}).image_url;
      }
    }
  },
  messages: function() {
    return chatStudentTeacher.find({$and: [ { classId: Session.get('classId') } , { $or: [ {userId: Session.get('studentId')},{userIdWith:Session.get('studentId')} ] } ] });
  },
  even: function (value) {
    return (value % 2) === 1;
  },
  teacherAvatar: function() {
    if (Meteor.users.findOne({'_id':this.userId}).userType=="teacher") {
     return true;
    } else {
     return false;
    };
  },
  messageNotRead: function() {
    notRead=false;
    if (Session.get('userType')=="teacher") {
      if (! this.read && this.userId == Session.get('studentId') ) { notRead=true; }
    } else {
      if (! this.read && this.userIdWith == Session.get('studentId') ) { notRead=true; }
    }
    return notRead;
  },
  onlytime: function() {
    return moment(this.createdOn).format('hh:mm');
  }
});

Template.chatWithTeacher.events({
  'submit form#chatST': function(event) {
    event.preventDefault();
    //console.log($(event.target).find('[name=eventDescription]').val())
    if (Meteor.user().userType == "teacher") {
      userId = Meteor.userId();
      userIdWith = Session.get('studentId');
    } else {
      userId = Session.get('studentId');
      userIdWith=classes.findOne({'_id':Session.get('classId')}).teacherId;
    }
    var message = {
      classId: Session.get('classId'),
      userId: userId,
      userIdWith: userIdWith,
      read:false,
      message: $(event.target).find('[name=message]').val(),
      createdOn: new Date()
    };
    Meteor.call('messageSTInsert', message);
    $(event.target).find('[name=message]').val("");
  },
  'click .chatRemove': function(event) {
    swal({
      title: 'Borrar mensaje',
      text: '¿Estás seguro de querer borrar este mensaje?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Meteor.call('messageSTRemove', this._id);
        swal({
          title: '¡Mensaje borrado!',
          type: 'success'
        })
      // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      }
    })
  },
 'click #STChat': function(event) {
    event.preventDefault();
    var elmnt = document.getElementsByClassName("messageNotRead")[0];
    elmnt.scrollIntoView(false);
  }
})