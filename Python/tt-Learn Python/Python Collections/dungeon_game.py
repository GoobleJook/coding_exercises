import random as r

# This is a 2d maze-like game with:
# 1. Player in a random room in the grid
# 2. Monster in random room in the grid
# 3. Door in random room in the grid 

# Purpose: Player moves around maze trying to find door to leave, without being eaten by monster

# Tips: 
# - Grid is best made up of stored coordinates (tuples would work, as it's a 2d grid)
# - Use .choice() method from the Random library to place player, monster, and door
# - Don't let player move off the map
# - Notify player if he is eaten or if he escapes
# - "Draw" a map as the game is played

grid = []
player_position = None
monster_position = None
escape_door = None

def build_grid():
  for x in range(0,11):
    for y in range(0,11):
      dungeon = x,y
      grid.append(dungeon)
  return grid

def set_locations(playing_board):
  # locations are stored in a tuple in the following order
  # player_position, monster_position, escape_door
  player_position = r.choice(playing_board)
  monster_position = r.choice(playing_board)
  escape_door = r.choice(playing_board)
  start_positions = (player_position, monster_position, escape_door)
  return start_positions

def move_player(position)
## move the player based on direction from current position

def leave_maze()

def eaten_by_monster()

print(build_grid())
print(set_locations(grid))
if player_position == monster_position or player_position == escape_door or monster_position == escape_door: 
  set_locations(grid)
