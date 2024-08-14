# Vaughn Poulo
# Octopawn
# CS541 Artificial Intelligence

import json
from copy import deepcopy

column1 = [0, 4, 8, 12]
column2_3 = [1, 2, 5, 6, 9, 10, 13, 14]
column4 = [3, 7, 11, 15]

class Octopawn_Puzzle ():
    def __init__(self):
        self.board = ["p", "p", "p", "p",".", ".", ".", ".",".", ".", ".", ".","P", "P", "P", "P"]
        self.player_on_move = 'W'
        self.player_piece = 'P'
        
        if(self.player_on_move == 'W'):
            self.player_on_move_num = 1
        else:
            self.player_on_move_num = -1
            
        self.solution_dictionary = {}
    
    
    # Returns true if game is finished.
    def is_game_finished(self, aConfig, numPlayer):
        if numPlayer == 1:
            if 'P' in aConfig[:4]:
                return True
            return False
        
        if numPlayer == -1:
            if 'p' in aConfig[12:]:
                return True
            return False    
    
    # Returns array of all possible moves for player on move.
    def possible_moves(self, aConfig, numPlayer):
        if numPlayer == 1:
            return self.white_moves(aConfig)
        else:
            return self.black_moves(aConfig)
    
    
    # Determine all pissible moves by white player
    def white_moves(self, aConfig):
        moves = []
        
        for index, value in enumerate(aConfig):
            # Check moves for white player   
            if value == 'P':
                # move 1 square forward
                if aConfig[index-4] == ".":
                    config = list(aConfig)
                    config[index-4] = 'P'
                    config[index] = '.'
                    moves.append(config)
                
                # take black pawn to upper right
                if index in column1 or index in column2_3:
                    if aConfig[index-3] == "p":
                        config = list(aConfig)
                        config[index-3] = 'P'
                        config[index] = '.'
                        moves.append(config)
                
                # take black pawn to upper left
                if index in column2_3 or index in column4:
                    if aConfig[index-5] == "p":
                        config = list(aConfig)
                        config[index-5] = 'P'
                        config[index] = '.'
                        moves.append(config)    
            
        return moves
                
    # Determine all pissible moves by black player
    def black_moves(self, aConfig):
        moves = []
        
        for index, value in enumerate(aConfig):
            # Check moves for black player   
            if value == 'p':
                # move 1 square forward
                if aConfig[index+4] == ".":
                    config = list(aConfig)
                    config[index+4] = 'p'
                    config[index] = '.'
                    moves.append(config)
                
                # take white pawn to lower left
                if index in column2_3 or index in column4:
                    if aConfig[index+3] == "P":
                        config = list(aConfig)
                        config[index+3] = 'p'
                        config[index] = '.'
                        moves.append(config)
                
                # take white pawn to lower right
                if index in column1 or index in column2_3:
                    if aConfig[index+5] == "P":
                        config = list(aConfig)
                        config[index+5] = 'p'
                        config[index] = '.'
                        moves.append(config)    
            
        return moves
    
    
    # Determines best possible move for each board configuration.
    def negamax(self, config, player):
        # Get player char representation to append to list
        if player == 1:
            player_char = 'W'
        else:
            player_char = 'B'
        
        # Create correct list and turn into tuple
        s = list(config)
        s.append(player_char)
        #state = tuple(s)
        state = ''.join(s)
        
        # Check if state exists in dictionary
        if state in self.solution_dictionary:
            return self.solution_dictionary[state]
            
        
        # Check if state is a win for the opponent, if so, add to dictionary.
        if self.is_game_finished(state, player):
            self.solution_dictionary[state] = -1
            return -1
            
        # Get legal moves for side on move.
        moves = self.possible_moves(config, player)
        
        # If no moves possible for player on move, win for opponent.
        if len(moves) == 0:
            self.solution_dictionary[state] = -1
            return -1
        
        score = None
        for move in moves:
            opp_score = - self.negamax(move, -player)
            
            if score is None or opp_score > score:
                score = opp_score
                
        self.solution_dictionary[state] = score
        return score
        
        

def main():
    # Create instance of puzzle
    aPuzzle = Octopawn_Puzzle()
    
    # Run negamax
    aPuzzle.negamax(aPuzzle.board, 1)
    
    # Write dictionanry to JSON file.
    with open("4pawn.json", 'w') as json_file:
        json.dump(aPuzzle.solution_dictionary, json_file)
    



if __name__ == "__main__":
    main()