import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import JobOfferList from './JobOfferList'
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import jobOfferData from './oferty_pracy.json'

const positions = [
    "Kucharz / Kucharka",
    "Stolarz",
    "Pielęgniarz / Pielęgniarka",
    "Kelner / Kelnerka",
    "Nauczyciel / Nauczycielka",
    "Kafelkarz",
    "Barman / Barmanka",
    "Cukiernik",
    "Wędliniaż Masarz Rzeźnik"
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

class UnemployeeModule extends React.Component {

    state={
        jobOffersDataToDisplay: jobOfferData,
        filterPosition: '',
        filterLocation: ''
    }

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

    filter = () => {
        const position = this.state.filterPosition;
        const location = this.state.filterLocation;

        let jobOffersDataFiltered = [];
        jobOffersDataFiltered = jobOfferData.filter((e) => 
        {

            if (!!position && !!location) {
                return (e.title === position) && location.includes(e.location);
            } else if (!!position) {
                return (e.title === position);
            } else if (!!location) {
                return location.includes(e.location);
            } else {
                return true;
            }
        });

        this.setState({
            jobOffersDataToDisplay: jobOffersDataFiltered
        });
    };

    render() {
   
        return (
            <div className="em-container">
                <nav>
                    <NavLink to="/"><Button style={{margin: "20px auto", backgroundColor: "#FFBB10"}}>Powrót</Button></NavLink>
                </nav>
                {/* <nav>
                    <NavLink to="/add-job-offer"><Button style={{backgroundColor: "#FFBB10",margin: "20px auto"}}>Ustawienia konta</Button></NavLink>
                    <NavLink to="/unemployee-module/job-offer-list"><Button style={{backgroundColor: "#FFBB10", margin: "20px auto"}}>Szukaj pracy</Button></NavLink>
                </nav> */}
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
                {/* <Button  variant="contained" size="medium" style={{margin: "20px auto", backgroundColor: "#FFBB10"}}>Filtruj</Button> */}
                <JobOfferList jobOffersDataToDisplay={this.state.jobOffersDataToDisplay} />
            </div>
    )}
}

export default UnemployeeModule;
