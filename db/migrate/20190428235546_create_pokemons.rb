class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.integer :indetifier
      t.string :name
      t.string :type1
      t.string :type2

      t.timestamps
    end
  end
end
