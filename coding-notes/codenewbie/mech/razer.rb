require 'rubygems'
require 'mechanize'

razer = Mechanize.new

page = agent.get("
http://careers.razerzone.com/search.php")

puts.links.each do |link|
	puts link.text
end