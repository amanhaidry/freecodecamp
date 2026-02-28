class Category:
    def __init__(self,name):
        self.name = name
        self.ladger = []
        self.available_amount = 0

        def deposit(self, amount, description=""):
            self.available_amount += amount
            ledger.append({'amount': amount, 'description': description})

        def withdraw(self,amount,description=""):
            if self.check_funds(amount):
                self.available_amount -= amount
                ledger.append({'amount': -amount,'description':description})
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

def create_spend_chart(categories):
    pass