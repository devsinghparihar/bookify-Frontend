import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:1111/books/book-list';
const baseURL = 'http://localhost:1111/books';

class ViewBookService {

    getBooks(){
        return axios.get(USERS_REST_API_URL);
    }
    getBookById(bookId){
        return axios.get(USERS_REST_API_URL  + '/' + bookId );
    }
    updateBook(book, bookId){
        return axios.put(baseURL +'/'+'update-book'+'/'+bookId,book);
    }
    deleteBook(bookId){
        return axios.delete(baseURL +'/'+'delete-book'+'/'+bookId);
    }
}

export default new ViewBookService();