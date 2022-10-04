import React, { useState } from 'react';
import Axios from 'axios';
import $ from 'jquery';
import { useHistory } from "react-router-dom";

function AddBook() {
    const url = "http://localhost:1111/books/create-book"
    const [data, setData] = useState({
        title: "",
        author: "",
        available: "true",
        publishedDate: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            author: data.author,
            available: data.available,
            publishedDate: data.publishedDate

        })
            .then(res => {
                alert('Book Added');
                let path = `/viewbook`; 
                history.push(path);
                window.location.reload();
            })
           
            
    }
    const history = useHistory();
  
    const goBack = () =>{ 
        let path = `/viewbook`; 
        history.push(path);
        window.location.reload();
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        
    }
           


    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">

                        <div className="card-body">
                        <form onSubmit={(e) => submit(e)}  >
                                <div className="form-group">
                                    <label> Book Name: </label>
                                    <input onChange={(e) => handle(e)} type="text" id="title" value={data.title} className="form-control mb-4" placeholder="Book Title" />
                                </div>
                                <div className="form-group">
                                    <label> Author Name: </label>
                                    <input onChange={(e) => handle(e)} type="text" id="author" value={data.author} className="form-control mb-4" placeholder="Author Name" />
                                </div>
                                <div className="form-group">
                                    <label> Date of Publish: </label>
                                    <input onChange={(e) => handle(e)} type="date" id="publishedDate" value={data.publishedDate} className="form-control mb-4" placeholder="Date of Publish" />
                                </div>

                                <button className="btn btn-info btn-block my-4" type="submit" >Add Book</button>
                                <button className="btn btn-danger btn-block my-4" onClick={goBack} style={{marginLeft: "2em"}}>Go Back</button>
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>





    );

}
export default AddBook;
