import React, { Component } from 'react'
import ViewBookService from '../services/ViewBookService';
export default class UpdateBook extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: '',
            available: 'true',
            publishedDate: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changePublishedDateHandler = this.changePublishedDateHandler.bind(this);
        this.changeAvailableHandler = this.changeAvailableHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }
    componentDidMount(){
        ViewBookService.getBookById(this.state.id).then( (res) =>{
            let book = res.data;
            this.setState({title: book.title,
                author: book.author,
                available: 'true',
                publishedDate: book.publishedDate
            });
        });
    }

    updateBook = (e) => {
        e.preventDefault();
        console.log("save pressed")
        let book = {title: this.state.title, author: this.state.author, available: this.state.available, publishedDate: this.state.publishedDate};
        
        ViewBookService.updateBook(book, this.state.id).then( res => {
            this.props.history.push('/ViewBook');
        });
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changePublishedDateHandler= (event) => {
        this.setState({publishedDate: event.target.value});
    }
    changeAvailableHandler= (event) => {
        this.setState({available: event.target.value});
    }


    cancel(){
        this.props.history.push('/viewbook');
    }

  render() {
    return (
      
        <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Book</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title Name: </label>
                                            <input placeholder="First Name" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Author Name: </label>
                                            <input placeholder="Author Name" name="author" className="form-control" 
                                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Published Date: </label>
                                            <input placeholder="Published Date" name="publishedDate" className="form-control" 
                                                value={this.state.publishedDate} onChange={this.changePublishedDateHandler}/>
                                        </div>

                                        <button className="btn btn-outline-success" onClick={this.updateBook}>Save</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{margin: "1em"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
    )
  }
}

