{"filter":false,"title":"studentPage.js","tooltip":"/client/templates/student/studentPage.js","undoManager":{"mark":67,"position":67,"stack":[[{"start":{"row":803,"column":4},"end":{"row":804,"column":0},"action":"insert","lines":["",""],"id":220},{"start":{"row":804,"column":0},"end":{"row":804,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":804,"column":2},"end":{"row":807,"column":4},"action":"insert","lines":["'click .btn-delete-student': function(event) {","    event.preventDefault();","    Modal.show('deleteStudent');","  },"],"id":221}],[{"start":{"row":804,"column":14},"end":{"row":804,"column":20},"action":"remove","lines":["delete"],"id":222},{"start":{"row":804,"column":14},"end":{"row":804,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":804,"column":15},"end":{"row":804,"column":16},"action":"insert","lines":["e"],"id":223}],[{"start":{"row":804,"column":16},"end":{"row":804,"column":17},"action":"insert","lines":["s"],"id":224}],[{"start":{"row":804,"column":17},"end":{"row":804,"column":18},"action":"insert","lines":["e"],"id":225}],[{"start":{"row":804,"column":18},"end":{"row":804,"column":19},"action":"insert","lines":["t"],"id":226}],[{"start":{"row":806,"column":21},"end":{"row":806,"column":22},"action":"remove","lines":["e"],"id":227}],[{"start":{"row":806,"column":20},"end":{"row":806,"column":21},"action":"remove","lines":["t"],"id":228}],[{"start":{"row":806,"column":19},"end":{"row":806,"column":20},"action":"remove","lines":["e"],"id":229}],[{"start":{"row":806,"column":18},"end":{"row":806,"column":19},"action":"remove","lines":["l"],"id":230}],[{"start":{"row":806,"column":17},"end":{"row":806,"column":18},"action":"remove","lines":["e"],"id":231}],[{"start":{"row":806,"column":16},"end":{"row":806,"column":17},"action":"remove","lines":["d"],"id":232}],[{"start":{"row":806,"column":16},"end":{"row":806,"column":17},"action":"insert","lines":["s"],"id":233}],[{"start":{"row":806,"column":16},"end":{"row":806,"column":17},"action":"remove","lines":["s"],"id":234}],[{"start":{"row":806,"column":16},"end":{"row":806,"column":17},"action":"insert","lines":["r"],"id":235}],[{"start":{"row":806,"column":17},"end":{"row":806,"column":18},"action":"insert","lines":["e"],"id":236}],[{"start":{"row":806,"column":18},"end":{"row":806,"column":19},"action":"insert","lines":["s"],"id":237}],[{"start":{"row":806,"column":19},"end":{"row":806,"column":20},"action":"insert","lines":["t"],"id":238}],[{"start":{"row":806,"column":20},"end":{"row":807,"column":0},"action":"insert","lines":["",""],"id":239},{"start":{"row":807,"column":0},"end":{"row":807,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":807,"column":2},"end":{"row":807,"column":4},"action":"remove","lines":["  "],"id":240}],[{"start":{"row":807,"column":0},"end":{"row":807,"column":2},"action":"remove","lines":["  "],"id":241}],[{"start":{"row":806,"column":20},"end":{"row":807,"column":0},"action":"remove","lines":["",""],"id":242}],[{"start":{"row":806,"column":19},"end":{"row":806,"column":20},"action":"remove","lines":["t"],"id":243}],[{"start":{"row":806,"column":19},"end":{"row":806,"column":20},"action":"insert","lines":["e"],"id":244}],[{"start":{"row":806,"column":20},"end":{"row":806,"column":21},"action":"insert","lines":["t"],"id":245}],[{"start":{"row":814,"column":3},"end":{"row":815,"column":0},"action":"insert","lines":["",""],"id":246}],[{"start":{"row":815,"column":0},"end":{"row":816,"column":0},"action":"insert","lines":["",""],"id":247}],[{"start":{"row":816,"column":0},"end":{"row":823,"column":3},"action":"insert","lines":["Template.deleteStudent.events({","  'submit form': function(event) {","    Meteor.call('studentDelete', Session.get('studentId'));","    Modal.hide('deleteStudent');","    Session.set('studentSelected', false);","    Session.set('groupSelected', false);","  }","});"],"id":248}],[{"start":{"row":824,"column":0},"end":{"row":825,"column":0},"action":"insert","lines":["",""],"id":249}],[{"start":{"row":825,"column":0},"end":{"row":832,"column":3},"action":"insert","lines":["Template.deleteStudent.events({","  'submit form': function(event) {","    Meteor.call('studentDelete', Session.get('studentId'));","    Modal.hide('deleteStudent');","    Session.set('studentSelected', false);","    Session.set('groupSelected', false);","  }","});"],"id":250}],[{"start":{"row":825,"column":14},"end":{"row":825,"column":15},"action":"remove","lines":["e"],"id":251}],[{"start":{"row":825,"column":13},"end":{"row":825,"column":14},"action":"remove","lines":["t"],"id":252}],[{"start":{"row":825,"column":12},"end":{"row":825,"column":13},"action":"remove","lines":["e"],"id":253}],[{"start":{"row":825,"column":11},"end":{"row":825,"column":12},"action":"remove","lines":["l"],"id":254}],[{"start":{"row":825,"column":10},"end":{"row":825,"column":11},"action":"remove","lines":["e"],"id":255}],[{"start":{"row":825,"column":9},"end":{"row":825,"column":10},"action":"remove","lines":["d"],"id":256}],[{"start":{"row":825,"column":9},"end":{"row":825,"column":10},"action":"insert","lines":["r"],"id":257}],[{"start":{"row":825,"column":10},"end":{"row":825,"column":11},"action":"insert","lines":["e"],"id":258}],[{"start":{"row":825,"column":11},"end":{"row":825,"column":12},"action":"insert","lines":["s"],"id":259}],[{"start":{"row":825,"column":12},"end":{"row":825,"column":13},"action":"insert","lines":["e"],"id":260}],[{"start":{"row":825,"column":13},"end":{"row":825,"column":14},"action":"insert","lines":["t"],"id":261}],[{"start":{"row":828,"column":21},"end":{"row":828,"column":22},"action":"remove","lines":["e"],"id":262}],[{"start":{"row":828,"column":20},"end":{"row":828,"column":21},"action":"remove","lines":["t"],"id":263}],[{"start":{"row":828,"column":19},"end":{"row":828,"column":20},"action":"remove","lines":["e"],"id":264}],[{"start":{"row":828,"column":18},"end":{"row":828,"column":19},"action":"remove","lines":["l"],"id":265}],[{"start":{"row":828,"column":17},"end":{"row":828,"column":18},"action":"remove","lines":["e"],"id":266}],[{"start":{"row":828,"column":16},"end":{"row":828,"column":17},"action":"remove","lines":["d"],"id":267}],[{"start":{"row":828,"column":16},"end":{"row":828,"column":17},"action":"insert","lines":["s"],"id":268}],[{"start":{"row":828,"column":16},"end":{"row":828,"column":17},"action":"remove","lines":["s"],"id":269}],[{"start":{"row":828,"column":16},"end":{"row":828,"column":17},"action":"insert","lines":["r"],"id":270}],[{"start":{"row":828,"column":17},"end":{"row":828,"column":18},"action":"insert","lines":["e"],"id":271}],[{"start":{"row":828,"column":18},"end":{"row":828,"column":19},"action":"insert","lines":["s"],"id":272}],[{"start":{"row":828,"column":19},"end":{"row":828,"column":20},"action":"insert","lines":["e"],"id":273}],[{"start":{"row":828,"column":20},"end":{"row":828,"column":21},"action":"insert","lines":["t"],"id":274}],[{"start":{"row":829,"column":0},"end":{"row":830,"column":40},"action":"remove","lines":["    Session.set('studentSelected', false);","    Session.set('groupSelected', false);"],"id":275}],[{"start":{"row":828,"column":31},"end":{"row":829,"column":0},"action":"remove","lines":["",""],"id":276}],[{"start":{"row":827,"column":24},"end":{"row":827,"column":30},"action":"remove","lines":["Delete"],"id":277},{"start":{"row":827,"column":24},"end":{"row":827,"column":25},"action":"insert","lines":["R"]}],[{"start":{"row":827,"column":25},"end":{"row":827,"column":26},"action":"insert","lines":["e"],"id":278}],[{"start":{"row":827,"column":26},"end":{"row":827,"column":27},"action":"insert","lines":["s"],"id":279}],[{"start":{"row":827,"column":27},"end":{"row":827,"column":28},"action":"insert","lines":["e"],"id":280}],[{"start":{"row":827,"column":28},"end":{"row":827,"column":29},"action":"insert","lines":["t"],"id":281}],[{"start":{"row":650,"column":4},"end":{"row":651,"column":0},"action":"insert","lines":["",""],"id":282},{"start":{"row":651,"column":0},"end":{"row":651,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":651,"column":2},"end":{"row":651,"column":3},"action":"insert","lines":["/"],"id":283}],[{"start":{"row":651,"column":3},"end":{"row":651,"column":4},"action":"insert","lines":["*"],"id":284}],[{"start":{"row":662,"column":4},"end":{"row":662,"column":5},"action":"insert","lines":["*"],"id":285}],[{"start":{"row":662,"column":5},"end":{"row":662,"column":6},"action":"insert","lines":["/"],"id":286}],[{"start":{"row":813,"column":16},"end":{"row":813,"column":22},"action":"remove","lines":["images"],"id":287},{"start":{"row":813,"column":16},"end":{"row":813,"column":30},"action":"insert","lines":["imagesTemplate"]}]]},"ace":{"folds":[],"scrolltop":13518.5,"scrollleft":0,"selection":{"start":{"row":813,"column":3},"end":{"row":813,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":69,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1555427630780,"hash":"d1f6dd02da21054cdae4e5152ca3e04b847edf41"}