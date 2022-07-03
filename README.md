# Super Mario Maker Encyclopedia

[![SMM Encyclopedia CI](https://github.com/joooKiwi/smm-encyclopedia/actions/workflows/workflow.yml/badge.svg)](https://github.com/joooKiwi/smm-encyclopedia/actions/workflows/workflow.yml)

https://joookiwi.github.io/smm-encyclopedia

A simple project made to retrieve most (if not every)
information in all 3 Super Mario Maker games. It contains:
 - Super Mario Maker (WiiU) ![~ SMM1](.github/styles/smm1-alias.svg)
 - Super Mario Maker for Nintendo 3DS (3DS) ![~ SMM3DS](.github/styles/smm3ds-alias.svg)
 - Super Mario Maker 2 (Switch) ![~ SMM2](.github/styles/smm2-alias.svg)

The information is mostly based on the SMM2 game.

This project is intended to be a simple project to help on research.<br/>
It is also there give the details as simple as they can get.<br/>
More is to add once this huge project is finished.

The languages supported by the project are the ones available in the games:
 - ![Partially done](.github/styles/partially-done.svg) English ([american](https://joookiwi.github.io/smm-encyclopedia/en_AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/en_EU))
 - ![Partially done](.github/styles/partially-done.svg) French ([canadian](https://joookiwi.github.io/smm-encyclopedia/fr_CA)
& [european](https://joookiwi.github.io/smm-encyclopedia/fr_EU))
 - ![Not completed](.github/styles/not-completed.svg)  [German](https://joookiwi.github.io/smm-encyclopedia/de)
 - ![Not completed](.github/styles/not-completed.svg)  Spanish ([american](https://joookiwi.github.io/smm-encyclopedia/es_AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/es_EU))
 - ![Not completed](.github/styles/not-completed.svg)  [Italian](https://joookiwi.github.io/smm-encyclopedia/it)
 - ![Not completed](.github/styles/not-completed.svg)  [Dutch](https://joookiwi.github.io/smm-encyclopedia/nl)
 - ![Not completed](.github/styles/not-completed.svg)  Portuguese ([american](https://joookiwi.github.io/smm-encyclopedia/pt_AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/pt_EU))
 - ![Not completed](.github/styles/not-completed.svg)  [Russian](https://joookiwi.github.io/smm-encyclopedia/ru)
 - ![Not completed](.github/styles/not-completed.svg)  [Japanese](https://joookiwi.github.io/smm-encyclopedia/jp)
 - ![Not completed](.github/styles/not-completed.svg)  Chinese ([traditional](https://joookiwi.github.io/smm-encyclopedia/zh_T)
& [simplified](https://joookiwi.github.io/smm-encyclopedia/zh_S))
 - ![Not completed](.github/styles/not-completed.svg)  [Korean](https://joookiwi.github.io/smm-encyclopedia/ko)

The other languages seen in the project can include Hebrew, Polish, Ukrainian & Greek.
Although, they are only there for some names.

## List of elements to do

 - When giving an url <u>[https://example.com/path]()</u>, it would be based on the browser language.<br/>
And for <u>[https://example.com/en-US/path]()</u>, then the language would be set to American English.
 - Dark mode implementation.
 - Color blind implementation.
 - Search engine.
 - Options that would change the URL based on the application loaded.
 - Sub-pages with reactive URL.

### Sub-page applications
   - ![In progress](.github/styles/in-progress.svg)         Entity
   - ![Not completed](.github/styles/not-completed.svg)     Character name
   - ![Not completed](.github/styles/not-completed.svg)     Clear condition ![ (SMM3DS)](.github/styles/smm2-sub-page.svg)
     - ![Not completed](.github/styles/not-completed.svg)   Clear condition category ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Completed](.github/styles/completed.svg)             Entity limit
   - ![Not completed](.github/styles/not-completed.svg)     Entity projectile
   - ![Not completed](.github/styles/not-completed.svg)     Entity object
   - ![Completed](.github/styles/completed.svg)             Entity category
   - ![Not completed](.github/styles/not-completed.svg)     Entity group
   - ![Partially done](.github/styles/partially-done.svg)   Theme
   - ![Completed](.github/styles/completed.svg)             Game reference
   - ![Partially done](.github/styles/partially-done.svg)   Game style</span>
   - ![Not completed](.github/styles/not-completed.svg)     Entity behaviour
   - ![Partially done](.github/styles/partially-done.svg)   Sound effect
     - ![Not completed](.github/styles/completed.svg)       Sound effect category
   - ![Completed](.github/styles/completed.svg)             Course tag ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Predefined message ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Sample courses ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Medals ![ (SMM1)](.github/styles/smm1-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Super Mario Challenges levels ![ (SMM3DS)](.github/styles/smm3ds-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Job ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Official notification ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Ninji speedrun ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![In progress](.github/styles/in-progress.svg)         Mystery Mushroom ![ (SMM1)](.github/styles/smm1-sub-page.svg)
   - ![Completed](.github/styles/completed.svg)             Mii costume ![ (SMM2)](.github/styles/smm2-sub-page.svg)
      - ![Completed](.github/styles/completed.svg)          Mii costume category ![ (SMM2)](.github/styles/smm2-sub-page.svg)
   - ![Not completed](.github/styles/not-completed.svg)     Editor voice
   - ![Not completed](.github/styles/not-completed.svg)     Instrument
     
#### Other sub-pages (not directly related to the project)
   - ![In progress](.github/styles/in-progress.svg)         Power-up priority
   - ![Not completed](.github/styles/not-completed.svg)     Secret pages (by URL, by key combination & maybe other ones)

## Development for the web application

### Standard used in the project

In order to have a clean way to navigate on the project, multiple standard have been made.

#### Imports

They are separated in different sections 
 - Import ordering
   1. Dependencies import
   2. Type import (not useful to debug)
   3. Real import (used at compile time → `import type`)
 - Spacing for the import is aligned for better readability
 - Ordered alphabetically by group

#### Folder structure

The files are structured by folder.
Most of them are self-explanatory.

| Path                   | Meaning                                                                  |                                    Things to do | 
|:-----------------------|:-------------------------------------------------------------------------|------------------------------------------------:|
| src/app                | Application                                                              |                                                 |
| src/core               | The core elements of the project                                         |                                                 |
| src/lang               | The languages                                                            |                                                 |
| src/routes             | The routes of the project                                                |                                                 |
| src/util               | The utilities                                                            |     They should me moved into separate projects |
| src/bootstrap          | External dependencies to [Bootstrap](https://getbootstrap.com/)          |                                                 |
| scr/navigation         | The application navigation (& footer)                                    |                                                 |
| scr/resources          | The application resources (mostly CSV files)                             | Move this directory outside of the `scr` folder |
| scr/resources/compiled | The compiled (json files) from the CSV **(this should always be empty)** |                                                 |
| public/[any-folder]    | The images (& sounds) of the project                                     |                                                 |

#### File naming

The names of the files are important since some of them are for Typescript
and others gives meaning to them.

| Syntax                                                                                                              | Type of file                                                                        |         Javascript         |         Typescript          |
|:--------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|:--------------------------:|:---------------------------:|
| [singular-name].ts<br/>[singular-name].container.ts<br/>[singular-name].builder.ts<br/>[singular-name].component.ts | A file declaration<br/>A file description<br/>A Builder class<br/>A React component | No<br/>Yes<br/>Yes<br/>Yes | Yes<br/>Yes<br/>Yes<br/>Yes |
| [plural-name].types.ts<br/>[plural-name].ts                                                                         | An enumeration declaration file<br/>An enumeration file                             |         No<br/>Yes         |         Yes<br/>Yes         |
| [lower-case-name].ts                                                                                                | Not a class, but some files or functions                                            | Yes or No<br/>_(not both)_ |             Yes             |

#### Variable / methods / class naming

The variables, methods & classes use a different format, but they all share at some point the standard.<br/>
They don't follow directly the standard, but have a general format followed.

| Syntax            |                    Description                     |                               Applicable for                               | Example                                                                                           |
|:------------------|:--------------------------------------------------:|:--------------------------------------------------------------------------:|---------------------------------------------------------------------------------------------------|
| [upper-case-name] | An upper case name (using `_` as a word separator) |                         Constant<br/>Enum instance                         | <pre>AN_EXAMPLE</pre>                                                                             |
| [lower-case-name] |        A lower case name (using camel case)        |                                  Variable                                  | <pre>anExample</pre>                                                                              |
| [capital-case]    |               A capital case name (                |      Class<br/>Interface<br/>Type<br/>Dynamic import method for class      | <pre>AnExample</pre>                                                                              |
| [name][_[nameX]*] |   Multiple different names following each others   |                            Variable<br/>Method                             | <pre>anExample_withSomething_secret</pre>                                                         |
| #[name]           |                **(always)** private                |                                  Variable                                  | <pre>#anExample</pre>                                                                             |
| _[name]           |               **(always)** protected               |                                   Method                                   | <pre>_anExample()</pre>                                                                           |
| __[name]          |   private (since _#[name]_ don't work on React)    |                                   Method                                   | <pre>__anExample()<br/>~~#notAnExample()~~</pre>                                                  |
| `,`               |             Ending with a leading `,`              | Creation (Array / Object)<br/>Call (method / constructor)<br/>Generic type | <pre>[a, b, c,]<br/>{a: 1, b: 2, c: 3,}<br/>anExample(a, b, c,)<br/>new AnExample(a, b, c,)</pre> |
| `&#124;`          |             **(always)** Before a join             |                                    Type                                    | <pre>type AnExample = &#124; TypeA &#124; TypeB;</pre>                                            |                                                                            |
| `;`               |           **(always)** Ending with a `;`           |                              Class<br/>Method                              | <pre>class AnExample {<br/>  attributeA;<br/>  attributeB;<br/>}</pre>                            |
| ~~`;`~~           |           **(never)** Ending with a `;`            |                             Interface<br/>Type                             | <pre>interface AnExample {<br/>  attributeA<br/>  attributeB<br/>}</pre>                          |


### NPM commands

#### Prerequisites

Before running the application, make sure that `npm` is installed.

Then, from there,
 - run `npm install` to install the `node_modules` package

#### Run the project locally (desktop and mobile)

To run the project, the command `npm run start` is the only thing to do.
 - CSV → Json;
 - Start the development mode;
 - Reload on edits (and save);
 - In the console (and command prompt), display any lint errors.

The project could also be run with `npm run fast-start` to omit:
 - CSV → Json
 - (Other things in the future)

By default, it will open it in the default browser automatically.
If it has not worked, then, open [localhost:3000/smm-encyclopedia](http://localhost:3000/smm-encyclopedia) to display the application.

If it needs to be tested on other devices than the local machine, there will be another address.
An example could be [192.168.4.20:3000/smm-encyclopedia](http://192.168.4.20:3000/smm-encyclopedia).

#### Running tests

The command to execute the tests is `npm run test`.

Then, from  that, it will start an interactive watch mode.
For more details, see [how to run the tests](https://facebook.github.io/create-react-app/docs/running-tests).

#### Deploying the changes to the server

Since the project uses the workflow (in [.github/workflows/workflow.yml](https://github.com/joooKiwi/smm-encyclopedia/blob/main/.github/workflows/workflow.yml)),
it will automatically push the changes once there is a commit in the main branch.

It automatically calls the command `npm run deploy` (implicitly calling `npm run predeploy`).

With the deployment, it will automatically call `npm run build` and will:
 - Minify of the files;
 - Contain files formatted in _static/js/\[420.jank69].chunk.js_ and _static/css/\[420.jank69].chunk.css_.

See [the application's deployment](https://facebook.github.io/create-react-app/docs/deployment) to know in details how the **React build** is done.

The code will be pushed in the branch [github-pages branch](https://github.com/joooKiwi/smm-encyclopedia/tree/gh-pages) by the workflow.
