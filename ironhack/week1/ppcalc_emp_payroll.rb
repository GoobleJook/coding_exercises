class Employee
	attr_reader :name, :email
	def initialize(name, email)
		@name = name
		@email = email
	end
end

class HourlyEmployee < Employee
	def initialize(name, email, hourly_rate, hours_worked)
		@name = name
		@email = email
		@hourly_rate = hourly_rate
		@hours_worked = hours_worked
	end

	def calculate_salary
		@hours_worked * @hourly_rate
	end
end

class MultiPaymentEmployee < Employee
	def initialize(name, email, base_salary, hourly_rate, hours_worked)
		@name = name
		@email = email
		@base_salary = base_salary
		@hourly_rate = hourly_rate
		@hours_worked = hours_worked
	end

	def calculate_salary
		@base_salary + (@hourly_rate * @hours_worked)
	end
end

class Payroll
	def initialize(employees)
		@employees = employees
	end

	def pay_employees
		counter = 0
		@employees.each { | emps |
			puts "#{emps.name} makes #{(emps.calculate_salary * 0.82).to_i}"
			counter += emps.calculate_salary
		}
		puts "Total amount paid: #{(counter * 0.82).to_i}"
	end

	def notify_employees(employee)
		@employee = employee
		puts "#{employee.name}, you made #{(employee.calculate_salary * 0.82).to_i} this pay period."
	end
end
	

Josh = HourlyEmployee.new("Josh","Josh@ironhack.com",8.50,40)
Nizer = HourlyEmployee.new("Nizar","Nizar@ironhack.com",20,60)
Ted = MultiPaymentEmployee.new("Ted","Ted@gmail.com",30000,4,80)
John = MultiPaymentEmployee.new("John","John@gmail.com",40000,40,50)
Robert = MultiPaymentEmployee.new("Robert","Robert@gmail.com",50000,130,50)

employees = [Josh,Nizer,Ted,John,Robert]

payroll = Payroll.new(employees)
payroll.pay_employees
payroll.notify_employees(Josh)