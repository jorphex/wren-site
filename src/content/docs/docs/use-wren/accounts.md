---
title: Manage accounts and addresses
description: Add, select, review, and remove Wren accounts, signer records, and connected-app access.
sidebar:
  label: Accounts and addresses
  order: 1
---

Use **Control center** → **Accounts** to add and manage accounts. Wren keeps an account record separate from its signer record. A signer can expose several addresses, and you add each address as an account before you use it.

:::caution[Preview software]

Wren `0.1.0` is a release candidate and has no independent security audit. Use test accounts with no valuable assets while you evaluate it. Review the current [signer and platform support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md) before you rely on a hardware signer.

:::

## Add an account

1. Open **Control center**.
2. Select **Accounts**.
3. Select **Add New Account**.
4. Select an option under **Choose an account type**.

Wren currently offers these account types:

| Group | Option | Setup action |
| --- | --- | --- |
| Hardware devices | **GridPlus Lattice1** | Set **Device name**, select **Next**, enter **Enter device ID**, and select **Create**. Enter the pairing code shown on the Lattice when Wren asks for it. |
| Hardware devices | **Ledger device** | Connect and unlock the Ledger. Wren then shows its available addresses. |
| Hardware devices | **Trezor device** | Connect and unlock the Trezor. Wren then shows its available addresses. |
| Local accounts | **Seed phrase** | Enter the **Recovery phrase**, then select **Next**, **Continue**, and **Create** at the password steps. |
| Local accounts | **Private key** | Enter the **Private key**, then select **Next**, **Continue**, and **Create** at the password steps. |
| Local accounts | **Keystore file (JSON)** | Select **Choose keystore JSON file**, enter the keystore password, then complete the password steps. |
| Watch-only | **Watch account** | Enter an address or ENS name in **Enter an address or ENS name**, then select **Create**. |

The local account flow uses **Create Password** and **Confirm Password**. The password protects the local signer in this Wren profile. Wren cannot recover it.

Enter recovery phrases, private keys, and keystore passwords only in the Wren account setup. Never enter them in Wren Companion or a dapp page.

### Add a signer address

After Wren adds a hardware or local signer, open the signer card. The expanded signer view shows **Available accounts**.

1. Check the address on the hardware device when the device supports address display.
2. Select an address under **Available accounts** to add it to Wren.
3. Select the address again to remove the account record from Wren.

Wren shows a check mark for an address that is already an account. Removing the account record does not move funds and does not erase the address from the signer. You can add the address again from **Available accounts**.

For a watch-only account, Wren can read balances and activity when its network is available. A watch-only account cannot sign.

## Select and identify an account

Use the account selector to change the current account.

1. Select the current account name.
2. Select an account from **Choose an account**.

Wren displays the account name and a shortened address. Use **Filter accounts** when the list is long.

To manage the current account, use the controls next to its address:

- Select **Copy address** to copy the full checksummed address.
- Select **Show account address QR code** to display the address as a QR code.
- Select **Update account name**, edit **Account name**, and press Enter or leave the field to save the name.

Wren may display an ENS name in place of the local name when ENS data is available. Verify the full address before you send or approve a request.

## Manage connected-app access

Connected-app access is stored per account. It does not grant access to every account in the profile.

1. Select the account.
2. Find **Connected apps** in the account view.
3. Check the origin shown for each app.
4. Use the **Access for `<origin>`** toggle to revoke or restore access for that account.
5. Select **Clear all permissions** when you want to remove every listed app permission for the account.

Revocation affects future requests for that account. It does not delete the account or its signer. Review the app's network route separately in [Manage networks](networks.md).

## Unlock or remove a signer

An imported local signer can be locked while its account remains visible.

1. Open **Control center** → **Accounts**.
2. Select the signer card.
3. Enter the signer password when Wren shows **Software signer locked**.
4. Select **Unlock**.

To remove one account, open that account's **Settings** module and select **Remove account**. Read the confirmation, then select **Confirm removal**. Wren removes the account record from this profile. Funds remain onchain.

To remove a signer, open the signer card and select **Remove signer**. Read **Remove signer?**, then select **Remove signer**. Accounts that use the signer become watch-only. This action removes signing access from Wren; it does not move funds or destroy the underlying hardware or recovery material.

If you must change derivation settings, use [Settings](settings.md) → **Accounts and signing**. Check each displayed address after the change.
