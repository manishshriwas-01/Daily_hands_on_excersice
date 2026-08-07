#  Angular Pipes, Custom Directives & Lifecycle Hooks

##  Project Overview

This hands-on project demonstrates the implementation of Angular Custom Pipes, Custom Attribute Directives, and Lifecycle Hooks using standalone components. The project focuses on building reusable UI features while understanding Angular's component lifecycle and best practices.

## ✨ Features Implemented

- 📝 Created a Task Card component to display task information.
- ⏱️ Implemented a Custom `timeAgo` Pipe to convert dates into human-readable relative time (e.g., 5 minutes ago, 2 hours ago).
- 🎨 Built a Highlight-on-Hover Directive using `HostListener` and `HostBinding` to add interactive hover effects.
- 🔄 Explored Angular Lifecycle Hooks**:
  - `constructor()`
  - `ngOnInit()`
  - `ngOnDestroy()`
-  Built reusable and maintainable Angular components using standalone architecture.

## 🔄 Application Flow

```text
Task Data
    │
    ▼
Task Card Component
    │
    ▼
timeAgo Pipe
(Transforms Date)
    │
    ▼
Display Relative Time
    │
    ▼
Highlight Directive
(Mouse Hover Effect)
    │
    ▼
Lifecycle Hooks
constructor()
      │
      ▼
   ngOnInit()
      │
      ▼
Component Running
      │
      ▼
 ngOnDestroy()
```

## 📚 Learning Outcomes

- Understood the difference between **Built-in** and **Custom Pipes**.
- Learned how to create reusable pipes using the `PipeTransform` interface.
- Implemented custom attribute directives using `HostListener` and `HostBinding`.
- Explored Angular component lifecycle and the purpose of `constructor`, `ngOnInit`, and `ngOnDestroy`.
- Improved understanding of reusable UI development and Angular best practices.