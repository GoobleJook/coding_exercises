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

def place_player():
  player_position = r.choice(grid)
  return player_position

def place_monster():
  monster_position = r.choice(grid)
  if monster_position == player_position:
    monster_position = r.choice(grid)
  else:
    return monster_position

def place_door():
  escape_door = r.choice(grid)
  if escape_door == monster_position or escape_door == player_position:
    escape_door = r.choice(grid)
  else:
    return escape_door



build_grid()
print(place_player())
print(place_monster())
print(place_door())