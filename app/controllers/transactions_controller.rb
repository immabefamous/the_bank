class TransactionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index 
        transaction = Transaction.all
        render json: transaction, status: 200
    end

    def show
        transaction = Transaction.find_by(id: params[:id])
        if transaction?
            render json: transaction, status: 200
        else 
            render json: {error: "Comment not found"}, status:404
        end
    end

    def update 
        transaction = Transaction.find_by(id: params[:id])
        if transaction?
        transaction.update(likes: (params[:id]))
        render json: transaction, status: 201
        else
            render json: {error: "Not successful"}, status: 422
        end
    end
    
    def create 
        newTransaction = Transaction.create(transaction_params_permit) 
        if newTransaction.valid?
            render json: newTransaction, status:201 
        else
            render json: {"errors":"invalid information"}, status: 422
        end
    end

    def destroy
        transaction = Transaction.find(params[:id])
        if transaction.valid?
            transaction.destroy
        end
        
      end

    private

    def transaction_params_permit 
        params.permit(:account_number, :available_balance, :current_balance)
    end


end
