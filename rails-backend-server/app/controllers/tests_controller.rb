class TestsController < ApplicationController
 
 
     def getTest
       render :json => {"pie" => "chicken"}
     end
   
     def postTest
        p params
        p "*****************"
        p params[:username]

        p "@#$%^&*"
        render :json => {"you sent"=> "this"}


     end

   end