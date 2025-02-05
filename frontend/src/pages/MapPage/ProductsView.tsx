import React from "react";
import { Card, Container, Col } from "react-bootstrap";
import { Filter, Event } from './MapPage';

export type ProductsViewProps = {
  filteredProducts: Event[];
  filters: Filter;
};
  
const ProductsView: React.FC<ProductsViewProps> = ({ filteredProducts }) => {
  return (
    <Container
    fluid
    className="d-flex flex-wrap justify-content-center"
    style={{
      marginTop: "20px",
      marginBottom: "20px",
      paddingBottom: "40px",
      color: 'black',
    }}
    >
      {filteredProducts.map((product) => (
          <Card 
            key={product.id}
            className="product-card m-3"
            style={{
              width: "500px",
              padding: "20px",
            }}
            >
              <Card.Body className="d-flex flex-column align-items-center"
                style={{
                padding: "10px",
                justifyContent: "space-between",
                }}
              >
                <Card.Img
                  variant="left"
                  src={product.title}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Title className="mt-3">
                  {product.title}
                </Card.Title>
                <Card.Text>
                  Информация о событии
                </Card.Text>
              </Card.Body>
          </Card>
      ))}
    </Container>
  );
};
        
export default ProductsView;

