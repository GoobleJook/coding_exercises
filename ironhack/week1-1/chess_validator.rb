require 'pry'

### attributes
		#positions	
		#pieces at positions
		#boundaries

	### methods
		# Rules
		# turns
		# Taking pieces

class Game
	def initialize
		@board = {
			a1: Rook.new(1,1, "white"), 
			:a2 => Pawn.new(1,2,"white"),
			:b1 => Knight.new(3,1,"white"),
			a3: nil
		}
	end

	def on_board?(start_position, end_position)
		if @board.has_key?(start_position.to_sym) && @board.has_key?(end_position.to_sym)
	end


	def valid_move?(start_position, end_position)
		#check to see if start position is on board -- Use .has_key? 
		# check to see if end position is on the board
		# if the piece at the start position can move in the way asked
		puts "The position exists" if on_board(start,end_position)	
	end
end

	

class Piece #master piece
	def initialize (x, y, color)
		@x = x
		@y = y
		@color = color
	end
end

class Rook < Piece
	def move (new_x, new_y) #valid moves 
		if (@x - new_x).abs != 0 && (@y - new_y).abs == 0
			true
		elsif (@y - new_y).abs !=0 && (@x - new_x).abs == 0
			true
		else
			false
		end
	end
end

class Knight < Piece
	def move (new_x, new_y) #valid moves 
		if (@x - new_x).abs == 2 && (@y - new_y).abs == 1
			true
		elsif (@y - new_y).abs == 2 && (@x - new_x).abs == 1
			true
		else
			false
		end
	end
end

class Bishop < Piece
	def move (new_x, new_y) #valid moves 
		return true if (@y - new_y).abs == (@x - new_x).abs
			false
	
	end
end

class Queen < Piece
	def move (new_x, new_y) #valid moves 
		if (@x - new_x).abs != 0 && (@y - new_y).abs == 0
			true
		elsif (@y - new_y).abs !=0 && (@x - new_x).abs == 0
			true
		elsif (@y - new_y).abs == (@x - new_x).abs
			true
		else
			false
		end
	end
end

class King < Piece
	def move (new_x, new_y) #valid moves 
		return false if (@x - new_x).abs > 1 || (@y - new_y).abs > 1
		true 		
	end
end

class Pawn < Piece
	def move (new_x, new_y) #valid moves
		return false if (
			(@x - new_x).abs > 0 ||
			(@y - new_y).abs > 2 ||
			(@color == "black" && @y - new_y < 0) ||
			(@color == "white" && @y - new_y > 0)
			)
		true
	end
end

# ===== populate the black team ====

br1 = Rook.new(1, 8, "black")
br2 = Rook.new(8, 8, "black")
bk1 = Knight.new(2, 8, "black")
bk2 = Knight.new(7, 8, "black")
bb1 = Bishop.new(3, 8, "black")
bb2 = Bishop.new(6, 8, "black")
bq = Queen.new(4, 8, "black")
bk = King.new(5, 8, "black")
bp1 = Pawn.new(1, 7, "black")
bp2 = Pawn.new(2, 7, "black")
bp3 = Pawn.new(3, 7, "black")
bp4 = Pawn.new(4, 7, "black")
bp5 = Pawn.new(5, 7, "black")
bp6 = Pawn.new(6, 7, "black")
bp7 = Pawn.new(7, 7, "black")
bp8 = Pawn.new(8, 7, "black")

# ==== populate the white team ====

wr1 = Rook.new(1, 1, "white")
wr2 = Rook.new(8, 1, "white")
wk1 = Knight.new(2, 1, "white")
wk2 = Knight.new(7, 1, "white")
wb1 = Bishop.new(3, 1, "white")
wb2 = Bishop.new(6, 1, "white")
wq = Queen.new(4, 1, "white")
wk = King.new(5, 1, "white")
wp1 = Pawn.new(1, 2, "white")
wp2 = Pawn.new(2, 2, "white")
wp3 = Pawn.new(3, 2, "white")
wp4 = Pawn.new(4, 2, "white")
wp5 = Pawn.new(5, 2, "white")
wp6 = Pawn.new(6, 2, "white")
wp7 = Pawn.new(7, 2, "white")
wp8 = Pawn.new(8, 2, "white")

# ======= black team tests =====
puts "BLACK TEAM TESTS FOLLOW:"

if  #rooks
	br1.move(1, 1) == true &&
	br2.move(8, 6) == true &&
	br1.move(2, 7) == false &&
	br2.move(7, 6) == false  
	then puts "Black rooks: PASS" 
else
	puts "Black rooks: FAIL"
	puts "Exiting tests"
	abort
end

if  #knights
	bk1.move(3, 6) == true &&
	bk2.move(8, 6) == true &&
	bk1.move(3, 7) == false &&
	bk2.move(7, 6) == false  
	then puts "Black knights: PASS" 
else
	puts "Black knights: FAIL"
	puts "Exiting tests"
	abort
end

if  #bishops
	bb1.move(6, 5) == true &&
	bb2.move(1, 3) == true &&
	bb1.move(7, 8) == false &&
	bb2.move(6, 7) == false  
	then puts "Black bishops: PASS" 
else
	puts "Black bishops: FAIL"
	puts "Exiting tests"
	abort
end

if  #queen
	bq.move(5, 7) == true &&
	bq.move(4, 2) == true &&
	bq.move(3, 6) == false &&
	bq.move(5, 2) == false  
	then puts "Black queen: PASS" 
else
	puts "Black queen: FAIL"
	puts "Exiting tests"
	abort
end

if  #king
	bk.move(6, 8) == true &&
	bk.move(5, 7) == true &&
	bk.move(5, 6) == false &&
	bk.move(3, 7) == false  
	then puts "Black king: PASS" 
else
	puts "Black king: FAIL"
	puts "Exiting tests"
	abort
end

if  #pawn
	bp2.move(2, 5) == true &&
	bp6.move(6, 6) == true &&
	bp3.move(4, 6) == false &&
	bp5.move(4, 6) == false  
	then puts "Black pawns: PASS"
	puts "\n\nALL BLACK TESTS PASS!!!\n\n" 
else
	puts "Black pawns: FAIL"
	puts "Exiting tests"
	abort
end

# ======= white team tests =====
puts "WHITE TEAM TESTS FOLLOW:"

if  #rooks
	wr1.move(1, 6) == true &&
	wr2.move(4, 1) == true &&
	wr1.move(2, 2) == false &&
	wr2.move(7, 2) == false  
	then puts "White rooks: PASS" 
else
	puts "White rooks: FAIL"
	puts "Exiting tests"
	abort
end

if  #knights
	wk1.move(4, 2) == true &&
	wk2.move(5, 2) == true &&
	wk1.move(3, 2) == false &&
	wk2.move(6, 5) == false  
	then puts "White knights: PASS" 
else
	puts "White knights: FAIL"
	puts "Exiting tests"
	abort
end

if  #bishops
	wb1.move(1, 3) == true &&
	wb2.move(8, 3) == true &&
	wb1.move(6, 1) == false &&
	wb2.move(3, 5) == false  
	then puts "White bishops: PASS" 
else
	puts "White bishops: FAIL"
	puts "Exiting tests"
	abort
end

if  #queen
	wq.move(4, 4) == true &&
	wq.move(6, 3) == true &&
	wq.move(3, 6) == false &&
	wq.move(5, 3) == false  
	then puts "White queen: PASS" 
else
	puts "White queen: FAIL"
	puts "Exiting tests"
	abort
end

if  #king
	wk.move(5, 2) == true &&
	wk.move(6, 1) == true &&
	wk.move(5, 3) == false &&
	wk.move(2, 7) == false  
	then puts "White king: PASS" 
else
	puts "White king: FAIL"
	puts "Exiting tests"
	abort
end

if  #pawn
	bp2.move(2, 5) == true &&
	bp6.move(6, 6) == true &&
	bp3.move(4, 6) == false &&
	bp5.move(4, 6) == false  
	then puts "White pawns: PASS"
	puts "\n\nALL TESTS PASS!!!"
	puts "\n\n\n\nYOU ARE A ROCKSTAR!!!" 
else
	puts "White pawns: FAIL"
	puts "Exiting tests"
	abort
end

game = Game.new
game.valid_move?("a2", "a3")
