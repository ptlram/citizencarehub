import AdNevbar from "../adminNevbar";
import "../../admincss/Newcomplaint.css";
import Assignjob from "./assignjob";
const Newcomplaint = ({ newcomplaint, users }) => {
  return (
    <>
      <div>
        <AdNevbar />
      </div>
      <div>
        {newcomplaint.map((data, i) => {
          return (
            <>
              <div key={i} className="complaint-details-container">
                <h2>Complaint Details</h2>
                <div className="complaint-details">
                  <p>
                    <strong>Title:</strong> {data.title}
                  </p>

                  <p>
                    <strong>Description:</strong> {data.description}
                  </p>
                  <p>
                    <strong>District:</strong> {data.district}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {data.pincode}
                  </p>
                  <p>
                    <strong>Location:</strong> {data.location}
                  </p>
                  <p>
                    <strong>Contact:</strong> {data.contact}
                  </p>
                  <p>
                    <strong>Proof:</strong> {data.proff}
                  </p>
                  {/* only above code render in this page so... it render till <Temp> and asign is render in different pages  */}
                  <Assignjob users={users} id={data._id} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Newcomplaint;
