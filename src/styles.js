/* Libraries */
import styled from "styled-components";
/* React Icon */
import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineUndo } from 'react-icons/ai';
import { FcHighPriority } from 'react-icons/fc'

/* Start App  */
export const HeadTitle = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
`;
/* End App  */

/* Start ToDoItem Components */
export const CompleteTask = styled(AiOutlineCheckCircle)`
  color: aquamarine;
  font-size: 20px;
`;
export const DeleteTask = styled(AiOutlineDelete)`
  font-size: 20px;
  color: red
`;
export const UndoTask = styled(AiOutlineUndo)`
  font-size: 20px;
  color: green
`;
export const HighTask = styled(FcHighPriority)`
  
`;
export const SelectPri = styled.select`
  width: 30%;
`;
/* End ToDoItem Components */