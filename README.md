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
- [Setup](#setup)
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

- A working Frappe development environment.
- Your project must be configured for TypeScript and already use `@anygridtech/frappe-types`.

```bash
# Make sure you have TypeScript and the base Frappe types
npm install typescript @anygridtech/frappe-types
npx tsc --init
```

---

## 📥 Installation <a name = "installation"></a>

Install as a dev dependency alongside the base types:

```bash
# npm
npm install @anygridtech/frappe-agt-types

# yarn
yarn add @anygridtech/frappe-agt-types

# pnpm
pnpm add @anygridtech/frappe-agt-types
```

---

## ⚙️ Setup <a name = "setup"></a>

Add this package to your `tsconfig.json` to make the global types available across your project.

```json
{
  "compilerOptions": {
    "types": [
      "jquery",
      "@anygridtech/frappe-types",
      "@anygridtech/frappe-agt-types"
    ]
  }
}
```

⚠️ Remember: when you define the `types` array, you must explicitly list all global type packages your project uses.

---

## 🎈 Usage <a name="usage"></a>

After setup, you can use the custom DocType and namespace types with full TypeScript support in your client scripts:

```ts
// Example: Accessing a custom field in a Corrections Tracker form
import { CorrectionsTracker } from '@anygridtech/frappe-agt-types';

frappe.ui.form.on<CorrectionsTracker>('Corrections Tracker', {
  refresh(frm) {
    // frm.doc is now strongly-typed as CorrectionsTracker
    if (frm.doc.custom_status === 'Pending') {
      // Autocomplete works for custom fields!
      frm.set_intro("This record needs review.");
    }
  }
});

// Example: Calling a custom client utility
agt.client.utils.doc.get_linked_doc('Ticket', 'TICKET-001', 'Service Protocol');
```

---

## 🤝 Contributing <a name = "contributing"></a>

This project is maintained internally by AnyGrid Tech. If you are a developer at AnyGrid, please follow the internal contribution guidelines. For external users, feel free to open an issue if you believe there is a bug.

---

## ✍️ Authors <a name = "authors"></a>

- [@anygridtech](https://github.com/anygridtech) – Maintainers
