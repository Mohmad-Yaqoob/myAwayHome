#include <bits/stdc++.h>
using namespace std;

class Animal{
    public: 
    string name;
    Animal(string s): name(s){}

    virtual void speak(){
        cout<<name<<"makes a sound "<<endl;
    }
};

class Dog : public Animal{
    public: Dog(string s): Animal(s){}
    void speak() override{
        Animal::speak();
        cout<<name<<" barks"<<endl;
    }
};

class Cat : public Animal{
public: 
Cat(string s) : Animal(s){
}
void speak() override{
    Animal::speak();
        cout<<name<<" meow"<<endl;
    }

};

int main(){
    Dog dog("Buddy");
    Cat cat("Hello");

    Animal* ptr;
    ptr = &dog;
    ptr->speak();

    ptr = &cat;
    ptr->speak();

    // dog.speak();
    // cat.speak();
}