import React from 'react'
import './Employer.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import EmployeeCard from './EmployeeCard.js'
import employeeData from './pracownicy.json'

const positions = [
    "Kosmetyczka",
    "Kucharz / Kucharka",
    "Stolarz",
    "Pielęgniarz / Pielęgniarka",
    "Kelner / Kelnerka",
    "Nauczyciel / Nauczycielka",
    "Kafelkarz",
    "Barman / Barmanka",
    "Cukiernik",
    "Wędliniaż Masarz Rzeźnik",
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
"Lipno",
"Poznań",
"Władysławowo",
"Gdańsk",
"Rewal",
"Toruń",
"Wrocław"
];

class SearchEmployee extends React.Component {

    state={
        employeeDataToDisplay: employeeData,
        filterPosition: '',
        filterLocation: ''
    }

    filter = () => {
        const position = this.state.filterPosition;
        const location = this.state.filterLocation;

        let employeeDataFiltered = [];
        employeeDataFiltered = employeeData.filter((e) => 
        {
            if (!!position && !!location) {
                return (e.position === position) && location.includes(e.location);
            } else if (!!position) {
                return (e.position === position);
            } else if (!!location) {
                return location.includes(e.location);
            } else {
                return true;
            }
        });

        this.setState({
            employeeDataToDisplay: employeeDataFiltered
        });
    };

    handlePositionChange = (e, value) => {
        this.setState({ 
            filterPosition: value
        });
    };

    handleLocationChange = (e, value) => {
        this.setState({ 
            filterLocation: value
        });
    };



    render() {
        let employees = this.state.employeeDataToDisplay.map((e, index)=> (
            <EmployeeCard key={index} employee={e}/>
        ));

        return (
            <div className="em-container">
                <nav>
                    <NavLink to="/"><Button style={{margin: "20px auto", backgroundColor: "#FFBB10"}}>Powrót</Button></NavLink>
                </nav>
                <section className="em-filters">
                        <Autocomplete
                            id="combo-box-demo"
                            options={positions.sort()}
                            getOptionLabel={(option) => option}
                            onChange={this.handlePositionChange}
                            style={{ width: 300, marginBottom: "1rem", marginRight: "1rem" }}
                            renderInput={(params) => <TextField {...params} label="Zawód" variant="outlined" />}
                            />
                 
                        <Autocomplete
                            id="combo-box-demo"
                            options={cities.sort()}
                            getOptionLabel={(option) => option}
                            onChange={this.handleLocationChange}
                            style={{ width: 300, marginBottom: "1rem", marginRight: "1rem" }}
                            renderInput={(params) => <TextField {...params} label="Miejscowość" variant="outlined" />}
                            />
                      <Button variant="contained" style={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#FFBB10" }} onClick={this.filter}>Filtruj</Button>
                </section>
                <section className="em-card-box">
                    {employees}
                </section>
            </div>
        )
    }
}

export default SearchEmployee;
