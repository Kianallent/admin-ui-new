<<<<<<< HEAD:src/latihan/PostCard.jsx
import React, { useState } from 'react'
=======
import React, {useState} from "react";
>>>>>>> 4574e117c33b85d88337ef6b4ace55f764c7dd8a:src/PostCard.jsx

function PostCard (props) {
    const { id, userId, title, body } = props;
    const [clicked, setClicked] = useState(false);

    return (
        <div className="bg-white hover:bg-red-50 p-6 rounded-lg shadow hover:shadow-lg hover:border transition-shadow text-center flex flex-col justify-between hover:scale-105">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
            {title}
          </h2>
          <p className="text-gray-600">{body}</p>
        </div>
  
        <button
        className={`text-white p-2 rounded-md mt-2 
<<<<<<< HEAD:src/latihan/PostCard.jsx
            ${clicked
            ? "bg-red-700 hover:bg-special-red "
            : "bg-gray-01 hover:bg-gray-02"
          }
=======
            ${
              clicked
                ? "bg-red-700 hover:bg-special-red "
                : "bg-gray-01 hover:bg-gray-02"
            }
>>>>>>> 4574e117c33b85d88337ef6b4ace55f764c7dd8a:src/PostCard.jsx
          `}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
<<<<<<< HEAD:src/latihan/PostCard.jsx
    </div>
  )
}

export default PostCard
=======
      </div>
    );
}

export default PostCard;
>>>>>>> 4574e117c33b85d88337ef6b4ace55f764c7dd8a:src/PostCard.jsx
