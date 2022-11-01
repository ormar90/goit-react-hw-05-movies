import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieRewievs } from "services/API";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsDetails, setReviewDetails] = useState([]);

    useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getMovieRewievs(movieId);

        setReviewDetails(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {reviewsDetails.length > 0 && (
        reviewsDetails.map((item) => {
          return (
            <li key={item.id}>
              <p><b>Author:</b> {`${item.author}`}</p>
              <p>{item.content}</p>
            </li>
          );
        })
      )}
      
    </div>
  );
};