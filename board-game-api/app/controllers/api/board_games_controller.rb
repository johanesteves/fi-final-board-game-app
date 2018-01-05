class Api::BoardGamesController < ApplicationController
  def index
    render json: BoardGame.all
  end

  def create
    board_game = BoardGame.new(board_game_params)
    if board_game.save
      render json: board_game
    else
      render json: {message: board_game.errors}, status: 400
    end
  end

  def show
    board_game = BoardGame.find(params[:id])
    render json: board_game
  end

  def update
    board_game = BoardGame.find(params[:id])
    if board_game.update(board_game_params)
      render json: board_game
    else
      render json: { message: board_game.errors }, status: 400
    end
  end

  def destroy
    board_game = BoardGame.find(params[:id])
    if board_game.destroy
      render status: 204
    else
      render json: { message: "Cannot delete board game." }, status: 400
    end
  end

  private

  def board_game_params
    params.require(:board_game).permit(:name, :rank, :rating, :img_url, :release_year, :weight)
  end
end
