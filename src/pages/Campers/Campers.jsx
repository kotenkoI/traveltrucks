import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/campers/operations';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom'; 
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import icons from '../../images/icons.svg';
import {
  Container,
  MainInfo,
  Name,
  Price,
  SecInfo,
  SecInfoWrapper,
  PriceText,
  LocationText,
  Gallery,
  GalleryItem,
  Description,
  NavList,
  StyledNavLink,
} from './Campers.styled.js';

export default function Campers() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [campInfo, setCampInfo] = useState({});
  const { id: campId } = useParams();

  const {
    name = 'Camp', 
    price = 0,
    rating = 0,
    location = 'Unknown',
    reviews = [],
    description = 'No description available',
    gallery = [],
  } = campInfo;

  useEffect(() => {
    async function getCamp() {
      try {
        setLoader(true);
        const data = await dispatch(getCampById(campId));
        console.log('Fetched camp data:', data); 
        if (data && data.payload) {
          setCampInfo(data.payload);
        } else {
          setError('Не удалось загрузить данные о лагере.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }
    getCamp();
  }, [dispatch, campId]);

  return (
    <Container>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}

      <MainInfo>
        <Name>{name}</Name>
        <SecInfo>
          <SecInfoWrapper>
            <svg width="16" height="16">
              <use xlinkHref={`${icons}#icon-starPressed`}></use>
            </svg>
            <PriceText>
              {rating} ({reviews.length} Reviews)
            </PriceText>
          </SecInfoWrapper>
          <SecInfoWrapper>
            <svg width="16" height="16">
              <use xlinkHref={`${icons}#iconMap`}></use>
            </svg>
            <LocationText>{location}</LocationText>
          </SecInfoWrapper>
        </SecInfo>
        <Price>€{price}.00</Price>
      </MainInfo>

      <Gallery>
        {gallery.map((image, index) => (
          <GalleryItem key={index}>
            {image.original ? (
              <img src={image.original} alt={`Image of ${name || 'camp'}, gallery item ${index + 1}`} />
            ) : (
              <p>Image not available</p>
            )}
          </GalleryItem>
        ))}
      </Gallery>
      
      <Description>{description}</Description>
      <NavList>
        <li>
          <StyledNavLink to='features'>Features</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='reviews'>Reviews</StyledNavLink>
        </li>
      </NavList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
