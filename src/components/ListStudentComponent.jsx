import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({ student: this.state.students.filter(student => student.id !== id) });
        });
    }
    viewStudent(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editStudent(id) {
        this.props.history.push(`/update-student/${id}`);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data });
        });
    }

    addStudent() {
        this.props.history.push()
    };
    render() {
        return (
            <div>
                <h2 className="text-center">List Of Students</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email</th>
                                <th>Student Country</th>
                                <th>Student Programme Of Study</th>
                                <th>Student Contact</th>
                                <th>Student Year Of Award</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.email}</td>
                                            <td>{student.country}</td>
                                            <td>{student.programmeOfStudy}</td>
                                            <td>{student.contact}</td>
                                            <td>{student.yearOfAward}</td>
                                            <td>
                                                <button onClick={() => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewStudent(student.id)} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>


                    </table>



                </div>



            </div>
        );
    }
}

export default ListStudentComponent;


