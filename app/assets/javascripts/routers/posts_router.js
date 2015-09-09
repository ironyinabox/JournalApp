Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit",
    "posts/new/": "postNew"
  },

  initialize: function (el) {
    this.$el = $(el);
  },

  postsIndex: function (callback) {
    this.indexView = new Journal.Views.PostsIndex();
    this.indexView.collection.fetch({
      success: callback,
      reset: true
    });
    this.$el.html(this.indexView.render().$el);
    this.$el.find('new-post').empty();
  },

  postShow: function (postId) {
    if (this.indexView === undefined) {
      this.postsIndex(this.postShow.bind(this, postId));
      return;
    }

    var post = this.indexView.collection.getOrFetch(postId);

    var showView = new Journal.Views.PostShow({ model: post });

    this.$el.html(showView.render().$el);
  },

  postEdit: function (postId) {
    if (this.indexView === undefined) {
      this.postsIndex(this.postEdit.bind(this, postId));
      return;
    }

    var post = this.indexView.collection.getOrFetch(postId);

    var formView = new Journal.Views.PostForm({ model: post });

    this.$el.html(formView.render().$el);
  },

  postNew: function () {
    if (this.indexView === undefined) {
      this.postsIndex(this.postNew.bind(this));
      return;
    }
    debugger
    var post = new Journal.Models.Post();

    var formView = new Journal.Views.PostForm({ model: post });

    this.$el.find('.new-post').html(formView.render().$el);
  }

});
