# Warm-up lecture
# arr = [[1, "smart", "three"],[2, "tree", "Green"]]       
# puts arr[0..1][0..1]

# arr = [
# 	{:lat => 25, :lng => 80, :name => "Miami" },
# 	{:lat => 48, :lng => 2, :name => "Paris"}
# ]

# puts arr[1][:name]

# lemonade_revenue = {
# 	:monday =>  {:revenue => 20, :costs => 5, :feedback => ["good", "too sweet"]},
# 	:tuesday => { :revenue => 15, :costs => 20, :feedback => ["bad", "not sweet enough"]}
# }

# puts lemonade_revenue[:monday][:costs] - lemonade_revenue[:tuesday][:costs]

# puts lemonade_revenue[:monday][:feedback][0]

# puts lemonade_revenue.class
# puts lemonade_revenue.inspect
# puts lemonade_revenue[:monday][:feedback].class

# Exercise

# Write data structures such that these two lines don't access values that aren't there

# Can theygo that deep? There's only one way to find out.

hash = {
	:wat => ["thing 0", "thing 1", 
		:wut => [
		["array1"],
		[
			[0,1,2,3,4,5,6,7,8, :bbq => "yum"],
			"item3"]
		]
	],
	
		
}

puts hash[:wat][2][:wut][1][0][9][:bbq]


arr = [
	[0,1,2,3,4,:secret => {:unlock => [0, 1]}]
]

puts arr[0][5][:secret][:unlock][1]
