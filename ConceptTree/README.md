## Concept Repository (2-3 Tree Structure)
### Course: Programming Methodologies and Software Implementation

<b>Learning Objectives</b>: Programming a 2-3 Tree Data Structure, Operator Overloading, Inheritance, Virtual Functions, Polymorphism, using the Standard Template Library.


#### Run Instructions

1. compile the code by running: <code>g++ -std=c++17 *.cpp</code>

2. execute the code in terminal by running: <code>./a.out</code>


#### Description
This program allows users to store different concepts in a repository. The user can display the concepts, search for a concept, and select a concept (visit the URL for that concept). The user can store the following type of concepts: STL_Syntax, Modern Concepts, and Python Library concepts.  These are all dervied classes from a Concept parent class which contains virtual functions.  The base class has overloaded several operators and contains the virtual functions. The derived classes implement the virtual functions and each have their own unique function.  Polymorphism is used to run the common functions among the conepts. Runtime Type Identification (RTTI) is used to run the unique functions for each derived class. 

All of these concepts are stored in a 2-3 Tree that I programmed.  The 2-3 Tree has insert, delete, display, and find operators.  Programming the 2-3 Tree myself was the more difficult part of this program.  Main.cpp acts as a client application that interracts with the program I created.  
