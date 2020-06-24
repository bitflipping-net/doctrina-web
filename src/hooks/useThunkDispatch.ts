import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../redux/types";

const useThunkDispatch = () => useDispatch<AppThunkDispatch>();

export default useThunkDispatch;