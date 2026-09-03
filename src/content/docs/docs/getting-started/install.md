---
title: Install and start Wren
description: Verify and install Wren on Linux x64, or evaluate Windows and macOS previews, then complete first launch and add a test account.
sidebar:
  label: Install and start Wren
  order: 2
---

This tutorial takes you from a verified Wren package to a running wallet with a first test account. Linux x64 is the qualified desktop target. Windows x64 and macOS x64/arm64 are unqualified previews.

:::caution[Verify the release]

Download Wren `0.1.6` only from the official release. Verify the checksum and GitHub build and SBOM attestations before you run a package. The Linux packages and Windows preview are unsigned. The macOS previews are ad-hoc signed and unnotarized. Checksums and attestations do not create a trusted Windows or Apple publisher.

:::

## Before you begin

You need:

- a Linux x64 system for the qualified release, a Windows x64 system for the unsigned preview, or an Intel or Apple Silicon Mac for an unnotarized preview;
- a terminal or PowerShell and permission to install or run local applications;
- a test account that holds no valuable assets, or an address to add as watch-only;
- an optional supported hardware wallet connected over USB.

Review [Signer and Platform Support](https://github.com/jorphex/wren/blob/main/HARDWARE_SUPPORT.md) before relying on a hardware device. Trezor Safe 7 and Model One have current physical evidence, with documented limitations for Model One. Ledger and GridPlus Lattice1 have automated coverage but have not been physically requalified.

If you intend to import an existing Frame profile, read [Import a Frame profile](#import-a-frame-profile) before starting Wren normally. Import is available only before Wren creates its profile.

## Download and verify Wren

Open the [Wren `v0.1.6` release](https://github.com/jorphex/wren/releases/tag/v0.1.6) and download:

- `Wren-0.1.6.AppImage` for a portable Linux application;
- `wren_0.1.6_amd64.deb` for a Linux system installation;
- `Wren-Setup-0.1.6-unsigned-x64.exe` for the Windows x64 preview;
- `Wren-0.1.6-macos-arm64-unnotarized.dmg` for Apple Silicon;
- `Wren-0.1.6-macos-x64-unnotarized.dmg` for an Intel Mac; and
- `SHA256SUMS` from the same release.

### Verify a Linux package

Keep the package and checksum file in the same directory. Calculate the package hash:

```bash
sha256sum Wren-0.1.6.AppImage
```

For the deb package, use:

```bash
sha256sum wren_0.1.6_amd64.deb
```

The calculated hash must exactly match that package's entry in `SHA256SUMS`. Also inspect the GitHub artifact attestation attached to the release. Stop if a name, hash, release version, repository, or attested source commit does not match.

The packages are unsigned. A successful installation prompt is not a substitute for verifying the release.

### Verify the Windows preview

Keep `Wren-Setup-0.1.6-unsigned-x64.exe` and `SHA256SUMS` in the same directory. Open PowerShell in that directory and run:

```powershell
$Installer = Get-Item '.\Wren-Setup-0.1.6-unsigned-x64.exe'
$Expected = (Get-Content '.\SHA256SUMS' | Where-Object { $_ -like "*  $($Installer.Name)" }).Split()[0]
$Actual = (Get-FileHash -Algorithm SHA256 $Installer).Hash.ToLowerInvariant()
if ($Actual -ne $Expected) { throw 'Checksum does not match' }
Write-Host 'Checksum matches'
```

Also inspect the GitHub artifact attestation. Stop if the filename, hash, release version, repository, or attested source commit does not match.

### Verify a macOS preview

Keep the matching DMG and `SHA256SUMS` in the same directory. For Apple Silicon, open Terminal in that directory and run:

```bash
file='Wren-0.1.6-macos-arm64-unnotarized.dmg'
grep "  $file$" SHA256SUMS | shasum -a 256 --check
```

Use `Wren-0.1.6-macos-x64-unnotarized.dmg` as `file` on an Intel Mac. The result must show `OK`. Also inspect the GitHub build and SBOM attestations. Stop if the filename, checksum, release version, repository, or attested source commit does not match.

## Run the AppImage

Make the AppImage executable, then run it:

```bash
chmod +x Wren-0.1.6.AppImage
./Wren-0.1.6.AppImage
```

Keep the AppImage somewhere you control if you plan to continue launching Wren from it.

## Install the deb package

Install the package using `apt`:

```bash
sudo apt install ./wren_0.1.6_amd64.deb
```

Launch Wren from your desktop application menu after installation.

## Install the Windows x64 preview

`Wren-Setup-0.1.6-unsigned-x64.exe` is intentionally unsigned. Windows may report an unknown publisher or show Microsoft Defender SmartScreen. The absence of a warning does not make the installer trusted.

After you verify the checksum and attestation, run the installer only if you accept the preview boundary. It installs Wren for the current user and opens it without a setup wizard. Windows x64 has native package checks, but it is not a platform-qualified target. Review the [Windows preview checklist](https://github.com/jorphex/wren/blob/main/WINDOWS_RELEASE_QUALIFICATION.md) for the tested boundary.

## Install a macOS preview

The Intel and Apple Silicon previews are ad-hoc signed, unnotarized, and unqualified. They have no trusted Apple publisher. Physical qualification is pending. Wren does not provide automatic updates for these previews.

1. Open the verified DMG and drag **Wren** to **Applications**.
2. Try to open Wren once. macOS should block the unidentified, unnotarized application.
3. Open **System Settings** → **Privacy & Security** and find **Security**.
4. Select **Open Anyway** for Wren.
5. Authenticate, confirm **Open**, and verify that the application name is Wren.

Do not disable Gatekeeper or remove quarantine attributes globally. Download and verify each later Wren version because automatic macOS updates are not available. macOS has no Wren operating-system device protection for software signers. Start with a disposable account and test funds.

## Import a Frame profile

Skip this section if you are starting with a new Wren profile. The commands and profile path below apply to the Linux packages.

Wren does not read or share Frame's active profile by default. Its import makes a one-time private copy and leaves the Frame profile unchanged.

1. Close both Frame and Wren.
2. Back up `~/.config/frame` and keep that backup until you have verified the imported accounts and settings.
3. Before launching Wren normally, run the appropriate import command.

For the AppImage:

```bash
./Wren-0.1.6.AppImage --import-frame-profile
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

Open the wallet account selector, then select **Add account**. Wren offers:

- hardware accounts using Ledger, Trezor, or GridPlus Lattice1;
- new encrypted local accounts with a generated 12-word recovery phrase or Ethereum private key;
- imported encrypted local accounts from a recovery phrase, private key, or keystore file;
- a watch-only address that cannot sign.

For a first evaluation, use a watch-only address or a test-only signer with no valuable assets. If you connect hardware, unlock the device and verify the address shown on the device before using it.

:::danger

Enter recovery phrases, private keys, and hardware-wallet PINs only in the expected Wren or hardware-device interface. Wren Companion and dapp pages never need these secrets.

:::

## Back up the profile

After configuring accounts and networks, open **Settings**, find **Recovery**, and select **Export backup**. Choose a unique backup password of at least eight characters, preferably longer, and save the encrypted file somewhere separate from the computer running Wren.

Wren cannot recover the backup password. Inspect and test restoration with non-valuable accounts before depending on the backup.

Wren is now ready for local tools. To use browser dapps, continue with [Install and pair Wren Companion](/docs/getting-started/companion/).
