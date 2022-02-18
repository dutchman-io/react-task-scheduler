import PropTypes from 'prop-types'
import Button from './Button'
const Header =(props) => { /*const header = ({title}) to bypass the props.title attribute*/
    const onClick = (e) =>{
        console.log('click')
    }
    return (
        <header className = "header">
            <h1>
                {props.title}
            </h1>
            <Button color = "green" text = "Add" onClick={onClick}/>
             
        </header>
    )
}
Header.defaultProps ={
    title: "Task Tracker",
}
Header.prototypes ={
    title:PropTypes.string.isRequired,
}
// const headingStyle = {
//     color : "white", 
//     backgroundColor : "green"
//
//}
export default Header