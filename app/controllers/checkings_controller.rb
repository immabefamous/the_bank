class CheckingsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index 
        checking = Checking.all
        render json: checking, status: 200
    end

    def show
        checking = Checking.find_by(id: params[:id])
        if checking
            render json: checking, status: 200
        else 
            render json: {error: "Comment not found"}, status:404
        end
    end

    def update 
        checking = Checking.find_by(id: params[:id])
        if checking
            checking.update(likes: (params[:id]))
        render json: checking, status: 201
        else
            render json: {error: "Not successful"}, status: 422
        end
    end
    
    def create 
        newChecking = Checking.create(checking_params_permit) 
        if newChecking.valid?
            render json: newChecking, status:201 
        else
            render json: {"errors":"invalid information"}, status: 422
        end
    end

    def destroy
        checking = Checking.find(params[:id])
        if checking.valid?
            checking.destroy
        end
        
      end

    private

    def checking_params_permit 
        params.permit(:account_number, :available_balance, :current_balance)
    end

end
