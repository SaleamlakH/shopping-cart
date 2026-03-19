import { Form } from 'react-router';
import style from './search.module.css';

function Search() {
  return (
    <Form className={style.search} role="search" method="GET" action="/products">
      <select name="category" className={style.select} aria-label="category">
        <option value="">Category</option>;
      </select>

      <input className={style.input} placeholder="Search" type="text" />

      <button className={style['search-btn']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </Form>
  );
}

export default Search;
