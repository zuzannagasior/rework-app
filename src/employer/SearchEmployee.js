import React from 'react'
import './Employer.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EmployeeCard from './EmployeeCard.js'

const employeeData = [
    {name: "Zuzia",
    category: "Gastronomia",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    job: "Kucharz",
    experience: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    },
    {name: "Łukasz",
    category: "Branża hotelarska",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    job: "Kelner",
    experience: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {name: "Madzia",
    category: "Branża eventowa",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    job: "Ochroniarz",
    experience: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {name: "Radek",
    category: "Branża eventowa",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    job: "Muzyk",
    experience: "5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

class SearchEmployee extends React.Component {

    state={
        employeeDataToDisplay: employeeData,
        showFilters: false
    }

    showFilterSection = () => {
        this.setState({
            showFilters: true
        })
    }

    render() {

        let employees = this.state.employeeDataToDisplay.map((e, index)=> (
            <EmployeeCard key={index} employee={e}/>
        ));

        return (
            <div className="em-container">
                <nav>
                    <NavLink to="/employer-module"><Button color="primary">Powrót</Button></NavLink>
                    <Button color="primary" onClick={this.showFilterSection}>Filtry</Button>
                </nav>
                <section className="em-filters">
                        Filtry
                </section>
                <section className="em-card-box">
                    {employees}
                </section>
            </div>
        )
    }
}

export default SearchEmployee;
