// import PropTypes from "prop-types";
import { Div, Label, Input } from "./Filter.styled";
import { setStatusFilter } from 'Redux/filtersSlice';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "Redux/selectors"; 

export const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFilter);

    // const handleChangeFilter = ({ currentTarget: { value } }) => {
    //     const normalizedValue = value.toLowerCase().trim();
    //     dispatch(setStatusFilter(normalizedValue));
    //   };

        return (
            <Div>
                <Label>Find contacts by name
                    <Input
                    type="name"
                    value={filter}
                    onChange={e => dispatch(setStatusFilter(e.currentTarget.value))} 
                    />
                </Label>
            </Div>
        )
}

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }