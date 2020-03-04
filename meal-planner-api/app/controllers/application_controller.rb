class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from AuthorizationError, with: :unauthorized_error

    before_action :configure_permitted_parameters, if: :devise_controller?

    # helper_method :current_user

    def render_resource(resource, with: nil)
        if resource.errors.empty?
            render json: resource, include: with
        else
            validation_error(resource)
        end
    end

    def validation_error(resource)
        render json: {
            error: {
                    status: '400',
                    title: 'Bad Rquest',
                    detail: resource.errors["detail"],
                    code: '100'
                    }
        }, status: :bad_request
    end

    # def current_user
    #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # end

    def authorize_user_resource(resource)
        raise AuthorizationError.new if resource.user != current_user
    end

    def unauthorized_error
        render json: {message: "You Are Not Authorized To Make That Request"}, status: 401
    end

    def not_found
        render json: {message: "Resource Not Found"}, status: 404
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :username])
    end
    
end
