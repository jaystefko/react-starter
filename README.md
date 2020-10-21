# Welcome

Hello :)  
It is a boilerplate to use for future projects starting.  
I will try to cover up as much as i can to make it easy to re-adjust.  
If you have some comments or you want to work on it with me just write to me :)  
My email address is jakub.stefko[at]gmail.com  

# Manual

0. Install make and nodejs && create `.env` file in root project directory with defined API adress that you want to ask
1. Enter `make install` (if you are using latest node version webpack will throw warnings - ignore them)
2. Now you have few possibilities:

   - make start - starts the development server (using webpack, no hot module added so you have to refresh after changes - I don't see this as a problem for now, https://github.com/gaearon/react-hot-loader if u need to have it)
   - make build - bundles the app into static production build in './dist' directory

# Requirements

0. nodejs v10+ (if you need library for easy nodejs version menagement i highly reccomand checking uot https://www.npmjs.com/package/n)
1. make

# Contributor List

1. Jakub Stefko

# TODO

0. Build core project body using installed libraries [WIP]
1. Add some testing library with manual 4 usage (jest?) + script for testing in package.json 
2. Read about manifest.json and robots.txt and decide do i need to use them in project
3. Provide css feature-detection for styles that will be written (i hope that babel + webpack cares about js stubbing)
4. Adjust boilerplate to WCAG as much as you could
5. Theme changer
6. Language changer
7. Set developement start from make (env variables and everything so that you don't have to mess with js to run this piece of crap) [WIP]
