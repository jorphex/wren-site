---
title: Settings
description: Find Wren desktop behavior, signer, connection, recovery, and profile controls.
sidebar:
  label: Settings
  order: 5
---

Open **Control center** → **Settings** to change Wren desktop behavior, account display, signer paths, connections, recovery, and profile actions.

The page contains these sections:

- **Desktop behavior** controls how Wren appears, hides, starts, and reports wallet activity.
- **Accounts and signing** controls account display, hardware derivation, relocking, and the GridPlus Lattice relay.
- **Browser companions** lists paired browser companions. This section appears after you pair one.
- **Local connections** lists authenticated local applications. This section appears after a local application pairs with Wren.
- **Recovery** exports or restores an encrypted Wren profile.
- **About** shows the instance and version information, the license, and the reset action.

## Desktop behavior

Use these controls for the desktop window and its notifications.

| Control | Action |
| --- | --- |
| **Wallet shortcut** | Select **Edit** to change the shortcut that opens or dismisses Wren. Use **Enable wallet shortcut** to turn it on or off. |
| **Interface scale** | Select **100%**, **125%**, or **150%**. Wren can reduce the effective scale to fit the display. |
| **Auto-hide** | Hide Wren when it loses focus. |
| **Wallet activity notifications** | Show private updates while Wren is hidden. Wren does not include the app, account, network, amount, address, call data, transaction hash, or delegation details. |
| **Run on startup** | Start Wren when you sign in. |
| **Reveal from screen edge** | Show Wren when the pointer rests at the selected display edge. |
| **Wallet side** | Select **Right** or **Left** for the edge that reveals Wren and the side where it appears. |
| **Display gas in menu bar** | On macOS builds, show the mainnet gas price in the menu bar. macOS is not a qualified `0.1.0` release target. |

Wren shows **Wallet activity notifications** only when the operating system supports notifications, Wren is hidden, and the setting is enabled. The updates report confirmed, failed, replaced, or still-pending submitted wallet activity. Select a notification to open that activity in Wren.

## Accounts and signing

Use these controls when the addresses or signer paths that Wren shows do not match the device configuration you expect.

- **Show account name with ENS** shows the local account name when ENS resolves.
- **Trezor derivation** offers **Standard**, **Legacy**, and **Testnet**.
- **Ledger derivation** offers **Live**, **Legacy**, **Standard**, and **Testnet**.
- **Ledger Live accounts** appears when **Ledger derivation** is **Live**. Select **5**, **10**, **20**, or **40** accounts.
- **Lattice derivation** offers **Standard**, **Legacy**, and **Live**.
- **Lattice accounts** offers **5**, **10**, **20**, or **40** accounts.
- **Lattice relay** uses **Default** or **Custom**. Enter a value in **Custom Lattice relay** when **Custom** is selected.
- **Lock hot signers when** relocks hot signers on **Close** or **Quit**.

After you change a derivation option, check the displayed account and address before you approve a request or sign.

## Browser companions

Each paired browser appears with its browser name, extension ID, and pairing fingerprint.

1. Find the browser entry under **Browser companions**.
2. Select **Revoke**.
3. Select **Confirm revoke**.

Revocation disconnects that Companion pairing. A new pairing code is required to connect it again. See [Install and pair Wren Companion](/docs/getting-started/companion/) for the pairing boundary.

## Local connections

Each paired local application appears as **Local app** with a shortened **Connection ID**.

- Select **Copy full connection ID** when the application needs the complete identifier.
- Select **Revoke**, then **Confirm revoke**, to disconnect the application.

Revocation removes the local application's access, pending requests, and subscriptions. The application must pair again with a matching code to reconnect.

## Export an encrypted backup

The export includes accounts, names, networks, contacts, permissions, settings, and signer records. It leaves out live balances, rates, and pending requests.

1. Under **Recovery**, select **Export backup**.
2. Enter a new **Backup password** with at least 12 characters.
3. Enter the same value in **Confirm password**.
4. Select **Choose save location**.
5. Save the encrypted file separately from the computer that runs Wren.

Wren cannot recover the backup password. Test the backup with non-valuable accounts before you rely on it.

## Restore an encrypted backup

Restore replaces the current Wren profile. It does not merge profiles.

1. Under **Recovery**, select **Restore backup**.
2. Enter the backup **Backup password**.
3. Select **Choose backup to inspect**.
4. Check the backup format, creation time, and signer record count.
5. Select **Replace this Wren profile** only when the inspected backup is the one you want.

Wren restarts and replaces the profile atomically. If replacement fails, Wren keeps the current profile. Stop if the file or password is not the expected one.

## About and reset

Under **About**:

- Select the **Instance ID** to copy it.
- Check the Wren version.
- Select **View License** to read the license.
- Select **Reset Wren** to remove local accounts, signers, networks, contacts, custom tokens, permissions, and settings from this device.

**Reset Wren** cannot be undone. Confirm that you have the required account access and a usable backup before you select **Reset Wren** in the confirmation dialog.
