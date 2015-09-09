Journal.Views.PostsIndexItem = Backbone.View.extend({

  tagName: 'li',
  template: JST['posts/indexItem'],

  render: function () {
    var content = this.template({ post: this.model });

    this.$el.html(content);

    return this;
  },

  events: {
    "click strong": "selectPost",
    "click .post-delete": "postDelete"
  },

  selectPost: function (e) {
    Backbone.history.navigate('/posts/' + this.model.id, { trigger: true });
  },

  postDelete: function () {
    this.model.destroy();
  }

});
