import React, { Component } from 'react'
import ViewBookService from '../services/ViewBookService'
import { useHistory } from "react-router-dom";

export default class ViewBookDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }
    
    componentDidMount() {
        ViewBookService.getBookById(this.state.id).then(res => {
            this.setState({ book: res.data });
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h1 className="text-center"> Book Details</h1>
                    <div className="card-body fs-4">
                        <div className="row">

                            <div> <label className='fw-bold'> Book Title: </label> {this.state.book.title}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Author Name: </label> {this.state.book.author}</div>
                        </div>
                        <div className="row">

                            <div> <label className='fw-bold'> Publish Date: </label> {this.state.book.publishedDate}</div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        )
    }
}
