import React from 'react';

const styles = `
/* From Uiverse.io by joe-watson-sbf */
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.search__input {
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 320px;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
}

/* From Uiverse.io by joe-watson-sbf */
.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

/* From Uiverse.io by joe-watson-sbf */
.search__input:focus {
  outline: none;
  background-color: #f0eeee;
}

/* From Uiverse.io by joe-watson-sbf */
.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #ccc;
}

/* From Uiverse.io by joe-watson-sbf */
.search__input:focus + .search__button {
  background-color: #f0eeee;
}

/* From Uiverse.io by joe-watson-sbf */
.search__button {
  border: none;
  background-color: #f4f2f2;
  margin-top: .1em;
}

/* From Uiverse.io by joe-watson-sbf */
.search__button:hover {
  cursor: pointer;
}

/* From Uiverse.io by joe-watson-sbf */
.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
}
`;

const SearchComponent = () => {
  return (
    <div className='ml-5'>
      <style>
        {styles}
      </style>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Type your text"
        />
        <button className="search__button">
          <svg
            className="search__icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
