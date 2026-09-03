---
title: Install and pair Wren Companion
description: Install Wren Companion for Chrome, Brave, or Firefox and pair it securely with Wren desktop.
sidebar:
  label: Pair the browser companion
  order: 4
---

Wren Companion lets browser dapps request accounts, permissions, networks, and signatures from the Wren desktop wallet running on the same computer.

Companion is not a wallet or signer. It does not need your recovery phrase, private key, keystore password, or hardware-wallet PIN.

:::caution[Verify the release]

Install Chrome or Brave from the official Chrome Web Store listing. For Firefox or a local installation, download Wren Companion `0.1.2` only from the official GitHub release. Verify the archive, checksum, compatibility metadata, and GitHub artifact attestation.

:::

## Before you begin

- [Install Wren 0.1.6](/docs/getting-started/install/), or a later desktop release that retains protocol 3, and keep the desktop application running.
- Use a current Chrome, Brave, or Firefox browser.
- Use a disposable browser profile and a test-only wallet account for the first connection.
- Remove or disable another extension that claims to be Wren; do not pair an archive from an unofficial location.

## Install from the Chrome Web Store

1. Open [Wren Companion in the Chrome Web Store](https://chromewebstore.google.com/detail/wren-companion/ifimccfajfbgligbhcgfapdagpnfkbhn).
2. Install the extension in Chrome or Brave and confirm the browser prompt.
3. Pin Wren Companion to the browser toolbar if you want its status to remain easy to reach.

Continue with [Compare the pairing code](#compare-the-pairing-code).

## Use a release archive

Firefox store review is pending. Use a verified release archive for Firefox or when store distribution is unavailable.

Open the [Wren Companion `v0.1.2` release](https://github.com/jorphex/wren-companion/releases/tag/v0.1.2). Download the package for your browser and the verification files:

- `wren-companion-0.1.2-chrome.zip` for Chrome or Brave, or `wren-companion-0.1.2-firefox.zip` for Firefox;
- `wren-companion-0.1.2-compatibility.json`;
- `SHA256SUMS` from the same release.

Calculate the archive hash:

```bash
sha256sum wren-companion-0.1.2-chrome.zip
```

On Windows, calculate the same hash in PowerShell:

```powershell
(Get-FileHash -Algorithm SHA256 '.\wren-companion-0.1.2-chrome.zip').Hash.ToLowerInvariant()
```

Use the Firefox filename instead when installing for Firefox. The calculated hash must exactly match the archive's entry in `SHA256SUMS`. Also verify the GitHub artifact attestation.

Check that the compatibility file names Companion `0.1.2` and the archive that you downloaded. It must use protocol 3 and name the official Wren repository, `main` branch, and minimum desktop commit. Wren `0.1.6` satisfies that minimum. Your installed desktop commit must be the listed commit or a later commit on that branch.

Stop if the archive, checksum, compatibility metadata, repository, or attested source does not match.

Extract the ZIP into its own directory. Chrome and Firefox packages have different background manifests and are not interchangeable.

### Load the Chrome archive locally

1. Open `chrome://extensions` in Chrome or `brave://extensions` in Brave.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the directory where you extracted the Chrome archive.
5. Pin Wren Companion to the browser toolbar if you want its status to remain easy to reach.

### Load the Firefox archive temporarily

1. Open `about:debugging#/runtime/this-firefox`.
2. Select **Load Temporary Add-on**.
3. Choose `manifest.json` inside the extracted Firefox archive.

## Compare the pairing code

1. Start Wren desktop if it is not already running.
2. Open Wren Companion from the browser toolbar.
3. Wait for Companion to display **Pair this Companion** and a six-digit code.
4. Wren desktop displays a connection request with its own six-digit code and the extension origin.
5. Compare all six digits. If they differ, select **Decline**, remove the extension, and verify the archive again.
6. If they match and you initiated this installation, select **Accept** in Wren.

After approval, Companion pins the identity of this Wren installation. Normal reconnects to that exact desktop identity do not require another code comparison.

:::danger

Never approve an unexpected pairing request. Matching codes authenticate the local Wren installation and Companion installation; they do not make a compromised computer or browser profile safe.

:::

## Connect a browser dapp

1. Open a dapp using your disposable browser profile.
2. Select Wren from the wallet choices. Dapps that support EIP-6963 should discover it by name.
3. Review the connection request in Wren desktop.
4. Confirm the requesting site, permitted account, and network before approving.

Each dapp receives only the accounts and networks you permit. When a dapp does not specify a network, Companion lets you choose one; check that network in Wren before approving the request.

## Resolve common pairing states

**Wren is unavailable**

Start Wren desktop, confirm it is listening locally, then reopen Companion.

**Update Wren**

The installed Companion requires a newer compatible desktop build. Do not bypass the warning. Verify and install a supported Wren release, then select **Reconnect**.

**Wren identity changed**

Companion no longer recognizes the desktop installation. Reset pairing only if you expected Wren's profile or installation identity to change. A reset creates a new Companion installation key and requires another code comparison.

**Pairing failed**

Keep Wren running and retry once. If it fails again, verify that desktop and Companion versions satisfy the published compatibility metadata before resetting either side.

## Revoke or reset pairing

To remove Companion's access from Wren, open **Control center** → **Settings**, find the paired browser under **Browser companions**, and select **Revoke**.

To replace Companion's local pairing identity, open Companion and select **Reset pairing** twice to confirm. Compare the new six-digit code before accepting the new request in Wren.

Removing the extension also removes its browser-local pairing key. It does not remove accounts or signers from Wren desktop.

For the precise boundary, read the Companion [security policy](https://github.com/jorphex/wren-companion/blob/main/SECURITY.md) and [privacy policy](https://github.com/jorphex/wren-companion/blob/main/PRIVACY.md).
