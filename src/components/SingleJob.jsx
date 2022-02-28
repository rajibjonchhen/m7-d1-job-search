import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './singleJob.css'

function SingleJob({job, selectedJob}) {

const jobDescription = job.description.replace(/<[^>]+>/g, '');
    return ( 
        <Col sm={12} md={6} lg={4}>
        <div className='single-job' >
        <p className='h4'>
           {job.title}
        </p>
        
        <p className='h6'>
           {job.company_name}
        </p>
       
        <p className='h6'>
           {job.category}
        </p>
        <p className='description'>
           {jobDescription}
        </p>
        <a href={job.url}>
        <p className='pointer text-light'>
            {job.url}
        </p>
        </a>
        {/* <Link to={`/JobDetail/${job._id}`}>
            <span onClick= {selectedJob(job)}> see details</span>
        </Link> */}
        </div>
        </Col>
    );
}

export default SingleJob;