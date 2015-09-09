Journal.Views.PostShow = Backbone.View.extend({
  tagName: 'article',
  
  template: JST['posts/show'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});
