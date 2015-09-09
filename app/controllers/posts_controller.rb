class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  def new
  end

  def show
  end

  def index
    @posts = Post.all
  end

  def destroy
    @post = Post.find(params[:id])
    unless @post.nil?
      @post.destroy
    end

  end

  private
  def post_params
    params.require(:post).permit(:body, :title)
  end
end
