# Opus Review Prompt — Validate AI Execution Plan

You are reviewing an AI-first implementation strategy for this repo.

Repo path:
The repository is located at: `/Users/tomleger/repo/principaljonessimulator` (Project Name: District Simulator)

Please read these files first:
1. `PLAN.md`
2. `SONNET_TASK_QUEUE.md`

## Your job
Critique whether this plan is robust for model-driven implementation (especially Sonnet-style iterative coding).

Focus on:
1. Task sizing and ordering
2. Hidden dependency risks between tasks
3. Places where context drift is likely
4. Missing acceptance criteria
5. Any tasks that are still too large or vague
6. Whether auth sequencing is safe for App Router
7. Whether data-layer extraction order minimizes regressions

## Constraints for your review
- Do **not** implement code.
- Do **not** rewrite entire files.
- Produce actionable edits only.

## Output format (required)
1. **Overall verdict** (green/yellow/red)
2. **Top 10 risks** (ranked)
3. **Task-by-task corrections** (only where needed)
4. **Reordered queue** (only if you think ordering should change)
5. **Concrete patch list** for `PLAN.md` and `SONNET_TASK_QUEUE.md` (exact bullets to add/remove/change)
6. **Go/No-go recommendation** for starting Task 01

Be specific and practical. Assume the operator will execute tasks one-by-one with strict build gates and commits.