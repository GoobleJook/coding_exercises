// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

def index
	@contacts = Contact.all
end
