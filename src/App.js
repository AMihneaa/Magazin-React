const App = () => {
  const categories = [
    {
      id: 0,
      title: "Hats",
    },
    {
      id: 1,
      title: "Jackets",
    },
    {
      id: 2,
      title: "Sneakers",
    },
    {
      id: 3,
      title: "Women",
    },
    {
      id: 4,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      <div className="category-contaier">
        {categories.map(({ id, title }) => (
          <div key={id}>
            <img src="" alt="imagine" />
            <div>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
