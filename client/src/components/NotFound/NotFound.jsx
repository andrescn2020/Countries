import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {

  return (

    <div>

      <div>

        <Link style={{ "text-decoration": "none"}} to="/api/countries/">
          <button>Home</button>
        </Link>

      </div>

      <div>
        <p className="error">ERROR 404 NOT FOUND</p>
      </div>

    </div>
  )

}
