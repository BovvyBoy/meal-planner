class User < ApplicationRecord
  has_many :planners
  has_many :recipe_planners, through: :planners
  has_many :recipes, through:, :recipe_planners  

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  devise :database_authenticatable, 
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtBlacklist


end
