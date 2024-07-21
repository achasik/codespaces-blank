import { Container } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <br />
      <a href="..">Up</a>
    </Container>
  );
};
export default Home;
