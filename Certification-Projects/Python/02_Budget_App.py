# Build a Budget App
# In this lab, you will build a simple budget app that tracks spending in different categories and can show the relative spending percentage on a graph.

# Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

# User Stories:

# You should have a Category class that accepts a name as the argument.

# The Category class should have an instance attribute ledger that is a list, and contains the list of transactions.

# The Category class should have the following methods:

# A deposit method that accepts an amount and an optional description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of {'amount': amount, 'description': description}.
# A withdraw method that accepts an amount and an optional description (default to an empty string). The method should store in ledger the amount passed in as a negative number, and should return True if the withdrawal succeeded and False otherwise.
# A get_balance method that returns the current category balance based on ledger.
# A transfer method that accepts an amount and another Category instance, withdraws the amount with description Transfer to [Destination], deposits it into the other category with description Transfer from [Source], where [Destination] and [Source] should be replaced by the name of destination and source categories. The method should return True when the transfer is successful, and False otherwise.
# A check_funds method that accepts an amount and returns False if it exceeds the balance or True otherwise. This method must be used by both the withdraw and transfer methods.
# When a Category object is printed, it should:

# Display a title line of 30 characters with the category name centered between * characters.
# List each ledger entry with up to 23 characters of its description left-aligned and the amount right-aligned (two decimal places, max 7 characters).
# Show a final line Total: [balance], where [balance] should be replaced by the category total.
# Here is an example usage:

# food = Category('Food')
# food.deposit(1000, 'initial deposit')
# food.withdraw(10.15, 'groceries')
# food.withdraw(15.89, 'restaurant and more food for dessert')
# clothing = Category('Clothing')
# food.transfer(50, clothing)
# print(food)
# And here is an example of the output:

# *************Food*************
# initial deposit        1000.00
# groceries               -10.15
# restaurant and more foo -15.89
# Transfer to Clothing    -50.00
# Total: 923.96
# You should have a function outside the Category class named create_spend_chart(categories) that returns a bar-chart string. To build the chart:

# Start with the title Percentage spent by category.
# Calculate percentages from withdrawals only and not from deposits. The percentage should be the percentage of the amount spent for each category to the total spent for all categories (rounded down to the nearest 10).
# Label the y-axis from 100 down to 0 in steps of 10.
# Use o characters for the bars.
# Include a horizontal line two spaces past the last bar.
# Write category names vertically below the bar.
# This function will be tested with up to four categories.

# Make sure to match the spacing of the example output exactly:

# Percentage spent by category
# 100|          
#  90|          
#  80|          
#  70|          
#  60| o        
#  50| o        
#  40| o        
#  30| o        
#  20| o  o     
#  10| o  o  o  
#   0| o  o  o  
#     ----------
#      F  C  A  
#      o  l  u  
#      o  o  t  
#      d  t  o  
#         h     
#         i     
#         n     
#         g     
# NOTE: open the browser console with F12 to see a more verbose output of the tests.


class Category:
    def __init__(self,name):
        self.name = name
        self.ledger = []
        self.available_amount = 0

    def deposit(self, amount, description=""):
        self.available_amount += amount
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self,amount,description=""):
        if self.check_funds(amount):
            self.available_amount -= amount
            self.ledger.append({'amount': -amount,'description':description})
            return True
        else:
            return False

    def get_balance(self):
        return self.available_amount

    def transfer(self, amount, another_category):
        if self.check_funds(amount):
            self.withdraw(amount,f'Transfer to {another_category.name}')

            another_category.deposit(amount,f'Transfer from {self.name}')
            return True
        else:
            return False

    def check_funds(self,amount):
        if self.available_amount < amount:
            return False
        return True

    def __str__(self):
        title = f'{self.name:*^30}\n'
        items = ''
        for item in self.ledger:
            desc = item['description'][:23].ljust(23)
            amount = f'{item["amount"]:.2f}'.rjust(7)
            items += f'{desc}{amount}\n'

        total = f'Total: {self.available_amount:.2f}'
        return title + items + total

# spend chart
def create_spend_chart(categories):
    # total withdrawls
    withdrawls = []
    for cat in categories:
        spent = sum(-item['amount'] for item in cat.ledger if item['amount']<0)
        withdrawls.append(spent)
    total_spent = sum(withdrawls)

    # percentage rounded down to nearest 10. eg- 22.5-> 20
    percentages = [int((spent/total_spent)*100) // 10 * 10 for spent in withdrawls]

    # chart header/title
    chart = "Percentage spent by category\n"
    # Y-axis from 100 - 0
    for i in range(100,-1,-10):
        chart += str(i).rjust(3)+ "| "
        for p in percentages:
            chart += "o  " if p>=i else "   "
        chart += "\n"

    # seperator line
    chart += "    " + "-"*(len(categories)*3+1) + "\n"

    # categories names vertically
    max_len = max(len(cat.name) for cat in categories)
    for i in range(max_len):
        chart += "     "
        for cat in categories:
            chart += (cat.name[i] + "  ") if i<len(cat.name) else "   "
        chart += "\n"

    return chart.rstrip('\n')

# tests
restaurant = Category("Restaurant")
clothing = Category("Clothing")
parlour = Category("Parlour")
e_comm = Category("E-Commerce")

restaurant.deposit(5000,"Initail Deposit")
clothing.deposit(3000,"Initail Deposit")
parlour.deposit(4000,"Initail Deposit")
e_comm.deposit(2000,"Initail Deposit")

parlour.withdraw(1540, "for makeup kit")
clothing.withdraw(1694, "for material")
e_comm.withdraw(1877, "for domain hosting")
restaurant.withdraw(1348, "for food items")
restaurant.withdraw(2478, "for food items")
restaurant.withdraw(574, "for food items")
restaurant.withdraw(129, "for food items")

restaurant.transfer(427,clothing)
clothing.transfer(574,e_comm)
e_comm.transfer(499,restaurant)
parlour.transfer(377,clothing)
clothing.transfer(377,parlour)
parlour.transfer(298,clothing)

print(clothing)
print(e_comm)
print(restaurant)
print(parlour)

print(create_spend_chart([clothing,e_comm,restaurant,parlour]))

# output
# ***********Clothing***********
# Initail Deposit        3000.00
# for material           -1694.00
# Transfer from Restauran 427.00
# Transfer to E-Commerce -574.00
# Transfer from Parlour   377.00
# Transfer to Parlour    -377.00
# Transfer from Parlour   298.00
# Total: 1457.00
# **********E-Commerce**********
# Initail Deposit        2000.00
# for domain hosting     -1877.00
# Transfer from Clothing  574.00
# Transfer to Restaurant -499.00
# Total: 198.00
# **********Restaurant**********
# Initail Deposit        5000.00
# for food items         -1348.00
# for food items         -2478.00
# for food items         -574.00
# for food items         -129.00
# Transfer to Clothing   -427.00
# Transfer from E-Commerc 499.00
# Total: 543.00
# ***********Parlour************
# Initail Deposit        4000.00
# for makeup kit         -1540.00
# Transfer to Clothing   -377.00
# Transfer from Clothing  377.00
# Transfer to Clothing   -298.00
# Total: 2162.00
# Percentage spent by category
# 100|             
#  90|             
#  80|             
#  70|             
#  60|             
#  50|             
#  40|       o     
#  30|       o     
#  20| o     o     
#  10| o  o  o  o  
#   0| o  o  o  o  
#     -------------
#      C  E  R  P  
#      l  -  e  a  
#      o  C  s  r  
#      t  o  t  l  
#      h  m  a  o  
#      i  m  u  u  
#      n  e  r  r  
#      g  r  a     
#         c  n     
#         e  t     
