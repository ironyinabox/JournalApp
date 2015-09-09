json.extract! @post, :title, :body, :id
json.errors @post.errors.full_messages
