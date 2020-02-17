require 'rails_helper'

RSpec.describe 'POST/signup', type: :request do
    let(:url) {'/api/v1/signup'}
    let(:params) do
        {
            user: {
                email: 'dan@mail.com',
                password: 'password'
            }
        }
    end

    context 'when user is unauthenticated' do
        before { post url, params: params  }

        it 'returns 200' do
            expect(response.status).to eq 200
        end
        
        it 'returns a new user' do
            puts response.body
        end

        it 'returns a JWT' do
            puts response.headers['Authorization']
            expect(response.headers['Authorization'])
        end
    end

    context 'when a user already exists' do
        before do
            Fabricate :user, email: params[:user][:email]
            post url, params: params
        end

        it 'returns bad request status' do
            expect(response.status).to eq 400
        end

        it 'returns validation errors' do
            json = JSON.parse(response.body)
            expect(json['errors'].first['title']).to eq('Bad Request')
        end
    end
end