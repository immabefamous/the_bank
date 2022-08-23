class SavingsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index 
        saving = Saving.all
        render json: saving, status: 200
    end

    def show
        saving = Saving.find_by(id: params[:id])
        if saving
            render json: saving, status: 200
        else 
            render json: {error: "Comment not found"}, status:404
        end
    end

    def update 
        saving = Saving.find_by(id: params[:id])
        if saving
            saving.update(likes: (params[:id]))
        render json: saving, status: 201
        else
            render json: {error: "Not successful"}, status: 422
        end
    end
    
    def create 
        newSaving = Saving.create(checking_params_permit) 
        if newSaving.valid?
            render json: newSaving, status:201 
        else
            render json: {"errors":"invalid information"}, status: 422
        end
    end

    def destroy
        saving = Saving.find(params[:id])
        if saving.valid?
            saving.destroy
        end
        
      end

    private

    def saving_params_permit 
        params.permit(:account_number, :available_balance, :current_balance)
    end

end
