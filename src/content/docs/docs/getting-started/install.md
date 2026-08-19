---
title: Install and start Wren
description: Verify and install Wren on Linux x64, complete first launch, and add a test account.
sidebar:
  label: Install and start Wren
  order: 2
---

This tutorial takes you from a verified Linux package to a running Wren wallet with a first test account.

:::caution[Verify the release]

Download Wren `0.1.2` only from the official release. Verify the checksum and GitHub artifact attestation before you run a package. The packages are unsigned.

:::

## Before you begin

You need:

- a Linux x64 system;
- a terminal and permission to install or run local applications;
- a test account that holds no valuable assets, or an address to add as watch-only;
- an optional supported hardware wallet connected over USB.

Review [Signer and Platform Support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md) before relying on a hardware device. Trezor Safe 7 and Model One have current physical evidence, with documented limitations for Model One. Ledger and GridPlus Lattice1 have automated coverage but have not been physically requalified.

If you intend to import an existing Frame profile, read [Import a Frame profile](#import-a-frame-profile) before starting Wren normally. Import is available only before Wren creates its profile.

## Download and verify Wren

Open the [Wren `v0.1.2` release](https://github.com/jorphex/wren/releases/tag/v0.1.2) and download:

- `Wren-0.1.2.AppImage` for a portable application; or
- `wren_0.1.2_amd64.deb` for a system installation;
- `SHA256SUMS` from the same release.

Keep the package and checksum file in the same directory. Calculate the package hash:

```bash
sha256sum Wren-0.1.2.AppImage
```

For the deb package, use:

```bash
sha256sum wren_0.1.2_amd64.deb
```

The calculated hash must exactly match that package's entry in `SHA256SUMS`. Also inspect the GitHub artifact attestation attached to the release. Stop if a name, hash, release version, repository, or attested source commit does not match.

The packages are currently unsigned. A successful installation prompt is not a substitute for verifying the release.

## Run the AppImage

Make the AppImage executable, then run it:

```bash
chmod +x Wren-0.1.2.AppImage
./Wren-0.1.2.AppImage
```

Keep the AppImage somewhere you control if you plan to continue launching Wren from it.

## Install the deb package

Install the package using `apt`:

```bash
sudo apt install ./wren_0.1.2_amd64.deb
```

Launch Wren from your desktop application menu after installation.

## Import a Frame profile

Skip this section if you are starting with a new Wren profile.

Wren does not read or share Frame's active profile by default. Its import makes a one-time private copy and leaves the Frame profile unchanged.

1. Close both Frame and Wren.
2. Back up `~/.config/frame` and keep that backup until you have verified the imported accounts and settings.
3. Before launching Wren normally, run the appropriate import command.

For the AppImage:

```bash
./Wren-0.1.2.AppImage --import-frame-profile
```

For the installed deb:

```bash
/opt/Wren/wren --import-frame-profile
```

Wren copies only validated `config.json` and encrypted signer files. It refuses the import if Frame is active, the source is malformed, or a Wren profile already exists. Do not delete the original profile or backup until you have checked the imported result.

## Complete first launch

Select **Get started** on the welcome screen. Then follow [Complete Wren onboarding](/docs/getting-started/onboarding/).

The tutorial helps you set the wallet shortcut, enable networks, add an account, and understand Companion. Select **Open Wren** to open the **Control center**.

## Add a first test account

From **Control center**, open **Accounts**, then select **Add New Account**. Wren offers:

- hardware accounts using Ledger, Trezor, or GridPlus Lattice1;
- local encrypted accounts from a recovery phrase or private key;
- a watch-only address that cannot sign.

For a first evaluation, use a watch-only address or a test-only signer with no valuable assets. If you connect hardware, unlock the device and verify the address shown on the device before using it.

:::danger

Enter recovery phrases, private keys, and hardware-wallet PINs only in the expected Wren or hardware-device interface. Wren Companion and dapp pages never need these secrets.

:::

## Back up the profile

After configuring accounts and networks, open **Settings**, find **Recovery**, and select **Export backup**. Choose a backup password of at least 12 characters and save the encrypted file somewhere separate from the computer running Wren.

Wren cannot recover the backup password. Inspect and test restoration with non-valuable accounts before depending on the backup.

Wren is now ready for local tools. To use browser dapps, continue with [Install and pair Wren Companion](/docs/getting-started/companion/).
