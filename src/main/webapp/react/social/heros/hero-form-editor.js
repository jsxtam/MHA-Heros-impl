import userService from "./hero-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const HeroFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
          if(id !== "new") {
            findUserById(id)
          }
        }, []);
        const findUserById = (id) =>
            userService.findUserById(id)
            .then(user => setUser(user))
        const history = useHistory()
        const deleteUser = (id) =>
            userService.deleteUser(id)
            .then(() => history.goBack())
        const createUser = (user) =>
            userService.createUser(user)
            .then(() => history.goBack())
        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser)
            .then(() => history.goBack())
  return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                            history.goBack()}}>
              Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}>
              Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createUser(user)}>
              Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateUser(user.id, user)}>
              Save
            </button>
        </div>
    )
}

export default HeroFormEditor