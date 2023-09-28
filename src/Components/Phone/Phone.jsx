
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const {id, brand_name, image, phone_name, rating } = phone;
  

  return (
    <div >
      <div className="card bg-violet-100 shadow-xl">
        <figure>
          <img className="w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{phone_name}</p>
          <div className="card-actions justify-center ">
            <Link to={`/details/${id}`}>
            <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
