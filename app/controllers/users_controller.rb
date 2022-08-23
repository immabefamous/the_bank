class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create
    
    def index 
        user = User.all
        render json: user, status: 200
    end

    def show
        render json: @current_user
      end

    def update 
        user = User.find_by(id: params[:id])
        if user
            user.update(likes: (params[:id]))
        render json: user, status: 201
        else
            render json: {error: "Not successful"}, status: 422
        end
    end
    
    def create 
        newUser = User.create(user_params_permit)
        session[:user_id] = user.id
        if newUser.valid?
            render json: newUser, status:201 
        else
            render json: {"errors":"invalid information"}, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        if user.valid?
            user.destroy
        end
        
      end

    private

    def user_params_permit 
        params.permit(:name, :username, :password, :password_confirmation)
    end


end
