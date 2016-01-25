# [AvNJS v1.0.0](http://selcet.com)
###Accordion via native JS

Accordion via native JS codding was realised as completing test issue for entering,
[Loftschool.com](http://Loftschool.com) course - [Comprehensive training JAVASCRIPT](http://loftschool.com/course/javascript).

## Environment Tools
- NodeJS (for downloading visit page - https://nodejs.org/en/download/)
- Gulp:
 - *for install Gulp globally - run command in terminal* `$ sudo npm install gulp -g` *and* 
 - *from within project folder for local installation* `$ npm install gulp --save-dev`
- Gulp modules
 - *run file*:
`./gulpCompile.sh` **- for MacOS or Linux system and**.
`gulpCompile.bat` **for WindowsOS**.
- *run file*
  - `./gulpCompile.sh` **- for MacOS or Linux system and**
  - `gulpCompile.bat` **for WindowsOS**

## Running page

Just run 

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org.

## Author
- Email: dave@fontawesome.io
- Twitter: http://twitter.com/davegandy
- GitHub: https://github.com/davegandy

## Component
To include as a [component](http://github.com/component/component), just run

    $ component install FortAwesome/Font-Awesome

Or add

    "FortAwesome/Font-Awesome": "*"

to the `dependencies` in your `component.json`.

## Hacking on Font Awesome

**Before you can build the project**, you must first have the following installed:

- [Ruby](https://www.ruby-lang.org/en/)
- Ruby Development Headers
  - **Ubuntu:** `sudo apt-get install ruby-dev` *(Only if you're __NOT__ using `rbenv` or `rvm`)*
  - **Windows:** [DevKit](http://rubyinstaller.org/)
- [Bundler](http://bundler.io/) (Run `gem install bundler` to install).
- [Node Package Manager (AKA NPM)](https://docs.npmjs.com/getting-started/installing-node)
- [Less](http://lesscss.org/) (Run `npm install -g less` to install).
- [Less Plugin: Clean CSS](https://github.com/less/less-plugin-clean-css) (Run `npm install -g less-plugin-clean-css` to install).

From the root of the repository, install the tools used to develop.

    $ bundle install
    $ npm install

Build the project and documentation:

    $ bundle exec jekyll build

Or serve it on a local server on http://localhost:7998/Font-Awesome/:

    $ bundle exec jekyll -w serve
