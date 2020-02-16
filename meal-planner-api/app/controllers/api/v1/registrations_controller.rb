class Api::V1::RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        begin
            super
        rescue ActiceRecord::RecordInvalid => e
            render_resource(e.record)
        rescue ActiceRecord::RecordNotUnique => e
            err = OpenStruct.new(errors: {users: 'Already Exists'})
            validation_error(err)
        end
    end

end