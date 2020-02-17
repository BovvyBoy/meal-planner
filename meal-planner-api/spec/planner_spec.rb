require 'rails_helper'

RSpec.describe 'GET /planners', type: :request do

    let(:user) { Fabricate(:user) }
    let(:user2) { Fabricate(:user) }
    let(:url) {'/api/v1/planners'}
    let(:params) do 
        {
            user: {
                email: user.email,
                password: user.password
            }
        }
    end

    let(:params2) do
        {
            user: {
                email: user2.email,
                password: user2.password
            }
        }
    end

    context 'you must be authorised to perform CRUD on planners' do
        it 'doesnt allow any unauthorised requests to planners controller' do
            get '/api/v1/planners'
            expect(response.status).to eq 401
            get '/api/v1/planners/1'
            expect(response.status).to eq 401
            post '/api/v1/planners', params: { planner: {name: "hello", duration: 2}}
            expect(response.status).to eq 401
            patch '/api/v1/planners/1', params: {planner: {name: "yes"}}
            expect(response.status).to eq 401
            delete '/api/v1/planners/1'
            expect(response.status).to eq 401
        end
    end

    context 'authenticated users can only create/update their own resources' do
        let(:plannersURL) {'/api/v1/planners'}
        before do
            post '/api/v1/login', params: params
            @token = response.headers['Authorization']
            post '/api/v1/login', params: params2
            @token2 = response.headers['Authorization']
        end

        it 'returns 404 for unfound planners' do
            get '/api/v1/planners/1000', headers: { Authorization: @token}
            expect(response.status).to eq 404
        end

        it 'allows an user to view only their own planners' do
            get plannersURL, headers: { Authorization: @token}
            body1 = JSON.parse(response.body)
            expect(body1.length).to eq 2
            expect(body1.first['user_id']).to eq 1
            expect(body1.last['user_id']).to eq 1

            get plannersURL, headers: { Authorization: @token2}
            body2 = JSON.parse(response.body)
            expect(body2.length).to eq 2
            expect(body2.first['user_id']).to eq 2
            expect(body2.last['user_id']).to eq 2
        end

        it 'prevents an user from updating a planner which is not theirs' do
            patch '/api/v1/planners/3', params: {planner: {name: "yes"}}, headers: {Authorization: @token}
            expect(response.status).to eq 401
        end

        it 'allows a user to update their planner' do
            patch '/api/v1/planners/1', params: {planner: {name: "hello"}}, headers: {Authorization: @token}
            expect(response.status).to eq 200
            body = JSON.parse(response.body)
            expect(body["name"]).to eq("hello")
        end

        it 'stops someone who is not the user from deleting planner' do
            delete '/api/v1/planners/3', headers: {Authorization: @token}
            expect(response.status).to eq 401
        end

        it 'prevents somone from visiting a planner which isnt theirs' do
            get '/api/v1/planners/1', headers: {Authorization: @token2}
            expect(response.status).to eq 401
        end
    end
end
