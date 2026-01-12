      <div className="min-h-screen bg-gray-100 py-6 px-48">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
=======
      <div className="min-h-screen bg-gray-100 py-6 px-48">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
=======
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">
        {getPosts.map((post) => (
>>>>>>> 4574e117c33b85d88337ef6b4ace55f764c7dd8a:src/Exercise.jsx
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
