{"filter":false,"title":"myAdventure.js","tooltip":"/client/templates/myAdventure/myAdventure.js","undoManager":{"mark":60,"position":60,"stack":[[{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"insert","lines":[","],"id":126}],[{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":127},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":13,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":["task: function() {","    t=students.findOne({_id: Session.get('studentId')}).activeTask;","    return chalMissions.findOne({_id: t});","  }"],"id":128}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":6},"action":"remove","lines":["task"],"id":129},{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["s"]}],[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["n"],"id":130}],[{"start":{"row":12,"column":3},"end":{"row":16,"column":3},"action":"remove","lines":[",","  sn: function() {","    t=students.findOne({_id: Session.get('studentId')}).activeTask;","    return chalMissions.findOne({_id: t});","  }"],"id":131},{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":13,"column":2},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":132},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "],"id":133}],[{"start":{"row":13,"column":2},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":134}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "],"id":135}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"remove","lines":["",""],"id":136}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":137}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["Template.challenges.onRendered(function() {","  $('#adventureDesc').summernote();","});"],"id":138}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":19},"action":"remove","lines":["challenges"],"id":139},{"start":{"row":0,"column":9},"end":{"row":0,"column":20},"action":"insert","lines":["myAdventure"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":19},"action":"remove","lines":["adventureDesc"],"id":140},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["n"],"id":141}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":24},"action":"remove","lines":[".summernote();"],"id":142},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["."]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["i"],"id":143}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["n"],"id":144}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["n"],"id":145}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["e"],"id":146}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["r"],"id":147}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":16},"action":"remove","lines":["$('#sn').inner"],"id":148},{"start":{"row":1,"column":2},"end":{"row":1,"column":46},"action":"insert","lines":["document.getElementById('mydiv').innerHTML ="]}],[{"start":{"row":1,"column":27},"end":{"row":1,"column":32},"action":"remove","lines":["mydiv"],"id":149},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["n"],"id":150}],[{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":[" "],"id":151}],[{"start":{"row":1,"column":44},"end":{"row":1,"column":93},"action":"insert","lines":["classes.findOne({ _id: Session.get('classId') } )"],"id":152}],[{"start":{"row":1,"column":93},"end":{"row":1,"column":94},"action":"insert","lines":["."],"id":153}],[{"start":{"row":1,"column":94},"end":{"row":1,"column":95},"action":"insert","lines":["a"],"id":154}],[{"start":{"row":1,"column":95},"end":{"row":1,"column":96},"action":"insert","lines":["d"],"id":155}],[{"start":{"row":1,"column":94},"end":{"row":1,"column":96},"action":"remove","lines":["ad"],"id":156},{"start":{"row":1,"column":94},"end":{"row":1,"column":107},"action":"insert","lines":["adventureDesc"]}],[{"start":{"row":1,"column":107},"end":{"row":1,"column":108},"action":"insert","lines":[";"],"id":157}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":25},"action":"remove","lines":["document.getElementById"],"id":158}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["#"],"id":159}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["h"],"id":160}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["t"],"id":161}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["i"],"id":162}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["n"],"id":163}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["n"],"id":164}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["e"],"id":165}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["r"],"id":166}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["H"],"id":167}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["T"],"id":168}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["M"],"id":169}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["L"],"id":170}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["m"],"id":171}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":13},"action":"remove","lines":["htm"],"id":172},{"start":{"row":1,"column":10},"end":{"row":1,"column":14},"action":"insert","lines":["html"]}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":16},"action":"insert","lines":["()"],"id":173}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":[")"],"id":174}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":[" "],"id":175}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":["="],"id":176}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":[" "],"id":177}],[{"start":{"row":1,"column":78},"end":{"row":1,"column":79},"action":"insert","lines":[")"],"id":178}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["$"],"id":179}],[{"start":{"row":8,"column":42},"end":{"row":8,"column":51},"action":"remove","lines":["studentId"],"id":180},{"start":{"row":8,"column":42},"end":{"row":8,"column":56},"action":"insert","lines":["currentStudent"]}],[{"start":{"row":13,"column":42},"end":{"row":13,"column":51},"action":"remove","lines":["studentId"],"id":181},{"start":{"row":13,"column":42},"end":{"row":13,"column":56},"action":"insert","lines":["currentStudent"]}],[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":182},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":7,"column":2},"end":{"row":9,"column":4},"action":"insert","lines":["class: function() {","    return classes.findOne({ _id: Session.get('classId') } );","  },"],"id":183}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":7},"action":"remove","lines":["class"],"id":184},{"start":{"row":7,"column":2},"end":{"row":7,"column":13},"action":"insert","lines":["studentName"]}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":61},"action":"remove","lines":["classes.findOne({ _id: Session.get('classId') } );"],"id":185},{"start":{"row":8,"column":11},"end":{"row":8,"column":77},"action":"insert","lines":["students.findOne({_id: Session.get('currentStudent')}).activeTask;"]}],[{"start":{"row":8,"column":66},"end":{"row":8,"column":76},"action":"remove","lines":["activeTask"],"id":186},{"start":{"row":8,"column":66},"end":{"row":8,"column":77},"action":"insert","lines":["studentName"]}]]},"ace":{"folds":[],"scrolltop":231,"scrollleft":0,"selection":{"start":{"row":8,"column":77},"end":{"row":8,"column":77},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":12,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1549882483559,"hash":"47e6c74ea8e97069a66640b0269dcd4978e27b95"}