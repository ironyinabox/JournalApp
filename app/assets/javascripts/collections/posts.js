Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",

  model: Journal.Models.Post,

  getOrFetch: function (id) {
    var collection = this;
    var post = collection.get(id);

    if (post) {
      post.fetch();
    } else {
      post = new Journal.Models.Post({ id: id });
      collection.add(post);
      post.fetch({
        error: function() { collection.remove(post); }
      });
    }

    return post;
  }

});
