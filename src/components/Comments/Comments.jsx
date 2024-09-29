import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/campers/operations';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import icons from '../../images/icons.svg';
import {
  Container,
  ListItem,
  MainInfo,
  Avatar,
  NameRating,
  Name,
  Stars,
  Icon,
  Comment,
} from './Comments.styled';

export default function Comments() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [campInfo, setCampInfo] = useState({});
  const { id: campId } = useParams();

  useEffect(() => {
    async function getCamp() {
      try {
        setLoader(true);
        const data = await dispatch(getCampById(campId));
        setCampInfo(data.payload);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }
    getCamp();
  }, [dispatch, campId]);

  const { reviews = [] } = campInfo;

  return (
    <Container>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {reviews.map((review) => (
        <ListItem key={review.reviewer_name}>
          <MainInfo>
            <Avatar>{review.reviewer_name[0]}</Avatar>
            <NameRating>
              <Name>{review.reviewer_name}</Name>
              <Stars>
                {Array.from({ length: 5 }).map((num, index) => (
                  <Icon key={index} width="16" height="16">
                    <use
                      xlinkHref={
                        index < review.reviewer_rating
                          ? `${icons}#icon-starPressed`
                          : `${icons}#icon-star`
                      }
                    ></use>
                  </Icon>
                ))}
              </Stars>
            </NameRating>
          </MainInfo>
          <Comment>{review.comment}</Comment>
        </ListItem>
      ))}
    </Container>
  );
}
