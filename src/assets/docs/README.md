# Documentation asset sources

## Interface captures

Both screenshots came from Wren commit `a10a9875a45daa0ec20384e996424eb6008aeb7a` on 2026-08-17. The isolated UI qualification harness used deterministic fixtures and blocked network, device, permission, navigation, and popup access.

| Asset | Qualification scenario |
| --- | --- |
| `wren-control-center.png` | `dash-control-center-full-1.5`, cropped after the last control row |
| `wren-network-editor.png` | `dash-network-editor-full-1` |

The capture command exported its output to `wren-site`. It did not write to the Wren repository.

## Diagrams

The diagrams are site-owned SVG files. Their visual language follows the Wren site tokens and the Kimi design review in session `session_4887ad7c-5a13-40b0-a844-d581862dc2c7`.

- `wren-request-flow.svg` explains the client, transport, desktop authority, signer, and RPC boundary.
- `wren-per-app-routes.svg` explains separate per-app account permissions and network routes.
- `wren-earn-workflow.svg` explains explicit review, signer confirmation, resume, and retry behavior.
