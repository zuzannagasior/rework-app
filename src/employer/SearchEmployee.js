import React from 'react'
import './Employer.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

class SearchEmployee extends React.Component {

    state={
        employeeDataToDisplay: employeeData,
        showFilters: false
    }

    render() {

        let employees = this.state.employeeDataToDisplay.map((item, index)=> (
            <div>
                <p key={index}>{item.name}</p>
                <SimpleCard />
            </div>
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
