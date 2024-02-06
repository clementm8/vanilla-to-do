# Netlify CLI

[Getting Started](https://docs.netlify.com/cli/get-started/)

## Installing Netlify CLI

Install Netlify cli globally.
`npm install netlify-cli -g`

## Install Netlify cli locally.

`npm i -D netlify-cli `

# NETLIFY COMMANDS

development build

```bash
  npx netlify dev
```

remote development build

```bash
  npx netlify deploy --build
```

going live on the internet may ask you to pick a repo to build...

```bash
  npx netlify deploy --build --prod
```

## GIT COMMAND LINE

```
   git add .
   git commit -m "commit message"
   git push origin main

```

## Netlify Config File Settings

```toml
 [functions]
  node_bundler = "esbuild"
  directory = "functions/"
  included_files = ["./db/**.json"]

[dev]
  port = 3000
  publish = "dist"

  [[redirects]]
  from = "/api/todos"
  to = "/.netlify/functions/todos"
  status = 200

  [[redirects]]
  from = "/"
  to = "/index.html"
  status = 200


  #  [[redirects]]
  # from = "/todolist"
  # to = "/todolist.html"
  # status = 200

  #   [[redirects]]
  # from = "/todolist.html"
  # to = "/todolist.html"
  # status = 200









```

## Vite Config

```js
/** @type {import('vite').UserConfig} */
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: path.resolve("./index.html"),
				todolist: path.resolve("./todolist.html"),
				notfound: path.resolve("./404.html"),
			},
		},
	},
});
```
