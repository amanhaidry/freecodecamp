class GameCharacter:
    # initialization
    def __init__(self, name):
        if not isinstance(name,str):
            raise TypeError("name should be string.")
        self._name = name
        self._health = 100
        self._mana = 50
        self._level = 1

    # name property
    @property
    def name(self):
        return self._name

    # health property and setter
    @property
    def health(self):
        return self._health

    @health.setter
    def health(self,new_health):
        if new_health<0:
            self._health = 0
        elif new_health>100:
            self._health = 100
        else:
            self._health = new_health

    # mana property and setter
    @property
    def mana(self):
        return self._mana

    @mana.setter
    def mana(self,new_mana):
        if new_mana<0:
            self._mana = 0
        elif new_mana>50:
            self._mana = 50
        else:
            self._mana = new_mana

    # level property and setter
    @property
    def level(self):
        return self._level

    def level_up(self):
        self._level += 1
        self.health = 100
        self.mana = 50
        print(f"{self.name} leveled up to {self.level}!")

    # str for print
    def __str__(self):
        return f"Name: {self.name}\nLevel: {self.level}\nHealth: {self.health}\nMana: {self.mana}"

# tests
hero = GameCharacter("Krishh")
print(hero)
hero.level_up()
hero.health -= 16
hero.mana -= 4
print(hero)