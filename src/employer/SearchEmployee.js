import React from 'react'
import './Employer.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import EmployeeCard from './EmployeeCard.js'
import employeeData from './pracownicy.json'

// const employeeData = [
//     {name: "Zuzia",
//     category: "Gastronomia",
//     availabilityFrom: "15.04.2020",
//     availabilityTo: "19.04.2020",
//     job: "Kucharz",
//     experience: "5",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    },
//     {name: "Łukasz",
//     category: "Branża hotelarska",
//     availabilityFrom: "15.04.2020",
//     availabilityTo: "19.04.2020",
//     job: "Kelner",
//     experience: "5",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {name: "Madzia",
//     category: "Branża eventowa",
//     availabilityFrom: "15.04.2020",
//     availabilityTo: "19.04.2020",
//     job: "Ochroniarz",
//     experience: "5",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {name: "Radek",
//     category: "Branża eventowa",
//     availabilityFrom: "15.04.2020",
//     availabilityTo: "19.04.2020",
//     job: "Muzyk",
//     experience: "5",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     }
// ];

const positions = [
    "Kosmetyczka",
    "Kucharz/Kucharka",
    "Stolarz",
    "Pielęgniarz/Pielęgniarka",
    "Kelner/Kelnerka",
    "Nauczyciel/Nauczycielka",
    "Spawacz"
];

const cities = [
"Toruń",
"Toruń Włościański (pow. nowodworski)",
"Toruń Dworski (pow. nowodworski)",
"Toruń (pow. chełmski)",
"Stary Toruń (pow. toruński)",
"Papowo Toruńskie (pow. toruński)",
"Międzychód",
"Międzychód (pow. śremski)",
"Władysławowo",
"Władysławowo (pow. elbląski)",
"Władysławowo (pow. ciechanowski)",
"Władysławowo (pow. płoński)",
"Władysławowo (pow. żuromiński)",
"Władysławowo (pow. żniński)",
"Władysławowo (pow. toruński)",
"Władysławowo (pow. brzeziński)",
"Władysławowo (pow. nowotomyski)",
"Władysławowo (pow. koniński)",
"Leszno",
"Lesznowola (pow. grójecki)",
"Leszno Górne (pow. żagański)",
"Leszno Dolne (pow. żagański)",
"Leszno (pow. przemyski)",
"Leszno (pow. kutnowski)",
"Leszno (pow. przasnyski)",
"Leszno (pow. olsztyński)",
"Leszno (pow. łęczycki)",
"Leszno (pow. warszawski zachodni)",
"Kraków",
"Krakówki-Zdzichy (pow. siemiatycki)",
"Krakówki-Włodki (pow. siemiatycki)",
"Krakówki-Dąbki (pow. siemiatycki)",
"Krakówek (pow. świecki)",
"Stary Kraków (pow. sławieński)",
"Nowy Kraków (pow. sławieński)",
"Wrocław",
"Koszalin",
"Lipno"
];

class SearchEmployee extends React.Component {

    state={
        employeeDataToDisplay: employeeData,
        filterPosition: '',
        filterLocation: ''
    }

    filter = () => {
        console.log('filter');

        console.log(this.state, 'this.state');
    };

    handleInputChange = (e) => {
        this.setState({ 
            filterPosition: e.target.value
        });
    };

    render() {
        let employees = this.state.employeeDataToDisplay.map((e, index)=> (
            <EmployeeCard key={index} employee={e}/>
        ));

        return (
            <div className="em-container">
                <nav>
                    <NavLink to="/employer-module"><Button color="primary">Powrót</Button></NavLink>
                </nav>
                <section className="em-filters">
                        <Autocomplete
                            id="combo-box-demo"
                            options={positions.sort()}
                            getOptionLabel={(option) => option}
                            style={{ width: 300, marginBottom: "1rem", marginRight: "1rem" }}
                            renderInput={(params) => <TextField {...params} label="Zawód" variant="outlined" />}
                            />
                 
                        <Autocomplete
                            id="combo-box-demo"
                            options={cities.sort()}
                            getOptionLabel={(option) => option}
                            style={{ width: 300, marginBottom: "1rem", marginRight: "1rem" }}
                            renderInput={(params) => <TextField {...params} label="Miejscowość" variant="outlined" />}
                            />
                      <Button color="primary" variant="contained" style={{ marginBottom: "1rem", marginRight: "1rem" }} onClick={this.filter}>Filtruj</Button>
                </section>
                <section className="em-card-box">
                    {employees}
                </section>
            </div>
        )
    }
}

export default SearchEmployee;
