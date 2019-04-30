require 'test_helper'

class EvolutionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @evolution = evolutions(:one)
  end

  test "should get index" do
    get evolutions_url, as: :json
    assert_response :success
  end

  test "should create evolution" do
    assert_difference('Evolution.count') do
      post evolutions_url, params: { evolution: { first_evolution: @evolution.first_evolution, pokemon: @evolution.pokemon, second_evolution: @evolution.second_evolution } }, as: :json
    end

    assert_response 201
  end

  test "should show evolution" do
    get evolution_url(@evolution), as: :json
    assert_response :success
  end

  test "should update evolution" do
    patch evolution_url(@evolution), params: { evolution: { first_evolution: @evolution.first_evolution, pokemon: @evolution.pokemon, second_evolution: @evolution.second_evolution } }, as: :json
    assert_response 200
  end

  test "should destroy evolution" do
    assert_difference('Evolution.count', -1) do
      delete evolution_url(@evolution), as: :json
    end

    assert_response 204
  end
end
