# Debloat Your Android TV

A small, safety-first guide for inspecting an Android TV over ADB, disabling carefully reviewed factory packages and moving to Projectivy Launcher without losing the way back.

[Read the guide](https://cagataykilinc.com.tr/projects/debloat-your-android-tv/)

## Why I made it

My Philips 43PUS8007/12 had become noticeably slow. I used ADB to measure its CPU, memory pressure, storage and application launch times before changing anything. The main constraints were its four Cortex-A53 cores and roughly 1.65 GiB of usable memory—not simply storage.

This repository turns that investigation into a repeatable process for other devices. It does not publish a universal package list because Android TV services differ by brand, model and firmware.

## Safety rules

- No root, bootloader unlocking, firmware flashing or factory reset.
- No `pm uninstall`, `pm clear`, wildcard or unreviewed bulk commands.
- Use `pm disable-user --user 0` for one reviewed package at a time.
- Test the TV after every small batch.
- Install and verify Projectivy before changing the stock Home launcher.
- Record an exact `pm enable <package>` command for every change.

## Use the prompt

Open [`prompt.txt`](prompt.txt), replace the three bracketed device fields and paste it into a capable coding-agent chat. Include the connection port shown on your TV when available; the pairing port can be different. The prompt helps with ADB connection, reviewing unused apps, reversible cleanup and Projectivy setup. It does not request benchmarks or performance measurements. Package review, functional checks and undo commands remain part of the process.

## Run the page locally

The site has no dependencies or build step:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`. Serving it over HTTP allows the page to load `prompt.txt` for the Copy button.

## Files

- `index.html` — the one-page guide
- `styles.css` — responsive styling
- `script.js` — prompt loading and copy feedback
- `prompt.txt` — reusable agent instructions
- `assets/` — privacy-safe recreated Android TV screens

The visuals contain fictional documentation values, not the real IP address, pairing code, device serial or Netflix ESN from my television.

## License

MIT. Product names and third-party interfaces remain the property of their respective owners.
