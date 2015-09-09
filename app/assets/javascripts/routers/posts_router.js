Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow"
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
  },

  postShow: function (postId) {
    if (this.indexView === undefined) {
      this.postsIndex(this.postShow.bind(this, postId));
      return;
    }

    var post = this.indexView.collection.getOrFetch(postId);
    
    var showView = new Journal.Views.PostShow({ model: post });

    this.$el.html(showView.render().$el);
  }

});
