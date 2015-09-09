class PostsController < ApplicationController

  before_action :set_post, only: [:edit, :show, :destroy]

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
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body, :title)
  end
end
