class PostsController < ApplicationController

	def index
		@posts = Post.all

		respond_to do |format|
			format.json { render json: @posts }
		end
	end

	def show
		@post = Post.find(params[:id])

		respond_to do |format|
			format.json { render json: @post}
		end
	end

	def create 
		@post = Post.new(params[:post])

		respond_to do |format|
			if @post.save
				format.json { render json: @post, status:  :created, location: @post }
			else
				format.json { render json: @post.errors, status: :unprocessable_entity }
			end
		end
	end

	def update
		@post = Post.find(params[:id])

		respond_to do |format|
			if @post.save
				format.json { head :no_content }
			else
				format.json { render json: @post.errors, status: :unprocessable_entity }
			end
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		respond_to do |format|
			format.json { head :no_content }
		end
	end
	
end