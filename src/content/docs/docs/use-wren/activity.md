---
title: Review Activity
description: Review Wren Activity details, on-chain evidence, retention, and clearing behavior.
sidebar:
  label: Activity
  order: 2
---

Each account has an **Activity** section. It records wallet requests and supported activity from outside Wren.

## Monitor account activity

Wren tracks direct transactions and standard token transfers for saved addresses on enabled, connected networks. Activity submitted elsewhere shows **Outside Wren**. Common approvals, deposits, and withdrawals have short action names.

Monitoring starts at the current chain position and runs while Wren is open. Wren saves progress and resumes after reconnects and restarts. It checks for duplicates and recovers from chain reorganizations. Earlier history and internal-call traces are not included.

Private alerts can appear while Wren is hidden. They omit amounts and addresses. To turn them off, open **Settings** → **General** and disable **Wallet activity notifications**.

## Open Activity details

1. Select an account in the wallet.
2. Select an Activity row, or select **View all activity** first.
3. Check the type, result, app, network, account, and exact times.

For transactions, Wallet Calls, and EIP-7702 revocations, Wren can request bounded context from the configured RPC. It recovers supported methods and transfers from transaction data and confirmed receipts. Local calldata decoding is available when remote metadata is slow or unavailable. Wrapped-native deposits and withdrawals show the related asset changes.

Wren checks the retained transaction hash, sending account, and canonical block when available. The detail can show the native value, recipient or contract, bounded call context, and explorer actions. Wren labels partial or unavailable evidence instead of guessing.

The RPC receives the transaction lookup. Wren does not use a Wren backend for this action.

## Understand retention

Wren keeps Activity for 90 days. A private reference ledger keeps only the Activity record ID, account, origin, chain, submitted hashes, and an optional canonical block reference.

The ledger does not keep fetched transaction bodies, calldata, opaque decoded bytes, recipients, or amounts. Wren does not include it in interface state or profile backups.

## Clear Activity

1. Select **View all activity**.
2. Select **Clear activity**.
3. Read the warning, then select **Clear history**.

This action clears Activity for every account. It also clears local outbound-address memory. Prior-use and lookalike warnings can be unavailable until you submit new transactions. You cannot undo this action.

Repeated observations of the same transaction, including a replacement, do not recreate the row. A newer pending or final update can appear again.
