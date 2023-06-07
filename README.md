# ⚛️ Atomic UI by Atomic React

Atomic UI is a component library for React.

## Setup

To setup your environment for contributing to this repo, you need to setup a monorepo.

You can simply create a monorepo using NPM Workspaces.

Create a root folder and add a `package.json` file. Here is ours:

```json
{
 "name": "atomic-ui",
 "workspaces": {
  "packages": [
   "packages/*",
   "sites/*"
  ]
 }
}
```

Create two directories inside the root folder. One named "packages" and the other named "sites".

The `packages/` folder is used to store the packages projects. You can clone this repository inside the `packages/` folder. The `sites/` folder allows you to create projects for testing your `packages`.

Dont forget to add the `atomic-ui` library inside the `package.json` of your test site !

Like this:

```json
{
 // ...
 "dependencies": {
  "atomic-ui": "*"
  // ...
 }
}
```
