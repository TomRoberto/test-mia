import { useState } from "react";

const Pagination = ({ setSkip, skip, data }) => {
  const [num, setNum] = useState(1);

  return (
    <>
      {data.map((elem, index) => {
        console.log(elem.count);
        return (
          <div key={index} className="pagination">
            {skip > 0 && (
              <button
                onClick={() => {
                  setNum(num - 1);
                  setSkip(skip - elem.limit);
                }}
              >
                Page précédent
              </button>
            )}

            <div>
              <h1>
                {num} / {Math.ceil(elem.count / elem.limit)}
              </h1>
            </div>

            <p>
              <button
                onClick={() => {
                  setNum(num + 1);
                  setSkip(skip + elem.limit);
                }}
              >
                Page suivant
              </button>
            </p>
            <p></p>
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
