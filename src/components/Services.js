// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    { title: 'Khám bệnh chuyên sâu', description: 'Đội ngũ bác sĩ chuyên môn cao, tận tâm.', icon: '🩺' },
    { title: 'Mua thuốc trực tuyến', description: 'Dễ dàng đặt mua thuốc từ nhà.', icon: '💊' },
    { title: 'Bảo hiểm sức khỏe', description: 'Các gói bảo hiểm phù hợp với mọi nhu cầu.', icon: '🛡️' },
    { title: 'Dịch vụ cấp cứu', description: 'Hỗ trợ 24/7 với xe cứu thương hiện đại.', icon: '🚑' },
  ];

  return (
    <section className="services">
      <h2>Dịch vụ nổi bật</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;