import { Link } from "react-router-dom"

export default function Welcom() {
  return (
    <div>
      <h1>wellcome</h1>
      <Link to="/login">
        <h1>login</h1>
      </Link>
      <Link to="/signup">
        <h1>signup</h1>
      </Link>
    </div>
  )
}
