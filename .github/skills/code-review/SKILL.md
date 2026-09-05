---
name: code-review
description: Applies the organization review policy when checking JavaScript input validation.
allowed-tools:
  - controlled-review-policy/get_internal_review_policy
---

When a changed JavaScript function performs division using a collection length, call `controlled-review-policy/get_internal_review_policy` with category `empty_collection`.

If the rule applies, cite its Rule ID in the review comment so maintainers can trace the finding to the applicable policy.
