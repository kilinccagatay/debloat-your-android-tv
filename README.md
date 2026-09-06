# Debloat Your Android TV

A cautious, reversible workflow for inspecting an Android TV over ADB, reviewing unnecessary factory software, measuring the result and moving to Projectivy Launcher without treating one brand's package list as universal advice.

This is an independent personal project by Cagatay Kilinc. It combines a readable field guide with an English prompt that visitors can give to a capable AI coding agent.

[Read the live project guide](https://cagataykilinc.com.tr/projects/debloat-your-android-tv/)

## Safety philosophy

Android TV firmware is device-specific. A package that looks unnecessary may provide HDMI inputs, remote buttons, audio, networking, DRM, updates or another model-critical function. This project therefore does not publish a universal safe-to-disable list.

The workflow is built around five rules:

1. inspect and measure before changing anything;
2. research uncertain packages instead of trusting their names;
3. ask the TV owner before every change;
4. use `pm disable-user --user 0` and small batches;
5. record and test an exact rollback path.

It never asks users to root the TV, unlock the bootloader, flash firmware, factory-reset the device or delete user data.

## Use the agent prompt

Open [`prompt.txt`](prompt.txt), replace the three bracketed device fields and paste the result into a capable coding-agent chat. The receiving agent is instructed to detect the computer's operating system, use Google's official Android SDK Platform Tools, collect baseline measurements and stop for functional testing after every small batch.

The prompt also requires a machine-readable list of disabled packages and a human-readable change log containing exact rollback commands.

## Projectivy Launcher

Projectivy must be installed, opened and tested before the stock Home launcher is changed or disabled. The guide asks the TV owner to verify app launching, Inputs and Home-button behavior first.

Projectivy is available through [Google Play](https://play.google.com/store/apps/details?id=com.spocky.projengmenu). Some customization features require its premium upgrade; the guide does not assume that every feature is free.

## Run locally

The project is a dependency-free static site. Clone the repository and serve its root with any local HTTP server. For example, with Python 3:

```sh
python -m http.server 8080
```

Then open `http://localhost:8080`.

Serving the files over HTTP is required for the page to load `prompt.txt`. Opening `index.html` directly through a `file://` URL may cause the browser to block that request.

## Repository contents

- `index.html` — the complete field-guide page;
- `styles.css` — responsive presentation and accessible focus states;
- `script.js` — prompt loading and keyboard/touch-friendly copy feedback;
- `prompt.txt` — the reusable agent instructions;
- `assets/` — privacy-safe recreated Android TV documentation visuals.

The visuals use fictional documentation values. They are recreations based on the project device's screens, not unedited device captures. No real IP address, pairing code, account, device serial or Netflix ESN is included.

## Limitations

Performance gains depend on the TV, firmware, CPU, memory pressure, installed software and background services. A before/after result from one television does not establish what another device will do. Activity launch measurements also describe the first Activity, not the time until all content has loaded.

## Rollback

The reversible counterpart to a disabled package is:

```sh
adb shell pm enable <package>
```

If a test fails, stop making changes and restore the most recently disabled batch first. Do not improvise package names; use the list recorded during that device's own session.

## License

The project source and original written material are available under the [MIT License](LICENSE). Product names and third-party interfaces remain the property of their respective owners.
