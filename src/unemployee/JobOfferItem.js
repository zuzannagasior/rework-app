import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import Icon from "@material-ui/core/Icon";

const jobOffers = [
  {
    title: "Kafelkarz",
    company: "Budowlanka sp. z o. o.",
    location: "Władysławowo",
    description:
      "Lorem  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa",
    date: "",
  },
];

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    //   top: '50% !important',
    //   left: '50% !important',
    //   transform: 'translate(-50%, -50%) !important'
    },
  }));
  
  const useStylesCard = makeStyles({
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


  

function JobOfferList({ id, description, date, location, title, company }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
        <b>{date}</b> z {location} letnim doświadczeniem
        <br/>
        <i>Władysławowo</i>
      </p>
      <p id="simple-modal-description">
        Profil: 
        <br />
        {description}
      </p>
      {/* <EmployeeModal /> */}
      <br />
      <Button variant="contained" color="primary" size="medium">Nawiąż kontakt</Button>
      <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={handleClose}
            style={{float:"right"}}
          >
            Zamknij
          </Button>
    </div>
  );


  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {" "}
            {company}
          </Typography>
          <br />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <Icon style={{ color: "green", fontSize: "1rem" }}>
              location_on
            </Icon>{" "}
            {location}
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style={{ float: "right" }}
            >
              <Icon style={{ color: "primary", fontSize: "1rem" }}>
                access_time
              </Icon>{" "}
              {date}
            </Typography>
          </Typography>

          <Typography variant="body2" component="p">
            {description.length > 100
              ? `${description.substring(0, 100)} (...)`
              : description}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleOpen}
          >
            Zobacz więcej
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
           {body}
          </Modal>
        </CardActions>
      </Card>
    </>
  );
}

export default JobOfferList;
