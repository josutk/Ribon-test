class RemoveImgFromPokemons < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :img, :string
  end
end
