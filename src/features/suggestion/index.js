///checked
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading,
  // Task 18: Import the `selectSuggestion()` done
  selectSuggestion
} from './suggestion.slice';
import './suggestion.css';

export default function Suggestion() {
  // Task 19: 
  const { imageUrl, caption } = useSelector(selectSuggestion);
  console.log('image', imageUrl);
  // The component needs to access the `imageUrl` and `caption`  done
  const loading = useSelector(selectLoading);
  console.log('loading', loading);
  const error = useSelector(selectError);
  console.log('error', error);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadSuggestion() {
       dispatch(fetchSuggestion());
    }
    loadSuggestion();
  }, [dispatch]);


  let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  } else if (error) {
    render = <h3> Sorry, we're having trouble loading the suggestion.</h3>;
  } else {
     render = (
      <>
        <img alt={caption} src={imageUrl} />
        <p>{caption}</p>
      </>
    );
  }

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
