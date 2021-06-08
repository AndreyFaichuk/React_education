import './App.css'
import {useState} from "react"
import {userData} from "./userData"

const Modal = props => {
  return (
      <div className="modal-card">
        <div className="InfoAboutUsers">
          <h5>Id: {props.props._id}</h5>
          <h5>EyeColor: {props.props.eyeColor}</h5>
          <h5>Age: {props.props.age}</h5>
          <h5>Name: {props.props.name}</h5>
          <h5>Company: {props.props.company}</h5>
          <h5>Phone: {props.props.phone}</h5>
          <h5>Adress: {props.props.address}</h5>
          <h5>Registered: {props.props.registered}</h5>
          <h5>Email: {props.props.email}</h5>
        </div>
      </div>
  )
}

const Card = props => {
  const [show, setShow] = useState(false)

  const handleModalClose = (e) => {

    const currentClass = e.target.className

    if (currentClass !== 'modal-background' && currentClass !== 'close-button') {
      return
    }

    console.log(currentClass)
    setShow(false)
    document.body.style.overflow = ''
  }

  const handleModalOpen = () => {
    setShow(true)
    document.body.style.overflow = 'hidden'
  }
  return (
      <div className="Card">
        <div className="UserInfo">
          <img className="Avatar" src={props.data.picture} alt={''}/>
          <h5>Name: <span>{props.data.name}</span></h5>
          <h5>Age: <span>{props.data.age}</span></h5>
          <h5>Gender: <span>{props.data.gender}</span></h5>
          <h5>Balance: <span>{props.data.balance}</span></h5>
          <button type={'button'} onClick={handleModalOpen} className="card-button">More info</button>

          {
            show && <div className="modal-background" onClick={handleModalClose}>
              <button type={'button'} className="close-button" onClick={handleModalClose}>X</button>
              <Modal props={props.data}/>

            </div>

          }
        </div>
      </div>
  )
}

function App() {
  const [state, setState] = useState(userData)

  const selectSearch = e => {
    const {value} = e.target
    let result = [...state].sort((a,b) => {
      if(value === 'asc') return a.age - b.age
      if(value === 'desc') return b.age - a.age
    })
    setState(result)
  }


  const handleSearch = (e) => {
    let {value} = e.target
    let result = [...userData].filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    setState(result)
  }

  const resetFilters = () => {
    setState(userData)
  }

  if(state.length === 0 ){
    return (
        <>
          <header>
            <input type="text" className="input" onChange={handleSearch}/>
            <button type={"button"} onClick={resetFilters} className="card-reset">Reset filters</button>
          </header>
          <div className="App">
            <h1>Users not found</h1>
          </div>
        </>
    )
  }
  return (
      <>
        <header>
          <input type="text" placeholder={'Enter name...'} className="input" onChange={handleSearch}/>
          <select name="select" onChange={selectSearch}>
            <option defaultValue hidden>Сортировка</option>
            <option value = "asc">Отсортировать по возрастанию</option>
            <option value = "desc">Отсортировать по убыванию</option>
          </select>
          <button type={"button"} onClick={resetFilters} className="card-reset">Reset filters</button>
        </header>
        <div className="App">
          {state.map((user) => <Card key = {'good ' + user._id} data = {user}/>)}
        </div>
      </>
  )
}

export default App
