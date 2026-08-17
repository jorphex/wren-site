---
title: Wren documentation
description: Understand Wren desktop, Wren Companion, and the controls that protect account access and signing.
sidebar:
  label: Overview
  order: 1
---

Wren is a desktop EVM wallet and signing firewall for browser dapps and native applications. Wren desktop keeps account permissions, network routes, request review, signing, and broadcast in one place.

Wren Companion connects browser dapps to Wren on the same computer. Companion carries browser requests. It is not a wallet or signer. Wren desktop remains responsible for permissions, review, signing, and broadcast.

:::caution[Security status]

Wren `0.1.0` and Wren Companion `0.1.0` are published releases. Wren has no independent security audit. The current desktop release target is Linux x64. Use test accounts with no valuable assets while you evaluate the releases.

:::

## Start with your task

- Read [Wren features and boundaries](features.md) to understand the current product scope.
- [Install and start Wren](getting-started/install.md) on Linux x64. Verify the package before you run it.
- [Complete Wren onboarding](getting-started/onboarding.md) and add a test or watch-only account.
- [Install and pair Wren Companion](getting-started/companion.md) when you need browser dapps. Compare the six-digit code in Companion and Wren before you accept the pairing request.
- Use Wren's local provider for a native application that supports it. Companion is not required.
- [Import a Frame profile](getting-started/install.md#import-a-frame-profile) when you need a one-time private copy of an existing profile. Wren does not read Frame's live profile by default.

After setup, open **Control center**. You can manage [accounts](use-wren/accounts.md), [networks](use-wren/networks.md), [tokens](use-wren/tokens.md), [Earn](use-wren/earn.md), and [settings](use-wren/settings.md).

Review the requesting app, account, network, and request details before you approve them.

## What makes Wren different

- Wren gives browser and native clients one desktop approval surface.
- Each connected app has its own permitted accounts and network route. Wren has no shared wallet-wide network switch.
- Wren reviews supported transactions, messages, typed data, permits, and permissions before the signer acts. Simulation and decoded details are evidence. They do not guarantee the result.
- Wren supports hardware, encrypted local, and watch-only accounts. A watch-only account can inspect data but cannot sign.
- Companion carries browser requests and does not need your recovery phrase, private key, keystore password, or hardware-wallet PIN.

![Browser dapps reach Wren through Companion. Native apps connect directly. Wren reviews each request before the signer or network acts.](../../../assets/docs/wren-request-flow.svg)

Read [Wren features and boundaries](features.md) before you rely on a feature or signer.

## Safety baseline

- Download only from the [Wren release page](https://github.com/jorphex/wren/releases) and [Companion release page](https://github.com/jorphex/wren-companion/releases).
- Verify release checksums and GitHub artifact attestations before installation.
- Enter a recovery phrase or private key only in Wren's account setup. Never enter one in Companion or a dapp page.
- Export an encrypted Wren profile backup from **Settings** → **Recovery**. Test restoration with non-valuable accounts before you rely on the backup.
- Verify the address on a hardware device when the signer supports address display. Wren's evidence labels are not security certification.
- Report suspected vulnerabilities through the appropriate repository's [Security policy](https://github.com/jorphex/wren/blob/main/SECURITY.md), not a public issue.

## Authoritative technical details

The product repositories define protocol behavior and qualification evidence:

- [Signer and platform support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md)
- [RPC compatibility](https://github.com/jorphex/wren/blob/main/RPC_COMPATIBILITY.md)
- [Supported Ethereum standards](https://github.com/jorphex/wren/blob/main/SUPPORTED_EIPS.md)
- [Advanced execution boundaries](https://github.com/jorphex/wren/blob/main/EXECUTION_BOUNDARIES.md)
- Companion [security policy](https://github.com/jorphex/wren-companion/blob/main/SECURITY.md) and [privacy policy](https://github.com/jorphex/wren-companion/blob/main/PRIVACY.md)
