require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get service" do
    get :service
    assert_response :success
  end

  test "should get aboutus" do
    get :aboutus
    assert_response :success
  end

  test "should get portfolio" do
    get :portfolio
    assert_response :success
  end

  test "should get team" do
    get :team
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get blogrubyonrails" do
    get :blogrubyonrails
    assert_response :success
  end

  test "should get blogandroid" do
    get :blogandroid
    assert_response :success
  end

  test "should get blogios" do
    get :blogios
    assert_response :success
  end

  test "should get blogwebdisign" do
    get :blogwebdisign
    assert_response :success
  end

  test "should get activity" do
    get :activity
    assert_response :success
  end

end
