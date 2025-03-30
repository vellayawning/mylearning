The first thing you need to do is start the terminal. Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type echo hello terminal into the terminal and press enter.


camper: /project$ echo hello terminal
hello terminal
camper: /project$ pwd
/workspace/project
camper: /project$ ls
freeCodeCamp
camper: /project$ 
camper: /project$ cd freeCodeCamc
bash: cd: freeCodeCamc: No such file or directory
camper: /project$ cd freeCodeCamp/
camper: /freeCodeCamp$ pwd
/workspace/project/freeCodeCamp
camper: /freeCodeCamp$ ls
node_modules  package.json  package-lock.json  reset.sh  setup.sh  test
camper: /freeCodeCamp$ cd test
camper: /test$ pwd
/workspace/project/freeCodeCamp/test
camper: /test$ ls
1000.test.js  1090.test.js  1200.test.js  1290.test.js  1390.test.js  1470.test.js  181.test.js  250.test.js  350.test.js  460.test.js  570.test.js  660.test.js  760.test.js  90.test.js
100.test.js   10.test.js    120.test.js   1300.test.js  1400.test.js  1475.test.js  182.test.js  260.test.js  360.test.js  470.test.js  580.test.js  670.test.js  770.test.js  910.test.js
1010.test.js  1100.test.js  1210.test.js  130.test.js   1405.test.js  1480.test.js  183.test.js  270.test.js  370.test.js  480.test.js  585.test.js  680.test.js  780.test.js  920.test.js
1020.test.js  110.test.js   1215.test.js  1310.test.js  140.test.js   1490.test.js  184.test.js  280.test.js  380.test.js  490.test.js  590.test.js  690.test.js  790.test.js  930.test.js
1030.test.js  1110.test.js  1220.test.js  1315.test.js  1410.test.js  1500.test.js  185.test.js  285.test.js  390.test.js  500.test.js  5.test.js    700.test.js  800.test.js  940.test.js
1040.test.js  1120.test.js  1230.test.js  1320.test.js  1415.test.js  150.test.js   190.test.js  290.test.js  400.test.js  50.test.js   600.test.js  70.test.js   80.test.js   950.test.js
1050.test.js  1130.test.js  1240.test.js  1330.test.js  1420.test.js  1510.test.js  200.test.js  300.test.js  40.test.js   510.test.js  60.test.js   710.test.js  850.test.js  960.test.js
1055.test.js  1135.test.js  1250.test.js  1340.test.js  1430.test.js  1520.test.js  20.test.js   30.test.js   410.test.js  520.test.js  610.test.js  720.test.js  860.test.js  970.test.js
1060.test.js  1150.test.js  1260.test.js  1350.test.js  1440.test.js  1530.test.js  210.test.js  310.test.js  420.test.js  530.test.js  620.test.js  730.test.js  870.test.js  980.test.js
1065.test.js  1170.test.js  1270.test.js  1360.test.js  1445.test.js  160.test.js   220.test.js  320.test.js  430.test.js  540.test.js  630.test.js  740.test.js  880.test.js  990.test.js
1070.test.js  1190.test.js  1275.test.js  1370.test.js  1450.test.js  170.test.js   230.test.js  330.test.js  440.test.js  550.test.js  640.test.js  750.test.js  890.test.js  utils.js
1080.test.js  1195.test.js  1280.test.js  1380.test.js  1460.test.js  180.test.js   240.test.js  340.test.js  450.test.js  560.test.js  650.test.js  755.test.js  900.test.js
camper: /test$ cd ../
camper: /freeCodeCamp$ ls
node_modules  package.json  package-lock.json  reset.sh  setup.sh  test
camper: /freeCodeCamp$ more package.json 
{
  "name": "freecodecamp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "programmatic-test": "mocha --config .mocharc.json",
    "test": "mocha --config .mocharc.json"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "mocha": "^7.2.0",
    "mocha-tap-reporter": "^0.1.3",
    "shell-quote": "^1.7.2"
  }
}
camper: /freeCodeCamp$ clear
camper: /freeCodeCamp$ ls
node_modules  package.json  package-lock.json  reset.sh  setup.sh  test
camper: /freeCodeCamp$ cd node_modules/
camper: /node_modules$ ls
ansi-colors        cliui                 fill-range       inflight                 js-yaml                 object.getownpropertydescriptors  semver                      wide-align
ansi-regex         color-convert         find-up          inherits                 locate-path             object-inspect                    set-blocking                wrap-ansi
ansi-styles        color-name            flat             is-binary-path           lodash                  object-keys                       shell-quote                 wrappy
anymatch           concat-map            fs.realpath      is-buffer                log-symbols             once                              sprintf-js                  y18n
argparse           debug                 function-bind    is-callable              minimatch               path-exists                       string.prototype.trimend    yargs
balanced-match     decamelize            get-caller-file  is-date-object           minimist                path-is-absolute                  string.prototype.trimstart  yargs-parser
binary-extensions  define-properties     glob             isexe                    mkdirp                  picomatch                         string-width                yargs-unparser
brace-expansion    diff                  glob-parent      is-extglob               mocha                   p-limit                           strip-ansi
braces             emoji-regex           growl            is-fullwidth-code-point  mocha-tap-reporter      p-locate                          strip-json-comments
browser-stdout     es-abstract           has              is-glob                  ms                      p-try                             supports-color
camelcase          escape-string-regexp  has-flag         is-number                node-environment-flags  readdirp                          to-regex-range
chalk              esprima               has-symbols      is-regex                 normalize-path          require-directory                 which
chokidar           es-to-primitive       he               is-symbol                object.assign           require-main-filename             which-module
camper: /node_modules$ ls -l
total 80
drwxr-xr-x  3 gitpod gitpod   105 Apr 24 18:21 ansi-colors
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 ansi-regex
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 ansi-styles
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 anymatch
drwxr-xr-x  3 gitpod gitpod   105 Apr 24 18:21 argparse
drwxr-xr-x  2 gitpod gitpod    95 Apr 24 18:21 balanced-match
drwxr-xr-x  2 gitpod gitpod   157 Apr 24 18:21 binary-extensions
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 brace-expansion
drwxr-xr-x  3 gitpod gitpod   105 Apr 24 18:21 braces
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 browser-stdout
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 camelcase
drwxr-xr-x  4 gitpod gitpod   148 Apr 24 18:21 chalk
drwxr-xr-x  4 gitpod gitpod    98 Apr 24 18:21 chokidar
drwxr-xr-x  3 gitpod gitpod   118 Apr 24 18:21 cliui
drwxr-xr-x  2 gitpod gitpod   132 Apr 24 18:21 color-convert
drwxr-xr-x  2 gitpod gitpod   129 Apr 24 18:21 color-name
drwxr-xr-x  4 gitpod gitpod   126 Apr 24 18:21 concat-map
drwxr-xr-x  4 gitpod gitpod   116 Apr 24 18:21 debug
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 decamelize
drwxr-xr-x  3 gitpod gitpod   181 Apr 24 18:21 define-properties
drwxr-xr-x  4 gitpod gitpod   163 Apr 24 18:21 diff
drwxr-xr-x  3 gitpod gitpod   129 Apr 24 18:21 emoji-regex
drwxr-xr-x 12 gitpod gitpod  4096 Apr 24 18:21 es-abstract
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 escape-string-regexp
drwxr-xr-x  4 gitpod gitpod   102 Apr 24 18:21 esprima
drwxr-xr-x  5 gitpod gitpod  4096 Apr 24 18:21 es-to-primitive
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 fill-range
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 find-up
drwxr-xr-x  3 gitpod gitpod   119 Apr 24 18:21 flat
drwxr-xr-x  2 gitpod gitpod    88 Apr 24 18:21 fs.realpath
drwxr-xr-x  3 gitpod gitpod  4096 Apr 24 18:21 function-bind
drwxr-xr-x  2 gitpod gitpod   115 Apr 24 18:21 get-caller-file
drwxr-xr-x  2 gitpod gitpod   125 Apr 24 18:21 glob
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 glob-parent
drwxr-xr-x  3 gitpod gitpod   155 Apr 24 18:21 growl
drwxr-xr-x  4 gitpod gitpod    85 Apr 24 18:21 has
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 has-flag
drwxr-xr-x  4 gitpod gitpod   173 Apr 24 18:21 has-symbols
drwxr-xr-x  4 gitpod gitpod   101 Apr 24 18:21 he
drwxr-xr-x  2 gitpod gitpod    77 Apr 24 18:21 inflight
drwxr-xr-x  2 gitpod gitpod   104 Apr 24 18:21 inherits
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 is-binary-path
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 is-buffer
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 is-callable
drwxr-xr-x  4 gitpod gitpod   175 Apr 24 18:21 is-date-object
drwxr-xr-x  3 gitpod gitpod   137 Apr 24 18:21 isexe
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 is-extglob
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 is-fullwidth-code-point
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 is-glob
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 is-number
drwxr-xr-x  4 gitpod gitpod   178 Apr 24 18:21 is-regex
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 is-symbol
drwxr-xr-x  5 gitpod gitpod   128 Apr 24 18:21 js-yaml
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 locate-path
drwxr-xr-x  3 gitpod gitpod 20480 Apr 24 18:21 lodash
drwxr-xr-x  2 gitpod gitpod   110 Apr 24 18:21 log-symbols
drwxr-xr-x  2 gitpod gitpod    78 Apr 24 18:21 minimatch
drwxr-xr-x  4 gitpod gitpod   126 Apr 24 18:21 minimist
drwxr-xr-x  3 gitpod gitpod    91 Apr 24 18:21 mkdirp
drwxr-xr-x  5 gitpod gitpod   187 Apr 24 18:21 mocha
drwxr-xr-x  3 gitpod gitpod    70 Apr 24 18:21 mocha-tap-reporter
drwxr-xr-x  2 gitpod gitpod    77 Apr 24 18:21 ms
drwxr-xr-x  2 gitpod gitpod   151 Apr 24 18:21 node-environment-flags
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 normalize-path
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 object.assign
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 object.getownpropertydescriptors
drwxr-xr-x  5 gitpod gitpod  4096 Apr 24 18:21 object-inspect
drwxr-xr-x  3 gitpod gitpod  4096 Apr 24 18:21 object-keys
drwxr-xr-x  2 gitpod gitpod    73 Apr 24 18:21 once
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 path-exists
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 path-is-absolute
drwxr-xr-x  3 gitpod gitpod   105 Apr 24 18:21 picomatch
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 p-limit
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 p-locate
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 p-try
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 readdirp
drwxr-xr-x  2 gitpod gitpod   134 Apr 24 18:21 require-directory
drwxr-xr-x  2 gitpod gitpod    98 Apr 24 18:21 require-main-filename
drwxr-xr-x  3 gitpod gitpod   123 Apr 24 18:21 semver
drwxr-xr-x  2 gitpod gitpod    98 Apr 24 18:21 set-blocking
drwxr-xr-x  4 gitpod gitpod   146 Apr 24 18:21 shell-quote
drwxr-xr-x  6 gitpod gitpod   161 Apr 24 18:21 sprintf-js
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 string.prototype.trimend
drwxr-xr-x  4 gitpod gitpod  4096 Apr 24 18:21 string.prototype.trimstart
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 string-width
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 strip-ansi
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 strip-json-comments
drwxr-xr-x  2 gitpod gitpod    92 Apr 24 18:21 supports-color
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 to-regex-range
drwxr-xr-x  3 gitpod gitpod   105 Apr 24 18:21 which
drwxr-xr-x  2 gitpod gitpod    94 Apr 24 18:21 which-module
drwxr-xr-x  2 gitpod gitpod    74 Apr 24 18:21 wide-align
drwxr-xr-x  3 gitpod gitpod    94 Apr 24 18:21 wrap-ansi
drwxr-xr-x  2 gitpod gitpod    75 Apr 24 18:21 wrappy
drwxr-xr-x  2 gitpod gitpod    94 Apr 24 18:21 y18n
drwxr-xr-x  5 gitpod gitpod   156 Apr 24 18:21 yargs
drwxr-xr-x  3 gitpod gitpod   109 Apr 24 18:21 yargs-parser
drwxr-xr-x  2 gitpod gitpod    94 Apr 24 18:21 yargs-unparser
camper: /node_modules$ cd has
camper: /node_modules$ cd has
camper: /has$ ls
LICENSE-MIT  package.json  README.md  src  test
camper: /has$ more README.md 
# has

> Object.prototype.hasOwnProperty.call shortcut

## Installation

```sh
npm install --save has
```

## Usage

```js
var has = require('has');

has({}, 'hasOwnProperty'); // false
has(Object.prototype, 'hasOwnProperty'); // true
```
camper: /has$ ls
LICENSE-MIT  package.json  README.md  src  test
camper: /has$ more LICENSE-MIT 
Copyright (c) 2013 Thiago de Arruda

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
camper: /has$ clear
camper: /has$ ls
LICENSE-MIT  package.json  README.md  src  test
camper: /has$ cd src/
camper: /src$ pwd
/workspace/project/freeCodeCamp/node_modules/has/src
camper: /src$ 
camper: /src$ ls
index.js
camper: /src$ more index.js 
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
camper: /src$ cd ../
camper: /has$ ls
LICENSE-MIT  package.json  README.md  src  test
camper: /has$ cd ../
camper: /node_modules$ pwd
/workspace/project/freeCodeCamp/node_modules
camper: /node_modules$ cd ../
camper: /freeCodeCamp$ cd ../
camper: /project$ pwd
/workspace/project
camper: /project$ cd freeCodeCamp/node_modules/
camper: /node_modules$ cd ../../
camper: /project$ ls
freeCodeCamp  test.md
camper: /project$ mkdir website
camper: /project$ ls
freeCodeCamp  test.md  website
camper: /project$ cd website/
camper: /website$ ls
camper: /website$ ls
camper: /website$ echo hello website
hello website
camper: /website$ touch index.html
camper: /website$ touch styles.css
camper: /website$ ls
index.html  styles.css
camper: /website$ touch index.js
camper: /website$ touch .gitignore
camper: /website$ ls
index.html  index.js  styles.css
camper: /website$ ls --help
Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
  -b, --escape               print C-style escapes for nongraphic characters
      --block-size=SIZE      with -l, scale sizes by SIZE when printing them;
                               e.g., '--block-size=M'; see SIZE format below
  -B, --ignore-backups       do not list implied entries ending with ~
  -c                         with -lt: sort by, and show, ctime (time of last
                               modification of file status information);
                               with -l: show ctime and sort by name;
                               otherwise: sort by ctime, newest first
  -C                         list entries by columns
      --color[=WHEN]         colorize the output; WHEN can be 'always' (default
                               if omitted), 'auto', or 'never'; more info below
  -d, --directory            list directories themselves, not their contents
  -D, --dired                generate output designed for Emacs' dired mode
  -f                         do not sort, enable -aU, disable -ls --color
  -F, --classify             append indicator (one of */=>@|) to entries
      --file-type            likewise, except do not append '*'
      --format=WORD          across -x, commas -m, horizontal -x, long -l,
                               single-column -1, verbose -l, vertical -C
      --full-time            like -l --time-style=full-iso
  -g                         like -l, but do not list owner
      --group-directories-first
                             group directories before files;
                               can be augmented with a --sort option, but any
                               use of --sort=none (-U) disables grouping
  -G, --no-group             in a long listing, don't print group names
  -h, --human-readable       with -l and -s, print sizes like 1K 234M 2G etc.
      --si                   likewise, but use powers of 1000 not 1024
  -H, --dereference-command-line
                             follow symbolic links listed on the command line
      --dereference-command-line-symlink-to-dir
                             follow each command line symbolic link
                               that points to a directory
      --hide=PATTERN         do not list implied entries matching shell PATTERN
                               (overridden by -a or -A)
      --hyperlink[=WHEN]     hyperlink file names; WHEN can be 'always'
                               (default if omitted), 'auto', or 'never'
      --indicator-style=WORD  append indicator with style WORD to entry names:
                               none (default), slash (-p),
                               file-type (--file-type), classify (-F)
  -i, --inode                print the index number of each file
  -I, --ignore=PATTERN       do not list implied entries matching shell PATTERN
  -k, --kibibytes            default to 1024-byte blocks for disk usage;
                               used only with -s and per directory totals
  -l                         use a long listing format
  -L, --dereference          when showing file information for a symbolic
                               link, show information for the file the link
                               references rather than for the link itself
  -m                         fill width with a comma separated list of entries
  -n, --numeric-uid-gid      like -l, but list numeric user and group IDs
  -N, --literal              print entry names without quoting
  -o                         like -l, but do not list group information
  -p, --indicator-style=slash
                             append / indicator to directories
  -q, --hide-control-chars   print ? instead of nongraphic characters
      --show-control-chars   show nongraphic characters as-is (the default,
                               unless program is 'ls' and output is a terminal)
  -Q, --quote-name           enclose entry names in double quotes
      --quoting-style=WORD   use quoting style WORD for entry names:
                               literal, locale, shell, shell-always,
                               shell-escape, shell-escape-always, c, escape
                               (overrides QUOTING_STYLE environment variable)
  -r, --reverse              reverse order while sorting
  -R, --recursive            list subdirectories recursively
  -s, --size                 print the allocated size of each file, in blocks
  -S                         sort by file size, largest first
      --sort=WORD            sort by WORD instead of name: none (-U), size (-S),
                               time (-t), version (-v), extension (-X)
      --time=WORD            change the default of using modification times;
                               access time (-u): atime, access, use;
                               change time (-c): ctime, status;
                               birth time: birth, creation;
                             with -l, WORD determines which time to show;
                             with --sort=time, sort by WORD (newest first)
      --time-style=TIME_STYLE  time/date format with -l; see TIME_STYLE below
  -t                         sort by time, newest first; see --time
  -T, --tabsize=COLS         assume tab stops at each COLS instead of 8
  -u                         with -lt: sort by, and show, access time;
                               with -l: show access time and sort by name;
                               otherwise: sort by access time, newest first
  -U                         do not sort; list entries in directory order
  -v                         natural sort of (version) numbers within text
  -w, --width=COLS           set output width to COLS.  0 means no limit
  -x                         list entries by lines instead of by columns
  -X                         sort alphabetically by entry extension
  -Z, --context              print any security context of each file
  -1                         list one file per line.  Avoid '\n' with -q or -b
      --help     display this help and exit
      --version  output version information and exit

The SIZE argument is an integer and optional unit (example: 10K is 10*1024).
Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,... (powers of 1000).
Binary prefixes can be used, too: KiB=K, MiB=M, and so on.

The TIME_STYLE argument can be full-iso, long-iso, iso, locale, or +FORMAT.
FORMAT is interpreted like in date(1).  If FORMAT is FORMAT1<newline>FORMAT2,
then FORMAT1 applies to non-recent files and FORMAT2 to recent files.
TIME_STYLE prefixed with 'posix-' takes effect only outside the POSIX locale.
Also the TIME_STYLE environment variable sets the default style to use.

Using color to distinguish file types is disabled both by default and
with --color=never.  With --color=auto, ls emits color codes only when
standard output is connected to a terminal.  The LS_COLORS environment
variable can change the settings.  Use the dircolors command to set it.

Exit status:
 0  if OK,
 1  if minor problems (e.g., cannot access subdirectory),
 2  if serious trouble (e.g., cannot access command-line argument).

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Full documentation <https://www.gnu.org/software/coreutils/ls>
or available locally via: info '(coreutils) ls invocation'
camper: /website$ ls -a
.  ..  .gitignore  index.html  index.js  styles.css
camper: /website$ cd .
camper: /website$ touch background,jpg
camper: /website$ touch background.jpg
camper: /website$ touch header.jpg
camper: /website$ rm header.jpg 
camper: /website$ rm header.png
rm: cannot remove 'header.png': No such file or directory
camper: /website$ touch header.png
camper: /website$ touch footer.jpeg
camper: /website$ ls
background,jpg  background.jpg  footer.jpeg  header.png  index.html  index.js  styles.css
camper: /website$ ls
background,jpg  background.jpg  footer.jpeg  header.png  index.html  index.js  styles.css
camper: /project$ ls
freeCodeCamp  website
camper: /project$ cd website/
camper: /website$ ls
background.jpg  footer.jpeg  header.png  index.html  index.js  roboto.font  styles.css
camper: /website$ touch lato.font
camper: /website$ touch menlo.font
camper: /website$ ls
background.jpg  footer.jpeg  header.png  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ touch CodeAlly.svg
camper: /website$ touch CodeRoad.svg
camper: /website$ touch freeCodeCamp.svg
camper: /website$ ls
background.jpg  CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ mkdir images
camper: /website$ ls
background.jpg  CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ cp background.jpg images/
camper: /website$ cd images/
camper: /images$ ls
background.jpg
camper: /images$ cd ../
camper: /website$ ls
background.jpg  CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ rm background.jpg 
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ ls images/
background.jpg
camper: /website$ ll
bash: ll: command not found
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ cp header.png images/
camper: /website$ cp footer.jpeg images/
camper: /website$ cd images/
camper: /images$ ls
background.jpg  footer.jpeg  header.png
camper: /images$ cd ../
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  footer.jpeg  freeCodeCamp.svg  header.png  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ rm header.png footer.jpeg 
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  freeCodeCamp.svg  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ touch footer.jpeg
camper: /website$ rm footer.jpeg 
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  freeCodeCamp.svg  images  index.html  index.js  lato.font  menlo.font  roboto.font  styles.css
camper: /website$ mv roboto.font roboto.woff
camper: /website$ 
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  freeCodeCamp.svg  images  index.html  index.js  lato.font  menlo.font  roboto.woff  styles.css
camper: /website$ mv lato.font lato.ttf
camper: /website$ mv menlo.font menlo.otf
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  freeCodeCamp.svg  images  index.html  index.js  lato.ttf  menlo.otf  roboto.woff  styles.css
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  freeCodeCamp.svg  images  index.html  index.js  lato.ttf  menlo.otf  roboto.woff  styles.css
camper: /website$ mkdir fonts
camper: /website$ ls
CodeAlly.svg  CodeRoad.svg  fonts  freeCodeCamp.svg  images  index.html  index.js  lato.ttf  menlo.otf  roboto.woff  styles.css
camper: /website$ mv roboto.woff fonts/
camper: /website$ find 
.
./.gitignore
./index.html
./index.js
./styles.css
./CodeAlly.svg
./CodeRoad.svg
./freeCodeCamp.svg
./images
./images/background.jpg
./images/header.png
./images/footer.jpeg
./lato.ttf
./menlo.otf
./fonts
./fonts/roboto.woff
camper: /website$ mv lato.ttf fonts/
camper: /website$ mv menlo.otf fonts/
camper: /website$ find
.
./.gitignore
./index.html
./index.js
./styles.css
./CodeAlly.svg
./CodeRoad.svg
./freeCodeCamp.svg
./images
./images/background.jpg
./images/header.png
./images/footer.jpeg
./fonts
./fonts/roboto.woff
./fonts/lato.ttf
./fonts/menlo.otf
camper: /website$ mkdor client
bash: mkdor: command not found
camper: /website$ mkdir client
camper: /website$ mkdir client/src
camper: /website$ mv index.html client/src/
camper: /website$ find
.
./.gitignore
./index.js
./styles.css
./CodeAlly.svg
./CodeRoad.svg
./freeCodeCamp.svg
./images
./images/background.jpg
./images/header.png
./images/footer.jpeg
./fonts
./fonts/roboto.woff
./fonts/lato.ttf
./fonts/menlo.otf
./client
./client/src
./client/src/index.html
camper: /website$ mv index.js client/src/
camper: /website$ mv styles.css client/src/
camper: /website$ find
.
./.gitignore
./CodeAlly.svg
./CodeRoad.svg
./freeCodeCamp.svg
./images
./images/background.jpg
./images/header.png
./images/footer.jpeg
./fonts
./fonts/roboto.woff
./fonts/lato.ttf
./fonts/menlo.otf
./client
./client/src
./client/src/index.html
./client/src/index.js
./client/src/styles.css
camper: /website$ find client/
client/
client/src
client/src/index.html
client/src/index.js
client/src/styles.css
camper: /website$ find --help
Usage: find [-H] [-L] [-P] [-Olevel] [-D debugopts] [path...] [expression]

default path is the current directory; default expression is -print
expression may consist of: operators, options, tests, and actions:
operators (decreasing precedence; -and is implicit where no others are given):
      ( EXPR )   ! EXPR   -not EXPR   EXPR1 -a EXPR2   EXPR1 -and EXPR2
      EXPR1 -o EXPR2   EXPR1 -or EXPR2   EXPR1 , EXPR2
positional options (always true): -daystart -follow -regextype

normal options (always true, specified before other expressions):
      -depth --help -maxdepth LEVELS -mindepth LEVELS -mount -noleaf
      --version -xdev -ignore_readdir_race -noignore_readdir_race
tests (N can be +N or -N or N): -amin N -anewer FILE -atime N -cmin N
      -cnewer FILE -ctime N -empty -false -fstype TYPE -gid N -group NAME
      -ilname PATTERN -iname PATTERN -inum N -iwholename PATTERN -iregex PATTERN
      -links N -lname PATTERN -mmin N -mtime N -name PATTERN -newer FILE
      -nouser -nogroup -path PATTERN -perm [-/]MODE -regex PATTERN
      -readable -writable -executable
      -wholename PATTERN -size N[bcwkMG] -true -type [bcdpflsD] -uid N
      -used N -user NAME -xtype [bcdpfls]      -context CONTEXT

actions: -delete -print0 -printf FORMAT -fprintf FILE FORMAT -print 
      -fprint0 FILE -fprint FILE -ls -fls FILE -prune -quit
      -exec COMMAND ; -exec COMMAND {} + -ok COMMAND ;
      -execdir COMMAND ; -execdir COMMAND {} + -okdir COMMAND ;

Valid arguments for -D:
exec, opt, rates, search, stat, time, tree, all, help
Use '-D help' for a description of the options, or see find(1)

Please see also the documentation at https://www.gnu.org/software/findutils/.
You can report (and track progress on fixing) bugs in the "find"
program via the GNU findutils bug-reporting page at
https://savannah.gnu.org/bugs/?group=findutils or, if
you have no web access, by sending email to <bug-findutils@gnu.org>.
camper: /website$ find --name index.html
find: unknown predicate `--name'
camper: /website$ find -name index.html
./client/src/index.html
camper: /website$ find -name istyles.css
camper: /website$ find -name styles.css
./client/src/styles.css
camper: /website$ find -name src
./client/src
camper: /website$ find website
find: ‘website’: No such file or directory
camper: /website$ find
.
./.gitignore
./CodeAlly.svg
./CodeRoad.svg
./freeCodeCamp.svg
./images
./images/background.jpg
./images/header.png
./images/footer.jpeg
./fonts
./fonts/roboto.woff
./fonts/lato.ttf
./fonts/menlo.otf
./client
./client/src
./client/src/index.html
./client/src/index.js
./client/src/styles.css
camper: /website$ 
