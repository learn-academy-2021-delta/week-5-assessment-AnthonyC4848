# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
#create a method that takes in an array as an argument.
#iterate through array.

only_contains_o = beverages_array.select do |value, string|
    new_value = []
    if value.include? letter_o
        p new_value << value
    end
end
only_contains_t = beverages_array.select do |value, string|
    new_value = []
    if value.include? letter_t
        p new_value << value
    end
end
# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100
def sum array
    p array.sum
end
sum nums_array1
sum nums_array2
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# class Bike 
#     attr_accessor :model, :wheels, :current_speed
#     def initialize model, wheels=2, current_speed=0
#         @model = model
#         @wheels = wheels
#         @current_speed = current_speed
#     end
#     def bike_info 
#         "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
#     end
# end
# bike = Bike.new 'Trek'
# p bike.bike_info

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize model, wheels=2, current_speed=0
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def pedal_faster faster
        @current_speed += faster
        p current_speed
    end
    def brake slow
        if current_speed - slow >= 0
        @current_speed -= slow
        else
            current_speed = 0
        p current_speed
        end
    end
    def bike_info 
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
end
bike = Bike.new 'Trek'
p bike.bike_info
p bike.pedal_faster 10
p bike.pedal_faster 10
p bike.brake 25
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0
#