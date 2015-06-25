# Flux todo

Implementation of the flux tutorial on the [Flux Website](https://facebook.github.io/flux/docs/todo-list.html).
```
┌────────────────┐                                        
│                │                                        
│  TodoActions   │◀──────────┬───────────────────┐        
│                │           │                   │        
└────────────────┘           │                   │        
         │                   │                   │        
         ▼                   │                   │        
┌────────────────┐           │                   │        
│                │           │                   │        
│ActionDispatcher│           │                   │        
│                │           │                   │        
└────────┬───────┘           │                   │        
         ▼                   │                   │        
┌────────────────┐  ┌────────────────┐           │        
│                │  │    Header/     │           │        
│   TodoStore    │  │ TodoTextInput  │           │        
│                │  │     (View)     │           │        
└────────────────┘  └────────────────┘           │        
         │                                       │        
         ▼                                       │        
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│    TodoApp     │  │  MainSection   │  │    TodoItem    │
│(ControllerView)├─▶│     (View)     │─▶│     (View)     │
│                │  │                │  │                │
└────────────────┘  └────────────────┘  └────────────────┘
```
