# opteamix
Node Js Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/opteamix

-----------------------------------------------------

Softwares Required:
1) Node.js Latest LTS

2) Visual Studio Code

3) Docker Desktop 

4) MySQL database [Docker]

==============================================
	
NodeJS by default uses commonJS module system


lib.js

module.exports.add = function(x,y) {

}	

module.exports.sub = function(x,y) {

}	


multiply = function(x,y) {
}


 
other.js

const lib = require('./lib');

lib.add(4,5);
=========================

15 min Tea Break
=================

Node Js project
---------------
fs, http, https, crypto, path ==> built-in module

NPM ==> Node Package Manager
	==> to manage dependencies ==> like [Maven ==> pom.xml]
	==> package.json
			configure dependencies which will be downloaded by NPM
	==> can use to publish the package

https://www.npmjs.com/

====================
1) 
simpleproject> npm init -y

creates package.json

 ab -c 1000 -n 10000 http://localhost:3000/hextorgb?hex=ff00ff


=========================================================================

Day 2

=====

Nodejs ==> V8 ==> libuv ==> thread pool + Os Async helpers 

Event loop

Nodejs built-in modules ==> fs, http, url, crypto, repl, ....

---------

Nodejs project contains package.json ==> dependencies + development dependencies are configured [ Maven pom.xml]

NPM ==> Node Package Manager ==> manage dependecies


1) Initialize a Node.js Project
create a folder
npm init -y

===

Node.js by default uses CommonJS module system other module systems available [ AMD + ES6  + System]


=============================
Testing ==> AAA ==> Assemble Action Assert

Unit Testing Frameworks for JavaScript:
1) Jasmine
2) Mocha
3) Jest

Mocha is a unit testing library but without any assertion libraries

Chai is an assertion library https://www.chaijs.com/

Install development dependecies:

npm i -D mocha chai request

OR

npm i --save-dev mocha chai request

"devDependencies": {
    "chai": "^4.3.4",
    "mocha": "^8.4.0",
    "request": "^2.88.2"
  }


chai": "4.3.4"  ==> exact version

chai": "^4.3.4" ==> Any latest version greater than or equal to 4.3.4

chai": "~4.3.4" ==> any version of "4" ; minor version or patch can change => major version has t obe "4"


project/node_modules folder contains the downloaded dependecies [ transitive dependecies]

Testing file naming conventions:
converter.test.js
converter.spec.js

modify package.json:
  "scripts": {
    "start" : "node ./src/server.js",
    "test": "mocha --reporter spec" 
  }

  Run the server:
  npm start

  Run the tests:
  npm test


  this executes all files in "test" folder
 ===========================================

 Need to test Async code
======================

When the project is commited onto git ==> add node_modules to .gitignore

Team members: npm i

makes use of entries in "package.json" and downloads

=================================================================

TypeScript

-g ==> Global ==> any exectuable modules let it go to "global"

npm i -g typescript

downloads in : C:\Users\username\AppData\Roaming\npm

$ tsc

=============================

TypeScript by Microsoft is a superset of JS

introduces static typing for JS 

Concept of data types to JS

In JS we declare members as in:

var x = 10;
 
x =  "Smith"; 
 
x  = true;


let x = 10;

const x = 10;

===========
ECMAScript 5
ECMAScript 6 / ES2105 or 7 /EsNext
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript 

file.js [ ES6 / ESNext] ==> babel ==> file.js [ ES5 ]

TypeScript Compiler:

file.ts [ contains data types ] ==> tsc file.ts ==> file.js [ code minus data type]

================================

TypeScript data types:

1) Number

let age:number = 10;

age = "a"; // tsc throws error

2) String

let name:string = "Peter";

3) boolean

let flag:boolean = true;

4) array

let elems:number[] = [5,3,22,1];

OR

let elems:Array<number> = [5,3,22,1];

5) enum

enum Color {
	RED, GREEN, BLUE
}

let clr:Color = Color.RED;

6) any

let data:any;

data = "A";
data.toUpperCase(); // allowed
data = 10;

Prefer:

let data: number | string;
===================
 
Functions in TypeScript

HOF ==> Functions which accept functions as argumuents 

=============

Task:
 filter product by category ==> look into interface example

Task ==> implememt Map HOF:
https://rxmarbles.com/#map

Try the follwoing transform: 
1)each number double it ==> input is numbers
2) each string is converted to upper case 
=======================

interface in TypeScript

================================

JavaScript build tools: ==> to automate tasks like ==> [traspiling (tsc, babel, )., lint, test, bundle]
1) Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 
2) Gulp
3) Webpack
https://createapp.dev/

===============

export class Person {
    constructor(private name:string, private age: number) {
        
    }
}

same as

export class Person {
	name:string;
	 age: number;
    constructor( name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}




a.ts

let a:number = 10;


b.ts

let a:string = "A";


bundle.js ==> IIFE and module system

let a = (function() {
	var a = 10;
})(); // JS module system


let b = (function() {
	var a = "A" ;
})(); // JS module system

==================================================


Day 3
======

TypeScript ==> 
data types; Functions ; Generics; Class and interface; HOF ==> for functional style of programming

tsc ==> npm i -g typescript [ Typescript compiler]

Webpack ==> Bundler, automate bundle by first "transpiling ts to js" and concat files into "bundle.js"


HOF ==> Map implementation

----------------------------------------

Generating tsconfig.json

1) Create a node project
npm init --y

2) tsc --init
    this creates tsconfig.json
    has information to "tsc"
    helps us passing commandline arguments to "tsc"

=============================

Decleration / Documentation of TS

Similar to "header" files of "C"

.d.ts contains declaration; no defintions

user.ts [implementation ] ==> user.d.ts [ declarations]


function add(x, y) {
    return x + y;
}



tsc --allowJs --declaration --outDir types a.js 

a.d.ts
declare function add(x: any, y: any): any;

==========

TypeScript version of "fs", "http" and also unit testing with "jasmine" / "jasmine-ts"

change to directory nodetsexample
npm init --y
npx tsc --init [OR tsc --init because we installed npm i -g typescript]
==> creates tsconfig.json

npm i typescript @types/node
This package contains type definitions for Node.js [ modules like fs, crypto, http, url, ...]


lib.ts

export default add = function() {..}

export sub = function() {..}


other.js

import add, {sub} from './lib';


===========

let p = {"id": 1, "name": "A", "price" : 4567};

let {name, price} = p;

===========

Run the server.ts using ts-node:

tsc + node command: ts-node

npx ts-node ./server.ts 

==================

Using Static code analysis using ESLint:

npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

 "scripts": {
    "lint": "eslint . --ext .ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  npm run lint


  Rules eslint
    .eslintrc
    
    "rules": { 
        "no-case-declarations": 0,
        "no-console": 1 // 0 is no validation; 1 warning ; 2  means error!
      }
============================

15 min Tea Break
