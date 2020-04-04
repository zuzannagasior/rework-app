import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50% !important',
    left: '50% !important',
    transform: 'translate(-50%, -50%) !important'
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
  
  const EmployeeCard = (props) => {
      const e = props.employee;
      const classesCard = useStylesCard();
      // const bull = <span className={classes.bullet}>•</span>;
  
      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{e.name}</h2>
          <p id="simple-modal-description">
            <b>{e.job}</b> z {e.experience} letnim doświadczeniem
            <br/>
            <i>Władysławowo</i>
          </p>
          <p id="simple-modal-description">
            Profil: 
            <br />
            {e.description}
          </p>
          {/* <EmployeeModal /> */}
          <br />
          <Button variant="contained" color="primary" size="medium">Nawiąż kontakt</Button>
        </div>
      );


    return (
      <Card className={classesCard.root}>
        <CardContent>
          <Typography className={classesCard.title} color="textSecondary" gutterBottom>
            {e.category}
          </Typography>
          <Typography variant="h5" component="h2" className={classesCard.pos}>
            {e.name}
          </Typography>
          {/* <Typography className={classesCard.pos} color="textSecondary">
            adjective
          </Typography> */}
          {/* <Typography variant="body2" component="p">
            Dostępność:
            <br />
            {bull} Od: {e.availabilityFrom}
            <br />
            {bull} Do: {e.availabilityFrom}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small" onClick={handleOpen}>Zobacz profil</Button>
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
    );
  }

  export default EmployeeCard;
