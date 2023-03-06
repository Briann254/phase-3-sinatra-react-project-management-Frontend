# phase-3-sinatra-react-project-management-Frontend
# Project Task Management App

This project management app lets you organize projects into boards and tasks.

[demo here](https://github.com/Briann254/phase-3-sinatra-react-project-management-Frontend.git)

## Front-end Project Task Management Interface

You can use this app in conjunction with my project management Backend [see the repo](https://github.com/Briann254/phase-3-sinatra-react-project.git)

## Technologies Used In This App

- JavaScript
- React
- Mui
- Custom API Server


## **BDD:**
**Feature:** **Project-Management-App**
As a user
I want to be able to manage my projects
So that I can keep track of my progress

Part1: User registration
Given I am on the registration page
When I fill in the registration form with valid details
And I click the submit button
Then I should see a success message
And I should be redirected to the login page

Part2: User login
Given I am on the login page
When I fill in the login form with valid details
And I click the login button
Then I should see a success message
And I should be redirected to the dashboard page

Part3: Create a project
Given I am on the dashboard page
When I click the create project button
And I fill in the project details form
And I click the create button
Then I should see a success message
And I should see the newly created project on the dashboard page

Part4: Add members to a project
Given I am on the project page
When I click the add members button
And I fill in the members form
And I click the add button
Then I should see a success message
And I should see the newly added members on the project page

Part5: Update project status
Given I am on the project page
When I click the update status button
And I fill in the status form
And I click the update button
Then I should see a success message
And I should see the updated status on the project page

Part6: View all projects
Given I am on the dashboard page
When I click the view all projects button
Then I should see a list of all the projects on the dashboard page

Part7: Delete a project
Given I am on the dashboard page
When I click the delete button for a project
And I confirm the deletion
Then I should see a success message
And I should not see the deleted project on the dashboard page

Part8: View project status updates
Given I am on the project page
When I click the view status updates button
Then I should see a list of all the status updates for the project

**Pseudo code:**

// Login page
const handleLogin = () => {
// Handle login logic
// Redirect to dashboard page on success
}

// Registration page
const handleRegistration = () => {
// Handle registration logic
// Redirect to login page on success
}

// Dashboard page
const handleCreateProject = () => {
// Handle create project logic
// Show success message on success
// Fetch all projects and display on dashboard
}

// Project page
const handleAddMembers = () => {
// Handle add members logic
// Show success message on success
// Fetch updated project details and display on page
}

const handleUpdateStatus = () => {
// Handle update status logic
// Show success message on success
// Fetch updated project details and display on page
}

const handleDeleteProject = () => {
// Handle delete project logic
// Show success message on success
// Fetch all projects and display on dashboard
}

const handleViewStatusUpdates = () => {
// Fetch all status updates for project
// Display status updates on page
}

// General
const handleLogout = () => {
// Handle logout logic
// Redirect to login page
}