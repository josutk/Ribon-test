class AddImgToEvolutions < ActiveRecord::Migration[5.2]
  def change
    add_column :evolutions, :img, :string
  end
end
