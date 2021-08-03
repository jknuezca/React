import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID xfiNZQdZlJT0weo8ebjSzhBzDF-ZqsquuayeO4A4bqc'
    }
});