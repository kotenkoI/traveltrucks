import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  IconMap,
  LocationLabel,
  LocationInput,
  InputWrapper,
  SpanFilter,
  LabelEquipment,
  CheckboxGroup,
  CheckboxLabel,
  Checkbox,
  CustomCheckbox,
  SubmitButton,
} from './FilterForm.styled.js';
import icons from '../../images/icons.svg';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { changeBody, changeFilter, changeOption } from '../../redux/filters/slice';
import { selectBodyTypes, selectFilterName, selectOptionFilters } from '../../redux/filters/selectors';

const locationId = nanoid();
const equipmentValues = [
  { name: 'AC', icon: '#icon-wind' },
  { name: 'Automatic', icon: '#icon-diagram' },
  { name: 'Kitchen', icon: '#icon-cup' },
  { name: 'TV', icon: '#icon-tv' },
  { name: 'Bathroom', icon: '#icon-droplet' },
];
const bodyTypeValues = [
  { name: 'Van', icon: '#icon-grid3' },
  { name: 'Fully', icon: '#icon-grid4' },
  { name: 'Alcove', icon: '#icon-grid9' },
];

const Schema = Yup.object().shape({
  location: Yup.string(),
  equipment: Yup.object().shape({
    AC: Yup.boolean(),
    Automatic: Yup.boolean(),
    Kitchen: Yup.boolean(),
    TV: Yup.boolean(),
    Bathroom: Yup.boolean(),
  }),
  body: Yup.object().shape({
    van: Yup.boolean(),
    fully: Yup.boolean(),
    alcove: Yup.boolean(),
  }),
});

export default function FilterForm() {
  const dispatch = useDispatch();
  const location = useSelector(selectFilterName);
  const equipment = useSelector(selectOptionFilters);
  const body = useSelector(selectBodyTypes);

  return (
    <Formik
      initialValues={{
        location: location,
        equipment: equipment,
        body: body,
      }}
      validationSchema={Schema}
      onSubmit={(values, { resetForm }) => {
        dispatch(changeFilter(values.location));
        dispatch(changeOption(values.equipment));
        dispatch(changeBody(values.body));
        resetForm();
      }}
    >
      <FormContainer as={Form}>
        <LocationLabel htmlFor={locationId}>Location</LocationLabel>
        <InputWrapper>
          <IconMap>
            <use xlinkHref={`${icons}#iconMap`}></use>
          </IconMap>
          <Field
            as={LocationInput}
            type="text"
            name="location"
            placeholder="City"
            id={locationId}
          />
        </InputWrapper>
        <SpanFilter>Filters</SpanFilter>
        <LabelEquipment>Vehicle Equipment</LabelEquipment>
        <CheckboxGroup>
          {equipmentValues.map((obj) => (
            <CheckboxLabel key={obj.name}>
              <Field
                as={Checkbox}
                type="checkbox"
                name={`equipment.${obj.name}`}
              />
              <CustomCheckbox>
                <svg width="32" height="32">
                  <use xlinkHref={`${icons}${obj.icon}`}></use>
                </svg>
                {obj.name}
              </CustomCheckbox>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>

        <LabelEquipment>Vehicle Body Type</LabelEquipment>
        <CheckboxGroup>
          {bodyTypeValues.map((obj) => (
            <CheckboxLabel key={obj.name}>
              <Field
                as={Checkbox}
                type="checkbox"
                name={`body.${obj.name}`}
              />
              <CustomCheckbox>
                <svg width="32" height="32">
                  <use xlinkHref={`${icons}${obj.icon}`}></use>
                </svg>
                {obj.name}
              </CustomCheckbox>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Formik>
  );
}
