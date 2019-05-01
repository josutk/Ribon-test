class AddImgToPokemon < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemons, :img, :string
  end
end
