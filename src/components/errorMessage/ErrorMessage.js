import img from './error.gif'

const ErrorMessage = () => {
  return (
    // take gif from public folder
    // <img src={process.env.PUBLIC_URL + '/error.gif'}/>

    <img 
      src={img} 
      style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}} 
      alt="Error"
    />

  )
}

export default ErrorMessage