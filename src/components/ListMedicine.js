// // // src/components/ListMedicine.js
// // import React, { Component } from 'react';
// // import axios from 'axios';
// // import Header from './Header';
// // import Footer from './Footer';
// // import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // class ListMedicine extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       medicines: [],
// //       searchTerm: '',
// //     };
// //   }

// //   // Gọi API khi component được render
// //   componentDidMount() {
// //     this.fetchMedicines();
// //   }

// //   fetchMedicines = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:9999/api/medicine');
// //       this.setState({ medicines: response.data.data });
// //     } catch (error) {
// //       console.error('Error fetching medicines:', error);
// //     }
// //   };

// //   handleSearchChange = (e) => {
// //     this.setState({ searchTerm: e.target.value });
// //   };

// //   render() {
// //     const { medicines, searchTerm } = this.state;
// //     const filteredMedicines = medicines.filter((medicine) =>
// //       medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //       <>
// //         {/* Header */}
// //         <Header />

// //         {/* Hero Section */}
// //         <div className="p-5 text-center bg-light">
// //           <h1>Discover Health Essentials</h1>
// //           <p>Your one-stop shop for quality medical supplies and wellness products.</p>
// //           <Button variant="success">Shop Now</Button>
// //         </div>

// //         {/* Danh sách thuốc */}
// //         <Container className="mt-4">
// //           <Row>
// //             {filteredMedicines.map((medicine) => (
// //               <Col key={medicine.id} sm={6} md={4} lg={3} className="mb-4">
// //                 <Card>
// //                   <Card.Img
// //                     variant="top"
// //                     src={`https://via.placeholder.com/300?text=${medicine.name}`}
// //                   />
// //                   <Card.Body>
// //                     <Card.Title>{medicine.name}</Card.Title>
// //                     <Card.Text>{medicine.category}</Card.Text>
// //                     <Card.Text>Price: ${medicine.price}</Card.Text>
// //                     <Button variant="outline-success">Add to Cart</Button>
// //                   </Card.Body>
// //                 </Card>
// //               </Col>
// //             ))}
// //           </Row>
// //         </Container>

// //         {/* Footer */}
// //         <Footer />
// //       </>
// //     );
// //   }
// // }

// // export default ListMedicine;


// // src/components/ListMedicine.js
// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class ListMedicine extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       medicines: [],
//       searchTerm: '',
//     };
//   }

//   // Gọi API lấy danh sách thuốc khi component được render
//   componentDidMount() {
//     this.fetchMedicines();
//   }

//   fetchMedicines = async () => {
//     try {
//       const response = await axios.get('http://localhost:9999/api/medicine');
//       this.setState({ medicines: response.data.data });
//     } catch (error) {
//       console.error('Error fetching medicines:', error);
//     }
//   };

//   handleSearchChange = (e) => {
//     this.setState({ searchTerm: e.target.value });
//   };

//   render() {
//     const { medicines, searchTerm } = this.state;
//     const filteredMedicines = medicines.filter((medicine) =>
//       medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//       <>
//         <Header />

//         <div className="p-5 text-center bg-light">
//           <h1>Discover Health Essentials</h1>
//           <p>Your one-stop shop for quality medical supplies and wellness products.</p>
//           <Button variant="success">Shop Now</Button>
//         </div>

//         <Container className="mt-4">
//           <Row>
//             {filteredMedicines.map((medicine) => (
//               <Col key={medicine.id} sm={6} md={4} lg={3} className="mb-4">
//                 <Card>
//                   <Card.Img
//                     variant="top"
//                     src={`https://via.placeholder.com/300?text=${medicine.name}`}
//                   />
//                   <Card.Body>
//                     <Card.Title>{medicine.name}</Card.Title>
//                     <Card.Text>{medicine.category}</Card.Text>
//                     <Card.Text>Price: ${medicine.price}</Card.Text>

//                     {/* Link tới trang chi tiết */}
//                     <Link to={`/medicine/${medicine.id}`}>
//                       <Button variant="outline-success">Xem Chi Tiết</Button>
//                     </Link>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         <Footer />
//       </>
//     );
//   }
// }

// export default ListMedicine;


// src/components/ListMedicine.js
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListMedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      searchTerm: '',
    };
  }

  // Gọi API khi component được render
  componentDidMount() {
    this.fetchMedicines();
  }

  fetchMedicines = async () => {
    try {
      const response = await axios.get('http://localhost:9999/api/medicine');
      this.setState({ medicines: response.data.data });
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { medicines, searchTerm } = this.state;

    // Lọc thuốc theo tên
    const filteredMedicines = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        {/* Header */}
        <Header />

       
        {/* Ô tìm kiếm */}
        <Container className="mt-4">
          <Form.Group className="mb-4 search-bar">
            <Form.Control
              type="text"
              placeholder="Tìm kiếm thuốc..."
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
          </Form.Group>

          {/* Danh sách thuốc */}
          <Row>
            {filteredMedicines.length === 0 ? (
              <p>Không tìm thấy kết quả nào!</p>
            ) : (
              filteredMedicines.map((medicine) => (
                <Col key={medicine.id} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://via.placeholder.com/300?text=${medicine.name}`}
                    />
                    <Card.Body>
                      <Card.Title>{medicine.name}</Card.Title>
                      <Card.Text>{medicine.category}</Card.Text>
                      <Card.Text>Price: ${medicine.price}</Card.Text>
                      <Link to={`/medicine/${medicine.id}`}>
                        <Button variant="outline-success">Xem chi tiết</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>

        {/* Footer */}
        <Footer />
      </>
    );
  }
}

export default ListMedicine;
