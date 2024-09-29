import { useDispatch } from 'react-redux';
import { getCampById } from '../../redux/campers/operations';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import icons from '../../images/icons.svg';
import {
  Container,
  Categories,
  Option,
  Details,
  LabelEquipment,
  DetailsList,
  OptionRow,
  OptionName,
  Icon
} from './CamperFeatures.styled';

export default function Campervan() {
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

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    engine,
    kitchen,
    AC,
  } = campInfo;

  const details = [
    { name: 'Form', value: form },
    { name: 'Length', value: length },
    { name: 'Width', value: width },
    { name: 'Height', value: height },
    { name: 'Tank', value: tank },
    { name: 'Consumption', value: consumption },
  ];

  const categories = [
    { name: 'AC', value: AC, icon: '#icon-wind' },
    { name: 'Transmission', value: transmission, icon: '#icon-diagram' },
    { name: 'Kitchen', value: kitchen, icon: '#icon-cup' },
    { name: 'TV', value: TV, icon: '#icon-tv' },
    { name: 'Bathroom', value: bathroom, icon: '#icon-droplet' },
    { name: 'Radio', value: radio, icon: '#icon-radio' },
    { name: 'Refrigerator', value: refrigerator, icon: '#icon-frigo' },
    { name: 'Microwave', value: microwave, icon: '#icon-microwave' },
    { name: 'Gas', value: gas, icon: '#icon-engine' },
    { name: 'Water', value: water, icon: '#icon-water' },
    { name: 'Engine', value: engine, icon: '#icon-engine' },
  ];

  const activeCategories = categories.filter((category) => category.value);

  return (
    <Container>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <Categories>
        {activeCategories.map((option) => (
          <Option key={option.name}>
            <Icon width="32" height="32">
              <use xlinkHref={`${icons}${option.icon}`}></use>
            </Icon>
            {option.name}
          </Option>
        ))}
      </Categories>
      <Details>
        <LabelEquipment>Vehicle details</LabelEquipment>
        <DetailsList>
          {details.map((info) => (
            <OptionRow key={info.name}>
              <OptionName>{info.name}</OptionName>
              <OptionName>{info.value}</OptionName>
            </OptionRow>
          ))}
        </DetailsList>
      </Details>
    </Container>
  );
}
