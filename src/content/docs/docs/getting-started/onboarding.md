---
title: Complete Wren onboarding
description: Complete the Wren first-run tutorial, choose networks, and arrive at the Control center.
sidebar:
  label: Complete onboarding
  order: 3
---

This tutorial starts after you install Wren. It ends when the **Control center** is ready.

Before you begin, keep a test account or a watch-only address ready. Do not use an account with valuable assets for your first Wren session.

## Start the tutorial

1. Launch Wren.
2. Select **Get started** on the **Meet Wren** screen.

The tutorial shows one step at a time. Select **Back** to return to the previous step. Select **Skip shortcut** when you do not want to configure the shortcut.

## 1. Set the wallet shortcut

Wren can use one keyboard shortcut to show or hide the wallet.

1. Press the shortcut shown on screen.
2. Press it again to show Wren after it hides.
3. Select **Next** after the shortcut works, or select **Skip shortcut**.

Wren can hide automatically when it loses focus. You can change this behavior later in [Settings](/docs/use-wren/settings/).

## 2. Choose your networks

The tutorial opens **Networks** in the main panel.

1. Enable the networks you intend to use.
2. Add a custom RPC only when you need one.
3. Review a network that a dapp requests before you add it.
4. Select **Next**.

You can change these choices later from the **Control center**.

## 3. Understand request networks

Each request stays tied to its network. A dapp can use several networks without a wallet-wide network switch.

Select **Next** after you review this behavior.

## 4. Add an account

The tutorial opens **Accounts**.

1. Select **Add account**.
2. Choose a hardware account, a local account, or a watch account.
3. Add a test account or a watch-only address for your first session.
4. Select **Next**.

Wren supports Ledger, Trezor, and GridPlus Lattice1 hardware accounts. You can create a new encrypted wallet with a 12-word recovery phrase or Ethereum private key, or import a recovery phrase, private key, or keystore file. A watch account cannot sign.

Enter a recovery phrase or private key only in Wren's account setup. Wren Companion and dapp pages do not need these secrets. When you use a hardware device, verify the address on the device before you use the account.

## 5. Connect browser dapps

[Wren Companion](/docs/getting-started/companion/) routes browser requests to Wren on the same computer. Companion is not a wallet or signer.

1. Select **Chrome** to open the Chrome Web Store, or select **Firefox** to open the Companion release downloads. You can also install Companion later.
2. Review and approve or reject each browser request in Wren.
3. Select **Next**.

Complete [Install and pair Wren Companion](/docs/getting-started/companion/) before you connect a browser dapp.

## 6. Check the dapp network

When a dapp does not provide a network, Wren Companion lets you choose one.

1. Check the selected network in Wren.
2. Approve the request only when the network is correct.
3. Select **Next**.

## 7. Open the Control center

The final screen says **Ready to begin**.

1. Review the reminder to review each request before anything is signed.
2. Select **Open Wren**.

Wren closes the tutorial and opens the **Control center**. Its persistent navigation provides **Home**, **Accounts**, **Networks**, **App activity**, and **Settings**. Wren is ready for local tools. Use [Wren Companion](/docs/getting-started/companion/) when a browser dapp needs a browser wallet.
