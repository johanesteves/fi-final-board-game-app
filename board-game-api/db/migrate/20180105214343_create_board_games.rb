class CreateBoardGames < ActiveRecord::Migration[5.1]
  def change
    create_table :board_games do |t|
      t.string :name
      t.integer :rank
      t.float :rating
      t.string :img_url
      t.integer :release_year
      t.float :weight

      t.timestamps
    end
  end
end
