# pino-browser

The `browser` field of the `pino` `package.json` file is not respected.

To reproduce:

```aidl
yarn install
yarn build
```

(It will give all kinds of errors, since it's incorrectly using `pino.js` instead of `browser.js`.

To see it work properly:

Edit `.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/package.json` and change the `main` field to point to `browser.js`

```aidl
yarn build
```

And it will work.


Version info:

```aidl
yarn info esbuild
└─ esbuild@npm:0.14.18
   ├─ Version: 0.14.18
   │
   ├─ Exported Binaries
   │  └─ esbuild
   │
   └─ Dependencies
      ├─ esbuild-android-arm64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-darwin-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-darwin-arm64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-freebsd-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-freebsd-arm64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-32@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-arm64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-arm@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-mips64le@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-ppc64le@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-linux-s390x@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-netbsd-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-openbsd-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-sunos-64@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-windows-32@npm:0.14.18 → npm:0.14.18
      ├─ esbuild-windows-64@npm:0.14.18 → npm:0.14.18
      └─ esbuild-windows-arm64@npm:0.14.18 → npm:0.14.18
```
