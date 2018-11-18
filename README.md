# Welcome to Project Filament!

## A utility designed to help you reduce failed prints by allowing you to record your successful print parameters for use next time you print.

Once this utility is complete you will be able to add, edit and remove parameters specific to each roll of filament. You can have multiple sets per each roll to cater for different layer heights. The utility will also fetch the current outdoor temperature at the time of adding or modifying data and add it as a parameter. At all times there will be a location based temperature, humidity and weather conditions report available on the page.


## To install:

* Clone down repo.
* CD to workspace/project-filament.
* In the terminal run:

```sh
yarn
yarn start
```

* Open a browser and navigate to http://localhost:3000


## Clearing the database:

**WARNING! The following steps will result in PERMANENT data loss, proceed at your own risk**

If for any reason you wish to clear **ALL** data from the database - 

* CD to workspace/project-filament.
* In the terminal run:

```sh
yarn
yarn knex migrate:latest
yarn knex seed:run
```
