
function ProductList() {
    const products = [
        {
        id: 1,
        name: "Pink Drink",
        description: "A refreshing blend of strawberry açaí, coconut milk, and real strawberry pieces.",
        price: 5.45,
        },
        {
        id: 2,
        name: "Iced Dubai Chocolate Matcha",
        description: "Vibrant matcha shaken with rich chocolate and ice for a bold, luxe flavor.",
        price: 6.25,
        },
        {
        id: 3,
        name: "Mocha Cookie Crumble Frappuccino",
        description: "Mocha + cookies + whipped cream = dessert in a cup. A Starbucks classic.",
        price: 6.75,
        },

        // edge cases
        { 
            id: 4,
            name: "Cold Brew",
            description: "", 
            price: 4.25,
        },
        { 
            id: 5,
            name: "Dragon Drink", 
            description: "Sweet mango and dragonfruit flavors.", 
            price: null, 
        },
        {
            id: 6,
            name: "Venti Iced Brown Sugar Oatmilk Shaken Espresso With Extra Cinnamon and Light Ice",
            description: "A long, dramatic Starbucks order.",
            price: 7.15,
        },
    ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Starbucks Drinks</h1>

      <div style={styles.list}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>
                {product.price !== null ? `$${product.price.toFixed(2)}` : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    
  },
  heading: {
    marginBottom: "4rem",
  },
  list: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#fff8fb", 
  },
  name: {
    margin: "0 0 0.5rem 0",
    color: "#333",
    paddingBottom: "1rem",
  },
  description: {
    margin: "0 0 0.5rem 0",
    color: "#555",
  },
  price: {
    fontWeight: "bold",
  },
};

export default ProductList;