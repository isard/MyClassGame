{"filter":false,"title":"notifications.js","tooltip":"/client/templates/notifications/notifications.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":42,"column":24},"end":{"row":42,"column":29},"action":"remove","lines":["class"],"id":29},{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["_"]}],[{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["i"],"id":30}],[{"start":{"row":42,"column":30},"end":{"row":42,"column":52},"action":"remove","lines":["Session.get('classId')"],"id":31},{"start":{"row":42,"column":30},"end":{"row":42,"column":47},"action":"insert","lines":["event.target.name"]}],[{"start":{"row":42,"column":22},"end":{"row":42,"column":23},"action":"insert","lines":["O"],"id":32}],[{"start":{"row":42,"column":23},"end":{"row":42,"column":24},"action":"insert","lines":["n"],"id":33}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["e"],"id":34}],[{"start":{"row":42,"column":29},"end":{"row":42,"column":30},"action":"remove","lines":["I"],"id":35}],[{"start":{"row":42,"column":51},"end":{"row":42,"column":52},"action":"insert","lines":["."],"id":36}],[{"start":{"row":42,"column":52},"end":{"row":42,"column":58},"action":"insert","lines":["cardId"],"id":37}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["a"],"id":38}],[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["l"],"id":39}],[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["e"],"id":40}],[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["r"],"id":41}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["t"],"id":42}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["("],"id":43}],[{"start":{"row":42,"column":64},"end":{"row":42,"column":65},"action":"insert","lines":[")"],"id":44}],[{"start":{"row":41,"column":29},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":66},"action":"insert","lines":["alert(notifications.findOne({_id: event.target.name}).cardId);"],"id":46}],[{"start":{"row":42,"column":58},"end":{"row":42,"column":64},"action":"remove","lines":["cardId"],"id":47},{"start":{"row":42,"column":58},"end":{"row":42,"column":67},"action":"insert","lines":["studentId"]}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":58},"action":"remove","lines":["notifications.findOne({_id: event.target.name})."],"id":48},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["h"],"id":49}],[{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["i"],"id":50}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["e"],"id":51}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"remove","lines":["e"],"id":52}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["s"],"id":53}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["."],"id":54}],[{"start":{"row":43,"column":10},"end":{"row":43,"column":57},"action":"remove","lines":["notifications.findOne({_id: event.target.name})"],"id":55},{"start":{"row":43,"column":10},"end":{"row":43,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":43,"column":11},"end":{"row":43,"column":12},"action":"insert","lines":["h"],"id":56}],[{"start":{"row":43,"column":12},"end":{"row":43,"column":13},"action":"insert","lines":["i"],"id":57}],[{"start":{"row":43,"column":13},"end":{"row":43,"column":14},"action":"insert","lines":["s"],"id":58}],[{"start":{"row":43,"column":23},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":59},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":44,"column":4},"end":{"row":44,"column":74},"action":"insert","lines":["Meteor.call('studentCardPull', Session.get('studentId'), this.cardId);"],"id":60}],[{"start":{"row":44,"column":17},"end":{"row":44,"column":32},"action":"remove","lines":["studentCardPull"],"id":61},{"start":{"row":44,"column":17},"end":{"row":44,"column":31},"action":"insert","lines":["studentUseCard"]}],[{"start":{"row":44,"column":34},"end":{"row":44,"column":58},"action":"remove","lines":["Session.get('studentId')"],"id":62},{"start":{"row":44,"column":34},"end":{"row":44,"column":48},"action":"insert","lines":["this.studentId"]}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":4},"action":"remove","lines":["  "],"id":63}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"remove","lines":["  "],"id":64}],[{"start":{"row":44,"column":63},"end":{"row":45,"column":0},"action":"remove","lines":["",""],"id":65}],[{"start":{"row":41,"column":0},"end":{"row":43,"column":23},"action":"remove","lines":["    alert(event.target.name);","    alert(this.studentId);","    alert(this.cardId);"],"id":66}],[{"start":{"row":40,"column":27},"end":{"row":41,"column":0},"action":"remove","lines":["",""],"id":67}],[{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":68},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":4,"column":2},"end":{"row":6,"column":4},"action":"insert","lines":["notifications: function() {","    return notifications.find({classId: Session.get('classId')});","  },"],"id":69}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":15},"action":"remove","lines":["notifications"],"id":71},{"start":{"row":4,"column":2},"end":{"row":4,"column":11},"action":"insert","lines":["usedCards"]}],[{"start":{"row":5,"column":62},"end":{"row":5,"column":63},"action":"insert","lines":[","],"id":72}],[{"start":{"row":5,"column":63},"end":{"row":5,"column":65},"action":"insert","lines":["''"],"id":73}],[{"start":{"row":5,"column":64},"end":{"row":5,"column":65},"action":"insert","lines":["u"],"id":74}],[{"start":{"row":5,"column":65},"end":{"row":5,"column":66},"action":"insert","lines":["s"],"id":75}],[{"start":{"row":5,"column":66},"end":{"row":5,"column":67},"action":"insert","lines":["e"],"id":76}],[{"start":{"row":5,"column":67},"end":{"row":5,"column":68},"action":"insert","lines":["d"],"id":77}],[{"start":{"row":5,"column":69},"end":{"row":5,"column":70},"action":"insert","lines":[":"],"id":78}],[{"start":{"row":5,"column":70},"end":{"row":5,"column":71},"action":"insert","lines":["t"],"id":79}],[{"start":{"row":5,"column":71},"end":{"row":5,"column":72},"action":"insert","lines":["r"],"id":80}],[{"start":{"row":5,"column":72},"end":{"row":5,"column":73},"action":"insert","lines":["u"],"id":81}],[{"start":{"row":5,"column":73},"end":{"row":5,"column":74},"action":"insert","lines":["e"],"id":82}],[{"start":{"row":2,"column":62},"end":{"row":2,"column":63},"action":"insert","lines":[","],"id":83}],[{"start":{"row":2,"column":63},"end":{"row":2,"column":74},"action":"insert","lines":["'used':true"],"id":84}],[{"start":{"row":2,"column":70},"end":{"row":2,"column":74},"action":"remove","lines":["true"],"id":85},{"start":{"row":2,"column":70},"end":{"row":2,"column":71},"action":"insert","lines":["f"]}],[{"start":{"row":2,"column":71},"end":{"row":2,"column":72},"action":"insert","lines":["a"],"id":86}],[{"start":{"row":2,"column":72},"end":{"row":2,"column":73},"action":"insert","lines":["l"],"id":87}],[{"start":{"row":2,"column":73},"end":{"row":2,"column":74},"action":"insert","lines":["s"],"id":88}],[{"start":{"row":2,"column":74},"end":{"row":2,"column":75},"action":"insert","lines":["e"],"id":89}],[{"start":{"row":44,"column":63},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":90},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":45,"column":4},"end":{"row":45,"column":63},"action":"insert","lines":["Meteor.call('studentUseCard', this.studentId, this.cardId);"],"id":91}],[{"start":{"row":45,"column":17},"end":{"row":45,"column":31},"action":"remove","lines":["studentUseCard"],"id":92},{"start":{"row":45,"column":17},"end":{"row":45,"column":25},"action":"insert","lines":["usedCard"]}],[{"start":{"row":45,"column":33},"end":{"row":45,"column":55},"action":"remove","lines":["studentId, this.cardId"],"id":93},{"start":{"row":45,"column":33},"end":{"row":45,"column":34},"action":"insert","lines":["_"]}],[{"start":{"row":45,"column":34},"end":{"row":45,"column":35},"action":"insert","lines":["i"],"id":94}],[{"start":{"row":45,"column":35},"end":{"row":45,"column":36},"action":"insert","lines":["d"],"id":95}],[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":96},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":7,"column":2},"end":{"row":9,"column":4},"action":"insert","lines":["student: function(){","    return students.findOne({_id: this.student});","  },"],"id":97}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["I"],"id":98}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["d"],"id":99}],[{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["."],"id":100}],[{"start":{"row":8,"column":51},"end":{"row":8,"column":52},"action":"insert","lines":["s"],"id":101}],[{"start":{"row":8,"column":52},"end":{"row":8,"column":53},"action":"insert","lines":["t"],"id":102}],[{"start":{"row":8,"column":53},"end":{"row":8,"column":54},"action":"insert","lines":["u"],"id":103}],[{"start":{"row":8,"column":54},"end":{"row":8,"column":55},"action":"insert","lines":["d"],"id":104}],[{"start":{"row":8,"column":55},"end":{"row":8,"column":56},"action":"insert","lines":["e"],"id":105}],[{"start":{"row":8,"column":56},"end":{"row":8,"column":57},"action":"insert","lines":["n"],"id":106}],[{"start":{"row":8,"column":57},"end":{"row":8,"column":58},"action":"insert","lines":["t"],"id":107}],[{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":["M"],"id":108}],[{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"remove","lines":["M"],"id":109}],[{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":["N"],"id":110}],[{"start":{"row":8,"column":59},"end":{"row":8,"column":60},"action":"insert","lines":["a"],"id":111}],[{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"insert","lines":["n"],"id":112}],[{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"insert","lines":[","],"id":113}],[{"start":{"row":8,"column":62},"end":{"row":8,"column":63},"action":"insert","lines":["e"],"id":114}],[{"start":{"row":8,"column":62},"end":{"row":8,"column":63},"action":"remove","lines":["e"],"id":115}],[{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"remove","lines":[","],"id":116}],[{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"insert","lines":["e"],"id":117}],[{"start":{"row":8,"column":50},"end":{"row":8,"column":62},"action":"remove","lines":[".studentNane"],"id":118}],[{"start":{"row":9,"column":4},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":119},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":10,"column":2},"end":{"row":12,"column":4},"action":"insert","lines":["student: function(){","    return students.findOne({_id: this.studentId});","  },"],"id":120}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":9},"action":"remove","lines":["student"],"id":121},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["c"]}],[{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":["a"],"id":122}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["r"],"id":123}],[{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["d"],"id":124}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":19},"action":"remove","lines":["students"],"id":125},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["c"]}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["a"],"id":126}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["r"],"id":127}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["d"],"id":128}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["s"],"id":129}],[{"start":{"row":11,"column":36},"end":{"row":11,"column":45},"action":"remove","lines":["studentId"],"id":130},{"start":{"row":11,"column":36},"end":{"row":11,"column":42},"action":"insert","lines":["cardId"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":4},"end":{"row":12,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1553266699100,"hash":"71a7dfb86c6b667cd8880fa53140a44af7fb47e7"}