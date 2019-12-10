

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
