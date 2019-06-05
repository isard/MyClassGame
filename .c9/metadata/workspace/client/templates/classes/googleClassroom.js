{"filter":false,"title":"googleClassroom.js","tooltip":"/client/templates/classes/googleClassroom.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":14,"column":380},"end":{"row":14,"column":437},"action":"insert","lines":["https://www.googleapis.com/auth/classroom.topics.readonly"],"id":6}],[{"start":{"row":208,"column":1},"end":{"row":209,"column":0},"action":"insert","lines":["",""],"id":7}],[{"start":{"row":209,"column":0},"end":{"row":210,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":210,"column":0},"end":{"row":218,"column":1},"action":"insert","lines":["listaTareas=function() {","  cId=classes.findOne({'_id':Session.get(\"classId\")}).gcId;","  gapi.client.classroom.courses.courseWork.list({","    courseId: cId","  }).then(function(response) {","    console.log(response.result);","    Session.set('lt',response.result.courseWork);","  });","}"],"id":9}],[{"start":{"row":210,"column":10},"end":{"row":210,"column":11},"action":"remove","lines":["s"],"id":10}],[{"start":{"row":210,"column":9},"end":{"row":210,"column":10},"action":"remove","lines":["a"],"id":11}],[{"start":{"row":210,"column":8},"end":{"row":210,"column":9},"action":"remove","lines":["e"],"id":12}],[{"start":{"row":210,"column":7},"end":{"row":210,"column":8},"action":"remove","lines":["r"],"id":13}],[{"start":{"row":210,"column":6},"end":{"row":210,"column":7},"action":"remove","lines":["a"],"id":14}],[{"start":{"row":210,"column":6},"end":{"row":210,"column":7},"action":"insert","lines":["e"],"id":15}],[{"start":{"row":210,"column":7},"end":{"row":210,"column":8},"action":"insert","lines":["m"],"id":16}],[{"start":{"row":210,"column":8},"end":{"row":210,"column":9},"action":"insert","lines":["a"],"id":17}],[{"start":{"row":210,"column":9},"end":{"row":210,"column":10},"action":"insert","lines":["s"],"id":18}],[{"start":{"row":212,"column":32},"end":{"row":212,"column":42},"action":"remove","lines":["courseWork"],"id":19},{"start":{"row":212,"column":32},"end":{"row":212,"column":38},"action":"insert","lines":["topics"]}],[{"start":{"row":216,"column":37},"end":{"row":216,"column":47},"action":"remove","lines":["courseWork"],"id":20},{"start":{"row":216,"column":37},"end":{"row":216,"column":42},"action":"insert","lines":["topic"]}],[{"start":{"row":215,"column":4},"end":{"row":215,"column":5},"action":"insert","lines":["/"],"id":34}],[{"start":{"row":215,"column":5},"end":{"row":215,"column":6},"action":"insert","lines":["/"],"id":35}],[{"start":{"row":215,"column":5},"end":{"row":215,"column":6},"action":"remove","lines":["/"],"id":36}],[{"start":{"row":215,"column":4},"end":{"row":215,"column":5},"action":"remove","lines":["/"],"id":37}],[{"start":{"row":216,"column":44},"end":{"row":217,"column":0},"action":"insert","lines":["",""],"id":38},{"start":{"row":217,"column":0},"end":{"row":217,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":217,"column":4},"end":{"row":217,"column":5},"action":"insert","lines":["r"],"id":39}],[{"start":{"row":217,"column":5},"end":{"row":217,"column":6},"action":"insert","lines":["e"],"id":40}],[{"start":{"row":217,"column":6},"end":{"row":217,"column":7},"action":"insert","lines":["t"],"id":41}],[{"start":{"row":217,"column":7},"end":{"row":217,"column":8},"action":"insert","lines":["u"],"id":42}],[{"start":{"row":217,"column":8},"end":{"row":217,"column":9},"action":"insert","lines":["r"],"id":43}],[{"start":{"row":217,"column":9},"end":{"row":217,"column":10},"action":"insert","lines":["n"],"id":44}],[{"start":{"row":217,"column":10},"end":{"row":217,"column":11},"action":"insert","lines":[" "],"id":45}],[{"start":{"row":217,"column":11},"end":{"row":217,"column":32},"action":"insert","lines":["response.result.topic"],"id":46}],[{"start":{"row":217,"column":32},"end":{"row":217,"column":33},"action":"insert","lines":[";"],"id":47}],[{"start":{"row":215,"column":4},"end":{"row":215,"column":5},"action":"insert","lines":["/"],"id":48}],[{"start":{"row":215,"column":5},"end":{"row":215,"column":6},"action":"insert","lines":["/"],"id":49}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":3},"action":"insert","lines":["n"],"id":50}],[{"start":{"row":212,"column":3},"end":{"row":212,"column":4},"action":"insert","lines":["="],"id":51}],[{"start":{"row":218,"column":5},"end":{"row":219,"column":0},"action":"insert","lines":["",""],"id":52},{"start":{"row":219,"column":0},"end":{"row":219,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":219,"column":2},"end":{"row":219,"column":3},"action":"insert","lines":["r"],"id":53}],[{"start":{"row":219,"column":3},"end":{"row":219,"column":4},"action":"insert","lines":["e"],"id":54}],[{"start":{"row":219,"column":4},"end":{"row":219,"column":5},"action":"insert","lines":["t"],"id":55}],[{"start":{"row":219,"column":5},"end":{"row":219,"column":6},"action":"insert","lines":["u"],"id":56}],[{"start":{"row":219,"column":6},"end":{"row":219,"column":7},"action":"insert","lines":["r"],"id":57}],[{"start":{"row":219,"column":7},"end":{"row":219,"column":8},"action":"insert","lines":["n"],"id":58}],[{"start":{"row":219,"column":8},"end":{"row":219,"column":9},"action":"insert","lines":[" "],"id":59}],[{"start":{"row":219,"column":9},"end":{"row":219,"column":10},"action":"insert","lines":["n"],"id":60}],[{"start":{"row":219,"column":10},"end":{"row":219,"column":11},"action":"insert","lines":[";"],"id":61}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":4},"action":"remove","lines":["n="],"id":62},{"start":{"row":212,"column":2},"end":{"row":212,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":3},"action":"remove","lines":["t"],"id":63}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":3},"action":"insert","lines":["r"],"id":64}],[{"start":{"row":212,"column":3},"end":{"row":212,"column":4},"action":"insert","lines":["e"],"id":65}],[{"start":{"row":212,"column":4},"end":{"row":212,"column":5},"action":"insert","lines":["t"],"id":66}],[{"start":{"row":212,"column":5},"end":{"row":212,"column":6},"action":"insert","lines":["u"],"id":67}],[{"start":{"row":212,"column":6},"end":{"row":212,"column":7},"action":"insert","lines":["n"],"id":68}],[{"start":{"row":212,"column":7},"end":{"row":212,"column":8},"action":"insert","lines":["r"],"id":69}],[{"start":{"row":212,"column":8},"end":{"row":212,"column":9},"action":"insert","lines":[" "],"id":70}],[{"start":{"row":212,"column":8},"end":{"row":212,"column":9},"action":"remove","lines":[" "],"id":71}],[{"start":{"row":212,"column":7},"end":{"row":212,"column":8},"action":"remove","lines":["r"],"id":72}],[{"start":{"row":212,"column":6},"end":{"row":212,"column":7},"action":"remove","lines":["n"],"id":73}],[{"start":{"row":212,"column":6},"end":{"row":212,"column":7},"action":"insert","lines":["t"],"id":74}],[{"start":{"row":212,"column":7},"end":{"row":212,"column":8},"action":"insert","lines":["r"],"id":75}],[{"start":{"row":212,"column":8},"end":{"row":212,"column":9},"action":"insert","lines":["n"],"id":76}],[{"start":{"row":212,"column":8},"end":{"row":212,"column":9},"action":"remove","lines":["n"],"id":77}],[{"start":{"row":212,"column":7},"end":{"row":212,"column":8},"action":"remove","lines":["r"],"id":78}],[{"start":{"row":212,"column":6},"end":{"row":212,"column":7},"action":"remove","lines":["t"],"id":79}],[{"start":{"row":212,"column":6},"end":{"row":212,"column":7},"action":"insert","lines":["r"],"id":80}],[{"start":{"row":212,"column":7},"end":{"row":212,"column":8},"action":"insert","lines":["n"],"id":81}],[{"start":{"row":212,"column":8},"end":{"row":212,"column":9},"action":"insert","lines":[" "],"id":82}],[{"start":{"row":219,"column":0},"end":{"row":219,"column":11},"action":"remove","lines":["  return n;"],"id":83}],[{"start":{"row":218,"column":5},"end":{"row":219,"column":0},"action":"remove","lines":["",""],"id":84}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":9},"action":"remove","lines":["return "],"id":85}],[{"start":{"row":218,"column":5},"end":{"row":219,"column":0},"action":"insert","lines":["",""],"id":86},{"start":{"row":219,"column":0},"end":{"row":219,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":219,"column":2},"end":{"row":219,"column":3},"action":"insert","lines":["r"],"id":87}],[{"start":{"row":219,"column":3},"end":{"row":219,"column":4},"action":"insert","lines":["e"],"id":88}],[{"start":{"row":219,"column":4},"end":{"row":219,"column":5},"action":"insert","lines":["t"],"id":89}],[{"start":{"row":219,"column":5},"end":{"row":219,"column":6},"action":"insert","lines":["u"],"id":90}],[{"start":{"row":219,"column":6},"end":{"row":219,"column":7},"action":"insert","lines":["r"],"id":91}],[{"start":{"row":219,"column":7},"end":{"row":219,"column":8},"action":"insert","lines":["n"],"id":92}],[{"start":{"row":219,"column":8},"end":{"row":219,"column":9},"action":"insert","lines":[" "],"id":93}],[{"start":{"row":219,"column":9},"end":{"row":219,"column":10},"action":"insert","lines":["4"],"id":94}],[{"start":{"row":219,"column":10},"end":{"row":219,"column":11},"action":"insert","lines":[";"],"id":95}],[{"start":{"row":219,"column":9},"end":{"row":219,"column":10},"action":"remove","lines":["4"],"id":96}],[{"start":{"row":219,"column":9},"end":{"row":219,"column":11},"action":"insert","lines":["\"\""],"id":97}],[{"start":{"row":219,"column":10},"end":{"row":219,"column":11},"action":"insert","lines":["h"],"id":98}],[{"start":{"row":219,"column":11},"end":{"row":219,"column":12},"action":"insert","lines":["o"],"id":99}],[{"start":{"row":219,"column":12},"end":{"row":219,"column":13},"action":"insert","lines":["l"],"id":100}],[{"start":{"row":219,"column":13},"end":{"row":219,"column":14},"action":"insert","lines":["a"],"id":101}],[{"start":{"row":219,"column":1},"end":{"row":219,"column":16},"action":"remove","lines":[" return \"hola\";"],"id":102}],[{"start":{"row":211,"column":59},"end":{"row":212,"column":0},"action":"insert","lines":["",""],"id":103},{"start":{"row":212,"column":0},"end":{"row":212,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":212,"column":2},"end":{"row":212,"column":17},"action":"insert","lines":[" return \"hola\";"],"id":104}],[{"start":{"row":212,"column":0},"end":{"row":212,"column":17},"action":"remove","lines":["   return \"hola\";"],"id":105}],[{"start":{"row":220,"column":1},"end":{"row":220,"column":2},"action":"insert","lines":[" "],"id":106}],[{"start":{"row":220,"column":2},"end":{"row":220,"column":19},"action":"insert","lines":["   return \"hola\";"],"id":107}],[{"start":{"row":220,"column":4},"end":{"row":220,"column":5},"action":"remove","lines":[" "],"id":108}],[{"start":{"row":220,"column":2},"end":{"row":220,"column":4},"action":"remove","lines":["  "],"id":109}],[{"start":{"row":211,"column":59},"end":{"row":212,"column":0},"action":"remove","lines":["",""],"id":110}],[{"start":{"row":210,"column":0},"end":{"row":210,"column":1},"action":"insert","lines":["v"],"id":111}],[{"start":{"row":210,"column":1},"end":{"row":210,"column":2},"action":"insert","lines":["a"],"id":112}],[{"start":{"row":210,"column":2},"end":{"row":210,"column":3},"action":"insert","lines":["r"],"id":113}],[{"start":{"row":210,"column":3},"end":{"row":210,"column":4},"action":"insert","lines":[" "],"id":114}],[{"start":{"row":210,"column":0},"end":{"row":210,"column":4},"action":"remove","lines":["var "],"id":115}],[{"start":{"row":219,"column":0},"end":{"row":219,"column":16},"action":"remove","lines":["  return \"hola\";"],"id":116}],[{"start":{"row":218,"column":5},"end":{"row":219,"column":0},"action":"remove","lines":["",""],"id":117}],[{"start":{"row":215,"column":0},"end":{"row":215,"column":35},"action":"remove","lines":["    //console.log(response.result);"],"id":118}],[{"start":{"row":214,"column":30},"end":{"row":215,"column":0},"action":"remove","lines":["",""],"id":119}],[{"start":{"row":32,"column":39},"end":{"row":32,"column":40},"action":"insert","lines":["t"],"id":155}],[{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":["u"],"id":154}],[{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"remove","lines":["i"],"id":153}],[{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":["i"],"id":152}],[{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":["O"],"id":151}],[{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"remove","lines":["I"],"id":150}],[{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"remove","lines":["n"],"id":149}]]},"ace":{"folds":[],"scrolltop":286.5,"scrollleft":0,"selection":{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1559657799023,"hash":"dccb8cfd007565cfce72f308d579280663effad4"}