import React, { Component } from 'react'
import { render } from 'react-dom'
import { requestPeople } from '../api/people'

export default class Table extends Component {
  constructor () {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount () {
    this.setState({ people: requestPeople() })
  }

  deletePerson (person) {
    const { guid } = person
    const { people } = this.state
    this.setState({ people: people.filter((person) => person.guid !== guid) })
  }

  render () {
    const { people } = this.state
    return (
      <div className='col-md-8 col-md-offset-2' style={{marginTop: '100px'}}>
        <div className='new-list-view-header new-list-view-status'>
          <h3 className='col col-20'>Name</h3>
          <h3 className='col col-20'>Email</h3>
          <h3 className='col col-20'>Company</h3>
          <h3 className='col col-20'>Phone</h3>
          <h3 className='col col-10'>Action</h3>
        </div>
        <ul className='new-list-view new-list-view-status'>
          {people.map((person) => {
            const { name, email, company, phone, isActive, guid } = person
            return (
              <li className={isActive ? 'status-success' : 'status-danger'} key={guid}>
                <div className='list-view-link-item'>
                  <div className='col col-20'>{name}</div>
                  <div className='col col-20'>{email}</div>
                  <div className='col col-20'>{company}</div>
                  <div className='col col-20'>{phone}</div>
                  <div className='col col-10'>
                    <button onClick={() => this.deletePerson(person)} className='btn btn-danger'>delete</button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
