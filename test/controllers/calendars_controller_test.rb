require 'test_helper'

class CalendarsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get calendars_new_url
    assert_response :success
  end

  test "should get create" do
    get calendars_create_url
    assert_response :success
  end

  test "should get update" do
    get calendars_update_url
    assert_response :success
  end

  test "should get destroy" do
    get calendars_destroy_url
    assert_response :success
  end

end
