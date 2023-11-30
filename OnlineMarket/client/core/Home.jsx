// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardContent, Card } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  showcaseContainer: {
    marginTop: '100px',
    padding: '50px',
    display: 'flex',
    gap: '20px', // Adjust the gap as needed
    maxWidth: '800px', // Adjust the width as needed
    margin: '0 auto', // Center the container horizontally
    outline: '5px solid black',
  },
  squareCard: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px'.
}));

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState ([]);
  const [loading, setLoading] = useState(true);
  
export default function Home() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from an API or database
    const fetchProducts = async () => {
      try {
        const response - await fetch('/api/product');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const maxCards = 3; // Set the maximum number of cards

  return (
    <div className={classes.showcaseContainer}>
      {loading ? (
        <CircularProgress />
      ) : (
        products.slice(0, maxCards).map(product => (
          <Card key={product.id} className={classes.squareCard}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body2">${product.price}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};
