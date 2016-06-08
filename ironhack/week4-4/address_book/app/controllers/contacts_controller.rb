class ContactsController < ApplicationController
	def index
		@contacts = Contact.order('name DESC')
	end

	def new
		render 'new'
	end

	def create
			contact = Contact.new(
    	:name => params[:contact][:name],
    	:address => params[:contact][:address],
    	:phone => params[:contact][:phone],
    	:email => params[:contact][:email])

    	contact.save

    	redirect_to("/contacts")
  end

  def show
  	@contact = Contact.find params[:id]
	rescue ActiveRecord::RecordNotFound
		render 'no_contacts_found'
  end
end
