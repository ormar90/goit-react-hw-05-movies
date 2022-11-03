import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

const Cast = () => {
  const [castArrey, setCastArrey] = useState([]);
  const { movieId } = useParams();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchCredit = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);

        setCastArrey(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCredit();
  }, [movieId]);

  return (
    <div>
      <ul>
        {castArrey.map((item) => {
          return (
            <li key={item.cast_id}>
              <img src={`${IMG_URL}${item.profile_path}`} alt="" width="120" />
              <p>
                <b>Name:</b> {`${item.name}`}
              </p>
              <p>
                <b>Character:</b> {`${item.character}`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
