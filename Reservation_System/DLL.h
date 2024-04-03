template <typename TYPE>
class node
{
public:
	template <typename>
	friend class DLL;
	typedef node<TYPE> *node_ptr_dt;
	node<TYPE>(const TYPE &);		 // Constructor.
	node<TYPE> *get_next();			 // Get the next pointer.
	node<TYPE> *get_previous();		 // Get previous pointer.
	bool has_next();				 // Returns true if next pointer not null.
	bool has_previous();			 // Returns true if previous pointer not null.
	void set_next(node<TYPE> *);	 // Set next node.
	void set_previous(node<TYPE> *); // Set previous node.

private:
	TYPE data;
	node<TYPE> *next;
	node<TYPE> *previous;
};

template <typename TYPE>
class DLL
{
public:
	typedef node<TYPE> *node_ptr_dt;
	DLL();					   // Constructor.
	~DLL();					   // Destructor.
	bool insert(const TYPE &); // Inserts nodes alphabetically.
	bool remove(char *);	   // Remove node matching name.
	void remove_all();		   // Removes every nodes in list.
	bool display(char *);	   // Displays node matching name.
	void display_all();		   // Displays every node in list.

private:
	node<TYPE> *head;
	node<TYPE> *tail;
	bool insert(node<TYPE> *&, const TYPE &); // Recursive function.
	bool remove(node<TYPE> *&, char *);		  // Recursive function.
	void remove_all(node<TYPE> *&);			  // Recursive function.
	bool display(node<TYPE> *, char *);		  // Recursive function.
	void display_all(node<TYPE> *);			  // Recursive function.
};

#include "DLL.tpp"
