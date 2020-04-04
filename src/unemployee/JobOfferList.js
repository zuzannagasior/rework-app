import React from "react";
import JobOfferItem from "./JobOfferItem";

function JobOfferList(props) {
    let jobs = props.jobOffersDataToDisplay;
 
    return jobs.map(job => { 
      return <JobOfferItem key={job.id} id={job.id} title={job.title} location={job.location} description={job.description} date={job.date} company={job.company} phone={job.phone} email={job.email}/>
        })
  

}

export default JobOfferList;
