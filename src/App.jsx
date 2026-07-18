import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import BooksPage from "./BooksPage/BooksPage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import BookDetails from "./BooksPage/BookDetails";
import Error404 from "./Error404";
import Account from "./auth/Account";


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<BooksPage/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="account" element={<Account />} />
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="*" element={<Error404/>}/>
      </Route>
    </Routes>
  );
}

export default App;
