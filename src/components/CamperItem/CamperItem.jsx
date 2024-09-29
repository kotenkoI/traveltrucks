import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavs } from '../../redux/favorites/selectors';
import {
  Container,
  ContentSide,
  Img,
  MainInfo,
  MainInfoWrapper,
  Price,
  Name,
  SecInfo,
  SecInfoWrapper,
  Text,
  Description,
  Categories,
  Option,
  Btn,
  LinkButton,
  IconFav,
  Icon,
} from './CamperItem.styled';

const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FeaturesList = ({ features }) => {
  return (
    <Categories>
      {features.map(({ name, icon }, index) => (
        <Option key={`${icon}-${index}`}>
          <Icon width="32" height="32">
            <use xlinkHref={`${icons}${icon}`} />
          </Icon>
          {name}
        </Option>
      ))}
    </Categories>
  );
};

export default function CampItem({ camp }) {
  const {
    name,
    id,
    price,
    rating,
    location,
    reviews,
    description,
    gallery,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camp;

  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavs);
  const isFavorite = favoriteList.some((item) => item.id === id);
  const mainImagePath = gallery[0]?.thumb || '';

  const features = [
    { name: 'AC', value: AC, icon: '#icon-wind' },
    { name: transmission === 'automatic' ? 'Automatic' : 'Manual', value: transmission, icon: '#icon-diagram' },
    { name: 'Kitchen', value: kitchen, icon: '#icon-cup' },
    { name: 'TV', value: TV, icon: '#icon-tv' },
    { name: 'Bathroom', value: bathroom, icon: '#icon-droplet' },
    { name: 'Radio', value: radio, icon: '#icon-radio' },
    { name: 'Refrigerator', value: refrigerator, icon: '#icon-frigo' },
    { name: 'Microwave', value: microwave, icon: '#icon-microwave' },
    { name: 'Gas', value: gas, icon: '#icon-engine' },
    { name: 'Water', value: water, icon: '#icon-water' },
    { name: capitalizeFirstLetter(engine), value: engine, icon: '#icon-engine' },
  ];

  const activeFeatures = features.filter(({ value }) => value);

  const toggleFavoriteStatus = (event) => {
    event.preventDefault();
    dispatch(isFavorite ? removeFavorite({ id }) : addFavorite(camp));
  };

  return (
    <Container>
      <Img src={mainImagePath} alt={name} />
      <ContentSide>
        <MainInfo>
          <Name>{name}</Name>
          <MainInfoWrapper>
            <Price>€{price}.00</Price>
            <IconFav onClick={toggleFavoriteStatus} width="26" height="24">
              <use xlinkHref={`${icons}${isFavorite ? '#icon-favPressed' : '#icon-fav'}`} />
            </IconFav>
          </MainInfoWrapper>
        </MainInfo>
        <SecInfo>
          <SecInfoWrapper>
            <Icon width="16" height="16">
              <use xlinkHref={`${icons}#icon-starPressed`} />
            </Icon>
            <Text>
              {rating} ({reviews.length} Reviews)
            </Text>
          </SecInfoWrapper>
          <SecInfoWrapper>
            <Icon width="16" height="16">
              <use xlinkHref={`${icons}#iconMap`} />
            </Icon>
            <Text>{location}</Text>
          </SecInfoWrapper>
        </SecInfo>
        <Description>{`${description.split(' ').slice(0, 10).join(' ')}...`}</Description>
        <FeaturesList features={activeFeatures} />
        <LinkButton as="a" href={`/catalog/${id}`} target="_blank" rel="noopener noreferrer">
          <Btn>Show More</Btn>
        </LinkButton>
      </ContentSide>
    </Container>
  );
}

CampItem.propTypes = {
  camp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_name: PropTypes.string.isRequired,
        reviewer_rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    AC: PropTypes.bool,
    bathroom: PropTypes.bool,
    kitchen: PropTypes.bool,
    TV: PropTypes.bool,
    radio: PropTypes.bool,
    refrigerator: PropTypes.bool,
    microwave: PropTypes.bool,
    gas: PropTypes.bool,
    water: PropTypes.bool,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string.isRequired,
        original: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};
