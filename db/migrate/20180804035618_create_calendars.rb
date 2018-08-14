class CreateCalendars < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.string :title
      t.datetime :start
      t.datetime :end
      t.string :color

      t.timestamps
    end
  end
end
