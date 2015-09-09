Journal.Views.PostsIndexItem = Backbone.View.extend({

  tagName: 'li',
  template: JST['posts/indexItem'],

  render: function () {
    var content = this.template({ post: this.model });

    this.$el.html(content);

    return this;
  },

  postDelete: function () {
    this.model.destroy();
  },

  events: {
    "click .post-delete": "postDelete"
  }

});
