---
title: Manage tokens
description: Add, edit, inspect, and remove custom tokens in Wren.
sidebar:
  label: Tokens
  order: 3
---

Wren checks balances on connected networks for the selected account. It also tracks custom tokens that you add. A token entry changes how Wren displays an asset. It does not change the asset on the network.

Wren uses a built-in token inventory for balance scans on supported networks. It also reads custom tokens, account-known tokens, and the curated Yearn assets that Earn needs. A non-zero token balance that Wren discovers becomes known for the selected account. Wren does not create a zero balance for an unknown token.

## Add a custom token

1. Open **Control center**.
2. Select **Tokens**.
3. Select **Add New Token**.
4. Select a network.
5. Enter the token contract in **Token contract address**.

Wren checks the address after you enter a valid address. If the check succeeds, Wren shows **Token details detected.** and opens **Token details**. If the check fails, Wren shows **Token details could not be verified. Enter the details manually.**

Check the contract address and network before you continue. Do not use a name or symbol as proof that the contract is correct.

1. Check or enter **Token name**.
2. Check or enter **Symbol**.
3. Enter **Decimals** as a whole number from `0` to `255`.
4. Optionally enter a **Logo URI**.
5. Select **Add token**.

You can also select **Add token** from an account's expanded **Balances** view.

The button shows **Complete token details** until the required fields are valid. Wren saves the token for the current profile. A custom token is not a transaction and does not require a signature.

If no network is enabled, Wren shows **No enabled networks**. Select **Open Networks**, enable the required network, and return to the token form.

## Review or edit a custom token

1. Open **Control center**.
2. Select **Tokens**.
3. Expand the token with **Expand _SYMBOL_ token on chain _CHAIN ID_**.
4. Select **Edit token**.
5. Check the contract address, network, name, symbol, decimals, and logo URI.
6. Select **Save**.

Select **Copy _SYMBOL_ token address** when you need the saved contract address. Wren changes the button to **Address Copied** for a short time.

## Remove a custom token

1. Open **Control center**.
2. Select **Tokens**.
3. Expand the token.
4. Select **Remove token**.
5. Check the message: **This removes the custom token from Wren. On-chain assets are not affected.**
6. Select **Remove token** again.

Select **Cancel** if you do not want to remove the entry. Removal deletes the custom-token entry from Wren. It does not transfer, burn, or hide the asset on the network.

Wren has no user control to hide an individual discovered token. Wren can discover a non-zero ERC-20 balance on a connected network and add it to the account's known balances. Removing custom metadata does not prevent a token from appearing when Wren already knows it for the account or discovers it through its inventory.

Curated Yearn assets and share tokens are tracked for Earn. They are not custom tokens. A non-zero balance can appear in the account balances and **Send** without an entry in **Tokens**.

## USD values and missing prices

Wren requests independent USD quotes from [DefiLlama's price API](https://coins.llama.fi) for native currencies and tracked tokens. It refreshes these quotes about every five minutes. The quote service can return no value for a token or can be temporarily unavailable.

Wren does not calculate a USD value from a token name, symbol, balance, or **Logo URI**. A missing quote leaves the value unavailable. It does not mean that the asset is worth zero. USD values are display data, not a valuation or a recommendation.
