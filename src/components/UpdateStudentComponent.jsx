import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            programmeOfStudy: '',
            contact: '',
            yearOfAward: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeProgrammeOfStudyHandler = this.changeProgrammeOfStudyHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeYearOfAwardHandler = this.changeYearOfAwardHandler.bind(this);
        this.UpdateStudent = this.updateStudent.bind(this);
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then((res) => {
            let student = res.data;
            this.setState({ firstName: student.firstName, lastName: student.lastName, email: student.email, country: student.country, programmeOfStudy: student.programmeOfStudy, contact: student.contact, yearOfAward: student.yearOfAward });
        });
    }
    updateStudent = (e) => {
        e.preventDefault();
        let student = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, country: this.state.country, programmeOfStudy: this.state.programmeOfStudy, contact: this.state.contact, yearOfAward: this.state.yearOfAward };
        console.log('student =>' + JSON.stringify(student));
        StudentService.updateStudent(student, this.state.id).then(res => {
            this.props.history.push('/students');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeCountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }
    changeProgrammeOfStudyHandler = (event) => {
        this.setState({ programmeOfStudy: event.target.value });
    }
    changeContactHandler = (event) => {
        this.setState({ contact: event.target.value });
    }
    changeYearOfAwardHandler = (event) => {
        this.setState({ yearOfAward: event.target.value });
    }
    cancel() {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Country:</label>
                                        <input placeholder="Country" name="Country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Programme of Study:</label>
                                        <input placeholder="Programme of Study" name="programmeOfStudy" className="form-control" value={this.state.programmeOfStudy} onChange={this.changeProgrammeOfStudyHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact:</label>
                                        <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.changeContactHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Year of Award:</label>
                                        <input placeholder="Year of Award" name="year of award" className="form-control" value={this.state.yearOfAward} onChange={this.changeYearOfAwardHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;