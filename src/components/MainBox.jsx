import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RenderOnRole from "./RenderOnRole";
import Buttons from "./Buttons";

const MainBox = () => (
  <>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<Buttons/>}/>
      <Route path="/secret" element={
        <RenderOnRole roles={['admin']} showNotAllowed>
        </RenderOnRole>
      }/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </>
)

export default MainBox
