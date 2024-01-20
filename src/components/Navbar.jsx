import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <div>
            <div className="">
                <div className="logo">
                    <Link to="/" >
                        <h1>logo</h1>
                    </Link>
                </div>
                <div className="profile">
                    <Link to="/profile">
                        <h1>profile</h1>
                    </Link>
                </div>
                <div className="theme-swich">
                    <button>
                        <h1>icon</h1>
                    </button>
                </div>
                <div className="mobile_nav">
                    <Link to="/events">
                        <h1>event</h1>
                    </Link>
                    <Link to="/airbnb">
                        <h1>airbnb</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
