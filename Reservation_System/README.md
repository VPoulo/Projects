## Reservation System

### Course: Programming Methodologies and Software Implementation

<b>Learning Objectives</b>: Inheritance, Polymorphism, Virtual Functions, Operator Overloading, creating a template, using the Standard Template Library.

#### Run Instructions

1. compile the code by running: <code>g++ -std=c++17 *.cpp</code>

2. execute the code in terminal by running: <code>./a.out</code>


#### Description

A simple reservation system that utilizes terminal and takes three types of reservations: skiing, dinner, and museum reservations.  For this program, I wrote a template for a doubly linked list. I then used this template to implement the museum reservations. I also used two standard template library data types, one for each of the other reservations.  This program uses polymorphism, dynamic binding, and inheritance to implement the reservation system. There is a reservation base class, which has virtual functions. The derived classes implement a reservation type, each with their own data type.  I also overloaded many operators to make the implementation easier.  This program was completed in 2 weeks as a class assignment.
