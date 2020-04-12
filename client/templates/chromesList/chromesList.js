Template.chromesList.helpers({
  chromes: function() {
    return chromes.find({classId: Session.get('classId')});
  },
  chrome_src: function(imageId) {
    if (imageId) {
      return images.findOne({_id: imageId}).image_url;
    } else {
      if (Session.get('selectedImage')) {
        return images.findOne({_id: Session.get('selectedImage')}).image_url;
      } else {
        return "https://res.cloudinary.com/myclassgame/image/upload/v1554809984/images/22190738841_41626354b7_b.jpg";
      }
    }
  }
});

Template.chromesList.events({
  'submit form.createChromeForm': function(event) {
    event.preventDefault();
    var chrome = {
      classId: Session.get('classId'),
      chromeName: $(event.target).find('[name=chromeName]').val(),
      chromeDescription: $(event.target).find('[name=chromeDescription]').val(),
      chromeLevel: $(event.target).find('[name=chromeLevel]').val(),
      chromePrice: $(event.target).find('[name=chromePrice]').val(),
      chromeImage: Session.get('selectedImage'),
      createdOn: new Date()
    };
    Meteor.call('chromeInsert', chrome);
  },
  'submit form.chromeForm': function(event) {
    event.preventDefault();
    var chrome = {
      chromeName: $(event.target).find('[name=chromeName]').val(),
      chromeDescription: $(event.target).find('[name=chromeDescription]').val(),
      chromeLevel: $(event.target).find('[name=chromeLevel]').val(),
      chromePrice: $(event.target).find('[name=chromePrice]').val()
    };
    Meteor.call('chromeUpdate', this._id, chrome);
  },
  'click .btnDeleteChrome': function(event) {
    event.preventDefault();
    Meteor.call('chromeDelete',this._id);
  },
  'click .eImage': function(event) {
    event.preventDefault();
    Session.set('imageType','chrome');
    Session.set('idElementImage',event.currentTarget.title);
    Modal.show('imagesTemplate');
  }
});
