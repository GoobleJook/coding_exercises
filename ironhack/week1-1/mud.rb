class Room
	def initialize
		@exits = []
		@description = description
	end
end

class MonsterRoom < Room
	def initialize
		@monster = monster
	end
end

class TreasureRoom < Room
	def initialize
		@chest = chest
	end
end

class BossRoom < MonsterRoom
	def initialize
		@boss = boss
	end
end

class TrapRoom < Room
	def initialize
		@trap = trap
	end
end