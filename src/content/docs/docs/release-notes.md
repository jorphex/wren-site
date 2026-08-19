---
title: Release notes
description: Review user-facing changes in Wren and Wren Companion.
sidebar:
  label: Release notes
  order: 3
---

This page lists changes that affect Wren installation, compatibility, security, and daily use. The linked GitHub release pages are authoritative for files, checksums, compatibility metadata, and attestations.

## Release boundary

Wren has no independent security audit. Linux x64 is the current qualified desktop target, and its packages are unsigned. Use a disposable profile and test accounts while you evaluate a release.

Simulation, decoded labels, and guardrails provide review evidence. They do not guarantee transaction safety. See [Signer and platform support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md) for the current qualification boundary.

## Current releases

Released August 19, 2026.

The current compatible pair is Wren `0.1.2` with Wren Companion `0.1.1`. Version numbers do not need to match. Install Wren `0.1.2` before you install or update Companion `0.1.1`.

### Wren 0.1.2

Wren `0.1.2` is a security, reliability, and wallet-safety update.

- Fails closed when Chromium sandboxing is unavailable or disabled.
- Tracks canonical receipts across chain reorganizations, replacements, speed-ups, and cancels. It also recovers review requests that do not have sufficient funding.
- Adds ERC-7811 asset discovery and a read-only inspector for transactions, calldata, EIP-712 data, and supported JSON-RPC requests.
- Adds optional dapp guardrails, stronger recipient review, safer native Max, reviewed token/native Sweep calls, and confirmed-recipient history.
- Adds stronger operating-system and hardware-signer protection. It also minimizes browser transport identity retained during Companion authentication.

[Download Wren 0.1.2](https://github.com/jorphex/wren/releases/tag/v0.1.2). Verify `SHA256SUMS` and the GitHub build attestations before installation.

### Wren Companion 0.1.1

Wren Companion `0.1.1` reduces browser identity data in the local authentication handshake.

- Companion no longer sends the browser name or runtime extension UUID.
- Protocol-3 pairing retains the signed installation ID and separate control and page P-256 keys.
- Companion has no technical or interaction analytics, telemetry, advertising, cloud account, remote code, or developer-operated data service.
- Use Companion `0.1.1` with Wren `0.1.2` or later. Check the bundled compatibility file for the minimum desktop commit.

[Download Wren Companion 0.1.1](https://github.com/jorphex/wren-companion/releases/tag/v0.1.1). Use the Chrome archive for Chrome or Brave, and the Firefox archive for Firefox. Verify the archive, checksum, and compatibility file on the GitHub release page before installation.

## Wren 0.1.1

Wren `0.1.1` was not published. Wren `0.1.2` supersedes it and includes its intended changes plus Chromium sandbox enforcement.

## Wren 0.1.0 and Wren Companion 0.1.0

Released August 17, 2026.

### Wren 0.1.0

- Added transaction, message, typed-data, permit, and permission review in the desktop wallet.
- Added hardware, encrypted software, and watch-only accounts with account, method, chain, and origin permissions.
- Added separate network routes for each connected application.
- Added local contacts, Frame profile import, and the curated Yearn Earn integration.

[Download Wren 0.1.0](https://github.com/jorphex/wren/releases/tag/v0.1.0).

### Wren Companion 0.1.0

- Added Chrome and Firefox packages with EIP-1193 and EIP-6963 discovery.
- Added six-digit pairing and authenticated reconnects.

[Download Wren Companion 0.1.0](https://github.com/jorphex/wren-companion/releases/tag/v0.1.0).
