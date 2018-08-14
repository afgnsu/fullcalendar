class Calendar < ApplicationRecord
  validates :title, presence: true
  validates :start, presence: true
  validates :end, presence: true
  validates :color, presence: true
  attr_accessor :date_range

  def all_day_calendar?
    self.start == self.start.midnight && self.end == self.end.midnight ? true : false
  end
end
