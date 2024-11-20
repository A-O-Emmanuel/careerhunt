import favorite from '../assets/favorite.svg';
import close from '../assets/close.svg';
import business_center from '../assets/business_center.svg';
import location from '../assets/location2.svg';
import payments from '../assets/payments.svg';
import schedule from '../assets/schedule.svg';

function SingleJob({ jobTitle,company,jobLocation,salaryMax,salaryMin,description,contract,applyLink, setJobTitle}) {

function handleJobTitle() {
    setJobTitle('')
}
    return (
        <>
        <div className={jobTitle ? "single-job__container" :"hidden"} >
        <div className="single-job__container--content">
        <p className="single-job__container--close" onClick={handleJobTitle}><img src={close} alt="" /></p>
        <h4>{jobTitle}</h4>
        <p><img src={business_center} />  Company:  {company}</p>
        <p><img src={location} />  Location:  {jobLocation}</p>
        <p><img src={payments} />  Salary: Min - &pound;{salaryMin ? salaryMin : "no min salary provided"} - Max - &pound;{salaryMax ? salaryMax : "no max salary provided"} per annum</p>  
        <p className='single-job__container--contract-length'><img src={schedule} alt="" />  Contract Length: {contract ? contract : 'Contract length is not provided for this job'}</p>
        <a href={applyLink}>{applyLink ? <button className='single-job__container--apply'>Apply for this Job</button>: "Apply link not provided"}</a> 
        <button className='single-job__container--save-job'><img src={favorite} alt="" />  Save Job</button>
        <hr />
        <h6>Job Description</h6>
        <p>{description}</p>
        <p>{contract}</p>
        </div>
        </div>
        </>
    )
}

export default SingleJob;