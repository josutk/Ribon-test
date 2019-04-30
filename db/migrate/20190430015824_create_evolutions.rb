class CreateEvolutions < ActiveRecord::Migration[5.2]
  def change
    create_table :evolutions do |t|
      t.string :pokemon
      t.string :first_evolution
      t.string :second_evolution

      t.timestamps
    end
  end
end
