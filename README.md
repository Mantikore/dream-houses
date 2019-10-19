# MyDreamHouses

This project is using [Google Distance Matrix Service API](https://developers.google.com/maps/documentation/javascript/distancematrix) to calculate distances between addresses. That is why some coords in  the provided data may not to be completely equal to the GoogleMap Service output.

Calculated distances are walking routes. You can change origin address(my sister's address) in the top section. Default Value is "Eberswalder Straße 55". It accept any formats and languages, but for some addresses you will need to specify the city(it may show you distances to Danziger Straße 66 in Hamburg, not in Berlin, if you will not specify the city).

[Demo is here](https://dh.perun.top/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

There are main service(houses.service.spec) and main component(houses-filter-list.component.spec) unit tests included.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


