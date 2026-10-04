# 2. Architecture and Workflow

## System Architecture

The solution runs entirely on the ServiceNow platform. Rules execute in the **user's browser (client side)**, so feedback is instant and no server round trip is needed.

```
+------------------------------------------------------------+
|                    ServiceNow Instance (PDI)               |
|                                                            |
|   +------------------+        +------------------------+   |
|   |  Incident Table  |<------>|  Business Rules (OOTB) |   |
|   +--------+---------+        +------------------------+   |
|            |                                               |
|   +--------v---------------------------------------------+ |
|   |          Incident Form / List (Browser)              | |
|   |                                                      | |
|   |  UI Policy  ->  UI Policy Actions (Urgency)          | |
|   |  Client Script: onChange | onSubmit | onCellEdit     | |
|   +------------------------------------------------------+ |
+------------------------------------------------------------+
            ^
            |  User (Caller / Service Desk Agent)
```

## Components

| Component | Purpose |
|---|---|
| Incident table | Stores incident records |
| UI Policy | Declarative, no-code form rules based on conditions |
| UI Policy Action | Sets a field mandatory, visible or read-only |
| onChange script | Runs when a field value changes on the form |
| onSubmit script | Validates data when the form is saved |
| onCellEdit script | Runs when a cell is edited in a list |
| `g_form` API | Client-side API used to read and change form fields |

## Workflow

```mermaid
flowchart TD
    A[User opens Incident form] --> B[UI Policy evaluates condition]
    B -->|State is not Closed| C[Urgency becomes mandatory]
    B -->|State is Closed| D[Urgency rule reversed]
    C --> E[User changes Urgency]
    E --> F{onChange script}
    F -->|Urgency = High| G[Show message, make Assignment group mandatory]
    F -->|Other| H[Assignment group optional]
    G --> I[User clicks Submit/Save]
    H --> I
    I --> J{onSubmit validation}
    J -->|Invalid| K[Show error, stop save]
    J -->|Valid| L[Record saved]
    K --> E
```

## List View Flow (onCellEdit)

```mermaid
flowchart LR
    A[User double-clicks Urgency cell in list] --> B[onCellEdit runs]
    B -->|New value High| C[Confirmation prompt]
    C -->|OK| D[Value saved]
    C -->|Cancel| E[Edit discarded]
    B -->|Other value| D
```

## Execution Order

1. Form loads: onLoad scripts and UI Policies run.
2. Field changes: onChange scripts and UI Policy conditions re-evaluate.
3. Save clicked: onSubmit scripts run. A `false` return stops the save.
4. Server saves the record and normal Business Rules run.
