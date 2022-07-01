# Super Mario Maker Encyclopedia

[![SMM Encyclopedia CI](https://github.com/joooKiwi/every-SMM2-properties/actions/workflows/workflow.yml/badge.svg)](https://github.com/joooKiwi/every-SMM2-properties/actions/workflows/workflow.yml)

https://joookiwi.github.io/every-SMM2-properties

A simple project made to retrieve most (if not every)
information in all 3 Super Mario Maker games. It contains:
 - Super Mario Maker (WiiU) <a href="#"><img src=".github/styles/smm1-alias.svg"/></a>
 - Super Mario Maker for Nintendo 3DS (3DS) <a href="#"><img src=".github/styles/smm3ds-alias.svg" height="21"></a>
 - Super Mario Maker 2 (Switch) <a href="#"><img src=".github/styles/smm2-alias.svg"/></a>

The information is mostly based on the SMM2 game.

This project is intended to be a simple project to help on research.<br/>
It is also there give the details as simple as they can get.<br/>
More is to add once this huge project is finished.

The languages supported by the project are the ones available in the games:
 - <span class="language partially-done"></span> English ([american](https://joookiwi.github.io/every-SMM2-properties/en_AM)
& [european](https://joookiwi.github.io/every-SMM2-properties/en_EU))
 - <span class="language partially-done"></span> French ([canadian](https://joookiwi.github.io/every-SMM2-properties/fr_CA)
& [european](https://joookiwi.github.io/every-SMM2-properties/fr_EU))
 - <span class="language not-completed"></span> [German](https://joookiwi.github.io/every-SMM2-properties/de)
 - <span class="language not-completed"></span> Spanish ([american](https://joookiwi.github.io/every-SMM2-properties/es_AM)
& [european](https://joookiwi.github.io/every-SMM2-properties/es_EU))
 - <span class="language not-completed"></span> [Italian](https://joookiwi.github.io/every-SMM2-properties/it)
 - <span class="language not-completed"></span> [Dutch](https://joookiwi.github.io/every-SMM2-properties/nl)
 - <span class="language not-completed"></span> Portuguese ([american](https://joookiwi.github.io/every-SMM2-properties/pt_AM)
& [european](https://joookiwi.github.io/every-SMM2-properties/pt_EU))
 - <span class="language not-completed"></span> [Russian](https://joookiwi.github.io/every-SMM2-properties/ru)
 - <span class="language not-completed"></span> [Japanese](https://joookiwi.github.io/every-SMM2-properties/jp)
 - <span class="language not-completed"></span> Chinese ([traditional](https://joookiwi.github.io/every-SMM2-properties/zh_T)
& [simplified](https://joookiwi.github.io/every-SMM2-properties/zh_S))
 - <span class="language not-completed"></span> [Korean](https://joookiwi.github.io/every-SMM2-properties/ko)

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
   - <span class="sub-page in-progress">          Entity</span>
   - <span class="sub-page not-completed">        Character name</span>
   - <span class="sub-page smm2 not-completed">   Clear condition</span>

     - <span class="sub-page smm2 not-completed"> Clear condition category</span>
   - <span class="sub-page complete">             Entity limit</span>
   - <span class="sub-page not-completed">        Entity projectile</span>
   - <span class="sub-page not-completed">        Entity object</span>
   - <span class="sub-page complete">             Entity category</span>
   - <span class="sub-page not-completed">        Entity group</span>
   - <span class="sub-page partially-done">       Theme</span>
   - <span class="sub-page complete">             Game reference</span>
   - <span class="sub-page partially-done">       Game style</span>
   - <span class="sub-page not-completed">        Entity behaviour</span>
   - <span class="sub-page partially-done">       Sound effect</span>

     - <span class="sub-page complete">           Sound effect category</span>
   - <span class="sub-page smm2 complete">        Course tag</span>
   - <span class="sub-page smm2 partially-done">  Predefined message</span>
   - <span class="sub-page smm2 not-completed">   Sample courses</span>
   - <span class="sub-page smm not-completed">    Medals</span>
   - <span class="sub-page smm3ds not-completed"> Super Mario Challenges levels</span>
   - <span class="sub-page smm2 not-completed">   Job</span>
   - <span class="sub-page smm2 not-completed">   Official notification</span>
   - <span class="sub-page smm2 not-completed">   Ninji speedrun</span>
   - <span class="sub-page smm in-progress">      Mystery Mushroom</span>
   - <span class="sub-page smm2 complete">        Mii costume</span>

      - <span class="sub-page smm2 complete">     Mii costume category</span>
   - <span class="sub-page not-completed">        Instruments</span>
     
#### Other sub-pages (not directly related to the project)
   - <span class="sub-page in-progress">          Power-up priority</span>
   - <span class="sub-page not-completed">        Secret pages (by URL, by key combination & maybe other ones)</span>


## Development for the web application
### Prerequisites

Before running the application, make sure that `npm` is installed.

Then, from there,
 - run `npm install` to install the `node_modules` package

### Run the project locally (desktop and mobile)

To run the project, the command `npm start` is the only thing to do.
 - It will start the development mode;
 - It will also reload if any edits is made;
 - In the console, it will display any lint errors.

By default, it will open it in the default browser automatically.
If it has not worked, then, open [localhost:3000/every-SMM2-properties](http://localhost:3000/every-SMM2-properties) to display the application.

If it needs to be tested on other devices than the local machine, there will be another address.
An example could be [192.168.4.20:3000/every-SMM2-properties](http://192.168.4.20:3000/every-SMM2-properties).

### Running tests

The command to execute the tests is `npm test`.

Then, from  that, it will start an interactive watch mode.
For more details, see [how to run the tests](https://facebook.github.io/create-react-app/docs/running-tests).

### Prepare the final build

In order to create a production build, the command to execute is `npm run build`.
 - It will minify the files;
 - The files will include the hashes.

The application will ready to compile once this is done.
For more details, see the [application's deployment](https://facebook.github.io/create-react-app/docs/deployment).

### Deploying the changes to the server

Since the project uses the workflow (in [.github/workflows/workflow.yml](https://github.com/joooKiwi/every-SMM2-properties/blob/main/.github/workflows/workflow.yml)),
it will automatically push the changes once there is a commit in the main branch.

It automatically calls the command `npm run deploy` (implicitly calling `npm run predeploy`).

The code will be pushed in the branch [github-pages branch](https://github.com/joooKiwi/every-SMM2-properties/tree/gh-pages) by the workflow.
