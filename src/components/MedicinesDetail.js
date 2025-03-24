// src/components/MedicineDetail.js
import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button, Container, Spinner } from 'react-bootstrap';

class MedicineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicine: null,
      loading: true,
      error: null,
    };
  }

  // Gọi API lấy chi tiết thuốc khi component được render
  componentDidMount() {
    const { id } = this.props.params; // Lấy id từ URL
    this.fetchMedicineDetail(id);
  }

  // Hàm gọi API lấy chi tiết thuốc
  fetchMedicineDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9999/api/medicine/${id}`);
      this.setState({ medicine: response.data.data, loading: false });
    } catch (error) {
      console.error('Error fetching medicine details:', error);
      this.setState({
        loading: false,
        error: 'Không thể tải thông tin thuốc.',
      });
    }
  };

  render() {
    const { medicine, loading, error } = this.state;
    const { navigate } = this.props;

    // Hiển thị loading khi đang lấy dữ liệu
    if (loading) {
      return (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p>Đang tải thông tin thuốc...</p>
        </div>
      );
    }

    // Hiển thị lỗi nếu có
    if (error) {
      return (
        <div className="text-center mt-5">
          <p className="text-danger">{error}</p>
          <Button variant="outline-secondary" onClick={() => navigate('/')}>
            Quay lại danh sách
          </Button>
        </div>
      );
    }

    return (
      <>
        <Header />
        <Container className="mt-4">
          <h2>{medicine.name}</h2>
          <img
            src={`https://via.placeholder.com/600?text=${medicine.name}`}
            alt={medicine.name}
            style={{ width: '100%', maxWidth: '600px' }}
          />
          <p>
            <strong>Danh mục:</strong> {medicine.category}
          </p>
          <p>
            <strong>Giá:</strong> ${medicine.price}
          </p>
          <p>
            <strong>Mô tả:</strong> {medicine.description || 'Chưa có mô tả.'}
          </p>

          {/* Nút quay lại danh sách */}
          <Button variant="outline-secondary" onClick={() => navigate('/')}>
            Quay lại danh sách
          </Button>
        </Container>
        <Footer />
      </>
    );
  }
}

// Hàm HOC để truyền hook vào component class
const withRouter = (Component) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <Component {...props} params={params} navigate={navigate} />;
};

export default withRouter(MedicineDetail);
