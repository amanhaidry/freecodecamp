import random
from abc import ABC, abstractmethod

class Player(ABC):
    def __init__(self):
        # Initial attributes
        self.moves = []              # Empty until defined in concrete class
        self.position = (0, 0)       # Starting position
        self.path = [self.position]  # Path begins with initial position

    def make_move(self):
        # random move from available moves
        move = random.choice(self.moves)
        # Update position
        new_x = self.position[0] + move[0]
        new_y = self.position[1] + move[1]
        self.position = (new_x, new_y)
        # Record path
        self.path.append(self.position)
        return self.position

    @abstractmethod
    def level_up(self):
        """Abstract method to be implemented in subclasses"""
        pass


class Pawn(Player):
    def __init__(self):
        super().__init__()
        # Basic moves: up, down, left, right
        self.moves = [
            (0, 1),   # Up
            (0, -1),  # Down
            (-1, 0),  # Left
            (1, 0)    # Right
        ]

    def level_up(self):
        # diagonal moves
        diagonal_moves = [
            (1, 1),    # Up-Right
            (-1, 1),   # Up-Left
            (1, -1),   # Down-Right
            (-1, -1)   # Down-Left
        ]
        self.moves.extend(diagonal_moves)

if __name__ == '__main__':
    print("--- Testing Pawn ---")
    pawn = Pawn()
    print(f"Initial position: {pawn.position}")
    print(f"Initial available moves: {pawn.moves}")
    
    print("\nMaking 3 moves:")
    for i in range(1, 4):
        print(f"Move {i}: {pawn.make_move()}")
        
    print(f"Path history: {pawn.path}")
    
    print("\nLeveling up Pawn...")
    pawn.level_up()
    print(f"Available moves after level up: {pawn.moves}")
    
    print(f"\nMove after level up: {pawn.make_move()}")
    print(f"Final path: {pawn.path}")