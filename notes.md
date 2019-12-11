

# Each cart has 20 seats 


schema
# db:
#   train{
#        date of departure
#        number of carts
#        num of seats available/cart
#        
#    }

train has many carts 
carts can belong to one train
cart has many seats 
seat can belong to one cart

each train has a number/id
each cart has a number/id
each seat has a number/id

The database is seeded with the following information
    the only available booking is from Assiut to Cairo on the date 1/1/2020
    any ticket booked on that day and from this departure to that destination will be accepted .
    other than that the user would not be able to book a ticket
