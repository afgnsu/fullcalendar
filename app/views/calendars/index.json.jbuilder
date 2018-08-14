json.array! @calendars do |calendar|
  date_format = calendar.all_day_calendar? ? '%Y-%m-%d' : '%Y-%m-%dT%H:%M:%S'
  json.id calendar.id
  json.title calendar.title
  json.start calendar.start.strftime(date_format)
  json.end calendar.end.strftime(date_format)
  json.color calendar.color unless calendar.color.blank?
  json.allDay calendar.all_day_calendar? ? true : false
  json.update_url calendar_path(calendar, method: :patch)
  json.edit_url edit_calendar_path(calendar)
end
