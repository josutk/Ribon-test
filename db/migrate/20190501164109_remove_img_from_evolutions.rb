class RemoveImgFromEvolutions < ActiveRecord::Migration[5.2]
  def change
    remove_column :evolutions, :img, :string
  end
end
