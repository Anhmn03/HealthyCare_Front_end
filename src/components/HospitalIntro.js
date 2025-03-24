// src/components/HospitalIntro.js
import React from 'react';

const HospitalIntro = () => {
  return (
    <section className="hospital-intro">
      <div className="intro-content">
        <h1>Chào mừng đến với HealthCare</h1>
        <p>
          Chúng tôi cung cấp các dịch vụ y tế hàng đầu, từ khám bệnh, mua thuốc đến bảo hiểm sức khỏe. Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi!
        </p>
        <button className="cta-btn">Tìm hiểu thêm</button>
      </div>
      <div className="intro-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10Tgu5EclRMe5gEQbjzrd5_WV1tuWEC5miQ&s"
          alt="Hospital"
        />
      </div>
    </section>
  );
};

export default HospitalIntro;