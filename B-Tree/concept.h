#include <string>
#include <vector>
#include <array>
#include <cstring>
#include <cctype>
#include <iostream>
using namespace std;

class method_container
{
public:
	string name;
	string desc;
};

class concept
{
public:
	concept();
	virtual ~concept();			// Virtual Destructor.
	virtual void display();			// Displays function.
	virtual void select() = 0;
	virtual void getInformation();	  	// Prompts the user to read information.
	virtual void changeRating() = 0;  	// Changes rating of concept.
	bool operator==(string);		// Compares keyword for equality.
	bool operator!=(string);		// Compares keyword for inequality.
	bool operator<=(const concept &); 	// Compares keyword for alphabetical order.
	bool operator<(const concept &);  	// Compare keyword for alphabetical order.
	bool operator>=(const concept &); 	// Compares keyword for alphabetical order.
	bool operator>(const concept &);  	// Compares keyword for alphabetical order.

protected:
	string keyword;		// Name of Concept.
	string url;		// Website for concept.
	float rating;		// Concept Difficulty.
	string concept_type; 	// Type of concept added.
};

class stl_syntax : public concept
{
public:
	stl_syntax();		// Constructor.
	~stl_syntax();		// Destructor.
	void display();		// Displays function.
	void select();	
	void getInformation();	// Prompts the user to read information.
	void changeRating();	// Changes rating of concept.
	void addMethod();	// Adds method to list.

private:
	vector<method_container> methods; // List of methods.
};

class modern_concept : public concept
{
public:
	modern_concept();	// Constructor.
	~modern_concept();	// Destructor.
	void display();		// Displays function.
	void select();	
	void getInformation();	// Prompts the user to read information.
	void changeRating();	// Changes rating of concept.
	void addBenefit();	// Add benefit to concept.
	void addDrawback();	// Add drawback to concept.

private:
	string desc;	 // Concept Description.
	string benefit;	 // Benefit of concept.
	string drawback; // Drawback of concept.
};

class python_library : public concept
{
public:
	python_library();	// Constructor.
	~python_library();	// Destructor.
	void display();		// Displays function.
	void select();
	void getInformation(); // Prompts the user to read information.
	void changeRating();   // Changes rating of concept.
	void addMethod();	// Adds method to list.

private:
	string desc;						 // Concept Description.
	int element = 0;					 // Tracks how full the array is.
	array<method_container, 50> methods; // List of methods.
};
