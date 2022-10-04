import React from 'react';
import ViewBookService from '../services/ViewBookService';

class ViewBook extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            books:[]
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }
    

    componentDidMount(){
        ViewBookService.getBooks().then((response) => {
            this.setState({ books: response.data})
        });
    }

    addBook(){
        this.props.history.push('/AddBook');
        window.location.reload();
    }
    editBook(id){
        this.props.history.push(`/UpdateBook/${id}`);
        window.location.reload();
    }
    deleteBook(id){
        ViewBookService.deleteBook(id).then( res => {
            this.setState({books: this.state.books.filter(book => book.bookId !== id)});
        });
        alert("Book Deleted")
    }
    viewBookDetails(id){
        this.props.history.push(`/ViewBookDetails/${id}`);
        window.location.reload();
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Book List</h1>
                
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Book Id</td>
                            <td> Title</td>
                            <td> Author</td>
                            <td> Availabity</td>
                            <td> Published Date</td>
                            <td> Actions</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book => 
                                <tr key = {book.bookId}>
                                     <td> {book.bookId}</td>   
                                     <td> {book.title}</td>   
                                     <td> {book.author}</td>   
                                     <td> Yes</td>   
                                     <td> {book.publishedDate}</td> 
                                     <td> 
                                         <button onClick={() => this.editBook(book.bookId)} className="btn btn-outline-success">Update</button>
                                         <button onClick={() => this.deleteBook(book.bookId)} className="btn btn-outline-danger" style={{marginLeft: "8px"}} >Delete</button>
                                         <button onClick={() => this.viewBookDetails(book.bookId)} className="btn btn-outline-info" style={{marginLeft: "8px"}} >Details</button>
                                     </td>  
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <div>
                    <button className='btn btn-primary btn-lg btn-block' onClick={this.addBook} > Add Book</button>
                </div>
            </div>
            

        )
    }
}

export default ViewBook