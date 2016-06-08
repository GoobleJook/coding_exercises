# ======================= setup =======================

# We are building a chess validator (class) and smaller classes

# setup [a - h][1-8] grid
# turn letters into numbers
# origin to dest - how we make a move
# each piece type gets its own class

# do pawn last -- most complicated
# no castle or en pessant

# first consider whether or not move can be made,
# then worry about obstructions (in another exercise? Not needed for this one. Includes friendly pieces)

# start with knight or bishop or king
# one bishop on white, one on black
# rook can be on any color

# work from bottom up -- Pieces are at the bottom.

# My ideas
# Game class handles movement
# Piece class handles starting position and movement rules


# Read a series of moves from a file (me) - [ [a2, a3], [a2, a4] ]
# Tell the user whether each move is valid or not
# Each piece is on the board alone, don't worry about collisions - can the piece move as it is described?

# ======================== breakdown ===========================

# ------- classes -----------------
# Board/"Chess Validator" -- handles boundry rules
# pawn, king, queen, rook, bishop, knight sub-class (of piece base class) - handles movement rules
# piece base class 

# ------------ attributes ----------------
# position on board
# color (black moves "down", white moves "up"; will be useful for takes in the future.)
# pieces in the board

# -------------- actions -----------------
# movement (for each different piece -- move(King), move(Queen)
# take (for future)



# ================ class ChessValidator ====================
# attributes: @piecesInTHeBoard, @boundaries/size
# actions: def removePiece, def validateMove

# ================ class piece ============================
# attributes: @position or @x @y, @color
class Piece
	def initialize (x, y, color)
		@x = x - set on instantiation (piece.new etc)
		@y = y - set on instantiation
		@color = color - set on instantiation
	end
end	

class Rook < Piece
	def move (newX, newY)
		# check move from @x @y to @newX @newY; # rules to check vary per piece type
		return boolean
	end
end

br1 = Rook.new(1, 8, "black")
br2 = Rook.new(8, 8, "black")
wr1 = Rook.new(1, 1, "white")
wr2 = Rook.new(8, 1, "white")

# br1.move(1, 5) -- returns true or false, pull starting position from br1 always test against starting position

# Can, but don't have to, do modules for HorizontalPIece, VerticlePiece, etc...
# Rook, check for changes in x or y, which can't be allowed on horizontal or vertical movements, which is all rook can do
# diagonal is equal move in horizontal and vertical -- keep simple
# test piece movement on >= 3 pieces before you deal with fileIO.read; hardcode movement checks; test good and bad, per pieces
# pieces, then board

# move - test: down, up, left, right

# =============== classIndividual =========================
# actions: def movement with rules specific to piece type

# ============== classPawn =========================
# actions def move
	# only move 1 space
	# only move forward, toward enemy side
	# take diagonally, 1 space