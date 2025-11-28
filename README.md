# Todo App - React Native

This is a React Native Todo List application with a clean, modern UI and comprehensive functionality for managing tasks.

## Core Features
 - #### Task Management
    - **Add Tasks**: Create new todos with title and optional description (max 200 chars)
    - **Edit Tasks**: Modify existing tasks by clicking the edit icon
    - **Delete Tasks**: Remove tasks with confirmation modal for safety
    - **Toggle Completion**: Mark tasks as done/undone with checkbox
 - #### UI/UX Features
    - **Flash Animation**: Tasks briefly highlight when edited to provide visual feedback
    - **Empty State**: Friendly message when no tasks exist
    - **Completed Task Styling**: Strikethrough text and reduced opacity for completed items
 - #### Technical Features
    - **Form Validation**: Won't save tasks with empty/whitespace-only titles
    - **Character Limit**: Description field shows live character count (0/200)
    - **UUID Generation**: Each task gets a unique ID
---
## How to Use
 - **Adding a Task**: Click the + button in the header to show the add/edit form then Enter a task title (required) and Optionally add a description then save.
 - **Editing a Task**: Click the pencil icon on any task opens the add/edit form prepopulated with the ask data to modify and save
 - **Completing a Task**: toggle the completion status by prssing the circule icon next to the task.
 - **Deleting a Task** : Click the trash icon open a confirmation onConfirm will delete the task

### Special Notes
 - The app automatically opens the add form when you have zero tasks
 - New tasks appear at the top of the list
 - Form automatically closes after saving
 - All text is trimmed (whitespace removed) before saving
 - Task titles are auto-capitalized in the display

##  Setup Instructions

```bash

# 1. Clone the repository
git clone 

# 2. Navigate to the project directory
cd todo_app

# 3. Install dependencies
npm install

# 4.Start the development server
npm start

```

- Scan the QR code with **Expo Go** app (Android) or Camera app (iOS)
- The app will load on your mobile device

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```
---

## Dependencies & Third-Party Libraries

### Production Dependencies

 - **@expo/vector-icons**  Provides Ionicons for UI elements (buttons, checkboxes, icons) 
 - **react-native-safe-area-context**  Handles device notches and safe areas to prevent content overlap 
 - **uuid**  Generates unique IDs for todo items 
 - **react-native-get-random-values** Polyfill required for UUID to work in React Native environment 

### Development Dependencies

- **@testing-library/react-native**  Testing utilities for component unit and integration tests 
- **react-test-renderer**  React renderer used by testing library to render components in tests 
- **jest**  JavaScript testing framework for running all tests 

## Architecture Overview

### Component Organization

The project follows a **feature-based component structure** with clear separation of concerns:

#### **`/components/Todo/`** - Domain Components
Feature-specific components that implement todo list functionality:
- **AddTodo**: Handles both creating new tasks and editing existing ones
- **Header**: Application title bar with action buttons
- **TodoItem**: Individual task display with completion, edit, and delete actions
- **TodoList**: Optimized FlatList container for rendering multiple todos

#### **`/components/ui/`** - Generic UI Components
Reusable, application-agnostic components that can be used across features:
- **Button**: Multi-variant button (solid, outline, text) with icon support
- **Input**: Text field with validation, character limits, and multiline support
- **Modal**: Confirmation dialog for destructive actions

#### **`/hooks/`** - Custom Hooks
Business logic encapsulated in reusable hooks:
- **useList**: Manages todo CRUD operations (Create, Read, Update, Delete)

#### **`/screens/`** - Screen Components
Top-level components that compose features into full screens:
- **TodoListScreen**: Orchestrates header, form, list, and modal interactions

### File Naming Conventions
```
Component Folder/
├── index.tsx           # Main component logic (default export)
├── style.ts            # StyleSheet definitions
├── types.ts            # TypeScript interfaces (if needed)
└── ComponentName.test.tsx  # Test file matching component name
```

### Project Structure
```
todo_app/
├── app.tsx                              
├── src/
│   ├── components/                      
│   │   ├── Todo/                        
│   │   │   ├── AddTodo/                 
│   │   │   │   ├── index.tsx            
│   │   │   │   ├── style.ts             
│   │   │   │   └── AddTodo.test.tsx     
│   │   │   │
│   │   │   ├── Header/                  
│   │   │   │   ├── index.tsx            
│   │   │   │   ├── style.ts             
│   │   │   │   └── Header.test.tsx      
│   │   │   │
│   │   │   ├── TodoItem/                
│   │   │   │   ├── index.tsx            
│   │   │   │   ├── style.ts             
│   │   │   │   └── TodoItem.test.tsx    
│   │   │   │
│   │   │   ├── TodoList/                
│   │   │   │   ├── index.tsx            
│   │   │   │   ├── style.ts             
│   │   │   │   └── TodoList.test.tsx    
│   │   │   │
│   │   │   └── types.ts                 
│   │   │
│   │   └── ui/                          
│   │       ├── Button/                  
│   │       │   ├── index.tsx            
│   │       │   ├── style.ts             
│   │       │   ├── type.ts              
│   │       │   └── Button.test.tsx      
│   │       │
│   │       ├── Input/                   
│   │       │   ├── index.tsx            
│   │       │   ├── style.ts             
│   │       │   └── Input.test.tsx       
│   │       │
│   │       └── Modal/                   
│   │           ├── index.tsx            
│   │           ├── style.ts             
│   │           └── Modal.test.tsx       
│   │
│   ├── hooks/                           
│   │   ├── useList.tsx                  
│   │   └── useList.test.tsx             
│   │
│   └── screens/                         
│       └── TodoListScreen/              
│           ├── index.tsx                
│           ├── styles.ts                
│           └── TodoListScreen.test.tsx  
│
└── package.json                         
```
