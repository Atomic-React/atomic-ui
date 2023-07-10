# ⚛️ Atomic UI by Atomic React

Atomic UI is a component library based on [Tailwind CSS](https://tailwindcss.com/) for [React](https://react.dev/).

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

## Storybook

```bash
npx storybook@latest init
```

Répondre oui pour la migration du plugin eslint dans le project.

Installer le CLI storybook:

```bash
npm i -D @storybook/cli
```

Il y a des `stories` par défaut dans le dossier `stories/`.

On crée un fichier `Button.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = { // Typage des metadonnées (cela va apparaître dans la side bar)
 title: 'forms/button',
 component: Button,
};

export default meta;

// Typage de la story => On lui donne le type du bouton
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
 args: {
  variant: 'primary',
  children: 'Hello world', 
 }, 
};
```

Tailwind ne semble pas fonctionner...

Ajouter cette ligne dans `storybook/preview.ts`:

```tsx
import '../src/index.css';
```

```tsx
const meta: Meta<typeof Button> = {
 title: 'forms/Button',
 component: Button,
 tags: [ 'autodocs' ], // Ajoute une page de documentation
 argTypes: {
  variant: {
   name: 'variant',
   defaultValue: 'primary',
   description: 'Set the color of the button.',
   control: { type: 'select' },
   options: [ 'primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark' ],
  },
 },
};
```
