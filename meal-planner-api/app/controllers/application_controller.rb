class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from AuthorizationError, with: :unauthorized_error

    def render_resource(resource, with: nil)
        if resource.errors.empty?
            render json: resource, include: with
        else
            validation_error(resource)
        end
    end

    def validation_error(resource)
        render json: {
            errors: [
                {
                    status: '400',
                    title: 'Bad Rquest',
                    detail: resource.errors,
                    code: '100'
                }
            ]
        }, status: :bad_request
    end

    def authorize_owner_resource(resource)
        raise AuthorizationError.new if resource.owner != current_owner
    end

    def unauthorized_error
        render json: {message: "You Are Not Authorized To Make That Request"}, status: 401
    end

    def not_found
        render json: {message: "Resource Not Found"}, status: 404
    end
    
end
