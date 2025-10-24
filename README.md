<h1 align="center">
  🚀 Frappe AGT Typescript
</h1>

<h3 align="center">@anygridtech/frappe-agt-types</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![npm version](https://badge.fury.io/js/%40anygridtech%2Ffrappe-agt-types.svg)](https://badge.fury.io/js/%40anygridtech%2Ffrappe-agt-types)

</div>

---

<p align="center">
This package provides TypeScript definitions for <strong>AnyGrid Tech's custom Frappe application</strong>.
<br>
It extends <a href="https://github.com/AnyGridTech/frappe-types">@anygridtech/frappe-types</a> to add strong typing for custom DocTypes, client scripts, and server-side methods, enabling a modern, type-safe development workflow.
</p>

---

## 📝 Table of Contents

- [About](#about)
- [What’s Included?](#whats_included)
- [Getting Started](#getting_started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Authors](#authors)

---

## 🧐 About <a name = "about"></a>

While `@anygridtech/frappe-types` provides core types for the Frappe framework, custom applications introduce their own set of DocTypes and APIs. This package bridges that gap for AnyGrid Tech's specific modules.

Developing without it leads to common issues:
- ❌ Typing mistakes in custom DocType fields (e.g., `frm.doc.custom_field` vs `frm.doc.custom_feild`)
- ❌ No clarity on the shape of custom API responses
- ❌ Fragile code during refactors of custom scripts
- ❌ Poor autocomplete for proprietary functions

With `@anygridtech/frappe-agt-types`, you get:
- ✅ Accurate autocompletion for custom DocTypes and `agt` namespaces.
- ✅ Compile-time error checking for your client and server scripts.
- ✅ Inline documentation for custom modules.
- ✅ Improved code maintainability and developer experience.

---

## 📦 What’s Included? <a name = "whats_included"></a>

Type definitions for AnyGrid Tech's custom modules, including:

- **Custom DocTypes**:
  - `BrazilianInvoiceTaxes`
  - `ChecklistTable`
  - `CorrectionsTracker`
  - `SerialNoWorkflow`
  - And more...
- **Client-side `agt.client` namespace**:
  - `agt.client.checklist`
  - `agt.client.ui.ultra_dialog`
  - `agt.client.utils.db`
  - `agt.client.utils.doc`
  - `agt.client.workflow`
- **Server-side `agt.server` namespace**:
  - `agt.server.growatt_oss_api`
  - `agt.server.growatt_public_api`

> 🧩 The list is continuously expanding as the custom application evolves.

---

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will help you integrate the custom types into your Frappe TypeScript project.

### Prerequisites

- Firstly, you need a working Frappe development environment.
> In case you're not familiar, we recommend using our [Frappe Custom Apps Development Environment](https://github.com/AnyGridTech/frappe-dev) for easier setup.

- After having your working Frappe development environment,
you must create a new custom app or use an existing one. 
> Our [Frappe Custom Apps Development Environment](https://github.com/AnyGridTech/frappe-dev) includes helper functions for quickly scaffolding apps using `create-app.sh` or `install-app.sh`.

---

## 📥 Installation <a name = "installation"></a>

- Create a `ts` folder at `your_custom_app/your_custom_app/public/` to hold your TypeScript files.

- Install Typescript and our package via your package manager of choice:

```bash
# npm
npm install typescript @anygridtech/frappe-agt-types

# yarn
yarn add typescript @anygridtech/frappe-agt-types

# pnpm
pnpm add typescript @anygridtech/frappe-agt-types
```

> Notice: `@anygridtech/frappe-types` is a dependency of this project. You do not need to install it separately to have access to `frappe` type definitions. Installing this package is sufficient to have type definitions for both `frappe` and `agt` globals.

This package is designed to work with `@anygridtech/frappe-ts-tools`. You must set up `frappe-ts-tools` first:

👉 **[Follow @anygridtech/frappe-ts-tools Setup Instructions](https://github.com/AnyGridTech/frappe-ts-tools#configuration)**


The `frappe-ts-tools` package handles all TypeScript compilation and build configuration automatically.

- Reload the TypeScript server to ensure the editor picks up the new types: Hit `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) in VSCode and select `TypeScript: Restart TS Server`. For other editors, consult your editor's documentation on reloading the language server.

- Finally, your app folder structure should look similiar to this:

```
your_custom_app/
├── your_custom_app/
│   ├── public/
|   |   ├── css/
│   │   ├── js/
│   │   ├── ts/
│   │   ├── node_modules/
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── ...
└── ...
```

---

## 🎈 Usage <a name="usage"></a>

After setup, you can use the custom DocType and namespace types with full TypeScript support in your client scripts:

```ts
// Example: strong-typed form script while using metadata constants 

import { CorrectionsTracker } from "@anygridtech/frappe-agt-types/agt/doctype/CorrectionsTracker";

const status_options = agt.metadata.doctype.corrections_tracker.status;

frappe.ui.form.on<CorrectionsTracker>('Corrections Tracker', {
  refresh(frm) {
    if (frm.doc.status === status_options.PENDING) {
      // ...
    }
  }
});
```

---

## 🤝 Contributing <a name = "contributing"></a>

This project is maintained internally by AnyGrid Tech. If you are a developer at AnyGrid, please follow the internal contribution guidelines. For external users, feel free to open an issue if you believe there is a bug.

---

## ✍️ Authors <a name = "authors"></a>

- [@anygridtech](https://github.com/anygridtech) – Maintainers
