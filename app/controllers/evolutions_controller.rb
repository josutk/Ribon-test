class EvolutionsController < ApplicationController
  before_action :set_evolution, only: [:show, :update, :destroy]

  # GET /evolutions
  def index
    @evolutions = Evolution.all

    render json: @evolutions
  end

  # GET /evolutions/1
  def show
    render json: @evolution
  end

  # POST /evolutions
  def create
    @evolution = Evolution.new(evolution_params)

    if @evolution.save
      render json: @evolution, status: :created, location: @evolution
    else
      render json: @evolution.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /evolutions/1
  def update
    if @evolution.update(evolution_params)
      render json: @evolution
    else
      render json: @evolution.errors, status: :unprocessable_entity
    end
  end

  # DELETE /evolutions/1
  def destroy
    @evolution.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evolution
      @evolution = Evolution.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def evolution_params
      params.require(:evolution).permit(:pokemon, :first_evolution, :second_evolution)
    end
end
