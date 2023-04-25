import { Component } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent {
  data = [
    { airportID: 'D19', name: 'Aannson', country: 'USA', city: 'Alice', state: 'TX', major: 'Y' },
    { airportID: 'E21', name: 'Barrington', country: 'USA', city: 'Baltimore', state: 'MD', major: 'Y' },
    { airportID: 'F43', name: 'Cameron', country: 'USA', city: 'Charlotte', state: 'NC', major: 'N' },
    { airportID: 'G56', name: 'Davenport', country: 'USA', city: 'Denver', state: 'CO', major: 'N' },
    { airportID: 'H87', name: 'Ellsworth', country: 'USA', city: 'El Paso', state: 'TX', major: 'N' },
    { airportID: 'I09', name: 'Fairbanks', country: 'USA', city: 'Fargo', state: 'ND', major: 'N' },
    { airportID: 'J23', name: 'Gainesville', country: 'USA', city: 'Green Bay', state: 'WI', major: 'N' },
    { airportID: 'K43', name: 'Harrington', country: 'USA', city: 'Houston', state: 'TX', major: 'Y' },
    { airportID: 'L89', name: 'Ingram', country: 'USA', city: 'Indianapolis', state: 'IN', major: 'Y' },
    { airportID: 'M65', name: 'Jacksonville', country: 'USA', city: 'Jackson', state: 'MS', major: 'Y' },
    { airportID: 'N32', name: 'Kingsley', country: 'USA', city: 'Kansas City', state: 'MO', major: 'Y' },
    { airportID: 'O12', name: 'Lancaster', country: 'USA', city: 'Los Angeles', state: 'CA', major: 'Y' },
    { airportID: 'P09', name: 'Madison', country: 'USA', city: 'Miami', state: 'FL', major: 'N' },
    { airportID: 'Q54', name: 'Nashville', country: 'USA', city: 'New Orleans', state: 'LA', major: 'Y' },
    { airportID: 'R29', name: 'Oakland', country: 'USA', city: 'Oklahoma City', state: 'OK', major: 'N' },
    { airportID: 'S17', name: 'Patterson', country: 'USA', city: 'Phoenix', state: 'AZ', major: 'Y' },
    { airportID: 'T08', name: 'Queensville', country: 'USA', city: 'Quebec', state: 'QC', major: 'N' },
    { airportID: 'U32', name: 'Raleigh', country: 'USA', city: 'Reno', state: 'NV', major: 'N' },
    { airportID: 'V43', name: 'Savannah', country: 'USA', city: 'San Antonio', state: 'TX', major: 'Y' },
    { airportID: 'W78', name: 'Tipton', country: 'USA', city: 'Tulsa', state: 'OK', major: 'N'},
    { airportID: 'X12', name: 'Uxbridge', country: 'USA', city: 'Utica', state: 'NY', major: 'N' },
    { airportID: 'Y54', name: 'Valleyfield', country: 'USA', city: 'Vancouver', state: 'BC', major: 'N' },
    { airportID: 'Z23', name: 'Watsonville', country: 'USA', city: 'Wichita', state: 'KS', major: 'N' },
    { airportID: 'A76', name: 'Xavier', country: 'USA', city: 'Xenia', state: 'OH', major: 'N' },
    { airportID: 'B43', name: 'Yukon', country: 'USA', city: 'Yuma', state: 'AZ', major: 'N' },
    { airportID: 'C89', name: 'Zebulon', country: 'USA', city: 'Zanesville', state: 'OH', major: 'N' },
    { airportID: 'D87', name: 'Alhambra', country: 'USA', city: 'Anchorage', state: 'AK', major: 'Y' },
    { airportID: 'E76', name: 'Bartlesville', country: 'USA', city: 'Bismarck', state: 'ND', major: 'N' },
    { airportID: 'F43', name: 'Cortland', country: 'USA', city: 'Columbus', state: 'OH', major: 'N' },
    { airportID: 'G67', name: 'Dover', country: 'USA', city: 'Des Moines', state: 'IA', major: 'N' },
    { airportID: 'H32', name: 'Easton', country: 'USA', city: 'Eugene', state: 'OR', major: 'N' },
    { airportID: 'I23', name: 'Fairview', country: 'USA', city: 'Fresno', state: 'CA', major: 'Y' },
    { airportID: 'J65', name: 'Gulfport', country: 'USA', city: 'Greensboro', state: 'NC', major: 'N' },
    { airportID: 'K87', name: 'Haddonfield', country: 'USA', city: 'Huntsville', state: 'AL', major: 'N' },
    { airportID: 'L23', name: 'Inverness', country: 'USA', city: 'Ithaca', state: 'NY', major: 'N' },
    { airportID: 'M98', name: 'Joplin', country: 'USA', city: 'Jacksonville', state: 'FL', major: 'N' },
    { airportID: 'N21', name: 'Kennewick', country: 'USA', city: 'Knoxville', state: 'TN', major: 'N' },
    { airportID: 'O98', name: 'Laconia', country: 'USA', city: 'Lafayette', state: 'LA', major: 'N' },
    { airportID: 'P54', name: 'Marblehead', country: 'USA', city: 'Mobile', state: 'AL', major: 'N' },
  ]
  
  selectedCountry:any;
  countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];
}
