Journal.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: JST['posts/post_form'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);

    return this;
  },

  submitEdit: function (e) {
    e.preventDefault();
    debugger
    var formData = $(e.currentTarget).serializeJSON();
    this.model.save(formData.post, {
      success: function (post) {
        Backbone.history.navigate("/posts/" + post.id, { trigger: true });
      }.bind(this),
      error: function (i, post) {
        var errs = post.responseJSON.errors;
        this.$el.prepend($('<strong>').text(errs).append('<br>'));
      }.bind(this)
    });
  },

  events: {
    "submit": "submitEdit"
  }


});
