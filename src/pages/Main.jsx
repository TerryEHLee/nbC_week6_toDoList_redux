import React from "react";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";
import Footer from "../redux/components/Footer";

function Main() {
  return (
    <div>
      {/* <Header /> */}
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </div>
  );
}

export default Main;
