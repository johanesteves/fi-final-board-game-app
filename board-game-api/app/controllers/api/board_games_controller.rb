class Api::BoardGamesController < ApplicationController

  def index
    @board_games = BoardGame.all
    render json: @board_games
  end

end