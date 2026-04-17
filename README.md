<img width="5236" height="3664" alt="Frame 203 (3)" src="https://github.com/user-attachments/assets/93395eb0-40b9-481e-8163-2178dd532add" />
<img width="1280" height="640" alt="ezgif-60b3e0a166d0e1a5" src="https://github.com/user-attachments/assets/3bee836d-4bde-493e-be3f-73f020d7a55b" />

# Kiwi UI

An open-source React component library built with high-end micro-interactions and modern design. Built on top of React 19, Tailwind CSS v4, and Motion.

## Components

| Category | Components |
|---|---|
| Inputs | AI Input, Input Field, Tag Setter, Color Selector, Checkbox, Toggle, Filter Bar |
| Buttons | Buttons, Environmental Switch |
| Feedback | Alert Toast, Update Toast, Inline Alert |
| Navigation | Dropdown |
| Display | Status Badge, Radial Card |

## Installation

Each component is installed individually via the Kiwi CLI.

**pnpm**
```bash
pnpm dlx kiwi-ui@latest add @kiwi/<component-name>
```

**npm**
```bash
npx kiwi-ui@latest add @kiwi/<component-name>
```

**yarn**
```bash
yarn dlx kiwi-ui@latest add @kiwi/<component-name>
```

**bun**
```bash
bun x kiwi-ui@latest add @kiwi/<component-name>
```

### Example

```bash
pnpm dlx kiwi-ui@latest add @kiwi/ai-input
```

## Usage

```tsx
import { AiInput } from "@/components/kiwi/ai-input"

export default function Page() {
  return <AiInput placeholder="What's on your mind?" />
}
```

## Requirements

- React 19+
- Tailwind CSS v4
- Next.js 13+ (App Router)

## Contributing

Contributions are welcome. Open an issue or submit a pull request at [github.com/kwame999/kiwi-ui](https://github.com/kwame999/kiwi-ui).

## License

MIT
