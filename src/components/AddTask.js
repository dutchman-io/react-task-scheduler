const AddTask = () => {

  return (
    <div>
      <form className='add-form'>
          <div className= 'form-control'>
              <label>Task</label>
              <input type ='text' placeholder=" Add Task"/>
          </div>

          <div className="form-control">
              <label>Day and Time</label>
              <input type= 'text' placeholder=" Add day and Time"></input>
          </div>

          <div className="form-control">
              <label> Set Reminder</label>
              <input type = "checkbox"></input>

          </div>

          <input type ="submit" value = 'Save Task'
          className="btn btn-block"/>

      </form>
    </div>
  )
}

export default AddTask
