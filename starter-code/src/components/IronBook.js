import React, { Component } from 'react'
import users from '../users.json'
import LinkedIn from '../linkedin.png'

class IronBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: users,
            student: false,
            teacher: false,
            campus: '',
            search: ''
        }
    }

    handleStudentCheckbox = (event) => {
        const dataCopy = users;
        let filtered = dataCopy.filter(oneData => {
            if(event.target.checked == true){
                return oneData.role == 'student'
            } else {
                return oneData.role == 'teacher'
            }
            
        })
        this.setState({
            student: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
            users: filtered
        })
    }

    handleTeacherCheckbox = (event) => {
        const dataCopy = users;
        let filtered = dataCopy.filter(oneData => {
            if(event.target.checked == true) {
                return oneData.role == 'teacher'
            } else {
                return oneData.role == 'student'
            }
        })
        this.setState({
            teacher: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
            users: filtered
        })
    }    


    handleCampusChange = (event) => {
        const dataCopy = users
        let filtered = dataCopy.filter(oneData => {
            return oneData.campus == event.target.value
        })
        this.setState({
            users: filtered,
            campus: event.target.value
        })
        
    }


  render() {
    return (
      <div>
          <div className='selectable-info'>

            <label className='label-student'>Student</label>
            <input type='checkbox' id='student' name='student' onChange={(e) => this.handleStudentCheckbox(e)}></input>

            <label className='label-teacher'>Teacher</label>
            <input type='checkbox' id='teacher' name='teacber' onChange={(e) => this.handleTeacherCheckbox(e)}></input>

            <label>Campus</label>  
            <select onChange={(e) => this.handleCampusChange(e)} value={this.state.campus}>
                <option>Paris</option>
                <option>Berlin</option>
                <option>Lisbon</option>
            </select>
          </div>


          <table className='info-table'>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Campus</th>
                  <th>Role </th>
                  <th>Links</th>
              </tr>
                {this.state.users.map((oneUser, index) => {
                    if(oneUser.linkedin) {
                        return (
                            <tr key={index}>
                                <td>{oneUser.firstName}</td>
                                <td>{oneUser.lastName}</td>
                                <td>{oneUser.campus}</td>
                                <td>{oneUser.role}</td>
                                <td><a href={oneUser.linkedin}><img src={LinkedIn} className='linkedin-logo'></img></a></td>
                                {/* <td><img src={LinkedIn}><a href={oneUser.linkedin}></a></img></td> */}
                            </tr>
                        )
                    } else {
                        return (
                            <tr key={index}>
                                <td>{oneUser.firstName}</td>
                                <td>{oneUser.lastName}</td>
                                <td>{oneUser.campus}</td>
                                <td>{oneUser.role}</td>
                            </tr>
                        )
                    }
                })}
          </table>
      </div>
    )
  }
}

export default IronBook