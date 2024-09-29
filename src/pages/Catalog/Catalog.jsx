import SideBar from '../../components/SideBar/SideBar.jsx';
import CampList from '../../components/CamperList/CamperList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCamps } from '../../redux/campers/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import { selectLoading } from '../../redux/campers/selectors.js';
import { Container } from './Catalog.styled.js';

export default function Catalog() {
  const [loader, setLoader] = useState(useSelector(selectLoading));
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setLoader(true);
      dispatch(getCamps());
      setLoader(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  }, [dispatch]);

  return (
    <Container>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <SideBar />
      <CampList />
    </Container>
  );
}
