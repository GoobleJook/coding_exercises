movies = {
    :"Shakes The Clown" => 5,
    :"Tim" => 3
    }
    
puts "Would you like to ADD, UPDATE, or DELETE a movie and its rating, or would you like to DISPLAY the movies we have in our database? Please enter your choice."
choice = gets.chomp

case choice
when "add"
    puts "What title would you like added?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "And what rating would you give #{title}?"
        movies[title.to_sym] = rating.to_i
        rating = gets.chomp
        puts "#{title} added with a rating of #{rating}!"
    else
        puts "#{title} is already is in the database with a rating of #{movies[title.to_sym]}!"
    end
when "update"
    puts "Which movie would you like to update?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "#{title} is not in our database, and thus can't be updated. Maybe add it instead?"
    else
        puts "What would you like the new rating to be?"
        rating = gets.chomp
        movies[title.to_sym] = rating.to_i
    end
when "display"
    movies.each do |k, v|
        puts "#{k}: #{v}"
    end
when "delete"
    puts "Which title would you like to delete?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "#{title} is not in our system, hence it can't be deleted!"
    else
        movies.delete(title.to_sym)
    end
else
    puts "Error!"
end