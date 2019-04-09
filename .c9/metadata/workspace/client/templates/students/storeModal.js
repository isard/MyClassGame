{"filter":false,"title":"storeModal.js","tooltip":"/client/templates/students/storeModal.js","undoManager":{"mark":72,"position":72,"stack":[[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[","],"id":2}],[{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":4,"column":2},"end":{"row":6,"column":4},"action":"insert","lines":["srcImage: function(imgId) {","    return images.findOne({_id: imgId }).image_url;","  },"],"id":4}],[{"start":{"row":17,"column":4},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":25,"column":4},"action":"insert","lines":["'click .list-group-item': function(event) {","    event.preventDefault();","    if ($(event.currentTarget).hasClass(\"list-group-item-danger\")){","      $(event.currentTarget).removeClass(\"list-group-item-danger\");","    } else {","      $(event.currentTarget).addClass(\"list-group-item-danger\");","    }","  },"],"id":6}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":25},"action":"remove","lines":["list-group-item"],"id":7},{"start":{"row":18,"column":10},"end":{"row":18,"column":21},"action":"insert","lines":["btn-success"]}],[{"start":{"row":20,"column":31},"end":{"row":20,"column":34},"action":"remove","lines":["has"],"id":8},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["o"],"id":9}],[{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["g"],"id":10}],[{"start":{"row":20,"column":31},"end":{"row":20,"column":34},"action":"remove","lines":["tog"],"id":11},{"start":{"row":20,"column":31},"end":{"row":20,"column":37},"action":"insert","lines":["toggle"]}],[{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"remove","lines":["s"],"id":12}],[{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"remove","lines":["s"],"id":13}],[{"start":{"row":20,"column":39},"end":{"row":20,"column":40},"action":"remove","lines":["a"],"id":14}],[{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"remove","lines":["l"],"id":15}],[{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"remove","lines":["C"],"id":16}],[{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"remove","lines":["e"],"id":17}],[{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"insert","lines":["e"],"id":18}],[{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["c"],"id":19}],[{"start":{"row":20,"column":40},"end":{"row":20,"column":62},"action":"remove","lines":["list-group-item-danger"],"id":20},{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"insert","lines":["a"]}],[{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"insert","lines":["c"],"id":21}],[{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"insert","lines":["t"],"id":22}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":["i"],"id":23}],[{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"insert","lines":["v"],"id":24}],[{"start":{"row":20,"column":45},"end":{"row":20,"column":46},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":8},"action":"remove","lines":["if ("],"id":26}],[{"start":{"row":20,"column":44},"end":{"row":24,"column":5},"action":"remove","lines":["){","      $(event.currentTarget).removeClass(\"list-group-item-danger\");","    } else {","      $(event.currentTarget).addClass(\"list-group-item-danger\");","    }"],"id":27}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"remove","lines":[")"],"id":28}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":[")"],"id":29}],[{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"insert","lines":[";"],"id":30}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":44},"action":"remove","lines":[".togglec(\"active\")"],"id":31},{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":["t"],"id":32}],[{"start":{"row":20,"column":28},"end":{"row":20,"column":29},"action":"insert","lines":["o"],"id":33}],[{"start":{"row":20,"column":27},"end":{"row":20,"column":29},"action":"remove","lines":["to"],"id":34},{"start":{"row":20,"column":27},"end":{"row":20,"column":40},"action":"insert","lines":["toggleClass()"]}],[{"start":{"row":20,"column":39},"end":{"row":20,"column":41},"action":"insert","lines":["\"\""],"id":35}],[{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"insert","lines":["a"],"id":36}],[{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"insert","lines":["c"],"id":37}],[{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"insert","lines":["t"],"id":38}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":["i"],"id":39}],[{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"insert","lines":["v"],"id":40}],[{"start":{"row":20,"column":45},"end":{"row":20,"column":46},"action":"insert","lines":["e"],"id":41}],[{"start":{"row":20,"column":40},"end":{"row":20,"column":46},"action":"remove","lines":["active"],"id":42},{"start":{"row":20,"column":40},"end":{"row":20,"column":50},"action":"insert","lines":["activeTask"]}],[{"start":{"row":18,"column":14},"end":{"row":18,"column":21},"action":"remove","lines":["success"],"id":43},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["i"]}],[{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["n"],"id":44}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["f"],"id":45}],[{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["o"],"id":46}],[{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":35,"column":2},"end":{"row":35,"column":4},"action":"remove","lines":["  "],"id":48}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "],"id":49}],[{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"remove","lines":["",""],"id":50}],[{"start":{"row":25,"column":53},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":51},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":26,"column":4},"end":{"row":34,"column":7},"action":"insert","lines":["$('.storeModal').find(\".list-group-item-danger\").each( function() {","      itemId=this.id;","      price=parseInt($(this).find(\".price\").text());","      if ( coins >= price ) {","        Meteor.call('buyingItem', Session.get('studentId'), itemId, price);","      } else {","        alert(\"No coins\");","      }","    });"],"id":52}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":50},"action":"remove","lines":["list-group-item-danger"],"id":53},{"start":{"row":26,"column":28},"end":{"row":26,"column":38},"action":"insert","lines":["activeTask"]}],[{"start":{"row":28,"column":36},"end":{"row":28,"column":41},"action":"remove","lines":["price"],"id":54},{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["b"]}],[{"start":{"row":28,"column":37},"end":{"row":28,"column":38},"action":"insert","lines":["a"],"id":55}],[{"start":{"row":28,"column":38},"end":{"row":28,"column":39},"action":"insert","lines":["d"],"id":56}],[{"start":{"row":28,"column":39},"end":{"row":28,"column":40},"action":"insert","lines":["g"],"id":57}],[{"start":{"row":28,"column":40},"end":{"row":28,"column":41},"action":"insert","lines":["e"],"id":58}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":21},"action":"remove","lines":["      itemId=this.id;"],"id":59}],[{"start":{"row":26,"column":59},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":60}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":29},"action":"remove","lines":["      if ( coins >= price ) {"],"id":61}],[{"start":{"row":27,"column":52},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":62}],[{"start":{"row":28,"column":6},"end":{"row":28,"column":8},"action":"remove","lines":["  "],"id":63}],[{"start":{"row":29,"column":0},"end":{"row":31,"column":7},"action":"remove","lines":["      } else {","        alert(\"No coins\");","      }"],"id":64}],[{"start":{"row":28,"column":73},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":65}],[{"start":{"row":28,"column":56},"end":{"row":28,"column":64},"action":"remove","lines":[", itemId"],"id":66},{"start":{"row":28,"column":56},"end":{"row":28,"column":57},"action":"insert","lines":[","]}],[{"start":{"row":28,"column":57},"end":{"row":28,"column":58},"action":"remove","lines":[","],"id":67}],[{"start":{"row":28,"column":19},"end":{"row":28,"column":29},"action":"remove","lines":["buyingItem"],"id":68},{"start":{"row":28,"column":19},"end":{"row":28,"column":27},"action":"insert","lines":["incCoins"]}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":11},"action":"remove","lines":["price"],"id":69},{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["c"]}],[{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["o"],"id":70}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["i"],"id":71}],[{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["n"],"id":72}],[{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["s"],"id":73}],[{"start":{"row":28,"column":56},"end":{"row":28,"column":61},"action":"remove","lines":["price"],"id":74},{"start":{"row":28,"column":56},"end":{"row":28,"column":61},"action":"insert","lines":["coins"]}]]},"ace":{"folds":[],"scrolltop":120,"scrollleft":0,"selection":{"start":{"row":22,"column":46},"end":{"row":22,"column":46},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1554819322882,"hash":"9c2c4698f08311894bbfef7462845f511a0721de"}