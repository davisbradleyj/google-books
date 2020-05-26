import React, { Component } from "react"
import SearchForm from "../components/SearchForm"
import API from "../utils/API_google"
import CardSearchBook from "../components/CardSearchBook"
import APIsave from "../utils/API_server"


class SearchPage extends Component {

    state = {
        search: "",
        books: [],
        book: {},
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    }

    componentDidMount() {
        this.searchBooks("Harry Potter");
    }

    searchBooks = query => {
        API.searchbook(query)
            .then(res => this.setState({ books: res.data.items, title: "", author: "", description: "", image: "", link: "" }))
            .catch(error => console.log(error))
    }

    handleSearchClick = ev => {
        ev.preventDefault();
        this.searchBooks(this.state.search)
    }

    handleInputChange = event => {
        const value = event.target.value
        this.setState({
            search: value
        })
    }

    handleSaveBtn = (bookIndex) => {
        const books = [...this.state.books]
        const book = books.splice(bookIndex, 1)
        console.log(book[0].volumeInfo.title)
        this.setState({ book: book })
        APIsave.saveBook({
            title: book[0].volumeInfo.title,
            authors: book[0].volumeInfo.authors,
            description: book[0].volumeInfo.description,
            image: book[0].volumeInfo.imageLinks.smallThumbnail,
            link: book[0].volumeInfo.infoLink
        })
    }

    render() {
        return (
            <div className="container pt-3 mt-1">
                <SearchForm change={this.handleInputChange}
                    clicked={this.handleSearchClick}
                    searchValue={this.state.search}
                />
                {this.state.books.length ?
                    (<h1 className="text-center"> See Results of your Book Search </h1>)
                    : (<h1 className="text-center"> Please Enter a Book to Search </h1>)}
                {this.state.books.map((book, id) => {
                    return (
                        <CardSearchBook key={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            body={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            save={() => this.handleSaveBtn(id)} />
                    )
                })}
            </div>
        );
    }
}

export default SearchPage;