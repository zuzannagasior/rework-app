import React from 'react'
import './Employer.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const employeeData = [
    {name: "Zuzia",
    category: "Gastronomia",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    },
    {name: "Łukasz",
    category: "Branża hotelarska",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    },
    {name: "Madzia",
    category: "Branża eventowa",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    },
    {name: "Radek",
    category: "Branża eventowa",
    availabilityFrom: "15.04.2020",
    availabilityTo: "19.04.2020",
    }
];

class SearchEmployee extends React.Component {

    state={
        employeeDataToDisplay: employeeData,
        showFilters: false
    }

    render() {

        let employees = this.state.employeeDataToDisplay.map((item, index)=> (
            <p key={index}>{item.name}</p>
        ));

        return (
            <div className="em-container">
                <nav>
                    <NavLink to="/employer-module"><Button color="primary">Powrót</Button></NavLink>
                    <NavLink to="/add-job-offer"><Button color="primary">Filtry</Button></NavLink>
                </nav>
                <section className="em-card-box">
                    {employees}
                </section>
            </div>
        )
    }
}

export default SearchEmployee;
