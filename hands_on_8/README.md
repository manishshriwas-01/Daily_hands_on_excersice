User fills form
        │
        ▼
getRawValue()
        │
        ▼
employee object created
        │
        ├──────────────► addEmployee(employee)
        │                    │
        │                    ▼
        │             Save in Service (Signal)
        │                    │
        │                    ▼
        │            Employee Card updates
        │
        ▼
emit(employee.name)
        │
        ▼
Parent receives event
        │
        ▼
Shows "Manish added successfully"




# Employee Management System

## Overview

This is a simple Angular application that demonstrates component communication using the latest Angular features.

## Features

* Add a new employee
* Display employee list
* Reactive Form validation
* Parent to Child communication using `input()`
* Child to Parent communication using `output()`
* Shared data using Service and Signals
* Dependency Injection using `inject()`

## Technologies Used

* Angular
* TypeScript
* Reactive Forms
* Signals
* Dependency Injection

## Project Structure

* **Parent Component** – Connects all components and handles events.
* **Employee Form** – Adds new employees.
* **Employee Card** – Displays the employee list.
* **Employee Service** – Stores and manages employee data.

## How It Works

1. Enter employee name and department.
2. Click **Add Employee**.
3. The form validates the input.
4. Employee data is stored in the service.
5. The employee list updates automatically.
6. A success message is shown in the parent component.

## Learning Objectives

* Understand Reactive Forms
* Learn `input()` and `output()`
* Learn Angular Signals
* Understand Dependency Injection
* Share data using Services
