import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      maxWidth: 800,
      minHeight: '100vh',
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


  

function JobOfferList({ id, description, date, location, title, company, phone, email }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
        <h2 id="simple-modal-title" style={{color: '#30AABC'}}>{title}</h2>
        <p id="simple-modal-description">
          <b>{company}</b>
          <br/>
          <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <Icon style={{ color: "#FFBB10", fontSize: "1rem", marginTop: "0.5rem"}}>
                location_on
              </Icon>{" "}
              {location}
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                style={{ float: "right" }}
              >
                <Icon style={{ color: "#FFBB10", fontSize: "1rem" }}>
                  access_time
                </Icon>{" "}
                {date}
              </Typography>
            </Typography>
        </p>
        <p id="simple-modal-description">
        <b> Opis oferty :</b> 
          <br />
          {description}
        </p>
        <br/>
        <h2>Nawiąż kontakt</h2>
        <div>
            <h2><Icon style={{color:"#FFBB10", marginRight: "1rem", fontSize: "2rem", verticalAlign: 'middle'}}>phone</Icon>{phone}</h2>
        </div>
        <div  >
            <h3 className="primary"><Icon style={{color: "#FFBB10", marginRight: "1rem", fontSize: "2rem", verticalAlign: 'middle'}}>email</Icon>{email}</h3>
        </div>
        <br />
      </div>
      <div style={{marginBottom: "3rem"}}>
      <Button variant="contained" style={{backgroundColor: "#30AABC", color: "#fff"}}  size="medium">Zadzwoń</Button>
      <Button
            variant="contained"
            color="default"
            size="medium"
            onClick={handleClose}
            style={{float:"right"}}
          >
            Zamknij
          </Button>
      </div>
    </div>
  );


  return (
    <>
      <Card className={classes.root} style={{marginBottom: "1rem"}}> 
        <CardContent>
          <Typography variant="h5" component="h2" style={{color: "#30AABC"}}>
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
            <Icon style={{ color: "#FFBB10", fontSize: "1rem" }}>
              location_on
            </Icon>{" "}
            {location}
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style={{ float: "right" }}
            >
              <Icon style={{ color: "#FFBB10", fontSize: "1rem" }}>
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
            style={{backgroundColor: "#30AABC", color: "white"}}
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
