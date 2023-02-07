---
id: intro
title: Introduction
---
# **Bee UI**

[![v.0.0.1](https://img.shields.io/badge/Bee%20UI-0.0.1-blue.svg)](https://github.com/xirosoft/bee-ui)
[![MIT License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT)

## **Bee UI** is a lightweight **SCSS** based UI Framework. You can use, manage and contribute with it in easyest way...

## Features

-   **Beautiful Components** ─ text
-   **Lightweight** ─ text
-   **Responsive** ─ text
-   **Zero-dependency** ─ text

## Install

Shown install method

## How to Use

If you want to use all of our compmonent, just add this **CDN** inside of your `<head></head>` block.

```html
<link rel="stylesheet" href="https://www.xirosoft.com/bee-ui/dist/css/bee-ui.all.min.css" />
```

If you want to use single or some number of components.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Image-box - Bee UI</title>

        <!-- Bee UI CDN -->
        <link rel="stylesheet" href="https://www.xirosoft.com/bee-ui/dist/css/beeui.all.min.css" />
        <link rel="stylesheet" href="https://www.xirosoft.com/bee-ui/dist/css/components/image-box.css" />
    </head>
    <body>
        <div class="image-box">
            <div class="image-box-header">
                <img src="image-box.webp" alt="image-box-header" />
            </div>
            <div class="image-box-content">
                <h2 class="image-box-title">
                    <a href="#">This is an <strong>image box</strong></a>
                </h2>
                <div class="image-box-desc">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, debitis!</p>
                </div>
            </div>
        </div>
    </body>
</html>
```

## Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/xirosoft/bee-ui)
[<img src="https://svgshare.com/i/pKC.svg" width="165px" />](https://vscode.dev/github/xirosoft/bee-ui)


Or clone locally:

```bash
$ git clone https://github.com/xirosoft/bee-ui.git
$ cd bee-ui
$ npm install
$ npm watch
```

## Folder Structure of **Bee UI**

    .
    ├── dist/                       # Compiled files
        └── components/             # Compiled Components
    ├── docs/                       # Documentation
    └── src/                        # Source
        ├── builds/                 #
        ├── components/             # Components
        ├── internal/               # Function, mixin, theme...
        └── utils/                  # SCSS Utils styles
        ├── bee-all.scss            #
        └── bee-core.scss           #


## Contributors

This project exists thanks to all the people who contribute. [[Contribute](https://github.com/xirosoft/bee-ui/graphs/contributors)].

[<img src="https://contrib.rocks/image?repo=veler/DevToys" />](https://github.com/xirosoft/bee-ui/graphs/contributors)


## ❤️ Sponsors and Backers

Themefy

## Cradits

-   Folder Stucture : [Cirrus](https://github.com/Spiderpig86/Cirrus)
