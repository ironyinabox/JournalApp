Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  initialize: function () {
    this.collection = new Journal.Collections.Posts();
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);

    this.collection.each(function (post) {
      var postLI = new Journal.Views.PostsIndexItem({ model: post });
      this.$('ul').append(postLI.render().$el); // this.$el.find('ul')
    }.bind(this));
  }


});
