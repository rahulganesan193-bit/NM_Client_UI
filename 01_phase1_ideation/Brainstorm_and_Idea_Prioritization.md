# Ideation Phase
## Brainstorm & Idea Prioritization Template

| Field | Details |
|---|---|
| Date | 31 January 2025 |
| Team ID | [Enter Team ID] |
| Project Name | Implement Client Script and UI Policy (Incident) |
| Maximum Marks | 4 Marks |

Brainstorming provides a free and open environment that encourages everyone within a team to participate in the creative thinking process that leads to problem solving. Prioritizing volume over value, out-of-the-box ideas are welcome and built upon, and all participants are encouraged to collaborate, helping each other develop a rich amount of creative solutions.

Use this template in your own brainstorming sessions so your team can unleash their imagination and start shaping concepts even if you're not sitting in the same room.

Reference: <https://www.mural.co/templates/brainstorm-and-idea-prioritization>

---

## Step-1: Team Gathering, Collaboration and Select the Problem Statement

| Item | Details |
|---|---|
| Problem statement (How might we…?) | How might we help users enter complete and consistent data on the ServiceNow Incident form, using Client Scripts and UI Policies, so that records need no rework later? |
| Participants | Rahul (Team Lead), Dinesh kumar, Abisheknathan, Dakshanraj |
| Goal of the session | Generate ideas for form-level validation and field rules on the Incident table, then choose the most important and feasible ones. |
| Rules followed | Stay on topic · Defer judgement · Go for volume · Encourage wild ideas · Listen to others · Be visual |

---

## Step-2: Brainstorm, Idea Listing and Grouping

Each team member wrote down three ideas.

| # | Rahul | Dinesh kumar | Abisheknathan | Dakshanraj |
|---|---|---|---|---|
| 1 | Minimum length check on short description | On hold reason mandatory when State is On Hold | Clear subcategory when category changes | Auto-assign group by category (Business Rule) |
| 2 | Warning message when Priority is Critical | Resolution code and notes mandatory when Resolved | Show hint text when form loads | Server-side Data Policy for strict rules |
| 3 | Welcome guidance message on new incident | Assignment group mandatory for P1 | Make fields read-only after incident is Closed | Email notification for P1 incidents |

### Grouping into themes

| Theme | Ideas |
|---|---|
| **A. Field validation (Client Scripts)** | Min length check on short description · Clear subcategory on category change · Warning message for Critical priority |
| **B. Conditional field rules (UI Policies)** | Hold reason mandatory on On Hold · Resolution code/notes mandatory on Resolved · Assignment group mandatory for P1 · Read-only fields after Closed |
| **C. User guidance** | Welcome message on new incident · Hint text when form loads |
| **D. Server-side / automation (future scope)** | Auto-assign group by category · Server-side Data Policy · Email notification for P1 |

---

## Step-3: Idea Prioritization

Ideas were plotted on **Importance (positive impact)** vs **Feasibility (cost, time, effort, complexity)**, each on a 1–5 scale. The top-right region was marked **"Implement now"**.

### Idea key

| # | Idea | Status |
|---|---|---|
| 1 | Short description validation | ✅ Selected |
| 2 | Clear subcategory on category change | ✅ Selected |
| 3 | Critical priority warning | ✅ Selected |
| 4 | Welcome / hint message | ✅ Selected |
| 5 | Hold reason mandatory (On Hold) | ✅ Selected |
| 6 | Resolution code/notes mandatory | ✅ Selected |
| 7 | Assignment group mandatory for P1 | ✅ Selected |
| 8 | Read-only fields after Closed | ✅ Selected |
| 9 | Auto-assign group by category | ⏳ Future scope |
| 10 | Server-side Data Policy | ⏳ Future scope |
| 11 | Email notification for P1 | ⏳ Future scope |

*Green = selected for this project · Grey = future scope*

### Approximate chart positions (read from the plot)

| # | Feasibility | Importance |
|---|---|---|
| 1 | ~4.6 | ~3.9 |
| 2 | ~4.1 | ~3.0 |
| 3 | ~4.9 | ~2.9 |
| 4 | ~4.5 | ~2.0 |
| 5 | ~4.2 | ~4.1 |
| 6 | ~4.7 | ~4.8 |
| 7 | ~4.0 | ~4.7 |
| 8 | ~3.5 | ~3.1 |
| 9 | ~1.9 | ~4.8 |
| 10 | ~2.2 | ~4.0 |
| 11 | ~2.9 | ~3.2 |

> Ideas 1–8 are high in feasibility and importance and were selected for implementation. Ideas 9–11 need server-side work and are kept as future scope.
