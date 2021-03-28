# fireact 🔥🎭

## Introduction

This repository contains code for safely starting with react in 2021.

## Installation

1. Install git (https://github.com/git-guides/install-git)
1. install nodejs (https://nodejs.org/en/download/) ~  
   _I am currently working on version 14.16, cannot assure that all node versions will work same_
1. Type in the console: `npm install -g yarn`
1. Type in the console: `yarn set version berry`
1. Type in the console:  
   `git clone git@github.com:JakubStefko/fireact.git`
1. Type in the console: `cd fireact`

## Usage

Inside that directory, you can run several commands:

- **yarn start**

  - _Starts the development server._

- **yarn build**

  - _Bundles the app into static files for production._

- **yarn test**

  - _Starts the test runner._

- **yarn eject**
  - _Removes this tool and copies build dependencies, configuration files  
    and scripts into the app directory. If you do this, you can’t go back!_

## Project structure

- **public** ~ _files in this folder will be packed directly to the server, not preprocessed by any packager_
  - **index.html** ~ _one and only html file_
  - **manifest.json** ~ _file describing your app when installed on desktop or mobile as shortcut to web page (tldr: https://web.dev/progressive-web-apps/)_
  - **robots.txt** ~ _file describing availability of your site to bots like google search etc (pure SEO purposes, tldr: https://www.robotstxt.org/robotstxt.html)_
  - **icons** ~ _folder with icons for each device. why so many of them and why those specific sizes? -> _

## Thanks to

- My thesis supervisor for mentoring me in master's degree process
- [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/) for making fire icon
- Everyone who let me know about some issue or possible weakness in project

## TODO list

- typescript version
