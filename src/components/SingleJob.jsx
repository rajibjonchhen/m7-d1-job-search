import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './singleJob.css'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
function SingleJob({job, setSelectedJob}) {

const jobDescription = job.description.replace(/<[^>]+>/g, '');
const [like, setLike] = useState(false)
    return ( 
        
        <div className='single-job pRelative' >
            <span className="heart-icon pAbsolute" style={{display:!like? 'block':'none'}} onClick={() => setLike(!like)}><AiOutlineHeart/></span>
            <span className="heart-icon pAbsolute" style={{display:like? 'block':'none'}} onClick={() => setLike(!like)}><AiFillHeart/></span>
        <p className='h4'>
           {job.title}
        </p>
        
        <Link to={`/company/${job.company_name}`}>
        <p className='h6'>
           {job.company_name}
        </p>
        </Link>
       
        <p className='h6'>
           {job.category}
        </p>
        <p className='description'>
           {jobDescription}
        </p>
        <a href={job.url}>
        <p className='pointer text-wrap'>
            {job.url}
        </p>
        </a>
            <span className="pointer" onClick= {setSelectedJob(job)}> see details</span> 
        </div>
       
    );
}

export default SingleJob;