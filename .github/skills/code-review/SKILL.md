---
name: code-review
description: Applies the organization review policy when checking JavaScript input validation.
---

When a changed JavaScript function performs division using a collection length, call `get_internal_review_policy` from the `controlled-review-policy` MCP server with category `empty_collection`.

If the rule applies, cite its Rule ID in the review comment so maintainers can trace the finding to the applicable policy.
