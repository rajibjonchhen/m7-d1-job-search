import { Link } from "react-router-dom";

function SingleJob({job}) {
    return ( 
    <div>
            <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="company"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">{job.category}</p>
                        <p className="card-text">{job.company_name}</p>
                    <p className="card-text"><small className="text-muted">{job.url}</small></p>
                </div>
                </div>
            </div>
         </div>
        </div>
    );
}

export default SingleJob;