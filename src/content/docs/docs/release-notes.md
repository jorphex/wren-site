---
title: Release notes
description: Review user-facing changes in Wren and Wren Companion.
sidebar:
  label: Release notes
  order: 3
---

This page lists changes that affect Wren installation, compatibility, security, and daily use. The linked GitHub release pages are authoritative for files, checksums, compatibility metadata, and attestations.

## Release boundary

Wren has no independent security audit. Linux x64 is the qualified desktop target, and its packages are unsigned. Windows x64 is an unsigned, unqualified preview. macOS x64 and arm64 are ad-hoc signed, unnotarized, and unqualified previews. Use a disposable profile and test accounts while you evaluate a release.

Simulation, decoded labels, and guardrails provide review evidence. They do not guarantee transaction safety. See [Signer and platform support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md) for the current qualification boundary.

## Current releases

Wren `0.1.6` was released September 3, 2026. Wren Companion `0.1.2` was released August 22, 2026.

The current compatible pair is Wren `0.1.6` with Wren Companion `0.1.2`. Version numbers do not need to match. Install Wren `0.1.6` before you install or update Companion `0.1.2`.

### Wren 0.1.6

Wren `0.1.6` makes transaction reviews clearer and restores direct access to locked accounts.

- Groups the decoded action, estimated asset changes, fees, nonce, contract data, and signer actions in transaction reviews. **Raw data** excludes internal Wren bookkeeping.
- Shows requested, custom, unlimited, and revoke choices together in token approval reviews. The selected allowance remains visible.
- Shows submitted, confirming, and confirmed states with hash, explorer, cancel, and speed-up actions when they apply.
- Recovers supported methods and transfers in Activity from transaction data and confirmed receipts. Local calldata decoding remains available when remote metadata is unavailable.
- Restores account renaming. Local names remain separate from ENS names.
- Opens the required password, device PIN, passphrase, or reconnect flow when you select a locked account.
- Renames **App activity** to **Connected apps** and uses one access rule for the badge and list.
- Lets a known app switch to another enabled chain without another approval screen or account exposure. Unknown apps and unavailable chains fail closed.
- Keeps Linux x64 qualified, Windows x64 unsigned and unqualified, and macOS x64/arm64 ad-hoc signed, unnotarized, and unqualified.

[Download Wren 0.1.6](https://github.com/jorphex/wren/releases/tag/v0.1.6). Verify the applicable `SHA256SUMS` entry and GitHub build and SBOM attestations before installation. Checksums and attestations do not create a trusted Windows or Apple publisher.

### Wren Companion 0.1.2

Wren Companion `0.1.2` improves connection reliability on Etherscan, BaseScan, and other Ethereum apps.

- Connects on apps that also check for MetaMask compatibility while continuing to identify itself as Wren.
- Shows the active network and the site's Wren or MetaMask setting more reliably, including on pages that use embedded frames.
- Handles sites that request a network switch before account access, including BaseScan's Base network flow.
- Keeps site setting changes tied to the exact requesting page in Chrome and Firefox.
- Keeps the last known network list visible during brief local disconnects or browser background restarts. It does not store accounts, requests, transactions, or page content in that list.
- Retains EIP-1193, EIP-6963, mutually authenticated pairing protocol 3, and the pairing and page-isolation boundaries from `0.1.1`.

[Install Wren Companion 0.1.2 from the Chrome Web Store](https://chromewebstore.google.com/detail/wren-companion/ifimccfajfbgligbhcgfapdagpnfkbhn) for Chrome or Brave. Firefox store review is pending. Use the [Companion 0.1.2 release](https://github.com/jorphex/wren-companion/releases/tag/v0.1.2) for a verified Firefox or local archive.

## Wren 0.1.5

Released August 31, 2026.

Wren `0.1.6` supersedes this release.

Wren `0.1.5` improves Activity, Control Center, wallet, and request-review workflows.

- Opens each Activity row as a keyboard-accessible detail view. Supported entries retrieve bounded context from the configured RPC. Wren checks retained identifiers and labels incomplete evidence instead of guessing.
- Keeps limited transaction references for the 90-day Activity window. It excludes fetched transaction bodies, calldata, opaque bytes, recipients, and amounts from Activity history and profile backups. An unchanged transaction does not recreate cleared Activity, but a newer update can appear again.
- Adds persistent Control Center navigation, clearer signing and watch-only account groups, and direct account and network actions.
- Adds a wallet portfolio summary, direct Send, address Copy and QR actions, a clearer next-request summary, and direct Chrome Web Store routing for Companion.
- Clarifies permit, token approval, Wallet Calls, and EIP-7702 revocation reviews.
- Uses a consistent visual hierarchy across the dashboard, wallet, requests, balances, and management views.
- Restores legacy Frame colors during migration and merges mixed-case account keys without losing account records.
- Keeps Linux x64 qualified, Windows x64 unsigned and unqualified, and macOS x64/arm64 ad-hoc signed, unnotarized, and unqualified.

[Download Wren 0.1.5](https://github.com/jorphex/wren/releases/tag/v0.1.5). Verify the applicable `SHA256SUMS` entry and GitHub build and SBOM attestations before installation. Checksums and attestations do not create a trusted Windows or Apple publisher.

## Wren 0.1.4

Released August 24, 2026.

Wren `0.1.6` supersedes this release.

Wren `0.1.4` is an urgent transaction-reliability release for Base and other recognized OP Stack networks.

- Restores native and ERC-20 Sends on Base, Base Sepolia, Optimism, Optimism Sepolia, Zora, and recognized legacy OP Stack networks.
- Waits for fresh OP Stack fee evidence before initial approval. **Recheck** refreshes gas, fee, and balance evidence. Wren does not sign or broadcast when required evidence is missing or invalid.
- Lets you recheck a request that Wren `0.1.3` retained after you install Wren `0.1.4`.
- Lets you inspect queued transactions read-only. After Wren submits the current transaction, it opens the next request and continues confirmation and reorganization monitoring in the background. Repeated updates no longer restart completion or duplicate activity.
- Keeps funding warnings and **Recheck** controls in stable positions. **Send** and **Review Send** use one continuous panel background.
- Limits compiler-version validation work for malformed source input and makes release SBOM identity consistent across Linux, Windows, and macOS.
- Adds ad-hoc-signed, unnotarized Intel and Apple Silicon macOS previews. They have no trusted Apple publisher or automatic updates. Physical qualification is pending.
- Keeps Linux x64 as the qualified target and keeps the Windows x64 preview unsigned and unqualified.

[Download Wren 0.1.4](https://github.com/jorphex/wren/releases/tag/v0.1.4). Verify the applicable `SHA256SUMS` entry and GitHub build and SBOM attestations before installation. Checksums and attestations do not create a trusted Windows or Apple publisher.

## Wren 0.1.3

Released August 22, 2026.

Wren `0.1.6` supersedes this release. Upgrade before you retry an OP Stack Send that remains at **Funding check unavailable**.

Wren `0.1.3` adds local wallet creation and contract tools. It also makes transactions, browser connections, permissions, and restart recovery clearer and more reliable.

- Creates an encrypted local wallet with a new 12-word recovery phrase or Ethereum private key. Wren confirms the password and backup, shows the secret only during setup, and clears an unchanged copied secret from the clipboard after one minute.
- Prepares contract deployments from complete creation data, then simulates, reviews, signs, and sends them through the normal transaction flow.
- Publishes Solidity or Vyper source for existing contracts and confirmed Wren deployments. Wren checks supported compiler, Foundry, and Hardhat build files against the selected contract before publication. Sourcify is the primary service, with an optional Etherscan V2 fallback on supported networks.
- Keeps submitted transactions visible for confirmation and avoids sending again when the result is unknown. Send, Connected Apps, network editing, endpoint failover, signer removal, and Earn have clearer states and stronger recovery behavior.
- Upgrades profiles from Wren `0.1.2` without resetting encrypted signers, permissions, connected apps, networks, contacts, tokens, or activity.
- Saves generated accounts, transaction intent, access changes, signer removal, and source-publication state before reporting success or taking irreversible follow-up actions.
- Improves keyboard, screen-reader, focus, scaling, and short-height behavior across wallet creation, account access, transactions, networks, deployment, and source publication.
- Adds `Wren-Setup-0.1.3-unsigned-x64.exe` as a Windows x64 preview. It is a one-click current-user installer, may be shown as an unknown publisher, and is not platform-qualified.

[Download Wren 0.1.3](https://github.com/jorphex/wren/releases/tag/v0.1.3). Verify the applicable `SHA256SUMS` entry and GitHub artifact attestation before installation. A checksum does not create a trusted Windows publisher.

## Wren 0.1.2 and Wren Companion 0.1.1

Released August 19, 2026.

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
