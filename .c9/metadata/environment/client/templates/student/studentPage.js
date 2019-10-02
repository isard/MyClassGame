{"filter":false,"title":"studentPage.js","tooltip":"/client/templates/student/studentPage.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":512,"column":1},"end":{"row":832,"column":3},"action":"remove","lines":[" 'change .cp': function(event) {","    event.preventDefault();","    studentId=Session.get('studentId');","    chalId=event.target.id;","    chalCP=$(event.target).val();","    //alert(\"cambio\" + studentId + \" \" + chalId + \" \" + chalCP);","    //console.log(chalPoints.findOne({ chalId: chalId, studentId: Session.get('studentId')}).chalCP);","    n=chalPoints.find({'studentId':Session.get('studentId'),chalId:chalId}).count();","    if ( n==1 ) {","      Meteor.call('chalUpdatePoints', studentId, chalId, chalCP);","    } else {","      var chalCP = {","        classId: Session.get('classId'),","        studentId: studentId,","        chalId: chalId,","        chalCP: chalCP,","        chalType:event.target.name,","        createdOn: new Date()","      };","      Meteor.call('chalInsertPoints', chalCP);","    }","  },","  'submit form.dataStudent': function(event) {","    event.preventDefault();","    var user = Meteor.user();","    studentId=Session.get('studentId');","    studentName=$(event.target).find('[name=sName]').val();","    level=$(event.target).find('[name=sLevel]').val();","    alias=$(event.target).find('[name=sAlias]').val();","    avatar=$(event.target).find('[name=sAvatar]').val();","    email=$(event.target).find('[name=sEmail]').val();","    Meteor.call('studentModify',studentId,studentName,level,alias,avatar,email);","  },","  'submit form.diario': function(event) {","    event.preventDefault();","    var f = new Date();","    d=f.getDate();","    m=f.getMonth()+1;","    y=f.getFullYear();","    hoy=m+\"/\"+d+\"/\"+y;","    n=diary.find({'studentId': Session.get('studentId'),'createdOn': {$gt: new Date(hoy)}}).count();","    if ( n == 0 )","    {","      var diaryInput = {","        classId: Session.get('classId'),","        studentId:Session.get('studentId'),","        mission:$('#mission').val(),","        what:$(event.target).find('[name=que]').val(),","        how:$(event.target).find('[name=como]').val(),","        understood:$(event.target).find('[name=entendido]').val(),","        notunderstood:$(event.target).find('[name=noentendido]').val(),","        validated:false,","        createdOn: new Date()","      };","      /*var start = moment(\"2018-05-29\");","      var end = moment(d);","      end.diff(start, \"days\")","      alert(end.diff(start, \"days\"));*/","","      Meteor.call('diaryInsert',diaryInput);","    } else {","      alert(\"Ya has introducido una entrada hoy en tu diario!!!\")","    }","","  },","  'click .btn-default': function() {","    Session.set('studentSelected', false);","  },","  'click .btn-xp': function(event) {","    event.preventDefault();","    if ($(event.target).closest('div').attr(\"id\")){","      Session.setPersistent('studentId', $(event.target).closest('div').attr(\"id\"));","    } else {","      Session.setPersistent('studentId', $(event.target).closest('tr').attr(\"id\"));","    }","    Session.set('studentId',this._id);","    if ( Session.get('userType')==\"teacher\") {","      Modal.show('xpModal');","    }","  },","  'click .btn-hp': function(event) {","    event.preventDefault();","    if ($(event.target).closest('div').attr(\"id\")){","      Session.setPersistent('studentId', $(event.target).closest('div').attr(\"id\"));","    } else {","      Session.setPersistent('studentId', $(event.target).closest('tr').attr(\"id\"));","    }","    Session.set('studentId',this._id);","    if ( Session.get('userType')==\"teacher\") {","      Modal.show('hpModal');","    }","  },","  'click .btn-badge': function(event) {","    event.preventDefault();","    if ($(event.target).closest('div').attr(\"id\")){","      Session.setPersistent('studentId', $(event.target).closest('div').attr(\"id\"));","    } else {","      Session.setPersistent('studentId', $(event.target).closest('tr').attr(\"id\"));","    }","    Session.set('studentId',this._id);","    if ( Session.get('userType')==\"teacher\") {","      Modal.show('badgeModal');","    }","  },","  'click .btn-cards': function(event) {","    event.preventDefault();","    if ($(event.target).closest('div').attr(\"id\")){","      Session.setPersistent('studentId', $(event.target).closest('div').attr(\"id\"));","    } else {","      Session.setPersistent('studentId', $(event.target).closest('tr').attr(\"id\"));","    }","    Session.set('studentId',this._id);","    if ( Session.get('userType')==\"teacher\") {","      Modal.show('cardsModal');","    }","  },","  'click .btn-store': function(event) {","    event.preventDefault();","    if ($(event.target).closest('div').attr(\"id\")){","      Session.setPersistent('studentId', $(event.target).closest('div').attr(\"id\"));","    } else {","      Session.setPersistent('studentId', $(event.target).closest('tr').attr(\"id\"));","    }","    Session.set('studentId',this._id);","    if ( Session.get('userType')==\"teacher\") {","      Modal.show('storeModal');","    }","  },","  'change #mission': function(event) {","    event.preventDefault();","    missionId=$(event.target).val();","    Meteor.call('studentMission',Session.get('studentId'),missionId);","  },","  'click .borrar': function(event) {","    event.preventDefault();","    log=behavioursLog.findOne({_id: event.target.name});","    student=log.student;","    bType=log.behaviourType;","    bId=log.behavior;","    beh=behaviours.findOne({_id: log.behavior});","    p=beh.points;","    if (log.behaviourType==\"XP\") {","      Meteor.call('studentXP', student, -p);","    }","    if (log.behaviourType==\"HP\") {","      Meteor.call('studentHP', student, -p);","    }","    if (log.behaviourType==\"BG\") {","      beh=badges.findOne({_id: log.behavior});","      p=beh.points;","      Meteor.call('studentXP', student, -p);","    }","    //alert(event.target.parentElement.parentElement.childElementCount);","    Meteor.call('behaviourLogDelete',event.target.name);","  },","  /*","  'click .avatarCloudinary': function(event) {","    event.preventDefault();","    if (Session.get('userType')==\"teacher\") {","      cloudinary.openUploadWidget({ cloudName: 'myclassgame', uploadPreset: 'myclassgame',  googleApiKey: 'AIzaSyBqyxpnFhDv1nOkTszttyDSXn2HPpznhZI'}, function(error, result){","        //console.log(result);","        if (result.event==\"success\"){","          $(\"#sAvatar\").val(result.info.url);","        }","      });","    }","  },*/","  'click #cloudinaryList': function(event) {","    event.preventDefault();","    //cloudinary.image(\"sample\", {\"crop\":\"fill\",\"gravity\":\"faces\",\"width\":300,\"height\":200,\"format\":\"jpg\"});","","    cloudinary.openMediaLibrary({","      cloud_name: 'myclassgame',","      api_key: '614497274192783',","      multiple: true,","      max_files: 8,","      }, {","           /*insertHandler: function (data) {","             data.assets.forEach(asset => { console.log(\"Inserted asset:\", ","               JSON.stringify(asset, null, 2)) })","           }*/","         }","      )","  },","  'change #Diary': function(event) {","    event.preventDefault();","    Meteor.call('studentDiary',Session.get('studentId'),$(event.target).val());","  },","  'change #Portfolio': function(event) {","    event.preventDefault();","    Meteor.call('studentPortfolio',Session.get('studentId'),$(event.target).val());","  },","  'click .student_button': function(event) {","    event.preventDefault();","    Session.setPersistent('studentId',event.target.id);","    Session.set('studentSelected', true);","  },","  'click .all_button': function(event) {","    event.preventDefault();","    Session.set('studentSelected', false);","  },","  'click .ocultable': function(event) {","    event.preventDefault();","    if ($(event.target).next(\"table\").hasClass(\"oculto\")) {","      $(event.target).next(\"table\").removeClass(\"oculto\");","    } else {","      $(event.target).next(\"table\").addClass(\"oculto\");","    }","  },","  'click .btn-emoticon': function(event) {","    event.preventDefault();","    //alert($(event.target).closest('div').attr(\"id\"));","    var stars = {0:\"rs\", 20:\"os\", 40:\"ys\", 60:\"ws\", 80:\"bs\", 100:\"gs\"};","    per=$(event.currentTarget).find(\"input\").val();","    cXP=this.chalMissionXP;","    XP=parseInt(per*cXP/100);","    mId=$(event.currentTarget).closest(\".panel-info\").attr(\"id\");","    max=this.chalMissionXP;","    n=challengesXP.find({'studentId': Session.get('studentId'), 'chalId': this._id} ).count();","    if ( n==0 ) {","      var chalXP = {","        classId: Session.get('classId'),","        studentId: Session.get('studentId'),","        missionId:mId,","        chalId: this._id,","        per: per,","        chalXP: XP,","        createdOn: new Date()","      };","      Meteor.call('chalInsertXP', chalXP);","      //Meteor.call('addStar', Session.get('studentId'), stars[per]);","    } else {","      aXP=challengesXP.findOne({'studentId': Session.get('studentId'), 'chalId': this._id} ).chalXP;","      Meteor.call('studentXP', Session.get('studentId'), -aXP);","      var behaviour = {","        classId: Session.get('classId'),","        student: Session.get('studentId'),","        behavior: \"\",","        behaviourType: 'XP',","        comment: \"Cambio XP Tarea: '\" + this.chalMissionDesc + \"' ( \" + -aXP + \" XP )\",","        evaluation: Session.get('evaluation'),","        createdOn: new Date()","      };","      Meteor.call('behaviourLogInsert', behaviour);","      //Meteor.call('removeStar', Session.get('studentId'), stars[aper]);","      Meteor.call('chalUpdateXP', Session.get('studentId'), this._id, per, XP);","      //Meteor.call('addStar', Session.get('studentId'), stars[per]);","    }","    Meteor.call('studentXP', Session.get('studentId'), XP);","    var behaviour = {","      classId: Session.get('classId'),","      student: Session.get('studentId'),","      behavior: \"\",","      behaviourType: 'XP',","      comment: \"Tarea: '\" + this.chalMissionDesc + \"' ( \" + XP + \" XP )\",","      evaluation: Session.get('evaluation'),","      createdOn: new Date()","    };","    Meteor.call('behaviourLogInsert', behaviour);","    nrs=challengesXP.find({'studentId': Session.get('studentId'), 'per': '0'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[0], nrs);","    nos=challengesXP.find({'studentId': Session.get('studentId'), 'per': '20'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[20], nos);","    nys=challengesXP.find({'studentId': Session.get('studentId'), 'per': '40'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[40], nys);","    nws=challengesXP.find({'studentId': Session.get('studentId'), 'per': '60'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[60], nws);","    nbs=challengesXP.find({'studentId': Session.get('studentId'), 'per': '80'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[80], nbs);","    ngs=challengesXP.find({'studentId': Session.get('studentId'), 'per': '100'} ).count();","    Meteor.call('updateStar', Session.get('studentId'), stars[100], ngs);","  },","  'click #graphBtn': function(event) {","    event.preventDefault();","    $(\"#myChart\").toggleClass(\"visible\");","  },","  'click #graphBtn': function(event) {","    event.preventDefault();","    $(\"#myChart\").toggleClass(\"oculto\");","  },","  'click .challengeText': function(event) {","    Meteor.call('activeTask', Session.get('studentId'), this._id,);","  },","  'click .rubricaBtn': function(event) {","    event.preventDefault();","    $(\"#rubricaStudent\"+this._id).toggleClass(\"oculto\");","  },","  'click .waitingCard': function(event) {","    event.preventDefault();","    Meteor.call('studentWaitingCard', Session.get('studentId'), this.cardId);","    Meteor.call('notificationInsert', Session.get('classId'), Session.get('studentId'), this.cardId);","  },","  'click .useCard': function(event) {","    event.preventDefault();","    if (students.findOne({'_id':Session.get('studentId')}).coins >= event.currentTarget.title){","      Meteor.call('studentCardPull', Session.get('studentId'), this.cardId);","      Meteor.call('usingCard', Session.get('studentId'), event.currentTarget.title);","    } else {","      swal({","        title: \"¡No tienes bastantes monedas!\",","        text: \"¡Esfuérzate para conseguirlas y así poder comprar!\",","        icon: \"warning\",","      });","    }","  },","  'click .btn-delete-student': function(event) {","    event.preventDefault();","    Modal.show('deleteStudent');","  },","  'click .btn-reset-student': function(event) {","    event.preventDefault();","    Modal.show('resetStudent');","  },"," 'click .eImage': function(event) {","    event.preventDefault();","    Session.set('imageType','avatar');","    Session.set('idElementImage',this._id);","    if (Session.get('userType')==\"teacher\") {","      Modal.show('imagesTemplate');","    }","  }"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":512,"column":1},"end":{"row":512,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1570021023609,"hash":"6df8ffc34eb153cb2e7e57ac87c1c82cc0b13c7d"}