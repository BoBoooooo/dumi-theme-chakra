<p align="center">
  <a href="https://dumi-chakra.deno.dev" target="_blank" rel="noopener noreferrer">
    <img style="max-width: 100%" src="https://cdn.jsdelivr.net/gh/innocces/dumi-theme-chakra/media/dumi-theme-chakra.png" alt="dumi-theme-chakra logo" />
  </a>
  <br />
  <h3 align="center">
  <span>
    <a>English</a> | 
    <a href="./README.CN.md">Chinese</a>
  </span>
  <h3>
</p>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/dumi-theme-chakra"><img src="https://img.shields.io/npm/v/dumi-theme-chakra" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/dumi-theme-chakra" alt="node compatibility"></a>
  <a href="https://github.com/innocces/dumi-theme-chakra/actions/workflows/deploy-deno.yml"><img src="https://github.com/innocces/dumi-theme-chakra/actions/workflows/deploy-deno.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://discord.gg/N82HK72uJk"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br />
<div align="center">
  <p>Chakra theme for dumi2<p>
</div>

## Usage

```bash
# npm
$ npm i dumi-theme-chakra -D
# yarn
$ yarn add dumi-theme-chakra -D
# pnpm
$ pnpm add dumi-theme-chakra -D
```

## Configure

configure it in dumi config file `.dumirc.ts`:

```ts
import { defineConfig } from 'dumi';
import defineThemeConfig from 'dumi-theme-chakra/factory/defineThemeConfig.ts'

export defineConfig({
  themeConfig: {
    ...defineThemeConfig({
      // ...
    })
  },
});
```

## Options

```tsx

```

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsoring

<table>
  <tr align="center">
    <td>
      <a href="https://www.buymeacoffee.com/innocces" target="_blank">
        <img width="120" src="https://api.iconify.design/simple-icons:buymeacoffee.svg">
      </a>
    </td>
    <td>
      <a href="https://afdian.net/a/innocces" target="_blank">
        <img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-12-04/1670124736895-afdian.png">
      </a>
    </td>
  </tr>
</table>