window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.indexView = new Journal.Views.PostsIndex({});
    this.indexView.collection.fetch({
      reset: true
    });
  }
};

$(document).ready(function(){
  Journal.initialize();
});
