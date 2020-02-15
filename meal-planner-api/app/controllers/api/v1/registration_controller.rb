class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        begin
            super
        rescue ActiceRecord::RecordInvalid => e
            render_resource(e.record)
        rescue ActiceRecord::RecordNotUnique => e
            err = OpenStruct.new(errors: {users: 'Already Excsts'})
            validation_error(err)
        end
    end

end