Template.leftNav.helpers({
 className: function() {
   return Session.get('className');//classes.findOne({ _id: Session.get('classId') } ).className;
 },
 students: function() {
   return students.find({ classId: Session.get('classId') }, {sort: {XP: -1,_id: 1}} );
 },
 groups: function() {
   return groups.find({classId: Session.get('classId')});
 },
 classes: function() {
   return classes.find({"teacherId": Meteor.userId()});
 },
 userN: function() {
   if (Meteor.user().userType=="student"){
     alias=students.findOne({userId:Meteor.userId()}).alias;
     return alias;
   } else {
     try {
       emailUser=Meteor.users.findOne({_id: Meteor.userId()}).emails[0].address;
     }
     catch(err) {
       emailUser=Meteor.users.findOne({_id: Meteor.userId()}).services.google.email;
     }
     n=emailUser.indexOf("@");
     return emailUser.substring(0,n);
   }
 },
 userType: function() {
  if (Session.get('userType')=="teacher") {
   return "PROFESOR";
  }
  if (Session.get('userType')=="student") {
    return "ESTUDIANTE";
  }
  if (Session.get('userType')=="parent") {
    return "PADRE/MADRE";
  }
 },
 onlyMyStudent: function() {
   if (Session.get('userType')=="teacher") {
     return false;
   } else {
     return classes.findOne({'_id': Session.get('classId')}).onlyMyStudent;
   }
 },
 teacher: function() {
   if (Session.get('userType')=="teacher") {
    return true;
   } else {
    return false;
   };
 },
 chatVisible: function() {
    if (classes.findOne({"_id": Session.get('classId')}).chatVisible) {
     return true;
    } else {
     return false;
    };
  },
 image: function(avatar) {
   avatarVisible=classes.findOne({ _id: Session.get('classId') }).avatarVisible;
   if ( avatar=="" || !avatar || (  Session.get('userType') != "teacher"  &&  !avatarVisible ) ) {
     if ( classes.findOne({_id: Session.get('classId')}).studentImg ) {
       if (classes.findOne({_id: Session.get('classId')}).studentImg.substring(0, 4)=="http") {
         return classes.findOne({_id: Session.get('classId')}).studentImg;
       } else {
         cloudinary_url=images.findOne({_id: classes.findOne({_id: Session.get('classId')}).studentImg}).image_url;
         cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
         return cloudinary_url;
       }
     } else {
       return "https://avatars.dicebear.com/v2/avataaars/"+this._id+".svg";
     }
   } else  {
     if (avatar.substring(0, 4)=="http") {
       return avatar;
     } else {
       cloudinary_url=images.findOne({_id: avatar}).image_url;
       cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
       return cloudinary_url;
     }
   }
 },
 gImage: function() {
   avatar=this.groupImg;
   if (avatar) {
     if (avatar.substring(0, 4)=="http" || avatar.substring(0, 4)=="data") {
       return avatar;
     } else {
       cloudinary_url=images.findOne({_id: avatar}).image_url;
       cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
       return cloudinary_url;
     }
   } else {
     if ( classes.findOne({_id: Session.get('classId')}).groupImg ) {
       if (classes.findOne({_id: Session.get('classId')}).groupImg.substring(0, 4)=="http") {
         return classes.findOne({_id: Session.get('classId')}).groupImg;
       } else {
         cloudinary_url=images.findOne({_id: classes.findOne({_id: Session.get('classId')}).groupImg}).image_url;
         cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
         return cloudinary_url;
       }
     } else {
       cloudinary_url="https://res.cloudinary.com/myclassgame/image/upload/v1543412151/proves/grupo.png";
       cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
       return cloudinary_url;
     }
   }
 },
 userImage: function() {
   if (Meteor.user().userType=="student"){
     student=students.findOne({userId:Meteor.userId()});
     avatar=student.avatar;
     if ( avatar=="" || !avatar || (  Session.get('userType') != "teacher"  &&  !avatarVisible ) ) {
       if ( classes.findOne({_id: Session.get('classId')}).studentImg ) {
         if (classes.findOne({_id: Session.get('classId')}).studentImg.substring(0, 4)=="http") {
           return classes.findOne({_id: Session.get('classId')}).studentImg;
         } else {
           cloudinary_url=images.findOne({_id: classes.findOne({_id: Session.get('classId')}).studentImg}).image_url;
           cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
           return cloudinary_url;
         }
       } else {
         return "https://avatars.dicebear.com/v2/avataaars/"+student._id+".svg";
       }
     } else  {
       if (avatar.substring(0, 4)=="http") {
         return avatar;
       } else {
         cloudinary_url=images.findOne({_id: avatar}).image_url;
         cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
         return cloudinary_url;
       }
     }
   } else {
     if (Meteor.user().userAvatar) {
       cloudinary_url=images.findOne({'_id':Meteor.user().userAvatar}).image_url;
       cloudinary_url=cloudinary_url.replace('/upload/','/upload/q_auto,w_auto,h_60,f_auto,dpr_auto/')
       return cloudinary_url;
     } else {
      return "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg";
     };
   }
 }
})

Template.leftNav.events({
  'click .sidebar-dropdown > a': function(event) {
    event.preventDefault();
    $(".sidebar-submenu").slideUp(200);
    if ($(event.target).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(event.target).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(event.target).next(".sidebar-submenu").slideDown(200);
      $(event.target).parent().addClass("active");
    }
  },
  'click #close-sidebar, mouseleave #sidebar': function(event) {
    $(".page-wrapper").removeClass("toggled");
  },
  'mouseover #show-sidebar, mouseover #show-sidebar-line, click #show-sidebar, click #show-sidebar-line': function(event) {
    $(".page-wrapper").addClass("toggled");
  },
  'click .clases': function(event) {
    event.preventDefault();
    Session.set('className', '');
    Session.set('studentSelected', false);
    Session.set('groupSelected', false);
    $("#fondo").css("background-image", "");
    Router.go('classesPage');
  },
  'click .clase': function(event) {
    event.preventDefault();
    Session.set('studentSelected', false);
    Session.set('groupSelected', false);
    Router.go('studentsMainPage',{_id:Session.get('classId')});
  },
  'click .student_button': function(event) {
    event.preventDefault();
    Session.setPersistent('studentId',this._id);
    //Router.go('studentPage',{_id:Session.get('classId')});
    Session.set('studentSelected', true);
    Session.setPersistent('sogBtn', "students");
    Session.set('groupSelected', false);
    $(".main-tab-content > .active").removeClass("active");
    $("#studentsMain").addClass("active");
    //$("#Datos").addClass("active");
    //$("#sM").addClass("active");
    //$("#studentData").addClass("active");
    $(".sidebar-wrapper .active").removeClass("active");
    //$("#studentsMenu").addClass("active");
    $(event.target).parent().addClass("active");
    event.stopPropagation();
  },
  'click .group_button': function(event) {
    event.preventDefault();
    Session.setPersistent('groupId',this._id);
    Session.set('groupSelected', true);
    Session.setPersistent('sogBtn', "groups");
    Session.set('studentSelected', false);
    $(".main-tab-content > .active").removeClass("active");
    $("#studentsMain").addClass("active");
    //$(".tab-pane").removeClass("active");
    //$(".nav-pills li").removeClass("active");
    //$("#studentsMain").addClass("active");
    //$("#sM").addClass("active");
    //$("#collapseStudents").removeClass("in");
    $(".sidebar-wrapper .active").removeClass("active");
    //$("#studentsMenu").addClass("active");
    $(event.target).parent().addClass("active");
    event.stopPropagation();
  }  ,
  'click #studentsMenu': function(event) {
    event.preventDefault();
    $(".sidebar-wrapper .active").removeClass("active");
    $("#studentsMenu").addClass("active");
    Session.setPersistent('sogBtn', "students");
    Session.set('studentSelected', false);
    Session.set('groupSelected', false);
    $(".main-tab-content > .active").removeClass("active");
    $("#studentsMain").addClass("active");
  },
  'click .closeSession': function(event) {
    event.preventDefault();
    //Session.set('className', '');
    //Session.set('studentSelected', false);
    //Session.set('groupSelected', false);
    //Session.set('userType', "");
    //$("#fondo").css("background-image", "");
    //Router.go('/');
    //Session.keys = {}
    //gapi.auth2.getAuthInstance().signOut();
    //Meteor.call('mcgLog', 'closeSession -> userId: ' + Meteor.userId());
    swal({
      title: TAPi18n.__('exit'),
      text: TAPi18n.__('areYouSure'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: TAPi18n.__('yes'),
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        $(".classes").click();
        //gapiSignOut();
        Meteor.logout();
        window.location.replace('https://accounts.google.com/Logout');
        window.location.href = "/";
      // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      }
    })
  },
  'click .user-pic': function(event) {
    event.preventDefault();
    Session.set('imageType','userAvatar');
    Session.set('idElementImage',Meteor.userId());
    if (Session.get('userType')=="teacher") {
      Modal.show('imagesTemplate');
    }
  },
  'click #statistics': function(event) {
    event.preventDefault();
    Router.go('statisticsPage',{_id:Session.get('classId')});
  },
  'click #questions': function(event) {
    event.preventDefault();
    Router.go('questions',{_id:Session.get('classId')});
  },
  'click #studentsMain': function(event) {
    event.preventDefault();
    Router.go('studentsMainPage',{_id:Session.get('classId')});
  },
  'click #chat': function(event) {
    event.preventDefault();
    Router.go('chat',{_id:Session.get('classId')});
  },
  'click #myAdventure': function(event) {
    event.preventDefault();
    Router.go('myAdventure',{_id:Session.get('classId')});
  },
  'click #tools': function(event) {
    event.preventDefault();
    Router.go('tools',{_id:Session.get('classId')});
  },
  'click #settings': function(event) {
    event.preventDefault();
    Router.go('settingsPage',{_id:Session.get('classId')});
  },
  'click #notifications': function(event) {
    event.preventDefault();
    Router.go('notifications',{_id:Session.get('classId')});
  },
  'click #gamification': function(event) {
    event.preventDefault();
    Router.go('gamification',{_id:Session.get('classId')});
  },
  'click #battle': function(event) {
    event.preventDefault();
    Router.go('battle',{_id:Session.get('classId')});
  },
  'click .collaborate': function(event) {
    event.preventDefault();
    Modal.show('notifyModal');
  }
})
