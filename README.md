# Flux tut

Implementation of the flux tutorial on the [Flux Website](https://facebook.github.io/flux/docs/todo-list.html).
```
                      ┌────────────────┐                                               
                      │                │                                               
         ┌────────────│  TodoActions   │◀─────────────┬───────────────────────┐        
         │            │                │              │                       │        
         │            └────────────────┘              │                       │        
         │                                   ┌────────────────┐               │        
         │                                   │    Header/     │               │        
         │                                   │ TodoTextInput  │               │        
         │                                   │     (View)     │               │        
         ▼                                   └────────────────┘               │        
┌────────────────┐    ┌────────────────┐     ┌────────────────┐      ┌────────────────┐
│                │    │                │     │  MainSection   │      │    TodoItem    │
│ActionDispatcher│────▶   TodoStore    ├────▶│(ControllerView)│─────▶│     (View)     │
│                │    │                │     │                │      │                │
└────────────────┘    └────────────────┘     └────────────────┘      └────────────────┘
```