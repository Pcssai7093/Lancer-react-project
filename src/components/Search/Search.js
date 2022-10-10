import styles from "./Search.module.css";
// * implement service fetching here and next service display component inside this so that
// * data can be easily filtered
function Search() {
  return (
    <div>
      <div className={styles.searchBarDiv}>
        <form action="">
          <input id={styles.searchBar} type="text" placeholder="Search" />
          <select name="" className={styles.filter}>
            <option value="" selected hidden>
              Filter
            </option>
            <option value="">Price:Low to High</option>
            <option value="">Price:High to Low</option>
            <option value="">Recently uploaded</option>
          </select>
          <input type="reset" value="Clear" className={styles.clear} />
        </form>
      </div>
    </div>
  );
}

export default Search;
