class CommentsController < ApplicationController
	# GET /posts/:post_id/comments
	def index
		@post = Post.find(params[:post_id])
		@comments = @post.comments.all

		respond_to do |format|
			format.json { render json: @comments }
		end
	end

	# GET /posts/:post_id/comments/:id
	def show
		@post = Post.find(params[:post_id])
		#@comments = @post.comments.find(params[:id])
		@comments = @post.comments.all

		respond_to do |format|
			format.json { render json: @comments }
		end
	end

	# POST /posts/:post_id/comments/
	def create 
		@post = Post.find(params[:post_id])
		@comment = @post.comments.create(params[:comment])

		respond_to do |format|
			if @comment.save
				format.json { render json: @comment, status: :created }
			else
				format.json { render json: @comment.errors, status: :unprocessable_entity }
			end
		end
	end

end
