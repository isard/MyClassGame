{"filter":false,"title":"myNav.js","tooltip":"/client/templates/myNav/myNav.js","undoManager":{"mark":26,"position":26,"stack":[[{"start":{"row":94,"column":3},"end":{"row":99,"column":3},"action":"insert","lines":[",","  'mouseenter #menuBtn': function(event) {","    event.preventDefault();","    $(\"#menu_lateral\").toggleClass(\"visible\");","    //Router.go('/');","  }"],"id":97}],[{"start":{"row":78,"column":5},"end":{"row":78,"column":21},"action":"remove","lines":["/Router.go('/');"],"id":98}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"remove","lines":["/"],"id":99}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":29},"action":"insert","lines":["Router.go('classesPage');"],"id":100}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":101}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":5},"action":"insert","lines":["/*Template.register.onRendered(function () {","  //alert(Meteor.users.findOne(Meteor.user()).userType);","  Session.set('userType', Meteor.users.findOne(Meteor.user()).userType);","});*/"],"id":102}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["*"],"id":103}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"],"id":104}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"remove","lines":["*"],"id":105}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"remove","lines":["/"],"id":106}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":17},"action":"remove","lines":["register"],"id":107},{"start":{"row":0,"column":9},"end":{"row":0,"column":14},"action":"insert","lines":["myNav"]}],[{"start":{"row":1,"column":2},"end":{"row":2,"column":72},"action":"remove","lines":["//alert(Meteor.users.findOne(Meteor.user()).userType);","  Session.set('userType', Meteor.users.findOne(Meteor.user()).userType);"],"id":108}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":34},"action":"insert","lines":["return Session.get('className');"],"id":109}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":8},"action":"remove","lines":["return"],"id":110},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["l"],"id":111}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["e"],"id":112}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["r"],"id":113}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["t"],"id":114}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":9},"action":"insert","lines":["()"],"id":115}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":[")"],"id":116}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":[" "],"id":117}],[{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":[")"],"id":121}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["Template.myNav.onRendered(function () {","  alert(Session.get('className'));","});"],"id":122}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":123}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":124}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["Template.register.onRendered(function () {","  Session.set('className',classes.findOne({ _id: Session.get('classId') } ).className);","});"],"id":125}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":17},"action":"remove","lines":["register"],"id":126},{"start":{"row":0,"column":9},"end":{"row":0,"column":14},"action":"insert","lines":["myNav"]}]]},"ace":{"folds":[],"scrolltop":840,"scrollleft":0,"selection":{"start":{"row":56,"column":4},"end":{"row":57,"column":40},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":48,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1553962664825,"hash":"1b61a909119e633547ab81af9b4e13182eb909fa"}