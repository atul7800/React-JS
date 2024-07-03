import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        className="text-cebter"
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;
