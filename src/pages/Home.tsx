import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count1 is {count} {import.meta.env.VITE_PUBLIC_URL}
      </button>
      <br />
      <a href="..">Up</a>
    </div>
  );
};
export default Home;
