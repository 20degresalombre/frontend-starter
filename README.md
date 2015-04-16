# Frontend-starter

Hi, this is a quick Front-end project starter using gulp and sass.


## How can I use it ?

- Clone the repo : ```git clone git@github.com:20degresalombre/frontend-starter.git``` 

- Then ```npm install``` 

- To launch a local webserver, compile your sources (.scss, .js, .tpl.html files), watch, recompile and refresh the view when you save a file just do : ```gulp```

- Go to [http://localhost:4000/]()

- Modify/add HTML, SCSS, JS files and let the magic happen :D


## Tell me more about project structure

The project is separated in 3 parts : 
  - Config files
  - Sources files
  - Production ready files

### Config files 

The config files are :
  - the ```.gitignore``` file, to exclude files / folders for commits (like npm_modules, generated css and js files).
  - the ```gulpfile.js``` where are defined all the tasks that will help you to increase your productivity.
  - the ```package.json``` in wich you should change the name, description, repository url and author of your project.

### Sources files

Sources files are organized in this way : 
```
src/
  js/
    *.js
  scss/
    base/
      _*.scss 
    layout/
      _*.scss
    module/
      _*.scss
    styles.scss
  templates/
    partials/
      *.tpl.html
    *.html
``` 

- JavaScript files : you can modify main.js file or add your own modules / js files
- SCSS files : 
  + ```base/_*.scss```      => you can change _variables.scss
  + ```layout/_*.scss```    => you can create a new file for each page or template
  + ```module/_*.scss```    => you can put here reusable elements and use them in many projects
  + ```styles.scss```       => when you add a new scss file, don't forget to import it in ```styles.scss```
- Templates files :
  + ```partials/*.tpl.html``` => this template can be used in html files (example : header, footer, forms, ...)
  + ```*.html```              => your html files that will be compiled


### Production ready files

The folder that you can push on production. It contains :
````
www/
  css/
    styles.css
    styles.min.css
  fonts/
  icons/
  images/
  js/
  *.html
```

__Note :__ your images, fonts, icons (used for favicons) must be added in ```www/``` folder and not in ```src/``` they won't be modified or erased by gulp.

__Note 2 :__ Don't modify css or js in ```www/css/``` and ```www/js/``` because it will be erased by gulp


## Who made this starter ?

This front-end starter is powered by [20 degrés à l'ombre](http://www.20degresalombre.com/) a French 360° web agency specialized in User Experience in Nantes.

You can follow us on twitter [@20degresalombre](https://twitter.com/20degresalombre) 

You can also find us on [LinkedIn](https://www.linkedin.com/company/20-degr%C3%A9s-%C3%A0-l%27ombre), or on [Facebook](https://www.facebook.com/20degresalombre)
