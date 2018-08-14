class CalendarsController < ApplicationController
  before_action :set_calendar, only: [:show, :edit, :update, :destroy]

  def index
    @calendars = Calendar.where(start: params[:start]..params[:end])
  end

  def show
  end

  def new
    @calendar = Calendar.new
  end

  def edit
  end

  def create
    @calendar = Calendar.new(calendar_params)
    @calendar.save
  end

  def update
    @calendar.update(calendar_params)
  end

  def destroy
    @calendar.destroy
  end

  private
    def set_calendar
      @calendar = Calendar.find(params[:id])
    end

    def calendar_params
      params.require(:calendar).permit(:title, :date_range, :start, :end, :color)
    end
end
