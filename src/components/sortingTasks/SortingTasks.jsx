/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import SortIcon from '@mui/icons-material/Sort';
import { SortingTodos } from "../../actions";
import { selectLoaderState } from "../../selectors";

function SortTasksAlphabetically() {
    const dispatch = useDispatch();
  const loader = useSelector(selectLoaderState)


    return (
        <button disabled={loader.loaderSort} onClick={() => dispatch(SortingTodos())}>
            <SortIcon />
        </button>
    )
}

export default SortTasksAlphabetically